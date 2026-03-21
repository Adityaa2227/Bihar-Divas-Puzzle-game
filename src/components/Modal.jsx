export default function Modal({ show, isLoss, score, gameMode, moves, time, fact, imageName, onPlayAgain, onGoHome, onClose }) {
  if (!show) return null;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-[8px] animate-[fadeIn_0.3s_ease] p-5" onClick={onClose || onPlayAgain}>
      <div className="bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border)] rounded-[20px] p-8 px-6 max-w-[380px] lg:max-w-[500px] w-full text-center animate-[slideUp_0.4s_ease] shadow-[var(--shadow-lg),0_0_60px_var(--accent-glow)] relative" onClick={(e) => e.stopPropagation()}>
        {onClose && (
          <button className="absolute top-4 right-4 bg-transparent border-none text-xl text-[var(--text-secondary)] cursor-pointer w-8 h-8 flex items-center justify-center rounded-full transition-all hover:text-[var(--accent)] hover:bg-black/5 hover:scale-110" onClick={onClose} aria-label="Close">
            ✖
          </button>
        )}
        <div className="text-[3.5rem] mb-2 animate-[bounce_0.6s_ease]">{isLoss ? '⏰' : '🎉'}</div>
        <h2 className={`text-[1.6rem] font-extrabold bg-clip-text text-transparent mb-1 ${isLoss ? 'bg-gradient-to-br from-red-600 to-rose-400' : 'bg-gradient-to-br from-[var(--accent)] to-[#fbbf24]'}`}>
          {isLoss ? "Time's Up!" : 'Puzzle Solved!'}
        </h2>
        <p className="text-[var(--text-secondary)] text-[0.9rem] mb-5">
          {isLoss ? 'You ran out of time on the ' : 'You completed the '}<strong>{imageName}</strong> puzzle!
        </p>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-[var(--bg-elevated)] rounded-xl p-3.5 flex flex-col items-center gap-1">
            <span className="text-[1.4rem]">⏱️</span>
            <span className="text-[0.7rem] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">
              {gameMode === 'drag_drop' ? 'Time Left' : 'Time'}
            </span>
            <span className={`text-[1.3rem] font-extrabold ${isLoss ? 'text-red-500' : 'text-[var(--accent)]'}`}>{formatTime(time)}</span>
          </div>
          <div className="bg-[var(--bg-elevated)] rounded-xl p-3.5 flex flex-col items-center gap-1">
            <span className="text-[1.4rem]">👆</span>
            <span className="text-[0.7rem] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Moves</span>
            <span className="text-[1.3rem] font-extrabold text-[var(--accent)]">{moves}</span>
          </div>
          {score !== null && !isLoss && (
            <div className="bg-[var(--bg-elevated)] rounded-xl p-3.5 flex flex-col items-center gap-1 col-span-2 shadow-sm border border-[var(--accent)]/10">
              <span className="text-[1.4rem]">⭐</span>
              <span className="text-[0.7rem] text-[var(--text-secondary)] uppercase tracking-wider font-semibold">Score</span>
              <span className="text-[1.8rem] font-extrabold text-[var(--accent)]">{score.toFixed(1)} <span className="text-base text-[var(--text-secondary)]">/ 10</span></span>
            </div>
          )}
        </div>

        <div className="bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] rounded-xl p-3.5 mb-5 text-left">
          <h3 className="text-[0.85rem] font-bold text-[var(--accent)] mb-1.5">📚 Did You Know?</h3>
          <p className="text-[0.8rem] text-[var(--text-secondary)] leading-relaxed">{fact}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 font-inherit text-base font-bold py-3.5 px-6 border-none rounded-[20px] cursor-pointer flex items-center justify-center gap-1.5 select-none bg-gradient-to-br from-[var(--accent)] to-[#d97706] text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_var(--accent-glow)]" onClick={onPlayAgain}>
            🔄 Play Again
          </button>
          <button className="flex-1 font-inherit text-[0.85rem] font-semibold py-2.5 px-4 border-none rounded-xl cursor-pointer flex items-center justify-center gap-1.5 select-none bg-[var(--bg-card)] text-[var(--accent)] border-2 border-[var(--accent)] transition-all hover:bg-[var(--bg-elevated)]" onClick={onGoHome}>
            🏠 Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}
