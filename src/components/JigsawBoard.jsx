import React from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

export default function JigsawBoard({ imageSrc, gridSize, onSolve }) {
  return (
    <div className="w-full relative">
      <JigsawPuzzle
        imageSrc={imageSrc}
        rows={gridSize}
        columns={gridSize}
        onSolved={onSolve}
      />
    </div>
  );
}
