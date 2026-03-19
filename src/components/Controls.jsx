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
          onMouseDown={hintsRemaining > 0 ? onHint : undefined}
          onMouseUp={hintsRemaining > 0 || showingHint ? onHint : undefined}
          onMouseLeave={showingHint ? onHint : undefined}
          onTouchStart={hintsRemaining > 0 ? onHint : undefined}
          onTouchEnd={hintsRemaining > 0 || showingHint ? onHint : undefined}
        >
          💡 Hint ({hintsRemaining}/{maxHints})
        </button>
      </div>
    </div>
  );
}
