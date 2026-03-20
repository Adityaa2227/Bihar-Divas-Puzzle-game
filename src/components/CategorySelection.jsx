import { CATEGORIES } from '../utils/constants';
import LazyImage from './LazyImage';

export default function CategorySelection({ onSelectCategory }) {
  return (
    <div className="animate-[fadeIn_0.5s_ease] w-full">

      {/* ── KIOSK 2-COL LAYOUT ── */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1.4fr] gap-0 items-stretch min-h-[420px]">

        {/* LEFT — Title & Description */}
        <div className="flex flex-col justify-center gap-4 text-center lg:text-left px-2 lg:pr-10 pb-6 lg:pb-0">
          <div>
            <h2 className="text-3xl lg:text-[3.2rem] lg:leading-tight font-extrabold text-orange-600 mb-2 drop-shadow-sm">Select a Theme</h2>
            <p className="text-amber-900/80 dark:text-slate-300 text-sm lg:text-lg max-w-md mx-auto lg:mx-0 font-semibold leading-relaxed">
              What part of Bihar's legacy would you like to explore? Pick a category to begin your puzzle journey.
            </p>
          </div>

          {/* Decorative info chips */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
            <span className="bg-orange-500/10 dark:bg-orange-500/20 text-orange-700 dark:text-orange-300 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/20">🏛️ Heritage</span>
            <span className="bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 text-xs font-bold px-3 py-1.5 rounded-full border border-sky-500/20">🌆 Modern</span>
            <span className="bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500/20">🍲 Cuisines</span>
            <span className="bg-pink-500/10 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 text-xs font-bold px-3 py-1.5 rounded-full border border-pink-500/20">🎨 Art</span>
          </div>
        </div>

        {/* CENTER DIVIDER — decorative (hidden on mobile) */}
        <div className="hidden lg:flex flex-col items-center justify-center px-6 gap-3 select-none">
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-lg">🎯</div>
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* RIGHT — Category Cards */}
        <div className="grid grid-cols-2 gap-3 lg:gap-4">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white/85 dark:bg-slate-800/85 border border-orange-200/50 dark:border-slate-600 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col backdrop-blur-md h-full hover:-translate-y-1.5 hover:border-orange-500 hover:shadow-[0_8px_25px_rgba(234,88,12,0.2)] group shadow-sm active:scale-[0.97]" 
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-200 dark:bg-slate-700">
                <LazyImage src={cat.image} alt={cat.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-2.5">
                   <div className="text-xl bg-white/10 backdrop-blur-[5px] w-9 h-9 flex items-center justify-center rounded-full border border-white/20 shadow-sm">{cat.icon}</div>
                </div>
              </div>
              <div className="p-3 lg:p-4 flex flex-col justify-center flex-1 bg-white/50 dark:bg-transparent">
                <h3 className="text-base lg:text-xl font-bold text-slate-800 dark:text-gray-100 mb-0.5">{cat.label}</h3>
                <p className="text-[0.7rem] lg:text-sm text-amber-900/70 dark:text-slate-400 leading-snug font-medium line-clamp-2 opacity-90">{cat.desc || 'Explore amazing landmarks and rich culture.'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
