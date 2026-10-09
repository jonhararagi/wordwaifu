DONE

# WordWaifu · Punto de continuidad

**Tarea cerrada:** WF-004-A · Repositorio de persistencia e introducción gradual de IndexedDB.
**Última subtarea cerrada:** WF-004-A.3 · Pruebas integradas de resiliencia del guardado, cola e importación segura.
**Estado:** el flujo de persistencia de la aplicación está integrado y verificado por CI. La prueba manual en Windows 11 continúa pendiente.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-004-A.3: `8bbaac7391bcb7bc67aecfc2f839ec671591c213`.
- HEAD de código validado: `624e4715545c46a2268b1e4b5c892c68b58f617c`.
- CI: **PASS**, [ejecución #37963611180](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180).
- PR #1: [abierto y en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Este cierre documental crea un commit posterior al SHA del código probado. Verificar el HEAD vivo al retomar.

## Trabajo completado en WF-004-A
- Se añadió `src/project-repository.js` como capa de persistencia intercambiable con almacenes IndexedDB `projects` y `metadata`, verificación posterior a escritura y puntero al proyecto activo.
- `saveBackup()` encapsula la copia local y su manejo de errores. `saveActive()` migra y verifica IndexedDB, conserva el respaldo y usa fallback cuando corresponde.
- `src/app.js` ya no accede directamente a `localStorage`; delega lectura, respaldo y escrituras a `ProjectRepository`.
- El arranque es asíncrono y deja la interfaz inerte hasta recuperar/migrar el proyecto, evitando renderizar la demo encima de datos existentes.
- Los guardados normales actualizan el respaldo local de forma inmediata y serializan las escrituras verificadas en IndexedDB. Se probó una ráfaga de dos escrituras con latencia artificial: ambos almacenes terminan con el estado más reciente.
- La importación valida el archivo, espera las escrituras en cola, persiste el proyecto candidato y solo entonces reemplaza el estado activo.
- Se simuló una transacción IndexedDB fallida en el runtime de la aplicación: el respaldo local conserva el cambio y la interfaz muestra el fallback sin afirmar que IndexedDB guardó.
- Se simuló el fallo de ambos backends al importar: el proyecto activo y su copia local permanecieron sin cambios.
- La exportación sigue disponible desde memoria durante un fallo de almacenamiento.
- El test elimina el respaldo local y verifica que la aplicación recupera desde IndexedDB el proyecto vigente y sus relaciones.
- `scripts/validate_project.py` comprueba la integración con el repositorio y rechaza el uso directo de `localStorage` en `src/app.js`.

## Evidencia
- **PASS_REAL:** [CI #37963611180](https://github.com/jonhararagi/wordwaifu/actions/runs/37963611180), ejecución completa exitosa.
- **PASS_STATIC:** 18 pruebas de esquema; sintaxis JavaScript y validador estructural.
- **PASS_REAL:** smoke test Chromium completo para ubicaciones, personajes, acontecimientos, organizaciones, relaciones, persistencia y export/import.
- **PASS_REAL:** ráfaga de guardados con latencia, fallback ante fallo IndexedDB, importación rechazada cuando ambos backends fallan y exportación posterior al fallo.
- **NOT_RUN:** prueba visual/manual en la PC Windows 11 del usuario. No se afirma que esa máquina haya sido verificada.
- **Límite conocido:** `localStorage` se conserva intencionalmente como respaldo/fallback. El selector de múltiples proyectos todavía no está implementado.

## Progreso global
**Estimación: 14%** de la visión completa. Es una estimación subjetiva ponderada por alcance, no por líneas ni cobertura. Este hito estabiliza la persistencia, pero no representa todavía el índice maestro, el selector multiverso, los generadores narrativos ni Novel Studio.

## Siguiente tarea activa
**WF-004-B.1 — Registro de proyectos locales y selector de universos.**

**TIMER inicial: 3–5 horas**, recalcular después de inspeccionar las APIs de persistencia existentes y el flujo de creación de proyectos.

### Criterios de aceptación
1. Añadir una API para enumerar proyectos existentes desde IndexedDB sin depender de nombres de proyecto ni del respaldo local.
2. Añadir un selector/gestor que permita abrir y crear proyectos sin sobrescribir accidentalmente otro universo.
3. Cambiar el puntero del proyecto activo de forma transaccional y cargar el proyecto seleccionado antes de desbloquear la interfaz.
4. Mantener compatibilidad con proyectos antiguos que solo existan en `localStorage`.
5. Proteger el borrado: no eliminar proyecto sin confirmación; evitar borrar el proyecto activo sin reemplazo explícito y no borrar otros proyectos por accidente.
6. Pruebas Chromium para crear/listar/cambiar proyecto, persistencia, respaldo, IDs distintos y export/import; CI PASS.
7. Actualizar STATUS/ROADMAP/DONE. No modificar ni fusionar `main`; manual Windows sigue etiquetado `NOT_RUN` hasta probarlo realmente.

### Para retomar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD/PR/CI actuales. Revisar `src/project-repository.js`, `src/app.js`, `index.html`, `tests/browser_smoke.cjs` y `scripts/validate_project.py`.
