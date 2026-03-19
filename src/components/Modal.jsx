import './Modal.css';

export default function Modal({ show, moves, time, fact, imageName, onPlayAgain, onGoHome, onClose }) {
  if (!show) return null;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose || onPlayAgain}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {onClose && (
          <button className="modal__close" onClick={onClose} aria-label="Close">
            ✖
          </button>
        )}
        <div className="modal__celebration">🎉</div>
        <h2 className="modal__title">Puzzle Solved!</h2>
        <p className="modal__subtitle">You completed the <strong>{imageName}</strong> puzzle!</p>

        <div className="modal__stats">
          <div className="modal__stat">
            <span className="modal__stat-icon">⏱️</span>
            <span className="modal__stat-label">Time</span>
            <span className="modal__stat-value">{formatTime(time)}</span>
          </div>
          <div className="modal__stat">
            <span className="modal__stat-icon">👆</span>
            <span className="modal__stat-label">Moves</span>
            <span className="modal__stat-value">{moves}</span>
          </div>
        </div>

        <div className="modal__fact">
          <h3 className="modal__fact-title">📚 Did You Know?</h3>
          <p className="modal__fact-text">{fact}</p>
        </div>

        <div className="modal__actions">
          <button className="btn btn--primary btn--lg" onClick={onPlayAgain}>
            🔄 Play Again
          </button>
          <button className="btn btn--secondary" onClick={onGoHome}>
            🏠 Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}
