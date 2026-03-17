import { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header';
import PuzzleBoard from './components/PuzzleBoard';
import DragDropBoard from './components/DragDropBoard';
import ImageSelector from './components/ImageSelector';
import Controls from './components/Controls';
import Modal from './components/Modal';
import StartScreen from './components/StartScreen';
import { IMAGES, GRID_SIZES, LS_KEYS, GAME_MODES } from './utils/constants';
import { shuffleTiles, canMove, checkWin } from './utils/puzzleLogic';
import { playMoveSound, playWinSound, bgmManager } from './utils/sounds';

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
  const [view, setView] = useState('start'); // 'start' or 'game'
  const [gameMode, setGameMode] = useState(GAME_MODES.SLIDER);
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);
  const [difficulty, setDifficulty] = useState('easy');
  const gridSize = GRID_SIZES[difficulty].size;

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
  const [bgmStarted, setBgmStarted] = useState(false);

  const timerRef = useRef(null);

  // BGM Effect
  useEffect(() => {
    bgmManager.setVolume(volume);
    bgmManager.setMute(isMuted);
  }, [volume, isMuted]);

  const startBGM = useCallback(() => {
    if (!bgmStarted) {
      bgmManager.play();
      setBgmStarted(true);
    }
  }, [bgmStarted]);

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
  const resetGame = useCallback(() => {
    clearInterval(timerRef.current);
    const newGridSize = GRID_SIZES[difficulty].size;
    setTiles(shuffleTiles(newGridSize, gameMode === GAME_MODES.DRAG_DROP));
    setMoves(0);
    setTime(0);
    setIsRunning(false);
    setHasWon(false);
    setShowHint(false);
    setBestScore(getBestScore(selectedImage.id, difficulty, gameMode));
  }, [difficulty, selectedImage.id, gameMode]);

  const handleStartGame = () => {
    startBGM();
    resetGame();
    setView('game');
  };

  const handleBackToMenu = () => {
    setView('start');
    resetGame();
  };

  const handleImageChange = useCallback((img) => {
    setSelectedImage(img);
  }, []);

  const handleDifficultyChange = useCallback((diff) => {
    setDifficulty(diff);
  }, []);

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

  const handleHint = useCallback((e) => {
    e.preventDefault();
    setShowHint((prev) => !prev);
  }, []);

  const handlePlayAgain = useCallback(() => {
    resetGame();
  }, [resetGame]);

  const handleGameOverGoHome = () => {
    handleBackToMenu();
  };

  return (
    <div className="app">
      <div className="app__container">
        {view === 'start' ? (
          <StartScreen
            selectedImage={selectedImage}
            onImageSelect={handleImageChange}
            difficulty={difficulty}
            onDifficultyChange={handleDifficultyChange}
            gameMode={gameMode}
            onGameModeChange={handleGameModeChange}
            onStart={handleStartGame}
            bestScore={bestScore}
            volume={volume}
            isMuted={isMuted}
            onVolumeChange={setVolume}
            onToggleMute={() => setIsMuted((prev) => !prev)}
          />
        ) : (
          <>
            <Header 
              moves={moves} 
              time={time} 
              bestScore={bestScore}
              volume={volume}
              isMuted={isMuted}
              onVolumeChange={setVolume}
              onToggleMute={() => setIsMuted(!isMuted)}
              onBack={handleBackToMenu}
              showBack={true}
            />

            <Controls
              difficulty={difficulty}
              onDifficultyChange={handleDifficultyChange}
              onRestart={resetGame}
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
              ) : (
                <DragDropBoard
                  tiles={tiles}
                  gridSize={gridSize}
                  imageSrc={selectedImage.src}
                  onSwap={handleSwap}
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
