# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: 19%** de la visión completa. Estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología actual: HTML/CSS/JavaScript con SVG, IndexedDB y copia de compatibilidad en localStorage.
- WordWaifu gestiona el canon y la planificación narrativa; BotImagen gestiona creación visual/recursos. La integración todavía no está implementada.

## GitHub
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- Último commit de código/pruebas: `1c8cd7a69cb04b523c8057ccace80596528fdbb4`.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar.
- `main`: no modificada.
- Workflow #141: **FAIL_REAL**, por una condición de carrera en el smoke test de borrado de lugar; la prueba leía localStorage antes de que terminara la operación asíncrona.
- Corrección añadida: esperar explícitamente a que el estado persistido refleje el borrado antes de comprobar el resultado.
- Workflow #142: **IN_PROGRESS** al cierre de esta revisión. La sintaxis JS y validación de importación JSON pasaron; Chromium debe completar el smoke test y la validación estructural.
- Prueba manual en Windows 11: **NOT_RUN**.

## Funcionalidad con evidencia previa
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · PARCIAL / CI PENDIENTE:** antes de eliminar personajes, lugares, acontecimientos, organizaciones o relaciones se crea y verifica un snapshot; ante fallo o límite alcanzado, el borrado se cancela. La confirmación de borrado de universo explica que sus snapshots también se eliminan.

## Límites conocidos
- El borrado de un universo elimina sus snapshots y no tiene recuperación posterior.
- El límite de 25 snapshots rechaza la copia número 26 sin sobrescribir las anteriores.
- La prueba de snapshot previo al borrado de personaje y la prueba de frontera de 25 snapshots están añadidas; falta CI verde.
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral y conexión con BotImagen siguen pendientes.

## Siguiente tarea activa
**WF-004-C.2 — Obtener CI verde y cerrar la política de snapshots.**

1. Revisar el resultado del workflow #142.
2. Si falla, leer logs y corregir la causa en esta rama.
3. Verificar que el snapshot del personaje conserva el estado previo y que el límite 25/26 se cumple.
4. Mantener el borrado de universo explícitamente irreversible hasta implementar una papelera independiente.
5. Actualizar `docs/DONE.md` con el SHA y evidencia final. No declarar PASS antes de que el workflow termine con éxito.

## Protocolo
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI vivos antes de tocar código. Una tarea activa por agente. No tocar `main` ni fusionar PR sin autorización.
