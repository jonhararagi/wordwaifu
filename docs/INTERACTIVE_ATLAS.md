# World Atlas — mapa interactivo y canon navegable

## Objetivo

Crear la vista más distintiva de WordWaifu: un atlas grande, navegable y conectado a todas las entidades del proyecto.

## Niveles de navegación

Mundo → continente/región → país/reino → ciudad → distrito → edificio → habitación o punto concreto.

La jerarquía es flexible. Una novela espacial puede usar sistema estelar → planeta → estación; una historia escolar puede usar ciudad → academia → edificio → aula.

## Interacción básica

- Zoom y desplazamiento por el mapa.
- Clic en una región o marcador para abrir una ficha lateral.
- Buscar por nombre, alias, tipo o etiqueta.
- Capas activables: ciudades, rutas, facciones, peligros, eventos, recursos, personajes.
- Filtros por personaje, organización, fecha/capítulo, estado de canon y categoría.
- Navegación desde una entidad a sus relaciones, ubicaciones y eventos.
- Botón de regreso a la vista anterior.
- Estado vacío claro cuando no hay datos o coordenadas.
- Mapa esquemático inicial creado por el usuario; no requiere mapas descargados.

## Panel de lugar

Al seleccionar una ciudad:
- descripción y tipo,
- ubicación padre y regiones relacionadas,
- distritos y puntos de interés,
- población o estimación si existe,
- gobierno, cultura, economía y recursos,
- organizaciones con presencia,
- personajes presentes en la fecha/capítulo seleccionado,
- acontecimientos pasados y futuros relacionados,
- enlaces a capítulos donde aparece,
- referencias visuales y notas.

## Ficha de personaje desde el mapa

Debe mostrar al menos:
- nombre, alias, retrato opcional,
- edad con referencia temporal,
- especie y apariencia,
- personalidad, motivaciones, defectos y habilidades,
- trasfondo y secretos con acceso controlado por el autor,
- relaciones y afiliaciones,
- ubicación actual conocida y ubicaciones anteriores,
- capítulos/eventos donde aparece,
- estado canónico y datos sin confirmar.

El mapa solo muestra personajes cuya presencia coincide con el contexto temporal activo. Si no se conoce su ubicación, indicar «ubicación desconocida»; no asignar un lugar inventado.

## Tiempo como filtro principal

Incluir un selector de estado narrativo: fecha, evento o capítulo. Al cambiarlo, el mapa actualiza presencia de personajes, control político o de facciones cuando esté modelado, estado de lugares, acontecimientos ya ocurridos y rutas conocidas.

El tiempo de ficción no debe confundirse con la fecha real de edición. Las cronologías pueden ser absolutas, relativas o de precisión parcial (por ejemplo, «durante el invierno del año 12»).

## Capas visuales

- Geografía y regiones.
- Asentamientos y edificios.
- Rutas y viajes.
- Facciones y territorios.
- Personajes por ubicación.
- Acontecimientos.
- Misterios, rumores y áreas desconocidas.
- Recursos y economía.
- Conflictos y peligros.

Las capas son vistas del mismo canon, no bases de datos separadas.

## MVP del atlas

La primera versión debe demostrar:
1. Un mapa esquemático con varios marcadores.
2. Crear, mover, editar y borrar un marcador.
3. Vincular cada marcador a una ubicación canónica.
4. Abrir ficha de ubicación desde el marcador.
5. Mostrar personajes asociados a esa ubicación.
6. Cambiar un filtro temporal sencillo para ver presencias distintas.
7. Buscar personajes y ubicaciones.
8. Guardar y restaurar los datos localmente.

No intentar cartografía realista ni un mapa mundial automático en el primer hito. Primero demostrar el circuito de datos.

## Datos de franquicias existentes

Una franquicia conocida puede inspirar la experiencia de navegación, pero WordWaifu no debe incluir por defecto mapas, fichas extensas ni textos protegidos de terceros. Para demostrar el sistema, utilizar un universo original de fantasía con contenido claramente marcado como ejemplo.
