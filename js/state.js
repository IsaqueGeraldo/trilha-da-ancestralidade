/* ===== PERSISTENT STATE & USER PREFERENCES ===== */
const STORAGE_KEY = "trilha-v1";

const DEFAULT_SETTINGS = {
  bgm: true,
  sfx: true,
  vol: 80,
  th: "dark",
  lg: false
};

export function createInitialState(preservedSet = null) {
  return {
    unlocked: 1,
    museum: [],
    log: [],
    done: {},
    msg: "",
    known: [],
    disc: [],
    puz: {},
    chars: [],
    run: null,
    set: Object.assign({}, DEFAULT_SETTINGS, preservedSet || {})
  };
}

export function loadState() {
  const state = createInitialState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      Object.assign(state, parsed);
      state.set = Object.assign({}, DEFAULT_SETTINGS, parsed.set || {});
    }
  } catch (_) {
    // Fallback to default state if storage is unavailable
  }

  if (!Array.isArray(state.disc)) {
    state.disc = (state.known || []).map((id, n) => ({
      id,
      e: Number(id[2]) - 1,
      n: n + 1,
      card: "",
      ch: ""
    }));
  }
  if (!state.puz || typeof state.puz !== "object") {
    state.puz = {};
  }
  return state;
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {
    // Ignore quota/storage restrictions
  }
}

export function resetState(state) {
  const fresh = createInitialState(state.set);
  Object.keys(state).forEach((k) => delete state[k]);
  Object.assign(state, fresh);
  saveState(state);
}

export function isDarkTheme(state) {
  return state.set.th !== "light";
}

export function getVolume(state) {
  return Math.max(0, Math.min(1, (state.set.vol ?? 80) / 100));
}
