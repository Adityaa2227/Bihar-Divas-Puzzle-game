import './SettingsModal.css';
import { AGE_GROUPS } from '../utils/constants';

export default function SettingsModal({ show, onClose, hintSettings, onUpdateHintSettings }) {
  if (!show) return null;

  const handleChange = (ageId, val) => {
    const newVal = parseInt(val, 10);
    if (!isNaN(newVal) && newVal >= 0 && newVal <= 99) {
      onUpdateHintSettings({
        ...hintSettings,
        [ageId]: newVal
      });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100000 }}>
      <div className="modal settings-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✖
        </button>
        <h2 className="modal__title" style={{ marginBottom: "8px" }}>⚙️ Settings</h2>
        
        <div className="settings-section">
          <h3 className="settings-section__title" style={{ fontSize: "1rem", color: "var(--accent)" }}>Max Hints Allowed</h3>
          <p className="settings-section__desc" style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "16px" }}>Adjust the number of hints available for each age group.</p>
          
          <div className="settings-list">
            {Object.keys(AGE_GROUPS).map((ageId) => (
              <div key={ageId} className="settings-row">
                <span className="settings-row__label">{AGE_GROUPS[ageId].label}</span>
                <input
                  type="number"
                  className="settings-row__input"
                  min="0"
                  max="99"
                  value={hintSettings[ageId] || 0}
                  onChange={(e) => handleChange(ageId, e.target.value)}
                />
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
