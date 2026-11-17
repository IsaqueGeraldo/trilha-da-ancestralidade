/* ===== PROCEDURAL WEB AUDIO ENGINE (BGM + SFX + DIALOGUE VOICE) ===== */
import { getVolume } from "./state.js";

const ERA_SCALES = [
  [196, 220, 261.6, 293.7, 329.6, 392],     // Era 1: Sahel
  [164.8, 196, 220, 246.9, 293.7, 329.6],   // Era 2: Kemet
  [220, 261.6, 293.7, 329.6, 392, 440],     // Era 3: Oyó
  [146.8, 174.6, 196, 220, 261.6, 293.7],   // Era 4: Travessia
  [196, 233.1, 261.6, 293.7, 349.2, 392],   // Era 5: Colonial
  [220, 246.9, 293.7, 329.6, 392, 440],     // Era 6: Quilombo
  [261.6, 293.7, 329.6, 392, 440, 523.3]    // Era 7: Pós-abolição
];

export function createAudioEngine(state, reducedMotionQuery) {
  let ctx = null;
  let bgmTimer = null;
  let step = 0;
  let currentEra = 0;

  function init() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function tone(freq, durSec, type = "sine", baseVol = 0.08, delay = 0, slideTo = null) {
    const vol = getVolume(state);
    if (!state.set.sfx || reducedMotionQuery.matches || vol <= 0) return;
    const c = init();
    if (!c) return;

    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + durSec);

    g.gain.setValueAtTime(0.0008, t0);
    g.gain.linearRampToValueAtTime(Math.max(0.0008, baseVol * vol), t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + durSec);

    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + durSec + 0.02);
  }

  function drum(freq, durSec, baseVol = 0.05, delay = 0) {
    const vol = getVolume(state);
    if (!state.set.bgm || reducedMotionQuery.matches || vol <= 0) return;
    const c = init();
    if (!c) return;

    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq * 1.6, t0);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.65, t0 + durSec);

    g.gain.setValueAtTime(0.0008, t0);
    g.gain.linearRampToValueAtTime(Math.max(0.0008, baseVol * vol), t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + durSec);

    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + durSec + 0.02);
  }

  function pluck(freq, durSec, baseVol = 0.035, delay = 0) {
    const vol = getVolume(state);
    if (!state.set.bgm || reducedMotionQuery.matches || vol <= 0) return;
    const c = init();
    if (!c) return;

    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, t0);

    g.gain.setValueAtTime(0.0008, t0);
    g.gain.linearRampToValueAtTime(Math.max(0.0008, baseVol * vol), t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + durSec);

    osc.connect(g);
    g.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + durSec + 0.02);
  }

  function tickBgm() {
    if (!state.set.bgm || !ctx || ctx.state !== "running") return;
    const idx = currentEra >= 0 && currentEra < ERA_SCALES.length ? currentEra : 0;
    const sc = ERA_SCALES[idx];
    const pat = [0, 2, 4, 3, 5, 2, 1, 3];
    const note = sc[pat[step % pat.length]];

    pluck(note, 0.75, 0.032, 0);
    if (step % 2 === 0) drum(92, 0.18, 0.035, 0);
    if (step % 4 === 2) drum(138, 0.14, 0.025, 0.22);
    if (step % 8 === 0) pluck(sc[0] * 0.5, 1.4, 0.025, 0);
    step++;
  }

  function startBgm(eraIdx) {
    if (eraIdx !== undefined) currentEra = eraIdx;
    if (!state.set.bgm) {
      stopBgm();
      return;
    }
    init();
    if (!bgmTimer) bgmTimer = setInterval(tickBgm, 460);
  }

  function stopBgm() {
    if (bgmTimer) {
      clearInterval(bgmTimer);
      bgmTimer = null;
    }
  }

  return {
    init,
    startBgm,
    stopBgm,
    setEra(eraIdx) {
      currentEra = eraIdx;
      if (state.set.bgm) startBgm(eraIdx);
    },
    click: () => tone(520, 0.06, "triangle", 0.06, 0, 660),
    card: () => tone(300, 0.09, "sine", 0.05, 0, 420),
    chooseL: () => {
      tone(392, 0.12, "triangle", 0.07, 0, 330);
      tone(493.9, 0.16, "sine", 0.06, 0.07);
    },
    chooseR: () => {
      tone(440, 0.12, "triangle", 0.07, 0, 523.3);
      tone(587.3, 0.16, "sine", 0.06, 0.07);
    },
    discover: () => [523.3, 659.3, 784, 1046.5].forEach((f, i) => tone(f, 0.22, "sine", 0.065, i * 0.07)),
    boss: () => [220, 196, 164.8].forEach((f, i) => tone(f, 0.28, "sawtooth", 0.045, i * 0.11)),
    crisis: () => {
      tone(185, 0.25, "sawtooth", 0.07, 0, 130);
      tone(175, 0.3, "sawtooth", 0.07, 0.22, 120);
    },
    ok: () => {
      tone(523.3, 0.12, "sine", 0.07, 0);
      tone(659.3, 0.18, "sine", 0.07, 0.09);
    },
    bad: () => tone(210, 0.18, "sawtooth", 0.06, 0, 160),
    win: () => [440, 554.4, 659.3, 880].forEach((f, i) => tone(f, 0.28, "triangle", 0.07, i * 0.09)),
    page: () => tone(360, 0.08, "sine", 0.045, 0, 280),
    voice(speaker, charIdx) {
      const vol = getVolume(state);
      if (!state.set.sfx || reducedMotionQuery.matches || vol <= 0) return;
      const c = init();
      if (!c) return;

      let h = 0;
      const s = speaker || "";
      for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
      const base = 210 + (h % 130);
      const f = base + ((charIdx * 17) % 65);
      const t0 = c.currentTime;

      const osc = c.createOscillator();
      const g = c.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, t0);
      osc.frequency.exponentialRampToValueAtTime(f * 0.88, t0 + 0.032);

      g.gain.setValueAtTime(0.0008, t0);
      g.gain.linearRampToValueAtTime(Math.max(0.0008, 0.042 * vol), t0 + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0008, t0 + 0.034);

      osc.connect(g);
      g.connect(c.destination);
      osc.start(t0);
      osc.stop(t0 + 0.038);
    }
  };
}
