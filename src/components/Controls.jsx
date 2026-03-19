export default function Controls({
  hasWon,
  onRestart,
  onPlayAgain,
  onHint,
  showingHint,
  hintsRemaining,
  maxHints,
}) {
  return (
    <div className="controls fade-in">
      <div className="controls__actions">
        {hasWon ? (
          <button className="btn btn--action btn--restart" onClick={onPlayAgain}>
            🔄 Play Again
          </button>
        ) : (
          <button className="btn btn--action btn--restart" onClick={onRestart}>
            🔄 Restart
          </button>
        )}
        <button
          className={`btn btn--action btn--hint ${showingHint ? 'btn--hint-active' : ''}`}
          disabled={hintsRemaining <= 0 && !showingHint}
          onClick={onHint}
        >
          💡 Hint ({hintsRemaining}/{maxHints})
        </button>
      </div>
    </div>
  );
}
