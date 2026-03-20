import { playClickSound, playToggleSound } from '../utils/sounds';

export default function Header({
  moves,
  time,
  bestScore,
  onBack,
  showBack,
  showStats = true,
  showTitle = true,
  theme,
  onToggleTheme,
  onSettings,
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-[1000] py-2 px-2 w-full backdrop-blur-md">
      <div className="flex items-center gap-3 min-h-[56px] w-full">
        {/* Back button */}
        <div className="shrink-0">
          {showBack && (
            <button 
              className="bg-white/80 dark:bg-slate-800/80 border border-orange-200/50 dark:border-slate-600 w-11 h-11 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all text-slate-800 dark:text-gray-100 shadow-sm backdrop-blur-md hover:scale-110 hover:border-orange-500 hover:shadow-md active:scale-95" 
              onClick={onBack} 
              aria-label="Back"
            >
              ⬅️
            </button>
          )}
        </div>

        {/* Title */}
        {showTitle && (
          <h1 className="flex-1 text-center text-[clamp(1.4rem,3.5vw,2.8rem)] font-extrabold bg-gradient-to-br from-orange-600 via-amber-400 to-orange-500 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
            Bihar Diwas Puzzle
          </h1>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0 ml-auto">
          <button
            className="bg-white/80 dark:bg-slate-800/80 border border-orange-200/50 dark:border-slate-600 w-11 h-11 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all text-slate-800 dark:text-gray-100 shadow-sm backdrop-blur-md hover:scale-110 hover:border-orange-500 hover:shadow-md active:scale-95"
            onClick={onSettings}
            aria-label="Settings"
          >
            ⚙️
          </button>
          <button
            className={`bg-white/80 dark:bg-slate-800/80 border border-orange-200/50 dark:border-slate-600 w-11 h-11 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-500 text-slate-800 dark:text-gray-100 shadow-sm backdrop-blur-md hover:scale-110 hover:border-orange-500 hover:shadow-md active:scale-95 ${theme === 'dark' ? 'rotate-[360deg]' : ''}`}
            onClick={() => { playToggleSound(); onToggleTheme(); }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}
