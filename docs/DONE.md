PARTIAL

# WordWaifu · Punto de continuidad

**Tarea:** WF-004-C.2 — protección de borrados destructivos y límite de snapshots.
**Estado:** PARTIAL. Se implementó el respaldo previo, se añadieron pruebas y se corrigió una condición de carrera detectada por Chromium. La segunda ejecución de CI está en curso.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- Último commit de código/pruebas: `1c8cd7a69cb04b523c8057ccace80596528fdbb4`.
- PR principal: [#1 abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1); no fusionado.
- `main`: no modificada.
- Workflow #141: **FAIL_REAL**; la prueba de borrado de lugar comprobó localStorage antes de que terminara el flujo asíncrono de snapshot + borrado.
- Corrección aplicada: las pruebas de borrado de lugar, personaje, acontecimiento, organización y relación esperan explícitamente el cambio persistido antes de verificar referencias.
- Workflow #142: **IN_PROGRESS**; pasos de sintaxis JavaScript y validación de importación JSON completados con éxito; smoke de Chromium pendiente en el último sondeo.
- Prueba manual en Windows 11: **NOT_RUN**.

## Cambios realizados
- `src/app.js`: helper `snapshotBeforeDestructiveAction`; los borrados de personajes, lugares, acontecimientos, organizaciones y relaciones guardan/verifican un snapshot antes de mutar el canon. Si falla el respaldo o se alcanza el límite, se cancela la operación y se informa al usuario.
- `src/app.js`: el diálogo de borrado de universo aclara que también se eliminarán sus snapshots y que no existe recuperación posterior.
- `tests/browser_smoke.cjs`: verifica que el snapshot previo al borrado de personaje conserva el personaje eliminado.
- `tests/browser_smoke.cjs`: crea 25 snapshots, rechaza el número 26 y comprueba que las 25 copias anteriores permanecen.
- `tests/browser_smoke.cjs`: añade esperas explícitas para evitar leer localStorage antes de que finalicen los borrados asíncronos.
- `docs/STATUS.md`: estado y gate actualizados.
- No se cambió el esquema de IndexedDB ni se tocó `main`.

## Criterios de aceptación
1. Snapshot válido y estado previo conservado al borrar un personaje: prueba añadida, CI en curso.
2. Límite de 25 y rechazo de la copia 26: prueba añadida, CI en curso.
3. Todos los borrados de entidades mencionados cancelan la operación si no puede crearse el snapshot.
4. Borrado de universo: se informa explícitamente que sus snapshots también se eliminan.
5. Chromium CI y validación estructural: **PENDING**.
6. Prueba manual en Windows: **NOT_RUN**.

## Riesgos y limitaciones
- No existe papelera para universos completos; eliminarlos sigue siendo irreversible.
- Si un proyecto alcanzó 25 snapshots, primero debe eliminarse una copia antigua para permitir una nueva copia previa a un borrado.
- El primer CI detectó una carrera en la prueba, no evidencia de una regresión funcional confirmada. La corrección debe pasar el siguiente smoke test antes de cerrar la subtarea.

## Próxima acción exacta
1. Consultar workflow #142 en [GitHub Actions](https://github.com/jonhararagi/wordwaifu/actions).
2. Si falla, revisar logs, corregir la causa y repetir CI.
3. Si pasa, actualizar este archivo con el SHA exacto validado y la URL de la ejecución.
4. Mantener PR #1 en borrador y `main` intacta hasta autorización expresa.

## Progreso global
**Estimación: 19%** de la visión completa, ponderada por alcance y no por líneas de código ni cobertura. El núcleo tiene atlas, CRUD de entidades, catálogo multiverso y snapshots iniciales; Novel Studio, generación narrativa completa, Continuity Guard integral y conexión con BotImagen siguen pendientes.
