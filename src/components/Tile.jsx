import { memo } from 'react';

function Tile({ value, index, gridSize, imageSrc, onClick, isEmpty }) {
  const tileSize = 100 / gridSize;

  if (isEmpty) {
    return (
      <div
        className="tile tile--empty"
        style={{
          width: `${tileSize}%`,
          height: `${tileSize}%`,
        }}
      />
    );
  }

  // Calculate background position based on the tile's ORIGINAL value
  const originalRow = Math.floor(value / gridSize);
  const originalCol = value % gridSize;
  const bgPosX = (originalCol / (gridSize - 1)) * 100;
  const bgPosY = (originalRow / (gridSize - 1)) * 100;

  return (
    <div
      className="tile"
      onClick={() => onClick(index)}
      style={{
        width: `${tileSize}%`,
        height: `${tileSize}%`,
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: `${gridSize * 100}%`,
        backgroundPosition: `${bgPosX}% ${bgPosY}%`,
      }}
      role="button"
      tabIndex={0}
      aria-label={`Tile ${value + 1}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick(index);
      }}
    >
      <span className="tile__number">{value + 1}</span>
    </div>
  );
}

export default memo(Tile);
