# WordWaifu · Protocolo del bot obrero para investigar lore

## Objetivo

Construir una enciclopedia útil, visual y navegable a partir de investigación incremental. No entregar fichas vacías con dos frases si hay fuentes accesibles. El bot obrero debe buscar el material disponible, citar de dónde sale cada dato y enriquecer el repositorio por tandas pequeñas que puedan probarse.

## Flujo obligatorio por tanda

1. **Recuperar lo que ya existe.** Inspeccionar commits, notas, fuentes, catálogos, artículos Markdown, archivos de personajes y resultados previos antes de empezar de cero. Comparar la nueva tanda contra el corpus existente y reutilizar IDs estables.
2. **Investigar en varias fuentes.** Empezar por páginas oficiales de la franquicia y editoriales, cronologías oficiales, páginas de adaptación, índices o sinopsis de novelas. Usar wikis comunitarias en español e inglés para descubrir personajes, relaciones, alias, acontecimientos, habilidades, galerías y referencias; usar sus bibliografías para encontrar volúmenes o capítulos primarios.
3. **Separar niveles de evidencia.** Etiquetar cada dato como fuente primaria/oficial, referencia comunitaria, inferencia explícita o pendiente de verificar. No presentar una wiki como oficial; no asumir que los resúmenes de la adaptación son canon de todas las novelas.
4. **Redactar una síntesis propia.** No copiar artículos completos ni secciones largas. Crear párrafos originales, directos y suficientemente informativos, con enlaces al texto de origen. Preservar fechas, continuidad, spoilers y las limitaciones de la fuente.
5. **Construir el grafo.** Las relaciones deben tener IDs de origen/destino, continuidad, periodo, tipo de vínculo, frase explicativa y al menos una referencia de evidencia. Distinguir afiliación compartida, liderazgo, tutoría, compañerismo, amistad, conflicto e interacción individual. La pertenencia a una misma Familia no prueba por sí sola una amistad.
6. **Añadir momentos y cronología.** Priorizar de 3 a 7 acontecimientos relevantes por personaje cuando las fuentes lo permitan. Cada momento necesita contexto, participantes confirmados, periodo y evidencia. No inventar fechas exactas ni convertir una sinopsis en una escena novelada.
7. **Añadir imágenes responsablemente.** Priorizar retratos originales, autorizados o licenciados. Registrar autoría/procedencia/licencia y conservar el enlace de origen. Las imágenes oficiales, fanart y capturas de una wiki pueden tener titulares distintos al texto; no descargarlas al repositorio sin comprobar las condiciones. Mientras no haya permiso, enlazar a una galería externa en vez de reutilizar sus archivos.
8. **Implementar la lectura escalonada.** Mostrar primero una descripción clara de 2–4 frases; incluir «Más info» para abrir una ventana con resumen ampliado, contexto, relaciones, momentos y referencias. No esconder las fuentes detrás de una única URL en idioma que el usuario no comprende: ofrecer referencia secundaria en español cuando exista y etiquetar la fuente primaria por idioma.
9. **Probar e informar.** Actualizar pruebas del modelo, búsqueda, servidor y Chromium según el cambio. Ejecutar CI real cuando esté disponible. Informar el SHA, lista de archivos, referencias usadas, resultados exactos, limitaciones y próximo lote. No declarar PASS si el test no fue ejecutado.

## Jerarquía de fuentes sugerida

- **A · Primaria:** novela/volumen/capítulo con localizador, publicación oficial del autor/editorial, web oficial o guía oficial.
- **B · Oficial de adaptación:** web del anime, perfiles de personajes o materiales de una versión concreta. Debe etiquetarse como adaptación.
- **C · Comunitaria:** wiki de fans con sección concreta y referencias consultables. Es una pista de investigación y una fuente secundaria, no un reemplazo automático del material primario.
- **D · No verificado:** resultado de búsqueda sin contenido verificable, redes, foros, fanon, teorías o memoria no contrastada. No usar como hecho canónico.

Si hay discrepancias de transliteración o nombres (por ejemplo, «Alise Lovelace» frente a «Alise Lovell» en la referencia comunitaria en español), conservar el ID estable, registrar el conflicto y cotejar fuentes antes de normalizarlo. No borrar el conflicto en silencio.

## Plantilla de ficha completa

- Identidad, alias y transliteraciones con su origen.
- Continuidad/estado temporal y afiliaciones.
- Resumen rápido y motivaciones.
- Personalidad y conducta: hechos expresos separados de inferencias.
- Personas relacionadas y la naturaleza exacta de cada vínculo.
- Entre 3 y 7 momentos importantes si hay evidencia suficiente.
- Cronología con anclas temporales comprobables.
- Habilidades, límites y cambios de estado cuando estén documentados.
- Fuentes oficiales y comunitarias, con idioma y nivel de autoridad.
- Galería: archivos locales autorizados u originales; de lo contrario, enlace a galería externa.
- Apartado «Qué falta confirmar» visible cuando la ficha siga incompleta.

## Próximas tandas registradas

1. **Astrea Familia:** verificar con material primario la historia y los vínculos de Gojouno Kaguya y Lyra; investigar Iska Bra, Maryuu Reage, Neze Rankett, Noin Unic, Ryana Lietz, Celty Srowa y nombres asociados al roster comunitario.
2. **Ryu Lion:** investigar su red a través de Astrea Record y la novela principal sin mezclar estados; añadir a Syr, Mia y Bell solo en continuidades/periodos con referencias apropiadas.
3. **Personajes principales:** profundizar Bell, Hestia, Ais, Eina, Finn, Freya y Ottar con citas de volúmenes/escenas, habilidades, evolución, relaciones y spoilers.
4. **Fuentes visuales:** verificar licencias o reemplazar referencias externas por arte original/local autorizado.
5. **Calidad de corpus:** resolver el alias de Alise, normalizar nombres y comparar la información presente en las notas antiguas del usuario con el contenido actual antes de eliminar o resumir material previo.

## Límites de publicación

Esta enciclopedia es una ayuda de investigación y no concede permiso para explotar material ajeno. La atribución y una posible retirada no sustituyen una licencia. No fusionar, publicar GitHub Pages ni anunciar autorización comercial sin aprobación del titular del proyecto y revisión adecuada.
