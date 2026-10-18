# DanMachi Lore — corpus de investigación para WordWaifu

## Estado operativo — 2026-10-18

El corpus y su interfaz ya están integrados en `main`. Esta carpeta no es una rama aislada ni una afirmación de canon completo: es un corpus de investigación enlazado, con resúmenes, fuentes y continuidades etiquetadas.

- Catálogo actual: `catalog.json` esquema v2, **48 registros activos**, **67 IDs reservados** y **100 documentos de apoyo**.
- Los 48 registros no están todos verificados: 13 `draft`, 6 `pending_verification`, 21 `provisional`, 4 `proposed_author_event`, 1 `provisional_inference`, 1 `provisional_reference_checked` y 2 `source_checked_partial`. La validación no promueve automáticamente un registro a canon confirmado.
- El validador `tools/check-catalog.mjs` comprueba JSON, unicidad de IDs/rutas, IDs de frontmatter, existencia de los documentos y enlaces Markdown locales. **No comprueba la verdad factual ni sustituye el cotejo de capítulos/páginas de fuentes primarias.**
- El archivo de personajes está conectado a `src/character-archive.js` y `src/character-dossiers.js`; las búsquedas y recuperación usan `src/lore-corpus.js`. El test de navegador y el workflow **DanMachi Lore and Retrieval Integrity** cubren parte de esa integración.
- Se separan expresamente `CONT-MAIN-LN`, `CONT-AR`, `CONT-ANIME`, `CONT-AU` y `CROSS-CONTINUITY`. No se usa un hecho de adaptación o AU para rellenar silenciosamente la cronología de la novela principal.
- Última prueba estructural de CI de esta serie: [DanMachi Lore and Retrieval Integrity #39105185544](https://github.com/jonhararagi/wordwaifu/actions/runs/39105185544), success en SHA `095bc68a61e67e7813b307e0ec025309fc8d889f`. El código de archivo/búsqueda también pasó con [run #39105158803](https://github.com/jonhararagi/wordwaifu/actions/runs/39105158803) en SHA `7860b5151999c92d7cd0233af68eaa26b40dba5d`.
- Deuda factual: todos los registros necesitan cumplir su estándar de evidencia; aún hay relaciones/biografías apoyadas por pistas secundarias, datos por comprobar en fuentes primarias y fichas individuales incompletas. Una ficha enlazable no equivale a una biografía completa.
- Deuda de navegación: ampliar y verificar el recorrido completo Ryu → relación → miembro → Familia → Astrea → acontecimiento → fuente, con atrás/inicio y sin perder época/continuidad; no marcar el gate como aprobado antes de una prueba real de navegador.
- Mantener marcada como pendiente la referencia a la petición de Ryu para que Astrea abandone Orario hasta encontrar un localizador primario suficiente; la fuente comunitaria es un lead de investigación, no prueba final.

## Punto de entrada

- [Índice maestro de cobertura](MASTER_INDEX.md)
- [Catálogo JSON de registros, IDs reservados y documentos](catalog.json)
- [Control de calidad y duplicados](QUALITY_AND_DEDUP.md)
- [Cola de trabajo](WORK_QUEUE.md)
- [Registro de tandas](BATCH_LOG.md)

## Plantillas y protocolo

- [Premisa inicial del OC](01-premisa-autor.md)
- [Plantilla de registro de lore](02-plantilla-registro.md)
- [Protocolo de revisión narrativa](03-protocolo-revision.md)
- [Banco de pruebas](04-banco-pruebas.md)
- [Fuentes y verificación](05-fuentes-y-verificacion.md)
- [Registro de decisiones del autor](06-registro-decisiones.md)
- [Prompt reutilizable de revisión](07-prompt-revision.md)
- [Plantilla de personaje](templates/registro-personaje.md)
- [Plantilla de evento](templates/registro-evento.md)
- [Plantilla de regla](templates/registro-regla.md)
- [Plantilla de lugar](templates/registro-lugar.md)
- [Plantilla de volumen](templates/registro-volumen.md)
- [Plantilla de Familia](templates/registro-familia.md)
- [Plantilla de era](templates/registro-epoca.md)
- [Plantilla de misterio/revelación](templates/registro-misterio.md)
- [Plantilla de relación](templates/registro-relacion.md)
- [Plantilla de monstruo](templates/registro-monstruo.md)
- [Plantilla de habilidad/equipo](templates/registro-habilidad-equipo.md)
- [Plantilla de arco](templates/registro-arco.md)
- [Plantilla de capítulo/escena](templates/registro-capitulo-escena.md)
- [Registro maestro de fuentes](sources/00-registro-fuentes.md)
- [Matriz de continuidad](continuity/00-matriz-de-continuidad.md)
- [Índice de arcos](arcs/00-indice-arcos.md)
- [Plantillas individuales para los volúmenes principales 01–20](volumes/main/README.md)
- [Validador de catálogo e IDs](tools/check-catalog.mjs)

## Cronología completa por etapas

- [Mapa de eras y aclaración de “Época Dorada”](timeline/00-mapa-de-eras.md)
- [Eventos](timeline/03-indice-eventos.md)
- [Hitos pendientes](timeline/04-hitos-pendientes.md)
- [Reglas de modelado temporal](timeline/02-reglas-de-cronologia.md)
- [Alertas cronológicas actuales](timeline/01-alertas-cronologia.md)
- [ERA-00: historia antigua y terminología](timeline/eras/00-era-antigua-y-terminologia.md)
- [ERA-01: descenso de las deidades](timeline/eras/01-descenso-de-deidades.md)
- [ERA-02: formación de Orario y el Dungeon](timeline/eras/02-formacion-orario-y-dungeon.md)
- [ERA-03: héroes y grandes Familias](timeline/eras/03-historia-de-heroes-y-familias.md)
- [ERA-04: Zeus, Hera y Dragón Negro](timeline/eras/04-auge-zeus-hera-y-dragon-negro.md)
- [ERA-05: caída de Zeus/Hera y consecuencias](timeline/eras/05-caida-zeus-hera-y-consecuencias.md)
- [ERA-06: periodo previo a Bell](timeline/eras/06-periodo-previo-a-bell.md)
- [ERA-07: inicio de la historia principal](timeline/eras/07-inicio-de-la-historia-principal.md)
- [ERA-08: arcos principales posteriores](timeline/eras/08-arcos-posteriores-y-spoilers.md)
- [ERA-09: spin-offs y continuidades paralelas](timeline/eras/09-relatos-paralelos-y-continuidades.md)
- [ERA-10: último volumen y final publicado](timeline/eras/10-ultimo-volumen-y-final-publicado.md)
- [ERA-AU: divergencias del OC](timeline/eras/AU-oc-y-divergencias.md)

## Índices por categoría

- [Canon general](canon/00-indice-canon.md)
- [Orario](canon/01-mundo-orario.md)
- [Falna y Familias](canon/02-falna-familias.md)
- [Dungeon y Guild](canon/03-dungeon-y-guild.md)
- [Aventureros y progresión](canon/04-aventureros-y-progresion.md)
- [Monstruos y piedras mágicas](canon/05-monstruos-y-piedras-magicas.md)
- [Deidades](canon/06-indice-deidades.md)
- [Misterios y revelaciones](canon/07-indice-misterios-y-revelaciones.md)
- [Magia, habilidades y equipo](canon/08-indice-magia-habilidades-y-equipo.md)
- [Monstruos y amenazas](canon/09-indice-monstruos-y-amenazas.md)
- [Personajes](characters/00-indice-personajes.md)
- [Familias y organizaciones](familias/00-indice-familias.md)
- [Lugares](places/00-indice-lugares.md)
- [Reglas del mundo](rules/00-indice-reglas.md)
- [Volúmenes y arcos](volumes/00-indice-volumenes-y-arcos.md)
- [Evaluación preliminar de la premisa](au/01-evaluacion-premisa-oc.md)

## Hallazgo prioritario

La idea de que el OC llegue cinco años antes y ya se encuentre con Hestia podría entrar en conflicto con el recuerdo provisional de la cronología Hestia-Bell. Sigue siendo una alerta por verificar en el volumen 1, no un fallo canónico confirmado. También faltan aclaraciones sobre el registro del Dungeon y el nombre “Bell” que Loki da al OC.

## Estados de verificación

- stub: solo existe la estructura.
- draft: resumen preliminar.
- source_checked: cotejado con una fuente identificable.
- cross_checked: comparado con otras fichas y fuentes.
- approved: listo para usarse en revisiones, con límites documentados.
- disputed: fuentes en conflicto.
- stale: necesita revisión.

## Política de cronología

La meta es cubrir desde las eras antiguas hasta el último volumen principal publicado y verificable. “Época Dorada” permanece como denominación provisional hasta localizar su significado en las fuentes. No se asumirá cuántos volúmenes tiene la serie ni se inventará el final si el cierre no está publicado.

## Cobertura inicial de la novela principal

La tanda [DANMACHI-RESEARCH-008](research/inbox/BATCH-DM-008-main-story-volume-map.md) incorpora dossiers provisionales de los volúmenes 1–21 y sus afirmaciones al corpus de búsqueda. No es una historia completa verificada: faltan localizadores internos y extracción evento por evento.


## Historias paralelas

La tanda `research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md` incorpora Astrea Record, Sword Oratoria y crónicas centradas en Ryu, Freya, Asfi y Haze al buscador. La cobertura sigue marcada como provisional hasta cotejar cada capítulo.