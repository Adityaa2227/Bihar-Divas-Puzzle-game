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
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={() => setDraggedIndex(null)}
            className={`w-full h-full cursor-grab transition-transform duration-200 active:cursor-grabbing ${draggedIndex === index ? 'opacity-40 scale-90' : ''}`}
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
