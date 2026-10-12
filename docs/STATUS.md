# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: pendiente de recalcular.** El 19% de la actualización del 2026-10-10 es una estimación histórica y no mide el estado integrado actual.
- Tecnología: HTML/CSS/JavaScript, SVG, IndexedDB y respaldo de compatibilidad en localStorage.
- El árbol integrado ya incluye el Panel de arte (Art Studio) con IndexedDB y respaldo local, además del atlas, papelera, archivo de personajes y expedientes ampliados. La integración externa con BotImagen y las capacidades avanzadas de Novel Studio siguen pendientes.

## GitHub y control de cambios
- Repositorio: `jonhararagi/wordwaifu`.
- Rama candidata de integración del producto: `work/integration-mainline-2026-10` (PR #14). La rama de validación de origen `work/integration-validation-fixes-2026-10` se conserva como referencia.
- `main` verificada el 2026-10-12: `c07ef226a61ad6e48b081890f1e3d96eecb585b5` (sin cambios en esta integración).
- PR #14: [integración de producto](https://github.com/jonhararagi/wordwaifu/pull/14), abierto contra `main`, no fusionado, `mergeable=true`; último commit funcional de persistencia/papelera `b75c7142f6e33dd03ed16229e9bd2c065ca7e538`, validado con la regresión en `e09db0dda3460b7c7406b3c19eb398a2ee2c0e19`.
- PR #1, #3, #7, #9, #10 y #12: cerradas como rutas supersedidas, no fusionadas; se conservan las ramas de origen. PR #11: fusionada en la rama de integración de trabajo, no en `main`. No se ha desplegado.
- Guardias y regresión de activación: [`6c80626`](https://github.com/jonhararagi/wordwaifu/commit/6c80626a75b4791db296d47eb7d524608ea8977b), [`d6a4d96`](https://github.com/jonhararagi/wordwaifu/commit/d6a4d96c57243bd8ca0bb4a01a1da486894ccb35).
- Registro de continuidad: [`aea71f6`](https://github.com/jonhararagi/wordwaifu/commit/aea71f6240eaef99ba0e5201416e361e9c8ad4ea).
- Workflow de validación configurado para pushes en `main` y `work/**`, PR hacia `main` y `workflow_dispatch`: [`4502475`](https://github.com/jonhararagi/wordwaifu/commit/4502475cdf9b536c0c5d6dbf51a83efc7408ae6d).

## Capacidad con evidencia automatizada
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · DONE / PASS_REAL histórico:** snapshots previos verificados para los cinco tipos de borrado; límite 25/26 validado. Evidencia histórica: [CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869). No acredita cambios posteriores de C.3.

## HEAD de código funcional validado más reciente
- Último commit funcional: `b75c7142f6e33dd03ed16229e9bd2c065ca7e538` (rollback del respaldo local y tombstone mínimo tras borrado permanente).
- HEAD de validación que incluye la regresión y el validador estructural actualizado: `e09db0dda3460b7c7406b3c19eb398a2ee2c0e19`.
- [Validate WordWaifu — push run 38297486465 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38296993845).
- [Validate WordWaifu — PR run 38297492417 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38297000005).
- [DanMachi Lore and Retrieval Integrity — PR run 38297492488 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38297000007).
- Chromium confirma CRUD del Panel de arte en IndexedDB y respaldo local, fallos simulados sin falso éxito, papelera y snapshots, expedientes ampliados y separación de Ryu en `CONT-AR` y `CONT-ANIME`.
- Regresiones de pestaña obsoleta: un autosave no puede resucitar un universo en papelera ni recrear un ID tras borrado permanente. El borrado purga el payload y snapshots, conserva solo una marca oculta de ID, y los guardados/activaciones de ese ID se rechazan.

## WF-004-C.3 — Papelera y recuperación (PARTIAL)
- IndexedDB v2→v3 añade el almacén `trash`; la API y la UI permiten enviar proyectos a la papelera, listar, restaurar por ID y borrar permanentemente con confirmación.
- El proyecto activo está protegido y se conservan/restauran sus snapshots. El catálogo y la búsqueda multiverso filtran tombstones.
- **Hardening de esta iteración:** `write(project)` valida la marca dentro de la transacción de escritura; `saveActive(project)` restaura el respaldo previo si detecta la carrera o si no puede verificar la papelera. El borrado permanente elimina el payload y los snapshots pero conserva una marca mínima oculta para bloquear pestañas obsoletas.
- **Regresión de pestaña obsoleta:** el smoke abre una segunda pestaña/contexto, mueve el universo original a papelera y fuerza un autosave de la copia en memoria; verifica que el respaldo del universo hermano se conserva, el ID eliminado no reaparece en el catálogo y el error se muestra sin falso éxito.
- Chromium verifica que escribir/guardar un ID en papelera se rechace, que el respaldo no sea sobrescrito y que el respaldo de otro universo sobreviva al movimiento y al borrado permanente.
- **PASS_STATIC:** sintaxis JavaScript y 18 pruebas de esquema.
- **PASS_REAL:** [CI #38023966741](https://github.com/jonhararagi/wordwaifu/actions/runs/38023966741), commit de código `2ef649202e1f27db0e0ff0a939e4307933e178de`; sintaxis, 18 pruebas de esquema, Chromium smoke y validador estructural completados.
- **PASS_REAL:** el smoke ahora crea dos universos con el mismo nombre y distintos IDs, mueve ambos a papelera, restaura uno, borra permanentemente el otro y verifica que sus snapshots e identidad no se mezclan.
- **NOT_RUN:** cuota real agotada; una excepción simulada no se presenta como cuota real. Revisión visual/manual en Windows 11 también sigue pendiente.
- **PARTIAL:** quedan los gates de cuota real y revisión manual en Windows 11.

## Gates pendientes — WF-004-C.3 sigue PARTIAL
- [x] CI de código y regresión duplicada en verde: sintaxis, 18 pruebas de esquema, Chromium y validación estructural; [#38023966741](https://github.com/jonhararagi/wordwaifu/actions/runs/38023966741).
- [x] El respaldo local de otro universo sobrevive al movimiento a papelera y al borrado permanente.
- [x] Proyectos con el mismo nombre y distintos IDs permanecen aislados en mover/restaurar/borrar.
- [x] Regresión de borrado permanente: un autosave desde una pestaña obsoleta no recrea el ID; el tombstone mínimo queda oculto en la lista recuperable y no conserva `projectData` ni `snapshots`.
- [x] Regresión automatizada `PASS_SIMULATED` para `QuotaExceededError`: el respaldo previo se conserva, IndexedDB puede completar el guardado con advertencia y el fallo simultáneo de ambos almacenes rechaza la operación. Smoke Chromium en HEAD `e098e790432578ef1d8e115e82dc90ed4e651960`, [Validate WordWaifu run 38292740554](https://github.com/jonhararagi/wordwaifu/actions/runs/38292740554) y [push run 38292735507](https://github.com/jonhararagi/wordwaifu/actions/runs/38292735507), ambos PASS.
- [ ] Cuota real agotada o limitación del entorno demostrada y documentada; excepciones inyectadas no equivalen a cuota real.
- [ ] Revisión visual/manual en Windows 11.
## Límites conocidos del producto
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral e integración externa con BotImagen siguen pendientes. El Panel de arte local ya está integrado en la rama candidata; no equivale a una integración externa con BotImagen.
- La inspección visual manual en Windows 11 no está acreditada.
- WF-004-C.3 permanece parcial hasta superar los gates pendientes.

## Protocolo de continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WF-004-C3-TRASH-CONTRACT.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, CI y PR antes de escribir. Mantener una tarea activa por agente. No tocar `main`, fusionar ni abrir PR sin autorización.


## Actualización de continuidad — plan de cuota y Windows 11 (2026-10-10)
- Se añadió [`docs/WF-004-C3-QUOTA-WINDOWS-TEST-PLAN.md`](WF-004-C3-QUOTA-WINDOWS-TEST-PLAN.md) para definir evidencia `PASS_SIMULATED` frente a `PASS_REAL`, criterios seguros para investigar cuota real y una lista reproducible de revisión manual en Windows 11.
- Esta adición es documentación, no una ejecución de pruebas: no acredita cuota real ni inspección Windows.
- **WF-004-C.3 continúa PARTIAL.** Siguientes pasos: la regresión automatizada simulada ya está cubierta y pasó en Chromium; mantener cuota real como `NOT_RUN` hasta que pueda probarse con seguridad en un perfil desechable o se documente la limitación del runner; mantener Windows 11 como `NOT_RUN` hasta contar con revisión manual ejecutada.
