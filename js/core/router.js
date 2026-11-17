/**
 * Core Module: Roteador SPA Nativo via History API (?content=default | faixas | comparativo | historia)
 */

window.BTBApp = window.BTBApp || {};

(function (app) {
  "use strict";

  const PAGES = SITE_CONTENT.pages;

  app.router = {
    getCurrentPageFromUrl() {
      const params = new URLSearchParams(window.location.search);
      const content = params.get("content");
      return content && PAGES[content] ? content : "default";
    },

    navigateTo(pageKey, pushState = true) {
      const targetKey = PAGES[pageKey] ? pageKey : "default";
      app.state.currentPage = targetKey;

      // Alterna visibilidade das seções (.dynamic-content)
      Object.keys(PAGES).forEach((key) => {
        const section = document.getElementById(key);
        if (section) {
          section.classList.toggle("active", key === targetKey);
        }
      });

      // Atualiza estado ativo dos links na navbar
      document
        .querySelectorAll(".navbar-nav .nav-link[data-nav]")
        .forEach((link) => {
          const isCurrent = link.getAttribute("data-nav") === targetKey;
          link.classList.toggle("active", isCurrent);
          if (isCurrent) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });

      // Atualiza título do navegador
      document.title = PAGES[targetKey].title;

      // Atualiza URL via History API sem recarregar a página
      if (pushState) {
        try {
          const newUrl =
            targetKey === "default"
              ? window.location.pathname
              : `${window.location.pathname}?content=${targetKey}`;
          window.history.pushState({ page: targetKey }, "", newUrl);
        } catch (e) {
          // fallback silencioso em ambientes restritos
        }
      }

      // Fecha menu mobile Bootstrap se estiver aberto
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (
        navbarCollapse &&
        navbarCollapse.classList.contains("show") &&
        window.bootstrap
      ) {
        const bsCollapse =
          window.bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    },

    init() {
      // Suporte aos botões Voltar/Avançar do navegador
      window.addEventListener("popstate", () => {
        this.navigateTo(this.getCurrentPageFromUrl(), false);
      });

      const initialPage = this.getCurrentPageFromUrl();
      this.navigateTo(initialPage, false);
    }
  };
})(window.BTBApp);
