const matches = [
  {
    id: "mex-rsa-2026-06-11",
    group: "Grupo A",
    date: "2026-06-11T21:00:00+02:00",
    venue: "Estadio Azteca, Ciudad de Mexico",
    home: team("Mexico", "mx", 14, "Anfitrion, fuerte en casa"),
    away: team("Sudafrica", "za", 56, "Velocidad y transicion"),
    insight: "Partido inaugural con ambiente enorme. Mexico suele crecer con estadio a favor; Sudafrica puede castigar si encuentra espacios.",
    market: [48, 29, 23],
  },
  {
    id: "can-bih-2026-06-12",
    group: "Grupo B",
    date: "2026-06-12T20:00:00+02:00",
    venue: "BMO Field, Toronto",
    home: team("Canada", "ca", 27, "Anfitrion, ritmo alto"),
    away: team("Bosnia y Herzegovina", "ba", 71, "Juego directo"),
    insight: "Canada llega con factor local y mucho despliegue por bandas. Bosnia necesita controlar el ritmo para que el partido no se rompa.",
    market: [52, 27, 21],
  },
  {
    id: "usa-par-2026-06-12",
    group: "Grupo D",
    date: "2026-06-12T23:00:00+02:00",
    venue: "SoFi Stadium, Los Angeles",
    home: team("Estados Unidos", "us", 16, "Anfitrion, presion alta"),
    away: team("Paraguay", "py", 39, "Orden defensivo"),
    insight: "Estados Unidos tendra energia local; Paraguay suele competir bien los partidos cerrados y vive comodo en marcadores cortos.",
    market: [49, 30, 21],
  },
  {
    id: "bra-sco-2026-06-13",
    group: "Grupo C",
    date: "2026-06-13T21:00:00+02:00",
    venue: "MetLife Stadium, Nueva Jersey",
    home: team("Brasil", "br", 5, "Talento ofensivo"),
    away: team("Escocia", "gb-sct", 36, "Intensidad fisica"),
    insight: "Brasil parte como favorito por calidad individual. Escocia puede incomodar si convierte el duelo en una batalla de ritmo y balon parado.",
    market: [61, 23, 16],
  },
  {
    id: "fra-sen-2026-06-14",
    group: "Grupo I",
    date: "2026-06-14T18:00:00+02:00",
    venue: "Lincoln Financial Field, Philadelphia",
    home: team("Francia", "fr", 2, "Plantilla profunda"),
    away: team("Senegal", "sn", 18, "Potencia y duelos"),
    insight: "Cruce de muchisimo fisico. Francia tiene mas variantes, pero Senegal puede igualar duelos y hacer sufrir en transiciones.",
    market: [55, 26, 19],
  },
  {
    id: "ned-jpn-2026-06-14",
    group: "Grupo F",
    date: "2026-06-14T21:00:00+02:00",
    venue: "AT&T Stadium, Arlington",
    home: team("Paises Bajos", "nl", 7, "Salida limpia"),
    away: team("Japon", "jp", 18, "Presion coordinada"),
    insight: "Partido tactico precioso: Paises Bajos domina estructura y Japon aprieta con disciplina. El empate puede tener mucho valor de grupo.",
    market: [46, 30, 24],
  },
  {
    id: "arg-alg-2026-06-15",
    group: "Grupo J",
    date: "2026-06-15T20:00:00+02:00",
    venue: "Arrowhead Stadium, Kansas City",
    home: team("Argentina", "ar", 1, "Campeona vigente"),
    away: team("Argelia", "dz", 35, "Verticalidad"),
    insight: "Argentina tiene jerarquia y control emocional. Argelia necesitara eficacia en las pocas ventanas que consiga a campo abierto.",
    market: [63, 22, 15],
  },
  {
    id: "esp-civ-2026-06-16",
    group: "Grupo H",
    date: "2026-06-16T18:00:00+02:00",
    venue: "Levi's Stadium, Santa Clara",
    home: team("Espana", "es", 3, "Posesion y joven talento"),
    away: team("Costa de Marfil", "ci", 42, "Fisico y potencia"),
    insight: "Espana buscara mandar con balon. Costa de Marfil tiene argumentos para correr y convertir cada perdida en peligro.",
    market: [57, 25, 18],
  },
  {
    id: "por-cod-2026-06-17",
    group: "Grupo K",
    date: "2026-06-17T21:00:00+02:00",
    venue: "Hard Rock Stadium, Miami",
    home: team("Portugal", "pt", 6, "Pegada y talento"),
    away: team("RD Congo", "cd", 56, "Energia ofensiva"),
    insight: "Portugal tiene mas recursos entre lineas y mucho gol. RD Congo puede competir si convierte el partido en ida y vuelta.",
    market: [64, 21, 15],
  },
  {
    id: "eng-cro-2026-06-17",
    group: "Grupo L",
    date: "2026-06-17T23:00:00+02:00",
    venue: "Mercedes-Benz Stadium, Atlanta",
    home: team("Inglaterra", "gb-eng", 4, "Bloque completo"),
    away: team("Croacia", "hr", 10, "Experiencia elite"),
    insight: "Uno de los duelos grandes de la fase de grupos. Inglaterra llega con mas profundidad; Croacia sabe manejar partidos grandes.",
    market: [44, 30, 26],
  },
  {
    id: "ger-col-2026-06-18",
    group: "Grupo E",
    date: "2026-06-18T20:00:00+02:00",
    venue: "NRG Stadium, Houston",
    home: team("Alemania", "de", 9, "Orden y remate"),
    away: team("Colombia", "co", 13, "Creatividad y ritmo"),
    insight: "Alemania ofrece estructura y amenaza en area. Colombia puede desordenar con talento entre lineas y cambios de velocidad.",
    market: [42, 29, 29],
  },
  {
    id: "uru-tur-2026-06-19",
    group: "Grupo G",
    date: "2026-06-19T21:00:00+02:00",
    venue: "Lumen Field, Seattle",
    home: team("Uruguay", "uy", 11, "Competitividad maxima"),
    away: team("Turquia", "tr", 26, "Ataque dinamico"),
    insight: "Uruguay es intensidad y oficio. Turquia tiene talento para discutirle el control, especialmente si marca primero.",
    market: [45, 28, 27],
  },
];

const state = {
  votes: JSON.parse(localStorage.getItem("prmVotes") || "{}"),
  voterName: localStorage.getItem("prmVoterName") || "",
  filter: "all",
};

const els = {
  voterName: document.querySelector("#voterName"),
  matchFilter: document.querySelector("#matchFilter"),
  matchGrid: document.querySelector("#matchGrid"),
  leaderGrid: document.querySelector("#leaderGrid"),
  totalVotes: document.querySelector("#totalVotes"),
  lockedPicks: document.querySelector("#lockedPicks"),
  matchCount: document.querySelector("#matchCount"),
  exportButton: document.querySelector("#exportButton"),
  importFile: document.querySelector("#importFile"),
  clearMyVotes: document.querySelector("#clearMyVotes"),
  matchTemplate: document.querySelector("#matchTemplate"),
  leaderTemplate: document.querySelector("#leaderTemplate"),
};

els.voterName.value = state.voterName;
els.matchCount.textContent = matches.length;

els.voterName.addEventListener("input", () => {
  state.voterName = cleanName(els.voterName.value);
  localStorage.setItem("prmVoterName", state.voterName);
  render();
});

els.matchFilter.addEventListener("change", () => {
  state.filter = els.matchFilter.value;
  render();
});

els.exportButton.addEventListener("click", exportVotes);
els.importFile.addEventListener("change", importVotes);
els.clearMyVotes.addEventListener("click", clearCurrentUserVotes);

render();

function team(name, code, rank, note) {
  return { name, code, rank, note };
}

function render() {
  const summaries = matches.map(getSummary);
  const visibleMatches = summaries.filter(matchesFilter);

  els.matchGrid.innerHTML = "";
  visibleMatches.forEach((summary) => els.matchGrid.appendChild(renderMatch(summary)));

  els.leaderGrid.innerHTML = "";
  summaries
    .slice()
    .sort((a, b) => b.total - a.total || b.confidence - a.confidence)
    .slice(0, 6)
    .forEach((summary) => els.leaderGrid.appendChild(renderLeader(summary)));

  els.totalVotes.textContent = summaries.reduce((sum, item) => sum + item.total, 0);
  els.lockedPicks.textContent = summaries.filter((item) => item.status === "locked").length;
}

function renderMatch(summary) {
  const node = els.matchTemplate.content.firstElementChild.cloneNode(true);
  const match = summary.match;
  const date = new Intl.DateTimeFormat("es-ES", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(match.date));

  node.querySelector(".match-topline").innerHTML = `
    <span>${date} · ${match.venue}</span>
    <span class="tag">${match.group}</span>
  `;
  node.querySelector(".teams").innerHTML = `
    ${renderTeam(match.home)}
    <span class="versus">vs</span>
    ${renderTeam(match.away)}
  `;
  node.querySelector(".insight").textContent = match.insight;
  node.querySelector(".market").innerHTML = renderMarket(match);
  node.querySelector(".vote-row").innerHTML = renderVoteButtons(summary);
  node.querySelector(".vote-summary").innerHTML = `
    <span>Lider: <strong>${summary.winnerLabel}</strong></span>
    <span>${summary.total} votos · ${summary.confidence}% consenso</span>
  `;

  node.querySelectorAll(".vote-button").forEach((button) => {
    button.addEventListener("click", () => vote(match.id, button.dataset.pick));
  });

  return node;
}

function renderLeader(summary) {
  const node = els.leaderTemplate.content.firstElementChild.cloneNode(true);
  const match = summary.match;
  const date = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(match.date));

  node.querySelector(".mini-match").innerHTML = `
    <span>${match.home.name} vs ${match.away.name}</span>
    <span>${date}</span>
  `;
  node.querySelector(".winner-line").textContent =
    summary.status === "open" ? "Sin lider claro" : `Gana: ${summary.winnerLabel}`;
  node.querySelector(".bar-stack").innerHTML = summary.options
    .map(
      (option) => `
        <div class="bar-item">
          <div class="bar-label">
            <span>${option.label}</span>
            <span>${option.votes} votos · ${option.percent}%</span>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width:${option.percent}%"></div></div>
        </div>
      `,
    )
    .join("");
  return node;
}

function renderTeam(item) {
  return `
    <div class="team">
      <img class="flag" src="https://flagcdn.com/w160/${item.code}.png" alt="Bandera de ${item.name}" loading="lazy">
      <span class="team-name">${item.name}</span>
      <span class="team-meta">Ranking aprox. ${item.rank} · ${item.note}</span>
    </div>
  `;
}

function renderMarket(match) {
  const labels = [match.home.name, "Empate", match.away.name];
  return match.market
    .map(
      (value, index) => `
        <div class="market-pill">
          <span>${labels[index]}</span>
          <strong>${value}%</strong>
        </div>
      `,
    )
    .join("");
}

function renderVoteButtons(summary) {
  const myPick = getMyPick(summary.match.id);
  return summary.options
    .map(
      (option) => `
        <button class="vote-button ${myPick === option.pick ? "active" : ""}" data-pick="${option.pick}" type="button">
          ${option.label}
        </button>
      `,
    )
    .join("");
}

function getSummary(match) {
  const matchVotes = state.votes[match.id] || {};
  const counts = { home: 0, draw: 0, away: 0 };
  Object.values(matchVotes).forEach((pick) => {
    if (counts[pick] !== undefined) counts[pick] += 1;
  });

  const total = counts.home + counts.draw + counts.away;
  const options = [
    { pick: "home", label: match.home.name, votes: counts.home },
    { pick: "draw", label: "Empate", votes: counts.draw },
    { pick: "away", label: match.away.name, votes: counts.away },
  ].map((option) => ({
    ...option,
    percent: total ? Math.round((option.votes / total) * 100) : 0,
  }));

  const topVotes = Math.max(...options.map((option) => option.votes));
  const leaders = options.filter((option) => option.votes === topVotes);
  const winner = total && leaders.length === 1 ? leaders[0] : null;

  return {
    match,
    total,
    options,
    winnerLabel: winner ? winner.label : "Abierto",
    confidence: winner ? winner.percent : 0,
    status: winner && winner.percent >= 50 ? "locked" : "open",
  };
}

function vote(matchId, pick) {
  const name = cleanName(els.voterName.value);
  if (!name) {
    els.voterName.focus();
    els.voterName.placeholder = "Pon tu nombre antes de votar";
    return;
  }

  state.voterName = name;
  state.votes[matchId] = state.votes[matchId] || {};
  state.votes[matchId][name] = pick;
  persist();
  render();
}

function getMyPick(matchId) {
  const name = cleanName(els.voterName.value);
  return name && state.votes[matchId] ? state.votes[matchId][name] : null;
}

function persist() {
  localStorage.setItem("prmVotes", JSON.stringify(state.votes));
  localStorage.setItem("prmVoterName", state.voterName);
}

function cleanName(value) {
  return value.trim().replace(/\s+/g, " ");
}

function matchesFilter(summary) {
  if (state.filter === "hot") return summary.status === "locked";
  if (state.filter === "open") return summary.status === "open";
  if (state.filter === "today") {
    const matchDate = new Date(summary.match.date);
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return matchDate >= start;
  }
  return true;
}

function exportVotes() {
  const payload = {
    app: "Porra Real Madrid",
    author: "Dr. Antonio J. Arnal Meinhardt",
    exportedAt: new Date().toISOString(),
    votes: state.votes,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "porra-real-madrid-votos.json";
  link.click();
  URL.revokeObjectURL(link.href);
}

function importVotes(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      const incomingVotes = payload.votes || payload;
      state.votes = mergeVotes(state.votes, incomingVotes);
      persist();
      render();
    } catch {
      alert("No pude importar ese archivo. Revisa que sea un JSON exportado desde la porra.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function mergeVotes(current, incoming) {
  const merged = JSON.parse(JSON.stringify(current));
  Object.entries(incoming).forEach(([matchId, voters]) => {
    if (!merged[matchId]) merged[matchId] = {};
    Object.entries(voters || {}).forEach(([name, pick]) => {
      if (["home", "draw", "away"].includes(pick)) merged[matchId][cleanName(name)] = pick;
    });
  });
  return merged;
}

function clearCurrentUserVotes() {
  const name = cleanName(els.voterName.value);
  if (!name) return;

  Object.keys(state.votes).forEach((matchId) => {
    delete state.votes[matchId][name];
  });
  persist();
  render();
}
