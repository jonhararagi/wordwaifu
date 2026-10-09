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

WF-004-B.1 — Registro de proyectos locales y selector de universos. Leer docs/DONE.md y docs/STATUS.md para alcance, evidencia y criterios actuales.

## Roles del asistente en WordWaifu: Cerebro + Obrero

Para este repositorio el asistente puede cubrir ambos papeles, pero no debe mezclarlos dentro de una tarea sin límites:

### Cerebro — planificación y auditoría
- Leer primero este protocolo, docs/MASTER_VISION.md, docs/STATUS.md, docs/PRODUCT_VISION.md y docs/ROADMAP.md.
- Verificar HEAD, rama, estado del PR y archivos afectados.
- Mantener una sola tarea activa, con alcance, criterios de aceptación, riesgos y TIMER estimado.
- Distinguir decisiones aprobadas, propuestas futuras y funciones ya verificadas.

### Obrero — ejecución
- Ejecutar únicamente la tarea definida en el plan activo.
- Mantener los cambios enfocados; añadir pruebas y documentación cuando proceda.
- No declarar una función terminada solo porque el código compile.
- No incorporar ampliaciones de alcance no necesarias para la tarea actual.

### Entrega y continuidad
- Registrar HEAD BEFORE y HEAD AFTER, rama, archivos modificados, commits, pruebas y clasificación de evidencia.
- Actualizar STATUS.md y los documentos pertinentes antes del reporte final.
- Si la sesión se interrumpe, volver a inspeccionar el HEAD actual y leer STATUS.md antes de retomar. No repetir una escritura si ya quedó confirmada en Git.
- No integrar ni cerrar un PR, ni modificar main, sin autorización explícita del usuario.

La visión consolidada y los límites de producto están en docs/MASTER_VISION.md. Este flujo se aplica a WordWaifu y no reemplaza las reglas que el usuario haya establecido para otros repositorios.



## Regla obligatoria de cierre y punto de reanudación: docs/DONE.md

En cada tarea de trabajo en este repositorio, el último paso de persistencia debe **sobrescribir el contenido de `docs/DONE.md`** para representar el punto de continuidad más reciente. No usar DONE.md como un archivo interminable de tareas históricas.

El documento debe comenzar con `DONE` o `PARTIAL` para indicar el resultado real, e incluir:
- ID de tarea y alcance ejecutado.
- HEAD BEFORE, HEAD de código validado y HEAD actual al cerrar.
- Rama, estado/URL del PR y confirmación de si main se mantuvo intacta.
- Archivos/cambios, commits, CI y pruebas con etiquetas PASS_REAL, PASS_STATIC, FAIL_REAL, PARTIAL, NOT_RUN o UNKNOWN.
- Limitaciones y funciones aún no implementadas.
- Estimación TIMER para la siguiente tarea.
- Siguiente ID de tarea, criterios de aceptación y comandos/ubicación de inicio.
- Porcentaje global estimado, con explicación de que es aproximado y ponderado por alcance.

La próxima sesión debe leer `docs/DONE.md` junto a `docs/STATUS.md`, `docs/WORK_PROTOCOL.md` y `docs/MASTER_VISION.md`, inspeccionar el HEAD actual y continuar desde la tarea anotada. Nunca confiar únicamente en un SHA antiguo ni repetir una escritura que ya fue confirmada.

No marcar la tarea como DONE si su gate global aún tiene criterios pendientes; en ese caso registrar la subtarea como DONE y el trabajo mayor como PARTIAL.


## Investigación técnica comparativa
Cuando una tarea involucre arquitectura o UX, revisar implementaciones públicas comparables si aporta valor; separar patrones observados de hipótesis. Registrar fuente, fecha, aprendizaje y decisión propia en `docs/TECHNICAL_RESEARCH.md`. Usar referencias para aprender, no copiar código, diseños ni contenido. Priorizar invariantes verificables: IDs estables, referencias validadas, compatibilidad de importación y eliminación explícita de enlaces.
