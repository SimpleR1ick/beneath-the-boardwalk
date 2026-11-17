/**
 * View Module: Aba Letras & Comparativo (#comparativo)
 * Renderiza o painel comparativo Demo 2004 vs. Estúdio 2006 e a folha de letras estilo fanzine.
 */

window.BTBApp = window.BTBApp || {};

(function (app) {
  "use strict";

  app.views = app.views || {};

  app.views.mountComparison = function () {
    const container = document.getElementById("comparativo");
    if (!container) return;

    const sec = SITE_CONTENT.comparisonSection;

    const shortcutsHtml = sec.shortcuts
      .map(
        (s) => `
          <button type="button" class="shortcut-chip" data-track-id="${s.trackId}">${s.label}</button>
        `
      )
      .join("");

    const optionsHtml = app.state.tracks
      .map(
        (t, idx) =>
          `<option value="${idx}">#${t.number} — ${t.title} (${t.duration})</option>`
      )
      .join("");

    container.innerHTML = `
      <section class="py-3">
        <div class="container">
          <div class="section-header mb-4">
            <div>
              <span class="section-kicker"><i class="fa-solid fa-sliders me-1"></i> ${sec.kicker}</span>
              <h2 class="section-title mb-1">${sec.title}</h2>
            </div>

            <!-- Atalhos rápidos para as maiores mudanças -->
            <div class="highlight-shortcuts">
              <span class="shortcut-label">Destaques históricos:</span>
              ${shortcutsHtml}
            </div>
          </div>

          <!-- Seletor Rápido das 18 Faixas dentro da Aba -->
          <div class="modern-card p-3 mb-4 d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div class="d-flex align-items-center gap-2 flex-grow-1">
              <label for="inspectorTrackSelect" class="font-mono small text-secondary text-nowrap mb-0">
                <i class="fa-solid fa-music me-1"></i> Selecionar Faixa:
              </label>
              <select id="inspectorTrackSelect" class="form-select form-select-sm boardwalk-select">
                ${optionsHtml}
              </select>
            </div>

            <div class="d-flex gap-2">
              <button type="button" class="icon-btn-sm" id="inspPrevBtn" title="Faixa anterior">
                <i class="fa-solid fa-arrow-left me-1"></i> Anterior
              </button>
              <button type="button" class="icon-btn-sm" id="inspNextBtn" title="Próxima faixa">
                Próxima <i class="fa-solid fa-arrow-right ms-1"></i>
              </button>
            </div>
          </div>

          <div class="row g-4 align-items-stretch">
            <!-- Coluna Esquerda: Comparativo Demo vs Estúdio -->
            <div class="col-lg-7">
              <div class="modern-card p-4 h-100 d-flex flex-column">
                <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                  <span class="inspector-track-badge" id="inspTrackNumber">FAIXA #01</span>
                  <span class="category-pill" id="inspCategoryPill">Lançada no 1º Álbum</span>
                </div>

                <h3 class="inspector-track-title" id="inspTitle">A Certain Romance</h3>
                <p class="inspector-alt-title" id="inspOfficialRelease"></p>
                <p class="inspector-summary" id="inspSummary"></p>

                <!-- Cards Lado a Lado: Demo 2004 vs Estúdio 2006 -->
                <div class="versus-grid">
                  <div class="versus-box versus-demo">
                    <div class="versus-header">
                      <span class="versus-icon">📼</span>
                      <div>
                        <h4>Demo Original (2004)</h4>
                        <span id="inspRecordedAt">2Fly Studios, Sheffield</span>
                      </div>
                    </div>
                    <p id="inspDemoText" class="mb-0"></p>
                  </div>

                  <div class="versus-box versus-studio">
                    <div class="versus-header">
                      <span class="versus-icon">💿</span>
                      <div>
                        <h4>Catálogo Oficial (2005–2006)</h4>
                        <span>Domino Recording Co.</span>
                      </div>
                    </div>
                    <p id="inspStudioText" class="mb-0"></p>
                  </div>
                </div>

                <div class="diff-list-box">
                  <h4><i class="fa-solid fa-magnifying-glass-chart me-1"></i> Principais Diferenças &amp; Curiosidades</h4>
                  <ul class="diff-list mb-0" id="inspDiffList"></ul>
                </div>

                <div class="inspector-play-footer pt-2">
                  <div class="d-flex flex-wrap gap-2">
                    <button type="button" class="btn btn-boardwalk-primary" id="inspPlayTrackBtn">
                      <i class="fa-solid fa-play me-1"></i> Ouvir esta faixa agora
                    </button>
                    <a href="audio/01-a-certain-romance.mp3" download class="btn btn-boardwalk-outline" id="inspDownloadMp3Btn">
                      <i class="fa-solid fa-download me-1"></i> Baixar MP3
                    </a>
                  </div>
                  <span class="inspector-duration" id="inspDuration">Duração: 5:21</span>
                </div>
              </div>
            </div>

            <!-- Coluna Direita: Folha de Letra / Zine -->
            <div class="col-lg-5">
              <div class="modern-card lyrics-pane p-4 h-100 d-flex flex-column">
                <div class="lyrics-sheet-header">
                  <div>
                    <span class="zine-stamp">ARQUIVO LÍRICO // 2004</span>
                    <h4 id="inspLyricsTitle" class="mb-0">Trechos Marcantes &amp; Letra da Demo</h4>
                  </div>
                  <button type="button" class="btn btn-boardwalk-outline btn-sm" id="copyLyricsBtn">
                    <i class="fa-regular fa-copy me-1"></i> Copiar
                  </button>
                </div>

                <div class="lyrics-body" id="inspLyricsBody"></div>
                <div class="lyrics-footnote" id="inspLyricsNote"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  app.views.renderInspector = function (index) {
    const { state, els, utils } = app;
    state.inspectedTrackIndex = index;
    const track = state.tracks[index];
    if (!track || !els.inspTrackNumber) return;

    if (els.inspectorTrackSelect) {
      els.inspectorTrackSelect.value = String(index);
    }

    els.inspTrackNumber.textContent = `FAIXA #${track.number}`;
    els.inspCategoryPill.textContent = track.categoryLabel;
    els.inspCategoryPill.className = `category-pill ${utils.getCategoryClass(track.category)}`;

    els.inspTitle.textContent = track.title;
    els.inspOfficialRelease.textContent = `Destino oficial: ${track.officialRelease}`;
    els.inspSummary.textContent = track.summary;
    els.inspRecordedAt.textContent = `${track.recordedAt} (${track.year})`;
    els.inspDemoText.textContent = track.demoKarakter;
    els.inspStudioText.textContent = track.studioKarakter;

    els.inspDiffList.innerHTML = track.diffHighlights
      .map((item) => `<li>${item}</li>`)
      .join("");

    if (els.inspDownloadMp3Btn) {
      els.inspDownloadMp3Btn.href = track.audioSrc;
    }

    els.inspDuration.textContent = `Duração: ${track.duration} (${track.startTimestamp} – ${track.endTimestamp})`;
    els.inspLyricsTitle.textContent = `Letra & Trechos — #${track.number} ${track.title}`;
    els.inspLyricsBody.textContent = track.lyricsExcerpt;
    els.inspLyricsNote.textContent = `💡 Nota de Arquivo: ${track.lyricsNote}`;
  };
})(window.BTBApp);
