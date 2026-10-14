# WordWaifu Story Foundry — contrato funcional

## La razón principal por la que existe WordWaifu

WordWaifu debe convertir una idea en un universo coherente y, después, en una historia desarrollada. No es solo una wiki ni una colección de fichas: es un taller de creación narrativa que conecta mundo, personajes, relaciones, poderes, conflictos, capítulos y continuidad. La wiki aporta referencias y resúmenes consultables; el generador transforma las decisiones del usuario en una estructura narrativa nueva, editable y trazable.

Flujo principal: **Idea → mundo → elenco → conflictos → arcos → índice de capítulos → borradores → revisión de continuidad → manuscrito.**

Debe servir para ficción original y fanfiction. En fanfiction, las fichas y resúmenes pueden seguir información publicada en wikis de referencia, pero WordWaifu debe distinguir dato de canon, interpretación, propuesta del usuario y contenido generado. Los resúmenes se redactan con palabras propias, enlazan fuentes cuando sea posible y no convierten teorías comunitarias en hechos oficiales.

## Experiencia principal del generador

1. Elegir proyecto y tipo de historia: universo existente, original o mezcla deliberada.
2. Definir escala: preguntar cuántos capítulos quiere la persona (1–500; accesos rápidos sugeridos: 10, 22, 30, 50 y 100).
3. Elegir cierre: final cerrado, abierto o final de arco con continuación opcional.
4. Crear o seleccionar mundo: época, lugares, reglas, culturas, facciones, historia, recursos y límites.
5. Crear elenco: protagonista(s), compañeros/coprotagonistas, mentor, rival, villano/antagonista, secundarios e intereses amorosos opcionales. Fichas con deseo, necesidad, personalidad, valores, contradicción, pasado, trauma, vínculos y arco.
6. Diseñar capacidades: poderes, talentos, equipo y recursos con condiciones, límites, costes, contramedidas, evolución y consecuencias.
7. Construir conflicto: meta externa, necesidad interna, antagonismo, riesgo, plazo, obstáculo y consecuencias del fracaso.
8. Generar índice: resumen por capítulo, arco, objetivo dramático, cambio de estado, personajes, lugares y preguntas de continuidad. Regenerar un arco o capítulo sin perder el resto.
9. Expandir a prosa: seleccionar capítulos, extensión, punto de vista, tiempo verbal, tono y límites de contenido. No presentar un índice como si fuera prosa completa.
10. Auditar y exportar: comprobar nombres, fechas, lugares, poderes, heridas, relaciones, promesas y consecuencias; exportar Markdown y JSON.

## Estructura de arcos adaptativa

Los rangos se calculan según la cantidad solicitada, sin fijar siempre los capítulos 1–10, 11–22 o 23–30 ni dejar rangos vacíos en historias cortas.

- **Presentación y detonante (0–10 %):** mundo, protagonista, situación inicial y problema que rompe el equilibrio.
- **Progreso y primeras consecuencias (10–30 %):** objetivos, reglas, aliados, obstáculos y avances medibles.
- **Expansión y complicaciones (30–50 %):** ampliar mundo y relaciones; revelar costes y complejidad.
- **Cima aparente y falsa seguridad (50–67 %):** parece que el protagonista domina la situación, pero una debilidad sembrada o el exceso de confianza provoca el retroceso.
- **Caída y replanteamiento (67–80 %):** pérdida o derrota; revisar estrategia y asumir responsabilidad.
- **Nueva estrategia y confrontación (80–94 %):** aplicar aprendizajes y enfrentar el núcleo del conflicto.
- **Clímax y resolución (94–100 %):** decisión decisiva, consecuencias, cambio y cierre.

Son guías, no leyes. Comedia episódica, misterio, romance e historias corales necesitan plantillas adaptadas. En una serie larga, cada arco debe tener una pregunta dramática y una recompensa parcial.

## Datos mínimos de cada capítulo

- ID estable, número y título editable.
- Arco narrativo, resumen propio y objetivo dramático.
- Personajes, lugares y acontecimientos implicados.
- Cambio al comienzo y al final del capítulo.
- Semillas, revelaciones y preguntas abiertas.
- Estado: outline, draft, revised o complete.
- Fuentes de canon cuando correspondan y notas del autor.

## Contrato de calidad

- No inventar hechos canónicos en expedientes documentales.
- Separar citas, hechos, interpretación, fanon y propuestas.
- No forzar romance, trauma o poderes si el usuario los deja opcionales.
- La evolución debe tener costes, retrocesos, decisiones y consecuencias.
- La falsa seguridad se gana con señales previas; la caída no es arbitraria.
- Un final cerrado resuelve la promesa principal; uno abierto deja una pregunta intencional, no un cierre accidentalmente incompleto.
- Los resúmenes basados en wikis son síntesis originales; guardar URL, nombre de fuente y fecha de consulta cuando se usen referencias externas.
- Canon, fanfiction y creación original se etiquetan por separado.

## Estado de implementación

El módulo generador, las pruebas automatizadas, la integración visual y la persistencia estructurada deben registrarse por separado. Un documento de diseño no significa que una función esté implementada ni probada.
