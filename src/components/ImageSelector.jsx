import { IMAGES } from '../utils/constants';

export default function ImageSelector({ selectedImage, onSelect }) {
  return (
    <div className="image-selector">
      <h3 className="image-selector__title">Choose Image</h3>
      <div className="image-selector__grid">
        {IMAGES.map((img) => (
          <button
            key={img.id}
            className={`image-selector__item ${selectedImage.id === img.id ? 'image-selector__item--active' : ''}`}
            onClick={() => onSelect(img)}
            aria-label={`Select ${img.name}`}
          >
            <img src={img.src} alt={img.name} className="image-selector__thumb" loading="lazy" />
            <span className="image-selector__label">{img.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
