#!/usr/bin/env python3
"""Private, dependency-free static server for the WordWaifu Codespaces preview."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit
import os

ROOT = Path(__file__).resolve().parents[1]
PORT = int(os.environ.get("PORT", "8000"))

# Serve the app shell, the three research batches, and the explicit character dossiers loaded by src/lore-corpus.js.
# Never expose the repository tree, .git, devcontainer, docs, or non-allowlisted lore files.
ALLOWED_FILES = {
    "/index.html": "index.html",
    "/src/styles.css": "src/styles.css",
    "/src/visual-foundry.css": "src/visual-foundry.css",
    "/src/visual-library.js": "src/visual-library.js",
    "/assets/visual-library/catalog.json": "assets/visual-library/catalog.json",
    "/assets/visual-library/characters/battleworn-knight.png": "assets/visual-library/characters/battleworn-knight.png",
    "/assets/visual-library/textures/stylized-ground.jpg": "assets/visual-library/textures/stylized-ground.jpg",
    "/assets/visual-library/locations/isometric-house.webp": "assets/visual-library/locations/isometric-house.webp",
    "/assets/visual-library/icons/spell-icon-01.png": "assets/visual-library/icons/spell-icon-01.png",
    "/assets/fonts/Cinzel-Variable.ttf": "assets/fonts/Cinzel-Variable.ttf",
    "/assets/fonts/CrimsonPro-Variable.ttf": "assets/fonts/CrimsonPro-Variable.ttf",
    "/assets/fonts/JetBrainsMono-Variable.ttf": "assets/fonts/JetBrainsMono-Variable.ttf",
    "/src/app.js": "src/app.js",
    "/src/project-schema.js": "src/project-schema.js",
    "/src/project-repository.js": "src/project-repository.js",
    "/src/lore-corpus.js": "src/lore-corpus.js",
    "/src/character-archive.js": "src/character-archive.js",
    "/assets/character-portraits/ryu-lion.svg": "assets/character-portraits/ryu-lion.svg",
    "/assets/character-portraits/alise-lovelace.svg": "assets/character-portraits/alise-lovelace.svg",
    "/assets/character-portraits/astrea.svg": "assets/character-portraits/astrea.svg",
    "/assets/character-portraits/bell-cranel.svg": "assets/character-portraits/bell-cranel.svg",
    "/assets/character-portraits/hestia.svg": "assets/character-portraits/hestia.svg",
    "/assets/character-portraits/ais-wallenstein.svg": "assets/character-portraits/ais-wallenstein.svg",
    "/assets/character-portraits/eina-tulle.svg": "assets/character-portraits/eina-tulle.svg",
    "/assets/character-portraits/finn-deimne.svg": "assets/character-portraits/finn-deimne.svg",
    "/assets/character-portraits/freya.svg": "assets/character-portraits/freya.svg",
    "/assets/character-portraits/ottar.svg": "assets/character-portraits/ottar.svg",
    "/assets/character-portraits/kaguya.svg": "assets/character-portraits/kaguya.svg",
    "/assets/character-portraits/lyra.svg": "assets/character-portraits/lyra.svg",
    "/assets/lore-moments/ryu-justice.svg": "assets/lore-moments/ryu-justice.svg",
    "/assets/lore-moments/ryu-evilus.svg": "assets/lore-moments/ryu-evilus.svg",
    "/assets/lore-moments/ryu-seven-days.svg": "assets/lore-moments/ryu-seven-days.svg",
    "/lore/danmachi/catalog.json": "lore/danmachi/catalog.json",
    "/lore/danmachi/research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md":
        "lore/danmachi/research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md",
    "/lore/danmachi/research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md":
        "lore/danmachi/research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md",
    "/lore/danmachi/research/inbox/BATCH-DM-005-astrea-familia-network.md":
        "lore/danmachi/research/inbox/BATCH-DM-005-astrea-familia-network.md",
    "/lore/danmachi/characters/ryuu-lion.md": "lore/danmachi/characters/ryuu-lion.md",
    "/lore/danmachi/characters/alise-lovelace.md": "lore/danmachi/characters/alise-lovelace.md",
    "/lore/danmachi/characters/astrea.md": "lore/danmachi/characters/astrea.md",
    "/lore/danmachi/characters/bell-cranel.md": "lore/danmachi/characters/bell-cranel.md",
    "/lore/danmachi/characters/hestia.md": "lore/danmachi/characters/hestia.md",
    "/lore/danmachi/characters/ais-wallenstein.md": "lore/danmachi/characters/ais-wallenstein.md",
    "/lore/danmachi/characters/eina-tulle.md": "lore/danmachi/characters/eina-tulle.md",
    "/lore/danmachi/characters/finn-deimne.md": "lore/danmachi/characters/finn-deimne.md",
    "/lore/danmachi/characters/freya.md": "lore/danmachi/characters/freya.md",
    "/lore/danmachi/characters/ottar.md": "lore/danmachi/characters/ottar.md",
    "/lore/danmachi/characters/gojouno-kaguya.md": "lore/danmachi/characters/gojouno-kaguya.md",
    "/lore/danmachi/characters/lyra.md": "lore/danmachi/characters/lyra.md",
}

class PreviewRequestHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "text/javascript; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".md": "text/markdown; charset=utf-8",
        ".svg": "image/svg+xml", ".png":"image/png", ".jpg":"image/jpeg", ".webp":"image/webp", ".ttf":"font/ttf",
    }

    def _authorize_path(self):
        try:
            route = unquote(urlsplit(self.path).path)
        except (TypeError, ValueError):
            self.send_error(400, "Invalid path")
            return False
        if route == "/":
            route = "/index.html"
        if route not in ALLOWED_FILES:
            self.send_error(404, "Not available in the WordWaifu preview")
            return False
        self.path = route
        return True

    def translate_path(self, path):
        route = urlsplit(path).path
        if route == "/":
            route = "/index.html"
        relative = ALLOWED_FILES.get(route)
        if relative is None:
            return str(ROOT / "__preview_file_not_found__")
        return str(ROOT / relative)

    def do_GET(self):
        if self._authorize_path():
            super().do_GET()

    def do_HEAD(self):
        if self._authorize_path():
            super().do_HEAD()

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, format_string, *args):
        # Keep the terminal quiet; Python's server still emits startup errors.
        return

if __name__ == "__main__":
    server = ThreadingHTTPServer(("0.0.0.0", PORT), PreviewRequestHandler)
    print(f"WordWaifu preview listening on 0.0.0.0:{PORT}", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
