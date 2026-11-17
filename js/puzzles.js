/* ===== MULTI-MODALITY ARCHIVE PUZZLES ===== */
import { saveState } from "./state.js";

function shuffle(arr) {
  return arr
    .map((item) => [Math.random(), item])
    .sort((a, b) => a[0] - b[0])
    .map((pair) => pair[1]);
}

function shortKnowledgeSummary(knowledgeMap, id) {
  const text = knowledgeMap[id]?.[2] || "";
  return text.split(/;|\.\s/)[0].replace(/\.$/, "");
}

export function renderPuzzleScreen({ eraIndex, advanceAfter = false, state, data, audio, onReturnSummary, onAdvanceEra }) {
  const { eras, puzzles, knowledge, titles } = data;
  const P = puzzles[eraIndex] || puzzles[0];
  const sec = document.querySelector("#puz");
  let mistakes = 0;

  const completePuzzle = () => {
    audio.win();
    const prevBest = state.puz[eraIndex] === undefined ? 99 : state.puz[eraIndex];
    state.puz[eraIndex] = Math.min(prevBest, mistakes);
    saveState(state);

    const nextEra = eras[eraIndex + 1];
    const canAdvance = advanceAfter && nextEra && !nextEra.lock;
    const mistakeNote = mistakes
      ? ` com ${mistakes} tentativa${mistakes > 1 ? "s" : ""} adicional${mistakes > 1 ? "is" : ""}`
      : " sem errar";

    sec.innerHTML = `
      <div class="retro">
        <p class="meta">Desafio concluído · ${P.badge}</p>
        <h2>${nextEra ? "Nova jornada desbloqueada" : "Memória consolidada"}</h2>
        <p>Você concluiu o desafio desta era${mistakeNote} e fortaleceu os registros do Arquivo da Memória.${nextEra ? ` O caminho para <b>${nextEra.name}</b> está aberto.` : ""}</p>
        <button class="p big" id="pzBack">${canAdvance ? `Avançar para Era ${eraIndex + 2}: ${nextEra.name}` : "Voltar à retrospectiva"}</button>
      </div>`;

    sec.querySelector("#pzBack").onclick = () => (canAdvance ? onAdvanceEra(eraIndex + 1) : onReturnSummary());
  };

  const registerMistake = (btn) => {
    mistakes++;
    audio.bad();
    btn.classList.add("bad");
    setTimeout(() => btn.classList.remove("bad"), 700);
  };

  const registerSuccess = (btn) => {
    audio.ok();
    if (btn) btn.classList.add("ok");
  };

  const headerHTML = `
    <div class="pz-hdr">
      <span class="pz-badge">${P.badge}</span>
      <span class="note">Era ${eraIndex + 1} · ${eras[eraIndex].name}</span>
    </div>
    <h2>${P.title}</h2>
    <p class="note">${P.desc}</p>`;

  const footerHTML = `<div class="row"><button class="t" id="pzSkip">Voltar sem concluir</button></div>`;

  if (P.type === "timeline") {
    let nextExpected = 0;
    const order = shuffle(P.tl.map((_, idx) => idx));
    sec.innerHTML = `${headerHTML}<div id="pT" style="margin-top:12px">${order
      .map((idx) => `<button class="pzb" data-n="${idx}">${P.tl[idx]}</button>`)
      .join("")}</div>${footerHTML}`;

    sec.querySelectorAll("#pT button").forEach((btn) => {
      btn.onclick = () => {
        if (Number(btn.dataset.n) === nextExpected) {
          registerSuccess(btn);
          btn.disabled = true;
          btn.insertAdjacentHTML("afterbegin", `<b>${nextExpected + 1}º · </b>`);
          if (++nextExpected === P.tl.length) setTimeout(completePuzzle, 320);
        } else {
          registerMistake(btn);
        }
      };
    });
  } else if (P.type === "match") {
    let selectedLeft = null;
    let remaining = P.k.length;
    sec.innerHTML = `${headerHTML}
      <div class="pz" style="margin-top:12px">
        <div>${shuffle(P.k).map((k) => `<button class="pzb" data-k="${k}">${titles[k]}</button>`).join("")}</div>
        <div>${shuffle(P.k).map((k) => `<button class="pzb" data-k="${k}">${shortKnowledgeSummary(knowledge, k)}.</button>`).join("")}</div>
      </div>${footerHTML}`;

    const [colLeft, colRight] = sec.querySelectorAll(".pz > div");
    colLeft.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => {
        colLeft.querySelectorAll("button").forEach((b) => b.classList.remove("sel"));
        btn.classList.add("sel");
        selectedLeft = btn;
      };
    });
    colRight.querySelectorAll("button").forEach((btn) => {
      btn.onclick = () => {
        if (!selectedLeft) return;
        if (selectedLeft.dataset.k === btn.dataset.k) {
          selectedLeft.classList.remove("sel");
          registerSuccess(selectedLeft);
          btn.classList.add("ok");
          selectedLeft.disabled = true;
          btn.disabled = true;
          selectedLeft = null;
          if (--remaining === 0) setTimeout(completePuzzle, 320);
        } else {
          registerMistake(btn);
        }
      };
    });
  } else if (P.type === "quiz") {
    let qIndex = 0;
    const renderQuestion = () => {
      const current = P.qs[qIndex];
      const optionOrder = shuffle([0, 1, 2]);
      sec.innerHTML = `${headerHTML}
        <div class="pz-card">
          <p class="meta">Pergunta ${qIndex + 1} de ${P.qs.length}</p>
          <p class="pz-q">${current.q}</p>
          <div class="pz-opts">
            ${optionOrder
              .map(
                (origIdx, pos) =>
                  `<button class="pzb pz-opt" data-idx="${origIdx}"><b>${["A", "B", "C"][pos]}</b><span>${current.opts[origIdx]}</span></button>`
              )
              .join("")}
          </div>
        </div>${footerHTML}`;

      sec.querySelector("#pzSkip").onclick = onReturnSummary;
      sec.querySelectorAll(".pz-opt").forEach((btn) => {
        btn.onclick = () => {
          if (Number(btn.dataset.idx) === current.ans) {
            registerSuccess(btn);
            btn.disabled = true;
            setTimeout(() => {
              if (++qIndex >= P.qs.length) completePuzzle();
              else renderQuestion();
            }, 380);
          } else {
            registerMistake(btn);
          }
        };
      });
    };
    renderQuestion();
    return;
  } else if (P.type === "cloze") {
    let blankIdx = 0;
    const wordBank = shuffle([...P.blanks, ...P.distractors]);
    const renderDocument = () =>
      P.segments
        .map((seg, idx) => {
          if (idx >= P.blanks.length) return seg;
          const filled = idx < blankIdx;
          const active = idx === blankIdx;
          const cls = `pz-slot${filled ? " filled" : active ? " active" : ""}`;
          return `${seg}<span class="${cls}">${filled ? P.blanks[idx] : `Lacuna ${idx + 1}`}</span>`;
        })
        .join("");

    sec.innerHTML = `${headerHTML}
      <div class="pz-doc" id="pzDoc">${renderDocument()}</div>
      <p class="meta">Escolha o termo para a <b id="pzSlotLbl">Lacuna 1</b>:</p>
      <div class="pz-bank" id="pzBank">
        ${wordBank.map((w) => `<button class="pzb pz-word" data-w="${w}">${w}</button>`).join("")}
      </div>${footerHTML}`;

    sec.querySelectorAll(".pz-word").forEach((btn) => {
      btn.onclick = () => {
        if (btn.dataset.w === P.blanks[blankIdx]) {
          registerSuccess(btn);
          btn.disabled = true;
          blankIdx++;
          sec.querySelector("#pzDoc").innerHTML = renderDocument();
          if (blankIdx >= P.blanks.length) setTimeout(completePuzzle, 360);
          else sec.querySelector("#pzSlotLbl").textContent = `Lacuna ${blankIdx + 1}`;
        } else {
          registerMistake(btn);
        }
      };
    });
  } else if (P.type === "classify") {
    const queue = shuffle(P.items.slice());
    let itemIdx = 0;
    const renderItem = () => {
      const current = queue[itemIdx];
      sec.innerHTML = `${headerHTML}
        <div class="pz-card">
          <p class="meta">Item ${itemIdx + 1} de ${queue.length}</p>
          <p class="pz-q">“${current.t}”</p>
          <p class="note">Toque na categoria a que pertence esta prática quilombola:</p>
          <div class="pz-bins">
            ${P.bins.map((label, bIdx) => `<button class="pzb pz-bin" data-b="${bIdx}"><b>${label}</b></button>`).join("")}
          </div>
        </div>${footerHTML}`;

      sec.querySelector("#pzSkip").onclick = onReturnSummary;
      sec.querySelectorAll(".pz-bin").forEach((btn) => {
        btn.onclick = () => {
          if (Number(btn.dataset.b) === current.b) {
            registerSuccess(btn);
            btn.disabled = true;
            setTimeout(() => {
              if (++itemIdx >= queue.length) completePuzzle();
              else renderItem();
            }, 340);
          } else {
            registerMistake(btn);
          }
        };
      });
    };
    renderItem();
    return;
  }

  sec.querySelector("#pzSkip").onclick = onReturnSummary;
}
