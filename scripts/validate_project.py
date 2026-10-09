from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors = []

def require(condition, message):
    if not condition:
        errors.append(message)

html_path = ROOT / "index.html"
js_path = ROOT / "src" / "app.js"
css_path = ROOT / "src" / "styles.css"

require(html_path.is_file(), "Falta index.html")
require(js_path.is_file(), "Falta src/app.js")
require(css_path.is_file(), "Falta src/styles.css")

if html_path.is_file():
    html = html_path.read_text(encoding="utf-8")
    require('./src/styles.css' in html, "index.html no enlaza src/styles.css")
    require('./src/app.js' in html, "index.html no enlaza src/app.js")
    require('lang="es"' in html, "La interfaz debe declarar idioma español")
    ids = re.findall(r'\bid="([^"]+)"', html)
    duplicates = sorted({item for item in ids if ids.count(item) > 1})
    require(not duplicates, "IDs HTML duplicados: " + ", ".join(duplicates))
    for required_id in ("world-map", "details-panel", "time-select", "global-search", "export-button", "import-file", "command-form"):
        require(required_id in ids, "Falta control esencial en index.html: " + required_id)

if js_path.is_file():
    js = js_path.read_text(encoding="utf-8")
    for required in ("STORAGE_KEY", "charactersAt", "renderDetails", "exportProject", "importProject", "executeCommand", '$(".map-marker").forEach'):
        require(required in js, "Falta componente esperado en src/app.js: " + required)

if css_path.is_file():
    css = css_path.read_text(encoding="utf-8")
    require(".atlas-layout" in css, "Falta estilo del atlas")
    require("@media" in css, "Faltan reglas de adaptación a pantallas pequeñas")

if errors:
    print("FAIL_STATIC")
    for error in errors:
        print("- " + error)
    sys.exit(1)

print("PASS_STATIC: estructura, enlaces locales, IDs únicos y controles esenciales verificados.")
