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
import { IMAGES, CATEGORIES, AGE_GROUPS, LS_KEYS, GAME_MODES } from './utils/constants';
import { shuffleTiles, canMove, checkWin } from './utils/puzzleLogic';
import { playMoveSound, playWinSound, playClickSound, playNavSound, playToggleSound, playHintSound, playRestartSound } from './utils/sounds';

function getBestScore(imageId, difficulty, gameMode) {
  try {
    const stored = JSON.parse(localStorage.getItem(LS_KEYS.bestScore) || '{}');
    const key = `${imageId}-${difficulty}-${gameMode}`;
    return stored[key] || null;
  } catch {
    return null;
  }
}

function saveBestScore(imageId, difficulty, time, gameMode) {
  try {
    const stored = JSON.parse(localStorage.getItem(LS_KEYS.bestScore) || '{}');
    const key = `${imageId}-${difficulty}-${gameMode}`;
    if (!stored[key] || time < stored[key]) {
      stored[key] = time;
      localStorage.setItem(LS_KEYS.bestScore, JSON.stringify(stored));
    }
  } catch {
    // localStorage not available
  }
}

export default function App() {
  const [view, setView] = useState('landing');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [gameMode, setGameMode] = useState(GAME_MODES.SLIDER);
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);
  const [difficulty, setDifficulty] = useState('under_15');
  const gridSize = AGE_GROUPS[difficulty] ? AGE_GROUPS[difficulty].size : 3;

  const [tiles, setTiles] = useState(() => shuffleTiles(gridSize, gameMode === GAME_MODES.DRAG_DROP));
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [bestScore, setBestScore] = useState(() =>
    getBestScore(selectedImage.id, difficulty, gameMode)
  );

  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    playToggleSound();
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const timerRef = useRef(null);

  const categoryImages = IMAGES.filter((img) => img.categoryId === selectedCategory);

  // Timer effect
  useEffect(() => {
    if (isRunning && !hasWon) {
      timerRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, hasWon]);

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
    
    // Sync best score with the potentially new image immediately
    const imgId = activeImage ? activeImage.id : selectedImage.id;
    setBestScore(getBestScore(imgId, difficulty, gameMode));
  }, [difficulty, selectedImage.id, gameMode]);

  const handleStartGame = () => {
    playNavSound();
    
    // Logic to ensure "New Puzzle" (image) on every entry
    const allowed = AGE_GROUPS[difficulty].allowedImages;
    let pool = IMAGES.filter(img => img.categoryId === selectedCategory && allowed.includes(img.id));
    if (pool.length === 0) pool = IMAGES.filter(img => allowed.includes(img.id));
    const randomImg = pool[Math.floor(Math.random() * pool.length)] || selectedImage;
    
    setSelectedImage(randomImg);
    resetGame(randomImg); // Pass new image to ensure immediate sync
    
    if (gameMode === GAME_MODES.JIGSAW) {
      setIsRunning(true);
    }
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
    setBestScore(getBestScore(selectedImage.id, difficulty, gameMode));
  }, [difficulty, selectedImage.id, gameMode]);

  const handleTileClick = useCallback(
    (index) => {
      if (hasWon) return;

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
        handleWin();
      }
    },
    [tiles, gridSize, hasWon, isRunning]
  );

  const handleSwap = useCallback((srcIndex, targetIndex) => {
    if (hasWon) return;

    if (!isRunning) setIsRunning(true);
    playMoveSound();

    const newTiles = [...tiles];
    [newTiles[srcIndex], newTiles[targetIndex]] = [newTiles[targetIndex], newTiles[srcIndex]];
    
    setTiles(newTiles);
    setMoves((m) => m + 1);

    if (checkWin(newTiles)) {
      handleWin();
    }
  }, [tiles, hasWon, isRunning]);

  const handleWin = () => {
    setHasWon(true);
    setIsRunning(false);
    saveBestScore(selectedImage.id, difficulty, time, gameMode);
    setBestScore(getBestScore(selectedImage.id, difficulty, gameMode));
    setTimeout(() => playWinSound(), 300);
  };

  const handleJigsawWin = useCallback(() => {
    if (hasWon) return;
    handleWin();
  }, [hasWon, handleWin]);

  const handleHint = useCallback((e) => {
    e.preventDefault();
    playHintSound();
    setShowHint((prev) => !prev);
  }, []);

  const handleRestart = useCallback(() => {
    playRestartSound();
    resetGame();
  }, [resetGame]);

  const handlePlayAgain = useCallback(() => {
    playRestartSound();
    resetGame();
  }, [resetGame]);

  const handleGameOverGoHome = () => {
    handleBackToGallery();
  };



  return (
    <div className="app">
      <div className="app__container">
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
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {view === 'landing' ? (
          <LandingPage 
            onStart={handleGoToCategories} 
          />
        ) : view === 'categories' ? (
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
          <>
            <Controls
              onRestart={handleRestart}
              onHint={handleHint}
              showingHint={showHint}
            />

            <div className={`puzzle-wrapper ${gameMode === GAME_MODES.DRAG_DROP ? 'puzzle-wrapper--jigsaw' : ''}`}>
              {showHint && (
                <div className="hint-overlay">
                  <img src={selectedImage.src} alt="Hint" className="hint-overlay__image" />
                </div>
              )}
              {gameMode === GAME_MODES.SLIDER ? (
                <PuzzleBoard
                  tiles={tiles}
                  gridSize={gridSize}
                  imageSrc={selectedImage.src}
                  onTileClick={handleTileClick}
                />
              ) : gameMode === GAME_MODES.DRAG_DROP ? (
                <DragDropBoard
                  tiles={tiles}
                  gridSize={gridSize}
                  imageSrc={selectedImage.src}
                  onSwap={handleSwap}
                />
              ) : (
                <JigsawBoard
                  imageSrc={selectedImage.src}
                  gridSize={gridSize}
                  onSolve={handleJigsawWin}
                />
              )}
            </div>

            <Modal
              show={hasWon}
              moves={moves}
              time={time}
              fact={selectedImage.fact}
              imageName={selectedImage.name}
              onPlayAgain={handlePlayAgain}
              onGoHome={handleGameOverGoHome}
            />
          </>
        )}
      </div>
    </div>
  );
}
