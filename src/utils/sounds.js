let audioCtx = null;
let lastMouseMoveSoundTime = 0;

export let globalVolume = parseFloat(localStorage.getItem('bihar-puzzle-volume') ?? '1.0');

// The multiplier ensures the base sound levels are loud enough to hear easily.
const MASTER_MULTIPLIER = 6.0;

export const setGlobalVolume = (vol) => {
  globalVolume = parseFloat(vol);
  localStorage.setItem('bihar-puzzle-volume', globalVolume.toString());
};

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
  if (globalVolume <= 0) return;
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(600, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);

  gain.gain.setValueAtTime(0.15 * globalVolume * MASTER_MULTIPLIER, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.08);
}

/**
 * Play a celebratory chime when the puzzle is solved.
 */
export function playWinSound() {
  if (globalVolume <= 0) return;
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
      gain.gain.linearRampToValueAtTime(0.2 * globalVolume * MASTER_MULTIPLIER, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

      oscillator.start(startTime);
      oscillator.stop(startTime + 0.4);
    });
  } catch (e) {}
}

/**
 * Play a "click" SFX for button interactions.
 */
export function playClickSound() {
  if (globalVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.12 * globalVolume * MASTER_MULTIPLIER, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {}
}

/**
 * Play a "whoosh" navigation SFX.
 */
export function playNavSound() {
  if (globalVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.1 * globalVolume * MASTER_MULTIPLIER, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
}

/**
 * Play a toggle SFX (dark mode, mute).
 */
export function playToggleSound() {
  if (globalVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.setValueAtTime(660, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.06 * globalVolume * MASTER_MULTIPLIER, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

/**
 * Play a hint reveal SFX.
 */
export function playHintSound() {
  if (globalVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.08 * globalVolume * MASTER_MULTIPLIER, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {}
}

/**
 * Play a restart shuffle SFX.
 */
export function playRestartSound() {
  if (globalVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    [200, 300, 400, 500].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'triangle';
      const startTime = ctx.currentTime + i * 0.04;
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.08 * globalVolume * MASTER_MULTIPLIER, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.06);
      osc.start(startTime);
      osc.stop(startTime + 0.06);
    });
  } catch (e) {}
}

/**
 * Play an ultra-short gamified pip when hovering over interactable elements.
 */
export function playHoverSound() {
  if (globalVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.015 * globalVolume * MASTER_MULTIPLIER, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}
}

/**
 * Play a gamified subtle click pop on global mousedown.
 */
export function playInteractSound() {
  if (globalVolume <= 0) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(1000, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.02 * globalVolume * MASTER_MULTIPLIER, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {}
}

/**
 * Play a gamified magical/tech trail sound on mouse move.
 */
export function playMouseMoveSound() {
  if (globalVolume <= 0) return;
  const now = Date.now();
  if (now - lastMouseMoveSoundTime < 60) return; // rate limit for trails
  lastMouseMoveSoundTime = now;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    // Use a clearer synth type for gamified feel
    osc.type = 'triangle';
    
    // Magical scale pitches: pentatonic
    const pitches = [659.25, 783.99, 987.77, 1046.50, 1318.51, 1567.98];
    const freq = pitches[Math.floor(Math.random() * pitches.length)];
    
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.95, ctx.currentTime + 0.05);
    
    // Crisp, snappy envelope for the trail particle sound
    gain.gain.setValueAtTime(0.02 * globalVolume * MASTER_MULTIPLIER, ctx.currentTime); 
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}
}
