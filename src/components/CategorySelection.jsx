import { CATEGORIES } from '../utils/constants';
import LazyImage from './LazyImage';

export default function CategorySelection({ onSelectCategory }) {
  return (
    <div className="animate-[fadeIn_0.5s_ease] w-full h-full flex flex-col items-center justify-center py-2 md:py-6 overflow-hidden">

      {/* ── KIOSK 2-COLS ── */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch flex-1 h-full max-h-full overflow-hidden">

        {/* LEFT — BRANDING & INFO */}
        <div className="flex flex-col justify-center gap-3 md:gap-4 pr-0 md:pr-10 pb-4 md:pb-0 text-left border-b md:border-b-0 md:border-r border-white/10">
          
          {/* Government Badge (Consistent with Landing) */}
          <div className="flex flex-col items-start gap-3">
            <div className="bg-white/10 dark:bg-indigo-950/50 border border-white/15 dark:border-white/20 py-2 pl-2 pr-5 rounded-full inline-flex items-center gap-3 backdrop-blur-md shadow-lg">
              <span className="bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm font-bold shrink-0">🏛️</span>
              <div className="flex flex-col text-left leading-tight">
                <strong className="text-amber-500 dark:text-amber-300 text-[0.8rem] tracking-[0.5px] font-extrabold uppercase leading-none mb-0.5">Cultural Odyssey</strong>
                <span className="text-[0.55rem] text-slate-700 dark:text-white/70 tracking-[2px] font-bold uppercase leading-none">Government of Bihar</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-extrabold py-2 px-6 rounded-full text-[0.6rem] shadow-[0_4px_15px_rgba(234,88,12,0.35)] border border-white/25 tracking-[2px] uppercase inline-flex items-center gap-2">
              🗓️ BIHAR DIWAS 2026
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-[clamp(1.8rem,4vh,2.8rem)] md:leading-tight font-black text-[#ea580c] mb-2 [text-shadow:2px_2px_0_rgba(0,0,0,0.05)] dark:[text-shadow:2px_2px_0_rgba(255,165,0,0.1)]">
              Select a Theme
            </h2>
            <p className="text-amber-950/90 dark:text-white/80 text-xs md:text-[0.95rem] max-w-sm font-semibold leading-relaxed">
              Every pixel tells a story. From ancient ruins to modern marvels, choose a theme to start your journey through the heart of Bihar.
            </p>
          </div>

          {/* Quick Stats / Info to fill space */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-4">
            <div className="bg-white/15 dark:bg-white/5 border border-white/15 p-6 md:p-8 rounded-2xl backdrop-blur-sm transition-all hover:bg-white/25 group">
              <span className="text-4xl md:text-4xl block mb-3 md:mb-3 group-hover:scale-110 transition-transform">🏺</span>
              <span className="text-xs md:text-xs font-black text-slate-600 dark:text-white/40 uppercase tracking-[4px] block mb-2">HISTORY</span>
              <span className="text-lg md:text-lg font-black text-slate-900 dark:text-white italic">"Eternal legacy"</span>
            </div>
            <div className="bg-white/15 dark:bg-white/5 border border-white/15 p-6 md:p-8 rounded-2xl backdrop-blur-sm transition-all hover:bg-white/25 group">
              <span className="text-4xl md:text-4xl block mb-3 md:mb-3 group-hover:scale-110 transition-transform">🎡</span>
              <span className="text-xs md:text-xs font-black text-slate-600 dark:text-white/40 uppercase tracking-[4px] block mb-2">EXPERIENCE</span>
              <span className="text-lg md:text-lg font-black text-slate-900 dark:text-white italic">"Pure visual joy"</span>
            </div>
          </div>
        </div>

        {/* CENTER DIVIDER */}
        <div className="hidden md:flex flex-col items-center justify-center px-10 gap-3 select-none">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
          <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/5">🎯</div>
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
        </div>

        {/* RIGHT — CATEGORY GRID */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 pl-0 md:pl-10 pt-6 md:pt-0 items-center justify-center overflow-auto pb-4 md:pb-0">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white/10 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50 rounded-3xl p-2 sm:p-3 md:p-4 cursor-pointer transition-all duration-300 flex flex-col backdrop-blur-md aspect-square md:aspect-[5/4] hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_15px_30px_rgba(234,88,12,0.15)] group relative shadow-md" 
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-slate-900/40">
                <LazyImage src={cat.image} alt={cat.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent flex flex-col justify-end p-4 md:p-6">
                  <div className="w-full">
                    <div className="text-xl md:text-2xl bg-white/20 backdrop-blur-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl border border-white/30 shadow-lg mb-2 md:mb-3 transform transition-transform group-hover:-translate-y-2 group-hover:scale-110">{cat.icon}</div>
                    <h3 className="text-white text-sm sm:text-lg md:text-xl xl:text-2xl font-black leading-tight drop-shadow-md">{cat.label}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
