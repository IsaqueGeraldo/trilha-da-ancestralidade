/* ===== CORE GAMEPLAY ENGINE (CARDS, FLAGS, PILLARS & CRISIS SYSTEM) ===== */
import { saveState } from "./state.js";

export function evaluateCardCondition(card, flags) {
  if (!card.ifFlag) return true;
  if (card.ifFlag.startsWith("!")) {
    return !flags[card.ifFlag.slice(1)];
  }
  return Boolean(flags[card.ifFlag]);
}

export function createRunSession(eraIndex, eras, savedRun = null) {
  const cards = eras[eraIndex].cards || [];
  if (savedRun) {
    return {
      i: eraIndex,
      st: savedRun.st.slice(),
      f: Object.assign({}, savedRun.f),
      used: savedRun.used.slice(),
      learned: savedRun.learned.slice(),
      q: cards.filter((c) => !savedRun.used.includes(c.title)),
      cur: null,
      flip: false,
      lastLearn: ""
    };
  }
  return {
    i: eraIndex,
    st: [50, 50, 50, 50],
    f: {},
    used: [],
    learned: [],
    q: cards.slice(),
    cur: null,
    flip: false,
    lastLearn: ""
  };
}

export function drawNextCard(run, state, eraObjects) {
  const idx = run.q.findIndex((c) => evaluateCardCondition(c, run.f));
  if (idx < 0) return null;

  const card = run.q.splice(idx, 1)[0];
  run.cur = card;

  let hash = 0;
  for (const ch of (card.id || card.title)) {
    hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  }
  run.flip = hash % 2 === 1;

  // Ensure boss can grant an uncollected relic from the current era
  if (card.boss && eraObjects && eraObjects[run.i]) {
    const missingRelic = eraObjects[run.i].find((objName) => !state.museum.includes(objName));
    if (missingRelic && !card.L.obj) {
      card.L.obj = missingRelic;
    }
  }

  const remainingEligible = run.q.filter((c) => evaluateCardCondition(c, run.f)).length;
  return {
    card,
    view: run.flip ? { L: card.R, R: card.L } : { L: card.L, R: card.R },
    stepNumber: run.used.length + 1,
    totalEstimated: run.used.length + 1 + remainingEligible
  };
}

export function applyChoice(run, side, state, keys) {
  const card = run.cur;
  if (!card) return null;

  const option = (run.flip ? { L: card.R, R: card.L } : card)[side];
  run.cur = null;
  run.used.push(card.title);
  run.lastLearn = option.learn || "";

  option.fx.forEach((delta, k) => {
    run.st[k] = Math.max(0, Math.min(100, run.st[k] + delta));
  });

  if (option.flag) run.f[option.flag] = 1;
  run.learned.push(option.learn);

  const knowledgeIds = card.k || [];
  const newKnowledge = knowledgeIds.filter(
    (id) => id[0] === "K" && !state.disc.some((d) => d.id === id)
  );
  newKnowledge.forEach((id) => {
    state.disc.push({
      id,
      e: run.i,
      n: state.disc.length + 1,
      card: card.id || "",
      ch: card.ch
    });
  });

  if (!state.chars.includes(card.ch)) state.chars.push(card.ch);

  state.log.push({
    e: run.i,
    id: card.id || "",
    t: card.title,
    l: option.l,
    fx: option.fx,
    k: knowledgeIds,
    n: option.learn
  });

  const gotNewObject = option.obj && !state.museum.includes(option.obj);
  if (gotNewObject) state.museum.push(option.obj);

  const crisisTriggered = injectCrisisIfNeeded(run, keys);

  state.run = {
    i: run.i,
    st: run.st,
    f: run.f,
    used: run.used,
    learned: run.learned
  };
  saveState(state);

  return {
    option,
    newKnowledge,
    newObject: gotNewObject ? option.obj : null,
    crisisTriggered
  };
}

export function injectCrisisIfNeeded(run, keys) {
  const zeroIdx = run.st.findIndex((v) => v <= 0);
  if (zeroIdx < 0) return false;

  const pillar = keys[zeroIdx];
  run.st[zeroIdx] = 15;
  const cid = `CRISIS-${run.i}-${zeroIdx}-${run.used.length}`;

  run.q.unshift({
    id: cid,
    t: "CRISE COMUNITÁRIA",
    boss: true,
    crisis: true,
    ch: "Conselho de Emergência",
    title: `${pillar} em Risco Crítico!`,
    text: `O indicador de ${pillar} chegou ao limite crítico. A comunidade convoca uma roda de emergência para reerguer esse pilar antes que a memória coletiva se fragmente.`,
    ctx: "Equilíbrio coletivo: nenhuma dimensão da vida comunitária pode ser abandonada.",
    L: {
      l: `Mobilizar mutirão para restaurar ${pillar}`,
      fx: keys.map((_, k) => (k === zeroIdx ? 20 : -4)),
      learn: `A comunidade compartilhou esforços dos outros pilares para impedir o colapso de ${pillar}.`
    },
    R: {
      l: `Reorganizar prioridades em torno de ${pillar}`,
      fx: keys.map((_, k) => (k === zeroIdx ? 15 : -2)),
      learn: `Reconstruir ${pillar} exigiu cautela e pacto coletivo.`
    }
  });

  return true;
}

export function completeEraRun(run, state, eras, keys) {
  const i = run.i;
  const minVal = Math.min(...run.st);
  const lowestPillar = keys[run.st.indexOf(minVal)];
  const summaryText = minVal >= 45
    ? "A comunidade avançou sem abrir mão de nenhuma dimensão da vida coletiva. Isso vale só para esta partida: a ficção não muda a história."
    : `O ponto mais frágil desta jornada foi ${lowestPillar}. Nada se perde para sempre, mas há o que reconstruir.`;

  state.done[i] = 1;
  state.unlocked = Math.max(state.unlocked, i + 2);
  state.run = null;
  saveState(state);

  return {
    eraIndex: i,
    isLastEra: i === eras.length - 1,
    summaryText,
    decisionsCount: run.used.length,
    finalStats: run.st.slice(),
    learnedList: run.learned.slice()
  };
}
