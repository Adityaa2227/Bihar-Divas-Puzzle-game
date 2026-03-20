import { AGE_GROUPS } from '../utils/constants';

export default function SettingsModal({ show, onClose, hintSettings, onUpdateHintSettings }) {
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

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 backdrop-blur-[8px] animate-[fadeIn_0.3s_ease] p-5" onClick={onClose}>
      <div className="bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border)] rounded-[20px] p-8 px-6 max-w-[450px] w-full text-center animate-[slideUp_0.4s_ease] shadow-[var(--shadow-lg),0_0_60px_var(--accent-glow)] relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-4 right-4 bg-transparent border-none text-xl text-[var(--text-secondary)] cursor-pointer w-8 h-8 flex items-center justify-center rounded-full transition-all hover:text-[var(--accent)] hover:bg-black/5 hover:scale-110" onClick={onClose} aria-label="Close">
          ✖
        </button>
        <h2 className="text-[1.6rem] font-extrabold bg-gradient-to-br from-[var(--accent)] to-[#fbbf24] bg-clip-text text-transparent mb-2">⚙️ Settings</h2>
        
        <div>
          <h3 className="text-base font-bold text-[var(--accent)] mb-1">Hint Preferences</h3>
          <p className="text-[0.8rem] text-[var(--text-secondary)] mb-4">Set the total hints and how long they show for each group.</p>
          
          <div className="flex flex-col">
            <div className="grid grid-cols-[1fr_60px_60px] gap-3 py-2 px-4 text-[0.75rem] font-bold text-[var(--text-muted)] uppercase tracking-wider">
              <span>Age Group</span>
              <span>Hints</span>
              <span>Sec</span>
            </div>
            {Object.keys(AGE_GROUPS).map((ageId) => (
              <div key={ageId} className="grid grid-cols-[1fr_auto] items-center py-3 px-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl mb-2 gap-3">
                <span className="font-semibold text-[var(--text-primary)] text-[0.9rem]">{AGE_GROUPS[ageId].label}</span>
                <div className="flex gap-3">
                  <input
                    type="number"
                    className="w-[60px] p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-center outline-none text-base focus:border-[var(--accent)] focus:shadow-[0_0_5px_var(--accent-glow)] transition-all"
                    min="0"
                    max="99"
                    value={hintSettings[ageId]?.max || 0}
                    onChange={(e) => handleChange(ageId, 'max', e.target.value)}
                    title="Max Hints"
                  />
                  <input
                    type="number"
                    className="w-[60px] p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-center outline-none text-base focus:border-[var(--accent)] focus:shadow-[0_0_5px_var(--accent-glow)] transition-all"
                    min="1"
                    max="99"
                    value={hintSettings[ageId]?.duration || 1}
                    onChange={(e) => handleChange(ageId, 'duration', e.target.value)}
                    title="Duration (Seconds)"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="w-full font-inherit text-base font-bold py-3.5 px-6 border-none rounded-[20px] cursor-pointer flex items-center justify-center gap-1.5 select-none bg-gradient-to-br from-[var(--accent)] to-[#d97706] text-white shadow-[var(--shadow-glow)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_var(--accent-glow)]" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
