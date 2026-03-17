import { GRID_SIZES } from '../utils/constants';

export default function Controls({
  difficulty,
  onDifficultyChange,
  onRestart,
  onHint,
  showingHint,
}) {
  return (
    <div className="controls">
      <div className="controls__levels">
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
      <div className="controls__actions">
        <button className="btn btn--secondary" onClick={onRestart}>
          🔄 Restart
        </button>
        <button
          className={`btn btn--hint ${showingHint ? 'btn--hint-active' : ''}`}
          onMouseDown={onHint}
          onMouseUp={onHint}
          onMouseLeave={showingHint ? onHint : undefined}
          onTouchStart={onHint}
          onTouchEnd={onHint}
        >
          💡 Hint
        </button>
      </div>
    </div>
  );
}
