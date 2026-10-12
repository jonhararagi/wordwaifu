# WordWaifu — Visión maestra y continuidad del producto

**Documento canónico de producto.** Esta visión consolida las decisiones y propuestas discutidas para WordWaifu. Los ejemplos de obras existentes sirven como referencias de análisis narrativo, no como contenido oficial precargado ni como afirmaciones canónicas automáticas.

## 1. Identidad y objetivo único

WordWaifu — World & Story Foundry es una aplicación local, centrada en datos, para organizar múltiples universos de ficción, explorar su información mediante un atlas interactivo y planificar historias y novelas. Debe ser útil para universos originales, fanfiction, planificación de videojuegos y bibliotecas narrativas personales.

El ciclo central es:

IDEA → REFERENCIAS → ÍNDICE MAESTRO → CANON → ATLAS / PERSONAJES / RELACIONES / CRONOLOGÍA → HISTORIA Y LORE → NOVELA → AUDITORÍA DE CONTINUIDAD.

WordWaifu no debe convertirse en una colección de aplicaciones inconexas. El atlas, el índice, las fichas, los generadores y el editor de novelas consultan los mismos registros canónicos.

## 2. Separación obligatoria: WordWaifu y BotImagen

Son dos sistemas independientes con responsabilidades distintas. Pueden integrarse mediante identificadores, rutas y metadatos compartidos en el futuro, pero no deben duplicar sus funciones principales.

### WordWaifu: mundo, historia y canon
- Universos y proyectos separados.
- Índice maestro de entidades y referencias.
- Atlas 2D, geografía e historia temporal.
- Fichas de personajes y versiones históricas.
- Relaciones, organizaciones, sucesos, rutas y cameos.
- Generadores de ideas, historias, lore y estructuras de novela.
- Planificación de protagonistas y elencos.
- Cronología, capítulos, escenas y auditoría de continuidad.
- Clasificación y advertencias de contenido antes de exportar/publicar.
- Puede guardar una descripción visual y un vínculo a una imagen aprobada, sin convertirse en el diseñador visual principal.

### BotImagen: diseño visual y manejo de imágenes
- Constructor visual de waifus y personajes por rasgos.
- Especies, anatomía, cabello, rostro, cuerpo, vestuario, accesorios, paleta, pose y props.
- Catálogos de estilos visuales, compatibilidad de rasgos, prompts positivos/negativos, semillas y perfiles guardados.
- Biblioteca visual de referencias y metadatos de procedencia.
- Integración futura con generadores de imágenes, comparación de variaciones y selección de ilustración.
- Importación, previsualización, validación y colocación de assets en las rutas correctas de otros proyectos.

WordWaifu podrá enlazar la imagen final de BotImagen por identificador o ruta. La creación visual detallada, los prompts de imagen, la galería de variaciones y la gestión de archivos quedan en BotImagen. La integración entre ambas aplicaciones es una posibilidad futura, no una función ya implementada.

## 3. Tecnología prevista

### Dirección tecnológica aprobada
- Lenguaje principal de producción: TypeScript.
- Interfaz: React, HTML y CSS.
- Herramientas de desarrollo web: Vite.
- Atlas inicial: SVG interactivo para regiones, rutas, marcadores, zoom y selección.
- Alternativas futuras para escenas grandes: Canvas o PixiJS, solo si las mediciones justifican el cambio.
- Persistencia web local: IndexedDB detrás de una interfaz/repositorio desacoplado.
- Exportación/importación: JSON documentado y copias de seguridad.
- Posible versión de escritorio: Tauri con SQLite y acceso controlado a archivos locales, después de estabilizar el producto web.

El prototipo existente usa HTML, CSS, JavaScript y localStorage. No debe realizarse una reescritura total por entusiasmo: primero se verifica y estabiliza el prototipo (WF-001); después se planifica una migración gradual a TypeScript/React/Vite, preservando los modelos de datos y las funciones que ya funcionen.

### Offline-first
El núcleo debe funcionar sin IA, API, cuenta, suscripción ni conexión obligatoria. La IA local o remota puede incorporarse como adaptador opcional. Los generadores deterministas funcionan con plantillas editables, reglas, catálogos y semillas; no se debe prometer que estas plantillas produzcan por sí solas prosa literaria de calidad humana.

## 4. Índice Maestro del Universo

Primero se establece un índice maestro estructurado; luego se diseñan las diferentes vistas para consultar sus datos. No se necesita decidir todas las pantallas antes de construir el esquema, pero sí un modelo mínimo para evitar un cementerio de textos sin relaciones.

El índice debe admitir:
- Búsqueda global por nombre, alias, tipo, universo, época, lugar, facción, capítulo, tema o etiqueta.
- Registros breves para navegar y expedientes detallados para investigar.
- IDs estables independientes del nombre visible.
- Referencias cruzadas en lugar de copiar repetidamente una misma ficha.
- Datos incompletos y desconocidos sin inventar valores para rellenarlos.
- Fuentes, notas, procedencia, estado de verificación y fecha de consulta cuando aplique.
- Estados de conocimiento diferenciados: canon confirmado, propuesta del autor, rumor dentro del mundo, dato desconocido o registro obsoleto.
- Importación y exportación portables para que los datos no queden bloqueados en la aplicación.

El índice maestro puede contener muchos universos, por ejemplo diferentes animes y novelas originales. Cada universo mantiene su propio canon, cronología, lugares y entidades. Los IDs y las búsquedas deben incluir el contexto del universo para evitar confundir personas o lugares con nombres iguales. Se permiten búsquedas globales entre universos sin mezclarlos accidentalmente.

El tamaño de las fichas de texto suele ser modesto comparado con el almacenamiento de imágenes. El sistema debe cargar por demanda, indexar búsquedas y evitar dibujar todos los registros a la vez.

## 5. Atlas 2D interactivo y de múltiples épocas

El atlas 2D es la interfaz geográfica distintiva del producto y la prioridad preferida frente a construir un mundo 3D completo. Un mapa puede ser esquemático o ilustrado; no se lo debe presentar como cartografía precisa si no lo es.

Jerarquía flexible de ubicaciones:

Mundo → continente → región/país → ciudad → distrito → edificio → planta/habitación.

No todos los proyectos deben usar todos los niveles. Se pueden añadir ubicaciones según lo que necesite la obra. La interfaz debe admitir zoom, desplazamiento, marcadores seleccionables, capas, búsqueda y paneles de detalles. Solo se renderiza la zona y el detalle necesarios para la vista actual.

### Atlas temporal
El usuario puede crear épocas con nombres propios, fechas exactas, aproximadas o desconocidas; por ejemplo, época antigua, época de una facción o dios, era oscura, final de la era oscura, época del protagonista o años posteriores a un acontecimiento. Estos nombres son periodos configurables y no suponen que la cronología de una obra externa esté completa o verificada.

El mapa debe poder reconstruir la geografía y los datos registrados para un momento. No se duplicará toda la ciudad para cada época: se reutilizan las identidades de las ubicaciones y se registran cambios, estados, eventos y presencias temporales. Cuando un lugar se reconstruya o cambie radicalmente, el modelo permite estados históricos y variantes de mapa.

### Trayectorias y sucesos en el mapa
Cada personaje puede tener un mapa de trayectoria consultable por época, capítulo o evento. Las capas iniciales propuestas son:
- Azul: ruta habitual o presencia recurrente.
- Amarillo: encuentro puntual, reunión, combate u otro suceso.
- Rojo: último registro conocido o evento crítico.

Los colores deben ser configurables por proyecto y la leyenda debe estar visible. Una línea roja no prueba por sí sola una muerte. Se diferencian última ubicación confirmada, desaparición, hipótesis y evento de muerte confirmado. Al seleccionar una línea o marcador se abre el registro del acontecimiento: participantes, ubicación, momento, fuente/capítulo, consecuencias y estado de verificación.

### Capas y rendimiento
Se pueden activar/desactivar rutas, encuentros, sucesos críticos, personajes, facciones o edificios. Los datos completos pueden ser numerosos, pero solo los marcadores relevantes para región, zoom, filtros y periodo deben dibujarse en pantalla. La aplicación no necesita generar una ilustración independiente de cada edificio para tener una geografía útil.

## 6. Fichas de personaje y versiones históricas

Cada personaje tiene una identidad canónica compartida y, cuando corresponda, estados o versiones por época. La interfaz puede mostrar tarjetas compactas, por ejemplo un retrato y el rótulo “Nombre · Era Oscura”. Al seleccionar la tarjeta se abre el expediente completo de esa versión.

La tarjeta no duplica la biografía entera. Es una vista de navegación del registro maestro.

### Identidad compartida
Puede incluir nombre, alias, pronombres, universo, especie, edad y precisión de la edad, apariencia base, personalidad, valores, defectos, motivaciones, temores, habilidades, preferencias, historia, secretos, afiliaciones y notas.

### Estado temporal
Debe separar de la identidad estable los datos que cambian: edad en un periodo, ropa, heridas, estado físico/emocional, localización, afiliación, conocimientos, objetivos temporales y presencia en una escena. Los datos que no estén confirmados pueden quedar desconocidos.

### Expediente
- Biografía y apariencia.
- Estados por época.
- Relaciones e historial de cambios.
- Ubicaciones, rutas y acontecimientos.
- Organizaciones/facciones.
- Participación en capítulos y escenas.
- Galería y referencias visuales enlazadas.
- Fuentes, notas y nivel de certeza.
- Historial de modificaciones cuando se incorpore esa capacidad.

## 7. Relaciones y red social de personajes

Cada ficha debe mostrar personajes relacionados mediante tarjetas con imagen opcional, nombre, tipo de vínculo, afinidad/intensidad, periodo y descripción breve. Se puede abrir la ficha del personaje relacionado, ver acontecimientos compartidos y saltar al lugar o capítulo correspondiente.

Los vínculos no se reducen a “amigo” o “enemigo”. Campos sugeridos:
- Entidad origen y entidad objetivo.
- Tipo de vínculo (dios/miembro, familia, compañero, rival, aliado, mentor, adversario, etc.).
- Sentimiento/actitud (respeto, afecto, desconfianza, odio, atracción u otro).
- Intensidad o afinidad, si es útil.
- Dirección del vínculo cuando sea asimétrico.
- Inicio, fin o periodo de validez.
- Secreto o visibilidad dentro de la historia.
- Descripción y eventos que fundamentan la relación.
- Fuente y estado de conocimiento.

Una persona puede respetar a un adversario, y la relación puede cambiar de una época a otra. No se debe sobrescribir el historial anterior al modificar el vínculo actual. Ejemplos con personajes de obras existentes son datos ilustrativos a verificar; no se deben marcar automáticamente como canon.

## 8. Biblioteca de fuentes, wikis y referencias visuales

WordWaifu puede importar o enlazar información y retratos desde fuentes permitidas, pero debe conservar la procedencia. No debe descargar ni reproducir masivamente obras protegidas sin verificar acceso, licencia, condiciones de uso y derechos sobre las imágenes.

Cada fuente o recurso puede registrar URL, autor/creador conocido, licencia y estado de licencia, fecha de consulta, título, atribución, hash, tipo de fuente y notas. Una licencia desconocida se mantiene como desconocida o solo referencia hasta que se verifique. Las etiquetas inferidas por una herramienta automática deben estar separadas de los metadatos originales y confirmados.

La biblioteca visual avanzada, el procesamiento de imágenes, los prompts de ilustración y la gestión de assets oficiales corresponden a BotImagen. WordWaifu necesita solamente asociar una referencia visual al personaje y presentar una miniatura cuando exista un archivo disponible.

## 9. Generador de Historias y Lore

El generador será un módulo de WordWaifu, pero se construirá después de estabilizar el canon, la persistencia y el atlas. Su función es convertir referencias y preferencias en propuestas coherentes que el autor puede editar y aprobar.

### Perfil de ADN narrativo
Una obra de referencia puede desglosarse en categorías como:
- Premisa y estructura de aventura.
- Género, tono, humor y temas.
- Mundo, sociedad y contexto histórico.
- Magia, poderes, tecnología y límites.
- Progresión de poder y coste de las habilidades.
- Arquetipos, fortalezas, defectos y evolución del protagonista.
- Misterio, estrategia, conspiraciones y facciones.
- Romance, acción, drama, fanservice y otros componentes.
- Tipos de conflictos, antagonistas, giros y recompensas narrativas.

Ejemplo de perfil de referencia inspirado en conceptos generales:
- DanMachi: aventureros, mazmorras, dioses, familias, progresión, niveles, magia, protagonista que crece desde una posición débil, idealismo, fortuna, humor, romance y fanservice.
- Code Geass: mechas, poderes con restricciones, misterio, estrategia, protagonistas tácticos con vulnerabilidades físicas, conspiraciones, conflictos políticos, posguerra, dilemas morales y facciones.

Estos perfiles son ejemplos de categorías que deben documentarse y verificarse. No son una importación canónica completa ni autorizan copiar personajes, diálogos, escenas o tramas. El sistema debe distinguir recursos narrativos generales de material particular protegido.

### Constructor de combinaciones
Cada ingrediente podrá marcarse como excluido, opcional, secundario o central, o ponderarse en un rango. Se podrán mezclar principios narrativos generales de distintas referencias para proponer un universo original. Se debe explicar qué papel cumple cada ingrediente y detectar incompatibilidades o tensiones, sin afirmar que todas las ideas pueden convivir automáticamente.

### Sinopsis → protagonista → elenco → lore → novela
El flujo ideal:
1. Proponer sinopsis y conflicto central.
2. Desglosar premisa, temas, género y tono.
3. Diseñar protagonista(s), su personalidad inicial, defectos, gustos, humor, capacidades, límites, objetivo y evolución.
4. Proponer personajes secundarios, incluidos personajes femeninos con personalidades diferentes y funciones dramáticas, no simples acompañantes.
5. Diseñar objetivos propios, defectos, conexiones, fricciones, relaciones y arcos para cada integrante.
6. Desarrollar reglas del mundo, poderes/tecnología, culturas, facciones, historia y conflictos.
7. Crear actos, arcos, volúmenes, capítulos y escenas.
8. Registrar personajes, localizaciones y acontecimientos en el canon/atlas.
9. Auditar continuidad y revisar propuestas antes de canonizarlas.

Ejemplos de arquetipos iniciales: una piloto hiperactiva, valiente e impulsiva que disfruta las máquinas; una ingeniera tranquila, curiosa y de mente abierta que disfruta los dulces y entender máquinas; una oficial disciplinada y desconfiada que cuestiona las estrategias del protagonista. Son plantillas editables, no personajes obligatorios.

La coherencia no debe prohibir rasgos interesantes. Debe identificar riesgos narrativos y ofrecer soluciones. Un personaje impulsivo puede arruinar un plan en una escena y salvarlo en otra; un protagonista inteligente debe tener puntos ciegos y otros personajes deben conservar agencia para frustrar sus decisiones.

### Control del protagonista y géneros
El protagonista puede ser masculino, femenino, no binario/personalizado o un conjunto de protagonistas. No asumir género ni orientación por defecto. La configuración de géneros puede incluir aventura, comedia, misterio, ciencia ficción, fantasía, estrategia, romance, yuri/GL, BL, heterorromance, bisexualidad/pansexualidad, poliamor consensuado o ausencia de romance, además de tonos y niveles de fanservice configurables.

Contenido ecchi, maduro o adulto puede registrarse mediante etiquetas separadas. La etiqueta anatómica/ficticia (por ejemplo, futanari) es metadato de contenido o diseño, no una categoría narrativa obligatoria. Todo contenido sexual deberá referirse únicamente a personajes inequívocamente adultos. La disponibilidad de generación de imagen explícita dependerá de las herramientas conectadas y sus políticas; WordWaifu no debe asumirla.

## 10. Content Guard: clasificación y avisos de publicación

Cada proyecto tendrá una clasificación global y cada capítulo/escena podrá tener etiquetas propias. Debe existir un indicador visible en el editor cuando un proyecto esté marcado como maduro o para adultos, además de avisos de violencia, contenido sexual, lenguaje fuerte u otros temas que el autor configure.

El detector inicial puede utilizar etiquetas manuales sin IA. Una futura detección asistida podrá sugerir escenas para revisión, pero no será infalible y no debe clasificar silenciosamente ni cambiar el canon.

Antes de exportar/publicar, ofrecer una revisión:
- Clasificación global y etiquetas.
- Escenas/capítulos que activan advertencias.
- Datos sin clasificar o ambiguos.
- Recomendación de revisar la política de la plataforma de destino.

La clasificación por sí sola no garantiza que una plataforma acepte el contenido. Las políticas son distintas y pueden cambiar. El usuario mantiene la decisión final. No se sexualizarán personajes menores ni de edad ambigua; el contenido sexual explícito solo se habilitará para personajes inequívocamente adultos.

## 11. Novel Studio y auditoría de continuidad

El proyecto podrá incluir premisa, actos, arcos, subtramas, volúmenes, capítulos, escenas, borradores Markdown y exportación de manuscritos. Cada escena puede referenciar participantes, lugar, época, objetivo, obstáculo, resultado y eventos relacionados.

Continuity Guard verificará referencias rotas, contradicciones temporales evidentes, presencia en lugares incompatibles, cambios de edad/estado no justificados cuando existan datos suficientes y entidades que carecen de información esencial. Los reportes deben explicar la causa, señalar los registros implicados y permitir que el autor acepte una excepción. No debe inventar certeza ni intentar resolver toda contradicción literaria automáticamente.

## 12. Principios permanentes

1. Canon único: una entidad se define una vez y se referencia mediante ID estable.
2. Offline-first: lo esencial funciona sin red.
3. Privacidad: no enviar datos fuera del dispositivo sin acción explícita.
4. Portabilidad: JSON documentado, copias de seguridad y opciones de exportación.
5. El autor manda: el sistema propone, el autor aprueba.
6. Incertidumbre explícita: canon, propuesta, rumor, desconocido y obsoleto son estados diferentes.
7. Temporalidad: posiciones, relaciones y estados pueden variar por fecha/evento/capítulo.
8. Compatibilidad explícita: generadores usan reglas, preferencias bloqueadas y semillas cuando corresponda.
9. Fuente visible: cada información externa importada mantiene su procedencia.
10. Medios ligeros: las miniaturas y la carga selectiva evitan cargar todas las imágenes de una vez.
11. Nada de scraping masivo por defecto; respetar derechos, licencias y condiciones de las fuentes.
12. No presentar prototipos o pruebas estáticas como pruebas reales de navegador.

## 13. Hoja de ruta propuesta

El siguiente trabajo activo sigue siendo WF-001: verificar y estabilizar el Atlas MVP. No adelantar el Generador de Historias, la biblioteca masiva ni Content Guard antes de pasar las pruebas básicas del prototipo.

Después:
1. WF-001: verificación real del atlas actual y correcciones mínimas.
2. Persistencia confiable, repositorio desacoplado, IndexedDB, importación/exportación y backup.
3. Modelo común de proyectos/universos, índice maestro y CRUD de personajes, lugares, eventos, organizaciones y relaciones.
4. Atlas temporal: épocas configurables, estados históricos, presencias, rutas y capas.
5. Fichas compactas y expedientes completos, red de relaciones y fuentes.
6. Migración planificada a TypeScript + React + Vite sin perder el prototipo funcional.
7. Generadores deterministas de personajes, lugares y otros recursos narrativos.
8. Generador de historias/lore, perfiles de ADN narrativo, sinopsis, protagonistas, elenco y arcos.
9. Novel Studio y Continuity Guard.
10. Content Guard y exportación con revisión previa.
11. Biblioteca de medios enlazada, mapas avanzados, importadores autorizados y posibles adaptadores opcionales de IA.
12. Aplicación de escritorio opcional si el flujo web local ya está estable.

Las estimaciones deben recalcularse con la evidencia de cada etapa. No se promete una fecha global para la visión completa.

## 14. Protocolo de trabajo en GitHub: Cerebro y Obrero

Para WordWaifu, el asistente puede asumir ambos papeles de trabajo en fases diferenciadas:

- **Cerebro:** inspeccionar el repositorio y la continuidad, definir el alcance de una sola tarea, planificar, fijar criterios de aceptación, riesgos y estimación.
- **Obrero:** ejecutar la tarea aprobada en los archivos del repositorio, implementar cambios concretos y añadir pruebas/documentación necesarias.
- **Auditoría:** verificar los cambios, revisar la diferencia, ejecutar lo disponible, registrar límites y no inflar el estado.
- **Persistencia:** commits en la rama de trabajo y documentos actualizados.
- **Reporte:** rama y HEAD antes/después, archivos, cambios, pruebas con etiquetas de evidencia, limitaciones y próximo paso.

Ciclo obligatorio: INSPECT → PLAN → EXECUTE → VERIFY → PERSIST → REPORT. Solo una tarea activa a la vez. No asumir que el PR está integrado ni alterar main sin la autorización correspondiente. Reanudar siempre leyendo STATUS.md, WORK_PROTOCOL.md y el HEAD actual.

Etiquetas de evidencia:
- PASS_REAL: ejecución en el entorno objetivo observada.
- PASS_STATIC: inspección, análisis o pruebas estáticas.
- FAIL_REAL: fallo observado durante ejecución.
- PARTIAL: parcialmente implementado o verificado.
- NOT_RUN / UNKNOWN: no ejecutado o evidencia insuficiente.

## 15. Estado real al consolidar esta visión

- Repositorio: jonhararagi/wordwaifu.
- Rama de trabajo: foundation/story-foundry-north-star.
- HEAD inspeccionado antes de esta actualización: 837f8732df34e54a7a525167086e7699a837c06d.
- Rama main inspeccionada: 15a9e0677bf27596dfaef97b5b7d7dfd1569eb98. No se ha modificado por esta actualización.
- PR de fundación: https://github.com/jonhararagi/wordwaifu/pull/1, abierto y en borrador al momento de la inspección.
- Prototipo existente: HTML/CSS/JavaScript, mapa SVG esquemático, marcadores y paneles, filtro temporal, búsqueda, capas, comandos locales e importación/exportación JSON.
- Persistencia del prototipo: localStorage; IndexedDB/repository abstraction aún pendiente.
- Evidencia: el código y las validaciones estáticas existen; la ejecución funcional real en navegador sigue pendiente. No declarar PASS_REAL antes de probarlo.
- Universo de demostración: original y ficticio. No se incluye automáticamente contenido completo de una franquicia.
- Próximo trabajo: WF-001, verificar el prototipo en navegador y estabilizar sus funciones existentes antes de añadir nuevas funciones.
