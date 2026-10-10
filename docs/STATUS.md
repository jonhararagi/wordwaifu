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
- `main` de referencia: `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`; no se modificó en esta tarea.
- Comparación verificada: rama de trabajo **218 commits ahead / 0 behind** respecto de `main`.
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar. Su head corresponde a otra rama; WF-004-C.3 no forma parte de ese PR.
- Guardias y regresión de activación: [`6c80626`](https://github.com/jonhararagi/wordwaifu/commit/6c80626a75b4791db296d47eb7d524608ea8977b), [`d6a4d96`](https://github.com/jonhararagi/wordwaifu/commit/d6a4d96c57243bd8ca0bb4a01a1da486894ccb35).
- Registro de continuidad actualizado: [`aea71f6`](https://github.com/jonhararagi/wordwaifu/commit/aea71f6240eaef99ba0e5201416e361e9c8ad4ea).
- El workflow de validación ahora incluye push en `main` y `work/**`, PR hacia `main` y `workflow_dispatch`: [`4502475`](https://github.com/jonhararagi/wordwaifu/commit/4502475cdf9b536c0c5d6dbf51a83efc7408ae6d).

## Funcionalidad con evidencia previa
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · DONE / PASS_REAL:** snapshots previos verificados para los cinco tipos de borrado; el tope 25/26 se valida; el borrado de universo avisa y elimina sus snapshots en conjunto. Evidencia histórica: [CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869).

## WF-004-C.3 — Papelera y recuperación (EN CURSO)
- Migración IndexedDB v2→v3 con almacén `trash`; API de envío, listado, restauración y borrado permanente por ID.
- La UI integra la acción reversible «Enviar a papelera», restauración por ID y borrado permanente separado con confirmación.
- Los snapshots se conservan en la entrada de papelera y vuelven al restaurar.
- El catálogo y la búsqueda multiverso filtran IDs en papelera y fallan cerrados si no pueden verificar tombstones.
- `getProject()` no devuelve un proyecto cuyo tombstone no pudo verificarse.
- `activateProject()` valida proyecto y tombstone en una transacción conjunta sobre `projects`, `metadata` y `trash`; comprueba la persistencia del ID activo antes de declarar éxito.
- Regresiones añadidas para respaldo residual, fallo al leer tombstones y registro residual duplicado que intenta reactivar un proyecto en papelera.
- **CI de HEAD actual: NOT_RUN / NO CONFIRMADO.** La integración consultada no devolvió ejecuciones asociadas a los commits revisados. No se interpreta una lista vacía como prueba de que no existan ejecuciones.
- Se ajustó `.github/workflows/validate.yml` para intentar validar pushes en ramas `work/**` sin necesitar abrir un PR. El commit del workflow es `4502475cdf9b536c0c5d6dbf51a83efc7408ae6d`; todavía no se dispone de evidencia confirmada de ejecución.
- **Pendiente:** confirmar que GitHub Actions arranca en esta rama y que todos los jobs pasan; verificar abortos y cuota real de almacenamiento; revisión visual manual en Windows 11.

## Límites conocidos del producto
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral e integración con BotImagen siguen pendientes.
- La inspección manual visual en Windows 11 no está acreditada.
- La cobertura nueva de WF-004-C.3 no se declara verde hasta ejecutar los gates sobre el HEAD correspondiente.

## Avance global
**19% estimado** de la visión completa. WF-004-C.3 está implementada parcialmente, pero no se considera cerrada hasta superar los gates y la revisión manual pendientes.

## Protocolo de continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Consultar HEAD, CI y PR vivos antes de escribir. Una tarea activa por agente. No tocar `main`, fusionar ni abrir PR sin autorización.
