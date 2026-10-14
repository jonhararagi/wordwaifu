# WordWaifu Story Foundry — contrato funcional

## Razón principal del producto

WordWaifu existe para convertir una idea incompleta en un universo narrativo utilizable y, después, en una historia planificada que el usuario pueda escribir, revisar y exportar. No debe limitarse a guardar fichas ni a producir una sinopsis breve: debe conectar mundo, personajes, capacidades, conflictos, relaciones y consecuencias en un plan coherente.

El núcleo funciona offline y no requiere un modelo de IA ni una API. Los generadores por reglas entregan borradores editables; nunca deben presentar sus resultados como canon, hechos verificados o decisiones irreversibles.

## Flujo principal

1. **Elegir el punto de partida:** idea libre, género, tipo de mundo, obra de referencia con uso permitido o generación desde cero.
2. **Construir el mundo:** premisa, reglas físicas/mágicas/tecnológicas, culturas, instituciones, recursos, conflictos, historia, lugares y secretos. Toda capacidad importante debe tener límites y consecuencias.
3. **Generar y editar personajes:** protagonista, coprotagonistas, compañeros, rivales, antagonistas y posibles intereses amorosos. Las fichas deben incluir, según corresponda, identidad/origen, apariencia, deseo, necesidad, personalidad, virtud, defecto, miedo, secreto, capacidad, coste, relaciones y arco de cambio.
4. **Construir el sistema de poderes:** nombre y tipo, activación, alcance, coste, límites, contramedidas, progresión y consecuencias. El crecimiento mejora el dominio y las decisiones; no elimina gratuitamente las restricciones.
5. **Definir relaciones y subtramas:** amistad, rivalidad, familia, romance opcional, lealtades, conflictos de valores y objetivos independientes. El romance debe respetar la autonomía de cada personaje y no sustituir su arco propio.
6. **Definir extensión y desenlace:** el usuario elige la cantidad de capítulos y final abierto o cerrado. El planificador adapta las fases al total seleccionado, desde relatos breves hasta novelas largas.
7. **Generar el índice:** títulos, resumen individual, función dramática, objetivo, cambio, pista/revelación, conflicto, coste y consecuencia de cada capítulo. Los resúmenes no deben ser intercambiables ni repetir el mismo avance con nombres distintos.
8. **Escribir y revisar:** cada capítulo queda editable; el texto ya escrito y su estado editorial se preservan cuando se regenera el índice, salvo confirmación explícita del usuario.
9. **Comprobar continuidad y exportar:** revisar cronología, motivaciones, límites de poderes, pistas, heridas, relaciones, recursos y consecuencias antes de expandir el plan a prosa. Exportar el proyecto y el manuscrito en formatos legibles.

## Contrato del generador de personajes

El generador de personajes debe aceptar rol, tipo de mundo, semilla opcional y nombre opcional. Una misma semilla debe producir el mismo resultado, facilitando pruebas y reproducción; otra semilla puede variar la ficha. Como mínimo, el borrador incluye:

- Rol narrativo y nombre.
- Edad aproximada y especie/origen cuando corresponda.
- Apariencia y forma de hablar.
- Deseo, necesidad y miedo central.
- Virtudes y defecto que provoque decisiones concretas.
- Capacidad o competencia, límite y coste.
- Secreto u obligación que complique sus decisiones.
- Objeto distintivo o vínculo material con su pasado.
- Función en la trama y arco de cambio.
- Relaciones con objetivos propios, no meros asistentes del protagonista.

La salida se añade al campo de destino sin borrar texto existente. El usuario puede modificarla, regenerarla o descartarla.

## Contrato de planificación de capítulos

- Aceptar de 1 a 500 capítulos; normalizar entradas inválidas y mostrar la cantidad final utilizada.
- Aceptar final **cerrado** (resolver el conflicto central y mostrar consecuencias) o **abierto** (cerrar el arco principal suficiente y dejar una pregunta significativa).
- Distribuir de forma proporcional las fases de presentación, establecimiento del mundo y elenco, progreso, escalada, falsa seguridad/caída, respuesta y nueva estrategia, clímax y desenlace.
- En una historia de 30 capítulos, la falsa seguridad y la caída deben aparecer aproximadamente en el último tercio, no al comienzo ni como accidente sin preparación.
- Cada fase debe impulsar causalidad: las pérdidas nacen de decisiones, reglas, defectos o pistas previas; las soluciones se preparan con recursos sembrados antes.
- Los compañeros y antagonistas toman decisiones propias. Los intereses amorosos son opcionales.
- La evolución de poderes tiene coste, contramedidas y consecuencias. Un aumento de fuerza por sí solo no resuelve el conflicto moral o emocional.
- Regenerar un índice preserva el manuscrito escrito y el estado editorial por capítulo cuando sea posible, y avisa antes de reemplazar títulos/resúmenes existentes.

## Generadores que forman parte de la visión de WordWaifu

- **World Forge:** concepto, reglas, dinámica, culturas, instituciones, lugares, secretos y conflictos del mundo.
- **Character Forge:** protagonistas, coprotagonistas, compañeros, antagonistas, rivales e intereses amorosos.
- **Power Forge:** poderes, habilidades, objetos, costes, restricciones y progresión.
- **Relationship Forge:** vínculos, tensiones, confianza, romance opcional y consecuencias.
- **Story/Novel Forge:** premisa, sinopsis, arcos, índice, resúmenes por capítulo, escenas y borradores.
- **Continuity Guard:** comprobaciones deterministas de cronología, consistencia de personajes, reglas y causalidad.

Estos nombres describen áreas funcionales del producto, no una afirmación de que cada submódulo ya esté terminado. La interfaz y las pruebas deben identificar qué generadores están implementados y qué capacidades siguen pendientes.

## Referencias y canon

Los resúmenes de wikis pueden servir como punto de partida para investigación de canon y expedientes documentales, pero WordWaifu debe conservar URL, obra/continuidad, fecha de consulta y tipo de fuente. Debe separar claramente hechos citados, inferencias, teorías comunitarias y contenido original generado. La disponibilidad pública de una wiki no convierte automáticamente sus textos completos en material libre para redistribución.

## Criterios de aceptación

- Los botones de generación modifican los campos visibles correctos y no borran datos existentes sin confirmación.
- Los cambios se guardan en el proyecto y sobreviven a recargar la aplicación.
- Los tests cubren distintos roles de personaje, semillas, géneros/tipos de mundo, cantidades de capítulos, finales abiertos/cerrados y conservación de manuscrito.
- Los capítulos presentan una progresión legible y coherente; no basta con repetir frases genéricas.
- El usuario puede editar manualmente todos los resultados y exportar su trabajo.
- No declarar una función completa hasta que su código, pruebas automatizadas y validación de interfaz la confirmen.
