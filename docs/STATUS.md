# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: herramienta local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos e historias/novelas.
- **Avance global estimado: 10%** de la visión completa. Es una estimación ponderada por alcance, no una métrica de código o de tests.
- Tecnología actual: HTML/CSS/JavaScript con SVG y `localStorage`. Migración a TypeScript + React + Vite e IndexedDB se consideran posteriores a estabilizar el prototipo.
- WordWaifu gestiona el canon y la planificación narrativa; BotImagen gestiona la creación visual y los assets. La integración todavía no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD de código validado: `4161ec5341dcec43aa636a03781b1f9a90df3d3c`.
- CI: [PASS, ejecución #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Tras actualizar documentos, el HEAD vivo puede ser un commit documental posterior. Verificarlo antes de continuar.

## Completado
### WF-001-A · Validación de proyectos y smoke test
- Validación/normalización JSON y rechazo seguro de importaciones inválidas.
- 8 pruebas de esquema y Chromium CI.

### WF-001-B · CRUD de ubicaciones
- Crear, seleccionar, editar con ID estable, mover marcador y borrar con confirmación.
- Reasignación de ubicaciones hijas y limpieza selectiva de referencias a ubicaciones eliminadas.
- Evidencia: [Chromium CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).

### WF-002-A · CRUD de personajes
- Crear y editar campos esenciales: nombre, descripción, especie, edad, rol, personalidad, motivación, defecto y estado del canon.
- Edición conserva el ID estable.
- Borrado confirmado con limpieza selectiva de relaciones entrantes, referencias en ubicaciones y participantes de acontecimientos.
- La ficha con edad desconocida muestra «Edad sin definir», verificado en Chromium para evitar que aparezca `null años`.
- Chromium CI verifica creación, edición, persistencia, eliminación y exportación/importación tras borrar.

## Evidencia y límites
- **PASS_REAL:** [CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239), que incluye Chromium headless sin errores de página.
- **PASS_STATIC:** 8 pruebas de esquema, sintaxis JavaScript y comprobación estructural.
- **NOT_RUN:** prueba manual en Windows 11 del usuario.
- **PARTIAL:** las ubicaciones y los personajes tienen CRUD básico. Acontecimientos y organizaciones no tienen CRUD equivalente completo. La persistencia actual usa `localStorage`, no IndexedDB.

## Siguiente tarea activa
**WF-002-B — CRUD de acontecimientos con referencias seguras.**

**TIMER inicial: 2–4 horas**, recalcular tras inspeccionar el modelo y la UI.

Criterios: crear/editar/borrar eventos conservando ID durante la edición; editar título, posición temporal, descripción, lugares y participantes existentes; borrar con confirmación y limpiar referencias entrantes desde ubicaciones; no dejar referencias inválidas; prueba Chromium de CRUD, persistencia, exportación/importación y CI. Al terminar, sobrescribir `docs/DONE.md`.

## Pendiente a medio/largo plazo
- CRUD completo de acontecimientos, organizaciones, relaciones y otras entidades.
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
4. Distinguir `PASS_REAL`, `PASS_STATIC`, `PARTIAL` y `NOT_RUN`.
5. Al cierre de cada tarea, sobrescribir `docs/DONE.md` con evidencia y siguiente paso.
