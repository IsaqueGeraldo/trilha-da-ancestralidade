/* ===== APPLICATION ENTRY POINT ===== */
import { loadState } from "./state.js";
import { createAudioEngine } from "./audio.js";
import { initUI } from "./ui.js";

async function bootstrap() {
  const [erasData, knowledgeData, puzzlesData, creditsData] = await Promise.all([
    fetch("./data/eras.json").then((r) => r.json()),
    fetch("./data/knowledge.json").then((r) => r.json()),
    fetch("./data/puzzles.json").then((r) => r.json()),
    fetch("./data/credits.json").then((r) => r.json())
  ]);

  const gameData = {
    eras: erasData.eras,
    keys: knowledgeData.keys,
    knowledge: knowledgeData.knowledge,
    titles: knowledgeData.titles,
    categories: knowledgeData.categories,
    objects: knowledgeData.objects,
    eraObjects: knowledgeData.eraObjects,
    puzzles: puzzlesData.modes,
    credits: creditsData
  };

  const state = loadState();
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const audio = createAudioEngine(state, reducedMotionQuery);

  // Unlock Web Audio API on first user gesture
  ["pointerdown", "keydown"].forEach((ev) => {
    document.addEventListener(
      ev,
      () => {
        audio.init();
        if (state.set.bgm) audio.startBgm(0);
      },
      { once: true }
    );
  });

  const ui = initUI(state, gameData, audio, reducedMotionQuery);
  ui.bindGlobalEvents();
  ui.syncSettingsUI();
  ui.showScreen("home");
}

bootstrap().catch((err) => {
  console.error("Erro ao inicializar Trilha da Ancestralidade:", err);
  const home = document.querySelector("#home");
  if (home) {
    home.innerHTML = `<div class="fb"><h3>Erro ao carregar os dados do jogo</h3><p>Certifique-se de abrir o projeto por meio de um servidor HTTP local (ex.: Live Server ou <code>python -m http.server</code>) para carregar os arquivos JSON.</p></div>`;
  }
});
