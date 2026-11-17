/**
 * Core Module: Controle de Tema Dark / Light Mode (Bootstrap 5.3 data-bs-theme)
 */

window.BTBApp = window.BTBApp || {};

(function (app) {
  "use strict";

  app.theme = {
    updateIcon() {
      const { els } = app;
      if (!els.themeIcon) return;
      const currentTheme =
        document.documentElement.getAttribute("data-bs-theme") || "dark";
      if (currentTheme === "dark") {
        els.themeIcon.className = "fa-solid fa-sun text-warning";
      } else {
        els.themeIcon.className = "fa-solid fa-moon";
      }
    },

    toggle() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute("data-bs-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-bs-theme", nextTheme);
      try {
        localStorage.setItem("btb_theme", nextTheme);
      } catch (e) {
        // ignora caso localStorage esteja restrito
      }
      this.updateIcon();
    }
  };
})(window.BTBApp);
