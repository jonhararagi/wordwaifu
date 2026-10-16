#!/usr/bin/env python3
"""Private, dependency-free static server for the WordWaifu Codespaces preview."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit
import os

ROOT = Path(__file__).resolve().parents[1]
PORT = int(os.environ.get("PORT", "8000"))

# Serve only the app shell, curated corpus dependencies, timeline data and explicit lore dossiers loaded by src/lore-corpus.js.
# Never expose the repository tree, .git, devcontainer, docs, or non-allowlisted lore files.
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
    "/assets/character-portraits/kaguya.svg": "assets/character-portraits/kaguya.svg",
    "/assets/character-portraits/lyra.svg": "assets/character-portraits/lyra.svg",
    "/assets/lore-moments/ryu-justice.svg": "assets/lore-moments/ryu-justice.svg",
    "/assets/lore-moments/ryu-evilus.svg": "assets/lore-moments/ryu-evilus.svg",
    "/assets/lore-moments/ryu-seven-days.svg": "assets/lore-moments/ryu-seven-days.svg",
    "/lore/danmachi/catalog.json": "lore/danmachi/catalog.json",
    "/src/danmachi-timeline.js": "src/danmachi-timeline.js",
    "/lore/danmachi/timeline/eras-and-events.json": "lore/danmachi/timeline/eras-and-events.json",
    "/lore/danmachi/research/inbox/BATCH-DM-006-oficial-roster-y-retratos.md": "lore/danmachi/research/inbox/BATCH-DM-006-oficial-roster-y-retratos.md",
    "/lore/danmachi/research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md": "lore/danmachi/research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md",
    "/lore/danmachi/research/inbox/BATCH-DM-008-main-story-volume-map.md": "lore/danmachi/research/inbox/BATCH-DM-008-main-story-volume-map.md",
    "/lore/danmachi/research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md": "lore/danmachi/research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md",
    "/lore/danmachi/research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md": "lore/danmachi/research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md",
    "/lore/danmachi/research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md": "lore/danmachi/research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md",
    "/lore/danmachi/research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md": "lore/danmachi/research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md",
    "/lore/danmachi/research/inbox/DANMACHI-RESEARCH-012-astrea-familia-dossier.md": "lore/danmachi/research/inbox/DANMACHI-RESEARCH-012-astrea-familia-dossier.md",
    "/lore/danmachi/research/inbox/BATCH-DM-013-dark-era-missing-characters.md": "lore/danmachi/research/inbox/BATCH-DM-013-dark-era-missing-characters.md",
    "/lore/danmachi/research/inbox/BATCH-DM-014-dark-era-temporal-boundaries.md": "lore/danmachi/research/inbox/BATCH-DM-014-dark-era-temporal-boundaries.md",
    "/lore/danmachi/characters/iska-bra.md": "lore/danmachi/characters/iska-bra.md",
    "/lore/danmachi/characters/maryuu-reage.md": "lore/danmachi/characters/maryuu-reage.md",
    "/lore/danmachi/characters/noin-unic.md": "lore/danmachi/characters/noin-unic.md",
    "/lore/danmachi/characters/neze-rankett.md": "lore/danmachi/characters/neze-rankett.md",
    "/lore/danmachi/characters/asta-knox.md": "lore/danmachi/characters/asta-knox.md",
    "/lore/danmachi/characters/ryana-lietz.md": "lore/danmachi/characters/ryana-lietz.md",
    "/lore/danmachi/characters/celty-srowa.md": "lore/danmachi/characters/celty-srowa.md",
    "/lore/danmachi/characters/cecil-blackliza.md": "lore/danmachi/characters/cecil-blackliza.md",
    "/lore/danmachi/characters/iselina.md": "lore/danmachi/characters/iselina.md",
    "/lore/danmachi/characters/shau.md": "lore/danmachi/characters/shau.md",
    "/lore/danmachi/characters/ulanda.md": "lore/danmachi/characters/ulanda.md",
    "/lore/danmachi/characters/dark-era/zald.md": "lore/danmachi/characters/dark-era/zald.md",
    "/lore/danmachi/characters/dark-era/alfia.md": "lore/danmachi/characters/dark-era/alfia.md",
    "/lore/danmachi/characters/dark-era/erebus.md": "lore/danmachi/characters/dark-era/erebus.md",
    "/lore/danmachi/characters/dark-era/rudra.md": "lore/danmachi/characters/dark-era/rudra.md",
    "/lore/danmachi/characters/dark-era/jura-halmer.md": "lore/danmachi/characters/dark-era/jura-halmer.md",
    "/lore/danmachi/characters/dark-era/vito.md": "lore/danmachi/characters/dark-era/vito.md",
    "/lore/danmachi/characters/dark-era/olivas-act.md": "lore/danmachi/characters/dark-era/olivas-act.md",
    "/lore/danmachi/characters/dark-era/ardee-varma.md": "lore/danmachi/characters/dark-era/ardee-varma.md",
    "/lore/danmachi/characters/dark-era/valletta-grede.md": "lore/danmachi/characters/dark-era/valletta-grede.md",
    "/lore/danmachi/characters/dark-era/barca-perdix.md": "lore/danmachi/characters/dark-era/barca-perdix.md",
    "/lore/danmachi/characters/dark-era/basram.md": "lore/danmachi/characters/dark-era/basram.md",
    "/lore/danmachi/characters/dark-era/dis-sisters.md": "lore/danmachi/characters/dark-era/dis-sisters.md",
    "/lore/danmachi/characters/dark-era/thanatos.md": "lore/danmachi/characters/dark-era/thanatos.md",
    "/lore/danmachi/characters/dark-era/apate.md": "lore/danmachi/characters/dark-era/apate.md",
    "/lore/danmachi/characters/dark-era/alecto.md": "lore/danmachi/characters/dark-era/alecto.md",
    "/lore/danmachi/characters/dark-era/airmid-teasanare.md": "lore/danmachi/characters/dark-era/airmid-teasanare.md",
    "/lore/danmachi/characters/dark-era/miach.md": "lore/danmachi/characters/dark-era/miach.md",
    "/lore/danmachi/characters/dark-era/naaza-erisuis.md": "lore/danmachi/characters/dark-era/naaza-erisuis.md",
    "/lore/danmachi/characters/dark-era/dian-cecht.md": "lore/danmachi/characters/dark-era/dian-cecht.md",
    "/lore/danmachi/characters/dark-era/hephaistos.md": "lore/danmachi/characters/dark-era/hephaistos.md",
    "/lore/danmachi/characters/dark-era/goibniu.md": "lore/danmachi/characters/dark-era/goibniu.md",
    "/lore/danmachi/characters/dark-era/samira.md": "lore/danmachi/characters/dark-era/samira.md",
    "/lore/danmachi/characters/dark-era/selenia.md": "lore/danmachi/characters/dark-era/selenia.md",
    "/lore/danmachi/events/timeline/EVT-DM-AR-ERA-001.md": "lore/danmachi/events/timeline/EVT-DM-AR-ERA-001.md",
    "/lore/danmachi/events/timeline/EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001.md": "lore/danmachi/events/timeline/EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001.md",
    "/lore/danmachi/events/timeline/EVT-DM-RYUU-REVENGE-001.md": "lore/danmachi/events/timeline/EVT-DM-RYUU-REVENGE-001.md",
    "/lore/danmachi/events/timeline/EVT-DM-BELL-ARRIVAL-001.md": "lore/danmachi/events/timeline/EVT-DM-BELL-ARRIVAL-001.md",
    "/lore/danmachi/events/timeline/EVT-DM-BELL-AIS-MINOTAUR-001.md": "lore/danmachi/events/timeline/EVT-DM-BELL-AIS-MINOTAUR-001.md",
    "/lore/danmachi/events/timeline/EVT-DM-RYUU-JURA-PURSUIT-001.md": "lore/danmachi/events/timeline/EVT-DM-RYUU-JURA-PURSUIT-001.md",
    "/lore/danmachi/events/timeline/EVT-DM-JUGGERNAUT-RETURN-001.md": "lore/danmachi/events/timeline/EVT-DM-JUGGERNAUT-RETURN-001.md",
    "/lore/danmachi/events/timeline/EVT-DM-JUGGERNAUT-DEFEAT-001.md": "lore/danmachi/events/timeline/EVT-DM-JUGGERNAUT-DEFEAT-001.md",
    "/lore/danmachi/monsters/juggernaut.md": "lore/danmachi/monsters/juggernaut.md",
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
