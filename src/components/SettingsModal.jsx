import { useState, useEffect } from 'react';
import { AGE_GROUPS } from '../utils/constants';
import { globalVolume, setGlobalVolume } from '../utils/sounds';

export default function SettingsModal({ 
  show, 
  onClose, 
  hintSettings, 
  onUpdateHintSettings, 
  scoreSettings, 
  onUpdateScoreSettings,
  isRandomEnabled,
  onToggleRandom
}) {
  const [vol, setVol] = useState(globalVolume);

  useEffect(() => {
    if (show) {
      setVol(globalVolume);
    }
  }, [show]);

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVol(newVol);
    setGlobalVolume(newVol);
  };

  if (!show) return null;

  const handleChange = (ageId, prop, val) => {
    const newVal = parseInt(val, 10);
    if (!isNaN(newVal) && newVal >= 0 && newVal <= 99) {
      onUpdateHintSettings({
        ...hintSettings,
        [ageId]: {
          ...hintSettings[ageId],
          [prop]: newVal
        }
      });
    }
  };

  const handleScoreChange = (prop, val) => {
    const newVal = parseInt(val, 10);
    if (!isNaN(newVal) && newVal >= 0 && newVal <= 999) {
      onUpdateScoreSettings({
        ...scoreSettings,
        [prop]: newVal
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 backdrop-blur-[6px] animate-[fadeIn_0.3s_ease] p-2" onClick={onClose}>
      <div className="bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border)] rounded-[18px] p-4 sm:p-5 max-w-[500px] w-full text-center animate-[slideUp_0.4s_ease] shadow-[var(--shadow-lg),0_0_50px_var(--accent-glow)] relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-transparent border-none text-xl text-[var(--text-secondary)] cursor-pointer w-8 h-8 flex items-center justify-center rounded-full transition-all hover:text-[var(--accent)] hover:bg-black/5 hover:scale-110" onClick={onClose} aria-label="Close">
          ✖
        </button>
        <h2 className="text-[1.2rem] sm:text-[1.4rem] font-extrabold bg-gradient-to-br from-[var(--accent)] to-[#fbbf24] bg-clip-text text-transparent mb-1">⚙️ Settings</h2>
        
        <div className="mt-1 text-left">
          <h3 className="text-xs sm:text-sm font-bold text-[var(--accent)] mb-0.5">Hint Preferences</h3>
          <p className="text-[0.65rem] sm:text-[0.75rem] text-[var(--text-secondary)] mb-2">Set max hints and show duration.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {Object.keys(AGE_GROUPS).map((ageId) => (
              <div key={ageId} className="flex items-center justify-between py-2 px-3 sm:px-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl gap-2 transition-all hover:border-[var(--accent)] hover:shadow-[0_0_5px_var(--accent-glow)]">
                <span className="font-semibold text-[var(--text-primary)] text-[0.8rem] sm:text-[0.85rem] text-left">{AGE_GROUPS[ageId].label}</span>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <span className="text-[0.6rem] font-bold text-[var(--text-muted)] uppercase mb-0.5">Hints</span>
                    <input
                      type="number"
                      className="w-[45px] sm:w-[50px] p-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-center outline-none text-xs sm:text-sm focus:border-[var(--accent)] transition-all"
                      min="0"
                      max="99"
                      value={hintSettings[ageId]?.max || 0}
                      onChange={(e) => handleChange(ageId, 'max', e.target.value)}
                      title="Max Hints"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[0.6rem] font-bold text-[var(--text-muted)] uppercase mb-0.5">Sec</span>
                    <input
                      type="number"
                      className="w-[45px] sm:w-[50px] p-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-center outline-none text-xs sm:text-sm focus:border-[var(--accent)] transition-all"
                      min="1"
                      max="99"
                      value={hintSettings[ageId]?.duration || 1}
                      onChange={(e) => handleChange(ageId, 'duration', e.target.value)}
                      title="Duration (Seconds)"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-3 sm:pt-4 border-t border-[var(--border)] text-left">
          <h3 className="text-sm sm:text-base font-bold text-[var(--accent)] mb-0.5">Scoring Thresholds</h3>
          <p className="text-[0.7rem] sm:text-[0.8rem] text-[var(--text-secondary)] mb-3">Set limits before points start deducting (Drag & Drop mode).</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
             <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl gap-2 transition-all hover:border-[var(--accent)]">
               <div className="flex flex-col text-left">
                 <span className="text-[0.8rem] sm:text-[0.85rem] font-bold text-[var(--text-primary)]">Move Limit</span>
                 <span className="text-[0.6rem] text-[var(--text-muted)] uppercase font-bold">Grace period</span>
               </div>
               <input
                 type="number"
                 className="w-[50px] sm:w-[55px] p-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-center outline-none text-xs sm:text-sm focus:border-[var(--accent)]"
                 min="0"
                 max="999"
                 value={scoreSettings?.movesThreshold || 0}
                 onChange={(e) => handleScoreChange('movesThreshold', e.target.value)}
               />
             </div>
             <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl gap-2 transition-all hover:border-[var(--accent)]">
               <div className="flex flex-col text-left">
                 <span className="text-[0.8rem] sm:text-[0.85rem] font-bold text-[var(--text-primary)]">Time Limit</span>
                 <span className="text-[0.6rem] text-[var(--text-muted)] uppercase font-bold">Sec Used</span>
               </div>
               <input
                 type="number"
                 className="w-[50px] sm:w-[55px] p-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-center outline-none text-xs sm:text-sm focus:border-[var(--accent)]"
                 min="0"
                 max="999"
                 value={scoreSettings?.timeThreshold || 0}
                 onChange={(e) => handleScoreChange('timeThreshold', e.target.value)}
               />
             </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-[var(--border)] text-left">
          <h3 className="text-xs sm:text-sm font-bold text-[var(--accent)] mb-0.5">Global Game Preferences</h3>
          <p className="text-[0.65rem] sm:text-[0.75rem] text-[var(--text-secondary)] mb-2.5">Extra options for a better experience.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Random Button */}
            <button 
              onClick={onToggleRandom}
              className={`flex items-center justify-between py-2 px-3 border rounded-xl transition-all ${isRandomEnabled ? 'bg-orange-500/10 border-orange-500 shadow-[0_0_10px_rgba(234,88,12,0.1)]' : 'bg-[var(--bg-card)] border-[var(--border)] hover:border-orange-500/50'}`}
            >
              <div className="flex flex-col text-left">
                <span className={`text-[0.75rem] font-bold ${isRandomEnabled ? 'text-orange-500' : 'text-[var(--text-primary)]'}`}>🎲 Random Entry</span>
                <span className="text-[0.55rem] text-[var(--text-muted)] uppercase font-bold">Any Category</span>
              </div>
              <div className={`w-8 h-4 rounded-full relative transition-colors ${isRandomEnabled ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-700'}`}>
                <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${isRandomEnabled ? 'right-0.5' : 'left-0.5'}`} />
              </div>
            </button>

            {/* Master Volume */}
            <div className="py-2 px-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl flex flex-col justify-center gap-1 transition-all focus-within:border-[var(--accent)]">
              <div className="flex justify-between items-center w-full">
                <span className="text-[0.7rem] font-bold text-[var(--text-primary)]">🔊 Volume</span>
                <span className="text-[0.65rem] font-bold text-[var(--accent)]">{Math.round(vol * 100)}%</span>
              </div>
              <input type="range" min="0" max="1" step="0.01" value={vol} onChange={handleVolumeChange} className="w-full h-1 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 pt-1">
          <button className="w-full sm:w-[160px] font-inherit text-xs sm:text-sm font-bold py-2 px-6 border-none rounded-[14px] cursor-pointer flex items-center justify-center gap-1.5 bg-gradient-to-br from-[var(--accent)] to-[#d97706] text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-1" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
