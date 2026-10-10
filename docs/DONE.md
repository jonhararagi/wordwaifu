PARTIAL

# WordWaifu · Punto de continuidad

**Tarea:** WF-004-C.2 — protección de borrados destructivos y límite de snapshots.
**Estado:** PARTIAL. Código y pruebas añadidos; CI de esta iteración aún no confirmado por la consulta de GitHub disponible al cierre.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código de la iteración: `a04ebe13dcf2fbc3f23cae8e7bd101be02209ee2`.
- PR principal: [#1 abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1); no fusionado.
- `main`: no modificada.
- CI: **PENDING / UNKNOWN** al cerrar este documento. No hay evidencia suficiente para marcar PASS_REAL.
- Prueba manual en Windows 11: **NOT_RUN**.

## Cambios realizados
- `src/app.js`: helper `snapshotBeforeDestructiveAction`; personajes, lugares, acontecimientos, organizaciones y relaciones generan y verifican una copia antes de borrar. Ante error o límite alcanzado, la operación destructiva se cancela y se informa al usuario.
- `src/app.js`: el diálogo de borrado de universo aclara que las copias de seguridad de ese universo también se borrarán y que no existe recuperación posterior.
- `tests/browser_smoke.cjs`: comprobación de que el borrado de personaje deja un snapshot válido que contiene el personaje anterior al borrado.
- `tests/browser_smoke.cjs`: prueba de frontera que crea 25 snapshots y verifica que el intento 26 se rechaza y las 25 copias existentes permanecen.
- `docs/STATUS.md`: estado actualizado y gate CI pendiente.
- No se cambió el esquema de IndexedDB ni se tocó `main`.

## Criterios de aceptación
1. Snapshot válido y estado previo conservado para el borrado de personaje: prueba añadida, **CI pendiente**.
2. Límite de 25 y rechazo de la copia 26: prueba añadida, **CI pendiente**.
3. Borrado de personaje, lugar, acontecimiento, organización y relación se cancela si no puede guardarse el snapshot.
4. Borrado de universo: se informa explícitamente que sus snapshots también se eliminan; no se presenta como recuperable.
5. Chromium CI sin errores de página y validación estática: **PENDING / UNKNOWN**.
6. Prueba manual visual/usabilidad en Windows: **NOT_RUN**.

## Riesgos y limitaciones
- No se implementó una papelera para universos completos; eliminar un universo continúa siendo irreversible.
- Si un proyecto alcanzó el límite de 25 snapshots, primero debe eliminarse una copia antigua desde el gestor para poder realizar un borrado de entidad.
- La ejecución del workflow debe comprobarse en GitHub antes de cerrar esta subtarea. Corregir fallos detectados antes de marcarla DONE.

## Próxima acción exacta
1. Consultar [PR #1](https://github.com/jonhararagi/wordwaifu/pull/1) y sus comprobaciones de GitHub Actions.
2. Si falla, abrir logs y corregir la causa en la rama `foundation/story-foundry-north-star`.
3. Si pasa, registrar el SHA exacto de la ejecución y volver a actualizar este archivo con estado verificado.
4. Mantener el PR #1 en borrador y `main` intacta hasta autorización expresa.

## Progreso global
**Estimación: 19%** de la visión completa, ponderada por alcance y no por líneas de código ni cobertura. El núcleo tiene atlas, CRUD de entidades, catálogo multiverso y snapshots iniciales; Novel Studio, generación narrativa completa, Continuity Guard integral y conexión con BotImagen siguen pendientes.
