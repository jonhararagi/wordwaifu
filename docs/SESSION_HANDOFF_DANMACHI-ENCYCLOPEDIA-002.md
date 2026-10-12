# WordWaifu — continuidad de sesión
## DANMACHI-ENCYCLOPEDIA-002 · última actualización: 2026-10-12 (UTC)

Este documento registra únicamente los últimos cambios y el estado comprobado al cerrar esa sesión. No sustituye la hoja de ruta del proyecto.

## Estado remoto verificado

- Rama de trabajo: `feature/danmachi-lore-poc`
- Último commit de código validado: `86df78a54d27069a03e6c0d167989b1118040aef`
- Rama principal `main`: `c07ef226a61ad6e48b081890f1e3d96eecb585b5`
- La rama `main` no se modificó. No se fusionó nada, no se creó ningún PR y no se desplegó GitHub Pages.
- [Commit de código validado](https://github.com/jonhararagi/wordwaifu/commit/86df78a54d27069a03e6c0d167989b1118040aef)
- [CI del código nuevo — PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38205553016)
- La referencia identifica el SHA exacto del código probado; una actualización posterior de este documento puede dejar el HEAD de la rama un commit por delante.

## Qué se hizo

### 1. Continuidad de Ryu: encabezados en español

En `src/character-archive.js`, el filtro de `getExtendedInfo()` reconocía encabezados como `Temporal state A/B`, pero las fichas reales usan `Estado temporal A/B`. Eso podía mezclar la documentación histórica de Astrea Record (`CONT-AR`) con detalles del estado posterior de la adaptación (`CONT-ANIME`).

Se corrigió la normalización de los encabezados (minúsculas y eliminación de diacríticos) y la detección de ambos estados en español e inglés. Se actualizó `tests/test_character_archive.cjs` con comprobaciones en ambos sentidos: la ficha `CONT-AR` conserva el estado A y excluye el B; la ficha `CONT-ANIME` conserva el B y excluye el A.

También se actualizó en `.devcontainer/start-preview.sh` el marcador que comprueba la ficha de Ryu: ahora busca `Estado temporal A`, que coincide con el dossier real.

- [Commit de corrección funcional](https://github.com/jonhararagi/wordwaifu/commit/e73b6fa5bde76b609f572128b3c093c1ae62618d)

### 2. Fallo de Chromium y corrección del test del atlas

La CI del commit anterior encontró un fallo al final del test de navegador: el clic en una ubicación de prueba quedaba interceptado por el rótulo de otra ubicación de prueba que se había colocado prácticamente en el mismo punto del mapa. No era un fallo de la ficha de lore, sino una colisión del fixture de prueba.

En `tests/browser_smoke.cjs`, el fixture `Archivo de Prueba` pasó de las coordenadas `[640, 340]` a `[820, 500]` para que no cubra el marcador que el test intenta seleccionar.

- [Commit de corrección del fixture](https://github.com/jonhararagi/wordwaifu/commit/1b1a6e08c3e53d4a08bce4a7491753ed869eed79)

### 3. Panel más simple e interactivo

En el commit `5c10e678` se incorporaron accesos rápidos `Todo el archivo`, `Astrea Record` y `Anime`, un botón `Restablecer` que limpia el término y los filtros de continuidad/spoilers, un contador dinámico de resultados y una nota visible que explica que las 12 fichas actuales son una selección parcial. El estado de los botones se sincroniza con `aria-pressed`; el diseño incluye adaptación para móvil. Se añadió una prueba de navegador que selecciona Astrea Record y después restablece y comprueba todos los filtros. En el siguiente commit se corrigió el sincronizador para usar `querySelectorAll`.

- [Commit de la mejora del panel](https://github.com/jonhararagi/wordwaifu/commit/5c10e6783a3fb9f1d35b322fad5fa345dbc0d5c0)
- [Commit de la corrección posterior](https://github.com/jonhararagi/wordwaifu/commit/d9aa8d228cbbfb3f14002999c8add59901939a3e)

## 4. Búsqueda web opcional y jerarquía de fuentes

Se agregó una búsqueda externa explícita al panel de investigación: el botón Buscar en la web consulta las API públicas de DanMachi Wiki (Fandom) y Wikipedia para localizar hasta cinco resultados por fuente. La búsqueda usa el término introducido en el formulario de lore; si no se escribe un término, toma el personaje seleccionado o, en su defecto, DanMachi.

Los resultados externos se mantienen fuera del corpus curado y se etiquetan Fuente secundaria y Resultado externo · no verificado. No se guardan automáticamente como hechos canon ni sustituyen las afirmaciones con evidencia local. Los fragmentos devueltos por las API se limpian de marcado HTML antes de mostrarse. Si una fuente falla, la interfaz conserva los resultados de la otra y permite abrir una búsqueda directa en el sitio.

El directorio independiente de fuentes incluye:
- Portal oficial: cronología de la serie y perfiles oficiales del anime de las temporadas III, IV y V.
- Editorial: fichas de GA Bunko para Astrea Record, volúmenes 1–3.
- Descubrimiento secundario: DanMachi Wiki (Fandom), su cronología y Wikipedia en inglés.

**Límite de verificación:** el código y la interfaz están probados con respuestas API simuladas para que CI no dependa de Internet. En esta ejecución no se certificó que las API reales de Fandom/Wikipedia permitan CORS desde todo navegador, red o Codespace. Por esa razón se incluyen enlaces de búsqueda directa como fallback. La función implementada es descubrimiento externo, no un verificador automático de canon: toda afirmación relevante debe contrastarse con el volumen/pasaje correcto o una referencia oficial, manteniendo separados CONT-AR, CONT-ANIME, CONT-MAIN-LN y CONT-GAME.

- [Commit con la búsqueda externa](https://github.com/jonhararagi/wordwaifu/commit/1df59e58b37fbe93f57a2160d7462ec5f2490f14)
- [Corrección del ID requerido por la prueba de navegador](https://github.com/jonhararagi/wordwaifu/commit/86df78a54d27069a03e6c0d167989b1118040aef)
- [CI completo — PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38205553016)
## Qué quedó verificado

La ejecución [38205553016](https://github.com/jonhararagi/wordwaifu/actions/runs/38205553016) terminó en `success` para el SHA exacto `86df78a54d27069a03e6c0d167989b1118040aef`. La primera ejecución de la búsqueda web había fallado por un selector del test que apuntaba a un ID ausente; se añadió el ID al HTML, se repitió la prueba de navegador y esta última ejecución pasó.

Las etapas completadas con éxito fueron: sintaxis, recuperación del lore y abstención ante datos no documentados, modelo de la enciclopedia, servidor privado y su lista permitida, validación del esquema de proyectos, Playwright y Chromium, smoke test completo en Chromium y validación del catálogo/enlaces Markdown relativos. El test del navegador verificó el funcionamiento de los filtros rápidos y `Restablecer`, además de los flujos existentes.

La salida del smoke test incluye `PASS_REAL: Chromium browser smoke test completed without page errors.` La prueba del servidor confirmó que responden las rutas permitidas de la aplicación, las doce ilustraciones SVG originales de personajes, las tres ilustraciones conceptuales de momentos de Ryu y las doce fichas Markdown autorizadas. La interfaz del navegador verificó la carga real de los retratos de Ryu y Bell y de las tres ilustraciones de momentos de Ryu. Las ilustraciones son originales y no oficiales.

## Qué NO está comprobado o NO se hizo

- **Codespaces personal:** no se abrió ni se inspeccionó la instancia personal del usuario. Antes se había reportado un `HTTP 200` para el módulo de fichas y un `HTTP 404` para el retrato de Ryu. La CI limpia pasa, pero eso no demuestra por sí solo que una instancia de Codespaces ya abierta haya reiniciado o dejado atrás la caché/servidor anterior.
- **Prueba local del retrato en el Codespace:** sigue pendiente ejecutar el chequeo abajo y observar el resultado en esa instancia real.
- El corpus narrativo local sigue siendo parcial y no se actualizaron automáticamente los hechos desde Internet. Se incorporó descubrimiento web bajo demanda y un directorio de fuentes; la evaluación del contenido externo sigue siendo un paso de investigación separado.
- No se abrió PR, no se fusionó a `main` y no se publicó GitHub Pages.

## Próximo paso concreto

En el terminal del Codespace correspondiente a `feature/danmachi-lore-poc`, comprobar la versión y arrancar/reutilizar la vista previa:

```bash
git status --short
git rev-parse --short HEAD
git log -1 --oneline
bash .devcontainer/start-preview.sh
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8000/assets/character-portraits/ryu-lion.svg
```

El retrato debe devolver **HTTP 200**. Si devuelve `404`, revisar `/tmp/wordwaifu-preview.log`, la rama/HEAD del Codespace y si está respondiendo una instancia antigua, antes de modificar la interfaz otra vez.

## Punto de reanudación

Retomar desde el código validado `86df78a54d27069a03e6c0d167989b1118040aef` o el HEAD más reciente de `feature/danmachi-lore-poc` (el commit posterior puede contener solo esta actualización documental), comprobar la búsqueda real desde el Codespace con acceso a Internet, confirmar qué API permite CORS y continuar ampliando el corpus con afirmaciones cotejadas. Mantener separadas las continuidades y no presentar inferencias como hechos.
