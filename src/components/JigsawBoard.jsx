import React from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import './PuzzleBoard.css';

export default function JigsawBoard({ imageSrc, gridSize, onSolve }) {
  return (
    <div className="jigsaw-board-container" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', border: '5px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
      <JigsawPuzzle
        imageSrc={imageSrc}
        rows={gridSize}
        columns={gridSize}
        onSolved={onSolve}
      />
    </div>
  );
}
