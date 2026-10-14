# WordWaifu Story Foundry — generador de historias

## Razón principal del producto

WordWaifu existe para ayudar a convertir una idea en una historia desarrollable y coherente. No debe quedarse en un catálogo de fichas: personajes, mundos, poderes, relaciones, acontecimientos y capítulos tienen que alimentar un flujo de creación que termine en un índice de novela editable y, después, en un manuscrito.

## Flujo objetivo

1. **Idea y referencias:** premisa, género, tono, resumen de referencia y límites creativos.
2. **Sinopsis y conflicto:** qué quiere el protagonista, qué se lo impide, qué está en juego y qué vuelve singular al mundo.
3. **Elenco:** protagonista(s), compañeros, coprotagonistas, rivales, antagonistas, villanos e intereses amorosos; cada cual con personalidad, objetivos, defectos, límites, agencia y relaciones.
4. **Mundo y sistemas:** reglas sociales, culturas, lugares, facciones, poderes/tecnología, activación, costes, límites y progresión.
5. **Arcos y estructura:** presentación, progreso, falsa seguridad, caída, replanteamiento, clímax y consecuencias.
6. **Índice por capítulos:** preguntar cuántos capítulos tendrá la obra y si el final será abierto o cerrado. Generar un resumen de cada capítulo y permitir editarlo antes de redactar.
7. **Manuscrito:** expandir cada resumen a escenas y capítulos, guardar borradores y revisiones.
8. **Continuidad:** revisar reglas, estado de personajes, relaciones, heridas, recursos, pistas y consecuencias antes de aprobar cambios como canon.

## Función implementada en este cambio

El editor de «Historias y novelas» incluye un generador local de estructura por reglas. Pide la cantidad de capítulos (1–500), tipo de final, protagonistas, elenco, romance, traumas y un resumen de referencia opcional. Crea capítulos con estado `outline`, sin inventar que ya existe un manuscrito.

El índice reparte el arco entre:

- Presentación y detonante.
- Progreso, vínculos y primeras victorias.
- Techo provisional y falsa seguridad.
- Caída, consecuencias y replanteamiento.
- Clímax y decisión irreversible.
- Resolución y nueva situación.

Las fases se ajustan a la cantidad elegida, tienen rangos contiguos y no se solapan. Un final cerrado resuelve el conflicto principal y sus promesas; uno abierto resuelve al menos un arco inmediato, pero deja una pregunta deliberada. Si ya hay capítulos con manuscrito o estado editorial, el generador los conserva y añade el nuevo índice después de ellos; si solo hay esquemas vacíos, puede sustituirlos por el nuevo plan.

## Resúmenes de wiki y obras de referencia

Un resumen de wiki puede usarse como **contexto de referencia**, especialmente para describir una obra existente o resumir sus personajes, mundo y acontecimientos. Debe conservarse la procedencia y distinguir:

- **Hecho de la obra fuente:** dato atribuido a una novela, episodio, juego, guía o wiki concreta.
- **Interpretación:** lectura o inferencia editorial, no necesariamente confirmada por el autor.
- **Propuesta original:** personaje, escena, poder, relación o giro nuevo que WordWaifu propone para la historia del usuario.

No presentar una invención como canon ni un resumen comunitario como fuente primaria. Los resúmenes deben ser suficientemente transformativos y breves para el propósito, citar la fuente cuando corresponda y evitar reproducir capítulos, diálogos o escenas protegidas. La disponibilidad de una wiki no demuestra por sí sola que una afirmación sea correcta.

## Límites actuales

- El generador de índice es local y basado en reglas; no llama a una IA ni redacta automáticamente capítulos completos.
- Los resúmenes generados son propuestas iniciales que el autor debe revisar, editar y aprobar.
- La generación integral de personajes, antagonistas, poderes, mundo y manuscrito en un flujo único, así como la auditoría de continuidad entre capítulos, son trabajo posterior.
- No se marca un capítulo como completo ni un dato como canon solo porque lo haya producido un generador.
- Las referencias a franquicias ajenas no conceden derechos sobre sus personajes, ilustraciones o textos.

## Verificación

La prueba `tests/test_story_structure_generator.cjs` valida límites de capítulos, fases sin huecos ni solapamientos, resumen de referencia, final abierto/cerrado y el caso límite de un solo capítulo. La prueba se ejecuta en GitHub Actions mediante `.github/workflows/validate.yml`.
