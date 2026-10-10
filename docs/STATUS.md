# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: 19%** de la visión completa; estimación de alcance, no métrica de líneas de código ni de cobertura.
- Tecnología: HTML/CSS/JavaScript, SVG, IndexedDB y respaldo de compatibilidad en localStorage.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona recursos visuales. La integración todavía no está implementada.

## GitHub y control de cambios
- Repositorio: `jonhararagi/wordwaifu`.
- Rama activa WF-004-C.3: `work/wf-004-c3-project-trash`.
- `main`: SHA de referencia `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`; no se modificó en esta tarea.
- Comparación consultada: rama de trabajo **215 commits ahead / 0 behind** respecto de `main`.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar. Su head es otra rama; WF-004-C.3 no forma parte de ese PR.
- Guardias y regresión de activación: [`6c80626`](https://github.com/jonhararagi/wordwaifu/commit/6c80626a75b4791db296d47eb7d524608ea8977b), [`d6a4d96`](https://github.com/jonhararagi/wordwaifu/commit/d6a4d96c57243bd8ca0bb4a01a1da486894ccb35).
- Contrato previo: [`a59949b`](https://github.com/jonhararagi/wordwaifu/commit/a59949b10c0437bde42ff013beffb6fa30e8eb1d).

## Funcionalidad con evidencia previa
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · DONE / PASS_REAL:** snapshots previos verificados para los cinco tipos de borrado; el tope 25/26 se valida; el borrado de universo avisa y elimina sus snapshots en conjunto. Evidencia histórica: [CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869).

## WF-004-C.3 — Papelera y recuperación (EN CURSO)
- Rama: `work/wf-004-c3-project-trash`.
- Migración IndexedDB v2→v3 con almacén `trash`; API de envío, listado, restauración y borrado permanente por ID.
- La UI integra la acción reversible «Enviar a papelera», restauración por ID y borrado permanente separado con confirmación.
- Los snapshots se conservan en la entrada de papelera y vuelven al restaurar.
- El catálogo y la búsqueda multiverso filtran IDs en papelera y fallan cerrados si no pueden verificar tombstones.
- `getProject()` no devuelve un proyecto cuyo tombstone no pudo verificarse.
- `activateProject()` valida proyecto y tombstone en una transacción conjunta sobre `projects`, `metadata` y `trash`; comprueba la persistencia del ID activo antes de declarar éxito.
- Se añadieron regresiones para respaldo residual, fallo al leer tombstones y registro residual duplicado que intenta reactivar un proyecto en papelera.
- **CI de la revisión actual: NOT_RUN / NO CONFIRMADO.** La integración disponible no devolvió ejecuciones asociadas a la revisión. No se interpreta una lista vacía como prueba de que no exista ninguna ejecución.
- El workflow `Validate WordWaifu` incluye `workflow_dispatch`, pero el intento anterior desde navegador fue bloqueado por falta de sesión autenticada.
- **Pendiente:** ejecutar CI real, verificar abortos y cuota real de almacenamiento, y realizar inspección visual manual en Windows 11.

## Límites conocidos del producto
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral e integración con BotImagen siguen pendientes.
- La inspección manual visual en Windows 11 no está acreditada.
- La cobertura nueva de WF-004-C.3 no se declara verde hasta que las pruebas se ejecuten contra el HEAD correspondiente.

## Avance global
**19% estimado** de la visión completa. WF-004-C.3 está implementada parcialmente, pero no se considera cerrada hasta superar los gates y la revisión manual pendientes.

## Protocolo de continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Consultar HEAD, CI y PR vivos antes de escribir. Una tarea activa por agente. No tocar `main`, fusionar ni abrir PR sin autorización.
