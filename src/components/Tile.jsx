import { memo } from 'react';

function Tile({ value, index, gridSize, imageSrc, onClick, isEmpty, showNumber = true }) {
  if (isEmpty) {
    return (
      <div
        className="w-full h-full bg-transparent cursor-default"
      />
    );
  }

  // Calculate background position based on the tile's original value
  const originalRow = Math.floor(value / gridSize);
  const originalCol = value % gridSize;
  const bgPosX = (originalCol / (gridSize - 1)) * 100;
  const bgPosY = (originalRow / (gridSize - 1)) * 100;

  return (
    <div
      className="rounded-lg cursor-pointer relative overflow-hidden transition-all duration-150 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),var(--shadow-sm)] select-none touch-manipulation hover:scale-[1.03] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2),var(--shadow-md),0_0_12px_var(--accent-glow)] hover:z-[1] active:scale-[0.97]"
      onClick={() => onClick(index)}
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url("${imageSrc}")`,
        backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
        backgroundPosition: `${bgPosX}% ${bgPosY}%`,
      }}
      role="button"
      tabIndex={0}
      aria-label={`Tile ${value + 1}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick(index);
      }}
    >
      {showNumber && <span className="absolute top-1 left-1 bg-black/60 text-white text-[0.6rem] sm:text-[0.7rem] font-bold w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] flex items-center justify-center rounded-full backdrop-blur-[4px]">{value + 1}</span>}
    </div>
  );
}

export default memo(Tile);
