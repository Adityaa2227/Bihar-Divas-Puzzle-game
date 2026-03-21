import { useState, memo } from 'react';
import Tile from './Tile';

const DragDropBoard = ({ tiles, gridSize, imageSrc, onSwap }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      onSwap(draggedIndex, targetIndex);
    }
    setDraggedIndex(null);
  };

  // --- Touch Support ---
  const handleTouchStart = (e, index) => {
    if (e.touches && e.touches.length > 1) return;
    setDraggedIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent page scrolling
  };

  const handleTouchMove = (e) => {
    // The CSS 'touch-none' handles scroll prevention primarily,
    // but we add this for completeness.
  };

  const handleTouchEnd = (e) => {
    document.body.style.overflow = ''; // Restore scrolling
    if (draggedIndex === null) return;
    
    const touch = e.changedTouches[0];
    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (targetElement) {
      const tileElement = targetElement.closest('.puzzle-tile');
      if (tileElement) {
        const targetIndex = parseInt(tileElement.dataset.index, 10);
        if (!isNaN(targetIndex) && draggedIndex !== targetIndex) {
          onSwap(draggedIndex, targetIndex);
        }
      }
    }
    setDraggedIndex(null);
  };

  return (
    <div className="w-full p-1" style={{ aspectRatio: '1 / 1' }}>
      <div
        className="w-full h-full"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gap: '3px',
        }}
      >
        {tiles.map((value, index) => (
          <div
            key={`${value}-${index}`}
            data-index={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={() => setDraggedIndex(null)}
            onTouchStart={(e) => handleTouchStart(e, index)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`puzzle-tile w-full h-full cursor-grab transition-transform duration-200 active:cursor-grabbing touch-none select-none ${draggedIndex === index ? 'opacity-40 scale-90' : ''}`}
          >
            <Tile
              value={value}
              index={index}
              gridSize={gridSize}
              imageSrc={imageSrc}
              onClick={() => {}}
              isEmpty={false}
              showNumber={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(DragDropBoard);
