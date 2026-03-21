export default function Controls({
  hasWon,
  onRestart,
  onPlayAgain,
  onHint,
  showingHint,
  hintsRemaining,
  maxHints,
}) {
  return (
    <div className="flex gap-2 w-full animate-[fadeIn_0.3s_ease] mb-1">
      {hasWon ? (
        <button 
          className="flex-1 py-3 px-5 text-sm font-bold rounded-2xl cursor-pointer flex items-center justify-center gap-2 select-none bg-white/80 dark:bg-white/10 backdrop-blur-md text-orange-600 dark:text-orange-400 border-2 border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(234,88,12,0.2)] hover:border-orange-500 active:scale-95 group"
          onClick={onPlayAgain}
        >
          <span className="text-lg group-hover:rotate-180 transition-transform duration-500">🔄</span>
          <span>Play Again</span>
        </button>
      ) : (
        <button 
          className="flex-1 py-3 px-5 text-sm font-bold rounded-2xl cursor-pointer flex items-center justify-center gap-2 select-none bg-white/80 dark:bg-white/10 backdrop-blur-md text-orange-600 dark:text-orange-400 border-2 border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(234,88,12,0.2)] hover:border-orange-500 active:scale-95 group"
          onClick={onRestart}
        >
          <span className="text-lg group-hover:rotate-180 transition-transform duration-500">🔄</span>
          <span>Restart</span>
        </button>
      )}
      <button
        className={`flex-1 py-3 px-5 text-sm font-bold rounded-2xl cursor-pointer flex items-center justify-center gap-2 select-none border-none transition-all duration-300 hover:-translate-y-1 active:scale-95 group ${
          showingHint 
            ? 'bg-orange-600 text-white shadow-[0_4px_15px_rgba(234,88,12,0.4)] scale-[0.98]' 
            : 'bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 shadow-[0_4px_12px_rgba(251,191,36,0.3)] hover:shadow-[0_8px_20px_rgba(251,191,36,0.4)]'
        } ${hintsRemaining <= 0 && !showingHint ? 'opacity-50 cursor-not-allowed hover:translate-y-0 hover:shadow-none' : ''}`}
        disabled={hintsRemaining <= 0 && !showingHint}
        onClick={onHint}
      >
        <span className="text-lg group-hover:scale-125 transition-transform">💡</span>
        <span>Hint</span>
        <span className="bg-black/15 text-xs px-2 py-0.5 rounded-full font-extrabold ml-0.5">{hintsRemaining}/{maxHints}</span>
      </button>
    </div>
  );
}
