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
- `main`: `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Comparación comprobada el 2026-10-10: rama de trabajo **por delante de main / 0 behind** respecto de `main`; esto describe la historia acumulada de la rama, no 220 tareas completadas.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar. Su head corresponde a otra rama; WF-004-C.3 no forma parte de ese PR.
- Guardias y regresión de activación: [`6c80626`](https://github.com/jonhararagi/wordwaifu/commit/6c80626a75b4791db296d47eb7d524608ea8977b), [`d6a4d96`](https://github.com/jonhararagi/wordwaifu/commit/d6a4d96c57243bd8ca0bb4a01a1da486894ccb35).
- Registro de continuidad: [`aea71f6`](https://github.com/jonhararagi/wordwaifu/commit/aea71f6240eaef99ba0e5201416e361e9c8ad4ea).
- Workflow de validación configurado para pushes en `main` y `work/**`, PR hacia `main` y `workflow_dispatch`: [`4502475`](https://github.com/jonhararagi/wordwaifu/commit/4502475cdf9b536c0c5d6dbf51a83efc7408ae6d).

## Funcionalidad con evidencia previa
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · DONE / PASS_REAL histórico:** snapshots previos verificados para los cinco tipos de borrado; límite 25/26 validado. Evidencia histórica: [CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869). No acredita cambios posteriores de C.3.

## WF-004-C.3 — Papelera y recuperación (EN CURSO)
- Migración IndexedDB v2→v3 con almacén `trash`; API de envío, listado, restauración y borrado permanente por ID.
- UI integra acción reversible, restauración por ID y borrado permanente separado con confirmación.
- Los snapshots se conservan en la entrada de papelera y vuelven al restaurar.
- Catálogo y búsqueda multiverso filtran IDs en papelera y aplican guardias ante fallos al verificar tombstones.
- `getProject()` y `activateProject()` incluyen comprobaciones de papelera para evitar resurrección/activación de universos enviados a papelera.
- Regresiones añadidas para respaldo residual, fallo al leer tombstones y registro residual duplicado.
- Fallos anteriores documentados: run [#38020089307](https://github.com/jonhararagi/wordwaifu/actions/runs/38020089307) detectó la redeclaración de `restoreUiDialog`, corregida en [`eff7f73`](https://github.com/jonhararagi/wordwaifu/commit/eff7f73fe574f9dc40d1e31d94a9f5dfda9c08ab); run [#38020309894](https://github.com/jonhararagi/wordwaifu/actions/runs/38020309894) detectó `createdUniverse.name` indefinido, corregido en [`de061c6`](https://github.com/jonhararagi/wordwaifu/commit/de061c6d566645be8b0539f81fb57aa01aed0ac1); run [#38020416762](https://github.com/jonhararagi/wordwaifu/actions/runs/38020416762) detectó timeout en el borrado, corregido en [`a85c737`](https://github.com/jonhararagi/wordwaifu/commit/a85c737f7ab0e50604c860b2e95743afe2273db7).
- **CI actual PASS_REAL:** run [#38021293453](https://github.com/jonhararagi/wordwaifu/actions/runs/38021293453), asociado al commit de validación [`da79c58`](https://github.com/jonhararagi/wordwaifu/commit/da79c5801257246730ce7f88085e2a90e37fd02f); los commits posteriores solo actualizan documentación. El job `validate` terminó `success`; las nueve etapas reportadas finalizaron correctamente: sintaxis, import/schema, instalación Playwright/Chromium, browser smoke y validador estructural.
- El smoke de Chromium valida también que la eliminación permanente de un universo en papelera preserve el respaldo local perteneciente a otro universo. Esta prueba pasó en el run anterior.
- La corrección `a85c737` afecta la selección de IDs de la prueba; no cambió la lógica de aplicación.

## Gates pendientes — WF-004-C.3 sigue PARTIAL
- **CI automatizado del código funcional corregido: PASS_REAL** (run #38021293453, commit de validación `da79c5801257246730ce7f88085e2a90e37fd02f`; cambios funcionales en `a85c737`).
- Añadir/ejecutar pruebas específicas de abortos de transacción y fallos reales de cuota de almacenamiento; todavía no acreditados.
- Realizar revisión visual/manual en Windows 11; `NOT_RUN`.
- El smoke de Chromium sí verifica que borrar permanentemente un universo no elimine el respaldo local de otro universo.
- No cerrar WF-004-C.3 hasta superar los gates manuales y de cuota; CI verde no equivale a validación completa.

## Límites conocidos del producto
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral e integración con BotImagen siguen pendientes.
- La inspección visual manual en Windows 11 no está acreditada.
- WF-004-C.3 permanece parcial hasta superar los gates pendientes.

## Protocolo de continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WF-004-C3-TRASH-CONTRACT.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, CI y PR antes de escribir. Mantener una tarea activa por agente. No tocar `main`, fusionar ni abrir PR sin autorización.
