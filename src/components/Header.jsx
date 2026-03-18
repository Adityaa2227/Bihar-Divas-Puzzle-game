export default function Header({
  moves,
  time,
  bestScore,
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
  onBack,
  showBack,
  showStats = true,
  theme,
  onToggleTheme,
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="header">
      <div className="header__title-row">
        {showBack && (
          <button className="btn-icon btn-icon--back" onClick={onBack} aria-label="Back to Menu">
            🔙
          </button>
        )}
        <h1 className="header__title">
          <span className="header__icon">🏛️</span>
          Bihar Divas Puzzle
        </h1>
        <div className="header__controls">
          <button
            className="btn-icon theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            className="btn-icon"
            onClick={onToggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? '🔇' : '🔊'}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            className="volume-slider"
            aria-label="Volume"
          />
        </div>
      </div>
      {showStats && (
        <div className="header__stats">
          <div className="stat-card">
            <span className="stat-card__icon">⏱️</span>
            <div className="stat-card__content">
              <span className="stat-card__label">Time</span>
              <span className="stat-card__value">{formatTime(time)}</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-card__icon">👆</span>
            <div className="stat-card__content">
              <span className="stat-card__label">Moves</span>
              <span className="stat-card__value">{moves}</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-card__icon">🏆</span>
            <div className="stat-card__content">
              <span className="stat-card__label">Best</span>
              <span className="stat-card__value">{bestScore ? formatTime(bestScore) : '--:--'}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
