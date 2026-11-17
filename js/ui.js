/* ===== PRESENTATION & DOM RENDERING CONTROLLER ===== */
import { saveState, resetState, isDarkTheme } from "./state.js";
import {
  iconSvg,
  renderSceneSvg,
  renderHeroSvg,
  renderBookEmblemSvg,
  PILLAR_ICONS,
  ERA_VEIL_COLORS,
  ERA_PALETTES
} from "./art.js";
import {
  createRunSession,
  drawNextCard,
  applyChoice,
  completeEraRun
} from "./engine.js";
import { renderPuzzleScreen } from "./puzzles.js";

const ANIM = {
  enter: 420,
  exit: 320,
  back: 400,
  dist: 140,
  tilt: 16,
  lift: 0.05,
  thr: 90,
  exitEase: "cubic-bezier(.5,0,.9,.6)",
  spring: "cubic-bezier(.34,1.56,.64,1)"
};

const SIDE_SCREENS = ["arch", "mus", "diary", "set", "eras", "puz", "navmenu", "cred"];
const SCREEN_TITLES = {
  home: "Trilha da Ancestralidade",
  eras: "Mapa de eras",
  sum: "Retrospectiva",
  mus: "Museu da Memória",
  diary: "Diário",
  arch: "Livro de Memórias",
  set: "Configurações",
  navmenu: "Menu Principal",
  cred: "Créditos",
  puz: "Desafio do Arquivo"
};

export function initUI(state, data, audio, reducedMotionQuery) {
  const $ = (sel) => document.querySelector(sel);
  const dur = (ms) => (reducedMotionQuery.matches ? 0 : ms);

  let currentRun = null;
  let inRun = false;
  let busy = false;
  let currentScreen = "home";
  let previousScreen = "home";

  // Toast state
  let toastTimer = null;
  let toastKnowledge = [];
  let toastObject = null;

  // Book state
  let bookIndex = 0;
  let bookFlipping = false;

  const getCategory = (id) => data.categories[id] || "Conhecimento histórico";
  const getSourceMeta = (id) => {
    const src = data.knowledge[id]?.[1] || "";
    if (src.startsWith("J2 (int")) {
      return { t: "Leitura interpretativa do projeto", st: "referência específica a incluir" };
    }
    if (src.startsWith("J2")) {
      return { t: "Fonte geral do projeto", st: "referência específica a incluir" };
    }
    return { t: src, st: "revisão histórica pendente" };
  };

  const renderKnowledgeBlock = (id) => {
    const s = getSourceMeta(id);
    return `<div class="dl"><b>${data.titles[id]}</b> <span class="chip">${getCategory(id)}</span><br>${data.knowledge[id][2]}<br><span class="note">Fonte: ${s.t} · ${s.st}</span></div>`;
  };

  function applyEraBackground() {
    if (!currentRun) return;
    const palette = isDarkTheme(state) ? ERA_PALETTES.dark : ERA_PALETTES.light;
    document.documentElement.style.setProperty("--eb", palette[currentRun.i] || "");
  }

  function updateAppBar(screenId) {
    $("#abTitle").textContent =
      screenId === "game" && currentRun
        ? `Era ${currentRun.i + 1} · ${data.eras[currentRun.i].name}`
        : SCREEN_TITLES[screenId] || "";

    const abMenu = $("#abMenu");
    if (abMenu) {
      abMenu.style.visibility = screenId === "home" ? "hidden" : "visible";
      abMenu.innerHTML = iconSvg(screenId === "navmenu" ? "x" : "menu");
      abMenu.setAttribute("aria-label", screenId === "navmenu" ? "Voltar" : "Abrir tela de menu");
    }
  }

  function goBack() {
    if (SIDE_SCREENS.includes(currentScreen)) {
      showScreen(previousScreen === "game" && !inRun ? "home" : previousScreen);
    } else {
      showScreen("home");
    }
  }

  function showScreen(id) {
    if (SIDE_SCREENS.includes(id) && !SIDE_SCREENS.includes(currentScreen)) {
      previousScreen = currentScreen;
    }

    document.querySelectorAll(".scr").forEach((el) => el.classList.toggle("on", el.id === id));
    window.scrollTo(0, 0);

    if (id !== "game") {
      document.documentElement.style.removeProperty("--eb");
    } else if (currentRun) {
      applyEraBackground();
    }

    if (id === "home") renderHome();
    else if (id === "eras") renderEras();
    else if (id === "mus") renderMuseum();
    else if (id === "diary") renderDiary();
    else if (id === "arch") renderArchiveBook();
    else if (id === "navmenu") renderNavMenu();
    else if (id === "cred") renderCredits();

    currentScreen = id;
    updateAppBar(id);
  }

  function syncSettingsUI() {
    const isLight = state.set.th === "light";
    document.documentElement.classList.toggle("lg", Boolean(state.set.lg));
    document.documentElement.dataset.theme = isLight ? "light" : "dark";

    const setSwitch = (id, checked) => {
      const el = $(id);
      if (el) el.setAttribute("aria-checked", checked ? "true" : "false");
    };
    setSwitch("#bBgm", Boolean(state.set.bgm));
    setSwitch("#bSfx", Boolean(state.set.sfx));
    setSwitch("#bTh", isLight);
    setSwitch("#bLg", Boolean(state.set.lg));

    const vol = state.set.vol ?? 80;
    const slider = $("#rVol");
    const label = $("#vVolLbl");
    if (slider) slider.value = vol;
    if (label) label.textContent = `${vol}%`;

    const soundBtn = $("#abSound");
    const audioActive = (state.set.bgm || state.set.sfx) && vol > 0;
    if (soundBtn) {
      soundBtn.innerHTML = iconSvg(audioActive ? "vol" : "mute");
      soundBtn.setAttribute("aria-label", audioActive ? "Silenciar áudio" : "Ativar áudio");
    }
  }

  function showToast(newKnowledge, newObject) {
    toastKnowledge.push(...newKnowledge);
    if (newObject) toastObject = newObject;
    if (!toastKnowledge.length && !toastObject) return;

    const toastEl = $("#toast");
    const l1 = toastKnowledge.length
      ? toastKnowledge.length > 1
        ? `${toastKnowledge.length} conhecimentos registrados`
        : "Conhecimento registrado"
      : "Novo objeto no Museu";
    const l2 =
      toastKnowledge.length === 1
        ? data.titles[toastKnowledge[0]]
        : toastKnowledge.length > 1
          ? toastKnowledge.slice(0, 2).map((k) => data.titles[k]).join(" · ") + (toastKnowledge.length > 2 ? "…" : "")
          : toastObject;

    toastEl.innerHTML = `<span class="tb">${iconSvg(toastKnowledge.length ? "book-open" : "landmark")}</span><span class="tt"><b>${l1}</b><small>${l2}${toastKnowledge.length && toastObject ? " · " + toastObject : ""}</small></span>`;
    toastEl.classList.remove("on");
    void toastEl.offsetWidth;
    toastEl.classList.add("on");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("on");
      toastKnowledge = [];
      toastObject = null;
    }, 3600);
  }

  function renderPillarBars(deltas = [], mode = "") {
    const barsEl = $("#bars");
    if (barsEl.children.length !== 4) {
      barsEl.innerHTML = data.keys
        .map(
          (k, idx) =>
            `<div class="ind-wrap"><div class="ind" role="img" aria-label="${k}"><span class="b">${iconSvg(PILLAR_ICONS[idx])}</span><span class="f">${iconSvg(PILLAR_ICONS[idx])}</span></div><span class="ind-lbl">${k}</span></div>`
        )
        .join("");
    }

    [...barsEl.children].forEach((wrap, k) => {
      const ind = wrap.querySelector(".ind");
      const v = currentRun.st[k];
      ind.style.setProperty("--p", `${v}%`);
      ind.setAttribute("aria-label", `${data.keys[k]}: ${v}%`);
      ind.classList.toggle("crit", v < 25);
      ind.classList.toggle("edge", v <= 5 || v >= 95);
      ind.classList.toggle("aff", mode === "pre" && Boolean(deltas[k]));

      if (mode === "chg") {
        ind.classList.remove("pop");
        if (deltas[k]) {
          void ind.offsetWidth;
          ind.classList.add("pop");
        }
      }
    });

    document.documentElement.style.setProperty("--sat", Math.min(...currentRun.st) < 30 ? ".75" : "1");
  }

  function renderCategoryChips(knowledgeIds) {
    const labels = [
      ...new Set(
        knowledgeIds.map((id) =>
          id[0] === "F" ? "Cena dramatizada" : data.knowledge[id] ? getCategory(id) : ""
        )
      )
    ].filter(Boolean);
    return labels.map((t) => `<span class="chip">${t}</span>`).join("");
  }

  function playIntroDialogue(eraIndex, onDone) {
    const era = data.eras[eraIndex];
    const lines = era.dlg || [];
    const overlay = $("#intro");
    let lineIdx = 0;
    let timer = null;
    let isComplete = false;

    overlay.style.setProperty("--ib", ERA_VEIL_COLORS[eraIndex] || "#2b1a10");

    const typeLine = (text, speaker) => {
      clearInterval(timer);
      const txEl = $("#iTx");
      isComplete = false;
      if (reducedMotionQuery.matches) {
        txEl.textContent = text;
        isComplete = true;
        return;
      }
      let charPos = 0;
      timer = setInterval(() => {
        const ch = text[charPos];
        txEl.textContent = text.slice(0, ++charPos);
        if (ch && ch !== " " && charPos % 2 === 1) audio.voice(speaker, charPos);
        if (charPos >= text.length) {
          clearInterval(timer);
          isComplete = true;
        }
      }, 24);
    };

    const finishIntro = () => {
      clearInterval(timer);
      overlay.classList.remove("on");
      overlay.innerHTML = "";
      onDone();
    };

    const advance = () => {
      if (!isComplete) {
        clearInterval(timer);
        $("#iTx").textContent = lines[lineIdx][1];
        isComplete = true;
        return;
      }
      if (lineIdx < lines.length - 1) {
        lineIdx++;
        renderSlide();
      } else {
        finishIntro();
      }
    };

    const renderSlide = () => {
      const [speaker, text, charKey] = lines[lineIdx];
      const scene = renderSceneSvg(eraIndex + 1, lineIdx, charKey);
      overlay.innerHTML = `
        <div class="i-top">
          <span class="meta">Era ${eraIndex + 1} · ${era.name}</span>
          <button class="t" id="iSkip" style="color:#f1e3c8">Pular</button>
        </div>
        <div class="i-sc" id="iSc">${scene}</div>
        <div class="i-box" id="iBox">
          <div class="i-name">${speaker}</div>
          <div class="i-txt" id="iTx"></div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span class="note">Diálogo ${lineIdx + 1} de ${lines.length}</span>
            <button class="p" id="iNext">${lineIdx < lines.length - 1 ? "Continuar" : "Começar"}</button>
          </div>
        </div>`;

      typeLine(text, speaker);
      $("#iNext").onclick = advance;
      $("#iSkip").onclick = finishIntro;
      $("#iSc").onclick = advance;
      $("#iBox").onclick = (e) => {
        if (!e.target.closest("button")) advance();
      };
      $("#iNext").focus();
    };

    overlay.classList.add("on");
    renderSlide();
  }

  function startEra(eraIndex, savedRun = null) {
    const veil = $("#veil");
    veil.style.setProperty("--vb", ERA_VEIL_COLORS[eraIndex] || "#2b1a10");
    veil.innerHTML = `<p class="meta">Era ${eraIndex + 1}</p><h2>${data.eras[eraIndex].name}</h2><p>${data.eras[eraIndex].char}</p>`;
    veil.classList.add("on");

    setTimeout(() => {
      currentRun = createRunSession(eraIndex, data.eras, savedRun);
      $("#eraName").textContent = `Era ${eraIndex + 1} · ${data.eras[eraIndex].name}`;
      showScreen("game");
      $("#choices").style.display = "none";
      $("#stage").innerHTML = "";
      renderPillarBars();
      $("#prog").textContent = "";

      if (savedRun) {
        $("#fbBox").innerHTML = "";
        presentNextCard();
      } else {
        playIntroDialogue(eraIndex, presentNextCard);
      }

      setTimeout(() => veil.classList.remove("on"), dur(500));
    }, dur(900));
  }

  function presentNextCard() {
    const draw = drawNextCard(currentRun, state, data.eraObjects);
    if (!draw) return renderRetrospective();

    inRun = true;
    audio.setEra(currentRun.i);
    applyEraBackground();

    const { card, view, stepNumber, totalEstimated } = draw;
    $("#choices").style.display = "";

    const progEl = $("#prog");
    if (card.crisis) {
      progEl.textContent = "Crise Comunitária · Decisão Emergencial";
    } else if (card.boss) {
      progEl.textContent = `Provação Final da Era ${currentRun.i + 1} · Passo ${stepNumber} de ${totalEstimated}`;
    } else {
      const typeLabel = card.t.charAt(0) + card.t.slice(1).toLowerCase();
      progEl.textContent = `Passo ${stepNumber} de ${totalEstimated} · ${typeLabel}`;
    }

    $("#bL").innerHTML = `<span class="ch-lbl">${view.L.l}</span>`;
    $("#bR").innerHTML = `<span class="ch-lbl">${view.R.l}</span>`;
    $("#bL").disabled = false;
    $("#bR").disabled = false;

    const scene = renderSceneSvg(currentRun.i + 1, currentRun.used.length % 4, card.ch);
    const cardEl = document.createElement("div");
    cardEl.className = `card in${card.boss ? " boss" : ""}${card.crisis ? " crisis" : ""}`;
    cardEl.tabIndex = 0;
    cardEl.style.animationDuration = `${dur(ANIM.enter)}ms`;
    cardEl.innerHTML = `
      <div class="art">${scene}<span class="tag">${card.t}</span></div>
      <div class="body">
        <h3>${card.title}</h3>
        <div class="who">${card.ch}</div>
        <p>${card.text}</p>
        <div class="hist">${iconSvg("file-text", 14)} ${card.ctx}<div class="src">${renderCategoryChips(card.k || [])}</div></div>
      </div>
      <div class="hint l">${view.L.l}</div>
      <div class="hint r">${view.R.l}</div>
      <div class="tint"></div>`;

    $("#stage").innerHTML = "";
    $("#stage").append(cardEl);
    busy = false;

    $("#fbBox").innerHTML = currentRun.lastLearn
      ? `<div class="hist"><b>Consequência da escolha anterior:</b> ${currentRun.lastLearn}</div>`
      : "";

    renderPillarBars(
      [0, 1, 2, 3].map((k) => (card.L.fx[k] || card.R.fx[k] ? 1 : 0)),
      "pre"
    );

    if (card.crisis) audio.crisis();
    else if (card.boss) audio.boss();
    else audio.card();

    attachCardDragHandlers(cardEl);
  }

  function attachCardDragHandlers(cardEl) {
    const hl = cardEl.querySelector(".hint.l");
    const hr = cardEl.querySelector(".hint.r");
    const tn = cardEl.querySelector(".tint");
    let x0 = null;
    let y0 = null;
    let dx = 0;
    let dragging = false;

    const pose = (x) => {
      const p = Math.min(1, Math.abs(x) / ANIM.thr);
      cardEl.style.transform = `translate(${x}px, ${-Math.abs(x) * ANIM.lift}px) rotate(${x / ANIM.tilt}deg)`;
      tn.style.background = x < 0 ? "var(--acc)" : "var(--grn)";
      tn.style.opacity = p * 0.35;
      hl.style.opacity = x < -30 ? p : 0;
      hr.style.opacity = x > 30 ? p : 0;
      cardEl.dataset.d = Math.abs(x) > 12 ? (x < 0 ? "L" : "R") : "";
      cardEl.style.setProperty("--tilt", `${x / 12}deg`);
    };

    cardEl.onpointerdown = (e) => {
      if (busy) return;
      x0 = e.clientX;
      y0 = e.clientY;
      dragging = false;
      dx = 0;
    };

    cardEl.onpointermove = (e) => {
      if (x0 === null) return;
      const mx = e.clientX - x0;
      const my = e.clientY - y0;
      if (!dragging) {
        if (Math.abs(my) > Math.abs(mx) && Math.abs(my) > 8) {
          x0 = null;
          return;
        }
        if (Math.abs(mx) > 8) {
          dragging = true;
          cardEl.classList.remove("in");
          cardEl.style.animation = "none";
          cardEl.style.transition = "none";
          try {
            cardEl.setPointerCapture(e.pointerId);
          } catch (_) {}
        }
      }
      if (dragging) {
        dx = mx;
        pose(dx);
      }
    };

    cardEl.onpointerup = () => {
      if (x0 === null) return;
      x0 = null;
      if (dragging && Math.abs(dx) > ANIM.thr) {
        handleChoice(dx < 0 ? "L" : "R");
      } else if (dragging) {
        cardEl.style.transition = `transform ${dur(ANIM.back)}ms ${ANIM.spring}`;
        pose(0);
        cardEl.style.transform = "";
        delete cardEl.dataset.d;
      }
      dx = 0;
      dragging = false;
    };
  }

  function handleChoice(side) {
    if (busy || !currentRun || !currentRun.cur) return;
    busy = true;

    const sign = side === "L" ? -1 : 1;
    const cardEl = $(".card");
    if (cardEl) {
      cardEl.classList.remove("in");
      cardEl.style.animation = "none";
      cardEl.dataset.d = side;
      cardEl.style.transition = `transform ${dur(ANIM.exit)}ms ${ANIM.exitEase}, opacity ${dur(ANIM.exit)}ms`;
      cardEl.style.transform = `translate(${sign * ANIM.dist}%, -6%) rotate(${sign * ANIM.tilt * 1.2}deg)`;
      cardEl.style.opacity = 0;
      const tn = cardEl.querySelector(".tint");
      tn.style.background = sign < 0 ? "var(--acc)" : "var(--grn)";
      tn.style.opacity = 0.6;
    }

    if (side === "L") audio.chooseL();
    else audio.chooseR();

    const result = applyChoice(currentRun, side, state, data.keys);
    if (!result) return;

    if (result.newKnowledge.length || result.newObject) {
      setTimeout(() => audio.discover(), 140);
    }

    renderPillarBars(result.option.fx, "chg");
    showToast(result.newKnowledge, result.newObject);
    setTimeout(presentNextCard, dur(ANIM.exit) + 120);
  }

  function renderRetrospective() {
    inRun = false;
    audio.win();

    const outcome = completeEraRun(currentRun, state, data.eras, data.keys);
    const i = outcome.eraIndex;
    const nextEra = data.eras[i + 1];
    const hasNext = !outcome.isLastEra && nextEra && !nextEra.lock;
    const eraDisc = state.disc.filter((d) => d.e === i);

    const specificSources = [
      ...new Set(
        eraDisc.flatMap((d) =>
          getSourceMeta(d.id).st === "revisão histórica pendente" ? data.knowledge[d.id][1].split("; ") : []
        )
      )
    ];
    const hasGeneralSource = eraDisc.some((d) => getSourceMeta(d.id).st !== "revisão histórica pendente");
    const puzzleDone = state.puz && state.puz[i] !== undefined;

    $("#sum").innerHTML = `
      <section class="rs">
        <p class="meta">Capítulo concluído</p>
        <h2>${data.eras[i].name}</h2>
        <div class="rimg">${renderSceneSvg(i + 1, 0)}</div>
      </section>
      <section class="rs">
        <h3>A jornada</h3>
        <p>${outcome.summaryText}</p>
        <p class="note">${outcome.decisionsCount} decisões tomadas nesta era.</p>
      </section>
      <section class="rs">
        <h3>Indicadores finais</h3>
        <div class="bars">
          ${outcome.finalStats
            .map(
              (v, k) =>
                `<div class="bar ${v < 25 ? "crit" : ""}"><b>${iconSvg(PILLAR_ICONS[k])} ${data.keys[k]}<em>${v}</em></b><i><s style="width:${v}%"></s></i></div>`
            )
            .join("")}
        </div>
      </section>
      <section class="rs">
        <h3>${iconSvg("book-open")} Conhecimentos adquiridos (${eraDisc.length})</h3>
        ${eraDisc
          .map(
            (d) =>
              `<details class="ent"><summary><b>${data.titles[d.id]}</b> <span class="chip">${getCategory(d.id)}</span></summary><p>${data.knowledge[d.id][2]}</p></details>`
          )
          .join("")}
      </section>
      <section class="rs">
        <h3>${iconSvg("file-text")} Fontes históricas</h3>
        <details class="ent">
          <summary>Ver referências (${specificSources.length + (hasGeneralSource ? 1 : 0)})</summary>
          <ul class="l">
            ${specificSources.map((s) => `<li>${s}</li>`).join("")}
            ${hasGeneralSource ? '<li>Fonte geral do projeto <span class="note">(referência específica a incluir)</span></li>' : ""}
          </ul>
          <p class="note">As referências ainda passarão por revisão de historiadores.</p>
        </details>
      </section>
      <section class="rs">
        <h3>Consequências das suas escolhas</h3>
        <ul class="l">${outcome.learnedList.map((l) => `<li>${l}</li>`).join("")}</ul>
      </section>
      <section class="rs">
        <h3>Desafio do Arquivo</h3>
        <p>Restaure uma página do Livro de Memórias usando o que você aprendeu. É opcional e não tem penalidade.</p>
        <button id="bPz">${puzzleDone ? "Praticar novamente" : "Iniciar desafio"}</button>
      </section>
      <section class="rs">
        <h3>${hasNext ? "A seguir" : "Próximos passos"}</h3>
        ${hasNext ? `<p><b>${nextEra.name}</b><br>${nextEra.intro.split(". ")[0]}.</p>` : ""}
        ${
          outcome.isLastEra
            ? `<h3>Mensagem para as próximas gerações</h3>
               <p>Depois de conhecer essa história, o que você acredita que precisa ser preservado para o futuro?</p>
               <textarea id="msg" aria-label="Mensagem">${state.msg || ""}</textarea>
               <p class="note">“A história de um povo não começa com sua escravização, não termina com sua libertação e não pode ser contada apenas por aqueles que tentaram dominá-lo.”</p>`
            : ""
        }
        ${
          hasNext
            ? `<button class="p big" id="bNx"><span>${puzzleDone ? `Seguir para Era ${i + 2}: ${nextEra.name}` : `Desbloquear Era ${i + 2}: ${nextEra.name}`}</span></button>`
            : ""
        }
        ${outcome.isLastEra ? '<button class="p big" id="bSv">Guardar mensagem</button>' : ""}
        <div class="aux">
          <button class="t" data-go="arch">Livro de Memórias</button>
          <button class="t" data-go="eras">Mapa de eras</button>
        </div>
        <p id="saved" class="note"></p>
      </section>`;

    showScreen("sum");
    document.querySelectorAll("#sum [data-go]").forEach((b) => (b.onclick = () => showScreen(b.dataset.go)));
    $("#bPz").onclick = () => openPuzzle(i, false);

    if (hasNext) {
      $("#bNx").onclick = () => (puzzleDone ? startEra(i + 1) : openPuzzle(i, true));
    }
    if (outcome.isLastEra) {
      $("#bSv").onclick = () => {
        state.msg = $("#msg").value.trim();
        saveState(state);
        $("#saved").textContent = "Mensagem guardada neste aparelho.";
      };
    }
  }

  function openPuzzle(eraIndex, advanceAfter = false) {
    renderPuzzleScreen({
      eraIndex,
      advanceAfter,
      state,
      data,
      audio,
      onReturnSummary: () => showScreen("sum"),
      onAdvanceEra: (nextIdx) => startEra(nextIdx)
    });
    showScreen("puz");
  }

  function renderHome() {
    const openEras = data.eras.map((_, i) => i).filter((i) => !data.eras[i].lock && i < state.unlocked);
    const totalEras = data.eras.filter((e) => !e.lock).length;
    const doneCount = Object.keys(state.done).length;
    const hasProgress = Boolean(state.run) || state.log.length > 0 || doneCount > 0;
    const currentIdx = state.run
      ? state.run.i
      : openEras.find((i) => !state.done[i]) ?? openEras[openEras.length - 1];

    $("#home").innerHTML = `
      <div class="home-wrap">
        <div class="hero">${renderHeroSvg()}</div>
        <h1 class="ttl">Trilha da Ancestralidade</h1>
        <p class="sub">O Arquivo da Memória <span class="mc-splash">7 Eras!</span></p>
        ${
          hasProgress
            ? `<div class="st" style="text-align:left;max-width:380px;margin:8px auto">
                 <p class="meta">${doneCount >= totalEras && !state.run ? "Jornada concluída" : "Jornada em andamento"} · Era ${currentIdx + 1}: ${data.eras[currentIdx].name}</p>
                 <div class="lp"><i style="width:${(doneCount / totalEras) * 100}%"></i></div>
                 <p class="note">${doneCount}/${totalEras} eras · ${state.disc.length}/33 conhecimentos · ${state.museum.length}/${data.objects.length} relíquias</p>
               </div>`
            : `<p class="lead" style="max-width:380px;margin:6px auto">Atravesse a história dos povos africanos e afro-brasileiros e reconstrua um arquivo vivo a cada decisão.</p>`
        }
        <div class="mc-stack">
          <button class="mc-btn p" id="hGo">${iconSvg("play")}<span>${
            doneCount >= totalEras && !state.run
              ? "Escolher uma Era"
              : hasProgress
                ? `Continuar (Era ${currentIdx + 1})`
                : "Iniciar Jornada"
          }</span></button>
          <button class="mc-btn" data-go="eras">${iconSvg("map")}<span>Mapa das Eras (${doneCount}/${totalEras})</span></button>
          <button class="mc-btn" data-go="arch">${iconSvg("book-open")}<span>Livro de Memórias (${state.disc.length}/33)</span></button>
          <button class="mc-btn" data-go="mus">${iconSvg("landmark")}<span>Museu da Memória (${state.museum.length}/${data.objects.length})</span></button>
          <button class="mc-btn" data-go="diary">${iconSvg("file-text")}<span>Diário de Escolhas</span></button>
          <button class="mc-btn" data-go="set">${iconSvg("sliders")}<span>Opções e Áudio</span></button>
          <button class="mc-btn" data-go="cred">${iconSvg("award")}<span>Créditos</span></button>
        </div>
      </div>`;

    $("#hGo").onclick = () =>
      state.run
        ? startEra(state.run.i, state.run)
        : doneCount >= totalEras
          ? showScreen("eras")
          : startEra(hasProgress ? currentIdx : 0);

    $("#home").querySelectorAll("[data-go]").forEach((b) => (b.onclick = () => showScreen(b.dataset.go)));
  }

  function renderNavMenu() {
    const openEras = data.eras.map((_, i) => i).filter((i) => !data.eras[i].lock && i < state.unlocked);
    const totalEras = data.eras.filter((e) => !e.lock).length;
    const doneCount = Object.keys(state.done).length;
    const currentIdx = state.run
      ? state.run.i
      : openEras.find((i) => !state.done[i]) ?? openEras[openEras.length - 1];

    $("#navmenu").innerHTML = `
      <div class="home-wrap">
        <h2>Menu do Arquivo</h2>
        <p class="note">${
          inRun
            ? `Partida em pausa · Era ${currentRun.i + 1} (${data.eras[currentRun.i].name})`
            : `${doneCount} de ${totalEras} eras concluídas · ${state.disc.length}/33 conhecimentos`
        }</p>
        <div class="mc-stack">
          ${
            inRun
              ? `<button class="mc-btn p" data-nm="game">${iconSvg("play")}<span>Voltar à Partida</span></button>`
              : `<button class="mc-btn p" id="nmPlay">${iconSvg("play")}<span>${
                  state.run ? "Continuar Jornada" : doneCount >= totalEras ? "Jogar Novamente" : "Iniciar Jornada"
                }</span></button>`
          }
          <button class="mc-btn" data-nm="eras">${iconSvg("map")}<span>Mapa das Eras (${doneCount}/${totalEras})</span></button>
          <button class="mc-btn" data-nm="arch">${iconSvg("book-open")}<span>Livro de Memórias (${state.disc.length}/33)</span></button>
          <button class="mc-btn" data-nm="mus">${iconSvg("landmark")}<span>Museu da Memória (${state.museum.length}/${data.objects.length})</span></button>
          <button class="mc-btn" data-nm="diary">${iconSvg("file-text")}<span>Diário de Escolhas (${state.log.length})</span></button>
          <button class="mc-btn" data-nm="set">${iconSvg("sliders")}<span>Configurações e Áudio</span></button>
          <button class="mc-btn" data-nm="cred">${iconSvg("award")}<span>Créditos</span></button>
          <button class="mc-btn" data-nm="home">${iconSvg("home")}<span>Tela Inicial</span></button>
        </div>
      </div>`;

    $("#navmenu").querySelectorAll("[data-nm]").forEach((b) => (b.onclick = () => showScreen(b.dataset.nm)));
    const nmPlay = $("#nmPlay");
    if (nmPlay) {
      nmPlay.onclick = () =>
        state.run
          ? startEra(state.run.i, state.run)
          : doneCount >= totalEras
            ? showScreen("eras")
            : startEra(currentIdx || 0);
    }
  }

  function renderEras() {
    const list = $("#eraList");
    list.innerHTML = "";
    data.eras.forEach((era, i) => {
      const btn = document.createElement("button");
      btn.className = "era";
      const isOpen = !era.lock && i < state.unlocked;
      btn.disabled = !isOpen;
      const statusText = era.lock
        ? "Em validação"
        : !isOpen
          ? "Conclua a era anterior"
          : state.done[i]
            ? "Concluída · jogar de novo"
            : "Disponível";
      btn.innerHTML = `<b>Era ${i + 1} · ${era.name}</b><small>${statusText}</small>`;
      if (isOpen) btn.onclick = () => startEra(i);
      list.append(btn);
    });
  }

  function renderMuseum() {
    $("#musDet").innerHTML = "";
    $("#musGrid").innerHTML = data.objects
      .map((obj, idx) =>
        state.museum.includes(obj[1])
          ? `<button class="obj" data-n="${idx}"><b>${obj[1]}</b><span class="note">Era ${obj[2] + 1} · ${data.eras[obj[2]].name}</span></button>`
          : `<div class="obj lock"><b>Ainda guardado</b></div>`
      )
      .join("");

    document.querySelectorAll("#musGrid button").forEach((btn) => {
      btn.onclick = () => {
        const obj = data.objects[btn.dataset.n];
        $("#musDet").innerHTML = `
          <div class="fb">
            <h3>${obj[1]}</h3>
            <p class="note">Era ${obj[2] + 1} · ${data.eras[obj[2]].name}</p>
            ${renderKnowledgeBlock(obj[3])}
            <p class="note">A descrição e o significado deste objeto ainda estão em pesquisa. Nada foi inventado aqui.</p>
          </div>`;
      };
    });
  }

  function renderDiary() {
    const entries = state.log.filter((l) => typeof l === "object").slice().reverse();
    const titlesForLog = (l) => l.k.filter((x) => x[0] === "K").map((x) => data.titles[x]).join(" · ");
    const formatDeltas = (fx) =>
      fx
        .map((d, k) => (d ? `${data.keys[k]} ${d > 0 ? "+" : ""}${d}` : ""))
        .filter(Boolean)
        .join(", ") || "sem alteração";

    $("#diaryBody").innerHTML = `
      <h3>Decisões</h3>
      ${
        entries.length
          ? entries
              .map(
                (l) =>
                  `<div class="dl"><b>Era ${l.e + 1} · ${l.t}</b><br>${l.l}<br><span class="note">${formatDeltas(l.fx)}${titlesForLog(l) ? " · " + titlesForLog(l) : ""}</span></div>`
              )
              .join("")
          : "<p>Nenhuma decisão ainda.</p>"
      }
      <h3>Personagens encontrados</h3>
      <p>${state.chars.join(" · ") || "—"}</p>
      <h3>Objetos desbloqueados</h3>
      <p>${state.museum.join(" · ") || "—"}</p>
      <h3>Conhecimentos adquiridos</h3>
      <p>${state.disc.map((d) => data.titles[d.id]).join(" · ") || "—"}</p>`;
  }

  function buildBookPages() {
    const pages = [{ t: "cover" }, { t: "toc" }];
    data.eras.forEach((_, e) => {
      const ks = Object.keys(data.knowledge).filter((k) => Number(k[2]) - 1 === e);
      if (!ks.length) return;
      pages.push({ t: "era", e, ks });
      ks.filter((k) => state.disc.some((d) => d.id === k)).forEach((k) => pages.push({ t: "k", k, e }));
    });
    pages.push({ t: "end" });
    return pages;
  }

  function renderBookPageHTML(pages, idx) {
    const p = pages[idx];
    if (p.t === "cover") {
      const restoredCount = Object.keys(state.puz || {}).length;
      return `<div>${renderBookEmblemSvg()}<h2>Livro de Memórias</h2><p>Trilha da Ancestralidade</p><p class="note">${state.disc.length} conhecimentos registrados</p>${restoredCount ? `<p class="note">${restoredCount} páginas restauradas</p>` : ""}<p class="note">Toque em “próxima” ou deslize para abrir</p></div>`;
    }
    if (p.t === "end") {
      return `<div><h2>Fim por ora</h2><p class="note">Novas páginas surgem conforme você joga e descobre mais da história.</p></div>`;
    }
    if (p.t === "toc") {
      return (
        `<h2>Sumário</h2><div class="orn"></div>` +
        data.eras
          .map((era, e) => {
            const ks = Object.keys(data.knowledge).filter((k) => Number(k[2]) - 1 === e);
            if (!ks.length) {
              return `<div class="toc"><span>Era ${e + 1} · ${era.name}</span><span class="note">em validação</span></div>`;
            }
            const unlocked = ks.filter((k) => state.disc.some((d) => d.id === k)).length;
            const targetPage = pages.findIndex((x) => x.t === "era" && x.e === e);
            return `<button class="toc" data-j="${targetPage}"><span>Era ${e + 1} · ${era.name}</span><span class="note">${unlocked}/${ks.length} · p. ${targetPage}</span></button>`;
          })
          .join("")
      );
    }
    if (p.t === "era") {
      const unlocked = p.ks.filter((k) => state.disc.some((d) => d.id === k)).length;
      return `<p class="meta">Era ${p.e + 1}</p><h2>${data.eras[p.e].name}</h2><div class="rimg">${renderSceneSvg(p.e + 1, 0)}</div><p>${data.eras[p.e].intro.split(". ")[0]}.</p><p class="note">${unlocked ? `${unlocked} de ${p.ks.length} conhecimentos registrados. Vire a página para lê-los.` : "Nenhum conhecimento registrado ainda. Jogue esta era para preencher estas páginas."}</p>`;
    }

    const k = p.k;
    const discEntry = state.disc.find((x) => x.id === k);
    const logEntry = state.log.find((l) => typeof l === "object" && l.k && l.k.includes(k));
    const srcMeta = getSourceMeta(k);
    return `<p class="meta">Era ${p.e + 1} · ${data.eras[p.e].name}</p><h2>${data.titles[k]}</h2><span class="chip">${getCategory(k)}</span><div class="orn"></div><p>${data.knowledge[k][2]}</p><p class="note">Fonte: ${srcMeta.t} · ${srcMeta.st}${logEntry ? `<br>Surgiu em “${logEntry.t}”` : ""}<br>Descoberta nº ${discEntry.n}</p>`;
  }

  function createBookPageEl(pages, idx) {
    const div = document.createElement("div");
    div.className = "pgx" + (pages[idx].t === "cover" || pages[idx].t === "end" ? " cover" : "");
    div.innerHTML = renderBookPageHTML(pages, idx);
    return div;
  }

  function updateBookControls() {
    const pages = buildBookPages();
    const total = pages.length;
    $("#bkI").textContent = bookIndex === 0 ? "Capa" : bookIndex === total - 1 ? "Contracapa" : `Página ${bookIndex} de ${total - 2}`;
    $("#bkP").disabled = bookIndex === 0;
    $("#bkN").disabled = bookIndex === total - 1;
    $("#book").querySelectorAll("[data-j]").forEach((btn) => {
      btn.onclick = () => jumpToBookPage(Number(btn.dataset.j));
    });
  }

  function turnBookPage(dir) {
    const pages = buildBookPages();
    const nextIdx = bookIndex + dir;
    if (bookFlipping || nextIdx < 0 || nextIdx >= pages.length) return;

    audio.page();
    bookFlipping = true;
    const bk = $("#book");
    const T = dur(700);
    const leaf = createBookPageEl(pages, dir > 0 ? bookIndex : nextIdx);
    leaf.classList.add("leaf");
    const tr = `transform ${T}ms var(--ease), opacity ${T}ms`;

    if (dir > 0) {
      bk.replaceChildren(createBookPageEl(pages, nextIdx), leaf);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          leaf.style.transition = tr;
          leaf.style.transform = "rotateY(-105deg)";
          leaf.style.opacity = "0";
        })
      );
    } else {
      bk.replaceChildren(createBookPageEl(pages, bookIndex), leaf);
      leaf.style.transform = "rotateY(-105deg)";
      leaf.style.opacity = "0";
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          leaf.style.transition = tr;
          leaf.style.transform = "none";
          leaf.style.opacity = "1";
        })
      );
    }

    setTimeout(() => {
      bookIndex = nextIdx;
      bk.replaceChildren(createBookPageEl(pages, nextIdx));
      bookFlipping = false;
      updateBookControls();
    }, T + 40);
  }

  function jumpToBookPage(targetIdx) {
    const diff = targetIdx - bookIndex;
    if (!diff || bookFlipping) return;
    if (Math.abs(diff) === 1) return turnBookPage(diff);

    audio.page();
    const pages = buildBookPages();
    const pageEl = createBookPageEl(pages, targetIdx);
    pageEl.classList.add("fadein");
    bookIndex = targetIdx;
    $("#book").replaceChildren(pageEl);
    updateBookControls();
  }

  function renderArchiveBook() {
    bookIndex = 0;
    bookFlipping = false;
    $("#arch").innerHTML = `
      <h2>Livro de Memórias</h2>
      <div class="book" id="book"></div>
      <div class="bkc">
        <button id="bkP" aria-label="Página anterior">${iconSvg("arrow-left")}</button>
        <span id="bkI" class="note" aria-live="polite"></span>
        <button id="bkN" aria-label="Próxima página">${iconSvg("arrow-right")}</button>
      </div>
      <div class="row"><button class="t" id="archBack">Voltar</button></div>`;

    const pages = buildBookPages();
    $("#book").append(createBookPageEl(pages, 0));
    updateBookControls();

    $("#archBack").onclick = goBack;
    $("#bkP").onclick = () => turnBookPage(-1);
    $("#bkN").onclick = () => turnBookPage(1);

    let x0 = null;
    const bk = $("#book");
    bk.onpointerdown = (e) => {
      x0 = e.clientX;
    };
    bk.onpointerup = (e) => {
      if (x0 === null) return;
      const dx = e.clientX - x0;
      x0 = null;
      if (dx < -50) turnBookPage(1);
      else if (dx > 50) turnBookPage(-1);
    };
  }

  function renderCredits() {
    const sec = $("#cred");
    const credits = data.credits;
    sec.innerHTML = `
      <div class="cred-hero">
        <div class="cred-emblem">${iconSvg("award", 26)}</div>
        <p class="meta">Ficha Técnica</p>
        <h2>${credits.title}</h2>
        <p class="sub-c">${credits.subtitle}</p>
      </div>
      <div class="cred-list">
        ${credits.team
          .map(
            (member) => `
          <article class="cred-card">
            <div class="cred-top">
              <h3 class="cred-name">${member.name}</h3>
              <span class="cred-role">${member.role}</span>
            </div>
            <p class="cred-desc">${member.desc}</p>
          </article>`
          )
          .join("")}
      </div>
      <div class="cred-foot">
        <p class="note" style="margin:0">${credits.footerNote}</p>
      </div>
      <div class="mc-stack" style="margin-top:16px">
        <button class="mc-btn" id="credBack">${iconSvg("arrow-left")}<span>Voltar</span></button>
      </div>`;

    $("#credBack").onclick = goBack;
  }

  function bindGlobalEvents() {
    // Ambient floating dust motes
    const amb = $("#amb");
    for (let n = 0; n < 14; n++) {
      const mote = document.createElement("i");
      const size = 3 + Math.random() * 4;
      mote.style.cssText = `left:${Math.random() * 100}%;--dx:${Math.random() * 60 - 30}px;width:${size}px;height:${size}px;animation-duration:${18 + Math.random() * 20}s;animation-delay:-${Math.random() * 30}s`;
      amb.append(mote);
    }

    // Choice buttons
    $("#bL").onclick = () => handleChoice("L");
    $("#bR").onclick = () => handleChoice("R");

    // Top bar & navigation
    $("#abMenu").onclick = () => (currentScreen === "navmenu" ? goBack() : showScreen("navmenu"));
    document.querySelectorAll('[data-go="home"]').forEach((b) => (b.onclick = goBack));

    // Audio controls
    $("#abSound").onclick = () => {
      const anyOn = state.set.bgm || state.set.sfx;
      state.set.bgm = !anyOn;
      state.set.sfx = !anyOn;
      if (state.set.bgm) audio.startBgm(currentRun ? currentRun.i : 0);
      else audio.stopBgm();
      saveState(state);
      syncSettingsUI();
    };

    $("#bBgm").onclick = () => {
      state.set.bgm = !state.set.bgm;
      if (state.set.bgm) audio.startBgm(currentRun ? currentRun.i : 0);
      else audio.stopBgm();
      saveState(state);
      syncSettingsUI();
    };

    $("#bSfx").onclick = () => {
      state.set.sfx = !state.set.sfx;
      saveState(state);
      syncSettingsUI();
      if (state.set.sfx) audio.ok();
    };

    const rVolEl = $("#rVol");
    rVolEl.oninput = (e) => {
      state.set.vol = Number(e.target.value);
      if (state.set.vol > 0 && !state.set.bgm && !state.set.sfx) {
        state.set.bgm = true;
        state.set.sfx = true;
        audio.startBgm(currentRun ? currentRun.i : 0);
      }
      saveState(state);
      syncSettingsUI();
    };
    rVolEl.onchange = () => audio.ok();

    // Appearance controls
    $("#bTh").onclick = () => {
      state.set.th = state.set.th === "light" ? "dark" : "light";
      saveState(state);
      syncSettingsUI();
    };

    $("#bLg").onclick = () => {
      state.set.lg = !state.set.lg;
      saveState(state);
      syncSettingsUI();
    };

    // Data reset dialog
    $("#bWipe").onclick = () => $("#dlg").showModal();
    $("#dNo").onclick = () => $("#dlg").close();
    $("#dYes").onclick = () => {
      resetState(state);
      currentRun = null;
      inRun = false;
      $("#dlg").close();
      showScreen("home");
    };

    // Universal button click sound
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (btn && btn.id !== "bL" && btn.id !== "bR") audio.click();
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && currentScreen === "navmenu") {
        goBack();
        return;
      }
      if ($("#intro").classList.contains("on")) {
        if (["ArrowRight", "ArrowDown", "Enter", " "].includes(e.key)) {
          e.preventDefault();
          const nx = $("#iNext");
          if (nx) nx.click();
        }
        return;
      }
      if (currentScreen === "arch") {
        if (e.key === "ArrowRight") turnBookPage(1);
        if (e.key === "ArrowLeft") turnBookPage(-1);
        return;
      }
      if (currentScreen === "game" && currentRun && currentRun.cur && !busy) {
        if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "1") {
          e.preventDefault();
          handleChoice("L");
        } else if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "2") {
          e.preventDefault();
          handleChoice("R");
        }
      }
    });
  }

  return {
    bindGlobalEvents,
    syncSettingsUI,
    showScreen
  };
}
