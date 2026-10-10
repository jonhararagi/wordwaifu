# WF-004-C.3 — Contrato de papelera de universos

Estado: **BACKEND + UI IMPLEMENTED / AUTOMATED CI PASS / MANUAL GATES PENDING**  
Rama de trabajo: `work/wf-004-c3-project-trash`

## Objetivo

Permitir recuperar un universo eliminado por error sin confundir proyectos que tengan nombres iguales, perder sus snapshots ni alterar el universo activo. La papelera no debe convertir una eliminación lógica en una promesa de recuperación si la persistencia no se verificó.

## Decisiones de contrato

1. **Identidad por ID estable.** Toda operación de papelera recibe `projectId`; el nombre del proyecto es solo informativo y nunca se usa como clave.
2. **El proyecto activo está protegido.** No se puede enviar a la papelera el proyecto activo. Primero se debe activar otro proyecto, igual que en el contrato actual de borrado.
3. **Movimiento reversible y atómico.** En una transacción IndexedDB, la eliminación lógica debe validar el registro del proyecto, capturar su documento y todos los snapshots asociados, guardar un registro de papelera y retirar los registros activos de `projects`/`snapshots`. Si la transacción aborta, el proyecto original debe seguir intacto.
4. **Snapshot incluido en la recuperación.** La entrada de papelera conserva los snapshots asociados al proyecto; no se debe reutilizar la eliminación física actual que los descarta.
5. **Restauración por identidad original.** Restaurar recupera el mismo `projectId` y los snapshots originales. Si ese ID ya existe, se rechaza la operación sin sobrescribirlo; el usuario debe resolver el conflicto explícitamente.
6. **Borrado permanente separado.** La eliminación definitiva es una acción distinta, con confirmación que nombre el universo y explique que no se podrá recuperar. Nunca debe ejecutarse como efecto secundario de enviar a la papelera.
7. **Respaldo local coherente.** Las operaciones deben inspeccionar el respaldo `localStorage` y no borrar ni reemplazar un respaldo de otro `projectId`. Si no puede verificarse la coherencia del respaldo, se informa la limitación sin afirmar que se completó una eliminación total.
8. **Fallos cerrados y verificables.** Errores de cuota, escritura, transacción, restauración o verificación deben conservar el estado previo o devolver un error explícito. No mostrar éxito antes de verificar el resultado persistido.
9. **Aislamiento entre universos.** Dos proyectos con el mismo nombre no pueden afectar la entrada de papelera, restauración o borrado permanente del otro.
10. **Offline-first.** Toda operación de papelera funciona localmente sin red, IA ni API externa.

## Modelo de persistencia implementado

El almacén IndexedDB `trash` (migración v2→v3) usa `projectId` como clave. Cada entrada implementada incluye:

- `projectId`
- `deletedAt`
- `projectData` validado
- `snapshots` validados pertenecientes al mismo `projectId`
- `formatVersion: 1` para identificar el formato de la entrada

La migración IndexedDB debe conservar `projects`, `metadata` y `snapshots`. La forma definitiva del registro queda sujeta a la implementación y pruebas; no se considera aprobada solo por existir este documento.

## Gates de aceptación

- [ ] Migración IndexedDB conserva los datos de instalaciones existentes.
- [ ] Enviar a papelera un proyecto inactivo mueve proyecto y snapshots de forma atómica.
- [ ] Intentar enviar a papelera el proyecto activo falla sin mutaciones.
- [ ] Restaurar recupera el mismo ID, los datos y los snapshots.
- [ ] Un conflicto de ID rechaza la restauración sin sobrescritura.
- [ ] Proyectos con nombres idénticos permanecen aislados por ID.
- [x] Borrado permanente solo afecta al ID confirmado; se limpia únicamente un respaldo local con el mismo ID y solo después de validar la entrada de papelera. Un ID ausente no puede borrar respaldos.
- [x] Fallo simulado al retirar el respaldo local: la papelera permanece intacta y el borrado permanente se rechaza explícitamente.
- [x] Aborto de restauración por snapshot inconsistente: la transacción revierte la escritura del proyecto y los snapshots parciales y conserva la entrada de papelera.
- [x] Respaldo local malformado: se conserva sin modificar, se informa la advertencia y se bloquea el borrado permanente.
- [ ] Fallos reales de cuota de almacenamiento aún pendientes; no se simulan como aprobados.
- [x] El smoke de Chromium verifica que el borrado permanente de un universo en papelera conserva el respaldo local de otro universo; PASS_REAL en CI #38021293453.
- [x] La búsqueda multiverso filtra los IDs en papelera y no muestra un universo por un respaldo local residual.
- [x] UI de papelera integrada: la acción normal «Enviar a papelera» mueve el universo de forma reversible; la pantalla Papelera permite restauración por ID y borrado permanente con confirmación.
- [x] Chromium CI pasa en run [#38021293453](https://github.com/jonhararagi/wordwaifu/actions/runs/38021293453), asociado al commit [`da79c58`](https://github.com/jonhararagi/wordwaifu/commit/da79c5801257246730ce7f88085e2a90e37fd02f); incluye sintaxis, esquema/importación, browser smoke y validador estructural.
- [ ] Inspección visual manual en Windows queda `NOT_RUN` hasta ejecutarse manualmente.

## Evidencia y límites

Este documento comenzó como especificación de trabajo. La implementación y los gates automatizados se consideran validados solo en el alcance cubierto por CI; la tarea completa sigue parcial por pruebas de cuota y revisión visual manual pendientes. CI actual: [run #38021293453](https://github.com/jonhararagi/wordwaifu/actions/runs/38021293453). La base histórica de C.2 fue [run #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869).

## Implementación parcial registrada

- IndexedDB sube de v2 a v3 de forma no destructiva y añade el almacén `trash`.
- `moveProjectToTrash(projectId)` mueve proyecto y snapshots en una transacción; bloquea el proyecto activo.
- `listTrash()`, `restoreTrashedProject(projectId)` y `permanentlyDeleteTrashedProject(projectId)` están implementados.
- La restauración recupera el ID original y los snapshots; un conflicto de ID no sobrescribe registros existentes.
- El catálogo y `getProject()` omiten IDs en papelera para evitar que un respaldo local residual los resucite. Si IndexedDB abre pero no se puede leer el almacén `trash`, `listProjects()` falla cerrado. `getProject()` también devuelve `null` si no puede verificar el tombstone del ID solicitado. `activateProject()` valida la existencia del proyecto y la ausencia de tombstone dentro de la misma transacción que modifica `activeProjectId`, y verifica el valor persistido antes de confirmar éxito.
- La búsqueda multiverso también filtra los tombstones de IndexedDB; si no puede verificar la papelera, omite el respaldo local y devuelve una advertencia en vez de arriesgar la resurrección de un universo.
- Se añadieron gates de Chromium para migración, envío, conservación de snapshots, restauración y borrado permanente. El CI actual ejecutó Chromium smoke y pasó.
- UI visible integrada en `index.html`/`src/app.js`; la acción normal de catálogo envía a papelera y conserva snapshots, mientras que el borrado irreversible queda separado en la pantalla Papelera. El smoke test cubre el movimiento reversible, restauración y borrado permanente desde la interfaz.
- Pruebas añadidas para que un borrado permanente de ID ausente no borre respaldos ajenos, para respaldos residuales coincidentes, fallos al retirar respaldos, JSON malformado, rollback atómico por snapshot inconsistente y fallo cerrado del catálogo/recuperación de proyecto si la papelera o el tombstone no pueden leerse.
- **Pendiente:** añadir/ejecutar cobertura específica de abortos de transacción y cuota real; realizar prueba visual manual en Windows 11.
- Intento de dispatch realizado; el navegador conectado no tenía sesión autenticada y no permitió iniciar el workflow. Ver [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/workflows/validate.yml).

La tarea WF-004-C.3 no debe marcarse DONE hasta que la UI y todos los gates anteriores estén implementados y ejecutados.
