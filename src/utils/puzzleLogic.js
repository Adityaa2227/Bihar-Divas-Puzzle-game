/**
 * Generate an ordered array of tile indices.
 * The last tile (gridSize*gridSize - 1) is the empty tile.
 */
export function generateTiles(gridSize) {
  const total = gridSize * gridSize;
  // tiles[i] = value at position i; value === total-1 means empty
  return Array.from({ length: total }, (_, i) => i);
}

/**
 * Count inversions in the tile array (ignoring the empty tile).
 */
function countInversions(tiles, emptyValue) {
  let inversions = 0;
  const filtered = tiles.filter((t) => t !== emptyValue);
  for (let i = 0; i < filtered.length; i++) {
    for (let j = i + 1; j < filtered.length; j++) {
      if (filtered[i] > filtered[j]) inversions++;
    }
  }
  return inversions;
}

/**
 * Check if a puzzle configuration is solvable.
 * For odd grids: solvable if inversions is even.
 * For even grids: solvable if (inversions + row of empty from bottom) is even.
 */
export function isSolvable(tiles, gridSize) {
  const emptyValue = gridSize * gridSize - 1;
  const inversions = countInversions(tiles, emptyValue);
  if (gridSize % 2 === 1) {
    return inversions % 2 === 0;
  } else {
    const emptyIndex = tiles.indexOf(emptyValue);
    const emptyRowFromBottom = gridSize - Math.floor(emptyIndex / gridSize);
    return (inversions + emptyRowFromBottom) % 2 === 0;
  }
}

/**
 * Shuffle tiles using Fisher-Yates.
 * If skipSolvabilityCheck is false, it ensures the slider is solvable.
 */
export function shuffleTiles(gridSize, skipSolvabilityCheck = false) {
  const total = gridSize * gridSize;
  let tiles;
  do {
    tiles = generateTiles(gridSize);
    // Fisher-Yates shuffle
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
  } while (
    (!skipSolvabilityCheck && (!isSolvable(tiles, gridSize) || checkWin(tiles))) ||
    (skipSolvabilityCheck && checkWin(tiles))
  );
  return tiles;
}

/**
 * Check if a tile at the given index can move to the empty tile's position.
 */
export function canMove(index, emptyIndex, gridSize) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;
  const emptyRow = Math.floor(emptyIndex / gridSize);
  const emptyCol = emptyIndex % gridSize;

  // Must be orthogonally adjacent
  const rowDiff = Math.abs(row - emptyRow);
  const colDiff = Math.abs(col - emptyCol);

  return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
}

/**
 * Check if the puzzle is solved (all tiles in order).
 */
export function checkWin(tiles) {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i] !== i) return false;
  }
  return true;
}

export function calculateDragDropScore(moves, timeRemaining, hintsUsed) {
  let score = 10.0;
  
  if (moves > 10) {
    score -= (moves - 10) * 0.3;
  }
  
  if (timeRemaining < 40) {
    const secondsSlow = 40 - timeRemaining;
    score -= (secondsSlow * 0.2); 
  }
  
  score -= (hintsUsed * 0.5);
  
  return Math.max(1.0, Math.min(10.0, Math.round(score * 10) / 10));
}
