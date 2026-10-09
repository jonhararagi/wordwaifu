# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: herramienta local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos y planificación narrativa.
- **Avance global estimado: 12%** de la visión completa. Es una estimación ponderada por alcance, no una métrica de código ni de cobertura.
- Tecnología actual: HTML/CSS/JavaScript con SVG y `localStorage`. IndexedDB y una migración gradual a TypeScript + React + Vite siguen pendientes.
- WordWaifu gestiona el canon y las historias; BotImagen gestiona el creador visual y los assets. La integración aún no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código probado: `e71c3b5062476561db40da524d7b5aa5e773d9bd`.
- CI: [PASS, ejecución #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El cierre documental crea un commit posterior al SHA del código probado. Comprobar siempre el HEAD vivo antes de retomar.

## Completado
### WF-001-A · Validación de proyectos y smoke test
- Validación/normalización JSON y rechazo seguro de importaciones inválidas.
- Suite de esquema y Chromium CI.

### WF-001-B · CRUD de ubicaciones
- Crear, seleccionar, editar conservando ID, mover marcadores SVG y borrar con confirmación.
- Reasignación de ubicaciones hijas y limpieza selectiva de referencias.
- Evidencia: [Chromium CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).

### WF-002-A · CRUD de personajes
- Fichas editables y borrado confirmado con limpieza selectiva de relaciones entrantes, referencias en lugares y participantes de acontecimientos.
- Edad desconocida se muestra como «Edad sin definir».
- Evidencia: [Chromium CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).

### WF-002-B · CRUD de acontecimientos
- Crear, editar y borrar acontecimientos con ID estable y sincronización de referencias inversas desde ubicaciones.
- Evidencia: [Chromium CI #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).

### WF-002-C · CRUD de organizaciones
- Modelo `organizations` compatible hacia atrás; validación de responsables, miembros, sede e IDs globales.
- Vista de organizaciones con creación, selección, edición, detalle y borrado confirmado.
- Chromium verifica persistencia, supervivencia de registros no relacionados e importación/exportación.
- Evidencia: [Chromium CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).

## Evidencia y límites
- **PASS_REAL:** [CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101), Chromium headless sin errores de página.
- **PASS_STATIC:** 13 pruebas de esquema, sintaxis JavaScript y comprobación estructural.
- **NOT_RUN:** prueba visual/manual en Windows 11.
- **PARTIAL:** relaciones entre personajes no tienen aún un modelo/UI dedicado. La persistencia sigue en `localStorage`, no IndexedDB.

## Siguiente tarea activa
**WF-003-A — Modelo y CRUD dedicado de relaciones entre personajes.**

**TIMER inicial: 3–5 horas**, recalcular tras inspección.

Criterios: mantener compatibilidad con `characters[].relationships`; referencias mediante IDs estables; crear/consultar/editar/borrar relación con tipo, descripción y canon; validar personajes existentes, impedir auto-relaciones y duplicados accidentales; proteger las fichas vinculadas; pruebas de esquema/Chromium y round-trip de exportación/importación; CI PASS y sobrescribir `docs/DONE.md`.

## Pendiente a medio/largo plazo
- Gestor de relaciones dedicado y cronología de cambios de relación.
- IndexedDB, repositorio desacoplado y copias de seguridad.
- Índice maestro multiverso.
- Atlas histórico y presencia temporal avanzada.
- Generadores deterministas de personajes, mundo, historias y lore.
- Novel Studio, continuidad y Content Guard.
- Integración con BotImagen.
- Validación manual de accesibilidad/usabilidad en Windows 11.

## Protocolo de continuidad
1. Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`.
2. Consultar HEAD, rama, PR y CI actuales antes de modificar.
3. Ejecutar una sola tarea activa según `docs/DONE.md`.
4. Diferenciar `PASS_REAL`, `PASS_STATIC`, `FAIL_REAL`, `PARTIAL` y `NOT_RUN`.
5. Sobrescribir `docs/DONE.md` al cerrar cada tarea.
