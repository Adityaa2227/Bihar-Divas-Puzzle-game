import Header from './Header';
import { GRID_SIZES, GAME_MODES } from '../utils/constants';
import { playClickSound, playNavSound } from '../utils/sounds';

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
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute,
  onBack,
  theme,
  onToggleTheme,
}) {
  const handleModeChange = (mode) => {
    playClickSound();
    onGameModeChange(mode);
  };

  const handleDiffChange = (diff) => {
    playClickSound();
    onDifficultyChange(diff);
  };

  const handleStartClick = () => {
    playNavSound();
    onStart();
  };

  return (
    <div className="game-gallery fade-in">
      <Header
        volume={volume}
        isMuted={isMuted}
        onVolumeChange={onVolumeChange}
        onToggleMute={onToggleMute}
        onBack={onBack}
        showBack={true}
        showStats={false}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      <div className={`game-gallery__content ${difficulty === 'kids' ? 'is-kids' : ''}`}>
        <div className="game-gallery__welcome">
          <h2 className="game-gallery__subtitle">
            {difficulty === 'kids' ? '🎈 Let\'s Play!' : '⚡ Choose Your Challenge'}
          </h2>
          <p className="game-gallery__text">
            {difficulty === 'kids' ? 'Pick a game and start having fun!' : 'Pick a game mode, set your skill level, and start solving!'}
          </p>
        </div>

        {/* Game Mode */}
        <div className="game-gallery__section">
          <h3 className="section-title">🎮 Game Style</h3>
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
        </div>

        {/* Level Selection */}
        <div className="game-gallery__section">
          <h3 className="section-title">🎯 Choose Level</h3>
          <div className="game-gallery__levels-grid">
            {Object.entries(GRID_SIZES).map(([key, { label, tag, desc }]) => (
              <button
                key={key}
                className={`btn btn--level-card ${difficulty === key ? 'btn--level-card-active' : ''}`}
                onClick={() => handleDiffChange(key)}
              >
                <span className="level-card__tag">{tag}</span>
                <span className="level-card__grid">{label}</span>
                <span className="level-card__desc">{desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Puzzle Preview */}
        <div className="game-gallery__section game-gallery__section--preview">
          <h3 className="section-title">🖼️ {difficulty === 'kids' ? 'Your Picture' : 'Your Puzzle'}</h3>
          <div className="featured-image-card featured-image-card--compact">
            <img src={selectedImage.src} alt={selectedImage.name} className="featured-image" />
            <div className="featured-image-info">
              <span className="featured-image-name">{selectedImage.name} {difficulty === 'kids' && '🎨'}</span>
              {difficulty !== 'kids' && <p className="featured-image-fact">{selectedImage.fact}</p>}
            </div>
          </div>
        </div>

        <button className="btn btn--primary btn--lg game-gallery__btn pulse-btn" onClick={handleStartClick}>
          {difficulty === 'kids' ? '🚀 PLAY NOW!' : '🚀 START ADVENTURE'}
        </button>

        {difficulty !== 'kids' && (
          <div className="game-gallery__footer">
            Vande Bihar • Celebrate with us!
          </div>
        )}
      </div>
    </div>
  );
}
