# Mapa maestro de eras de DanMachi

## Propósito

Este documento establece la cobertura cronológica total que deberá completar la base: desde la era más antigua que las fuentes describan hasta el último acontecimiento de la novela principal que esté publicado y pueda verificarse. No fija una cronología oficial por sí mismo.

## Nota terminológica: “Época Dorada”

“Época Dorada” es una etiqueta aportada en la planificación del proyecto y todavía no está asociada a una denominación oficial concreta. Antes de usarla como nombre de una era, hay que localizar la expresión en una fuente fiable y registrar el término japonés, la traducción empleada y su alcance temporal. Hasta entonces, debe aparecer como ALIAS_PROVISIONAL, no como hecho del canon.

La cronología deberá comprobar también si la expresión buscada se refiere a una era mítica anterior a los dioses, a la llegada de los dioses al mundo inferior, al auge de las antiguas Familias Zeus y Hera o a otra etapa. No fusionar esos periodos por similitud de nombres.

## Eras y macroperiodos que se deben investigar

| Clave | Macroperiodo de trabajo | Cobertura prevista | Estado |
|---|---|---|---|
| ERA-00 | Edad antigua / mundo anterior a las deidades en el mundo inferior | Origen del mundo descrito, monstruos antiguos, dragones, héroes y relatos míticos que sean relevantes | ESQUEMA; término oficial pendiente |
| ERA-01 | Descenso de las deidades al mundo inferior | Razones, condiciones, límites de intervención divina y cambios sociales | ESQUEMA; referencias pendientes |
| ERA-02 | Formación de Orario e instituciones | Origen y evolución del Dungeon conocido, Babel, Guild y reglas de los aventureros | ESQUEMA; cronología pendiente |
| ERA-03 | Primeras generaciones de héroes y grandes Familias | Héroes, expediciones, Familias influyentes y sucesos históricos | ESQUEMA; falta identificar eventos verificables |
| ERA-04 | Auge de las Familias Zeus y Hera | Miembros, expediciones, relación con el Dragón Negro y otros acontecimientos atribuidos a esas Familias | ESQUEMA; fuentes pendientes |
| ERA-05 | Caída o disolución de Zeus y Hera | Causas, fecha relativa, supervivientes, consecuencias para Orario y el mundo | ESQUEMA; no completar por inferencia |
| ERA-06 | Periodo anterior al inicio de Bell | Incluye la franja aproximada de *Astrea Record* (Era Oscura de Orario, alrededor de siete años antes de la visita de Bell), además de llegada de Hestia y movimientos de Loki/Freya | PARCIAL: páginas oficiales consultadas; texto íntegro y localizadores internos pendientes |
| ERA-07 | Inicio de la historia de Bell | Llegada de Bell, registro, primeros encuentros, primeras exploraciones y evolución de las Familias | ESQUEMA; dividir por volumen |
| ERA-08 | Saga principal, volúmenes posteriores | Un registro por volumen, arco, suceso, ficha de personaje y cambio de estado | INCOMPLETO; rellenado en tandas |
| ERA-09 | Material paralelo y relatos laterales | Sword Oratoria, Familia Chronicle, Astrea Record, Episode y otros relatos oficiales que aporten continuidad | INCOMPLETO; separar continuidad y cronología |
| ERA-10 | Último volumen principal publicado y cierre de la obra | Acontecimientos finales publicados, estado de personajes, misterios resueltos y asuntos pendientes | PENDIENTE DE INVENTARIO; no inventar un final |
| ERA-AU | Divergencias de la historia del OC | Cambios expresos sobre cualquier periodo anterior, con inicio, alcance y hechos canónicos sustituidos | VACÍO HASTA APROBACIÓN DEL AUTOR |

## Anclas de tiempo

La primera pasada se organizará con anclas relativas. No insertar años, fechas exactas o intervalos de “X años antes” hasta comprobar la fuente. Una vez conocidas, las anclas deben escribirse como registros independientes y relacionarse mediante IDs.

## Fuentes y cobertura

Cada evento deberá apuntar a un volumen/capítulo/sección concreta. Una obra derivada o relato lateral no se debe mezclar automáticamente con la cronología principal sin marcar la continuidad y el tipo de fuente.

## Criterio de cierre de la cronología

No se considerará “completa” mientras:
- los volúmenes principales publicados no estén inventariados;
- los sucesos históricos importantes sigan sin fuente o sin clasificación;
- las contradicciones entre fuentes no estén registradas;
- el material posterior a la publicación más reciente se esté presentando como canon;
- el final de la obra no esté documentado con evidencia de publicación, si ya existe.

## Actualización documental tras DANMACHI-RESEARCH-001

La etiqueta oficial localizada es **オラリオの暗黒期** (“Era Oscura de Orario”) y está asociada en el portal oficial a *Astrea Record*. Las páginas oficiales sitúan esa historia aproximadamente siete años antes de la visita de Bell a Orario. La base la cataloga dentro de ERA-06 como una franja histórica delimitada por la evidencia actualmente disponible, no como sinónimo de la historia antigua completa.

Las páginas consultadas no identifican “Época Dorada” como traducción equivalente. Tampoco fijan fecha absoluta, duración completa o todos los acontecimientos de esa era. Véanse [ERA-06](eras/06-periodo-previo-a-bell.md) y el [paquete de evidencia](../research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md).


## Mapa interactivo conectado a WordWaifu

El archivo [eras-and-events.json](eras-and-events.json) alimenta dos vistas de la enciclopedia: **Árbol de épocas** y **Acontecimientos históricos · línea temporal**. El árbol separa macroperiodos y subperiodos; la línea muestra fecha relativa, continuidad, personajes enlazados y rutas de evidencia.

### Ancla y barreras anti-mezcla

- T0 = llegada de Bell a Orario; T−7 = unos siete años antes y T−5 = unos cinco años antes. Son referencias relativas, no fechas absolutas.
- Astrea Record permanece en CONT-AR, T−7; la retrospectiva de la tragedia de Astrea Familia/Juggernaut permanece en CONT-MAIN-LN, T−5.
- El retorno del Juggernaut durante los volúmenes 13–14 tiene eventos propios, meses después de T0. Es una aparición distinta, no el mismo evento de la masacre histórica.
- Los conteos diarios secundarios se etiquetan como aproximaciones. Una sinopsis editorial no se presenta como verificación de páginas de una novela.
- Cada personaje conserva un ID único; sus apariciones históricas se enlazan desde cada evento sin reemplazar silenciosamente su estado posterior.
