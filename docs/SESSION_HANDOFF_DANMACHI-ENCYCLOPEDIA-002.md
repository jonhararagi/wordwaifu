# WordWaifu — continuidad de sesión
## DANMACHI-ENCYCLOPEDIA-002 · última actualización: 2026-10-12 (UTC)

Este documento registra únicamente los últimos cambios y el estado comprobado al cerrar esa sesión. No sustituye la hoja de ruta del proyecto.

## Estado remoto verificado

- Rama de trabajo: `feature/danmachi-lore-poc`
- HEAD verificado: `1b1a6e08c3e53d4a08bce4a7491753ed869eed79`
- Rama principal `main`: `c07ef226a61ad6e48b081890f1e3d96eecb585b5`
- La rama `main` no se modificó. No se fusionó nada, no se creó ningún PR y no se desplegó GitHub Pages.
- [Commit HEAD](https://github.com/jonhararagi/wordwaifu/commit/1b1a6e08c3e53d4a08bce4a7491753ed869eed79)
- [CI del HEAD — PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38204109356)

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

## Qué quedó verificado

La ejecución [38204109356](https://github.com/jonhararagi/wordwaifu/actions/runs/38204109356) terminó en `success` para el SHA exacto `1b1a6e08c3e53d4a08bce4a7491753ed869eed79`.

Las etapas completadas con éxito fueron: sintaxis, pruebas de recuperación del lore y abstención ante datos no documentados, modelo de la enciclopedia, lista permitida del servidor privado, validación del esquema de proyectos, instalación de Playwright y Chromium, smoke test completo en Chromium y validación del catálogo/enlaces Markdown.

La salida del smoke test incluye `PASS_REAL: Chromium browser smoke test completed without page errors.` La prueba del servidor confirmó que responden las rutas permitidas de la aplicación, las doce ilustraciones SVG originales de personajes, las tres ilustraciones conceptuales de momentos de Ryu y las doce fichas Markdown autorizadas. La interfaz del navegador verificó la carga real de los retratos de Ryu y Bell y de las tres ilustraciones de momentos de Ryu. Las ilustraciones son originales y no oficiales.

## Qué NO está comprobado o NO se hizo

- **Codespaces personal:** no se abrió ni se inspeccionó la instancia personal del usuario. Antes se había reportado un `HTTP 200` para el módulo de fichas y un `HTTP 404` para el retrato de Ryu. La CI limpia pasa, pero eso no demuestra por sí solo que una instancia de Codespaces ya abierta haya reiniciado o dejado atrás la caché/servidor anterior.
- **Prueba local del retrato en el Codespace:** sigue pendiente ejecutar el chequeo abajo y observar el resultado en esa instancia real.
- No se amplió en esta última intervención el corpus narrativo ni se añadieron nuevas relaciones o fuentes; el trabajo reciente fue corregir el filtro de continuidad, sus regresiones, la comprobación de inicio y un fixture de navegador.
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

Retomar desde el HEAD `1b1a6e08c3e53d4a08bce4a7491753ed869eed79`, conservar el trabajo en `feature/danmachi-lore-poc`, volver a verificar la vista previa personal y continuar después con la auditoría de profundidad de contenido y referencias. Mantener separadas las continuidades y no presentar inferencias como hechos.
