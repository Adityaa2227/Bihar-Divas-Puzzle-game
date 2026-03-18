import Header from './Header';
import ImageSelector from './ImageSelector';
import { GRID_SIZES, GAME_MODES } from '../utils/constants';

export default function GameGallery({
  images,
  selectedImage,
  onImageSelect,
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

      <div className="game-gallery__content">
        <div className="game-gallery__welcome">
          <h2 className="game-gallery__subtitle">Choose Your Challenge</h2>
          <p className="game-gallery__text">
            Explore Bihar's legacy through different puzzle modes and levels.
          </p>
        </div>

        <div className="game-gallery__section">
          <h3 className="section-title">Select Game Style</h3>
          <div className="game-gallery__modes">
            <button
              className={`btn btn--mode ${gameMode === GAME_MODES.SLIDER ? 'btn--level-active' : ''}`}
              onClick={() => onGameModeChange(GAME_MODES.SLIDER)}
            >
              <span className="mode-icon">🧩</span>
              <div className="mode-info">
                <span className="mode-name">Slider</span>
                <span className="mode-desc">Classic logic</span>
              </div>
            </button>
            <button
              className={`btn btn--mode ${gameMode === GAME_MODES.DRAG_DROP ? 'btn--level-active' : ''}`}
              onClick={() => onGameModeChange(GAME_MODES.DRAG_DROP)}
            >
              <span className="mode-icon">🖱️</span>
              <div className="mode-info">
                <span className="mode-name">Drag & Drop</span>
                <span className="mode-desc">Swap pieces</span>
              </div>
            </button>
            <button
              className={`btn btn--mode ${gameMode === GAME_MODES.JIGSAW ? 'btn--level-active' : ''}`}
              onClick={() => onGameModeChange(GAME_MODES.JIGSAW)}
            >
              <span className="mode-icon">🎨</span>
              <div className="mode-info">
                <span className="mode-name">Jigsaw</span>
                <span className="mode-desc">Interlocking puzzle</span>
              </div>
            </button>
          </div>
        </div>

        <div className="game-gallery__section">
          <h3 className="section-title">Selected Puzzle</h3>
          <div className="featured-image-card">
            <div className="featured-image-container">
              <img src={selectedImage.src} alt={selectedImage.name} className="featured-image" />
              <div className="featured-image-overlay">
                <span className="featured-image-name">{selectedImage.name}</span>
              </div>
            </div>
            <p className="featured-image-fact">{selectedImage.fact}</p>
          </div>
        </div>



        <button className="btn btn--primary btn--lg game-gallery__btn pulse-btn" onClick={onStart}>
          🚀 START ADVENTURE
        </button>

        <div className="game-gallery__footer">
          Vande Bihar • Celebrate with us!
        </div>
      </div>
    </div>
  );
}
