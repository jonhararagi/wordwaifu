# TLM-002 — Contrato operativo del modelo temporal explícito

**Autoriza:** CEREBRO  
**Ejecuta:** BOT OBRERO  
**Estado:** DONE — implementación y verificación CI completadas.  
**Rama autorizada:** `work/story-completion-danmachi-audit-2026-10`  
**Dependencia:** TLM-001 aceptada como auditoría documental.  
**Base de trabajo inicial:** HEAD `1611254124e6fa2eb1186a803fca0bc712ef6dab`. **HEAD BEFORE real:** `a97206f2ecb7f4f50aec6146160dbe0fe9a0e85f`. **SHA de implementación validado:** `4d75c97aa690ddba73ec6ef09eb0fbefef06d342`.  
**No tocar:** `main`; no merge ni cambios de PR sin autorización expresa.

## Objetivo

Convertir las etiquetas temporales de la cronología DanMachi en datos tipados, validables y utilizables, sin inventar fechas de calendario, sin elevar pistas a canon y sin mezclar eventos hipotéticos del usuario con referencias de la obra.

La cronología debe conservar sus 15 acontecimientos actuales y seguir funcionando con sus fichas, continuidades y fuentes. Esta fase trabaja el modelo temporal y su presentación básica; no integra aún los acontecimientos con el mapa geográfico ni incorpora imágenes nuevas.

## Alcance incluido

1. Inspeccionar el contrato actual de `eras-and-events.json`, los valores de `evidenceStatus`, los `continuityScopes`, el render de las tarjetas y la batería de pruebas. No sobrescribir ni duplicar campos antes de entender sus semánticas.
2. Definir el contrato versionado documentado para un campo temporal estructurado por acontecimiento. Conservar `dateLabel` como etiqueta legible/compatibilidad, pero no usar texto libre como única fuente para ordenar o validar.
3. Implementar el modelo en el dataset actual, el validador y las pruebas. Si hace falta cambiar versión de esquema, documentar por qué y mantener una transición retrocompatible o una migración explícita comprobable.
4. Mostrar de manera visible la clase temporal del acontecimiento junto a la etiqueta comprensible que ya existe. No mostrar una fecha exacta si los datos solo dan una aproximación o relación.
5. Permitir que el modelo represente planes e hipótesis futuros, aunque no se añadan nuevos acontecimientos narrativos inventados a este dataset de DanMachi durante esta tarea.

## Contrato semántico mínimo

El BOT OBRERO puede escoger la forma JSON concreta más compatible con el repositorio, pero debe soportar de forma inequívoca:

- **Fecha absoluta:** fecha de calendario exacta o parcial, únicamente si la fuente realmente publica ese dato e identifica el calendario. No inventar un calendario ficticio, año, mes o día.
- **Intervalo aproximado:** límites temporales inferiores/superiores si están respaldados. Un único punto aproximado no debe confundirse con un intervalo exacto.
- **Desplazamiento relativo a un ancla:** por ejemplo, `T−7` aproximadamente siete años antes de `T0`, identificando el ancla estable, la cantidad/unidad y la precisión.
- **Orden relativo sin distancia calculable:** antes, después, entre o solapado con anclas/acontecimientos identificados, sin fabricar cuántos días/años separan los hechos.
- **Tiempo desconocido/pendiente:** motivo de desconocimiento y etiqueta legible, sin valores de fecha ficticios.
- **Ancla:** `T0-BELL-ARRIVAL` sigue siendo relativa a la llegada de Bell; no equivale a una fecha de calendario. No eliminar ni reinterpretar el ancla existente.

La posición temporal, el estado de evidencia y la continuidad son dimensiones separadas:
- La clase temporal expresa qué sabemos sobre cuándo ocurrió.
- El campo existente `evidenceStatus` expresa el estado/evidencia del registro; conservar su semántica y sus valores salvo que se documente una migración.
- `continuityScopes` conserva la separación entre novela principal, Astrea Record, anime, juego, AU y pistas no verificadas.
- Añadir un campo específico y explícito de modo narrativo/origen solo si no existe ya un campo adecuado. Debe distinguir, como mínimo, referencia a material publicado frente a hipótesis del usuario, plan de historia y AU. No usar `evidenceStatus` ni `continuityScopes` para fingir que representan conceptos diferentes.
- La clasificación “plan” o “hipótesis” jamás debe convertirse automáticamente en canon confirmado ni entrar silenciosamente en continuidad de novela principal.

Cada hecho temporal debe conservar trazabilidad a fuentes pertinentes del evento. Reutilizar los objetos/URLs de fuentes existentes y validar referencias; no crear identificadores de fuente imaginarios. Cuando ninguna fuente respalde una precisión temporal concreta, expresarlo como desconocido/pendiente.

## Migración conservadora exigida para los 15 eventos actuales

Cada evento debe recibir una representación temporal estructurada coherente con lo que su etiqueta y evidencia actual permiten. Como mínimo, comprobar individualmente:

- Descenso de las deidades: fecha absoluta sin fijar.
- Grandes expediciones de Zeus/Hera, batalla contra el Dragón Negro y caída de las Familias Zeus/Hera: antes de T0, fecha/orden exacto pendiente.
- Astrea Record: T−7 aproximadamente, con el alcance de la fuente limitado a lo que realmente dice.
- Tragedia de Astrea/Juggernaut: T−5 aproximado y verificación primaria pendiente; no promover la pista secundaria a fecha exacta.
- Venganza de Ryu: entre T−5 y T0, sin duración numérica inventada.
- Llegada de Hestia: antes de T0, posición respecto de T−7/T−5 abierta.
- Llegada de Bell: el propio ancla T0, no fecha de calendario.
- Primer encuentro de Bell/Hestia y rescate del Minotauro: poco después de T0, precisión no demostrada.
- Asesoramiento de Eina: orden dentro de los primeros volúmenes pendiente.
- Persecución hacia Jura / nueva aparición del Juggernaut / crisis de los volúmenes 13–14: marco de “meses después de T0” solo con precisión que respalde la fuente; día exacto abierto.

No es obligatorio que la representación interna copie estos textos literalmente, pero el informe de implementación debe mostrar la correspondencia de los 15 IDs con la variante elegida y justificar los casos ambiguos. No declarar una fecha absoluta exacta para ninguno de los casos anteriores solo para rellenar un campo.

## Criterios de aceptación

- [x] Contrato temporal documentado: variantes, tipos, campos requeridos/opcionales, reglas de ordenación, validación, compatibilidad y ejemplos.
- [x] Los 15 acontecimientos existentes tienen datos temporales tipados y cada asignación es justificable.
- [x] Las etiquetas `dateLabel` siguen disponibles o se migra de forma explícita y probada; no hay regresión de render.
- [x] El validador detecta variantes inválidas, anclas rotas, unidades inválidas, intervalos invertidos, precisión incompatible, referencias faltantes y fuentes temporales que no pertenecen al evento.
- [x] Se prueba que T−7 y T−5 permanecen aproximados y distintos; T0 continúa sin año/mes/día; un estado desconocido no se transforma en una fecha.
- [x] Hay fixtures de prueba para fecha absoluta, intervalo aproximado, relativo a ancla, orden relativo, desconocido, hipótesis y plan/AU; los fixtures hipotéticos no se insertan como hechos de canon.
- [x] Se conserva la separación de continuidad y los 15 `detailPath` actuales.
- [x] La UI indica la clase/precisión temporal sin mostrar certeza que los datos no tienen.
- [x] Las pruebas existentes y nuevas terminan en PASS para el SHA exacto en CI. Si una prueba no puede ejecutarse, se deja NOT_RUN con causa y no se declara DONE.
- [x] Se actualizan `docs/STATUS.md`, este documento con resultado, y se sobrescribe `docs/DONE.md` como punto de recuperación.
- [x] No se añadió integración geográfica ni imágenes; eso queda en TLM-003/TLM-004.

## Archivos candidatos a inspeccionar/modificar

`lore/danmachi/timeline/eras-and-events.json`, `src/danmachi-timeline.js`, `lore/danmachi/tools/check-timeline.mjs`, `tests/test_danmachi_timeline.cjs`, pruebas de continuidad pertinentes, `index.html`, `src/styles.css`, documentación del esquema temporal y `docs/STATUS.md` / `docs/DONE.md`. Modificar solo los necesarios.

## Fuera de alcance

- Crear ubicaciones geográficas o coordenadas para acontecimientos.
- Conectar la cronología DanMachi al mapa SVG del proyecto.
- Incorporar o descargar imágenes oficiales de anime/novela.
- Completar el canon de DanMachi mediante inferencias o wikis secundarias.
- Añadir nuevas escenas hipotéticas a la cronología de referencia sin autorización del usuario.
- Fusionar ramas, tocar `main`, abrir/cerrar/modificar PR.

## Entrega requerida

Informe en GitHub con: HEAD BEFORE/AFTER, archivos, variante de esquema elegida y razón, tabla de migración de 15 eventos, pruebas con SHA, resultados PASS_CI/PASS_STATIC/NOT_RUN, limitaciones, estado de la fase y siguiente tarea exacta. Si una ambigüedad de modelado afecta la compatibilidad o puede borrar significado existente, detener el cambio destructivo y documentar la alternativa sin inventar datos.


## Resultado de ejecución — cierre TLM-002 (2026-10-16)

- Modelo documentado: docs/DANMACHI-TEMPORAL-MODEL.md.
- Informe de correspondencia de los 15 IDs: docs/TLM-002-TEMPORAL-MODEL-REPORT.md.
- Implementación y datos: commit 4d75c97aa690ddba73ec6ef09eb0fbefef06d342.
- PASS_CI: Validate WordWaifu #38941141919 y DanMachi Lore and Retrieval Integrity #38941142159, ambos success en ese SHA; ambos ejecutaron browser smoke y el workflow de lore ejecutó también la validación de catálogo/enlaces.
- NOT_RUN local: este agente no ejecutó Node/Playwright localmente; la ejecución observada corresponde al CI real anterior.
- Se conserva schemaVersion 1 y dateLabel; temporalModelVersion 1 añade temporal/narrativeOrigin. El modelo actual tiene 1 unknown, 11 relative_order, 2 relative_offset y 1 anchor. Ningún evento actual usa absolute_date ni approximate_interval porque los 15 registros no acreditan fechas calendáricas ni límites numéricos para esos tipos.
- Se mantienen evidenceStatus y continuityScopes originales, sin convertir published_reference en sinónimo de canon confirmado. No se añadieron hipótesis/eventos ficticios al dataset.
- No se incorporaron ubicaciones, coordenadas ni imágenes; TLM-003 y TLM-004 no se iniciaron.

**TLM-002: DONE.** El producto completo del atlas sigue PARTIAL por las brechas geográficas, de cobertura y de verificación documentadas en TLM-001.
