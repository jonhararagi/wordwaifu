# WordWaifu — continuidad de sesión
## DANMACHI-ENCYCLOPEDIA-002 · última actualización: 2026-10-12 (UTC)

Este documento registra únicamente los últimos cambios y el estado comprobado al cerrar esa sesión. No sustituye la hoja de ruta del proyecto.

## Estado remoto verificado

- Rama de trabajo: `feature/danmachi-lore-poc`
- Último commit de código validado: `d9aa8d228cbbfb3f14002999c8add59901939a3e`
- Rama principal `main`: `c07ef226a61ad6e48b081890f1e3d96eecb585b5`
- La rama `main` no se modificó. No se fusionó nada, no se creó ningún PR y no se desplegó GitHub Pages.
- [Commit de código validado](https://github.com/jonhararagi/wordwaifu/commit/d9aa8d228cbbfb3f14002999c8add59901939a3e)
- [CI del código nuevo — PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38204871299)
- Este documento se actualizará en un commit posterior al código verificado; la referencia de arriba identifica el SHA exacto que ejecutó las pruebas.

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

## Qué quedó verificado

La ejecución [38204871299](https://github.com/jonhararagi/wordwaifu/actions/runs/38204871299) terminó en `success` para el SHA exacto `d9aa8d228cbbfb3f14002999c8add59901939a3e`.

Las etapas completadas con éxito fueron: sintaxis, recuperación del lore y abstención ante datos no documentados, modelo de la enciclopedia, servidor privado y su lista permitida, validación del esquema de proyectos, Playwright y Chromium, smoke test completo en Chromium y validación del catálogo/enlaces Markdown relativos. El test del navegador verificó el funcionamiento de los filtros rápidos y `Restablecer`, además de los flujos existentes.

La salida del smoke test incluye `PASS_REAL: Chromium browser smoke test completed without page errors.` La prueba del servidor confirmó que responden las rutas permitidas de la aplicación, las doce ilustraciones SVG originales de personajes, las tres ilustraciones conceptuales de momentos de Ryu y las doce fichas Markdown autorizadas. La interfaz del navegador verificó la carga real de los retratos de Ryu y Bell y de las tres ilustraciones de momentos de Ryu. Las ilustraciones son originales y no oficiales.

## Qué NO está comprobado o NO se hizo

- **Codespaces personal:** no se abrió ni se inspeccionó la instancia personal del usuario. Antes se había reportado un `HTTP 200` para el módulo de fichas y un `HTTP 404` para el retrato de Ryu. La CI limpia pasa, pero eso no demuestra por sí solo que una instancia de Codespaces ya abierta haya reiniciado o dejado atrás la caché/servidor anterior.
- **Prueba local del retrato en el Codespace:** sigue pendiente ejecutar el chequeo abajo y observar el resultado en esa instancia real.
- No se amplió en esta última intervención el corpus narrativo ni se añadieron nuevas relaciones o fuentes. El trabajo más reciente se centró en continuidad temporal, estabilidad de las pruebas y simplificación del panel de enciclopedia.
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

Retomar desde el código validado `d9aa8d228cbbfb3f14002999c8add59901939a3e` o el HEAD más reciente de `feature/danmachi-lore-poc` (el commit posterior puede contener solo esta actualización documental), volver a verificar la vista previa personal y continuar después con la ampliación verificable del corpus. Mantener separadas las continuidades y no presentar inferencias como hechos.
