/**
 * View Module: Aba As 18 Faixas (#faixas)
 * Renderiza a barra de filtros, campo de pesquisa e a lista interativa das 18 faixas MP3.
 */

window.BTBApp = window.BTBApp || {};

(function (app) {
  "use strict";

  app.views = app.views || {};

  app.views.mountTracks = function () {
    const container = document.getElementById("faixas");
    if (!container) return;

    const sec = SITE_CONTENT.tracksSection;

    const filterTabsHtml = sec.filters
      .map(
        (f, i) => `
          <button type="button" class="filter-tab ${i === 0 ? "active" : ""}" data-filter="${f.id}">
            ${f.label} <span class="tab-count">${f.count}</span>
          </button>
        `
      )
      .join("");

    container.innerHTML = `
      <section class="py-3">
        <div class="container">
          <div class="section-header mb-4">
            <div>
              <span class="section-kicker"><i class="fa-solid fa-compact-disc me-1"></i> ${sec.kicker}</span>
              <h2 class="section-title mb-1">${sec.title}</h2>
              <p class="text-secondary mb-0">${sec.subtitleHtml}</p>
            </div>
            <div class="d-flex gap-2">
              <button type="button" class="btn btn-sm btn-boardwalk-primary" id="tracklistPlayAllBtn">
                <i class="fa-solid fa-play me-1"></i> Tocar Tudo do #01
              </button>
            </div>
          </div>

          <!-- Barra de Filtros e Busca -->
          <div class="modern-card p-3 mb-4">
            <div class="tracklist-toolbar">
              <div class="filter-tabs" role="tablist" aria-label="Filtrar faixas por destino">
                ${filterTabsHtml}
              </div>

              <div class="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" id="trackSearchInput" placeholder="Buscar música, letra ou curiosidade..." aria-label="Buscar faixa" />
              </div>
            </div>
          </div>

          <!-- Lista Dinâmica das 18 Faixas -->
          <div class="track-list-container" id="trackListContainer"></div>
        </div>
      </section>
    `;
  };

  app.views.renderTracklist = function () {
    const { state, els, utils } = app;
    if (!els.trackListContainer) return;

    const query = state.searchQuery.trim().toLowerCase();

    const filtered = state.tracks.filter((track) => {
      const matchesFilter =
        state.activeFilter === "all" || track.category === state.activeFilter;
      if (!matchesFilter) return false;
      if (!query) return true;

      const haystack = [
        track.number,
        track.title,
        track.originalTitle,
        track.summary,
        track.officialRelease,
        track.lyricsExcerpt
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });

    if (filtered.length === 0) {
      els.trackListContainer.innerHTML = `
        <div class="modern-card p-4 text-center">
          <p class="mb-0">Nenhuma faixa encontrada para "<strong>${state.searchQuery}</strong>".</p>
        </div>
      `;
      return;
    }

    els.trackListContainer.innerHTML = filtered
      .map((track) => {
        const idx = track.id - 1;
        const isCurrent = idx === state.currentTrackIndex;
        const isPlayingThis = isCurrent && state.isPlaying;
        const renamedDiffers =
          track.originalTitle &&
          track.originalTitle.toLowerCase() !== track.title.toLowerCase();

        return `
          <div class="track-row ${isCurrent ? "active" : ""}" data-track-index="${idx}">
            <div class="track-num-cell" title="Tocar #${track.number}">
              ${isPlayingThis ? '<i class="fa-solid fa-pause"></i>' : track.number}
            </div>

            <div class="track-main-cell">
              <div class="track-title-line">
                <span class="track-name">${track.title}</span>
                ${
                  renamedDiffers
                    ? `<span class="track-renamed-tag">→ ${track.originalTitle}</span>`
                    : ""
                }
              </div>
              <p class="track-mini-desc">${track.summary}</p>
            </div>

            <div class="track-cat-cell">
              <span class="category-pill ${utils.getCategoryClass(track.category)}">
                ${track.categoryLabel}
              </span>
            </div>

            <div class="track-duration-cell" title="Recorte no Remaster: ${track.startTimestamp} – ${track.endTimestamp}">
              <span class="audio-ready-dot" title="MP3 192kbps pronto"></span>${track.duration}
            </div>

            <div class="track-actions-cell">
              <a
                href="${track.audioSrc}"
                download
                class="btn-inspect"
                data-download-mp3="true"
                title="Baixar MP3 (${track.startTimestamp}–${track.endTimestamp})"
              >
                <i class="fa-solid fa-download"></i> MP3
              </a>
              <button type="button" class="btn-inspect" data-inspect-index="${idx}">
                Letra &amp; Info
              </button>
            </div>
          </div>
        `;
      })
      .join("");
  };
})(window.BTBApp);
