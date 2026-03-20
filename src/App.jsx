import { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header';
import PuzzleBoard from './components/PuzzleBoard';
import DragDropBoard from './components/DragDropBoard';
import JigsawBoard from './components/JigsawBoard';
import Controls from './components/Controls';
import Modal from './components/Modal';
import LandingPage from './components/LandingPage';
import GameGallery from './components/GameGallery';
import CategorySelection from './components/CategorySelection';
import SettingsModal from './components/SettingsModal';
import LazyImage from './components/LazyImage';
import { IMAGES, CATEGORIES, AGE_GROUPS, LS_KEYS, GAME_MODES } from './utils/constants';
import { preloadImageCache } from './utils/imageCache';
import { shuffleTiles, canMove, checkWin } from './utils/puzzleLogic';
import { playMoveSound, playWinSound, playClickSound, playNavSound, playToggleSound, playHintSound, playRestartSound, playHoverSound, playInteractSound, playMouseMoveSound } from './utils/sounds';

function getBestScore(difficulty, gameMode) {
  try {
    const stored = JSON.parse(localStorage.getItem(LS_KEYS.bestScore) || '{}');
    const key = `${difficulty}-${gameMode}`;
    return stored[key] || null;
  } catch {
    return null;
  }
}

function saveBestScore(difficulty, time, gameMode) {
  try {
    const stored = JSON.parse(localStorage.getItem(LS_KEYS.bestScore) || '{}');
    const key = `${difficulty}-${gameMode}`;
    if (!stored[key] || time < stored[key]) {
      stored[key] = time;
      localStorage.setItem(LS_KEYS.bestScore, JSON.stringify(stored));
    }
  } catch {
    // localStorage not available
  }
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 100);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
};

export default function App() {
  const [view, setView] = useState('landing');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [gameMode, setGameMode] = useState(GAME_MODES.SLIDER);
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);
  const [difficulty, setDifficulty] = useState('under_15');
  const gridSize = AGE_GROUPS[difficulty] ? AGE_GROUPS[difficulty].size : 3;

  const defaultHintSettings = {
    under_15: { max: 5, duration: 3 },
    age_16_30: { max: 2, duration: 1 },
    age_30_55: { max: 2, duration: 1 },
    age_55_plus: { max: 3, duration: 2 }
  };

  const [hintSettings, setHintSettings] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('bihar-puzzle-hints'));
      if (stored) {
        // Migration check for old flat structure
        if (typeof Object.values(stored)[0] === 'number') {
          const migrated = {};
          Object.keys(defaultHintSettings).forEach(key => {
            migrated[key] = {
              max: stored[key] !== undefined ? stored[key] : defaultHintSettings[key].max,
              duration: defaultHintSettings[key].duration
            };
          });
          return migrated;
        }
        return stored;
      }
      return defaultHintSettings;
    } catch {
      return defaultHintSettings;
    }
  });

  const [hintsUsed, setHintsUsed] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    localStorage.setItem('bihar-puzzle-hints', JSON.stringify(hintSettings));
  }, [hintSettings]);

  const maxHints = (hintSettings[difficulty] && hintSettings[difficulty].max) || 0;
  const hintDuration = (hintSettings[difficulty] && hintSettings[difficulty].duration) || 1;
  const hintsRemaining = Math.max(0, maxHints - hintsUsed);

  const [tiles, setTiles] = useState(() => shuffleTiles(gridSize, gameMode === GAME_MODES.DRAG_DROP));
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [hintTimer, setHintTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [jigsawKey, setJigsawKey] = useState(0);
  const [bestScore, setBestScore] = useState(() =>
    getBestScore(difficulty, gameMode)
  );

  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Background Image Cache Pre-Warming
  useEffect(() => {
    // Silently pre-cache primary category thumbnails as Base64 in IndexedDB
    const categoryUrls = CATEGORIES.map(cat => cat.image);
    preloadImageCache(categoryUrls);
  }, []);


  // Hint countdown timer effect
  useEffect(() => {
    let interval;
    if (showHint && hintTimer > 0) {
      interval = setInterval(() => {
        setHintTimer(prev => {
          const next = Math.max(0, prev - 0.1);
          if (next <= 0) {
            setShowHint(false);
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [showHint, hintTimer]);

  // Global Cursor Gamification SFX
  useEffect(() => {
    const handleMouseOver = (e) => {
      const clickable = e.target.closest('button, a, input, select, [role="button"], .cursor-pointer');
      if (clickable) {
        playHoverSound();
      }
    };
    const handleMouseDown = () => {
      playInteractSound();
    };
    const handleMouseMove = () => {
      playMouseMoveSound();
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    playToggleSound();
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const timerRef = useRef(null);

  const categoryImages = IMAGES.filter((img) => {
    const isCategory = img.categoryId === selectedCategory;
    const allowed = AGE_GROUPS[difficulty]?.allowedImages || [];
    return isCategory && allowed.includes(img.id);
  });

  useEffect(() => {
    if (isRunning && !hasWon && !isPreviewing) {
      timerRef.current = setInterval(() => {
        setTime((t) => t + 0.01);
      }, 10);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, hasWon, isPreviewing]);

  // Preview timeout
  useEffect(() => {
    if (isPreviewing) {
      const timer = setTimeout(() => {
        setIsPreviewing(false);
        if (gameMode === GAME_MODES.JIGSAW) {
          setIsRunning(true);
        }
      }, 3300);
      return () => clearTimeout(timer);
    }
  }, [isPreviewing, gameMode]);

  // Reset game
  const resetGame = useCallback((activeImage) => {
    clearInterval(timerRef.current);
    const newGridSize = AGE_GROUPS[difficulty] ? AGE_GROUPS[difficulty].size : 3;
    setTiles(shuffleTiles(newGridSize, gameMode === GAME_MODES.DRAG_DROP));
    setMoves(0);
    setTime(0);
    setIsRunning(false);
    setHasWon(false);
    setShowHint(false);
    setHintsUsed(0);
    setJigsawKey(k => k + 1);
  }, [difficulty, gameMode]);

  const handleStartGame = () => {
    playNavSound();
    
    // Logic to ensure "New Puzzle" (image) on every entry
    const allowed = AGE_GROUPS[difficulty].allowedImages;
    let pool = IMAGES.filter(img => img.categoryId === selectedCategory && allowed.includes(img.id));
    if (pool.length === 0) pool = IMAGES.filter(img => allowed.includes(img.id));
    const randomImg = pool[Math.floor(Math.random() * pool.length)] || selectedImage;
    
    setSelectedImage(randomImg);
    resetGame(randomImg); // Pass new image to ensure immediate sync
    
    setIsPreviewing(true);
    setShowModal(false);
    setView('game');
  };

  const handleGoToCategories = () => {
    playNavSound();
    setView('categories');
  };

  const handleCategorySelect = (categoryId) => {
    playClickSound();
    setSelectedCategory(categoryId);
    const catImages = IMAGES.filter(img => img.categoryId === categoryId);
    if (catImages.length > 0) {
      const randomImg = catImages[Math.floor(Math.random() * catImages.length)];
      setSelectedImage(randomImg);
    }
    setView('gallery');
  };

  const handleBackToLanding = () => {
    playNavSound();
    setView('landing');
  };

  const handleBackToCategories = () => {
    playNavSound();
    setView('categories');
  };

  const handleBackToGallery = () => {
    playNavSound();
    setView('gallery');
    resetGame();
  };

  const handleImageChange = useCallback((img) => {
    setSelectedImage(img);
  }, []);

  const pickRandomImage = useCallback((catId, ageId) => {
    const allowed = AGE_GROUPS[ageId].allowedImages;
    let pool = IMAGES.filter(img => img.categoryId === catId && allowed.includes(img.id));
    if (pool.length === 0) {
      pool = IMAGES.filter(img => allowed.includes(img.id));
    }
    if (pool.length > 0) {
      const randomImg = pool[Math.floor(Math.random() * pool.length)];
      setSelectedImage(randomImg);
    }
  }, []);

  const handleDifficultyChange = useCallback((ageGroupId) => {
    setDifficulty(ageGroupId);
    pickRandomImage(selectedCategory, ageGroupId);
  }, [selectedCategory, pickRandomImage]);

  const handleGameModeChange = (mode) => {
    setGameMode(mode);
  };

  // Update best score whenever selection changes
  useEffect(() => {
    setBestScore(getBestScore(difficulty, gameMode));
  }, [difficulty, gameMode]);

  const handleTileClick = useCallback(
    (index) => {
      if (hasWon || isPreviewing) return;

      const emptyValue = gridSize * gridSize - 1;
      const emptyIndex = tiles.indexOf(emptyValue);

      if (!canMove(index, emptyIndex, gridSize)) return;

      if (!isRunning) setIsRunning(true);
      playMoveSound();

      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];

      setTiles(newTiles);
      setMoves((m) => m + 1);

      if (checkWin(newTiles)) {
        handleWin(time);
      }
    },
    [tiles, gridSize, hasWon, isRunning, isPreviewing, time, selectedImage.id]
  );

  const handleSwap = useCallback((srcIndex, targetIndex) => {
    if (hasWon || isPreviewing) return;

    if (!isRunning) setIsRunning(true);
    playMoveSound();

    const newTiles = [...tiles];
    [newTiles[srcIndex], newTiles[targetIndex]] = [newTiles[targetIndex], newTiles[srcIndex]];
    
    setTiles(newTiles);
    setMoves((m) => m + 1);

    if (checkWin(newTiles)) {
      handleWin(time);
    }
  }, [tiles, hasWon, isRunning, isPreviewing, time, selectedImage.id]);

  const handleWin = (finalTime) => {
    setHasWon(true);
    setShowModal(true);
    setIsRunning(false);
    saveBestScore(difficulty, finalTime || time, gameMode);
    // Refresh bestScore from local storage right away
    setBestScore(getBestScore(difficulty, gameMode));
    setTimeout(() => playWinSound(), 300);
  };

  const handleJigsawWin = useCallback(() => {
    if (hasWon) return;
    handleWin(time);
  }, [hasWon, time, selectedImage.id]);

  const handleHint = useCallback((e) => {
    if (e) e.preventDefault();
    if (!showHint) {
      if (hintsRemaining <= 0) return;
      playHintSound();
      setHintsUsed(u => u + 1);
      setHintTimer(hintDuration);
      setShowHint(true);
    } else {
      setShowHint(false);
      setHintTimer(0);
    }
  }, [showHint, hintsRemaining, hintDuration]);

  const handleRestart = useCallback(() => {
    playRestartSound();
    resetGame();
    setIsPreviewing(true);
  }, [playRestartSound, resetGame]);

  const handlePlayAgain = useCallback(() => {
    playRestartSound();
    
    // Pick different image
    const allowed = AGE_GROUPS[difficulty].allowedImages;
    let pool = IMAGES.filter(img => img.categoryId === selectedCategory && allowed.includes(img.id));
    if (pool.length === 0) pool = IMAGES.filter(img => allowed.includes(img.id));
    
    let randomImg = pool[Math.floor(Math.random() * pool.length)] || selectedImage;
    if (pool.length > 1) {
      let tempPool = pool.filter(img => img.id !== selectedImage.id);
      if (tempPool.length > 0) {
        randomImg = tempPool[Math.floor(Math.random() * tempPool.length)];
      }
    }

    setSelectedImage(randomImg);
    resetGame(randomImg);

    setIsPreviewing(true);
    setShowModal(false);
  }, [difficulty, selectedCategory, selectedImage.id, gameMode, resetGame]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleGameOverGoHome = () => {
    handleBackToGallery();
  };


  return (
    <div className="h-screen w-screen bg-transparent flex justify-center items-center p-0 relative z-[1] overflow-hidden select-none">
      {/* Animated background blobs — inline styles for complex multi-animations */}
      <div className="fixed z-[-1] opacity-45 dark:opacity-25 pointer-events-none will-change-transform top-[-8vw] left-[-8vw] w-[45vw] h-[45vw] bg-gradient-to-br from-[var(--accent)] to-[#fcd34d] dark:from-indigo-600 dark:to-pink-500 blur-[80px]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animation: 'blobFloat1 25s infinite alternate ease-in-out, blobMorph 12s infinite alternate ease-in-out' }} />
      <div className="fixed z-[-1] opacity-45 dark:opacity-25 pointer-events-none will-change-transform bottom-[-10vw] right-[-10vw] w-[40vw] h-[40vw] bg-gradient-to-br from-amber-400 to-amber-500 dark:from-blue-900 dark:to-violet-600 blur-[80px]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animation: 'blobFloat2 30s infinite alternate-reverse ease-in-out, blobMorph 15s infinite alternate-reverse ease-in-out' }} />
      <div className="fixed z-[-1] opacity-45 dark:opacity-25 pointer-events-none will-change-transform top-[30%] right-[-15vw] w-[35vw] h-[35vw] bg-gradient-to-br from-violet-500 to-pink-500 dark:from-rose-700 dark:to-indigo-950 blur-[80px]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animation: 'blobFloat3 28s infinite alternate ease-in-out, blobMorph 18s infinite alternate ease-in-out' }} />
      <div className="fixed z-[-1] opacity-45 dark:opacity-25 pointer-events-none will-change-transform bottom-[20%] left-[-12vw] w-[30vw] h-[30vw] bg-gradient-to-br from-emerald-500 to-blue-500 dark:from-emerald-900 dark:to-sky-900 blur-[80px]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animation: 'blobFloat4 35s infinite alternate-reverse ease-in-out, blobMorph 20s infinite alternate-reverse ease-in-out' }} />

      {view === 'landing' ? (
        <LandingPage 
          onStart={handleGoToCategories} 
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      ) : (
      <div className="w-full max-w-[480px] md:max-w-[1400px] flex flex-col p-3 md:p-5 lg:p-8 relative z-[1]">
        <Header 
          moves={moves} 
          time={time} 
          bestScore={bestScore}
          onBack={
            view === 'categories' ? handleBackToLanding :
            view === 'gallery' ? handleBackToCategories :
            handleBackToGallery
          }
          showBack={view !== 'landing'}
          showStats={view === 'game'}
          showTitle={view !== 'landing'}
          theme={theme}
          onToggleTheme={toggleTheme}
          onSettings={() => setShowSettings(true)}
        />

        <div className="flex-1 flex flex-col justify-center w-full">
          {view === 'categories' ? (
            <CategorySelection 
              onSelectCategory={handleCategorySelect}
            />
          ) : view === 'gallery' ? (
            <GameGallery
              images={categoryImages}
              selectedImage={selectedImage}
              onImageSelect={handleImageChange}
              difficulty={difficulty}
              onDifficultyChange={handleDifficultyChange}
              gameMode={gameMode}
              onGameModeChange={handleGameModeChange}
              onStart={handleStartGame}
              bestScore={bestScore}
            />
          ) : (
            <div className="flex flex-col lg:flex-row flex-1 items-center justify-center gap-8 lg:gap-8 w-full h-full pb-6 max-w-[1600px] mx-auto px-4 lg:px-12">
              
              {/* PUZZLE BOARD (Now on Right visually on LG) */}
              <div className="w-full flex justify-center lg:justify-start lg:flex-none lg:w-auto order-1 lg:order-3">
              {gameMode === GAME_MODES.JIGSAW ? (
                <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.15)] border-[3px] border-[var(--border)] bg-[var(--bg-secondary)] h-auto lg:h-[clamp(450px,70vh,750px)] lg:w-[clamp(450px,70vh,750px)] aspect-square shrink-0">
                  {(isPreviewing || showHint) && (
                    <div className={isPreviewing ? "absolute inset-0 z-20 flex items-center justify-center rounded-2xl pointer-events-none" : "absolute inset-0 z-10 flex items-center justify-center bg-black/30 animate-[fadeIn_0.2s_ease] rounded-2xl"}>
                      {showHint && !isPreviewing && (
                        <div className="absolute top-5 right-5 bg-orange-600 text-white py-2 px-4 rounded-full font-extrabold text-xl shadow-[0_4px_15px_rgba(234,88,12,0.4)] z-30 animate-[pulse_1s_infinite_alternate] pointer-events-none">
                          {hintTimer.toFixed(1)}s
                        </div>
                      )}
                      <LazyImage src={selectedImage.src} alt={isPreviewing ? "Previewing full image" : "Hint"} className={isPreviewing ? "w-[calc(100%-8px)] h-[calc(100%-8px)] object-fill rounded-xl shadow-[0_10px_40px_rgba(234,88,12,0.4)] origin-center animate-[pulsePreview_2s_ease-in-out] [animation:pulsePreview_2s_ease-in-out,imageShatter_1.2s_cubic-bezier(0.68,-0.55,0.265,1.55)_2s_forwards]" : "w-[calc(100%-8px)] h-[calc(100%-8px)] object-fill rounded-xl shadow-lg"} />
                    </div>
                  )}
                  <JigsawBoard
                    key={jigsawKey}
                    imageSrc={selectedImage.src}
                    gridSize={gridSize}
                    onSolve={handleJigsawWin}
                  />
                </div>
              ) : (
                <div className={`relative w-full aspect-square shrink-0 rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.15)] border-[3px] bg-[var(--bg-secondary)] h-auto lg:h-[clamp(450px,70vh,750px)] lg:w-[clamp(450px,70vh,750px)] ${gameMode === GAME_MODES.DRAG_DROP ? 'border-dashed border-orange-500' : 'border-[var(--border)]'}`}>
                  {(isPreviewing || showHint) && (
                    <div className={isPreviewing ? "absolute inset-0 z-20 flex items-center justify-center rounded-2xl pointer-events-none" : "absolute inset-0 z-10 flex items-center justify-center bg-black/30 animate-[fadeIn_0.2s_ease] rounded-2xl"}>
                      {showHint && !isPreviewing && (
                        <div className="absolute top-5 right-5 bg-orange-600 text-white py-2 px-4 rounded-full font-extrabold text-xl shadow-[0_4px_15px_rgba(234,88,12,0.4)] z-30 animate-[pulse_1s_infinite_alternate] pointer-events-none">
                          {hintTimer.toFixed(1)}s
                        </div>
                      )}
                      <LazyImage src={selectedImage.src} alt={isPreviewing ? "Previewing full image" : "Hint"} className={isPreviewing ? "w-[calc(100%-8px)] h-[calc(100%-8px)] object-fill rounded-xl shadow-[0_10px_40px_rgba(234,88,12,0.4)] origin-center animate-[pulsePreview_2s_ease-in-out] [animation:pulsePreview_2s_ease-in-out,imageShatter_1.2s_cubic-bezier(0.68,-0.55,0.265,1.55)_2s_forwards]" : "w-[calc(100%-8px)] h-[calc(100%-8px)] object-fill rounded-xl shadow-lg"} />
                    </div>
                  )}
                  {gameMode === GAME_MODES.SLIDER ? (
                    <PuzzleBoard
                      tiles={tiles}
                      gridSize={gridSize}
                      imageSrc={selectedImage.src}
                      onTileClick={handleTileClick}
                    />
                  ) : (
                    <DragDropBoard
                      tiles={tiles}
                      gridSize={gridSize}
                      imageSrc={selectedImage.src}
                      onSwap={handleSwap}
                    />
                  )}
                </div>
              )}
              </div>

              {/* CENTER DIVIDER (CONSISTENT WITH OTHER PAGES) */}
              <div className="hidden lg:flex flex-col items-center justify-center px-12 gap-4 select-none self-stretch lg:order-2">
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
                <div className="w-11 h-11 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-xl shadow-lg shadow-orange-500/5 transition-transform hover:scale-110">🧩</div>
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
              </div>

              {/* CONTROLS & INFO (Now on Left visually on LG) */}
              <div className="w-full flex-1 lg:flex-none lg:w-[460px] max-w-[460px] flex flex-col gap-6 lg:gap-8 justify-center order-2 lg:order-1">
                
                {/* Stats Panel */}
                <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-3xl border border-white/20 dark:border-slate-700 shadow-lg backdrop-blur-md">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/85 dark:bg-slate-800/85 border border-orange-200/50 dark:border-slate-600 rounded-2xl p-3 flex flex-col items-center justify-center gap-1 shadow-sm backdrop-blur-md">
                      <span className="text-xl">⏱️</span>
                      <span className="text-[0.6rem] text-amber-900/70 dark:text-slate-400 uppercase tracking-widest font-bold leading-none mt-1">Time</span>
                      <span className="text-sm font-black tabular-nums text-slate-800 dark:text-gray-100">{formatTime(time)}</span>
                    </div>
                    <div className="bg-white/85 dark:bg-slate-800/85 border border-orange-200/50 dark:border-slate-600 rounded-2xl p-3 flex flex-col items-center justify-center gap-1 shadow-sm backdrop-blur-md">
                      <span className="text-xl">👆</span>
                      <span className="text-[0.6rem] text-amber-900/70 dark:text-slate-400 uppercase tracking-widest font-bold leading-none mt-1">Moves</span>
                      <span className="text-sm font-black tabular-nums text-slate-800 dark:text-gray-100">{moves}</span>
                    </div>
                    <div className="bg-white/85 dark:bg-slate-800/85 border border-orange-200/50 dark:border-slate-600 rounded-2xl p-3 flex flex-col items-center justify-center gap-1 shadow-sm backdrop-blur-md">
                      <span className="text-xl">🏆</span>
                      <span className="text-[0.6rem] text-amber-900/70 dark:text-slate-400 uppercase tracking-widest font-bold leading-none mt-1">Best</span>
                      <span className="text-sm font-black tabular-nums text-slate-800 dark:text-gray-100">{bestScore ? formatTime(bestScore) : '--:--.--'}</span>
                    </div>
                  </div>
                </div>

                {/* Fact Panel */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-3xl border border-orange-200/60 dark:border-slate-600 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl -translate-y-10 translate-x-10"></div>
                  <h3 className="text-slate-800 dark:text-gray-100 font-extrabold text-xl mb-2 flex items-center gap-2 relative z-10">
                    <span className="text-2xl">💡</span> Did you know?
                  </h3>
                  <div className="w-12 h-1 bg-orange-500 rounded-full mb-3 relative z-10"></div>
                  <strong className="block text-slate-900 dark:text-white mb-1.5 font-black text-sm relative z-10">{selectedImage.name}</strong>
                  <p className="text-slate-700/90 dark:text-slate-300 text-sm font-medium leading-relaxed mb-0 relative z-10 line-clamp-4">
                    {selectedImage.fact || "This represents the vibrant and rich cultural heritage of Bihar, reflecting centuries of history and tradition."}
                  </p>
                </div>

                {/* Controls */}
                <div className="bg-white/40 dark:bg-slate-800/40 p-5 rounded-3xl border border-white/20 dark:border-slate-700 shadow-lg backdrop-blur-md">
                  <Controls
                    hasWon={hasWon}
                    onRestart={handleRestart}
                    onPlayAgain={handlePlayAgain}
                    onHint={handleHint}
                    showingHint={showHint}
                    hintsRemaining={hintsRemaining}
                    maxHints={maxHints}
                  />
                </div>
              </div>

            </div>
          )}
        </div>

        <Modal
          show={showModal}
          moves={moves}
          time={time}
          fact={selectedImage.fact}
          imageName={selectedImage.name}
          onPlayAgain={handlePlayAgain}
          onGoHome={handleGameOverGoHome}
          onClose={handleCloseModal}
        />

        <SettingsModal
          show={showSettings}
          onClose={() => setShowSettings(false)}
          hintSettings={hintSettings}
          onUpdateHintSettings={setHintSettings}
        />
      </div>
      )}
    </div>
  );
}
