# WF-004-C.3 — Plan de prueba de cuota y revisión Windows 11

Estado: **PLAN DOCUMENTADO / EJECUCIÓN PENDIENTE**  
Rama: `work/wf-004-c3-project-trash`  
Objetivo: separar de forma inequívoca las pruebas de fallos simulados de una prueba de cuota real, y dejar un procedimiento reproducible para la revisión manual en Windows 11.

## Reglas de evidencia

- `PASS_SIMULATED`: se inyectó una excepción compatible con `QuotaExceededError`. Demuestra el manejo del error, no que el navegador agotó su cuota.
- `PASS_REAL`: el navegador produjo una condición real de cuota insuficiente y se verificó el estado persistido antes/después.
- `NOT_RUN`: el entorno no permite realizar la comprobación.
- Nunca llenar el perfil habitual del navegador ni usar datos personales para provocar agotamiento. Ejecutar únicamente en un contexto/perfil desechable con una base de datos y claves de almacenamiento de prueba.
- No marcar WF-004-C.3 como completo mientras falte la revisión visual de Windows 11 o una decisión explícita de que el gate real de cuota no puede ejecutarse en CI y queda asignado a verificación manual.

## A. Prueba automatizada segura de fallo simulado

La prueba debe usar un nombre de base IndexedDB y una clave localStorage únicos para cada ejecución, crear dos proyectos de prueba y guardar una copia serializada de su estado inicial. Para simular la cuota, envolver el objeto de almacenamiento inyectado con un adaptador de prueba cuyo `setItem()` lance un `DOMException("Quota exceeded", "QuotaExceededError")`; no modificar el almacenamiento global del navegador ni parchear APIs de producción.

Comprobar, según la operación probada:

1. La promesa/resultado indica el fallo y no comunica éxito.
2. El estado anterior de IndexedDB y el registro de papelera permanecen coherentes; no hay restauración parcial ni eliminación irreversible silenciosa.
3. El respaldo previo en localStorage se conserva si la escritura nueva falla.
4. Un segundo proyecto con ID diferente permanece intacto, aunque tenga el mismo nombre visible.
5. La prueba limpia exclusivamente su base de datos y sus claves temporales, incluso si falla una aserción.

Si la API actual no permite inyectar el adaptador sin cambiar el contrato de producción, añadir un seam pequeño y explícito para pruebas; no agregar una opción de producción que permita al usuario desactivar las guardias de persistencia. La prueba debe distinguir claramente `PASS_SIMULATED` en el log.

## B. Evaluación de cuota real

Primero comprobar si el navegador/runner ofrece una API soportada para estimar cuota y uso (por ejemplo, `navigator.storage.estimate()`). Esta estimación por sí sola no acredita una excepción real. Solo intentar una prueba de escritura real en almacenamiento aislado y desechable si el entorno puede limitar el daño y limpiar de forma fiable los datos.

- Registrar navegador, versión, sistema operativo, estimación disponible y método exacto.
- Capturar el error real, si ocurre, y verificar el estado antes/después.
- Si no puede provocarse de manera segura o reproducible, registrar `NOT_RUN` con la razón y mantener el gate abierto. No llenar el disco, no llenar el perfil personal y no confundir una excepción inyectada con cuota agotada.

## C. Revisión manual en Windows 11

En un perfil de navegador de prueba y con la rama revisada:

- [ ] Abrir la aplicación desde el servidor local documentado por el proyecto; confirmar que carga sin errores de consola.
- [ ] Crear dos universos con nombres iguales e IDs diferentes.
- [ ] Añadir un snapshot al universo A y crear/guardar el universo B.
- [ ] Enviar A a la papelera, comprobar que desaparece del catálogo/búsqueda y que su snapshot se conserva.
- [ ] Restaurar A por su ID y comprobar que recupera sus datos y snapshots; verificar que B no cambia.
- [ ] Enviar A de nuevo a la papelera y borrarlo permanentemente desde la acción separada con confirmación.
- [ ] Confirmar que el borrado de A no elimina ni altera B ni su respaldo.
- [ ] Probar un fallo de escritura simulado y confirmar mensaje explícito, sin falsa confirmación de éxito.
- [ ] Recargar la aplicación y verificar persistencia del estado final.
- [ ] Guardar versión de Windows, navegador, fecha, pasos, resultados y capturas sin datos privados.

## Criterio de salida

La prueba simulada puede cerrar únicamente el gate de manejo de error simulado. La cuota real debe quedar como `PASS_REAL` con evidencia o `NOT_RUN` justificado. La revisión Windows debe tener un informe ejecutado o permanecer `NOT_RUN`. Hasta entonces, el estado global de WF-004-C.3 sigue siendo **PARTIAL**.
