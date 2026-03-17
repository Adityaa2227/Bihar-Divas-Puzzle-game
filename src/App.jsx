import { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header';
import PuzzleBoard from './components/PuzzleBoard';
import ImageSelector from './components/ImageSelector';
import Controls from './components/Controls';
import Modal from './components/Modal';
import StartScreen from './components/StartScreen';
import { IMAGES, GRID_SIZES, LS_KEYS } from './utils/constants';
import { shuffleTiles, canMove, checkWin } from './utils/puzzleLogic';
import { playMoveSound, playWinSound, bgmManager } from './utils/sounds';

function getBestScore(imageId, difficulty) {
  try {
    const stored = JSON.parse(localStorage.getItem(LS_KEYS.bestScore) || '{}');
    return stored[`${imageId}-${difficulty}`] || null;
  } catch {
    return null;
  }
}

function saveBestScore(imageId, difficulty, time) {
  try {
    const stored = JSON.parse(localStorage.getItem(LS_KEYS.bestScore) || '{}');
    const key = `${imageId}-${difficulty}`;
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
  const [selectedImage, setSelectedImage] = useState(IMAGES[0]);
  const [difficulty, setDifficulty] = useState('easy');
  const gridSize = GRID_SIZES[difficulty].size;

  const [tiles, setTiles] = useState(() => shuffleTiles(gridSize));
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [bestScore, setBestScore] = useState(() =>
    getBestScore(selectedImage.id, difficulty)
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

  // Reset game when image or difficulty changes
  const resetGame = useCallback(() => {
    clearInterval(timerRef.current);
    const newGridSize = GRID_SIZES[difficulty].size;
    setTiles(shuffleTiles(newGridSize));
    setMoves(0);
    setTime(0);
    setIsRunning(false);
    setHasWon(false);
    setShowHint(false);
    setBestScore(getBestScore(selectedImage.id, difficulty));
  }, [difficulty, selectedImage.id]);

  const handleStartGame = () => {
    startBGM();
    resetGame();
    setView('game');
  };

  const handleBackToMenu = () => {
    setView('start');
    resetGame();
  };

  const handleImageChange = useCallback(
    (img) => {
      setSelectedImage(img);
      // Will reset via effect in game view if needed
    },
    []
  );

  const handleDifficultyChange = useCallback((diff) => {
    setDifficulty(diff);
  }, []);

  // Update best score whenever selection changes
  useEffect(() => {
    setBestScore(getBestScore(selectedImage.id, difficulty));
  }, [difficulty, selectedImage.id]);

  const handleTileClick = useCallback(
    (index) => {
      if (hasWon) return;

      const emptyValue = gridSize * gridSize - 1;
      const emptyIndex = tiles.indexOf(emptyValue);

      if (!canMove(index, emptyIndex, gridSize)) return;

      // Start timer on first move
      if (!isRunning) setIsRunning(true);

      playMoveSound();

      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];

      setTiles(newTiles);
      setMoves((m) => m + 1);

      if (checkWin(newTiles)) {
        setHasWon(true);
        setIsRunning(false);
        saveBestScore(selectedImage.id, difficulty, time);
        setBestScore(getBestScore(selectedImage.id, difficulty));
        setTimeout(() => playWinSound(), 300);
      }
    },
    [tiles, gridSize, hasWon, isRunning, selectedImage.id, difficulty, time]
  );

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

            <div className="puzzle-wrapper">
              {showHint && (
                <div className="hint-overlay">
                  <img src={selectedImage.src} alt="Hint" className="hint-overlay__image" />
                </div>
              )}
              <PuzzleBoard
                tiles={tiles}
                gridSize={gridSize}
                imageSrc={selectedImage.src}
                onTileClick={handleTileClick}
              />
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
