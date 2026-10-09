PARTIAL

# WordWaifu · Punto de continuidad

**Tarea mayor activa:** WF-004-B.1 · Registro de proyectos locales y selector de universos.
**Subtarea cerrada:** WF-004-B.1.1 · Catálogo por ID, creación y cambio seguro entre proyectos.
**Estado:** esta subtarea pasó CI completa en Chromium. La tarea mayor sigue parcial porque aún falta el borrado seguro de proyectos y su cobertura.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-004-B.1.1: `e624e576a407778b2d99a75daf0768b645c1d1af`.
- HEAD de código validado: `0b04444bb6edf726e3ae5e4971ad49e533567f27`.
- CI de código y pruebas: **PASS**, [ejecución #37966133138](https://github.com/jonhararagi/wordwaifu/actions/runs/37966133138).
- PR #1: [abierto y en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El commit documental de cierre será posterior al HEAD de código probado. Verificar el HEAD vivo al retomar.

## Implementado en WF-004-B.1.1
- `ProjectRepository.listProjects()` enumera proyectos de IndexedDB por ID estable, incluye el puntero activo y ordena por nombre solo para presentación.
- Si un proyecto solo existe en el respaldo de `localStorage`, el catálogo puede incluirlo como candidato de recuperación/migración.
- `getProject(projectId)` recupera por ID; `activateProject(projectId)` solo actualiza el puntero cuando el registro ya existe y valida su identidad.
- Nueva ventana **Proyectos** para consultar el catálogo local, abrir un universo existente o crear uno con nombre y nuevo ID.
- Antes de cambiar de universo, la aplicación verifica el guardado del proyecto actual; valida y persiste el candidato antes de reemplazar el estado en memoria. Si falla, mantiene el proyecto anterior y presenta el error.
- El cambio de universo reinicia vista, selección, búsqueda, filtro temporal y zoom para no arrastrar estado de un proyecto a otro.
- Chromium crea un segundo universo, comprueba IDs distintos, vuelve al original, abre el nuevo y verifica que los cuatro personajes de Asteria siguen intactos.

## Evidencia
- **PASS_REAL:** [CI #37966133138](https://github.com/jonhararagi/wordwaifu/actions/runs/37966133138), ejecución completa exitosa.
- **PASS_REAL:** Chromium verificó catálogo/creación, cambio entre proyectos, puntero activo correcto y aislamiento de los datos de ambos universos.
- **PASS_STATIC:** 18 pruebas de esquema; sintaxis JavaScript y validador estructural.
- **PASS_REAL:** smoke test completo previo para atlas, CRUD de ubicaciones/personajes/acontecimientos/organizaciones/relaciones, importación/exportación y resiliencia IndexedDB.
- **FAIL_REAL durante desarrollo, corregido:** el primer test detectó que el reinicio de contexto iteraba con un selector DOM individual en vez de una colección. Se corrigió a `$$(".view-tab")`; la ejecución posterior completa pasó.
- **NOT_RUN:** prueba visual/manual en Windows 11. No se afirma que la PC del usuario haya sido verificada.

## Archivos modificados
- `src/project-repository.js`: listado, lectura por ID y activación segura.
- `src/app.js`: gestor, creación/cambio, recuperación ante errores y reinicio del espacio de trabajo.
- `index.html`, `src/styles.css`: control y diálogo del gestor.
- `tests/browser_smoke.cjs`: pruebas de catálogo, creación, cambio e aislamiento.
- `scripts/validate_project.py`: controles requeridos y cobertura del gestor.

## Progreso global
**Estimación: 15%** de la visión total, ponderada subjetivamente por alcance; no representa porcentaje de código ni cobertura. El catálogo y el cambio entre universos están probados, pero no equivalen a un índice maestro multiverso.

## Siguiente subpaso
**WF-004-B.1.2 — Eliminación segura de proyectos y cierre del selector multiverso.**

**TIMER inicial: 2–3 horas**, recalcular después de inspeccionar el código y el comportamiento actual.

### Criterios de aceptación
1. Borrar un proyecto no activo con confirmación explícita y resumen del nombre/ID afectado.
2. Prohibir borrar el proyecto activo salvo que otro proyecto ya exista, se seleccione y quede activado correctamente como reemplazo.
3. Eliminar solo el registro cuyo ID se confirmó y actualizar el catálogo sin alterar datos de otros universos.
4. Mantener compatibilidad con proyectos solo en respaldo local; no mostrar borrado confirmado si no se pudo eliminar de IndexedDB.
5. Pruebas Chromium para cancelar/eliminar, protección del proyecto activo, cambio de selección, IDs similares y preservación del resto de datos.
6. CI PASS; actualizar STATUS/ROADMAP/DONE; sin escrituras a `main` ni fusión de PR.
7. La prueba manual de Windows sigue como `NOT_RUN` hasta que se ejecute realmente.

### Para retomar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI actuales. Inspeccionar `src/project-repository.js`, `src/app.js`, el diálogo en `index.html`, `tests/browser_smoke.cjs` y `scripts/validate_project.py`.
