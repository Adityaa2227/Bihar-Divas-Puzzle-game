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
 * Play a "click" SFX for button interactions.
 */
export function playClickSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch (e) {}
}

/**
 * Play a "whoosh" navigation SFX.
 */
export function playNavSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
}

/**
 * Play a toggle SFX (dark mode, mute).
 */
export function playToggleSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.setValueAtTime(660, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

/**
 * Play a hint reveal SFX.
 */
export function playHintSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch (e) {}
}

/**
 * Play a restart shuffle SFX.
 */
export function playRestartSound() {
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
      gain.gain.setValueAtTime(0.08, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.06);
      osc.start(startTime);
      osc.stop(startTime + 0.06);
    });
  } catch (e) {}
}


