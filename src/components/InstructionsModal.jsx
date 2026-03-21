import React from 'react';
import { GAME_MODES } from '../utils/constants';

export default function InstructionsModal({ show, gameMode, onClose }) {
  if (!show) return null;

  const getInstructions = () => {
    switch (gameMode) {
      case GAME_MODES.DRAG_DROP:
        return (
          <ul className="text-left space-y-3 text-[0.95rem] text-[var(--text-secondary)] mb-0 list-disc pl-5">
            <li><strong>Goal:</strong> Drag and swap tiles to arrange the image correctly.</li>
            <li><strong>Time Limit:</strong> You have <strong>60 seconds</strong> to complete the puzzle.</li>
            <li><strong>Scoring (10/10):</strong> Your score drops if you take more than <strong>12 moves</strong> or more than <strong>20 seconds</strong>.</li>
            <li><strong>Hints:</strong> Using a hint perfectly reveals the image, but deducts <strong>0.5 points</strong> from your score.</li>
          </ul>
        );
      case GAME_MODES.SLIDER:
        return (
          <ul className="text-left space-y-3 text-[0.95rem] text-[var(--text-secondary)] mb-0 list-disc pl-5">
            <li><strong>Goal:</strong> Slide adjacent tiles into the empty space to arrange the image.</li>
            <li><strong>Winning:</strong> Solve the puzzle in the shortest time and fewest moves possible.</li>
            <li><strong>Hints:</strong> Use hints if you get stuck, but try to solve it on your own!</li>
          </ul>
        );
      case GAME_MODES.JIGSAW:
        return (
          <ul className="text-left space-y-3 text-[0.95rem] text-[var(--text-secondary)] mb-0 list-disc pl-5">
            <li><strong>Goal:</strong> Drag and interlock the jigsaw pieces to reconstruct the image.</li>
            <li><strong>Winning:</strong> Complete the puzzle as quickly as you can!</li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-[8px] animate-[fadeIn_0.3s_ease] p-5">
      <div className="bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border)] rounded-[20px] p-8 px-6 max-w-[450px] w-full text-center animate-[slideUp_0.4s_ease] shadow-[var(--shadow-lg),0_0_60px_var(--accent-glow)] relative">
        <div className="text-[3.5rem] mb-2 animate-[bounce_0.6s_ease]">📖</div>
        <h2 className="text-[1.6rem] font-extrabold bg-gradient-to-br from-[var(--accent)] to-[#fbbf24] bg-clip-text text-transparent mb-4">
          How to Play
        </h2>
        
        <div className="bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] rounded-xl p-5 mb-6">
          {getInstructions()}
        </div>

        <button 
          className="w-full font-inherit text-lg font-bold py-3.5 px-6 border-none rounded-[16px] cursor-pointer flex items-center justify-center gap-2 select-none bg-gradient-to-br from-[var(--accent)] to-[#d97706] text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_var(--accent-glow)]" 
          onClick={onClose}
        >
          🚀 Got it, Let's Play!
        </button>
      </div>
    </div>
  );
}
