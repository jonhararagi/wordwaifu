# DanMachi — etiquetas primordiales de continuidad

**Estado:** regla de investigación y modelado aceptada.  
**Propósito:** conservar de dónde procede cada dato de DanMachi y evitar que una escena, habilidad, relación o caracterización de una adaptación se convierta silenciosamente en hecho de otra continuidad.

## Etiquetas obligatorias

| Etiqueta | Uso | Qué puede respaldar | Qué no permite asumir |
|---|---|---|---|
| `CONT-GAME` | Contenido de la historia original de **DanMachi ~Memoria Freese~**, incluidos eventos originales como la versión del juego de Astrea Record. | Lo que el juego muestra o dice, con evento/capítulo/escena cuando sea posible. | No demuestra que la novelización reproduzca la escena o el diálogo exactamente; no se transfiere automáticamente a la novela principal. |
| `CONT-AR` | Material de **Astrea Record** en su continuidad correspondiente, especialmente la novelización publicada/revisada. Debe distinguirse de la versión del juego cuando existan diferencias. | Pasajes identificables de la novelización y sus escenas, con volumen y localizador reproducible. | No se presume identidad exacta con `CONT-GAME`; no se usa automáticamente como hecho de la novela ligera principal. |
| `CONT-MAIN-LN` | Hechos confirmados en la **novela ligera principal de DanMachi**. | Pasajes de la serie principal con volumen/capítulo/página o localizador reproducible. | Una wiki, una sinopsis, una entrevista, una ficha comercial o una adaptación no bastan por sí solas para marcar un dato como confirmado en la novela principal. |
| `CONT-SECONDARY` | Resúmenes, wikis, análisis de lectores, reseñas y otras fuentes secundarias. | Pistas de investigación, afirmaciones atribuidas a esa fuente y resúmenes provisionales claramente etiquetados. | No equivale a verificación primaria ni a confirmación oficial. Si una wiki cita una obra primaria que no se pudo consultar, registrar la cita como pista, no como lectura directa. |
| `CONT-AU` | Relatos alternativos, escenarios hipotéticos y material de universo alternativo. | Solo los hechos internos del relato alternativo, conservando su fuente y alcance. | No importar automáticamente relaciones, biografía, personalidad, parentescos o sucesos a `CONT-MAIN-LN`, `CONT-AR` o `CONT-GAME`. |

## Reglas de aplicación

1. **La etiqueta describe el alcance de la afirmación, no su nivel de certeza.** Mantener por separado el estado de verificación (por ejemplo, `source_checked`, `secondary_checked`, `primary_verified`, `metadata_checked_only`) y la confianza.
2. **Una fuente puede necesitar más de una entrada si respalda afirmaciones de continuidades distintas.** No asignar una etiqueta global a una página que mezcla juego, novela, anime, manga y relatos alternativos sin separar qué afirma sobre cada medio.
3. **Registrar procedencia y localizador.** Siempre que esté disponible, anotar título de fuente, idioma, tipo de fuente, URL, volumen/evento/capítulo/escena/página y qué afirmación respalda. No inventar páginas, diálogos, escenas ni citas.
4. **Diferencias entre versiones se conservan.** Para Astrea Record, registrar por separado la escena del juego y la de la novelización; una diferencia reportada por wiki permanece `CONT-SECONDARY` hasta cotejar ambos textos.
5. **Las fuentes secundarias no se degradan a inútiles ni se elevan a primarias.** Sirven para ampliar cobertura y localizar pasajes, pero deben seguir atribuidas y etiquetadas.
6. **No inferir por afiliación.** Que un personaje lidere una Familia no demuestra que conociera, ordenara o autorizara cada acción de sus miembros.
7. **Los datos ausentes permanecen ausentes.** Si una fuente no enumera una habilidad, coste, nivel, alias o escena, registrar “no informado en la fuente consultada”; no completar con especulación.
8. **Los metadatos editoriales no prueban narración.** Una ficha de producto, anuncio de muestra o lector no legible puede documentarse como ruta de consulta, pero no confirma presencia, ausencia, escena o relación.
9. **La continuidad no se hereda por parecido.** Una afirmación presente en `CONT-GAME`, `CONT-AR`, `CONT-AU` o `CONT-SECONDARY` solo puede marcarse también como `CONT-MAIN-LN` si existe respaldo independiente y localizable en la novela principal.
10. **Mantener la bitácora anti-repetición.** Si una ruta ya fue probada y no mostró texto narrativo legible, no repetirla sin una condición nueva concreta (acceso nuevo, contenido cambiado o fuente independiente).

## Aplicación inmediata a DMR-045

- **Alfia:** habilidades, mecanismos, costes y escenas descritos por wiki permanecen en `CONT-SECONDARY` hasta localizar el pasaje correspondiente; separar juego y novelización cuando proceda.
- **Zald:** `Afterglow`, `Deus Ambrosia`, Udaeus y el combate con Ottar requieren fuente y versión identificadas. La cifra de 947 golpes no se asigna al juego sin cotejo.
- **Meteria:** mantener separados los datos atribuidos a la novela principal, los resúmenes secundarios y los detalles de relatos alternativos. No deducir la identidad del padre de Bell.
- **Erebus:** separar sus diálogos/acciones explícitos de los actos de Alfia, Zald u otros miembros de Evilus; no transferir automáticamente caracterización de `CONT-GAME` a `CONT-AR`.
- **Rudra:** las acciones atribuidas a la Familia Rudra no demuestran por sí solas conocimiento, autorización u orden personal de Rudra.

## Fuera del alcance de estas cinco etiquetas

No sustituyen otras etiquetas ya usadas para anime, manga, Sword Oratoria, Familia Chronicle, prototipos, historias cortas, juegos u otras continuidades. Si una fuente pertenece claramente a otro medio, conservar su etiqueta específica (por ejemplo, `CONT-ANIME`, `CONT-MANGA`, `CONT-SO-LN`, `CONT-FC`) y no forzarla dentro de estas cinco categorías.

## Criterio de cierre

Un dato se considera confirmado en una continuidad solo cuando la fuente apropiada respalda explícitamente la afirmación y el registro conserva un localizador reproducible. La aceptación de esta guía es una regla de trabajo; no confirma ninguno de los cinco expedientes pendientes de DMR-045.
