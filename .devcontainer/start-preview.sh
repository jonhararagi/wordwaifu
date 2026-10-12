#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="$(printenv PORT || echo 8000)"

preview_ready() {
  PORT="$PORT" python3 - <<'PY'
import os
import sys
from urllib.request import urlopen

port = os.environ.get("PORT", "8000")
checks = (
    (f"http://127.0.0.1:{port}/src/lore-corpus.js", b"WordWaifu DanMachi Lore Search"),
    (f"http://127.0.0.1:{port}/assets/character-portraits/ryu-lion.svg", b"Ryu Lion"),
)
try:
    for url, marker in checks:
        with urlopen(url, timeout=1) as response:
            body = response.read()
        if marker not in body:
            sys.exit(1)
    sys.exit(0)
except Exception:
    sys.exit(1)
PY
}

stop_stale_preview() {
  if ! command -v pgrep >/dev/null 2>&1; then
    echo "A stale preview may be listening. Stop its terminal process and rerun this script." >&2
    return 1
  fi
  local pids
  pids="$(pgrep -f 'python3 .*/scripts/preview_server[.]py' || true)"
  if [[ -n "$pids" ]]; then
    echo "Restarting the existing WordWaifu preview so it loads the latest allowlist..."
    while IFS= read -r pid; do
      [[ -n "$pid" ]] && kill "$pid" 2>/dev/null || true
    done <<< "$pids"
    sleep 0.4
  fi
}

if preview_ready; then
  echo "WordWaifu preview already responds on port $PORT."
  exit 0
fi
stop_stale_preview

nohup env PORT="$PORT" python3 "$ROOT/scripts/preview_server.py" \
  >/tmp/wordwaifu-preview.log 2>&1 </dev/null &

for attempt in $(seq 1 30); do
  if preview_ready; then
    echo "WordWaifu browser preview is ready on port $PORT (private forwarded port)."
    exit 0
  fi
  sleep 0.2
done

echo "WordWaifu preview did not start; inspect /tmp/wordwaifu-preview.log." >&2
if [[ -f /tmp/wordwaifu-preview.log ]]; then
  tail -n 40 /tmp/wordwaifu-preview.log >&2
fi
exit 1
