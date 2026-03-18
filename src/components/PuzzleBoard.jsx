import Tile from './Tile';

import './PuzzleBoard.css';

export default function PuzzleBoard({ tiles, gridSize, imageSrc, onTileClick }) {
  const emptyValue = gridSize * gridSize - 1;

  return (
    <div className="puzzle-board" style={{ aspectRatio: '1 / 1' }}>
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
