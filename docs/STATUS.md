# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos e historias/novelas.
- **Avance global estimado: 16%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología: HTML/CSS/JavaScript con SVG, IndexedDB y respaldo compatible en `localStorage`.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona creación visual y assets. La integración entre productos no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código probado: `fe81705d03e7211a95fb15fac2ba8238d8bbf0bf`.
- CI: [PASS, ejecución #37988482281](https://github.com/jonhararagi/wordwaifu/actions/runs/37988482281).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El cierre documental crea un commit posterior al SHA de código; consultar siempre el HEAD vivo antes de retomar.

## Completado con CI
- **WF-001-A:** validación/normalización JSON e importación segura.
- **WF-001-B:** CRUD de ubicaciones, movimiento de marcadores, reparentado y borrado selectivo. [CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).
- **WF-002-A:** CRUD de personajes y limpieza segura de referencias. [CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).
- **WF-002-B:** CRUD de acontecimientos y sincronización de referencias. [CI #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).
- **WF-002-C:** CRUD de organizaciones con responsables/miembros/sede validados. [CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).
- **WF-003-A:** relaciones canónicas, migración compatible y CRUD. [CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214).
- **WF-004-A:** repositorio desacoplado, IndexedDB, respaldo y recuperación. [CI #37963611180](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180).
- **WF-004-B.1.1:** catálogo, creación y cambio entre universos sin mezclar datos. [CI #37966133138](https://github.com/jonhararagi/wordwaifu/actions/runs/37966133138).
- **WF-004-B.1.2:** borrado seguro de proyectos, protección del activo y aislamiento por ID exacto. [CI #37988482281](https://github.com/jonhararagi/wordwaifu/actions/runs/37988482281).

## WF-004-B.1 — Cerrada a nivel de automatización
- Selector local enumera proyectos por ID estable y permite crear/abrir universos.
- El proyecto activo no puede eliminarse, ni desde la UI ni directamente desde el repositorio.
- Un proyecto que solo vive en el respaldo local no puede ser marcado como borrado.
- Confirmación y eliminación por ID exacto; cancelación sin cambios.
- El navegador probó borrado de un proyecto inactivo, preservación de un ID parecido y aislamiento de Asteria.
- **PASS_STATIC:** 18 pruebas de esquema y validación estructural.
- **PASS_REAL:** Chromium CI completo, sin errores de página.
- **NOT_RUN:** prueba visual/manual en Windows 11.

## Próxima tarea activa
**WF-004-B.2 — Índice maestro multiverso, búsqueda entre proyectos sin mezclar datos.**

**TIMER inicial: 3–5 horas**, recalcular después de inspeccionar los requisitos.

Criterios: buscar entre universos de IndexedDB sin modificar el proyecto activo; cada resultado expone proyecto/ID de proyecto/tipo/ID de entidad; evitar colisiones de IDs entre universos; mostrar resultados vacíos y fallos de lectura con precisión; pruebas Chromium para aislamiento, múltiples universos y errores; CI PASS.

## Continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI vivos antes de modificar. Mantener `main` intacta y sobrescribir `docs/DONE.md` en cada cierre.
