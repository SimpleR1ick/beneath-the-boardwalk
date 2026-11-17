/**
 * View Module: Aba A História (#historia)
 * Renderiza a Ficha Histórica lateral, a Linha do Tempo Vertical e o Banner de Genealogia das 18 Faixas.
 */

window.BTBApp = window.BTBApp || {};

(function (app) {
  "use strict";

  app.views = app.views || {};

  app.views.mountHistory = function () {
    const container = document.getElementById("historia");
    if (!container) return;

    const sec = SITE_CONTENT.historySection;

    const membersHtml = sec.factSheet.members
      .map(
        (m) => `
          <span class="tech-badge"><i class="${m.icon}"></i> ${m.name}</span>
        `
      )
      .join("");

    const timelineHtml = sec.timeline
      .map(
        (item) => `
          <div class="timeline-item">
            <span class="timeline-dot bg-sunset"></span>
            <article class="modern-card p-4">
              <div class="history-step">${item.step}</div>
              <h3 class="h4 fw-bold mb-2">${item.title}</h3>
              ${item.paragraphsHtml
                .map(
                  (p, idx) =>
                    `<p class="text-secondary ${
                      idx === item.paragraphsHtml.length - 1 ? "mb-0" : "mb-2"
                    }">${p}</p>`
                )
                .join("")}
            </article>
          </div>
        `
      )
      .join("");

    const genealogyHtml = sec.genealogy
      .map(
        (col) => `
          <div class="genealogy-col">
            <h4>${col.title}</h4>
            <p class="mb-0">${col.tracks}</p>
          </div>
        `
      )
      .join("");

    container.innerHTML = `
      <section class="py-3">
        <div class="container">
          <div class="section-header mb-5">
            <div>
              <span class="section-kicker"><i class="fa-solid fa-landmark me-1"></i> ${sec.kicker}</span>
              <h2 class="section-title mb-1">${sec.title}</h2>
              <p class="text-secondary mb-0">${sec.subtitleHtml}</p>
            </div>
          </div>

          <div class="row g-5">
            <!-- Coluna Lateral Sticky (Ficha Histórica) -->
            <div class="col-lg-4">
              <div class="modern-card p-4 sticky-section-title">
                <div class="d-flex align-items-center gap-3 mb-3">
                  <div class="icon-box bg-sunset-subtle">
                    <i class="fa-solid fa-compact-disc"></i>
                  </div>
                  <div>
                    <h3 class="h5 fw-bold mb-0">${sec.factSheet.title}</h3>
                    <small class="text-secondary font-mono">${sec.factSheet.location}</small>
                  </div>
                </div>

                <p class="small text-secondary mb-3">${sec.factSheet.descriptionHtml}</p>

                <div class="d-flex flex-wrap gap-2 mb-4">
                  ${membersHtml}
                </div>

                <button type="button" class="btn btn-boardwalk-primary w-100" data-nav="faixas">
                  <i class="fa-solid fa-headphones me-1"></i> Ir para as 18 Faixas
                </button>
              </div>
            </div>

            <!-- Coluna Direita: Timeline Vertical -->
            <div class="col-lg-8">
              <div class="timeline">
                ${timelineHtml}
              </div>
            </div>
          </div>

          <!-- Genealogia das 18 Faixas -->
          <div class="genealogy-banner mt-5">
            ${genealogyHtml}
          </div>
        </div>
      </section>
    `;
  };
})(window.BTBApp);
