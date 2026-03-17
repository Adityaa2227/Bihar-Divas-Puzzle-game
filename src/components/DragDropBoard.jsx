import { useState, memo } from 'react';
import Tile from './Tile';

const DragDropBoard = ({ tiles, gridSize, imageSrc, onSwap }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    // Needed for Firefox
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow drop
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      onSwap(draggedIndex, targetIndex);
    }
    setDraggedIndex(null);
  };

  return (
    <div className="puzzle-board puzzle-board--drag" style={{ aspectRatio: '1 / 1' }}>
      <div
        className="puzzle-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gap: '3px',
          width: '100%',
          height: '100%',
        }}
      >
        {tiles.map((value, index) => (
          <div
            key={`${value}-${index}`}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            style={{ width: '100%', height: '100%' }}
            className={`drag-tile-wrapper ${draggedIndex === index ? 'dragging' : ''}`}
          >
            <Tile
              value={value}
              index={index}
              gridSize={gridSize}
              imageSrc={imageSrc}
              onClick={() => {}} // No click move in drag-drop mode
              isEmpty={false} // No empty tile in drag-drop
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(DragDropBoard);
