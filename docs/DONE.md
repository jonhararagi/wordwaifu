PARTIAL

# WordWaifu · Punto de continuidad

**Subtarea verificada:** WF-004-C.1 · Almacén de snapshots versionados y restauración protegida en el gestor de proyectos.
**Estado de la fase:** PARTIAL. El circuito de snapshots manuales, restauración y respaldo previo a importación ya pasó CI; faltan las políticas/pruebas para todas las acciones destructivas, retención y recuperación de universos eliminados.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD BEFORE de esta iteración: `9f481c20653a57657543c4d1700a9414829513f6`.
- HEAD de código probado: `a2a276ce346be4b59c43173432ce193910be068f`.
- CI: **PASS_REAL**, [ejecución #38006355845](https://github.com/jonhararagi/wordwaifu/actions/runs/38006355845).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1); no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Este commit documental genera un HEAD posterior al código probado. Inspeccionar el HEAD vivo en la próxima sesión.

## Implementado y persistido
- IndexedDB sube de versión 1 a 2 sin eliminar los almacenes `projects` y `metadata`; incorpora `snapshots` con índices por `projectId` y `createdAt`.
- API del repositorio para validar, crear, enumerar, eliminar y restaurar snapshots. Los IDs pertenecen al proyecto exacto, no al nombre.
- Límite defensivo en código: 25 snapshots por proyecto. Si se alcanza, la creación se rechaza y no sobrescribe copias existentes.
- Restauración solo para el proyecto que ya está activo en IndexedDB. Valida snapshot, ID y contenido, comprueba que el proyecto no cambió durante la operación, guarda una copia `before-restore`, verifica el resultado y revierte si falla la lectura/escritura de verificación o el respaldo local.
- Gestor de proyectos con listado de snapshots, creación manual, restauración y eliminación individual con confirmación. Solo permite restaurar un snapshot marcado válido del proyecto activo; los demás proyectos se mantienen aislados.
- Una importación JSON válida crea un snapshot `before-import` del estado actual antes de guardar el candidato. Si la persistencia del candidato falla, el estado activo y el respaldo local no se sustituyen.
- Borrar un proyecto elimina sus snapshots en la misma transacción. En esta fase aún no hay una bandeja de recuperación de universos eliminados; es un límite conocido, no una recuperación garantizada.
- Archivos de código y pruebas modificados durante esta subtarea: `src/project-repository.js`, `src/app.js`, `index.html`, `src/styles.css`, `tests/browser_smoke.cjs`.

## Evidencia
- **PASS_REAL:** [CI #38006355845](https://github.com/jonhararagi/wordwaifu/actions/runs/38006355845) completada con éxito. Chromium confirmó creación/listado/restore/delete, snapshot previo a importación, conservación del ID activo, snapshot de rollback, aislamiento por proyecto y fallos sembrados de persistencia.
- **PASS_STATIC:** 18 pruebas de esquema pasan; sintaxis de JavaScript, estructura y enlaces locales pasan.
- **PASS_REAL:** smoke de Chromium finalizó sin errores de página.
- **FAIL_REAL durante desarrollo, corregido:** varias pasadas descubrieron aserciones que no esperaban la asincronía del selector, una inyección que fallaba antes del punto previsto y dos errores de uso del test runner. Se corrigieron; solo la última ejecución listada arriba es la evidencia final.
- **NOT_RUN:** prueba manual visual/usabilidad en Windows 11.

## Lo que todavía no queda cerrado
1. Añadir snapshot/rollback explícito al borrar personajes, lugares, acontecimientos, organizaciones y otras operaciones destructivas, definiendo cuándo se conservan o eliminan sus snapshots.
2. Decidir y probar la política de eliminación de un universo completo: hoy elimina sus snapshots también, sin una bandeja para recuperar el universo eliminado. La interfaz debe comunicar ese efecto explícitamente o incorporar un flujo de recuperación separado.
3. Añadir prueba para alcanzar el límite de 25 snapshots, comprobar el fallo por falta de espacio y cubrir errores durante la creación, restauración y respaldo local.
4. Probar visualmente el gestor en Windows 11. La automatización headless no sustituye esa comprobación.

## Progreso global
**Estimación: 19%** de la visión completa, ponderada por alcance y no por líneas de código ni cobertura. El proyecto ya tiene CRUD de entidades principales, índice multiverso y una primera capa versionada de recuperación; generadores narrativos, Novel Studio, Continuity Guard y conexión con BotImagen siguen pendientes.

## Siguiente tarea activa
**WF-004-C.2 — Snapshots para acciones destructivas, límites y recuperación transparente.**

**TIMER restante estimado: 2–4 horas**, recalcular al inspeccionar el estado vivo.

### Criterios de aceptación
1. Inspeccionar las funciones actuales de borrado, importación y cambio de proyecto.
2. Garantizar snapshots recuperables antes de operaciones destructivas relevantes; no crear copias cuyo borrado inmediato haga inútil la recuperación.
3. Acordar el comportamiento de borrar un proyecto completo: explicitar borrado de snapshots o mantener una vía verificable de restauración del universo eliminado.
4. Pruebas para límite de 25, error de escritura, restauración cancelada/fallida, aislamiento entre universos y limpieza selectiva.
5. Chromium CI PASS y persistencia de estado actualizada; prueba manual Windows `NOT_RUN` hasta ejecutarla.
6. Mantener `main` intacta y PR #1 en borrador.

### Para retomar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Inspeccionar HEAD/PR/CI vivos y los bloques de borrado en `src/app.js`, las operaciones de snapshots en `src/project-repository.js` y los tests en `tests/browser_smoke.cjs`.
