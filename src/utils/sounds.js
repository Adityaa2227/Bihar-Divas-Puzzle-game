import bgmFile from '../assets/bgm.mp3';

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a short click/pop sound when a tile moves.
 */
export function playMoveSound() {
  try {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.08);
  } catch (e) {
    // Silently fail if audio isn't available
  }
}

/**
 * Play a celebratory chime when the puzzle is solved.
 */
export function playWinSound() {
  try {
    const ctx = getAudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

    notes.forEach((freq, i) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, ctx.currentTime);

      const startTime = ctx.currentTime + i * 0.15;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.2, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

      oscillator.start(startTime);
      oscillator.stop(startTime + 0.4);
    });
  } catch (e) {
    // Silently fail if audio isn't available
  }
}

/**
 * BGM Manager to handle background music with volume and mute.
 */
class BackgroundMusic {
  constructor() {
    this.audio = null;
    this.src = bgmFile;
    this.initialized = false;
    this.volume = 0.3;
    this.muted = false;
  }

  init() {
    if (this.initialized) return;
    this.audio = new Audio(this.src);
    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.audio.muted = this.muted;
    this.initialized = true;
  }

  play() {
    if (!this.initialized) this.init();
    
    // Resume context if needed for potential future Web Audio integration
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    this.audio.play().catch((e) => {
      console.log('BGM play failed:', e);
      // Optional: try playing again on next user interaction if it failed due to context
    });
  }

  pause() {
    if (this.audio) this.audio.pause();
  }

  setVolume(volume) {
    this.volume = volume;
    if (this.audio) this.audio.volume = volume;
  }

  setMute(mute) {
    this.muted = mute;
    if (this.audio) this.audio.muted = mute;
  }

  toggle() {
    if (!this.audio) return;
    if (this.audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
}

export const bgmManager = new BackgroundMusic();

