DONE / RECOVERY POINT — WordWaifu · TLM-005 end-to-end

**Actualizado:** 2026-10-16.  
**TLM-005:** DONE / PASS_CI para la implementación `cd918d4294e3141155e5bda2a5ae0cd9999a618e`.  
**Atlas/enciclopedia global DanMachi:** PARTIAL; no declarar completitud del canon.  
**Única tarea TLM de este mandato:** cerrada. Revisión manual Windows 11 y ejecución local del agente permanecen NOT_RUN.

## Repositorio y HEAD

- Repositorio: `jonhararagi/wordwaifu`.
- Rama autorizada: `work/story-completion-danmachi-audit-2026-10`.
- HEAD BEFORE real al empezar TLM-005: `4c2fa980bb2d7bb4e88c246a5178544bfe24d2a3`.
- SHA de implementación funcional validada por CI: `cd918d4294e3141155e5bda2a5ae0cd9999a618e`.
- El HEAD documental final es el tip real de la rama después del commit que guarda este punto de recuperación. Consultar la referencia de la rama y exigir que ambos workflows pasen ese SHA exacto.
- [Validate WordWaifu #38977028108 — success para la implementación](https://github.com/jonhararagi/wordwaifu/actions/runs/38977028108).
- [DanMachi Lore and Retrieval Integrity #38977028080 — success para la implementación](https://github.com/jonhararagi/wordwaifu/actions/runs/38977028080).

## Cambios ejecutados

- `src/danmachi-timeline.js`: la versión 1 exige el puntero `anchor.eventId`; solo ese evento puede usar `temporal.kind="anchor"`; referencias temporales que se autorreferencian y ciclos entre relaciones de orden son rechazados. Se conserva compatibilidad explícita con datos heredados.
- `tests/test_danmachi_timeline.cjs`: regresiones para las seis variantes, etiquetas/descripciones, puntero de ancla requerido, ancla duplicada, autorreferencia y ciclo temporal. Las fechas de prueba son sintéticas, in-memory y no se escriben al canon.
- `tests/browser_smoke.cjs`: E2E de búsqueda por tiempo unknown y T−7 aproximado, navegación evento→lugar→evento→vuelta, y arranque limpio con orígenes no locales bloqueados.
- La regresión de arranque frío verifica que el contenido same-origin funciona, que las imágenes oficiales quedan como placeholders/enlaces y que la sesión principal preserva Asteria. Se mantiene todo dentro del harness Chromium existente; no se creó almacenamiento paralelo.

## Pruebas y evidencia

- **PASS_CI** — [Validate WordWaifu #38977028108](https://github.com/jonhararagi/wordwaifu/actions/runs/38977028108) para `cd918d4294e3141155e5bda2a5ae0cd9999a618e`.
- **PASS_CI** — [DanMachi Lore and Retrieval Integrity #38977028080](https://github.com/jonhararagi/wordwaifu/actions/runs/38977028080) para `cd918d4294e3141155e5bda2a5ae0cd9999a618e`.
- Comandos reales ejecutados por Actions: `node --check src/danmachi-timeline.js`, `node --check tests/test_danmachi_timeline.cjs`, `node --check tests/browser_smoke.cjs`, `node tests/test_danmachi_timeline.cjs`, `node tests/test_danmachi_visual_references.cjs`, `node tests/test_lore_corpus.cjs`, `node tests/test_character_archive.cjs`, `node tests/test_character_dossiers.cjs`, `node tests/test_project_schema.cjs`, `node tests/test_fanfic_review.cjs`, `node lore/danmachi/tools/check-timeline.mjs` y `node tests/browser_smoke.cjs`.
- El browser smoke emitió explícitamente: `PASS TLM-005 cold start: same-origin timeline and placeholders work with external requests blocked; Asteria storage remains isolated.`
- **PASS_STATIC:** comparación de fuentes/contrato/datos y suites existentes antes de modificar.
- **PASS_REAL:** NOT_RUN para ejecución local directa del agente; el entorno de navegador real fue GitHub Actions/Chromium.
- **NOT_RUN:** revisión visual/manual Windows 11. No se declara realizada.

## Límites y seguridad

- Se mantienen los 15 eventos y dos lugares; no se añadió fecha calendárica ni coordenadas a los datos canónicos. Seis eventos siguen con ubicación desconocida, como exige la evidencia disponible.
- El esquema del mapa sigue siendo no geográfico, sin escala ni coordenadas.
- Se conservan los gates visuales TLM-004: fuentes oficiales remotas link-only, almacenamiento local, permisos explícitos para exportar watermark, original intacto y protección del proyecto Asteria.
- El atlas y la enciclopedia global DanMachi permanecen PARTIAL, aunque las pruebas end-to-end automatizables aquí especificadas pasan.
- `main` no se modificó, no hubo merge y no se abrió/cerró/modificó ningún PR.

## Próxima acción concreta

Confirmar CI de `Validate WordWaifu` y `DanMachi Lore and Retrieval Integrity` en el HEAD documental de este commit. Después no iniciar otra fase TLM sin autorización. Si se desea acreditar presentación visual manual, ejecutar y registrar aparte la inspección Windows 11; hasta entonces debe permanecer `NOT_RUN`.
