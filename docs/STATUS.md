# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: herramienta local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos e historias/novelas.
- **Avance global estimado: 14%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript con SVG, IndexedDB y una copia de respaldo compatible en `localStorage`.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona creación visual y assets. La integración entre ambos productos no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código probado: `624e4715545c46a2268b1e4b5c892c68b58f617c`.
- CI: [PASS, ejecución #37963611180](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El cierre documental crea un commit posterior al SHA probado; verificar siempre el HEAD vivo al retomar.

## Completado
- **WF-001-A:** validación/normalización JSON e importación segura.
- **WF-001-B:** CRUD de ubicaciones, movimiento de marcadores, reparentado y borrado selectivo. [CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).
- **WF-002-A:** CRUD de personajes y limpieza de referencias. [CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).
- **WF-002-B:** CRUD de acontecimientos con referencias sincronizadas. [CI #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).
- **WF-002-C:** CRUD de organizaciones con responsables/miembros/sede validados. [CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).
- **WF-003-A:** relaciones canónicas `relationships[]`, migración retrocompatible, endpoints válidos y CRUD. [CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214).
- **WF-004-A.1:** adaptador IndexedDB con migración, verificación, recuperación y fallback. [CI #37961153186](https://github.com/jonhararagi/wordwaifu/actions/runs/37961153186).
- **WF-004-A.2:** arranque asíncrono, guardados serializados, importación antes de activar y recuperación desde IndexedDB. [CI #37962660799](https://github.com/jonhararagi/wordwaifu/actions/runs/37962660799).
- **WF-004-A.3:** ráfaga de escrituras, fallo IndexedDB integrado, fallo de ambos backends al importar y exportación durante fallo. [CI #37963611180](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180).

## Evidencia y límites
- **PASS_REAL:** [CI #37963611180](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180).
- **PASS_STATIC:** 18 pruebas de esquema, syntax checks y validador estructural.
- **PASS_REAL:** smoke test Chromium de todos los CRUD y la persistencia integrada.
- **NOT_RUN:** prueba visual/manual en Windows 11.
- **Pendiente:** selector/gestor de varios proyectos; respaldos versionados; índice maestro multiverso; generadores, Novel Studio, continuidad y Content Guard; integración con BotImagen.

## Siguiente tarea activa
**WF-004-B.1 — Registro de proyectos locales y selector de universos.**

**TIMER inicial: 3–5 horas.**

Objetivo: enumerar y abrir proyectos por ID, crear universos sin sobrescribir otros, actualizar el puntero activo de forma segura, migrar proyectos legacy desde el respaldo local y probar cambios de proyecto en Chromium con CI PASS.

## Continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Inspeccionar el HEAD actual antes de modificar. Sobrescribir `docs/DONE.md` al cerrar cada tarea.
