import { useEffect, useState } from 'react';
import { playClickSound, playNavSound } from '../utils/sounds';
import './LandingPage.css';

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

  return (
    <div className={`landing-page ${animate ? 'landing-page--animate' : ''}`}>
      <div className="landing-page__pattern-overlay"></div>
      
      {/* Dark mode toggle on landing */}
      <button
        className="btn-icon theme-toggle landing-theme-btn"
        onClick={handleThemeToggle}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className="landing-page__content">
        <div className="landing-page__header">
            <span className="landing-page__tag">✨ CELEBRATING CULTURE & HERITAGE ✨</span>
        </div>

        <h1 className="landing-page__title">
            <span className="title-hindi">बिहार दिवस</span>
            <span className="title-english">PUZZLE QUEST • 2026</span>
        </h1>

        <p className="landing-page__desc">
            Test your skills with Bihar's iconic landmarks, delicious food & rich culture. Choose your level — from Kids to Senior!
        </p>

        <div className="landing-page__cards">
            <div className="info-card">
              <span className="info-icon">🏛️</span>
              <span className="info-text">10+ Heritage</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🍲</span>
              <span className="info-text">7+ Cuisines</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🎨</span>
              <span className="info-text">7+ Art Forms</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🎮</span>
              <span className="info-text">3 Game Modes</span>
            </div>
        </div>

        <button className="landing-btn" onClick={handleStart}>
           🎮 Start Puzzle Quest <span className="btn-arrow">→</span>
        </button>
      </div>

      <div className="landing-page__decoration bottom-left"></div>
      <div className="landing-page__decoration top-right"></div>
    </div>
  );
}
