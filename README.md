# WordWaifu — World & Story Foundry

**Un taller local para construir universos de ficción, explorar su canon en mapas interactivos y desarrollar historias y novelas sin depender de una IA ni de una API.**

WordWaifu reúne en un único objetivo herramientas que normalmente quedan separadas: biblia narrativa, fichas de personajes, atlas de lugares, cronología, relaciones, generadores por reglas y planificación de novelas.



## Visión maestra y continuidad

La especificación consolidada de producto, la separación entre WordWaifu y BotImagen, el atlas multitemporal, el índice maestro, la generación narrativa y el protocolo Cerebro/Obrero están en [docs/MASTER_VISION.md](docs/MASTER_VISION.md). Ese documento distingue las decisiones de producto de las funciones que aún están pendientes de implementación.

## Escritura y vocabulario

El editor incluye un [buscador local de sinónimos y antónimos](docs/WORD_CHOICES.md) para explorar alternativas y reemplazar texto seleccionado sin enviar el manuscrito a una API. El vocabulario disponible es inicial y contextual, no un tesauro exhaustivo.

## La visión

Imaginá un atlas interactivo de un universo ficticio. Abrís el mapa del mundo, seleccionás una ciudad y encontrás sus distritos, edificios, facciones, acontecimientos y personajes. Cada personaje tiene una ficha completa y una ubicación por fecha o capítulo. Desde ahí podés seguir sus viajes, relaciones, conflictos y apariciones en la historia.

El mapa no es una imagen decorativa: es una puerta de entrada al canon.

## Principio fundamental

**OFFLINE-FIRST, NO-AI-REQUIRED.** La aplicación debe poder abrir proyectos, crear y editar datos, explorar mapas, buscar fichas, comprobar continuidad, generar esquemas mediante reglas y exportar documentos sin conexión a Internet, sin cuenta de IA y sin API.

Un modelo de IA podría integrarse en el futuro como módulo opcional. Nunca será requisito para usar el núcleo.

## Módulos del producto

- **World Atlas:** mapa navegable con regiones, países, ciudades, barrios y puntos de interés; capas, filtros y búsqueda.
- **Canon Core:** fuente única de verdad para personajes, lugares, organizaciones, reglas y acontecimientos.
- **Character Forge:** generador de personajes por plantillas, tablas, reglas de compatibilidad y edición manual.
- **Lore Forge:** historia del mundo, culturas, sistemas mágicos, facciones, leyendas y reglas.
- **Timeline:** acontecimientos globales y personales, fechas, causalidad y continuidad.
- **Story Forge:** convierte una idea en un plan narrativo editable con personajes, personalidad y voz, mundo, poderes y costes, coprotagonistas, antagonista, romance, trauma, subtramas y progresión dramática.
- **Novel Forge:** planifica de 1 a 500 capítulos, define final cerrado/abierto/agridulce/cliffhanger, genera títulos y resúmenes por capítulo en seis etapas, conserva manuscritos y audita campos narrativos básicos. La generación local es estructural, no redacción automática de capítulos completos.
- **Contrato funcional y fases narrativas:** [Story Forge — propósito y contrato](docs/STORY_FORGE_BLUEPRINT.md).
- **Continuity Guard:** validaciones deterministas para detectar referencias rotas, contradicciones temporales y datos faltantes.
- **Command Desk:** pestaña tipo chat que ejecuta comandos locales conocidos, consulta el canon y lanza generadores. No fingirá comprender lenguaje libre como un LLM.
- **Visual Library:** referencias e imágenes vinculadas a entidades, con procedencia y metadatos. La generación de imágenes queda fuera del núcleo offline inicial.

## Demostración de la experiencia objetivo

Un universo de fantasía original puede tener una gran ciudad central. Al hacer clic en ella se abre una ficha de ciudad con distritos, gremios, establecimientos, residentes y acontecimientos. Al seleccionar un personaje se muestra su personalidad, edad, historia, relaciones y lugares donde estuvo. Un selector temporal permite cambiar entre «estado actual», «antes del incidente» y «capítulo 12».

Se puede utilizar una obra conocida como referencia de diseño en datos privados de prueba, pero el producto no incluirá automáticamente bases de datos de personajes, mapas o textos protegidos de franquicias ajenas. Los proyectos reales deben ser originales o utilizar contenido con derechos adecuados.

La rama de investigación **feature/danmachi-lore-poc** contiene un prototipo documental de DanMachi para probar continuidad, búsqueda y fichas con referencias. Su contenido está marcado como provisional y distingue fuentes oficiales de wikis comunitarias; las ilustraciones locales son originales y no oficiales. Esta demostración no implica afiliación ni licencia comercial sobre la franquicia, y no autoriza copiar o vender material de terceros. Antes de cualquier distribución pública/comercial hay que revisar licencias, permisos y el procedimiento de reclamaciones descrito en [docs/CONTENT_RIGHTS_AND_TAKEDOWN.md](docs/CONTENT_RIGHTS_AND_TAKEDOWN.md).

## Tecnología inicial propuesta

- Aplicación web local, utilizable desde el navegador sin servidor remoto.
- HTML, CSS y JavaScript modular para el primer prototipo.
- IndexedDB para datos del navegador y exportación/importación JSON; evaluar SQLite para una futura versión de escritorio.
- SVG y/o Canvas para mapas esquemáticos interactivos; formatos de mapa intercambiables.
- Markdown para documentos narrativos y JSON para registros estructurados.
- Cero dependencias de IA obligatorias. Sin analítica ni transmisión de proyectos por defecto.

## Estado

- [Auditoría de finalización y criterios de aceptación](docs/COMPLETION_AUDIT.md)
- [Registro de fallos, soluciones técnicas y brechas de cobertura factual](docs/ENGINEERING_FAILURES_AND_FIXES.md)

El prototipo incluye atlas, CRUD de las entidades principales, relaciones, catálogo multiverso y persistencia IndexedDB con respaldo local. La primera capa de snapshots y restauración está implementada parcialmente y validada en Chromium; aún faltan políticas completas ante todos los borrados, la prueba de retención y la inspección visual en Windows. La siguiente tarea verificable está en [docs/STATUS.md](docs/STATUS.md) y [docs/DONE.md](docs/DONE.md).

- [Visión y límites](docs/PRODUCT_VISION.md)
- [Arquitectura](docs/ARCHITECTURE.md)
- [Modelo de datos](docs/DATA_MODEL.md)
- [Mapa interactivo y canon](docs/INTERACTIVE_ATLAS.md)
- [Hoja de ruta](docs/ROADMAP.md)
- [Modo offline](docs/OFFLINE_FIRST.md)
- [Investigación técnica comparativa](docs/TECHNICAL_RESEARCH.md)

## Catálogo de entidades míticas y reliquias

- [Catálogo navegable de mitología, armas, reliquias y sistema de cartas](docs/MYTHIC_ARSENAL_CATALOG.md) · [Datos estructurados](data/catalog/mythic-arsenal.json)

## Archivo de historias originales

- [Story Forge: motor narrativo, progresión dramática, protección del manuscrito y auditoría estructural](docs/STORY_FORGE.md)
- [Archivo y formato de almacenamiento](stories/README.md)
- [Dinámica de mundos: distopías, cyberpunk, apocalipsis, postapocalipsis, comedia insular y mundos híbridos](docs/WORLD_DYNAMICS.md)
- [Motores de misterio, juegos de cartas sobrenaturales, identidades ocultas y plot twists](docs/STORY_REVEALS.md)
- [Sistemas de poderes: categorías, activación, costes, contratos y evolución irreversible](docs/POWER_SYSTEMS.md)
- [Historias corales y diosas con agencia propia: protagonista, amigos y arcos individuales](docs/ENSEMBLE_STORIES_AND_PANTHEON.md)
- [Las campanas de Asteria — manuscrito completo en cuatro capítulos](stories/original/las-campanas-de-asteria.md)
- [Paquete JSON estructurado de la historia](stories/original/las-campanas-de-asteria.json)

El editor de historias permite guardar el tipo de mundo, sus reglas y sus dinámicas junto con los metadatos y capítulos. La selección de un arquetipo no genera automáticamente una biblia de mundo completa: esa lógica y sus validaciones deben crecer por etapas.

## Continuidad del trabajo

- [Punto de continuidad más reciente (DONE)](docs/DONE.md)
- [Estado del proyecto](docs/STATUS.md)
- [Visión maestra](docs/MASTER_VISION.md)
- [Investigación técnica y patrones comparados](docs/TECHNICAL_RESEARCH.md)

## Regla de ejecución

Cada tarea debe seguir: **INSPECT → PLAN → EXECUTE → VERIFY → PERSIST → REPORT**. No declarar una función terminada solo porque existe el archivo: probarla en ejecución cuando sea posible y etiquetar la evidencia como PASS_REAL, PASS_STATIC, FAIL_REAL, NOT_RUN, UNKNOWN o PARTIAL.


---