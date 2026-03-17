import Header from './Header';
import ImageSelector from './ImageSelector';
import { GRID_SIZES, GAME_MODES } from '../utils/constants';

export default function StartScreen({
  selectedImage,
  onImageSelect,
  difficulty,
  onDifficultyChange,
  gameMode,
  onGameModeChange,
  onStart,
  bestScore,
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
}) {
  return (
    <div className="start-screen">
      <Header
        moves={0}
        time={0}
        bestScore={bestScore}
        volume={volume}
        isMuted={isMuted}
        onVolumeChange={onVolumeChange}
        onToggleMute={onToggleMute}
      />

      <div className="start-screen__welcome">
        <h2 className="start-screen__subtitle">Welcome to Bihar!</h2>
        <p className="start-screen__text">
          Select your puzzle style and challenge your skills with Bihar's icons.
        </p>
      </div>

      <div className="start-screen__mode-selection">
        <h3 className="section-title">Select Game Style</h3>
        <div className="start-screen__modes">
          <button
            className={`btn btn--mode ${gameMode === GAME_MODES.SLIDER ? 'btn--level-active' : ''}`}
            onClick={() => onGameModeChange(GAME_MODES.SLIDER)}
          >
            🧩 Slider Puzzle
            <span className="mode-desc">Standard sliding logic</span>
          </button>
          <button
            className={`btn btn--mode ${gameMode === GAME_MODES.DRAG_DROP ? 'btn--level-active' : ''}`}
            onClick={() => onGameModeChange(GAME_MODES.DRAG_DROP)}
          >
            🖱️ Drag & Drop
            <span className="mode-desc">Swap any two pieces</span>
          </button>
        </div>
      </div>

      <ImageSelector selectedImage={selectedImage} onSelect={onImageSelect} />

      <div className="start-screen__section">
        <h3 className="section-title">Select Difficulty</h3>
        <div className="start-screen__levels">
          {Object.entries(GRID_SIZES).map(([key, { label }]) => (
            <button
              key={key}
              className={`btn btn--level ${difficulty === key ? 'btn--level-active' : ''}`}
              onClick={() => onDifficultyChange(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <button className="btn btn--primary btn--lg start-screen__btn" onClick={onStart}>
        🚀 Start Adventure
      </button>

      <div className="start-screen__footer">
        Celebrate Bihar Divas through play!
      </div>
    </div>
  );
}
