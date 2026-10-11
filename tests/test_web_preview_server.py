import sys
import threading
import urllib.error
import urllib.request
from http.server import ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from preview_server import PreviewRequestHandler

server = ThreadingHTTPServer(("127.0.0.1", 0), PreviewRequestHandler)
thread = threading.Thread(target=server.serve_forever, daemon=True)
thread.start()
base = f"http://127.0.0.1:{server.server_port}"

def get(path, expected_status=200):
    try:
        with urllib.request.urlopen(base + path, timeout=3) as response:
            status = response.status
            body = response.read()
    except urllib.error.HTTPError as error:
        status = error.code
        body = error.read()
    assert status == expected_status, f"{path}: expected HTTP {expected_status}, got {status}"
    return body

try:
    shell = get("/")
    assert b"WordWaifu" in shell
    for route, marker in (
        ("/src/lore-corpus.js", b"WordWaifu DanMachi Lore Search"),
        ("/src/app.js", b"WordWaifuLoreCorpus"),
        ("/src/styles.css", b".lore-"),
        ("/lore/danmachi/catalog.json", b'"records"'),
        ("/lore/danmachi/research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md", b"Astrea Record"),
        ("/lore/danmachi/research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md", b"DMR-002-CLM-015"),
    ):
        body = get(route)
        assert marker in body, f"Expected marker not found in {route}"
    get("/.git/config", 404)
    get("/docs/MASTER_VISION.md", 404)
    get("/lore/danmachi/characters/ryuu-lion.md", 404)
    print("PASS preview server: app shell, JS/CSS, catalog and both lore documents respond; non-allowlisted paths return 404.")
finally:
    server.shutdown()
    server.server_close()
    thread.join(timeout=3)
