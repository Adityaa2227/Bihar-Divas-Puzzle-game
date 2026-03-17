import Header from './Header';
import ImageSelector from './ImageSelector';
import { GRID_SIZES } from '../utils/constants';

export default function StartScreen({
  selectedImage,
  onImageSelect,
  difficulty,
  onDifficultyChange,
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
          Test your skills with our culture-themed sliding puzzles. Choose an image and difficulty to begin your journey.
        </p>
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
