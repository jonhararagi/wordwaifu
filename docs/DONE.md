PARTIAL

# WordWaifu · Punto de continuidad

**Tarea:** WF-004-C.2 — protección de borrados destructivos y límite de snapshots.
**Estado:** PARTIAL. Código añadido; CI ha detectado dos defectos de sincronización/identificación en las pruebas, ambos corregidos. La ejecución #144 está en curso con la última corrección.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- Último commit de código/pruebas: `5fc991962c463ece2e9e46d2b40c79838c79b16d`.
- PR principal: [#1 abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1); no fusionado.
- `main`: no modificada.
- Workflow #141: **FAIL_REAL** — la prueba leía localStorage antes de que terminara el borrado asíncrono.
- Workflow #142 y #143: **FAIL_REAL** — la prueba buscaba el snapshot en un ID fijo, distinto del ID real del proyecto importado.
- Correcciones: las pruebas esperan el estado persistido y resuelven el ID del universo desde localStorage.
- Workflow #144: **PASS_REAL**, [CI #38008108247](https://github.com/jonhararagi/wordwaifu/actions/runs/38008108247); Chromium smoke test y validación estructural completaron con éxito.
- Workflow #145: **IN_PROGRESS** para validar la misma revisión junto con la documentación actualizada.
- Prueba manual en Windows 11: **NOT_RUN**.

## Cambios realizados
- `src/app.js`: helper `snapshotBeforeDestructiveAction`; los borrados de personajes, lugares, acontecimientos, organizaciones y relaciones guardan/verifican un snapshot antes de mutar el canon. Si falla el respaldo o se alcanza el límite, se cancela el borrado y se informa al usuario.
- `src/app.js`: el diálogo de borrado de universo aclara que también se eliminarán sus snapshots y que no existe recuperación posterior.
- `tests/browser_smoke.cjs`: prueba de snapshot anterior al borrado de personaje, límite de 25 snapshots, y esperas explícitas para operaciones asíncronas.
- `docs/STATUS.md`: estado y fallos observados actualizados.
- No se cambió el esquema de IndexedDB ni se tocó `main`.

## Criterios de aceptación
1. Snapshot válido conserva el personaje anterior: prueba añadida; CI #144 PASS_REAL; confirmar también el workflow posterior de documentación.
2. La copia 26 se rechaza y permanecen las 25 existentes: prueba añadida; CI #144 PASS_REAL.
3. Los borrados de entidades se cancelan si no se puede crear el snapshot.
4. El borrado de universo informa explícitamente que sus snapshots también se eliminan.
5. Chromium CI y validación estructural: **PENDING**.
6. Prueba manual en Windows: **NOT_RUN**.

## Riesgos y límites
- No existe papelera para universos completos; eliminarlos sigue siendo irreversible.
- Al alcanzar 25 snapshots, hay que eliminar una copia antigua antes de realizar un borrado de entidad.
- No declarar DONE hasta obtener un workflow verde que incluya el test actualizado.

## Próxima acción exacta
1. Consultar [GitHub Actions](https://github.com/jonhararagi/wordwaifu/actions), confirmar el workflow #145 y revisar cualquier ejecución posterior a cambios de documentación.
2. Si falla, revisar el log del paso `Run browser smoke test`, corregir la causa y repetir.
3. Si pasa, registrar el SHA y la URL de la ejecución verde.
4. Mantener PR #1 en borrador y `main` intacta hasta autorización expresa.

## Progreso global
**Estimación: 19%** de la visión completa, ponderada por alcance y no por líneas de código ni cobertura. El núcleo tiene atlas, CRUD de entidades, catálogo multiverso y snapshots iniciales; Novel Studio, generación narrativa completa, Continuity Guard integral y conexión con BotImagen siguen pendientes.
