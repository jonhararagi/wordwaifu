# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: herramienta local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos e historias/novelas.
- **Avance global estimado: 14%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript con SVG, IndexedDB y una copia de respaldo compatible en `localStorage`.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona la creación visual y los assets. La integración no está implementada.

## GitHub verificado
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código probado: `b0adfdef92c8f8376a63d8a4f470d4ae5ce7bf21`.
- CI: [PASS, ejecución #37962660799](https://github.com/jonhararagi/wordwaifu/actions/runs/37962660799).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El cierre documental crea un commit posterior al SHA probado; verificar el HEAD vivo al retomar.

## Completado
### WF-001-A · Validación de proyectos
- Normalización JSON y rechazo seguro de proyectos inválidos.

### WF-001-B · CRUD de ubicaciones
- Crear, editar, mover y borrar con confirmación y limpieza de referencias.
- Evidencia: [CI #37922783841](https://github.com/jonhararagi/wordwaifu/actions/runs/37922783841).

### WF-002-A · CRUD de personajes
- Fichas editables y eliminación con limpieza selectiva de referencias.
- Evidencia: [CI #37925820239](https://github.com/jonhararagi/wordwaifu/actions/runs/37925820239).

### WF-002-B · CRUD de acontecimientos
- Crear, editar y borrar con referencias sincronizadas.
- Evidencia: [CI #37927849547](https://github.com/jonhararagi/wordwaifu/actions/runs/37927849547).

### WF-002-C · CRUD de organizaciones
- Modelo compatible hacia atrás; responsables, miembros y sede validados por ID.
- Evidencia: [CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).

### WF-003-A · Relaciones canónicas
- Colección raíz `relationships[]`, migración desde listas locales, IDs estables y CRUD con validación.
- Evidencia: [CI #37951860214](https://github.com/jonhararagi/wordwaifu/actions/runs/37951860214), 18 pruebas de esquema.

### WF-004-A.1 · Adaptador de persistencia
- IndexedDB con almacenes `projects` y `metadata`, migración, verificación, recuperación y fallback.
- Evidencia: [CI #37961153186](https://github.com/jonhararagi/wordwaifu/actions/runs/37961153186).

### WF-004-A.2 · Integración de persistencia en la aplicación
- Arranque asíncrono que bloquea interacciones hasta recuperar el proyecto activo.
- Guardado con respaldo local inmediato y cola serializada de escrituras IndexedDB.
- Importación validada y persistida antes de reemplazar el estado activo; exportación disponible desde memoria.
- Evidencia: [CI #37962660799](https://github.com/jonhararagi/wordwaifu/actions/runs/37962660799), smoke test Chromium completo y recuperación desde IndexedDB sin respaldo local.

## Evidencia y límites
- **PASS_REAL:** [CI #37962660799](https://github.com/jonhararagi/wordwaifu/actions/runs/37962660799).
- **PASS_STATIC:** 18 pruebas de esquema, sintaxis JavaScript y estructura del proyecto.
- **PASS_REAL:** migración, CRUD, recarga, exportación/importación, IndexedDB y respaldo/fallback en Chromium.
- **PARTIAL:** WF-004-A no se cierra todavía; faltan pruebas específicas de fallo de escritura en el runtime integrado.
- **NOT_RUN:** prueba visual/manual en Windows 11.

## Siguiente tarea activa
**WF-004-A.3 — Resiliencia integrada: fallos de escritura y cola de guardado.**

**TIMER inicial: 2–4 horas.**

Criterios: simular fallos de IndexedDB en la app; verificar respaldo, mensajes, guardados rápidos con estado final correcto; proteger el estado ante importación fallida; comprobar que exportar sigue disponible; CI PASS; sobrescribir `docs/DONE.md` al cerrar.

## Pendiente a medio/largo plazo
- Proyectos múltiples e índice maestro.
- Backups versionados, restauración y gestión de conflictos.
- Relaciones con validez temporal, intensidad y secretos.
- Atlas histórico y presencia temporal avanzada.
- Generadores deterministas de mundo, personaje, historia y lore.
- Novel Studio, continuidad y Content Guard.
- Integración con BotImagen.
- Validación manual de accesibilidad/usabilidad en Windows 11.

## Protocolo de continuidad
1. Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`.
2. Verificar HEAD, PR y CI antes de modificar.
3. Mantener una sola tarea activa y seguir INSPECT → PLAN → EXECUTE → VERIFY → PERSIST → REPORT.
4. Diferenciar `PASS_REAL`, `PASS_STATIC`, `FAIL_REAL`, `PARTIAL` y `NOT_RUN`.
5. Sobrescribir `docs/DONE.md` al cierre.
