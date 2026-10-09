# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: 19%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript con SVG, IndexedDB y una copia de compatibilidad en localStorage. Una migración a TypeScript/React/Vite sigue siendo posterior a estabilizar el modelo y los gates de datos.
- WordWaifu gestiona el canon y la planificación narrativa; BotImagen gestiona creación visual/recursos. La integración todavía no está implementada.

## GitHub
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD de código probado: `a2a276ce346be4b59c43173432ce193910be068f`.
- CI: [PASS_REAL, ejecución #38006355845](https://github.com/jonhararagi/wordwaifu/actions/runs/38006355845).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El cierre documental generará otro commit; en cada sesión volver a consultar HEAD vivo.

## Funcionalidad con evidencia automatizada
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A:** CRUD de personajes y limpieza selectiva de referencias.
- **WF-002-B:** CRUD de acontecimientos y sincronización de enlaces a lugares.
- **WF-002-C:** CRUD de organizaciones, responsables/miembros/sede por IDs existentes.
- **WF-003-A:** registros de relación con ID estable, validación de extremos y proyección compatible desde/hacia listas antiguas.
- **WF-004-B:** catálogo multiverso, búsqueda por entidad y apertura contextual por `projectId + entityType + entityId`.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, gestor UI, restauración con copia previa y snapshot automático antes de importar.

## Evidencia y límites
- **PASS_REAL:** [CI #38006355845](https://github.com/jonhararagi/wordwaifu/actions/runs/38006355845). Chromium terminó sin errores de página.
- **PASS_STATIC:** 18 pruebas de esquema, sintaxis y chequeo de estructura.
- **NOT_RUN:** inspección manual en Windows 11.
- **PARTIAL:** no todas las operaciones destructivas tienen snapshot recuperable; el límite de 25 está implementado pero no cuenta todavía con una prueba de frontera; eliminar un universo elimina también sus snapshots y no existe bandeja para restaurarlo.

## Siguiente tarea activa
**WF-004-C.2 — Snapshots para acciones destructivas, límites y recuperación transparente.**
**TIMER restante: 2–4 horas.**

Completar snapshots/rollback de borrados de entidades, definir el contrato de borrado de un universo y sus snapshots, cubrir el límite de 25 y errores de almacenamiento/restauración, ejecutar Chromium CI y volver a sobrescribir `docs/DONE.md`. La prueba Windows manual seguirá como `NOT_RUN` hasta realizarla.

## Protocolo
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI vivos antes de tocar código. Una tarea activa por agente. No tocar `main` ni fusionar PR sin autorización.
