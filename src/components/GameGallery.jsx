import { useState } from 'react';
import { AGE_GROUPS, GAME_MODES } from '../utils/constants';
import { playClickSound, playNavSound } from '../utils/sounds';

export default function GameGallery({
  images,
  selectedImage,
  onImageSelect,
  difficulty,
  onDifficultyChange,
  gameMode,
  onGameModeChange,
  onStart,
  bestScore,
}) {
  const [step, setStep] = useState(1);

  const handleModeChange = (mode) => {
    playClickSound();
    onGameModeChange(mode);
  };

  const handleDiffChange = (diff) => {
    playClickSound();
    onDifficultyChange(diff);
  };

  const handleStartClick = () => {
    playNavSound();
    onStart();
  };

  const gameModes = [
    { mode: GAME_MODES.SLIDER, icon: '🧩', label: 'Slider', desc: 'Classic slide' },
    { mode: GAME_MODES.DRAG_DROP, icon: '🖱️', label: 'Drag & Drop', desc: 'Swap pieces' },
    { mode: GAME_MODES.JIGSAW, icon: '🎨', label: 'Jigsaw', desc: 'Interlocking' },
  ];

  return (
    <div className="animate-[fadeIn_0.5s_ease] w-full h-full flex flex-col">

      {/* ── KIOSK 2-COL: Left = info, Right = content ── */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1.6fr] items-stretch gap-0 flex-1">

        {/* LEFT — Title + stepper nav */}
        <div className="flex flex-col justify-center gap-2 pr-0 lg:pr-2 pb-2 lg:pb-0 text-center lg:text-left">

          <div>
            <h2 className="text-3xl lg:text-[2.8rem] lg:leading-tight font-black text-orange-600 mb-2 drop-shadow-sm">
              ⚡ Let's Play!
            </h2>
            <p className="text-amber-900/80 dark:text-slate-300 text-sm lg:text-base max-w-sm mx-auto lg:mx-0 font-semibold leading-relaxed">
              Pick a game mode, set your skill level, and start solving Bihar's cultural puzzles!
            </p>
          </div>

          {/* Step indicators */}
          <div className="flex lg:flex-col gap-3 justify-center lg:justify-start">
            <button
              onClick={() => { playClickSound(); setStep(1); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all cursor-pointer border ${step === 1 ? 'bg-orange-600 text-white border-orange-600 shadow-lg' : 'bg-white/10 text-slate-700 dark:text-white/60 border-white/10 hover:border-orange-400'}`}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${step === 1 ? 'bg-white text-orange-600' : 'bg-orange-600/20 text-orange-600'}`}>1</span>
              <span className="font-bold text-sm">Game Mode</span>
            </button>
            <button
              onClick={() => { playClickSound(); setStep(2); }}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all cursor-pointer border ${step === 2 ? 'bg-orange-600 text-white border-orange-600 shadow-lg' : 'bg-white/10 text-slate-700 dark:text-white/60 border-white/10 hover:border-orange-400'}`}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${step === 2 ? 'bg-white text-orange-600' : 'bg-orange-600/20 text-orange-600'}`}>2</span>
              <span className="font-bold text-sm">Skill Level</span>
            </button>
          </div>

          {/* Info about selected mode */}
          <div className="hidden lg:block mt-2">
            <div className="bg-white/10 dark:bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-xs font-bold text-slate-600 dark:text-white/50 uppercase tracking-widest mb-1">Current Selection</div>
              <div className="text-base font-black text-slate-800 dark:text-white">
                {gameModes.find(m => m.mode === gameMode)?.label} • {AGE_GROUPS[difficulty]?.label}
              </div>
            </div>
          </div>
        </div>

        {/* CENTER DIVIDER */}
        <div className="hidden lg:flex flex-col items-center justify-center px-1 gap-1 select-none">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-lg">⚡</div>
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* RIGHT — Step content */}
        <div className="flex flex-col justify-center">

          {/* Step 1: Game Mode */}
          {step === 1 && (
            <div className="flex flex-col animate-[scaleIn_0.3s_ease] gap-3">
              <h3 className="flex items-center gap-3 text-xl font-black text-slate-800 dark:text-gray-100 uppercase tracking-widest">
                <span className="bg-orange-600 text-white w-9 h-9 flex items-center justify-center rounded-full shadow-lg text-sm">1</span>
                Select Game Mode
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {gameModes.map(({ mode, icon, label, desc }) => (
                  <button
                    key={mode}
                    className={`flex flex-col items-center gap-2 p-2 lg:p-3 rounded-2xl border-2 transition-all duration-300 cursor-pointer group bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm ${gameMode === mode ? 'border-orange-500 bg-orange-50/80 dark:bg-orange-950/40 shadow-xl scale-[1.03]' : 'border-orange-200/50 dark:border-white/10 hover:border-orange-400 hover:scale-[1.02]'}`}
                    onClick={() => handleModeChange(mode)}
                  >
                    <span className="text-5xl group-hover:scale-110 transition-transform drop-shadow-md">{icon}</span>
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-black text-slate-900 dark:text-gray-100">{label}</span>
                      <span className="text-xs font-bold text-amber-900/70 dark:text-slate-400 uppercase tracking-widest mt-1">{desc}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button 
                className="bg-orange-600 text-white font-black py-4 px-10 rounded-2xl text-lg uppercase tracking-widest transition-all duration-300 shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_10px_25px_rgba(234,88,12,0.4)] hover:bg-orange-700 hover:-translate-y-1 active:translate-y-0.5 w-full max-w-sm mx-auto cursor-pointer" 
                onClick={() => { playClickSound(); setStep(2); }}
              >
                Continue to Level ➡️
              </button>
            </div>
          )}

          {/* Step 2: Level Selection */}
          {step === 2 && (
            <div className="flex flex-col animate-[scaleIn_0.3s_ease] gap-3">
              <h3 className="flex items-center gap-3 text-xl font-black text-slate-800 dark:text-gray-100 uppercase tracking-widest">
                <span className="bg-orange-600 text-white w-9 h-9 flex items-center justify-center rounded-full shadow-lg text-sm">2</span>
                Choose Age Group
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(AGE_GROUPS).map(([key, { label, tag }]) => (
                  <button
                    key={key}
                    className={`flex flex-col items-center justify-center gap-2 p-2 lg:p-3 rounded-2xl border-2 transition-all duration-300 cursor-pointer group bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm ${difficulty === key ? 'border-orange-500 bg-orange-100 dark:bg-orange-950/50 scale-[1.03] shadow-xl' : 'border-orange-200/50 dark:border-white/10 hover:border-orange-400 hover:scale-[1.02]'}`}
                    onClick={() => handleDiffChange(key)}
                  >
                    <span className="text-sm font-black bg-orange-600 text-white px-4 py-1.5 rounded-full shadow-md transition-transform group-hover:scale-110 uppercase tracking-widest">{tag}</span>
                    <span className="text-2xl font-black text-slate-800 dark:text-white leading-tight">{label}</span>
                  </button>
                ))}
              </div>
              <button 
                className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-black py-4 px-10 rounded-2xl text-lg uppercase tracking-widest transition-all duration-300 shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_10px_25px_rgba(234,88,12,0.4)] hover:from-orange-700 hover:to-orange-600 hover:-translate-y-1 active:translate-y-0.5 w-full max-w-sm mx-auto cursor-pointer" 
                onClick={handleStartClick}
              >
                🚀 PLAY NOW!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
