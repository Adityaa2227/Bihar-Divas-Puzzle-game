import { useState } from 'react';
import { AGE_GROUPS, GAME_MODES } from '../utils/constants';
import { playClickSound, playNavSound } from '../utils/sounds';
import './GameGallery.css';

export default function GameGallery({
  images,
  selectedImage,
  onImageSelect,
  difficulty,
  onDifficultyChange,
  gameMode,
  onGameModeChange,
  onStart,
  bestScore,
}) {
  const [step, setStep] = useState(1);

  const handleModeChange = (mode) => {
    playClickSound();
    onGameModeChange(mode);
  };

  const handleDiffChange = (diff) => {
    playClickSound();
    onDifficultyChange(diff);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      playClickSound();
      setStep((s) => s - 1);
    }
  };

  const handleStartClick = () => {
    playNavSound();
    onStart();
  };

  return (
    <div className="game-gallery fade-in">

      <div className={`game-gallery__content ${difficulty === 'under_15' ? 'is-kids' : ''}`}>
        <div className="game-gallery__welcome">
          <h2 className="game-gallery__subtitle">
            ⚡ Let's Play!
          </h2>
          <p className="game-gallery__text">
            Pick a game mode, set your skill level, and start solving!
          </p>
        </div>

        <div className="game-gallery__steps-container">
          {/* Step 1: Game Mode */}
          {step === 1 && (
            <div className="game-gallery__step fade-in">
              <h3 className="step-title">
                <span className="step-number">1</span>
                <span>Select Game Mode</span>
              </h3>
              <div className="game-gallery__modes">
                <button
                  className={`btn btn--mode ${gameMode === GAME_MODES.SLIDER ? 'btn--level-active' : ''}`}
                  onClick={() => handleModeChange(GAME_MODES.SLIDER)}
                >
                  <span className="mode-icon">🧩</span>
                  <div className="mode-info">
                    <span className="mode-name">Slider</span>
                    <span className="mode-desc">Classic logic</span>
                  </div>
                </button>
                <button
                  className={`btn btn--mode ${gameMode === GAME_MODES.DRAG_DROP ? 'btn--level-active' : ''}`}
                  onClick={() => handleModeChange(GAME_MODES.DRAG_DROP)}
                >
                  <span className="mode-icon">🖱️</span>
                  <div className="mode-info">
                    <span className="mode-name">Drag & Drop</span>
                    <span className="mode-desc">Swap pieces</span>
                  </div>
                </button>
                <button
                  className={`btn btn--mode ${gameMode === GAME_MODES.JIGSAW ? 'btn--level-active' : ''}`}
                  onClick={() => handleModeChange(GAME_MODES.JIGSAW)}
                >
                  <span className="mode-icon">🎨</span>
                  <div className="mode-info">
                    <span className="mode-name">Jigsaw</span>
                    <span className="mode-desc">Interlocking</span>
                  </div>
                </button>
              </div>
              <button 
                className="btn btn--primary btn--lg" 
                style={{marginTop: '20px', width: '100%'}} 
                onClick={() => { playClickSound(); setStep(2); }}
              >
                Continue to Age Group ➡️
              </button>
            </div>
          )}

          {/* Step 2: Level Selection */}
          {step === 2 && (
            <div className="game-gallery__step fade-in">
              <h3 className="step-title">
                <span className="step-number">2</span>
                <span>Choose Age Group</span>
              </h3>
              <div className="game-gallery__levels-grid">
                {Object.entries(AGE_GROUPS).map(([key, { label, tag }]) => (
                  <button
                    key={key}
                    className={`btn btn--level-card ${difficulty === key ? 'btn--level-card-active' : ''}`}
                    onClick={() => handleDiffChange(key)}
                  >
                    <span className="level-card__tag">{tag}</span>
                    <span className="level-card__grid">{label}</span>
                  </button>
                ))}
              </div>
              <button 
                className="btn btn--primary btn--lg" 
                style={{marginTop: '20px', width: '100%'}} 
                onClick={handleStartClick}
              >
                🚀 PLAY NOW!
              </button>
            </div>
          )}
        </div>

        {difficulty !== 'under_15' && (
          <div className="game-gallery__footer">
            Vande Bihar • Celebrate with us!
          </div>
        )}
      </div>
    </div>
  );
}
