import React from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import './PuzzleBoard.css';

export default function JigsawBoard({ imageSrc, gridSize, onSolve }) {
  return (
    <div className="jigsaw-board-container">
      <JigsawPuzzle
        imageSrc={imageSrc}
        rows={gridSize}
        columns={gridSize}
        onSolved={onSolve}
      />
    </div>
  );
}
