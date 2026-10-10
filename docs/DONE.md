DONE

# WordWaifu · Punto de continuidad

**Tarea cerrada:** WF-004-C.2 — protección de borrados destructivos y límite de snapshots.
**Estado de la subtarea:** DONE con CI verde. **WF-004-C en conjunto:** PARTIAL, porque aún no existe papelera para recuperar universos completos.
**Fecha:** 2026-10-10.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD BEFORE de la ampliación final de pruebas: `291bcc703dbfec2c877bfd80ead83632e21f6fb1`.
- HEAD de código/pruebas validado: `b7bcd7702063a65d05438c9ba71bac12c1c2d166`.
- CI final de código/pruebas: **PASS_REAL**, [ejecución #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1); no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- La actualización documental crea un commit posterior al HEAD probado; al reanudar, consultar siempre la rama viva.

## Trabajo implementado/verificado
- Los borrados de personaje, lugar, acontecimiento, organización y relación crean un snapshot verificado antes de modificar el canon. Si falla la creación, la operación se cancela y el usuario recibe el motivo.
- Chromium comprueba que cada snapshot previo contiene el registro anterior al borrado, y que las referencias sobrevivientes siguen válidas.
- Límite: 25 snapshots por proyecto. La copia 26 se rechaza sin sobrescribir las anteriores. También se prueba una eliminación real bloqueada por el límite y se confirma que la relación permanece intacta.
- El borrado de un universo muestra un aviso explícito: elimina todos sus snapshots y no existe recuperación posterior. La prueba crea una copia del universo objetivo, confirma el diálogo, y comprueba que el proyecto y sus snapshots se eliminan juntos mientras los universos vecinos y el activo permanecen intactos.
- Los fallos previos de CI provenían de leer localStorage antes del fin de una operación asíncrona y de consultar el snapshot usando un ID de proyecto fijo. Se corrigieron con esperas explícitas y la lectura del ID activo. La ejecución final es verde.

## Evidencia
- **PASS_REAL:** [CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869), job completo.
- **PASS_REAL:** Chromium valida snapshot antes de cada uno de los cinco tipos de borrado, preservación de referencias, borrado del universo más snapshots, límite real y rechazo de borrado al tope.
- **PASS_STATIC:** 18 pruebas de esquema; sintaxis JavaScript; estructura, enlaces locales e IDs únicos.
- **FAIL_REAL durante la iteración, corregido:** condiciones de carrera en aserciones asíncronas e ID fijo en la prueba de snapshot. El workflow final pasó.
- **NOT_RUN:** revisión visual/manual en Windows 11.

## Límites pendientes
- El borrado de un universo completo continúa siendo irreversible. El aviso es explícito y probado, pero no equivale a una papelera.
- Al llegar a 25 snapshots, hay que borrar una copia antigua desde el gestor antes de ejecutar otro borrado de entidad.
- La prueba manual en Windows 11 permanece pendiente.

## Siguiente tarea activa
**WF-004-C.3 — Papelera y recuperación de universos completos eliminados.**

**TIMER inicial: 3–5 horas.** Inspeccionar el contrato de `deleteProject`, la transacción de IndexedDB y los snapshots; definir borrado reversible por ID con restauración del mismo universo y una política explícita de borrado permanente. Probar que restaurar no afecta universos con nombres similares y que la papelera no confunde IDs.

## Progreso global
**Estimación: 19%** de la visión completa, ponderada por alcance y no por líneas de código ni cobertura. Las protecciones locales principales de snapshots están verificadas automáticamente; papelera, generadores narrativos, Novel Studio completo, Continuity Guard integral e integración con BotImagen siguen pendientes.

## Inicio de la próxima sesión
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Consultar HEAD, CI y PR vivos antes de escribir. Mantener una tarea activa y no fusionar PR ni tocar `main` sin autorización.
