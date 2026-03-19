import { memo } from 'react';

function Tile({ value, index, gridSize, imageSrc, onClick, isEmpty }) {
  if (isEmpty) {
    return (
      <div
        className="tile tile--empty"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    );
  }

  // Calculate background position based on the tile's RIGINAL value
  const originalRow = Math.floor(value / gridSize);
  const originalCol = value % gridSize;
  const bgPosX = (originalCol / (gridSize - 1)) * 100;
  const bgPosY = (originalRow / (gridSize - 1)) * 100;

  return (
    <div
      className="tile"
      onClick={() => onClick(index)}
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url("${imageSrc}")`,
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
