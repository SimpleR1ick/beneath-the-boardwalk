#!/usr/bin/env python3
"""
Baixa o áudio de 'Arctic Monkeys: Beneath the Boardwalk (2023 Remaster)'
(https://www.youtube.com/watch?v=OqhLafny2Tc) e recorta automaticamente
nas 18 faixas MP3 dentro da pasta ./audio/ seguindo os timestamps da descrição.
"""

import glob
import os
import subprocess
import sys
import tempfile

import imageio_ffmpeg
import yt_dlp

VIDEO_URL = "https://www.youtube.com/watch?v=OqhLafny2Tc"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO_DIR = os.path.join(BASE_DIR, "audio")
AUDIO_LOFI_DIR = os.path.join(BASE_DIR, "audio-lofi")
TEMP_PREFIX = os.path.join(tempfile.gettempdir(), "btb_2023_remaster_full")

# Timestamps exatos da descrição do vídeo (OqhLafny2Tc)
TRACKS_SPEC = [
    ("01", "A Certain Romance", "0:00", "5:21", "01-a-certain-romance.mp3"),
    ("02", "Bigger Boys and Stolen Sweethearts", "5:21", "8:12", "02-bigger-boys-and-stolen-sweethearts.mp3"),
    ("03", "Choo Choo", "8:12", "11:21", "03-choo-choo.mp3"),
    ("04", "Cigarette Smoke", "11:21", "14:17", "04-cigarette-smoke.mp3"),
    ("05", "Dancing Shoes", "14:17", "16:40", "05-dancin-shoes.mp3"),
    ("06", "Fake Tales of San Francisco", "16:40", "19:41", "06-fake-tales-of-san-francisco.mp3"),
    ("07", "Knock a Door Run", "19:41", "24:04", "07-knock-a-door-run.mp3"),
    ("08", "Mardy Bum", "24:04", "26:55", "08-mardy-bum.mp3"),
    ("09", "On the Run From the MI5", "26:55", "28:40", "09-on-the-run-from-the-mi5.mp3"),
    ("10", "Riot Van", "28:40", "30:54", "10-riot-van.mp3"),
    ("11", "Scummy (When the sun goes down)", "30:54", "34:14", "11-scummy.mp3"),
    ("12", "Still Take You Home", "34:14", "37:20", "12-still-take-you-home.mp3"),
    ("13", "Wavin' Bye to the Train or the Bus", "37:20", "40:22", "13-wavin-bye-to-the-train-or-the-bus.mp3"),
    ("14", "Bet You Look Good on the Dancefloor", "40:22", "43:14", "14-bet-you-look-good-on-the-dancefloor.mp3"),
    ("15", "Stickin' to the Floor", "43:14", "45:10", "15-stickin-to-the-floor.mp3"),
    ("16", "Space Invaders", "45:10", "47:50", "16-space-invaders.mp3"),
    ("17", "Curtains Closed", "47:50", "49:59", "17-curtains-closed.mp3"),
    ("18", "Ravey Ravey Ravey Club (live)", "49:59", None, "18-ravey-ravey-ravey-club.mp3"),
]


def download_full_audio(ffmpeg_exe: str) -> str:
    existing = glob.glob(f"{TEMP_PREFIX}.*")
    if existing:
        print(f"Usando áudio já baixado: {existing[0]}")
        return existing[0]

    ydl_opts = {
        "format": "bestaudio/best",
        "outtmpl": f"{TEMP_PREFIX}.%(ext)s",
        "ffmpeg_location": ffmpeg_exe,
        "noplaylist": True,
        "quiet": False,
    }

    print(f"Baixando áudio completo de {VIDEO_URL} ...")
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([VIDEO_URL])

    downloaded = glob.glob(f"{TEMP_PREFIX}.*")
    if not downloaded:
        raise RuntimeError("Não foi possível localizar o arquivo de áudio baixado.")
    return downloaded[0]


def split_into_tracks(source_file: str, ffmpeg_exe: str) -> None:
    os.makedirs(AUDIO_DIR, exist_ok=True)
    total = len(TRACKS_SPEC)

    for idx, (num, title, start_ts, end_ts, filename) in enumerate(TRACKS_SPEC, start=1):
        out_path = os.path.join(AUDIO_DIR, filename)
        print(f"[{idx:02d}/{total}] Recortando #{num} {title} ({start_ts} -> {end_ts or 'fim'}) -> {filename}")

        cmd = [
            ffmpeg_exe,
            "-y",
            "-hide_banner",
            "-loglevel",
            "error",
            "-ss",
            start_ts,
        ]
        if end_ts:
            cmd.extend(["-to", end_ts])

        cmd.extend([
            "-i",
            source_file,
            "-vn",
            "-acodec",
            "libmp3lame",
            "-b:a",
            "192k",
            "-metadata",
            f"title={title}",
            "-metadata",
            "artist=Arctic Monkeys",
            "-metadata",
            "album=Beneath the Boardwalk (2023 Remaster)",
            "-metadata",
            f"track={idx}/{total}",
            "-metadata",
            "date=2004",
            out_path,
        ])

        subprocess.run(cmd, check=True)

    print(f"\nConcluído! Todas as 18 faixas MP3 foram salvas em: {AUDIO_DIR}")


def generate_lofi_tracks(ffmpeg_exe: str) -> None:
    os.makedirs(AUDIO_LOFI_DIR, exist_ok=True)
    af_filter = (
        "highpass=f=260,"
        "equalizer=f=1450:t=q:w=1.1:g=6.5,"
        "lowpass=f=3700,"
        "aecho=0.8:0.85:24:0.16,"
        "volume=1.25"
    )
    total = len(TRACKS_SPEC)
    for idx, (num, title, _, _, filename) in enumerate(TRACKS_SPEC, start=1):
        in_path = os.path.join(AUDIO_DIR, filename)
        out_path = os.path.join(AUDIO_LOFI_DIR, filename)
        print(f"[{idx:02d}/{total}] Gerando Modo 2Fly Studio Lo-Fi EQ -> {filename}")
        subprocess.run(
            [
                ffmpeg_exe,
                "-y",
                "-hide_banner",
                "-loglevel",
                "error",
                "-i",
                in_path,
                "-af",
                af_filter,
                "-acodec",
                "libmp3lame",
                "-b:a",
                "160k",
                out_path,
            ],
            check=True,
        )
    print(f"\nConcluído! Todas as 18 faixas Lo-Fi EQ foram salvas em: {AUDIO_LOFI_DIR}")


def main() -> int:
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    print(f"FFmpeg localizado em: {ffmpeg_exe}")
    source_file = download_full_audio(ffmpeg_exe)
    split_into_tracks(source_file, ffmpeg_exe)
    generate_lofi_tracks(ffmpeg_exe)
    return 0


if __name__ == "__main__":
    sys.exit(main())
