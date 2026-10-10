DONE

# WordWaifu · Punto de continuidad

**Tarea cerrada:** WF-004-C.3 · Papelera y recuperación de universos completos.
**Estado:** DONE con CI verde. WF-004-C ya cuenta con snapshots versionados, protección previa a borrados de entidades, papelera y borrado permanente explícito.
**Fecha:** 2026-10-10.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-004-C.3: `affdd62dd7b3e386600e7f816bff7d6b5e1f8fe7`.
- HEAD de código y pruebas validado: `0f035460a5a053dc47fe28a098f8bae056c8a540`.
- CI final: **PASS_REAL**, [ejecución #38024310803](https://github.com/jonhararagi/wordwaifu/actions/runs/38024310803).
- PR #1: [abierto, en borrador y mergeable](https://github.com/jonhararagi/wordwaifu/pull/1); no se fusionó ni se marcó listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- La actualización de documentación genera otro commit después del HEAD de código probado. En la siguiente sesión hay que comprobar el HEAD vivo de la rama antes de cualquier escritura.

## Trabajo realizado
- IndexedDB migra de v2 a v3 añadiendo la tienda `trash` con índice por fecha de borrado. La migración conserva `projects`, `metadata` y `snapshots`.
- `ProjectRepository.trashProject(projectId)` valida el registro y el puntero activo dentro de una transacción: un universo activo no puede ir a papelera. El registro se mueve a papelera por ID exacto.
- Los snapshots permanecen asociados al mismo `projectId` mientras el proyecto está en papelera. La lista normal de proyectos no muestra la entrada borrada; la lista de papelera sí.
- `restoreTrashedProject(projectId)` valida los datos, rechaza una colisión de ID y restituye el mismo registro en `projects` sin alterar el nombre ni el ID, manteniendo los snapshots.
- `permanentlyDeleteTrashedProject(projectId)` exige que el registro exista y siga en papelera, protege el universo activo y elimina la entrada más los snapshots de ese ID.
- El gestor de proyectos tiene una sección «Papelera de universos» con actualización, restauración y borrado permanente separados. El diálogo de borrado permanente advierte que destruye las copias y no se puede deshacer.
- El botón anterior «Eliminar seleccionado» se convirtió en «Mover a papelera». El borrado permanente ya no forma parte de la acción inicial.
- La prueba de navegador crea un universo y un proyecto vecino, mueve uno a papelera, comprueba que los snapshots permanecen, restaura la misma identidad, vuelve a enviarlo a papelera y verifica que solo la purga explícita destruye el proyecto y sus snapshots.
- La prueba de migración IndexedDB v1/v2 comprueba ahora la versión 3.

## Evidencia
- **PASS_REAL:** [CI #38024310803](https://github.com/jonhararagi/wordwaifu/actions/runs/38024310803), workflow completo: sintaxis, 18 pruebas de esquema, smoke test Chromium y validación de estructura.
- **PASS_REAL:** Chromium cubre movimiento a papelera, persistencia de snapshots, recuperación por ID estable, borrado permanente y supervivencia de los universos vecinos y del activo.
- **PASS_STATIC:** los controles de protección están dentro de las transacciones de IndexedDB; el nombre no se usa como clave de identidad.
- **FAIL_REAL durante la iteración, corregido:** dos ejecuciones intermedias fallaron porque los tests aún esperaban el borrado destructivo antiguo mientras se estaba cambiando la UI. La última ejecución con la suite actualizada pasó.
- **NOT_RUN:** revisión visual/manual en el Windows 11 del usuario.

## Límites conocidos
- La papelera no aplica todavía una caducidad automática. El borrado permanente es manual y explícito.
- Si un navegador está bloqueado con otra conexión de IndexedDB abierta, la migración puede quedar bloqueada; el error se comunica, pero no se resuelve automáticamente.
- Prueba manual de diseño, accesibilidad y usabilidad en Windows 11 sigue pendiente.

## Progreso global
**Estimación: 20%** de la visión completa, ponderada por alcance. Es una estimación de proyecto, no porcentaje de código ni cobertura. Ya están cubiertos los ciclos básicos de entidades, relaciones, índice multiverso, persistencia IndexedDB, snapshots versionados y recuperación desde papelera. Siguen pendientes el modelo temporal más explícito, generadores narrativos, Novel Studio completo, Continuity Guard integral, optimizaciones de índice y la integración con BotImagen.

## Siguiente tarea activa
**WF-005-A — Modelo explícito de presencia temporal en lugares.**

**TIMER inicial: 3–5 horas**, recalcular tras inspección.

### Criterios de aceptación
1. Inspeccionar `characters[].locationHistory`, el selector temporal del atlas y el modelo canónico antes de cambiar estructuras.
2. Definir una representación temporal consultable con IDs estables para personaje, lugar y, cuando exista, acontecimiento fuente.
3. Mantener lectura de proyectos existentes; migrar solo si hay una necesidad demostrada y pruebas que lo cubran.
4. Un personaje puede aparecer en lugares distintos según el capítulo sin duplicar su ficha. No asumir que la presencia es siempre única si la ficción permite clones, proyecciones o incertidumbre.
5. Probar bordes de intervalo y límites temporales en tests automatizados de esquema/Chromium.
6. CI PASS, documentación actualizada y `docs/DONE.md` sobrescrito al finalizar.

### Inicio de la siguiente sesión
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar el HEAD, CI y PR vivos. Mantener `main` intacta y PR #1 en borrador hasta autorización expresa.
