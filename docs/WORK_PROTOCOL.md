# Protocolo de trabajo WordWaifu

## Objetivo permanente

Construir un único taller narrativo local. Toda tarea debe fortalecer al menos uno de estos elementos: canon común, atlas interactivo, presencia temporal, fichas enlazadas, generadores por reglas, planificación de historias o continuidad.

No abrir módulos nuevos por entusiasmo si el circuito principal todavía no funciona.

## Ciclo obligatorio

**INSPECT → PLAN → EXECUTE → VERIFY → PERSIST → REPORT**

1. INSPECT: leer este documento, PRODUCT_VISION, STATUS, ROADMAP y los archivos afectados. Revisar la rama y el estado real.
2. PLAN: elegir una tarea activa, definir el alcance, los riesgos, los criterios de aceptación y la estimación restante.
3. EXECUTE: modificar solo lo necesario para la tarea activa.
4. VERIFY: ejecutar pruebas adecuadas; distinguir evidencia real de revisión estática.
5. PERSIST: guardar código, documentación, pruebas y estado actualizado en Git.
6. REPORT: informar rama, HEAD antes/después, archivos, cambios, pruebas, estado y próximo paso.

## Una tarea activa por agente

No acumular tareas independientes. Si una sesión se interrumpe, retomar desde STATUS.md y el último reporte de Git. Inspeccionar el estado actual antes de repetir operaciones para evitar duplicados.

## Etiquetas de evidencia

- PASS_REAL: ejecutado en el entorno objetivo y observado.
- PASS_STATIC: inspección estática o prueba que no cubre la ejecución real.
- FAIL_REAL: fallo observado en ejecución.
- NOT_RUN: no se ejecutó.
- UNKNOWN: no hay evidencia suficiente.
- PARTIAL: solo una parte está implementada o validada.

## Reglas de alcance

- No afirmar que la aplicación funciona sin ejecutar las pruebas correspondientes.
- No introducir llamadas de red en las funciones offline.
- No duplicar entidades: enlazar mediante IDs estables.
- No sustituir canon confirmado sin aprobación explícita.
- No utilizar datos de una franquicia como contenido incorporado por defecto.
- No borrar datos del usuario sin confirmación y sin explicar las consecuencias.
- Mantener exportación/importación como capacidad prioritaria.
- Si no se puede completar una tarea, registrar qué quedó hecho, qué falta, evidencia y siguiente acción exacta.

## Próxima tarea activa

WF-001 — Verificación y estabilización del Atlas MVP. Consultar docs/STATUS.md para el alcance y los criterios actuales.
