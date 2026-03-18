import { CATEGORIES } from '../utils/constants';
import './CategorySelection.css';

export default function CategorySelection({ onSelectCategory }) {
  return (
    <div className="category-selection fade-in">

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
