DONE

# WordWaifu · Punto de continuidad

**Tarea cerrada:** WF-004-B.1.2 · Eliminación segura de proyectos y cierre del selector multiverso.
**Tarea mayor cerrada a nivel de automatización:** WF-004-B.1 · Registro de proyectos locales y selector de universos.
**Estado:** implementación y suite de CI Chromium completas. La verificación manual en Windows continúa pendiente.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-004-B.1.2: `0a6fb00a997a54c0f0b8e5421e902b722ce07163`.
- HEAD de código validado: `fe81705d03e7211a95fb15fac2ba8238d8bbf0bf`.
- CI: **PASS_REAL**, [ejecución #37988482281](https://github.com/jonhararagi/wordwaifu/actions/runs/37988482281).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El commit de cierre documental será posterior al HEAD de código probado. Consultar el HEAD vivo la próxima sesión.

## Implementado
- `ProjectRepository.deleteProject(projectId)` usa una transacción de lectura/escritura sobre `projects` y `metadata`. Verifica el registro solicitado, el ID interno y el puntero activo dentro de la operación.
- El repositorio rechaza borrar el proyecto activo aunque se invoque directamente, sin pasar por la interfaz.
- Un candidato que solo existe en `localStorage` se rechaza: no se presenta como borrado si todavía no tiene un registro comprobado en IndexedDB.
- Después del borrado, se verifica que el registro exacto ya no existe en IndexedDB. El respaldo local solo se retira si contiene el ID borrado.
- El gestor «Proyectos» incluye un botón de eliminación con ayuda contextual. Está desactivado para el universo activo y para proyectos solo disponibles en respaldo local.
- El flujo exige abrir y activar otro universo antes de poder eliminar el anterior. La confirmación muestra nombre e ID exacto; universos con IDs parecidos y el activo deben sobrevivir.
- La aplicación actualiza el catálogo después del borrado y no declara éxito si el proyecto vuelve a aparecer como candidato de respaldo.
- Se añadieron pruebas Chromium para respaldo local sin IndexedDB, protección del activo en UI/repositorio, cancelación, borrado real, ID vecino, aislamiento del universo activo y comprobación de los cuatro personajes de Asteria.
- La compatibilidad de proyectos y mecanismos de respaldo existentes se conserva.

## Archivos modificados
- `src/project-repository.js`: borrado transaccional, guardas y verificación posterior.
- `src/app.js`: controles de UI, confirmación, estado activo y refresco de catálogo.
- `index.html`: botón de borrado y ayuda contextual.
- `src/styles.css`: apariencia destructiva y estado deshabilitado.
- `tests/browser_smoke.cjs`: pruebas de protección/cancelación/ID exacto.
- La documentación de esta tarea se actualiza en `docs/DONE.md`, `docs/STATUS.md` y `docs/ROADMAP.md`.

## Evidencia
- **PASS_REAL:** [CI #37988482281](https://github.com/jonhararagi/wordwaifu/actions/runs/37988482281), ejecución terminada en éxito.
- **PASS_STATIC:** 18 pruebas de esquema aprobadas, incluidas migración de relaciones, IDs globalmente únicos y rechazo de referencias inválidas.
- **PASS_REAL:** Chromium pasó el flujo completo de creación/cambio entre universos y protección de borrado del activo.
- **PASS_REAL:** el candidato que solo existía en respaldo local fue rechazado y el respaldo se conservó.
- **PASS_REAL:** cancelar dejó intactos los proyectos; borrar eliminó solo el ID exacto, conservó el vecino con ID parecido y dejó activo Asteria con sus cuatro personajes.
- **PASS_REAL:** smoke test completo de atlas, CRUD de ubicaciones/personajes/acontecimientos/organizaciones/relaciones, persistencia, exportación/importación y recuperación IndexedDB, sin errores de página.
- **PASS_STATIC:** validador estructural, enlaces/controles y sintaxis completaron correctamente en CI.
- **NOT_RUN:** revisión visual/manual en Windows 11. No se afirma que la PC del usuario haya sido verificada.

## Progreso global
**Estimación: 16%** de la visión total, ponderada subjetivamente por alcance; no es porcentaje de código ni de cobertura. El catálogo de proyectos, cambio entre universos y borrado selectivo están probados a nivel automatizado. El índice maestro de búsquedas multiverso sigue pendiente.

## Siguiente tarea activa
**WF-004-B.2 — Índice maestro multiverso, búsqueda entre proyectos sin mezclar datos.**

**TIMER inicial: 3–5 horas**, recalcular tras inspeccionar el almacenamiento actual y los requisitos de búsqueda.

### Criterios de aceptación
1. Buscar por nombre y campos seleccionados entre proyectos locales persistidos sin cambiar el proyecto activo.
2. Cada resultado incluye ID de proyecto, nombre de universo, tipo de entidad e ID estable del registro.
3. No mezclar ni reescribir datos de los universos durante una consulta; solo abrir/cambiar de proyecto tras acción explícita.
4. La búsqueda funciona con IndexedDB, distingue errores de lectura y no declara completo el índice si solo pudo consultar una parte.
5. Chromium cubre resultados en varios universos, resultados vacíos, IDs duplicados entre universos sin colisión, aislamiento y errores de lectura.
6. CI PASS; sobrescribir `docs/DONE.md` y actualizar `STATUS.md`/`ROADMAP.md`.
7. Mantener `main` intacta y PR #1 abierto en borrador; la validación manual de Windows queda como `NOT_RUN` hasta hacerla.

### Antes de empezar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD/PR/CI; inspeccionar `src/project-repository.js`, `src/app.js`, `index.html`, `tests/browser_smoke.cjs` y `scripts/validate_project.py`.
