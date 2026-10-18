# WordWaifu Story Forge — contrato del generador narrativo

## Propósito principal

WordWaifu existe para convertir una idea en una historia planificada, conectada y revisable: mundo, reglas, personajes, personalidades, protagonistas y coprotagonistas, aliados, villanos, poderes y costes, relaciones, intereses amorosos, heridas y recuperación, arcos, capítulos, escenas y desenlace. No debe quedarse en un catálogo de fichas ni prometer que un esquema equivale a una novela terminada.

El ciclo de trabajo es:

**Idea → premisa y conflicto → biblia del mundo y elenco → índice de capítulos → resúmenes editables → manuscrito por capítulo → auditoría de continuidad → revisión y exportación.**

Los mismos registros deben alimentar el atlas, las fichas y la historia. No se duplicará la biografía completa en cada capítulo: los capítulos referencian a las entidades y registran qué cambia en ellas.

## Flujo de creación

1. **Definir el proyecto:** título, premisa, sinopsis, conflicto central y género/dinámica del mundo.
2. **Construir el elenco:** protagonista, coprotagonistas, objetivos independientes, personalidad, voz, defectos, motivaciones, antagonista, vínculos afectivos, heridas y apoyos.
3. **Definir reglas y recursos:** poderes, activación, costes, límites, evolución, tecnología, instituciones y recursos del mundo. Una solución no puede ignorar una regla ya establecida sin justificar el cambio.
4. **Elegir extensión y desenlace:** entre 1 y 500 capítulos; final cerrado, abierto, agridulce o cliffhanger.
5. **Generar un índice editable:** cada capítulo recibe una función dramática, un título provisional, un resumen orientativo, un giro/consecuencia y un enlace causal con el siguiente capítulo.
6. **Redactar capítulos:** el resumen no se considera manuscrito. Cada capítulo conserva su texto, estado editorial e identidad aunque se regenere el índice.
7. **Auditar:** número de capítulos, IDs únicos, títulos y resúmenes presentes, premisa/conflicto/elenco/oposición definidos y referencias consistentes.
8. **Exportar y revisar:** Markdown legible y JSON estructurado. La etiqueta «completo» es editorial; no demuestra por sí sola calidad literaria.

## Estructura dramática adaptable

El generador distribuye la estructura proporcionalmente a la cantidad elegida; los rangos no son números fijos porque una historia de 10 capítulos y una de 120 necesitan ritmos distintos.

| Tramo | Función |
|---|---|
| Presentación (aprox. 0–12 %) | Mostrar rutina, mundo, deseo, relaciones, reglas y el incidente que rompe el equilibrio. |
| Progreso y complicaciones (12–35 %) | Dar victorias medibles, entrenar recursos, profundizar vínculos y revelar límites y costes. |
| Escalada y punto medio (35–55 %) | Cambiar la interpretación de los hechos, elevar riesgos y obligar a revisar el objetivo. |
| Falsa seguridad y caída (55–76 %) | La victoria aparente alimenta un punto ciego; decisiones previas provocan pérdidas y deterioro. |
| Reconstrucción y clímax (76–92 %) | Aplicar lo aprendido, dar agencia al elenco y resolver el conflicto con un precio preparado. |
| Desenlace (92–100 %) | Mostrar consecuencias y el cambio real de personajes, relaciones y mundo. |

Para una historia de 30 capítulos esto suele equivaler aproximadamente a presentación en los capítulos 1–4, progreso en 5–11, escalada en 12–17, caída en 18–23, clímax en 24–27 y desenlace en 28–30. El reparto exacto depende del número solicitado.

### Contrato de los finales

- **Cerrado:** resuelve el conflicto principal y muestra sus consecuencias.
- **Abierto:** responde el arco inmediato, pero deja una pregunta o consecuencia preparada por pistas previas.
- **Agridulce:** resuelve el conflicto mediante una victoria con una pérdida irreversible y causal.
- **Cliffhanger:** termina con una decisión/revelación preparada que cambia el tablero; no usa el corte abrupto como sustituto del desarrollo.

## Resúmenes de obras existentes y material original

Los resúmenes de obras publicadas pueden apoyarse en sinopsis de editoriales, wikis o enciclopedias comunitarias cuando sean útiles. Deben guardarse como **referencia externa**, con URL, fecha de consulta, autoría/procedencia cuando esté disponible y estado de certeza. Una wiki comunitaria no equivale automáticamente a una fuente oficial.

El material nuevo del usuario debe distinguirse de esa referencia: **canon de la obra consultada**, **resumen de referencia**, **hipótesis/interpretación** y **contenido original propuesto** son estados diferentes. El generador no debe convertir una propuesta inventada en un dato canónico ni presentar un resumen de wiki como texto original de WordWaifu.

## Límites actuales del generador

El generador implementado es local y determinista. Produce una estructura editable contextualizada por los campos que el autor haya completado; no utiliza IA ni una API, y no escribe automáticamente capítulos literarios completos. Si faltan premisa, conflicto, elenco o antagonista, la salida seguirá siendo una propuesta incompleta y la auditoría debe advertirlo. La generación de prosa completa y la auditoría profunda de continuidad son etapas separadas, no deben fingirse como terminadas.

## Criterios de aceptación del índice

- La cantidad coincide exactamente con la elegida.
- Los IDs existentes, manuscritos y estados editoriales se conservan al regenerar.
- Cada capítulo tiene una función y un resumen contextualizado, no solo un título genérico.
- El último capítulo refleja el contrato de final seleccionado.
- La auditoría detecta recuento incorrecto, títulos/resúmenes vacíos, IDs duplicados y datos centrales ausentes.
- La exportación conserva metadatos, estructura, resúmenes y manuscritos.
- El autor puede editar o descartar cualquier propuesta; la estructura generada no es canon obligatorio.