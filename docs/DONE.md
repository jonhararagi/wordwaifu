PARTIAL

# WordWaifu · Punto de continuidad

**Resultado:** WF-004-C.3 sigue **PARTIAL**. La CI automatizada está en verde, pero quedan pruebas específicas para nombres duplicados, cuota real y revisión manual en Windows 11.  
**Fecha:** 2026-10-10. **Avance global estimado:** 19% de la visión completa; estimación por alcance, no por líneas de código.

## HEAD, rama y PR
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `work/wf-004-c3-project-trash`.
- HEAD BEFORE de la iteración funcional: `da79c5801257246730ce7f88085e2a90e37fd02f`.
- HEAD de código validado: `327360caa66875becbd11e5563fc2988196553a4`.
- CI exacta del código: **PASS**, [run #38022402137](https://github.com/jonhararagi/wordwaifu/actions/runs/38022402137).
- HEAD actual incluye commits documentales posteriores al código probado; no confundirlos con cambios funcionales.
- `main` sigue intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- PR #1 sigue [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), no fusionado. Apunta a otra rama; WF-004-C.3 permanece separada.

## Trabajo funcional de esta iteración
- `ProjectRepository.write(project)` ahora consulta el tombstone dentro de la misma transacción IndexedDB que escribe el proyecto y el puntero activo. Una escritura tardía no puede resucitar un ID que ya está en papelera.
- `saveActive(project)` revisa la papelera antes de tocar el respaldo local. Si no puede verificarla, falla cerrado; si la guardia de transacción detecta una carrera, se restaura el respaldo anterior y se devuelve un error explícito.
- `tests/browser_smoke.cjs` incluye regresiones para rechazo de `saveActive` y `write` con ID en papelera, preservación de respaldos y conservación del respaldo de otro universo tras mover o borrar permanentemente un proyecto.
- Se corrigió una aserción de test que asumía que Asteria siempre era el proyecto respaldado; ahora compara con el ID y el nombre capturados del dueño real del respaldo.

## Evidencia
- **PASS_REAL:** [CI #38022402137](https://github.com/jonhararagi/wordwaifu/actions/runs/38022402137), SHA de código `327360caa66875becbd11e5563fc2988196553a4`; todos los pasos completados con éxito.
- **PASS_STATIC:** sintaxis, 18 pruebas de esquema y validador estructural.
- **PASS_REAL:** Chromium smoke completo sin errores de página: migración IndexedDB, snapshots, envío/restauración/borrado por ID, protección del activo, fallos inyectados, rollback atómico, integridad del respaldo, CRUD y exportación/importación.
- **FAIL_REAL corregido:** [run #38022329212](https://github.com/jonhararagi/wordwaifu/actions/runs/38022329212) falló por una expectativa fija de ID en el test. Se hizo dinámica y la última ejecución de código pasó.
- **NOT_RUN:** cuota del navegador realmente agotada y revisión visual/manual en Windows 11.
- **PARTIAL:** aún falta una prueba explícita de operaciones de papelera para dos proyectos con el mismo nombre y IDs diferentes.

## Próxima tarea activa
**WF-004-C.3-QUOTA-WINDOWS — cerrar los gates restantes.**

**TIMER: 1–2 horas** para la siguiente unidad de trabajo.

1. Añadir un test de dos universos con nombre idéntico e IDs distintos, y comprobar mover/restaurar/borrar uno sin afectar al otro.
2. Probar los errores de cuota disponibles; distinguir excepciones simuladas de una cuota real agotada.
3. Confirmar que cualquier fallo conserva proyecto, tombstone y respaldo y no muestra éxito prematuro.
4. Repetir CI completa.
5. La revisión visual de Windows 11 permanece `NOT_RUN` hasta ejecutarse en ese equipo.
6. Actualizar `docs/STATUS.md`, `docs/ROADMAP.md`, `docs/WF-004-C3-TRASH-CONTRACT.md` y sobrescribir este `docs/DONE.md` al cerrar.
7. No modificar `main`, ni fusionar o marcar listo el PR #1 sin autorización expresa.

**Punto de inicio:** rama `work/wf-004-c3-project-trash`; leer `docs/STATUS.md`, `docs/WF-004-C3-TRASH-CONTRACT.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD/CI antes de cualquier escritura.
