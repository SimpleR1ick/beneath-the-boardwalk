/**
 * Estado Global, Cache de Elementos DOM e Utilitários Compartilhados (BTBApp)
 */

window.BTBApp = window.BTBApp || {};

(function (app) {
  "use strict";

  app.views = app.views || {};

  // Estado Global Reativo da Aplicação
  app.state = {
    tracks: BOARDWALK_TRACKS.map((t) => ({
      ...t,
      lofiAudioSrc: t.audioSrc.replace(/^audio\//, "audio-lofi/")
    })),
    currentPage: "default",
    currentTrackIndex: 0,
    inspectedTrackIndex: 0,
    isPlaying: false,
    isShuffle: false,
    repeatMode: "all", // 'all' | 'one'
    activeFilter: "all",
    searchQuery: "",
    lofiEqEnabled: false,
    tapeCtx: null,
    tapeNoiseNode: null,
    tapeGainNode: null
  };

  app.els = {};

  /**
   * Mapeia as referências do DOM após a montagem inicial das views.
   */
  app.cacheElements = function () {
    app.els = {
      themeToggle: document.getElementById("theme-toggle"),
      themeIcon: document.getElementById("theme-icon"),

      // Aba Faixas
      trackListContainer: document.getElementById("trackListContainer"),
      filterTabs: document.querySelectorAll(".filter-tab"),
      trackSearchInput: document.getElementById("trackSearchInput"),
      tracklistPlayAllBtn: document.getElementById("tracklistPlayAllBtn"),

      // Aba Início (Hero & Capa)
      playAllBtn: document.getElementById("playAllBtn"),
      shuffleAllBtn: document.getElementById("shuffleAllBtn"),
      sleeveCurrentTrack: document.getElementById("sleeveCurrentTrack"),
      cdrDisc: document.getElementById("cdrDisc"),
      heroEqualizer: document.getElementById("heroEqualizer"),
      heroPlaybackState: document.getElementById("heroPlaybackState"),
      lofiToggleBtn: document.getElementById("lofiToggleBtn"),
      lofiStateText: document.getElementById("lofiStateText"),

      // Aba Letras & Comparativo (Inspector)
      inspectorTrackSelect: document.getElementById("inspectorTrackSelect"),
      inspTrackNumber: document.getElementById("inspTrackNumber"),
      inspCategoryPill: document.getElementById("inspCategoryPill"),
      inspPrevBtn: document.getElementById("inspPrevBtn"),
      inspNextBtn: document.getElementById("inspNextBtn"),
      inspTitle: document.getElementById("inspTitle"),
      inspOfficialRelease: document.getElementById("inspOfficialRelease"),
      inspSummary: document.getElementById("inspSummary"),
      inspRecordedAt: document.getElementById("inspRecordedAt"),
      inspDemoText: document.getElementById("inspDemoText"),
      inspStudioText: document.getElementById("inspStudioText"),
      inspDiffList: document.getElementById("inspDiffList"),
      inspPlayTrackBtn: document.getElementById("inspPlayTrackBtn"),
      inspDownloadMp3Btn: document.getElementById("inspDownloadMp3Btn"),
      inspDuration: document.getElementById("inspDuration"),
      inspLyricsTitle: document.getElementById("inspLyricsTitle"),
      inspLyricsBody: document.getElementById("inspLyricsBody"),
      inspLyricsNote: document.getElementById("inspLyricsNote"),
      copyLyricsBtn: document.getElementById("copyLyricsBtn"),
      shortcutChips: document.querySelectorAll(".shortcut-chip"),

      // Sticky Player
      audio: document.getElementById("mainAudioElement"),
      miniDisc: document.getElementById("miniDisc"),
      playerTrackNum: document.getElementById("playerTrackNum"),
      playerTrackName: document.getElementById("playerTrackName"),
      playerTrackSub: document.getElementById("playerTrackSub"),
      btnShuffle: document.getElementById("btnShuffle"),
      btnPrev: document.getElementById("btnPrev"),
      btnPlayPause: document.getElementById("btnPlayPause"),
      iconPlay: document.getElementById("iconPlay"),
      iconPause: document.getElementById("iconPause"),
      btnNext: document.getElementById("btnNext"),
      btnRepeat: document.getElementById("btnRepeat"),
      currentTimeLabel: document.getElementById("currentTimeLabel"),
      totalTimeLabel: document.getElementById("totalTimeLabel"),
      seekBar: document.getElementById("seekBar"),
      playerModeBadge: document.getElementById("playerModeBadge"),
      btnMute: document.getElementById("btnMute"),
      volumeIcon: document.getElementById("volumeIcon"),
      volumeBar: document.getElementById("volumeBar"),
      toast: document.getElementById("toastNotification")
    };
  };

  let toastTimeout = null;

  app.utils = {
    formatTime(seconds) {
      if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    },

    showToast(message) {
      if (!app.els.toast) return;
      app.els.toast.textContent = message;
      app.els.toast.classList.remove("hidden");
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        app.els.toast.classList.add("hidden");
      }, 3400);
    },

    getCategoryClass(category) {
      if (category === "exclusive") return "cat-exclusive";
      if (category === "album") return "cat-album";
      return "cat-bside";
    },

    getActiveAudioSrc(track) {
      return app.state.lofiEqEnabled ? track.lofiAudioSrc : track.audioSrc;
    }
  };
})(window.BTBApp);
