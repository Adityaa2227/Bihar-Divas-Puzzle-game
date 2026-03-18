export default function Controls({
  onRestart,
  onHint,
  showingHint,
}) {
  return (
    <div className="controls fade-in">
      <div className="controls__actions">
        <button className="btn btn--action btn--restart" onClick={onRestart}>
          🔄 Restart
        </button>
        <button
          className={`btn btn--action btn--hint ${showingHint ? 'btn--hint-active' : ''}`}
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
