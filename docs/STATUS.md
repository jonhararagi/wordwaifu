# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: herramienta local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos e historias/novelas.
- **Avance global estimado: 15%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript con SVG, IndexedDB y respaldo compatible en `localStorage`.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona creación visual y assets. La integración entre ambos productos no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código validado: `0b04444bb6edf726e3ae5e4971ad49e533567f27`.
- CI: [PASS, ejecución #37966133138](https://github.com/jonhararagi/wordwaifu/actions/runs/37966133138).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El commit documental posterior no sustituye la referencia del código probado; consultar siempre el HEAD vivo.

## Completado
- **WF-001-A:** validación/normalización JSON e importación segura.
- **WF-001-B:** CRUD de ubicaciones, movimiento de marcadores, reparentado y borrado selectivo. [CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).
- **WF-002-A:** CRUD de personajes y limpieza segura de referencias. [CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).
- **WF-002-B:** CRUD de acontecimientos y sincronización de referencias. [CI #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).
- **WF-002-C:** CRUD de organizaciones con responsables/miembros/sede validados. [CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).
- **WF-003-A:** relaciones canónicas, migración retrocompatible y CRUD. [CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214).
- **WF-004-A:** repositorio desacoplado + IndexedDB, cola de escrituras, recuperación y fallback; pruebas de resiliencia. [CI #37963611180](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180).
- **WF-004-B.1.1:** catálogo local por ID, creación de universos y cambio validado entre proyectos sin mezclar datos. [CI #37966133138](https://github.com/jonhararagi/wordwaifu/actions/runs/37966133138).

## Estado parcial de WF-004-B.1
### Evidencia
- **PASS_REAL:** Chromium creó un segundo proyecto con ID distinto, volvió a Asteria, abrió el segundo y confirmó que los cuatro personajes originales permanecían intactos.
- **PASS_STATIC:** 18 pruebas de esquema, sintaxis JavaScript y comprobación estructural.
- **PASS_REAL:** smoke test íntegro de CRUD, persistencia y round-trip JSON.
- **NOT_RUN:** prueba visual/manual en Windows 11.
### Pendiente
- Borrar proyectos con confirmación y protección del proyecto activo.
- Probar fallos de borrado, IDs parecidos y compatibilidad con proyectos que solo existen en el respaldo local.
- Índice maestro de búsquedas entre universos y respaldo versionado siguen pendientes.

## Siguiente subtarea activa
**WF-004-B.1.2 — Eliminación segura de proyectos y cierre del selector multiverso.**

**TIMER inicial: 2–3 horas.**

Objetivo: borrar solo proyectos no activos, con confirmación; exigir un reemplazo activo válido antes de borrar el universo activo; verificar que otros proyectos conservan ID y datos. Probar cancelación, borrado correcto, aislamiento, persistencia, compatibilidad de respaldo y CI PASS.

## Continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Inspeccionar HEAD, PR y CI vivos antes de modificar. Mantener `main` intacta y sobrescribir `docs/DONE.md` al cerrar cada tarea.
