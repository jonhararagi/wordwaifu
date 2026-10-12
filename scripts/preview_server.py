#!/usr/bin/env python3
"""Private, dependency-free static server for the WordWaifu Codespaces preview."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit
import os

ROOT = Path(__file__).resolve().parents[1]
PORT = int(os.environ.get("PORT", "8000"))

# Serve only the app shell, its runtime modules, and the three lore resources
# loaded by src/lore-corpus.js. Never expose .git, devcontainer, docs, or other files.
ALLOWED_FILES = {
    "/index.html": "index.html",
    "/src/styles.css": "src/styles.css",
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
    "/lore/danmachi/catalog.json": "lore/danmachi/catalog.json",
    "/lore/danmachi/research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md":
        "lore/danmachi/research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md",
    "/lore/danmachi/research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md":
        "lore/danmachi/research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md",
}

class PreviewRequestHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".html": "text/html; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".js": "text/javascript; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".md": "text/markdown; charset=utf-8",
        ".svg": "image/svg+xml",
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
