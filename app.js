const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
const SUPABASE_ANON_KEY = "TU-ANON-KEY";
const onlineEnabled = SUPABASE_URL.startsWith("https://") && !SUPABASE_URL.includes("TU-PROYECTO");
const database = onlineEnabled && window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const teams = {
  Mexico: ["Mexico", "mx", 15, "Anfitrion, estadio a favor"],
  "South Africa": ["Sudafrica", "za", 61, "Velocidad y transicion"],
  "South Korea": ["Corea del Sur", "kr", 22, "Ritmo alto y disciplina"],
  Czechia: ["Chequia", "cz", 44, "Orden y balon parado"],
  Canada: ["Canada", "ca", 27, "Anfitrion, presion alta"],
  "Bosnia and Herzegovina": ["Bosnia y Herzegovina", "ba", 71, "Juego directo"],
  Qatar: ["Qatar", "qa", 53, "Bloque compacto"],
  Switzerland: ["Suiza", "ch", 17, "Solidez y oficio"],
  Brazil: ["Brasil", "br", 5, "Talento ofensivo"],
  Morocco: ["Marruecos", "ma", 12, "Defensa fuerte"],
  Haiti: ["Haiti", "ht", 83, "Energia y despliegue"],
  Scotland: ["Escocia", "gb-sct", 36, "Intensidad fisica"],
  "United States": ["Estados Unidos", "us", 16, "Anfitrion, ritmo alto"],
  Paraguay: ["Paraguay", "py", 39, "Orden defensivo"],
  Australia: ["Australia", "au", 24, "Competitividad y centros"],
  Turkiye: ["Turquia", "tr", 26, "Ataque dinamico"],
  Germany: ["Alemania", "de", 9, "Estructura y remate"],
  Curacao: ["Curazao", "cw", 82, "Primera Copa, ilusion total"],
  "Ivory Coast": ["Costa de Marfil", "ci", 42, "Fisico y potencia"],
  Ecuador: ["Ecuador", "ec", 23, "Presion y piernas"],
  Netherlands: ["Paises Bajos", "nl", 7, "Salida limpia"],
  Japan: ["Japon", "jp", 18, "Presion coordinada"],
  Sweden: ["Suecia", "se", 25, "Juego aereo y orden"],
  Tunisia: ["Tunez", "tn", 41, "Equipo rocoso"],
  Belgium: ["Belgica", "be", 8, "Calidad entre lineas"],
  Egypt: ["Egipto", "eg", 34, "Pegada y experiencia"],
  Iran: ["Iran", "ir", 20, "Defensa intensa"],
  "New Zealand": ["Nueva Zelanda", "nz", 89, "Bloque fisico"],
  Spain: ["Espana", "es", 3, "Posesion y joven talento"],
  "Cabo Verde": ["Cabo Verde", "cv", 70, "Debut peligroso"],
  "Saudi Arabia": ["Arabia Saudi", "sa", 58, "Ritmo y disciplina"],
  Uruguay: ["Uruguay", "uy", 11, "Competitividad maxima"],
  France: ["Francia", "fr", 2, "Plantilla profunda"],
  Senegal: ["Senegal", "sn", 19, "Potencia y duelos"],
  Iraq: ["Irak", "iq", 55, "Orden y orgullo"],
  Norway: ["Noruega", "no", 28, "Pegada y fisico"],
  Argentina: ["Argentina", "ar", 1, "Campeona vigente"],
  Algeria: ["Argelia", "dz", 35, "Verticalidad"],
  Austria: ["Austria", "at", 21, "Presion europea"],
  Jordan: ["Jordania", "jo", 68, "Transicion rapida"],
  Portugal: ["Portugal", "pt", 6, "Pegada y talento"],
  "DR Congo": ["RD Congo", "cd", 56, "Energia ofensiva"],
  Uzbekistan: ["Uzbekistan", "uz", 50, "Debut ordenado"],
  Colombia: ["Colombia", "co", 13, "Creatividad y ritmo"],
  England: ["Inglaterra", "gb-eng", 4, "Bloque completo"],
  Croatia: ["Croacia", "hr", 10, "Experiencia elite"],
  Ghana: ["Ghana", "gh", 64, "Fisico y transicion"],
  Panama: ["Panama", "pa", 45, "Intensidad CONCACAF"],
};

const fixtures = `
2026-06-11T21:00:00+02:00|Grupo A|Mexico|South Africa|Estadio Azteca, Ciudad de Mexico
2026-06-12T04:00:00+02:00|Grupo A|South Korea|Czechia|Pendiente FIFA
2026-06-12T21:00:00+02:00|Grupo B|Canada|Bosnia and Herzegovina|BMO Field, Toronto
2026-06-13T03:00:00+02:00|Grupo D|United States|Paraguay|SoFi Stadium, Los Angeles
2026-06-13T21:00:00+02:00|Grupo B|Qatar|Switzerland|Pendiente FIFA
2026-06-14T00:00:00+02:00|Grupo C|Brazil|Morocco|Pendiente FIFA
2026-06-14T03:00:00+02:00|Grupo C|Haiti|Scotland|Pendiente FIFA
2026-06-14T06:00:00+02:00|Grupo D|Australia|Turkiye|Pendiente FIFA
2026-06-14T19:00:00+02:00|Grupo E|Germany|Curacao|Pendiente FIFA
2026-06-14T22:00:00+02:00|Grupo F|Netherlands|Japan|Pendiente FIFA
2026-06-15T01:00:00+02:00|Grupo E|Ivory Coast|Ecuador|Pendiente FIFA
2026-06-15T04:00:00+02:00|Grupo F|Sweden|Tunisia|Pendiente FIFA
2026-06-15T18:00:00+02:00|Grupo H|Spain|Cabo Verde|Pendiente FIFA
2026-06-15T21:00:00+02:00|Grupo G|Belgium|Egypt|Pendiente FIFA
2026-06-16T00:00:00+02:00|Grupo H|Saudi Arabia|Uruguay|Pendiente FIFA
2026-06-16T03:00:00+02:00|Grupo G|Iran|New Zealand|Pendiente FIFA
2026-06-16T21:00:00+02:00|Grupo I|France|Senegal|Pendiente FIFA
2026-06-17T00:00:00+02:00|Grupo I|Iraq|Norway|Pendiente FIFA
2026-06-17T03:00:00+02:00|Grupo J|Argentina|Algeria|Pendiente FIFA
2026-06-17T06:00:00+02:00|Grupo J|Austria|Jordan|Pendiente FIFA
2026-06-17T19:00:00+02:00|Grupo K|Portugal|DR Congo|Pendiente FIFA
2026-06-17T22:00:00+02:00|Grupo L|England|Croatia|Pendiente FIFA
2026-06-18T01:00:00+02:00|Grupo L|Ghana|Panama|Pendiente FIFA
2026-06-18T04:00:00+02:00|Grupo K|Uzbekistan|Colombia|Pendiente FIFA
2026-06-18T18:00:00+02:00|Grupo A|Czechia|South Africa|Pendiente FIFA
2026-06-18T21:00:00+02:00|Grupo B|Switzerland|Bosnia and Herzegovina|Pendiente FIFA
2026-06-19T00:00:00+02:00|Grupo B|Canada|Qatar|Pendiente FIFA
2026-06-19T03:00:00+02:00|Grupo A|Mexico|South Korea|Pendiente FIFA
2026-06-19T21:00:00+02:00|Grupo D|United States|Australia|Pendiente FIFA
2026-06-20T00:00:00+02:00|Grupo C|Scotland|Morocco|Pendiente FIFA
2026-06-20T02:30:00+02:00|Grupo C|Brazil|Haiti|Pendiente FIFA
2026-06-20T05:00:00+02:00|Grupo D|Turkiye|Paraguay|Pendiente FIFA
2026-06-20T19:00:00+02:00|Grupo F|Netherlands|Sweden|Pendiente FIFA
2026-06-20T22:00:00+02:00|Grupo E|Germany|Ivory Coast|Pendiente FIFA
2026-06-21T02:00:00+02:00|Grupo E|Ecuador|Curacao|Pendiente FIFA
2026-06-21T06:00:00+02:00|Grupo F|Tunisia|Japan|Pendiente FIFA
2026-06-21T18:00:00+02:00|Grupo H|Spain|Saudi Arabia|Pendiente FIFA
2026-06-21T21:00:00+02:00|Grupo G|Belgium|Iran|Pendiente FIFA
2026-06-22T00:00:00+02:00|Grupo H|Uruguay|Cabo Verde|Pendiente FIFA
2026-06-22T03:00:00+02:00|Grupo G|New Zealand|Egypt|Pendiente FIFA
2026-06-22T19:00:00+02:00|Grupo J|Argentina|Austria|Pendiente FIFA
2026-06-22T23:00:00+02:00|Grupo I|France|Iraq|Pendiente FIFA
2026-06-23T02:00:00+02:00|Grupo I|Norway|Senegal|Pendiente FIFA
2026-06-23T05:00:00+02:00|Grupo J|Jordan|Algeria|Pendiente FIFA
2026-06-23T19:00:00+02:00|Grupo K|Portugal|Uzbekistan|Pendiente FIFA
2026-06-23T22:00:00+02:00|Grupo L|England|Ghana|Pendiente FIFA
2026-06-24T01:00:00+02:00|Grupo L|Panama|Croatia|Pendiente FIFA
2026-06-24T04:00:00+02:00|Grupo K|Colombia|DR Congo|Pendiente FIFA
2026-06-24T21:00:00+02:00|Grupo B|Switzerland|Canada|Pendiente FIFA
2026-06-24T21:00:00+02:00|Grupo B|Bosnia and Herzegovina|Qatar|Pendiente FIFA
2026-06-25T00:00:00+02:00|Grupo C|Morocco|Haiti|Pendiente FIFA
2026-06-25T00:00:00+02:00|Grupo C|Scotland|Brazil|Pendiente FIFA
2026-06-25T03:00:00+02:00|Grupo A|South Africa|South Korea|Pendiente FIFA
2026-06-25T03:00:00+02:00|Grupo A|Czechia|Mexico|Pendiente FIFA
2026-06-25T22:00:00+02:00|Grupo E|Curacao|Ivory Coast|Pendiente FIFA
2026-06-25T22:00:00+02:00|Grupo E|Ecuador|Germany|Pendiente FIFA
2026-06-26T01:00:00+02:00|Grupo F|Tunisia|Netherlands|Pendiente FIFA
2026-06-26T01:00:00+02:00|Grupo F|Japan|Sweden|Pendiente FIFA
2026-06-26T04:00:00+02:00|Grupo D|Turkiye|United States|Pendiente FIFA
2026-06-26T04:00:00+02:00|Grupo D|Paraguay|Australia|Pendiente FIFA
2026-06-26T21:00:00+02:00|Grupo I|Norway|France|Pendiente FIFA
2026-06-26T21:00:00+02:00|Grupo I|Senegal|Iraq|Pendiente FIFA
2026-06-27T02:00:00+02:00|Grupo H|Cabo Verde|Saudi Arabia|Pendiente FIFA
2026-06-27T02:00:00+02:00|Grupo H|Uruguay|Spain|Pendiente FIFA
2026-06-27T05:00:00+02:00|Grupo G|New Zealand|Belgium|Pendiente FIFA
2026-06-27T05:00:00+02:00|Grupo G|Egypt|Iran|Pendiente FIFA
2026-06-27T23:00:00+02:00|Grupo L|Panama|England|Pendiente FIFA
2026-06-27T23:00:00+02:00|Grupo L|Croatia|Ghana|Pendiente FIFA
2026-06-28T01:30:00+02:00|Grupo K|Colombia|Portugal|Pendiente FIFA
2026-06-28T01:30:00+02:00|Grupo K|DR Congo|Uzbekistan|Pendiente FIFA
2026-06-28T04:00:00+02:00|Grupo J|Algeria|Austria|Pendiente FIFA
2026-06-28T04:00:00+02:00|Grupo J|Jordan|Argentina|Pendiente FIFA
`;

const makeTeam = (key) => ({ name: teams[key][0], code: teams[key][1], rank: teams[key][2], note: teams[key][3] });
const slug = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const matches = fixtures.trim().split("\n").map((line, index) => {
  const [date, group, homeKey, awayKey, venue] = line.split("|");
  const home = makeTeam(homeKey);
  const away = makeTeam(awayKey);
  return { id: `${group.toLowerCase().replace(/\s+/g, "-")}-${index + 1}-${slug(homeKey)}-${slug(awayKey)}`, date, group, venue, home, away, insight: insight(home, away), market: market(home, away) };
});

const isDashboardPage = document.body.dataset.page === "dashboard";
const state = { votes: JSON.parse(localStorage.getItem("prmVotes") || "{}"), participants: JSON.parse(localStorage.getItem("prmParticipants") || "[]"), voterName: localStorage.getItem("prmVoterName") || "", filter: "all", online: false, currentUserId: null };
const els = {
  voterName: document.querySelector("#voterName"), matchFilter: document.querySelector("#matchFilter"), matchGrid: document.querySelector("#matchGrid"), leaderGrid: document.querySelector("#leaderGrid"), totalVotes: document.querySelector("#totalVotes"), lockedPicks: document.querySelector("#lockedPicks"), matchCount: document.querySelector("#matchCount"), exportButton: document.querySelector("#exportButton"), importFile: document.querySelector("#importFile"), clearMyVotes: document.querySelector("#clearMyVotes"), syncStatus: document.querySelector("#syncStatus"), matchTemplate: document.querySelector("#matchTemplate"), leaderTemplate: document.querySelector("#leaderTemplate"),
};

if (els.voterName) els.voterName.value = state.voterName;
els.voterName?.addEventListener("input", () => { state.voterName = clean(els.voterName.value); localStorage.setItem("prmVoterName", state.voterName); render(); });
els.matchFilter?.addEventListener("change", () => { state.filter = els.matchFilter.value; render(); });
els.exportButton?.addEventListener("click", exportVotes);
els.importFile?.addEventListener("change", importVotes);
els.clearMyVotes?.addEventListener("click", clearCurrentUserVotes);
boot();

async function boot() {
  await ensureAuth();
  await loadSharedVotes();
  render();
  if (database) {
    database.channel("porra-real-madrid")
      .on("postgres_changes", { event: "*", schema: "public", table: "votes" }, async () => { await loadSharedVotes(); render(); })
      .on("postgres_changes", { event: "*", schema: "public", table: "participants" }, async () => { await loadSharedVotes(); render(); })
      .subscribe();
  }
}

function render() {
  const summaries = matches.map(summary);
  const visible = summaries.filter(matchFilter);
  if (els.matchGrid) { els.matchGrid.innerHTML = ""; visible.forEach((item) => els.matchGrid.appendChild(renderMatch(item))); }
  if (els.leaderGrid) { els.leaderGrid.innerHTML = ""; (isDashboardPage ? visible : summaries.slice(0, 6)).slice().sort((a, b) => b.total - a.total || b.confidence - a.confidence).forEach((item) => els.leaderGrid.appendChild(renderLeader(item))); }
  if (els.totalVotes) els.totalVotes.textContent = summaries.reduce((sum, item) => sum + item.total, 0);
  if (els.lockedPicks) els.lockedPicks.textContent = summaries.filter((item) => item.status === "locked").length;
  if (els.matchCount) els.matchCount.textContent = matches.length;
  if (els.syncStatus) { els.syncStatus.textContent = state.online ? "Online" : "Modo local"; els.syncStatus.classList.toggle("online", state.online); }
}

function renderMatch(item) {
  const node = els.matchTemplate.content.firstElementChild.cloneNode(true);
  const match = item.match;
  node.querySelector(".match-topline").innerHTML = `<span>${formatDate(match.date)} · ${match.venue}</span><span class="tag">${match.group}</span>`;
  node.querySelector(".teams").innerHTML = `${renderTeam(match.home)}<span class="versus">vs</span>${renderTeam(match.away)}`;
  node.querySelector(".insight").textContent = match.insight;
  node.querySelector(".market").innerHTML = renderMarket(match);
  node.querySelector(".vote-row").innerHTML = renderVoteButtons(item);
  node.querySelector(".vote-summary").innerHTML = `<span>Lider: <strong>${item.winnerLabel}</strong></span><span>${item.total} votos · ${item.confidence}% consenso</span>`;
  node.querySelectorAll(".vote-button").forEach((button) => button.addEventListener("click", () => vote(match.id, button.dataset.pick)));
  return node;
}

function renderLeader(item) {
  const node = els.leaderTemplate.content.firstElementChild.cloneNode(true);
  const match = item.match;
  node.querySelector(".mini-match").innerHTML = `<span>${match.group} · ${match.home.name} vs ${match.away.name}</span><span>${formatDate(match.date)}</span>`;
  node.querySelector(".winner-line").textContent = item.status === "open" ? "Sin lider claro" : `Gana: ${item.winnerLabel}`;
  node.querySelector(".bar-stack").innerHTML = item.options.map((option) => `<div class="bar-item"><div class="bar-label"><span>${option.label}</span><span>${option.votes} votos · ${option.percent}%</span></div><div class="bar-track"><div class="bar-fill" style="width:${option.percent}%"></div></div></div>`).join("");
  return node;
}

function renderTeam(item) { return `<div class="team"><img class="flag" src="https://flagcdn.com/w160/${item.code}.png" alt="Bandera de ${item.name}" loading="lazy"><span class="team-name">${item.name}</span><span class="team-meta">Ranking aprox. ${item.rank} · ${item.note}</span></div>`; }
function renderMarket(match) { return [match.home.name, "Empate", match.away.name].map((label, index) => `<div class="market-pill"><span>${label}</span><strong>${match.market[index]}%</strong></div>`).join(""); }
function renderVoteButtons(item) { const myPick = getMyPick(item.match.id); return item.options.map((option) => `<button class="vote-button ${myPick === option.pick ? "active" : ""}" data-pick="${option.pick}" type="button">${option.label}</button>`).join(""); }

function summary(match) {
  const counts = { home: 0, draw: 0, away: 0 };
  Object.values(state.votes[match.id] || {}).forEach((pick) => { if (counts[pick] !== undefined) counts[pick] += 1; });
  const total = counts.home + counts.draw + counts.away;
  const options = [{ pick: "home", label: match.home.name, votes: counts.home }, { pick: "draw", label: "Empate", votes: counts.draw }, { pick: "away", label: match.away.name, votes: counts.away }].map((option) => ({ ...option, percent: total ? Math.round((option.votes / total) * 100) : 0 }));
  const top = Math.max(...options.map((option) => option.votes));
  const leaders = options.filter((option) => option.votes === top);
  const winner = total && leaders.length === 1 ? leaders[0] : null;
  return { match, total, options, winnerLabel: winner ? winner.label : "Abierto", confidence: winner ? winner.percent : 0, status: winner && winner.percent >= 50 ? "locked" : "open" };
}

async function vote(matchId, pick) {
  const name = clean(els.voterName?.value || "");
  if (!name) { els.voterName?.focus(); if (els.voterName) els.voterName.placeholder = "Pon tu nombre antes de votar"; return; }
  state.voterName = name;
  state.votes[matchId] = state.votes[matchId] || {};
  state.votes[matchId][name] = pick;
  if (!state.participants.includes(name)) state.participants.push(name);
  persist();
  render();
  if (database) {
    const participant = await upsertParticipant(name);
    if (participant) {
      const { error } = await database.from("votes").upsert({ match_id: matchId, user_id: participant.user_id, pick, updated_at: new Date().toISOString() }, { onConflict: "match_id,user_id" });
      if (error) { console.error(error); state.online = false; } else { await loadSharedVotes(); }
      render();
    }
  }
}

function getMyPick(matchId) { const name = clean(els.voterName?.value || ""); return name && state.votes[matchId] ? state.votes[matchId][name] : null; }
function persist() { localStorage.setItem("prmVotes", JSON.stringify(state.votes)); localStorage.setItem("prmParticipants", JSON.stringify(state.participants)); localStorage.setItem("prmVoterName", state.voterName); }
function clean(value) { return value.trim().replace(/\s+/g, " "); }
function matchFilter(item) { if (state.filter === "hot") return item.status === "locked"; if (state.filter === "open") return item.status === "open"; if (state.filter === "today") { const start = new Date(); start.setHours(0, 0, 0, 0); return new Date(item.match.date) >= start; } return true; }

function exportVotes() { const blob = new Blob([JSON.stringify({ app: "Porra Real Madrid", author: "Dr. Antonio J. Arnal Meinhardt", exportedAt: new Date().toISOString(), participants: state.participants, votes: state.votes }, null, 2)], { type: "application/json" }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "porra-real-madrid-votos.json"; link.click(); URL.revokeObjectURL(link.href); }
function importVotes(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => { try { const payload = JSON.parse(reader.result); if (Array.isArray(payload.participants)) state.participants = Array.from(new Set([...state.participants, ...payload.participants.map(clean)])); state.votes = mergeVotes(state.votes, payload.votes || payload); persist(); render(); } catch { alert("No pude importar ese archivo. Revisa que sea un JSON exportado desde la porra."); } finally { event.target.value = ""; } }; reader.readAsText(file); }
function mergeVotes(current, incoming) { const merged = JSON.parse(JSON.stringify(current)); Object.entries(incoming).forEach(([matchId, voters]) => { if (!merged[matchId]) merged[matchId] = {}; Object.entries(voters || {}).forEach(([name, pick]) => { if (["home", "draw", "away"].includes(pick)) merged[matchId][clean(name)] = pick; }); }); return merged; }
async function clearCurrentUserVotes() { const name = clean(els.voterName?.value || ""); if (!name) return; Object.keys(state.votes).forEach((matchId) => delete state.votes[matchId][name]); persist(); render(); if (database && state.currentUserId) { await database.from("votes").delete().eq("user_id", state.currentUserId); await loadSharedVotes(); render(); } }

async function ensureAuth() {
  if (!database) return;
  const { data: existing } = await database.auth.getSession();
  if (existing?.session?.user) { state.currentUserId = existing.session.user.id; return; }
  const { data, error } = await database.auth.signInAnonymously();
  if (error) { console.error(error); state.online = false; return; }
  state.currentUserId = data.user?.id || null;
}

async function loadSharedVotes() {
  if (!database) { state.online = false; return; }
  if (!state.currentUserId) await ensureAuth();
  if (!state.currentUserId) return;
  const { data, error } = await database.from("votes").select("match_id,pick,participants(name)").order("updated_at", { ascending: false });
  if (error) { console.error(error); state.online = false; return; }
  state.online = true;
  state.votes = {};
  state.participants = [];
  data.forEach((row) => { const name = clean(row.participants?.name || ""); if (!name) return; if (!state.votes[row.match_id]) state.votes[row.match_id] = {}; state.votes[row.match_id][name] = row.pick; if (!state.participants.includes(name)) state.participants.push(name); });
  persist();
}

async function upsertParticipant(name) {
  if (!state.currentUserId) await ensureAuth();
  if (!state.currentUserId) return null;
  const { data, error } = await database.from("participants").upsert({ user_id: state.currentUserId, name }, { onConflict: "user_id" }).select("user_id,name").single();
  if (error) { console.error(error); state.online = false; return null; }
  state.online = true;
  return data;
}

function insight(home, away) { const favorite = home.rank <= away.rank ? home : away; const challenger = favorite === home ? away : home; return `${favorite.name} parte con mejor ranking y ${favorite.note.toLowerCase()}. ${challenger.name} puede equilibrarlo con ${challenger.note.toLowerCase()}.`; }
function market(home, away) { const gap = away.rank - home.rank; const homeWin = Math.round(Math.max(18, Math.min(68, 37 + Math.max(-18, Math.min(22, gap * 0.45))))); const draw = 27; return [homeWin, draw, Math.max(12, 100 - homeWin - draw)]; }
function formatDate(value) { return new Intl.DateTimeFormat("es-ES", { weekday: "short", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value)); }
