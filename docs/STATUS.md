# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: herramienta local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos e historias/novelas.
- **Avance global estimado: 11%** de la visión completa. Es una estimación ponderada por alcance, no una métrica de código o de tests.
- Tecnología actual: HTML/CSS/JavaScript con SVG y `localStorage`. Migración a TypeScript + React + Vite e IndexedDB se consideran posteriores a estabilizar el prototipo.
- WordWaifu gestiona el canon y la planificación narrativa; BotImagen gestiona la creación visual y los assets. La integración todavía no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD de código validado: `de2b5dc890336adca57a503cd27b8f39088312fd`.
- CI: [PASS, ejecución #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- La documentación de cierre genera un commit posterior. Comprobar HEAD vivo antes de la siguiente tarea.

## Completado
### WF-001-A · Validación de proyectos y smoke test
- Validación/normalización JSON y rechazo seguro de importaciones inválidas.
- 8 pruebas de esquema y Chromium CI.

### WF-001-B · CRUD de ubicaciones
- Crear, seleccionar, editar con ID estable, mover marcador y borrar con confirmación.
- Reasignación de ubicaciones hijas y limpieza selectiva de referencias.
- Evidencia: [Chromium CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).

### WF-002-A · CRUD de personajes
- Crear y editar campos esenciales con ID estable.
- Borrado confirmado y limpieza de relaciones entrantes, referencias de ubicación y participantes de acontecimientos.
- Edad desconocida se presenta como «Edad sin definir».
- Evidencia: [Chromium CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).

### WF-002-B · CRUD de acontecimientos
- Crear y seleccionar eventos desde Cronología.
- Editar título, posición temporal, descripción, lugares y participantes existentes conservando el ID.
- Referencias inversas `location.events` sincronizadas al guardar; borrado confirmado que elimina solo los enlaces del evento borrado.
- Persistencia, exportación/importación y validación de referencias probadas.
- Evidencia: [Chromium CI #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).

## Evidencia y límites
- **PASS_REAL:** Chromium CI #37927849547, sin errores de página.
- **PASS_STATIC:** 9 pruebas de esquema, sintaxis JavaScript y comprobación estructural.
- **NOT_RUN:** prueba manual en Windows 11 del usuario.
- **PARTIAL:** organizaciones y relaciones dedicadas aún no tienen CRUD completo. La persistencia usa `localStorage`, no IndexedDB.

## Siguiente tarea activa
**WF-002-C — Modelo y CRUD básico de organizaciones con referencias seguras.**

**TIMER inicial: 3–5 horas**, a recalcular tras inspección.

Criterios: añadir `organizations` al modelo con default compatible para proyectos antiguos; validar IDs globales y referencias de responsables/miembros/lugar base; crear, seleccionar, editar conservando ID y borrar con confirmación; limpiar referencias sin borrar entidades relacionadas; pruebas de esquema/Chromium y round-trip de exportación/importación; CI PASS. Al cierre, sobrescribir `docs/DONE.md`.

## Pendiente a medio/largo plazo
- CRUD de organizaciones y modelo de relaciones dedicado.
- IndexedDB, repositorio desacoplado y copias de seguridad.
- Índice maestro multiverso.
- Atlas histórico y relaciones temporales avanzadas.
- Generadores deterministas de personajes, mundo, historias y lore.
- Novel Studio, continuidad y Content Guard.
- Integración con BotImagen.
- Revisión manual de accesibilidad/usabilidad y prueba en Windows 11.

## Protocolo de continuidad
1. Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md` y `docs/DATA_MODEL.md`.
2. Consultar HEAD, rama, PR y CI actuales antes de modificar.
3. Ejecutar una sola tarea activa según `docs/DONE.md`.
4. Distinguir `PASS_REAL`, `PASS_STATIC`, `FAIL_REAL`, `PARTIAL` y `NOT_RUN`.
5. Al cierre de cada tarea, sobrescribir `docs/DONE.md` con evidencia y el siguiente punto de trabajo.
