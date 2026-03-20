import Tile from './Tile';

export default function PuzzleBoard({ tiles, gridSize, imageSrc, onTileClick }) {
  const emptyValue = gridSize * gridSize - 1;

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
          <Tile
            key={value}
            value={value}
            index={index}
            gridSize={gridSize}
            imageSrc={imageSrc}
            onClick={onTileClick}
            isEmpty={value === emptyValue}
          />
        ))}
      </div>
    </div>
  );
}
