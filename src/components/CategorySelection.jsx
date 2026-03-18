import Header from './Header';
import { CATEGORIES } from '../utils/constants';

export default function CategorySelection({ onSelectCategory, volume, isMuted, onVolumeChange, onToggleMute, onBack, theme, onToggleTheme }) {
  return (
    <div className="category-selection fade-in">
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

      <div className="category-selection__content">
        <div className="category-selection__header">
          <h2 className="category-selection__title">Select a Theme</h2>
          <p className="category-selection__subtitle">What part of Bihar's legacy would you like to explore?</p>
        </div>

        <div className="category-cards">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card" 
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className="category-card__image-container">
                <img src={cat.image} alt={cat.label} className="category-card__image" />
                <div className="category-card__overlay">
                   <div className="category-card__icon">{cat.icon}</div>
                </div>
              </div>
              <div className="category-card__info">
                <h3 className="category-card__name">{cat.label}</h3>
                <p className="category-card__desc">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
