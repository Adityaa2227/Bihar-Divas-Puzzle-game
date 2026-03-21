import { useEffect, useState } from 'react';
import { playClickSound, playNavSound } from '../utils/sounds';

export default function LandingPage({ onStart, theme, onToggleTheme, isFullscreen, onToggleFullscreen }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleStart = () => {
    playNavSound();
    onStart();
  };

  const handleThemeToggle = () => {
    onToggleTheme();
  };

  const expectItems = [
    { icon: '🏛️', label: '50+ Heritage' },
    { icon: '🍲', label: '30+ Cuisines' },
    { icon: '🎨', label: '20+ Celebrities' },
    { icon: '🎮', label: '3 Modes' },
  ];

  return (
    <div className={`w-full min-h-screen flex items-center justify-center px-1 py-1 relative z-10 transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'} overflow-hidden`}>

      {/* Theme Toggle */}
      <div className="fixed top-5 right-5 z-[1010] flex gap-3">
        <button
          className="w-11 h-11 bg-white/15 backdrop-blur-xl rounded-full flex items-center justify-center text-lg hover:bg-white/25 border border-white/25 transition-all active:scale-90 shadow-lg cursor-pointer text-white"
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>
        <button
          className="w-11 h-11 bg-white/15 backdrop-blur-xl rounded-full flex items-center justify-center text-lg hover:bg-white/25 border border-white/25 transition-all active:scale-90 shadow-lg cursor-pointer text-white"
          onClick={onToggleFullscreen}
          aria-label={isFullscreen ? "Exit full screen" : "Go full screen"}
        >
          {isFullscreen ? <i className="fas fa-compress-arrows-alt"></i> : <i className="fas fa-expand-arrows-alt"></i>}
        </button>
      </div>

      {/* ── KIOSK FRAME ── */}
      <div className="relative z-10 w-full max-w-[1800px] px-4 lg:px-12 mx-auto grid grid-cols-[1fr_auto_1fr] gap-4 lg:gap-10 items-stretch min-h-[clamp(450px,65vh,800px)]">

        {/* ════════════════════════════════
            LEFT COLUMN — BRANDING
        ════════════════════════════════ */}
        <div className="flex flex-col justify-center gap-2 lg:gap-3 pr-2 border-r border-white/10">

          {/* Government Badge */}
          <div className="flex flex-col items-start gap-3">
            <div className="bg-white/10 dark:bg-indigo-950/50 border border-white/15 dark:border-white/20 py-2 pl-2 pr-5 rounded-full inline-flex items-center gap-3 backdrop-blur-md shadow-lg">
              <span className="bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm font-bold shrink-0">🏛️</span>
              <div className="flex flex-col text-left leading-tight">
                <strong className="text-amber-500 dark:text-amber-300 text-[0.8rem] tracking-[0.5px] font-extrabold">DEPT. OF ART & CULTURE</strong>
                <span className="text-[0.55rem] text-slate-700 dark:text-white/70 tracking-[2px] font-bold uppercase">GOVERNMENT OF BIHAR</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-extrabold py-1.5 px-5 rounded-full text-[0.55rem] lg:text-xs shadow-[0_4px_15px_rgba(234,88,12,0.35)] border border-white/25 tracking-wider uppercase inline-flex items-center gap-2">
              🗓️ BIHAR DIWAS 2026
            </div>
          </div>

          {/* Title */}
          <h1 className="flex flex-col select-none">
            <span className="font-['Noto_Sans_Devanagari',sans-serif] text-[clamp(3.5rem,9vh,8rem)] font-black leading-[1] text-[#ea580c] whitespace-nowrap [text-shadow:-1px_-1px_0_#b45309,1px_-1px_0_#b45309,-1px_1px_0_#b45309,1px_1px_0_#b45309,3px_3px_0_#fbbf24,5px_5px_0_rgba(255,255,255,0.15)] dark:[text-shadow:-1px_-1px_0_#431407,1px_-1px_0_#431407,-1px_1px_0_#431407,1px_1px_0_#431407,3px_3px_0_#9a3412,5px_5px_0_rgba(251,191,36,0.15)] py-1 lg:py-2">
              बिहार दिवस
            </span>
            <span className="text-[clamp(0.9rem,2.5vh,1.5rem)] font-black text-[#92400e] dark:text-amber-300 tracking-[5px] lg:tracking-[8px] opacity-80">
              PUZZLE QUEST • 2026
            </span>
          </h1>

          {/* Description */}
          <p className="text-[clamp(1.1rem,1.5vw,1.4rem)] text-amber-950/90 dark:text-white/80 max-w-lg mt-2 leading-relaxed lg:leading-loose font-semibold">
            Explore the rich culture of Bihar through fun visual challenges! Test your skills with iconic landmarks and delicious foods.
          </p>

          {/* What to Expect — lives in left col on kiosk */}
          <div className="flex flex-col gap-2 lg:gap-4 mt-2 lg:mt-6">
            <h4 className="text-[0.7rem] lg:text-[0.85rem] font-black text-slate-700 dark:text-white/50 uppercase tracking-[4px]">WHAT TO EXPECT</h4>
            <div className="grid grid-cols-4 gap-3 lg:gap-4 max-w-2xl">
              {expectItems.map((item, i) => (
                <div key={i} className="bg-white/15 dark:bg-white/8 border border-white/15 dark:border-white/10 py-4 px-2 lg:px-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/25 dark:hover:bg-white/15 hover:border-orange-400/50 group shadow-sm backdrop-blur-sm cursor-default">
                  <span className="text-3xl lg:text-4xl group-hover:scale-110 transition-transform drop-shadow-sm">{item.icon}</span>
                  <span className="font-bold text-[0.6rem] lg:text-[0.7rem] text-slate-800 dark:text-white/90 uppercase tracking-tight leading-tight text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            CENTER DIVIDER — decorative
        ════════════════════════════════ */}
        <div className="flex flex-col items-center justify-center px-6 gap-3 select-none">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-xl">🧩</div>
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* ════════════════════════════════
            RIGHT COLUMN — GAME INFO + CTA
        ════════════════════════════════ */}
        <div className="flex flex-col justify-center gap-4 lg:gap-6 pl-2 lg:pl-10">

          {/* How to Play Card */}
          <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-3xl p-6 lg:p-8 text-sky-950 shadow-[0_8px_30px_rgba(56,189,248,0.25)] border-2 border-sky-300/60 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <h4 className="font-black text-xl lg:text-2xl mb-4 lg:mb-6 uppercase flex items-center gap-3 relative z-10">HOW TO PLAY <span>🎮</span></h4>
            <ul className="flex flex-col gap-3 lg:gap-4 relative z-10">
              {[
                'Pick a category & difficulty level below',
                'Drag & drop or slide the pieces to fit',
                'Beat the clock to set a new record! ⏳'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 font-bold text-sm lg:text-lg">
                  <span className="bg-sky-900 text-white w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full text-base lg:text-lg shrink-0 shadow-md font-black">{i + 1}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Hamper Prize Card */}
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl p-5 lg:p-6 flex items-center gap-5 lg:gap-6 text-emerald-950 shadow-[0_6px_20px_rgba(16,185,129,0.25)] border border-white/20 relative overflow-hidden group">
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-white/10 rounded-full blur-3xl"></div>
            <div className="text-5xl lg:text-6xl drop-shadow-md group-hover:rotate-12 transition-transform relative z-10 shrink-0">🎁</div>
            <div className="flex flex-col text-left relative z-10">
              <h4 className="font-black text-lg lg:text-xl mb-1 lg:mb-2 leading-tight">WIN EXCLUSIVE HAMPERS!</h4>
              <p className="font-semibold text-sm lg:text-base opacity-85 leading-snug">Solve puzzles quickly & claim your Culture Champion prize.</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="w-full text-white border-none rounded-3xl py-5 lg:py-6 px-6 lg:px-8 text-xl lg:text-2xl font-black cursor-pointer uppercase tracking-[5px] transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-500 shadow-[inset_0_-4px_0_rgba(0,0,0,0.25),0_10px_25px_rgba(234,88,12,0.35)] hover:from-orange-700 hover:to-orange-600 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_rgba(0,0,0,0.25),0_6px_18px_rgba(234,88,12,0.45)] active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center gap-4 mt-2"
            onClick={handleStart}
          >
            START PUZZLE QUEST
          </button>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute w-[500px] h-[500px] rounded-full z-0 blur-[100px] -bottom-[180px] -left-[180px] bg-amber-200/40 dark:bg-blue-900/30 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full z-0 blur-[100px] -top-[180px] -right-[180px] bg-orange-400/20 dark:bg-indigo-900/30 pointer-events-none"></div>
    </div>
  );
}