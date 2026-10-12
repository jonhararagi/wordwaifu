# Explorador conectado y catálogo de poderes

## Qué hace la aplicación

WordWaifu incorpora dos herramientas que comparten el objetivo de mantener la información conectada, en lugar de obligar a copiar metadatos entre notas:

- **Explorador de universos**: busca por nombre, alias, rasgo, organización o concepto; muestra las conexiones desde cada ficha, atribuye la fuente de cada vínculo y mantiene una ruta navegable con migas de pan, Atrás e Inicio.
- **Poderes y habilidades**: registra cada poder en una entidad independiente con ID estable, categoría, perfil, descripción, activación, coste, límites, evolución, consecuencias, pacto, dueño, historia asociada, inspiración, fuente, estado e indicador de irreversibilidad.

El catálogo de poderes se almacena en project.powers y forma parte de la validación, del guardado del proyecto y de la exportación/importación JSON. ownerCharacterId y storyId apuntan a entidades existentes del proyecto; si se elimina su dueño o historia, el poder se conserva y la referencia correspondiente se limpia. Los proyectos antiguos se normalizan con powers: [].

El antiguo campo de texto story.powerCatalog se conserva para no romper historias existentes. No se convierte silenciosamente a registros nuevos porque dividir texto libre en poderes separados puede alterar su significado. Los poderes nuevos deben guardarse en **Poderes y habilidades**.

## Navegación de ejemplo

El grafo permite seguir el recorrido solicitado:

1. Buscar **Ryu Lion**.
2. Abrir **Alise Lovelace** desde las conexiones de Ryu.
3. Regresar a Ryu con **Atrás**, o volver al índice con **Inicio**.
4. Abrir **Astrea Familia** para ver la deidad, integrantes enlazados y contexto histórico.
5. Seguir desde ahí a **Astrea**, a la cronología o a otro personaje, sin convertir una coincidencia de afiliación en una supuesta amistad íntima.
6. Pasar por **Orario** para abrir las rutas hacia Hestia, Loki, Freya o Hephaistos Familia.
7. Consultar **Astrea deja Orario** y llegar a **Solingen**. El motivo y el destino se muestran como referencia secundaria, pendientes de cotejo con el volumen/capítulo/página original.

Los enlaces muestran el tipo de conexión, su continuidad y calidad de fuente. Se mantienen separadas referencias de **Astrea Record (CONT-AR)** y la etapa del anime (CONT-ANIME); un vínculo no se copia de una etapa a otra sin indicarlo.

## Cobertura de franquicias

### DanMachi

El explorador reutiliza el registro de 58 personajes de adaptación oficial que ya mantenía src/official-character-roster.js y agrega nodos para Familias, Orario, Dungeon/Falna y un marco histórico inicial. Las conexiones curadas incluyen a Ryu, Alise, Astrea, Kaguya, Lyra y Astrea Familia.

Esto es una capa de navegación y referencia, **no el 100 % del canon ni una transcripción completa de las novelas**. El corpus textual de evidencia (src/lore-corpus.js y lore/danmachi/) sigue siendo parcial. Las descripciones oficiales de adaptación no sustituyen escenas o localizadores de novela. La historia detallada de la caída y disolución de Astrea Familia todavía requiere completar evidencias primarias por volumen; donde se emplea una wiki comunitaria, la ficha lo advierte.

Fuentes de referencia:
- [DanMachi IV — perfiles oficiales de personajes](https://danmachi.com/danmachi4/character/)
- [Cronología oficial de DanMachi](https://danmachi.com/chronology/)
- [GA Bunko — material editorial de Astrea Record](https://ga.sbcr.jp/special/danmachi/astrea/)

### Code Geass

Code Geass ya tiene una **capa de canon ampliada**, no solo un listado de nombres. Incluye perfiles narrativos conectados para Lelouch, C.C., Suzaku, Kallen, Nunnally, Shirley, Euphemia, Cornelia, Schneizel, Charles, Rolo, Mao, V.V., Nina, Marianne y Jeremiah; además de Britannia, Black Knights, Geass Order y Knights of the Round.

Cada perfil contempla personalidad observable, historia, relaciones, conflicto, objetivo, valores, miedo/contradicción, arco y **qué sabe el personaje en cada etapa**. La sección de poderes distingue el Geass de obediencia de Lelouch, la suspensión temporal percibida de Rolo, la lectura mental de Mao, la alteración de recuerdos de Charles y el Código/inmortalidad. No se trata a todos los Geass como una habilidad uniforme: las fichas tienen activación, coste, límites y consecuencias propios.

El grafo conecta relaciones personales, facciones, poderes y acontecimientos como la Zona Administrativa Especial de Japón, la Rebelión Negra, la segunda batalla de Tokio/FLEIJA y Zero Requiem. Se muestran los enlaces a perfiles y episodios oficiales de R1/R2. Los spoilers mayores llevan etiqueta; las etapas televisivas se mantienen separadas de la continuidad cinematográfica Re;surrection.

Fuentes oficiales de referencia:
- [Code Geass R1 — perfiles de personaje](https://geass.jp/first/chara_04.html)
- [Code Geass R1 — episodio 1](https://geass.jp/first/story_01.html)
- [Code Geass R1 — episodio 22: la Zona Administrativa Especial](https://geass.jp/first/story_22.html)
- [Code Geass R2 — perfil de Suzaku](https://geass.jp/r2/chara_03.html)
- [Code Geass R2 — perfil de Rolo y su Geass](https://geass.jp/r2/chara_02.html)
- [Code Geass R2 — perfil de Schneizel](https://geass.jp/r2/chara_47.html)
- [Code Geass R2 — perfil de Charles](https://geass.jp/r2/chara_17.html)
- [Code Geass: Lelouch of the Re;surrection — personajes](https://geass.jp/R-geass/character.php)

**Límite real:** esta es una base ampliada y enlazada, no una enciclopedia completa de todos los personajes, novelas derivadas, películas y spin-offs. Hay personajes secundarios y detalles de episodio que todavía faltan. Una referencia oficial general no se usa como prueba de un hecho que no describe.

## Generador de poderes

El generador ofrece familias variadas: físicas, mentales, sensoriales, elementales, espaciales, temporales, técnicas, pactos, apoyo, información y transformación. En el modo **Sorpresa**, el arquetipo de mandato mental por mirada tiene una probabilidad baja (5 % en el selector aleatorio implementado) y aparece identificado como una **idea original**, no como un poder canónico de Geass.

Generar un candidato no lo guarda automáticamente. El escritor puede editarlo, asociarlo a un personaje y a una historia, marcar efectos irreversibles y guardarlo o descartarlo. Los poderes aceptados reciben IDs de proyecto propios, distintos del ID de su plantilla.

## Límites de esta iteración

Todavía falta convertir la cobertura inicial en expedientes completos, fuente por fuente, para todas las franquicias y personajes: historia por arcos, personalidad sustentada en conducta, mapa de relaciones con evidencias, cronología de conocimiento, perfiles completos de cada Familia/facción y sistemas de poder canónicos. Las conexiones que carecen de fuentes primarias se rotulan; el producto no debe presentarse como enciclopedia completa.