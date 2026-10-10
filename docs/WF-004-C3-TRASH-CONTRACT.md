# WF-004-C.3 — Contrato de papelera de universos

Estado: **BACKEND IMPLEMENTED / UI AND CI PENDING**  
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

## Modelo de persistencia a evaluar

Añadir un object store versionado, por ejemplo `trash`, indexado por `projectId` y `deletedAt`. Cada entrada debe incluir al menos:

- `projectId`
- `deletedAt`
- `projectData` validado
- `snapshots` validados pertenecientes al mismo `projectId`
- metadatos de versión del formato de papelera

La migración IndexedDB debe conservar `projects`, `metadata` y `snapshots`. La forma definitiva del registro queda sujeta a la implementación y pruebas; no se considera aprobada solo por existir este documento.

## Gates de aceptación

- [ ] Migración IndexedDB conserva los datos de instalaciones existentes.
- [ ] Enviar a papelera un proyecto inactivo mueve proyecto y snapshots de forma atómica.
- [ ] Intentar enviar a papelera el proyecto activo falla sin mutaciones.
- [ ] Restaurar recupera el mismo ID, los datos y los snapshots.
- [ ] Un conflicto de ID rechaza la restauración sin sobrescritura.
- [ ] Proyectos con nombres idénticos permanecen aislados por ID.
- [x] Borrado permanente solo afecta al ID confirmado; se limpia únicamente un respaldo local con el mismo ID y solo después de validar la entrada de papelera. Un ID ausente no puede borrar respaldos.
- [ ] Fallos sembrados de transacción/cuota no producen éxito falso ni pérdida parcial (aún falta cobertura específica de abort/cuota).
- [ ] El respaldo local de otro universo nunca se elimina ni se sustituye.
- [x] UI de papelera integrada: listado por ID, restauración con confirmación y borrado permanente con confirmación.
- [ ] Chromium CI pasa; inspección visual en Windows queda `NOT_RUN` hasta ejecutarse manualmente.

## Evidencia y límites

Este documento es una especificación de trabajo, no evidencia de funcionalidad implementada. La base de referencia auditada reporta WF-004-C.2 con Chromium CI PASS en [run #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869). ## Implementación parcial registrada

- IndexedDB sube de v2 a v3 de forma no destructiva y añade el almacén `trash`.
- `moveProjectToTrash(projectId)` mueve proyecto y snapshots en una transacción; bloquea el proyecto activo.
- `listTrash()`, `restoreTrashedProject(projectId)` y `permanentlyDeleteTrashedProject(projectId)` están implementados.
- La restauración recupera el ID original y los snapshots; un conflicto de ID no sobrescribe registros existentes.
- El catálogo y `getProject()` omiten IDs en papelera para evitar que un respaldo local residual los resucite.
- Se añadieron gates de Chromium para migración, envío, conservación de snapshots, restauración y borrado permanente. CI todavía no ejecutado.
- UI visible integrada en `index.html`/`src/app.js`; el smoke test incorpora el ciclo de restauración y borrado permanente desde la interfaz.
- Pruebas añadidas para que un borrado permanente de ID ausente no borre respaldos ajenos, y para que se retire un respaldo residual solo cuando coincide exactamente con el ID en papelera.
- **Pendiente:** ejecutar CI real, revisar abortos/cuota y prueba visual manual en Windows 11.

La tarea WF-004-C.3 no debe marcarse DONE hasta que la UI y todos los gates anteriores estén implementados y ejecutados.
