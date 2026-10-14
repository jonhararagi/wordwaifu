# Story Forge — propósito y contrato funcional

## Propósito principal

**WordWaifu existe para convertir una idea narrativa en una historia planificable, editable y verificable, desde la primera premisa hasta el último capítulo.** No debe limitarse a archivar fichas: conecta personajes, personalidad, mundo, poderes y sus costes, compañeros y coprotagonistas, antagonistas, vínculos afectivos, heridas emocionales, conflictos, progresión, caída, clímax y consecuencias.

El ciclo de trabajo es:

**Idea → elenco y mundo → reglas y conflictos → índice completo → resúmenes por capítulo → manuscrito → auditoría de continuidad → revisión y desenlace.**

El usuario conserva el control creativo. Los generadores locales proponen estructuras y preguntas; no presentan plantillas como si fueran prosa literaria terminada ni deciden el canon sin permiso.

## Flujo de creación

1. Definir título, sinopsis, premisa y conflicto central.
2. Describir el mundo: reglas, recursos, instituciones, dinámicas y límites de los poderes.
3. Definir protagonista, coprotagonistas y compañeros; para cada uno, registrar objetivo, personalidad, voz, valores, defectos, miedo, contradicciones y arco.
4. Diseñar la fuerza opositora: objetivo, justificación, recursos, límites y capacidad de adaptación.
5. Añadir, si corresponde, romance, amistades, rivalidades, trauma, recuperación y subtramas.
6. Elegir entre 1 y 500 capítulos y un tipo de final: cerrado, abierto, agridulce o cliffhanger.
7. Generar un índice editable: cada capítulo obtiene título, función dramática y resumen.
8. Desarrollar el manuscrito capítulo a capítulo; preservar texto existente cuando se regenere el índice.
9. Auditar campos ausentes y revisar causalidad, progresión, reglas, costes y continuidad antes de marcar una obra completa.

## Estructura narrativa inicial

La distribución se adapta al número de capítulos; los porcentajes son orientativos, no una fórmula rígida.

- **Presentación (aprox. 0–12 %):** situación inicial, mundo, elenco, deseos, primera anomalía y detonante.
- **Progreso y complicaciones (12–35 %):** aprendizaje, alianzas, victorias parciales, límites de habilidades y reacción del antagonista.
- **Escalada y punto medio (35–55 %):** mayores riesgos, pistas, revelaciones, conflictos entre aliados y revisión del objetivo.
- **Falsa seguridad y caída (55–76 %):** una victoria aparente alimenta un punto ciego; decisiones anteriores tienen un coste, se quiebran apoyos y el elenco debe asumir responsabilidades.
- **Reconstrucción y clímax (76–92 %):** estrategia nueva basada en lo aprendido, cooperación, renuncias y confrontación del conflicto central.
- **Desenlace (92–100 %):** consecuencias, cambios de relaciones y mundo, y resolución coherente con el final elegido.

Cada resumen debe orientar al autor sobre la función del capítulo y pedir una acción concreta, obstáculo, decisión, precio y cambio. No basta con repetir “la trama avanza” ni con hacer más fuerte al protagonista sin límites o consecuencias.

## Finales

- **Cerrado:** resolver el conflicto principal y mostrar qué cambió.
- **Abierto:** resolver el arco inmediato, pero dejar una pregunta o ruta futura deliberada.
- **Agridulce:** alcanzar una resolución con una pérdida significativa o irreversible.
- **Cliffhanger:** terminar con una revelación o crisis preparada; no reemplazar el desarrollo por un corte arbitrario.

## Fuentes, wikis y contenido original

Los resúmenes de obras existentes pueden apoyarse en wikis comunitarias como punto de partida, pero se deben etiquetar como resúmenes de referencia, distinguir de fuentes primarias cuando importe verificar el canon y no copiarlos como si fueran texto original propio. Los capítulos nuevos, personajes originales, mundos alternativos y desarrollos creados para una historia deben identificarse como material del autor. Una wiki no convierte automáticamente una afirmación en fuente oficial.

## Funciones implementadas en el editor

- Planificador de capítulos (1–500) y selector de tipo de final.
- Generador determinista de títulos, funciones dramáticas y resúmenes por capítulo en seis etapas.
- Campos de elenco, personalidad/voz, antagonista, romance y trauma/recuperación.
- Auditoría básica de índice, premisa, conflicto y definición de personajes/fuerza opositora.
- Preservación de manuscritos, IDs y estados existentes cuando se regenera el índice.
- Importación y exportación Markdown de los metadatos de planificación.

## Límites explícitos

La generación es local y basada en reglas; no es un modelo lingüístico y no redacta por sí sola capítulos literarios completos. La auditoría es una comprobación estructural, no una garantía de calidad, originalidad, continuidad perfecta o plausibilidad emocional. El usuario debe revisar y editar las propuestas.

## Criterio de aceptación

La función se considera operativa cuando puede generar el número solicitado de capítulos, conservar texto ya escrito, distinguir tipos de final, guardar y recuperar los campos narrativos, exportarlos/importarlos y ejecutar las pruebas de navegador sin regresiones.
