import './SettingsModal.css';
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
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100000 }}>
      <div className="modal settings-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '450px' }}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✖
        </button>
        <h2 className="modal__title" style={{ marginBottom: "8px" }}>⚙️ Settings</h2>
        
        <div className="settings-section">
          <h3 className="settings-section__title" style={{ fontSize: "1rem", color: "var(--accent)" }}>Hint Preferences</h3>
          <p className="settings-section__desc" style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "16px" }}>Set the total hints and how long they show for each group.</p>
          
          <div className="settings-list">
            <div className="settings-header-row">
              <span className="settings-header__label">Age Group</span>
              <span className="settings-header__label">Hints</span>
              <span className="settings-header__label">Sec</span>
            </div>
            {Object.keys(AGE_GROUPS).map((ageId) => (
              <div key={ageId} className="settings-row">
                <span className="settings-row__label">{AGE_GROUPS[ageId].label}</span>
                <div className="settings-row__inputs">
                  <input
                    type="number"
                    className="settings-row__input"
                    min="0"
                    max="99"
                    value={hintSettings[ageId]?.max || 0}
                    onChange={(e) => handleChange(ageId, 'max', e.target.value)}
                    title="Max Hints"
                  />
                  <input
                    type="number"
                    className="settings-row__input"
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

        <div className="modal__actions" style={{ marginTop: "24px" }}>
          <button className="btn btn--primary btn--lg" onClick={onClose} style={{ width: '100%' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
