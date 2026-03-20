import { useEffect, useState } from 'react';
import { playClickSound, playNavSound } from '../utils/sounds';

export default function LandingPage({ onStart, theme, onToggleTheme }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleStart = () => {
    playNavSound();
    onStart();
  };

  const handleThemeToggle = () => {
    playClickSound();
    onToggleTheme();
  };

  const expectItems = [
    { icon: '🏛️', label: '10+ Heritage' },
    { icon: '🍲', label: '7+ Cuisines' },
    { icon: '🎨', label: '7+ Art Forms' },
    { icon: '🎮', label: '3 Modes' },
  ];

  return (
    <div className={`w-full min-h-screen flex items-center justify-center px-6 py-4 relative z-10 transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>

      {/* Theme Toggle */}
      <div className="fixed top-5 right-5 z-[1010]">
        <button
          className="w-11 h-11 bg-white/15 backdrop-blur-xl rounded-full flex items-center justify-center text-lg hover:bg-white/25 border border-white/25 transition-all active:scale-90 shadow-lg cursor-pointer"
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      {/* ── KIOSK FRAME ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-[1fr_auto_1fr] gap-0 items-stretch min-h-[540px]">

        {/* ════════════════════════════════
            LEFT COLUMN — BRANDING
        ════════════════════════════════ */}
        <div className="flex flex-col justify-center gap-5 pr-8 border-r border-white/10">

          {/* Government Badge */}
          <div className="flex flex-col items-start gap-3">
            <div className="bg-white/10 dark:bg-indigo-950/50 border border-white/15 dark:border-white/20 py-2 pl-2 pr-5 rounded-full inline-flex items-center gap-3 backdrop-blur-md shadow-lg">
              <span className="bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm font-bold shrink-0">🏛️</span>
              <div className="flex flex-col text-left leading-tight">
                <strong className="text-amber-500 dark:text-amber-300 text-[0.8rem] tracking-[0.5px] font-extrabold">DEPT. OF ART & CULTURE</strong>
                <span className="text-[0.55rem] text-slate-700 dark:text-white/70 tracking-[2px] font-bold uppercase">GOVERNMENT OF BIHAR</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-extrabold py-2 px-6 rounded-full text-xs shadow-[0_4px_15px_rgba(234,88,12,0.35)] border border-white/25 tracking-wider uppercase inline-flex items-center gap-2">
              🗓️ BIHAR DIWAS 2026
            </div>
          </div>

          {/* Title */}
          <h1 className="flex flex-col select-none">
            <span className="font-['Noto_Sans_Devanagari',sans-serif] text-[clamp(3.5rem,6vw,6.5rem)] font-black leading-[1] text-[#ea580c] whitespace-nowrap [text-shadow:-1px_-1px_0_#b45309,1px_-1px_0_#b45309,-1px_1px_0_#b45309,1px_1px_0_#b45309,3px_3px_0_#fbbf24,5px_5px_0_rgba(255,255,255,0.15)] dark:[text-shadow:-1px_-1px_0_#431407,1px_-1px_0_#431407,-1px_1px_0_#431407,1px_1px_0_#431407,3px_3px_0_#9a3412,5px_5px_0_rgba(251,191,36,0.15)] py-2">
              बिहार दिवस
            </span>
            <span className="text-[clamp(0.85rem,1.5vw,1.4rem)] font-black text-[#92400e] dark:text-amber-300 tracking-[6px] opacity-80">
              PUZZLE QUEST • 2026
            </span>
          </h1>

          {/* Description */}
          <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] text-amber-950/90 dark:text-white/80 max-w-sm leading-relaxed font-semibold">
            Explore the rich culture of Bihar through fun visual challenges! Test your skills with iconic landmarks and delicious foods.
          </p>

          {/* What to Expect — lives in left col on kiosk */}
          <div className="flex flex-col gap-2">
            <h4 className="text-[0.6rem] font-black text-slate-700 dark:text-white/50 uppercase tracking-[3px]">WHAT TO EXPECT</h4>
            <div className="grid grid-cols-4 gap-2">
              {expectItems.map((item, i) => (
                <div key={i} className="bg-white/15 dark:bg-white/8 border border-white/15 dark:border-white/10 py-3 px-1 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/25 dark:hover:bg-white/15 hover:border-orange-400/50 group shadow-sm backdrop-blur-sm cursor-default">
                  <span className="text-2xl group-hover:scale-110 transition-transform drop-shadow-sm">{item.icon}</span>
                  <span className="font-bold text-[0.55rem] text-slate-800 dark:text-white/90 uppercase tracking-tight leading-tight text-center">{item.label}</span>
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
        <div className="flex flex-col justify-center gap-4 pl-8">

          {/* How to Play Card */}
          <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-3xl p-5 text-sky-950 shadow-[0_8px_30px_rgba(56,189,248,0.25)] border-2 border-sky-300/60 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <h4 className="font-black text-base mb-3 uppercase flex items-center gap-2.5 relative z-10">HOW TO PLAY <span>🎮</span></h4>
            <ul className="flex flex-col gap-2.5 relative z-10">
              {[
                'Pick a category & difficulty level below',
                'Drag & drop or slide the pieces to fit',
                'Beat the clock to set a new record! ⏳'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-[0.85rem]">
                  <span className="bg-sky-900 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm shrink-0 shadow-md font-black">{i + 1}</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Hamper Prize Card */}
          <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-4 flex items-center gap-4 text-emerald-950 shadow-[0_6px_20px_rgba(16,185,129,0.25)] border border-white/20 relative overflow-hidden group">
            <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
            <div className="text-4xl drop-shadow-md group-hover:rotate-12 transition-transform relative z-10 shrink-0">🎁</div>
            <div className="flex flex-col text-left relative z-10">
              <h4 className="font-black text-base mb-0.5 leading-tight">WIN EXCLUSIVE HAMPERS!</h4>
              <p className="font-semibold text-[0.8rem] opacity-85 leading-snug">Solve puzzles quickly & claim your Culture Champion prize.</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="w-full text-white border-none rounded-2xl py-4 px-6 text-lg font-black cursor-pointer uppercase tracking-[4px] transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-500 shadow-[inset_0_-4px_0_rgba(0,0,0,0.25),0_10px_25px_rgba(234,88,12,0.35)] hover:from-orange-700 hover:to-orange-600 hover:-translate-y-1 hover:shadow-[inset_0_-2px_0_rgba(0,0,0,0.25),0_6px_18px_rgba(234,88,12,0.45)] active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center gap-3"
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