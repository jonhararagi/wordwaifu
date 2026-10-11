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
try:
    with urlopen(f"http://127.0.0.1:{port}/src/lore-corpus.js", timeout=1) as response:
        body = response.read()
    sys.exit(0 if b"WordWaifu DanMachi Lore Search" in body else 1)
except Exception:
    sys.exit(1)
PY
}

if preview_ready; then
  echo "WordWaifu preview already responds on port $PORT."
  exit 0
fi

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
