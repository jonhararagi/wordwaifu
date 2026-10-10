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

## HEAD de código validado más reciente
- SHA: `327360caa66875becbd11e5563fc2988196553a4`.
- CI: [#38022402137 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38022402137).

## WF-004-C.3 — Papelera y recuperación (PARTIAL)
- IndexedDB v2→v3 añade el almacén `trash`; la API y la UI permiten enviar proyectos a la papelera, listar, restaurar por ID y borrar permanentemente con confirmación.
- El proyecto activo está protegido y se conservan/restauran sus snapshots. El catálogo y la búsqueda multiverso filtran tombstones.
- **Hardening de esta iteración:** `write(project)` valida el tombstone dentro de la transacción de escritura; `saveActive(project)` consulta la papelera antes de escribir el respaldo local y restaura el respaldo previo si detecta la carrera.
- Chromium verifica que escribir/guardar un ID en papelera se rechace, que el respaldo no sea sobrescrito y que el respaldo de otro universo sobreviva al movimiento y al borrado permanente.
- **PASS_STATIC:** sintaxis JavaScript y 18 pruebas de esquema.
- **PASS_REAL:** [CI #38022402137](https://github.com/jonhararagi/wordwaifu/actions/runs/38022402137), código probado `327360caa66875becbd11e5563fc2988196553a4`; Chromium smoke y validador estructural en verde.
- **NOT_RUN:** cuota de almacenamiento realmente agotada y revisión visual/manual en Windows 11.
- **PARTIAL:** falta cobertura específica de operaciones de papelera con nombres idénticos y IDs distintos.

## Gates pendientes — WF-004-C.3 sigue PARTIAL
- [x] CI del HEAD de código probado en verde: sintaxis, 18 pruebas de esquema, Chromium y validación estructural; [#38022402137](https://github.com/jonhararagi/wordwaifu/actions/runs/38022402137).
- [x] El respaldo local de otro universo sobrevive al movimiento a papelera y al borrado permanente.
- [ ] Prueba dedicada de proyectos con el mismo nombre e IDs distintos a través de mover/restaurar/borrar.
- [ ] Cuota real agotada o limitación del entorno demostrada y documentada; excepciones inyectadas no equivalen a cuota real.
- [ ] Revisión visual/manual en Windows 11.
## Límites conocidos del producto
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral e integración con BotImagen siguen pendientes.
- La inspección visual manual en Windows 11 no está acreditada.
- WF-004-C.3 permanece parcial hasta superar los gates pendientes.

## Protocolo de continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WF-004-C3-TRASH-CONTRACT.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, CI y PR antes de escribir. Mantener una tarea activa por agente. No tocar `main`, fusionar ni abrir PR sin autorización.
