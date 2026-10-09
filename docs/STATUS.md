# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: herramienta local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos e historias/novelas.
- **Avance global estimado: 14%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript con SVG y `localStorage`. IndexedDB y el repositorio de persistencia siguen pendientes.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona la creación visual y los assets. La integración no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código probado: `66002e539eef47103dfde50c91461153eace80dd`.
- CI: [PASS, ejecución #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El cierre documental generará un commit posterior al SHA probado; verificar el HEAD vivo al retomar.

## Completado
### WF-001-A · Validación de proyectos y smoke test
- Validación/normalización JSON y rechazo seguro de importaciones inválidas.
- Suite de esquema y Chromium CI.

### WF-001-B · CRUD de ubicaciones
- Crear, seleccionar, editar conservando ID, mover marcadores SVG y borrar con confirmación.
- Reasignación de ubicaciones hijas y limpieza de referencias.
- Evidencia: [Chromium CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).

### WF-002-A · CRUD de personajes
- Fichas editables y borrado confirmado con limpieza selectiva de referencias.
- Edad desconocida se muestra como «Edad sin definir».
- Evidencia: [Chromium CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).

### WF-002-B · CRUD de acontecimientos
- Crear, editar y borrar con ID estable y sincronización de referencias de ubicación.
- Evidencia: [Chromium CI #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).

### WF-002-C · CRUD de organizaciones
- Modelo retrocompatible; validación de responsables, miembros, sede e IDs.
- Vista, detalle, creación, edición, borrado selectivo y pruebas de round-trip.
- Evidencia: [Chromium CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).

### WF-003-A · Relaciones entre personajes
- Colección canónica `relationships[]` y migración compatible de listas antiguas `characters[].relationships`.
- Vista «Relaciones» con filtro, detalle, creación, edición y borrado confirmado.
- Validación de endpoints, auto-relaciones, duplicados por par/tipo e IDs globales.
- Proyección recíproca para compatibilidad; al borrar personaje se limpian las relaciones canónicas afectadas.
- Evidencia: [Chromium CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214), 18 pruebas de esquema + CRUD Chromium completo.

## Evidencia y límites
- **PASS_REAL:** [CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214), browser smoke en Chromium sin errores de página.
- **PASS_STATIC:** 18 pruebas de esquema aprobadas.
- **NOT_RUN:** prueba manual visual/funcional en Windows 11.
- **PARTIAL:** las relaciones básicas no tienen todavía rangos temporales, intensidad, secretos ni vínculos con acontecimientos. El estado se guarda en `localStorage`; IndexedDB y copias de seguridad están pendientes.

## Siguiente tarea activa
**WF-004-A — Repositorio de persistencia e introducción gradual de IndexedDB.**

**TIMER inicial: 4–6 horas**, recalcular tras inspección.

Criterios: inventariar lecturas/escrituras; separar acceso a datos del estado UI; migrar localStorage a IndexedDB sin pérdida, verificar lectura/escritura antes de limpiar; fallback claro; conservar importación/exportación; pruebas de persistencia, migración y fallos; CI PASS y actualización del punto de continuidad.

## Pendiente a medio/largo plazo
- IndexedDB, repositorio desacoplado y respaldos.
- Relaciones con validez temporal, intensidad, secretos y eventos relacionados.
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
