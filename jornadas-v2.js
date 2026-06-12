(() => {
  try {
    if (typeof render !== "function" || typeof renderMatch !== "function" || typeof getSummary !== "function") return;
    if (typeof matches === "undefined" || typeof state === "undefined" || typeof els === "undefined") return;

    state.matchday = Number(sessionStorage.getItem("prmMatchday") || "1");

    const renderMatchdaysTabbed = (summaries) => {
      const matchdays = [
        { id: 1, title: "Jornada 1", description: "Primer partido de cada seleccion", items: summaries.filter((item) => item.match.matchday === 1) },
        { id: 2, title: "Jornada 2", description: "Segunda vuelta de la fase de grupos", items: summaries.filter((item) => item.match.matchday === 2) },
        { id: 3, title: "Jornada 3", description: "Cierre de grupos y partidos simultaneos", items: summaries.filter((item) => item.match.matchday === 3) },
      ].filter((matchday) => matchday.items.length);

      if (!matchdays.some((matchday) => matchday.id === state.matchday)) {
        state.matchday = matchdays[0]?.id || 1;
      }

      const active = matchdays.find((matchday) => matchday.id === state.matchday) || matchdays[0];
      const shell = document.createElement("div");
      shell.className = "matchday-shell";

      const tabs = document.createElement("div");
      tabs.className = "matchday-tabs";
      tabs.setAttribute("role", "tablist");
      tabs.setAttribute("aria-label", "Jornadas de la fase de grupos");

      matchdays.forEach((matchday) => {
        const button = document.createElement("button");
        button.className = `matchday-tab ${matchday.id === state.matchday ? "active" : ""}`;
        button.type = "button";
        button.setAttribute("role", "tab");
        button.setAttribute("aria-selected", String(matchday.id === state.matchday));
        button.innerHTML = `<span>${matchday.title}</span><strong>${matchday.items.length}</strong>`;
        button.addEventListener("click", () => {
          state.matchday = matchday.id;
          sessionStorage.setItem("prmMatchday", String(state.matchday));
          renderTabbed();
        });
        tabs.appendChild(button);
      });

      const header = document.createElement("div");
      header.className = "matchday-header";
      header.innerHTML = `
        <div>
          <p class="eyebrow">Seleccion actual</p>
          <h3>${active?.title || "Sin partidos"}</h3>
        </div>
        <span>${active?.description || "No hay partidos con este filtro"}</span>
      `;

      const grid = document.createElement("div");
      grid.className = "matchday-grid";
      (active?.items || []).forEach((item) => grid.appendChild(renderMatch(item)));

      shell.append(tabs, header, grid);
      return shell;
    };

    const renderTabbed = () => {
      const summaries = matches.map(getSummary);
      const visibleMatches = summaries.filter(matchesFilter);

      if (els.matchGrid) {
        els.matchGrid.innerHTML = "";
        els.matchGrid.appendChild(renderMatchdaysTabbed(visibleMatches));
      }

      if (els.leaderGrid) {
        els.leaderGrid.innerHTML = "";
        const leaders = document.body.dataset.page === "dashboard" ? visibleMatches : summaries.slice(0, 6);
        leaders
          .slice()
          .sort((a, b) => b.total - a.total || b.confidence - a.confidence)
          .forEach((summary) => els.leaderGrid.appendChild(renderLeader(summary)));
      }

      if (els.totalVotes) els.totalVotes.textContent = summaries.reduce((sum, item) => sum + item.total, 0);
      if (els.lockedPicks) els.lockedPicks.textContent = summaries.filter((item) => item.status === "locked").length;
      if (els.matchCount) els.matchCount.textContent = matches.length;
      if (els.syncStatus) {
        els.syncStatus.textContent = state.online ? "Online" : "Modo local";
        els.syncStatus.classList.toggle("online", state.online);
      }
    };

    renderTabbed();
  } catch (error) {
    console.error(error);
  }
})();
