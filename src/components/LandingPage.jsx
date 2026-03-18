import { useEffect, useState } from 'react';
import { playMoveSound } from '../utils/sounds';

export default function LandingPage({ onStart, onStartBGM }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Browser restriction: Start BGM on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      onStartBGM?.();
      window.removeEventListener('mousedown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };
    window.addEventListener('mousedown', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('pointerdown', handleFirstInteraction);
    return () => {
      window.removeEventListener('mousedown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };
  }, [onStartBGM]);

  const handleStart = () => {
    onStartBGM?.(); // Ensure it starts if not already
    playMoveSound();
    onStart();
  };

  return (
    <div className={`landing-page ${animate ? 'landing-page--animate' : ''}`}>
      <div className="landing-page__pattern-overlay"></div>
      
      <div className="landing-page__content">
        <div className="landing-page__header">
            <span className="landing-page__tag">✨ CELEBRATING CULTURE & HERITAGE ✨</span>
        </div>

        <h1 className="landing-page__title">
            <span className="title-hindi">बिहार दिवस</span>
            <span className="title-english">2026 EDITION</span>
        </h1>

        <p className="landing-page__desc">
            Experience the rich heritage of Bihar through interactive puzzles. Discover historical landmarks, iconic food, and our glorious past!
        </p>

        <div className="landing-page__cards">
            <div className="info-card">
              <span className="info-icon">🏛️</span>
              <span className="info-text">Historical Places</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🍲</span>
              <span className="info-text">Local Cuisines</span>
            </div>
            <div className="info-card">
              <span className="info-icon">🎨</span>
              <span className="info-text">Rich Art & Culture</span>
            </div>
        </div>

        <button className="landing-btn" onClick={handleStart}>
           Explore Puzzles <span className="btn-arrow">→</span>
        </button>
      </div>

      <div className="landing-page__decoration bottom-left"></div>
      <div className="landing-page__decoration top-right"></div>
    </div>
  );
}
