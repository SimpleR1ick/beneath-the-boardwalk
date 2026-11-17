/**
 * Orquestrador Principal da Aplicação SPA — Beneath the Boardwalk (Arctic Monkeys, 2004)
 * Inicializa as views modulares, mapeia o DOM, conecta eventos e inicializa o roteador e o player.
 */

(function (app) {
  "use strict";

  function bindEvents() {
    const { state, els, utils, views, theme, router, audio } = app;

    // Delegação global para abas SPA ([data-nav]) e botão de tema (#theme-toggle)
    document.addEventListener("click", (event) => {
      const navTrigger = event.target.closest("[data-nav]");
      if (navTrigger) {
        if (
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.button === 1
        ) {
          return;
        }
        event.preventDefault();
        router.navigateTo(navTrigger.getAttribute("data-nav"), true);
        return;
      }

      if (event.target.closest("#theme-toggle")) {
        theme.toggle();
      }
    });

    // Clique nas linhas da tracklist (Aba As 18 Faixas)
    els.trackListContainer.addEventListener("click", (e) => {
      if (e.target.closest("[data-download-mp3]")) {
        e.stopPropagation();
        return;
      }

      const inspectBtn = e.target.closest("[data-inspect-index]");
      if (inspectBtn) {
        e.stopPropagation();
        const idx = parseInt(inspectBtn.getAttribute("data-inspect-index"), 10);
        views.renderInspector(idx);
        router.navigateTo("comparativo", true);
        return;
      }

      const row = e.target.closest(".track-row");
      if (!row) return;
      const idx = parseInt(row.getAttribute("data-track-index"), 10);

      if (idx === state.currentTrackIndex) {
        audio.togglePlayPause();
      } else {
        audio.loadAndPlayTrack(idx, true, 0);
      }
    });

    // Filtros e Busca da Tracklist
    els.filterTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        els.filterTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        state.activeFilter = tab.getAttribute("data-filter");
        views.renderTracklist();
      });
    });

    els.trackSearchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      views.renderTracklist();
    });

    // Ações do Hero e Tracklist
    const playFromFirst = () => {
      state.isShuffle = false;
      els.btnShuffle.classList.remove("active");
      audio.loadAndPlayTrack(0, true, 0);
    };

    els.playAllBtn.addEventListener("click", playFromFirst);
    els.tracklistPlayAllBtn.addEventListener("click", playFromFirst);

    els.shuffleAllBtn.addEventListener("click", () => {
      state.isShuffle = true;
      els.btnShuffle.classList.add("active");
      const randomIdx = Math.floor(Math.random() * state.tracks.length);
      audio.loadAndPlayTrack(randomIdx, true, 0);
      utils.showToast("Modo Aleatório (Shuffle) ativado!");
    });

    els.cdrDisc.addEventListener("click", () => audio.togglePlayPause());
    els.lofiToggleBtn.addEventListener("click", () => audio.toggleLofiEq());
    els.playerModeBadge.addEventListener("click", () => audio.toggleLofiEq());

    // Controles do Inspector (Aba Letras & Comparativo)
    els.inspectorTrackSelect.addEventListener("change", (e) => {
      views.renderInspector(parseInt(e.target.value, 10));
    });

    els.inspPrevBtn.addEventListener("click", () => {
      const prev =
        (state.inspectedTrackIndex - 1 + state.tracks.length) %
        state.tracks.length;
      views.renderInspector(prev);
    });

    els.inspNextBtn.addEventListener("click", () => {
      const next = (state.inspectedTrackIndex + 1) % state.tracks.length;
      views.renderInspector(next);
    });

    els.inspPlayTrackBtn.addEventListener("click", () => {
      audio.loadAndPlayTrack(state.inspectedTrackIndex, true, 0);
    });

    els.copyLyricsBtn.addEventListener("click", () => {
      const track = state.tracks[state.inspectedTrackIndex];
      if (!track) return;
      navigator.clipboard
        .writeText(
          `${track.title} (Beneath the Boardwalk, 2004)\n\n${track.lyricsExcerpt}`
        )
        .then(() =>
          utils.showToast(
            "Trecho da letra copiado para a área de transferência!"
          )
        )
        .catch(() =>
          utils.showToast("Não foi possível copiar automaticamente.")
        );
    });

    els.shortcutChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const id = parseInt(chip.getAttribute("data-track-id"), 10);
        const idx = state.tracks.findIndex((t) => t.id === id);
        if (idx !== -1) {
          views.renderInspector(idx);
          audio.loadAndPlayTrack(idx, true, 0);
        }
      });
    });

    // Controles do Sticky Player
    els.btnPlayPause.addEventListener("click", () => audio.togglePlayPause());
    els.btnPrev.addEventListener("click", () =>
      audio.loadAndPlayTrack(state.currentTrackIndex - 1, true, 0)
    );
    els.btnNext.addEventListener("click", () =>
      audio.loadAndPlayTrack(state.currentTrackIndex + 1, true, 0)
    );

    els.btnShuffle.addEventListener("click", () => {
      state.isShuffle = !state.isShuffle;
      els.btnShuffle.classList.toggle("active", state.isShuffle);
      utils.showToast(
        state.isShuffle ? "Ordem Aleatória ativada" : "Ordem sequencial do álbum"
      );
    });

    els.btnRepeat.addEventListener("click", () => {
      state.repeatMode = state.repeatMode === "all" ? "one" : "all";
      els.btnRepeat.classList.toggle("active", state.repeatMode === "one");
      utils.showToast(
        state.repeatMode === "one"
          ? "Repetindo a faixa atual"
          : "Repetindo o álbum completo"
      );
    });

    els.audio.addEventListener("timeupdate", () => {
      const cur = els.audio.currentTime;
      const dur =
        els.audio.duration ||
        state.tracks[state.currentTrackIndex].durationSeconds;
      els.currentTimeLabel.textContent = utils.formatTime(cur);
      if (dur > 0) {
        els.seekBar.value = ((cur / dur) * 100).toFixed(2);
      }
    });

    els.audio.addEventListener("loadedmetadata", () => {
      if (els.audio.duration) {
        els.totalTimeLabel.textContent = utils.formatTime(els.audio.duration);
      }
    });

    els.audio.addEventListener("ended", () => audio.handleTrackEnded());

    els.seekBar.addEventListener("input", (e) => {
      const pct = parseFloat(e.target.value) / 100;
      const dur =
        els.audio.duration ||
        state.tracks[state.currentTrackIndex].durationSeconds;
      if (dur > 0) {
        els.audio.currentTime = pct * dur;
      }
    });

    els.volumeBar.addEventListener("input", (e) => {
      els.audio.volume = parseFloat(e.target.value);
      els.audio.muted = els.audio.volume === 0;
      els.volumeIcon.className = els.audio.muted
        ? "fa-solid fa-volume-xmark"
        : "fa-solid fa-volume-high";
      audio.syncTapeHiss();
    });

    els.btnMute.addEventListener("click", () => {
      els.audio.muted = !els.audio.muted;
      els.volumeIcon.className = els.audio.muted
        ? "fa-solid fa-volume-xmark"
        : "fa-solid fa-volume-high";
      audio.syncTapeHiss();
      utils.showToast(els.audio.muted ? "Áudio silenciado" : "Som ativado");
    });
  }

  function init() {
    // 1. Monta todas as views modulares dentro dos contêineres SPA
    app.views.mountHome();
    app.views.mountTracks();
    app.views.mountComparison();
    app.views.mountHistory();

    // 2. Mapeia referências do DOM
    app.cacheElements();

    // 3. Inicializa Tema, Tracklist, Inspector e Fonte de Áudio Inicial
    app.theme.updateIcon();
    app.views.renderTracklist();
    app.views.renderInspector(0);
    app.els.audio.src = app.utils.getActiveAudioSrc(app.state.tracks[0]);
    app.els.audio.volume = parseFloat(app.els.volumeBar.value || "0.85");

    // 4. Conecta Listeners e ativa Roteador SPA
    bindEvents();
    app.router.init();
  }

  document.addEventListener("DOMContentLoaded", init);
})(window.BTBApp);
