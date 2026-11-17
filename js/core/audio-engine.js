/**
 * Core Module: Motor de Áudio Contínuo, Hot-Swap 2Fly Studio (Lo-Fi EQ) & Síntese Web Audio API
 */

window.BTBApp = window.BTBApp || {};

(function (app) {
  "use strict";

  app.audio = {
    /**
     * Gerador procedural de chiado de fita magnética (2Fly Tape Hiss) via Web Audio API.
     */
    syncTapeHiss() {
      const { state, els } = app;
      try {
        if (!state.lofiEqEnabled || !state.isPlaying || els.audio.muted) {
          if (state.tapeGainNode && state.tapeCtx) {
            state.tapeGainNode.gain.setTargetAtTime(
              0,
              state.tapeCtx.currentTime,
              0.05
            );
          }
          return;
        }

        const AudioContextClass =
          window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;

        if (!state.tapeCtx) {
          state.tapeCtx = new AudioContextClass();
          const bufferSize = state.tapeCtx.sampleRate * 3;
          const noiseBuffer = state.tapeCtx.createBuffer(
            1,
            bufferSize,
            state.tapeCtx.sampleRate
          );
          const output = noiseBuffer.getChannelData(0);

          let b0 = 0,
            b1 = 0,
            b2 = 0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.997 * b0 + white * 0.029;
            b1 = 0.985 * b1 + white * 0.032;
            b2 = 0.95 * b2 + white * 0.048;
            const crackle =
              Math.random() > 0.9994 ? (Math.random() * 2 - 1) * 0.35 : 0;
            output[i] = b0 + b1 + b2 + white * 0.015 + crackle;
          }

          const filter = state.tapeCtx.createBiquadFilter();
          filter.type = "bandpass";
          filter.frequency.value = 1800;
          filter.Q.value = 0.7;

          state.tapeGainNode = state.tapeCtx.createGain();
          state.tapeGainNode.gain.value = 0;

          state.tapeNoiseNode = state.tapeCtx.createBufferSource();
          state.tapeNoiseNode.buffer = noiseBuffer;
          state.tapeNoiseNode.loop = true;

          state.tapeNoiseNode.connect(filter);
          filter.connect(state.tapeGainNode);
          state.tapeGainNode.connect(state.tapeCtx.destination);
          state.tapeNoiseNode.start(0);
        }

        if (state.tapeCtx.state === "suspended") {
          state.tapeCtx.resume();
        }

        const targetHissGain = 0.018 * (els.audio.volume || 0.85);
        state.tapeGainNode.gain.setTargetAtTime(
          targetHissGain,
          state.tapeCtx.currentTime,
          0.08
        );
      } catch (e) {
        // ignora se AudioContext não estiver disponível
      }
    },

    /**
     * Sincroniza todos os indicadores visuais (CD-R, Mini-Disc, Equalizador, Tracklist e Player Bar).
     */
    updatePlaybackUI() {
      const { state, els, views } = app;
      const track = state.tracks[state.currentTrackIndex];

      els.sleeveCurrentTrack.textContent = `${track.number}. ${track.title}`;
      els.playerTrackNum.textContent = `#${track.number}`;
      els.playerTrackName.textContent = track.title;
      els.playerTrackSub.textContent = `${track.categoryLabel} • ${
        state.lofiEqEnabled ? "Lo-Fi EQ" : "Remaster 2023"
      }`;
      els.totalTimeLabel.textContent = track.duration;

      els.lofiToggleBtn.classList.toggle("active", state.lofiEqEnabled);
      els.lofiStateText.textContent = state.lofiEqEnabled ? "ON" : "OFF";
      els.playerModeBadge.textContent = state.lofiEqEnabled
        ? "LO-FI EQ: ON"
        : "REMASTER 2023";
      els.playerModeBadge.classList.toggle("mp3-active", !state.lofiEqEnabled);

      if (state.isPlaying) {
        els.iconPlay.classList.add("hidden");
        els.iconPause.classList.remove("hidden");
        els.cdrDisc.classList.add("playing");
        els.miniDisc.classList.add("playing");
        els.heroEqualizer.classList.add("active");
        els.heroPlaybackState.textContent = `TOCANDO: #${track.number} ${track.title.toUpperCase()}`;
      } else {
        els.iconPlay.classList.remove("hidden");
        els.iconPause.classList.add("hidden");
        els.cdrDisc.classList.remove("playing");
        els.miniDisc.classList.remove("playing");
        els.heroEqualizer.classList.remove("active");
        els.heroPlaybackState.textContent = `PAUSADO: #${track.number} ${track.title.toUpperCase()}`;
      }

      this.syncTapeHiss();
      views.renderTracklist();
    },

    loadAndPlayTrack(index, autoPlay = true, startAtSeconds = 0) {
      const { state, els, utils, views } = app;

      if (index < 0) index = state.tracks.length - 1;
      if (index >= state.tracks.length) index = 0;

      state.currentTrackIndex = index;
      const track = state.tracks[index];

      views.renderInspector(index);

      els.audio.pause();
      els.audio.src = utils.getActiveAudioSrc(track);

      if (startAtSeconds > 0) {
        const setTimeOnce = () => {
          els.audio.currentTime = startAtSeconds;
          els.audio.removeEventListener("loadedmetadata", setTimeOnce);
        };
        els.audio.addEventListener("loadedmetadata", setTimeOnce);
      } else {
        els.seekBar.value = 0;
        els.currentTimeLabel.textContent = "0:00";
      }

      els.totalTimeLabel.textContent = track.duration;

      if (!autoPlay) {
        state.isPlaying = false;
        this.updatePlaybackUI();
        return;
      }

      const playPromise = els.audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            state.isPlaying = true;
            this.updatePlaybackUI();
          })
          .catch(() => {
            state.isPlaying = false;
            this.updatePlaybackUI();
          });
      }
    },

    togglePlayPause() {
      const { state, els } = app;
      if (state.isPlaying) {
        state.isPlaying = false;
        els.audio.pause();
        this.updatePlaybackUI();
      } else {
        if (!els.audio.src) {
          this.loadAndPlayTrack(state.currentTrackIndex, true);
        } else {
          els.audio
            .play()
            .then(() => {
              state.isPlaying = true;
              this.updatePlaybackUI();
            })
            .catch(() => {
              this.loadAndPlayTrack(state.currentTrackIndex, true);
            });
        }
      }
    },

    handleTrackEnded() {
      const { state } = app;
      if (state.repeatMode === "one") {
        this.loadAndPlayTrack(state.currentTrackIndex, true, 0);
        return;
      }

      if (state.isShuffle) {
        let nextIdx = Math.floor(Math.random() * state.tracks.length);
        if (nextIdx === state.currentTrackIndex && state.tracks.length > 1) {
          nextIdx = (nextIdx + 1) % state.tracks.length;
        }
        this.loadAndPlayTrack(nextIdx, true, 0);
        return;
      }

      const nextIdx = (state.currentTrackIndex + 1) % state.tracks.length;
      this.loadAndPlayTrack(nextIdx, true, 0);
    },

    toggleLofiEq() {
      const { state, els, utils } = app;
      state.lofiEqEnabled = !state.lofiEqEnabled;

      const currentTrack = state.tracks[state.currentTrackIndex];
      const savedTime = els.audio.currentTime || 0;
      const wasPlaying = state.isPlaying;

      this.loadAndPlayTrack(state.currentTrackIndex, wasPlaying, savedTime);

      utils.showToast(
        state.lofiEqEnabled
          ? `Lo-Fi EQ ATIVADO em "${currentTrack.title}"`
          : `Remaster 2023 Original ATIVADO em "${currentTrack.title}"`
      );
    }
  };
})(window.BTBApp);
