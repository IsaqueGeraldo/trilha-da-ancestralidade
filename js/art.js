/* ===== PROCEDURAL SVG SCENERY, HERO & CHARACTER ART ===== */
export const ICONS = {
  "book-open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  landmark: '<path d="M3 22h18"/><path d="M6 18v-7M10 18v-7M14 18v-7M18 18v-7"/><path d="M12 2 20 7H4z"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  sliders: '<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  map: '<path d="M14.1 5.55a2 2 0 0 0 1.8 0l3.66-1.83A1 1 0 0 1 21 4.62v12.76a1 1 0 0 1-.55.9l-4.55 2.27a2 2 0 0 1-1.79 0l-4.21-2.1a2 2 0 0 0-1.79 0l-3.66 1.83A1 1 0 0 1 3 19.38V6.62a1 1 0 0 1 .55-.9l4.55-2.27a2 2 0 0 1 1.79 0z"/><path d="M15 5.76v15M9 3.24v15"/>',
  vol: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  mute: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>'
};

export const PILLAR_ICONS = ["book-open", "music", "users", "landmark"];

export const ERA_VEIL_COLORS = [
  "#7a4a1a",
  "#6b5a24",
  "#6b2e1c",
  "#1f2a3a",
  "#5a3a1c",
  "#2f4a28",
  "#3a2a45"
];

export const ERA_PALETTES = {
  dark: ["#1f140b", "#1c1a0e", "#211210", "#101924", "#21150e", "#121f12", "#1c131e"],
  light: ["#efdfc0", "#e5e3c3", "#ecd6c2", "#cbd8e6", "#ead7c5", "#cde0c8", "#dfd1e3"]
};

const ERA_SCENES = {
  1: (k) => `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#c9893f"/><circle cx="220" cy="48" r="26" fill="#f2d28a"/><g fill="#8e3f22"><path d="M0 160V110l25-22 25 22v50zM60 160V96l30-30 30 30v64zM130 160V114l22-18 22 18v46zM190 160V100l28-26 28 26v60z"/></g><g fill="#2b1a10"><path d="M${20 + k * 30} 160v-22h14v22zM${150 - k * 8} 160v-18h12v18z"/></g></svg>`,
  2: (k) => `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#d9a94a"/><circle cx="${60 + k * 30}" cy="52" r="28" fill="#a8482a"/><path d="M0 110q38-18 75 0t75 0 75 0 75 0v50H0z" fill="#4a6b3a"/><path d="M0 128q38-14 75 0t75 0 75 0 75 0v32H0z" fill="#2f4a28"/><path d="M215 110l32-62 32 62z" fill="#e9cf93" stroke="#2b1a10" stroke-width="3"/></svg>`,
  3: (k) => `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#c47a3a"/><circle cx="${70 + k * 20}" cy="46" r="24" fill="#f2d28a"/><path d="M0 112h300v48H0z" fill="#8e3f22"/><path d="M14 112l32-28 32 28zM214 112l36-32 36 32z" fill="#e9cf93" stroke="#2b1a10" stroke-width="3"/></svg>`,
  4: (k) => `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#1f2e42"/><circle cx="${230 - k * 25}" cy="42" r="20" fill="#f1e3c8" opacity=".85"/><g fill="#f1e3c8" opacity=".6"><circle cx="45" cy="30" r="1.5"/><circle cx="95" cy="50" r="1.2"/><circle cx="170" cy="25" r="1.5"/></g><path d="M35 102l18-48 22 48z" fill="#d9a94a" opacity=".75"/><path d="M0 104q37-14 75 0t75 0 75 0 75 0v56H0z" fill="#2a435e"/><path d="M0 124q37-12 75 0t75 0 75 0 75 0v36H0z" fill="#162230"/></svg>`,
  5: (k) => `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#b36a3c"/><circle cx="${225 - k * 15}" cy="46" r="24" fill="#f2d28a"/><path d="M0 112h300v48H0z" fill="#5e3419"/><g fill="#e4d4b4" stroke="#2b1a10" stroke-width="2.5"><path d="M16 112V68l26-20 26 20v44z"/><path d="M42 36v14M35 43h14"/><rect x="210" y="76" width="66" height="36"/></g></svg>`,
  6: (k) => `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#3b5c36"/><circle cx="${75 + k * 25}" cy="44" r="24" fill="#d9a94a"/><path d="M-10 118l65-52 60 44 75-60 120 68v42H-10z" fill="#294225"/><path d="M0 120h300v40H0z" fill="#1e301b"/><g stroke="#2b1a10" stroke-width="2.5" fill="#c9893f"><path d="M22 124V96l18-16 18 16v28zM232 124V92l20-16 20 16v32z"/></g></svg>`,
  7: (k) => `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect width="300" height="160" fill="#6a485e"/><circle cx="${80 + k * 28}" cy="44" r="22" fill="#f2d28a"/><g fill="#382534"><rect x="14" y="64" width="46" height="54"/><rect x="66" y="48" width="54" height="70"/><rect x="205" y="56" width="68" height="62"/></g><g fill="#d9a94a"><rect x="24" y="74" width="8" height="10"/><rect x="40" y="74" width="8" height="10"/><rect x="78" y="60" width="10" height="12"/><rect x="220" y="68" width="10" height="12"/></g><path d="M0 116h300v44H0z" fill="#241722"/></svg>`
};

export function iconSvg(name, size = 0) {
  const style = size ? ` style="width:${size}px;height:${size}px"` : "";
  return `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"${style}>${ICONS[name] || ""}</svg>`;
}

const SKIN_PALETTES = {
  // Eras 1–4: povos africanos pré-coloniais e da travessia (tons de pele retintos e profundos, sem miscigenação colonial)
  african: ["#2b160c", "#381d10", "#452414", "#231109"],
  // Eras 5–7: contexto afro-brasileiro colonial, quilombola e pós-abolição
  diaspora: ["#381d10", "#4f2c1b", "#6b3f27", "#8a5233"]
};

export function renderCharacterSvg(name, eraNumber = 1) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const palette = eraNumber <= 4 ? SKIN_PALETTES.african : SKIN_PALETTES.diaspora;
  const skin = palette[h % palette.length];
  const strokeInk = skin === "#231109" || skin === "#2b160c" ? "#120804" : "#2b1a10";
  const eyeColor = skin === "#231109" || skin === "#2b160c" ? "#f1e3c8" : "#2b1a10";
  const cl = ["#a8482a", "#4a6b3a", "#b8892b", "#3d2516", "#7a3b2e"][(h >> 3) % 5];
  const wr = ["#f2d28a", "#a8482a", "#3d2516", "#4a6b3a"][(h >> 5) % 4];
  const t = h % 3;
  const hat = t === 0
    ? `<path d="M126 82c2-22 46-22 48 0-10-6-38-6-48 0z" fill="${wr}"/>`
    : t === 1
      ? `<path d="M128 78c4-24 40-24 44 0z" fill="${wr}"/><rect x="126" y="76" width="48" height="6" fill="${cl}"/>`
      : `<path d="M126 88c-4-30 52-30 48 0-6-12-42-12-48 0z" fill="#180d07"/>`;

  return `<g class="fig" stroke="${strokeInk}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"><path d="M104 160c0-34 20-50 46-50s46 16 46 50z" fill="${cl}"/><g class="tilt"><g class="head"><circle cx="150" cy="86" r="22" fill="${skin}"/>${hat}<circle class="eye" cx="143" cy="86" r="1.9" fill="${eyeColor}" stroke="none"/><circle class="eye" cx="157" cy="86" r="1.9" fill="${eyeColor}" stroke="none"/><path class="fl" d="M144 96h12" fill="none" stroke="${eyeColor}" stroke-width="2.2"/><path class="sm" d="M143 94q7 7 14 0" fill="none" stroke="${eyeColor}" stroke-width="2.2"/><path class="wr" d="M143 98q7-6 14 0" fill="none" stroke="${eyeColor}" stroke-width="2.2"/></g></g></g>`;
}

export function renderSceneSvg(eraNumber, variant = 0, characterName = null) {
  const base = (ERA_SCENES[eraNumber] || ERA_SCENES[1])(variant);
  if (!characterName) return base;
  return base.replace("</svg>", `${renderCharacterSvg(characterName, eraNumber)}</svg>`);
}

export function renderHeroSvg() {
  return `<svg viewBox="0 0 360 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="360" height="300" fill="#2a1a10"/><circle class="sun" cx="250" cy="96" r="46" fill="#d9a94a"/><circle cx="250" cy="96" r="62" fill="none" stroke="#d9a94a" stroke-width="2" opacity=".35"/><g class="l1" fill="#4a2c1a"><path d="M-20 190q70-40 140-14t140-10 120 24v120H-20z"/></g><g class="l2" fill="#3a2214" stroke="#1a110a" stroke-width="2"><path d="M20 236v-46l12-14 12 14v46zM60 236v-70l16-20 16 20v70zM104 236v-52l12-12 12 12v52zM140 236v-36l10-10 10 10v36z"/></g><path d="M0 236q45-14 90 0t90 0 90 0 90 0v64H0z" fill="#2a1a10"/><path d="M0 266q45-12 90 0t90 0 90 0 90 0v34H0z" fill="#1a110a"/><path d="M300 300v-50c0-14 8-24 18-24s18 10 18 24v50z" fill="#120b06"/><circle cx="318" cy="214" r="10" fill="#120b06"/></svg>`;
}

export function renderBookEmblemSvg() {
  return `<svg viewBox="0 0 100 100" width="110" aria-hidden="true"><g fill="none" stroke="#d9a94a" stroke-width="2"><circle cx="50" cy="50" r="14"/><circle cx="50" cy="50" r="26"/><circle cx="50" cy="50" r="38" stroke-dasharray="2 6"/></g><circle cx="50" cy="50" r="6" fill="#d9a94a"/></svg>`;
}
