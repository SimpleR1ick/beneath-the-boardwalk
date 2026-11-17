/**
 * View Module: Aba Início (#default)
 * Renderiza o Hero, Capa Oficial com CD-R giratório, Estatísticas e Cards de Acesso Rápido.
 */

window.BTBApp = window.BTBApp || {};

(function (app) {
  "use strict";

  app.views = app.views || {};

  app.views.mountHome = function () {
    const container = document.getElementById("default");
    if (!container) return;

    const h = SITE_CONTENT.hero;

    const statsHtml = h.stats
      .map(
        (stat) => `
          <div class="col-6 col-sm-3">
            <div class="modern-card p-3 h-100 stat-border-accent">
              <span class="stat-num">${stat.value}</span>
              <span class="stat-label">${stat.label}</span>
            </div>
          </div>
        `
      )
      .join("");

    const quickCardsHtml = h.quickCards
      .map(
        (card) => `
          <div class="col-md-4">
            <div class="modern-card p-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex align-items-center gap-3 mb-3">
                  <div class="icon-box bg-sunset-subtle">
                    <i class="${card.icon}"></i>
                  </div>
                  <h3 class="h5 fw-bold mb-0">${card.title}</h3>
                </div>
                <p class="text-secondary small mb-3">${card.description}</p>
              </div>
              <a href="?content=${card.targetNav}" data-nav="${card.targetNav}" class="btn btn-sm btn-boardwalk-outline align-self-start">
                ${card.ctaLabel} <i class="fa-solid fa-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        `
      )
      .join("");

    container.innerHTML = `
      <section class="hero-section py-3">
        <div class="container">
          <div class="row align-items-center g-5">
            <!-- Coluna Texto Hero -->
            <div class="col-lg-7">
              <div class="eyebrow-group">
                <span class="eyebrow-tag"><i class="fa-solid fa-record-vinyl me-1"></i> ${h.eyebrowTag}</span>
                <span class="eyebrow-meta">${h.eyebrowMeta}</span>
              </div>

              <h1 class="hero-title">
                ${h.titlePrefix} <span class="highlight-sunset">${h.titleHighlight}</span>
              </h1>

              <p class="hero-lead">${h.leadHtml}</p>

              <div class="hero-actions">
                <button type="button" class="btn btn-boardwalk-primary" id="playAllBtn">
                  <i class="fa-solid fa-play"></i>
                  <span>Tocar Coletânea Completa</span>
                </button>
                <button type="button" class="btn btn-boardwalk-secondary" id="shuffleAllBtn">
                  <i class="fa-solid fa-shuffle"></i>
                  <span>Modo Aleatório</span>
                </button>
                <a href="?content=faixas" data-nav="faixas" class="btn btn-boardwalk-outline">
                  <i class="fa-solid fa-list-ul"></i>
                  <span>Explorar as 18 Faixas</span>
                </a>
              </div>

              <div class="row g-3 mt-2">
                ${statsHtml}
              </div>
            </div>

            <!-- Coluna Capa Oficial + CD-R Giratório -->
            <div class="col-lg-5">
              <div class="hero-visual">
                <div class="album-showcase" id="albumShowcase">
                  <div class="album-sleeve" id="albumSleeve">
                    <img src="${h.coverImage}" alt="${h.coverAlt}" class="boardwalk-cover-svg" />

                    <div class="sleeve-now-playing">
                      <span class="sleeve-np-label">FAIXA SELECIONADA</span>
                      <span class="sleeve-np-track" id="sleeveCurrentTrack">01. A Certain Romance</span>
                    </div>
                  </div>

                  <!-- CD-R Caseiro (Gira quando está tocando) -->
                  <div class="cdr-disc" id="cdrDisc" title="Clique para tocar ou pausar">
                    <div class="cdr-ring-outer"></div>
                    <div class="cdr-handwriting-top">${h.cdrDisc.top}</div>
                    <div class="cdr-handwriting-sub">${h.cdrDisc.sub}</div>
                    <div class="cdr-handwriting-note">${h.cdrDisc.note}</div>
                    <div class="cdr-center-ring">
                      <div class="cdr-hole"></div>
                    </div>
                  </div>
                </div>

                <!-- Status de Reprodução abaixo da Capa -->
                <div class="showcase-controls mt-4">
                  <div class="equalizer-badge" id="heroEqualizer">
                    <span class="eq-bar"></span>
                    <span class="eq-bar"></span>
                    <span class="eq-bar"></span>
                    <span class="eq-bar"></span>
                    <span class="eq-text" id="heroPlaybackState">PRONTO PARA TOCAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Cards de Navegação Rápida entre as Abas -->
          <div class="row g-4 mt-5">
            ${quickCardsHtml}
          </div>
        </div>
      </section>
    `;
  };
})(window.BTBApp);
