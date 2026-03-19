import './Header.css';

export default function Header({
  moves,
  time,
  bestScore,
  onBack,
  showBack,
  showStats = true,
  showTitle = true,
  theme,
  onToggleTheme,
  onSettings,
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="header">
      <div className="header__title-row">
        <div className="header__left">
          {showBack && (
            <button className="btn-icon" onClick={onBack} title="Go Back" aria-label="Back">
              ⬅️
            </button>
          )}
        </div>
        {showTitle && (
          <h1 className="header__title">
            Bihar Diwas Puzzle
          </h1>
        )}
        <div className="header__controls">
          <button
            className="btn-icon theme-toggle"
            onClick={onSettings}
            aria-label="Settings"
          >
            ⚙️
          </button>
          <button
            className="btn-icon theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
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
