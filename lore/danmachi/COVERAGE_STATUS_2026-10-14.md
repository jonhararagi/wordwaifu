# DanMachi — cobertura y cierre factual (corte 2026-10-14)

## Resumen ejecutivo

**La historia NO está al 100 % y no se puede garantizar todavía que no falte ningún dato importante.** La cobertura actual sirve como mapa de navegación, no como enciclopedia canónica exhaustiva verificada. La serie sigue en publicación; por tanto, el denominador total de la historia tampoco está cerrado.

## Métricas reproducibles

La distribución actual se puede recalcular desde el catálogo y el mapa de volúmenes con `node lore/danmachi/tools/report-coverage.mjs`. El workflow de integridad ejecuta ese informe y falla si faltan números de volumen en el mapa o aparecen duplicados. La métrica global de toda la historia se mantiene como no calculable; no se infiere desde el número de registros.

| Indicador | Resultado | Qué significa |
|---|---:|---|
| Volúmenes principales publicados con resumen provisional | 21/21 = **100 %** | Hay un mapa narrativo por volumen principal publicado al corte. No equivale a revisar cada escena. |
| Volúmenes principales con localizadores internos de capítulo/página cotejados en este lote | 0/21 = **0 %** | Los resúmenes aún requieren cotejo con la edición primaria. |
| Registros en `lore/danmachi/catalog.json` | **48** | Unidades documentales catalogadas; no son 48 capítulos ni una medida del total de la historia. |
| Registros plenamente aprobados/cerrados | 0/48 = **0 %** | Ningún registro debe tratarse como expediente canónico exhaustivo ya cerrado. |
| Registros marcados `source_checked_partial` | 2/48 = **4,2 %** | Cotejo parcial, no aprobación total. |
| Registros marcados `provisional_reference_checked` | 1/48 = **2,1 %** | Referencia comprobada con alcance limitado; sigue siendo provisional. |
| Registros con estado `draft` o `provisional` | 34/48 = **70,8 %** | Aún necesitan expansión y/o cotejo. |
| Registros `pending_verification` | 6/48 = **12,5 %** | Verificación pendiente explícita. |
| Eventos canónicos candidatos con cotejo pendiente | 6 fichas iniciales | El índice de eventos existe, pero las fichas no equivalen a reconstrucción cronológica completa. |

### Estados exactos del catálogo

- `provisional`: 21
- `draft`: 13
- `pending_verification`: 6
- `proposed_author_event`: 4 (propuestas de la AU, no canon)
- `source_checked_partial`: 2
- `provisional_inference`: 1
- `provisional_reference_checked`: 1

Los porcentajes describen únicamente los estados de esos 48 registros; **no deben sumarse ni presentarse como porcentaje global de la trama**. El catálogo contiene categorías diferentes (personajes, reglas, eventos, Familias, lugares e índices), y el total de hechos narrativos posibles no está definido.

## Qué está cubierto ahora

- Un mapa provisional para los 21 volúmenes principales publicados al corte.
- Índices por personajes, Familias, reglas, lugares, misterios, volúmenes y eras.
- Esqueleto cronológico desde la historia antigua hasta la etapa actual, con continuidades separadas.
- Paquetes de investigación de *Astrea Record*, *Sword Oratoria* y otras historias paralelas.
- Recuperación mediante el corpus de WordWaifu, validación estructural del catálogo y pruebas automatizadas de regresión.

## Qué impide decir «no falta nada importante»

1. No se han cotejado capítulo por capítulo los 21 volúmenes principales con una edición primaria; faltan localizadores de capítulo/página/escena.
2. Las sinopsis editoriales oficiales respaldan solo los hechos que expresamente resumen; no bastan para reconstruir estadísticas, secuencias, motivaciones privadas ni todos los resultados.
3. La historia antigua, Zeus/Hera, el Dragón Negro, la cronología previa a Bell, el Dungeon y las reglas de la Guild conservan preguntas pendientes en `timeline/04-hitos-pendientes.md` y `WORK_QUEUE.md`.
4. Los spin-offs y relatos paralelos están representados de forma selectiva; todavía falta inventariar y atomizar todos los eventos y enlazarlos sin duplicaciones.
5. El volumen 22 figura como anunciado para el 2026-12-15 en las notas editoriales actuales; a fecha de este informe todavía no se puede contar su contenido como publicado/verificado. El final de la obra tampoco debe inventarse.

## Porcentaje que sí puede comunicarse sin engañar

- **100 % de los volúmenes principales publicados tienen un resumen/mapa provisional** (21 de 21).
- **0 % de esos 21 volúmenes tiene localizadores internos de capítulo/página declarados como cotejados en el lote de resúmenes**.
- **0 % de los 48 registros está cerrado como expediente plenamente aprobado**; 3 registros tienen cotejo de alcance parcial o referencia provisionalmente comprobada.
- **Porcentaje global de toda la historia: no calculable honestamente con el inventario actual.** No existe un denominador estable de todos los hechos, escenas, relaciones, reglas y revelaciones de una serie en curso.

Por eso no es correcto afirmar 100 %, ni asegurar que no se perderá nada importante. La cobertura actual permite orientarse y recuperar resúmenes, pero debe tratarse como un mapa de investigación con huecos conocidos.

## Próximos pasos priorizados

1. Elegir edición de referencia y registrar bibliografía/localizadores para los volúmenes principales.
2. Atomizar cada volumen en eventos por capítulo/escena, con estados de personajes, afiliaciones, habilidades, pistas y consecuencias.
3. Completar primero los hitos críticos: origen/reglas del Dungeon, cronología Zeus/Hera y Dragón Negro, Era Oscura/Astrea Familia, cronología Hestia–Bell y grandes revelaciones.
4. Inventariar sistemáticamente *Sword Oratoria*, *Familia Chronicle*, *Astrea Record* y el resto del material paralelo incluido en el alcance; enlazar eventos compartidos en lugar de duplicarlos.
5. Marcar cada afirmación con continuidad, spoiler, fuente, localizador y grado de certeza; no convertir inferencias en canon.
6. Actualizar estas métricas automáticamente a partir del catálogo y la cola de trabajo en futuras tandas.

## Estado técnico relacionado

La reconciliación de integración se fusionó mediante PR #18 en `97ca5cd757ba804d2d8ea017221e0c5aca02e202`. En `main`, Validate WordWaifu #1031 y DanMachi Lore and Retrieval Integrity #537 pasaron sobre `b1367c0126ad14e90913293d642bda74ed038cb5`. La rama de auditoría posterior `work/post-merge-closure-audit-2026-10-14` pasó también sus dos workflows sobre `7132a10648b957c224844f02945e054df1142725` (#1034 y #538). Esto acredita validación técnica, no completitud factual del canon.
