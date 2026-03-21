import React from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

export default function JigsawBoard({ imageSrc, gridSize, onSolve }) {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-slate-100/10 dark:bg-slate-900/10">
      <div className="w-full h-full">
        <JigsawPuzzle
          imageSrc={imageSrc}
          rows={gridSize}
          columns={gridSize}
          onSolved={onSolve}
        />
      </div>
    </div>
  );
}
