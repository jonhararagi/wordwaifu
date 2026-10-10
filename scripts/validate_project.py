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
schema_path = ROOT / "src" / "project-schema.js"
schema_test_path = ROOT / "tests" / "test_project_schema.cjs"
browser_test_path = ROOT / "tests" / "browser_smoke.cjs"
repository_path = ROOT / "src" / "project-repository.js"

require(html_path.is_file(), "Falta index.html")
require(js_path.is_file(), "Falta src/app.js")
require(css_path.is_file(), "Falta src/styles.css")
require(schema_path.is_file(), "Falta src/project-schema.js")
require(schema_test_path.is_file(), "Falta tests/test_project_schema.cjs")
require(browser_test_path.is_file(), "Falta tests/browser_smoke.cjs")
require(repository_path.is_file(), "Falta src/project-repository.js")

if html_path.is_file():
    html = html_path.read_text(encoding="utf-8")
    require('./src/styles.css' in html, "index.html no enlaza src/styles.css")
    require('./src/project-schema.js' in html, "index.html no enlaza src/project-schema.js")
    require('./src/project-repository.js' in html, "index.html no enlaza src/project-repository.js")
    require('./src/app.js' in html, "index.html no enlaza src/app.js")
    require('lang="es"' in html, "La interfaz debe declarar idioma español")
    schema_script_position = html.find('./src/project-schema.js')
    repository_script_position = html.find('./src/project-repository.js')
    app_script_position = html.find('./src/app.js')
    require(schema_script_position >= 0 and repository_script_position >= 0 and app_script_position >= 0 and
            schema_script_position < repository_script_position < app_script_position,
            "project-schema.js y project-repository.js deben cargarse antes de app.js")
    ids = re.findall(r'\bid="([^"]+)"', html)
    duplicates = sorted({item for item in ids if ids.count(item) > 1})
    require(not duplicates, "IDs HTML duplicados: " + ", ".join(duplicates))
    for required_id in ("world-map", "details-panel", "time-select", "global-search", "export-button", "import-file", "command-form", "manage-projects-button", "project-dialog", "project-list", "project-create-button", "create-project-name", "master-search-form", "master-search-query", "master-search-results", "master-search-status"):
        require(required_id in ids, "Falta control esencial en index.html: " + required_id)

if js_path.is_file():
    js = js_path.read_text(encoding="utf-8")
    for required in ("STORAGE_KEY", "ProjectRepository", "initializeApplication", "enqueueRepositoryOperation", "charactersAt", "renderDetails", "exportProject", "importProject", "executeCommand", "validateAndNormalizeProject", "WordWaifuProjectSchema", '$(".map-marker").forEach'):
        require(required in js, "Falta componente esperado en src/app.js: " + required)
    require("localStorage." not in js, "src/app.js no debe acceder directamente a localStorage; usar ProjectRepository")
    require("projectRepository.write(snapshot)" in js, "El guardado normal debe persistir mediante ProjectRepository")

if schema_path.is_file():
    schema = schema_path.read_text(encoding="utf-8")
    require("validateAndNormalizeProject" in schema, "Falta el validador de importación")

if repository_path.is_file():
    repository = repository_path.read_text(encoding="utf-8")
    require("class ProjectRepository" in repository, "Falta el adaptador ProjectRepository")
    require("loadActive" in repository and "saveActive" in repository and "saveBackup" in repository and "write" in repository, "El repositorio debe exponer carga, guardado, respaldo y verificación del proyecto activo")
    require("listProjects" in repository and "getProject" in repository and "activateProject" in repository, "El repositorio debe enumerar, leer y activar proyectos por ID")
    require("searchAcrossProjects" in repository, "Falta el índice maestro de búsqueda entre proyectos")
    require("recoveredBackup" in repository, "Falta la ruta de recuperación del respaldo local")

if schema_test_path.is_file():
    tests = schema_test_path.read_text(encoding="utf-8")
    require("testRejectsDuplicateIdsAcrossEntityTypes" in tests, "Falta prueba de IDs duplicados")
    require("testRejectsLocationHierarchyCycles" in tests, "Falta prueba de ciclos de ubicaciones")

if browser_test_path.is_file():
    browser_test = browser_test_path.read_text(encoding="utf-8")
    require("PASS_REAL" in browser_test, "La prueba del navegador debe reportar su nivel de evidencia")
    require("safe import" in browser_test, "La prueba del navegador debe verificar imports seguros")
    require("PASS app persistence boot" in browser_test, "Falta prueba de integración del arranque con IndexedDB")
    require("PASS app persistence recovery" in browser_test, "Falta prueba de recuperación desde IndexedDB sin respaldo local")
    require("PASS project catalog/create" in browser_test and "PASS project isolation" in browser_test, "Falta cobertura de catálogo, creación y aislamiento de proyectos")

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
