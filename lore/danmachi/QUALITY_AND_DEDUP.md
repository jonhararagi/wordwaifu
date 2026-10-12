# Control de calidad, duplicados y tandas de importación

## Objetivo

Ampliar el lore sin generar dos fichas para la misma persona, evento, lugar, regla o volumen y sin ocultar contradicciones entre fuentes.

## Estados normalizados

- stub: existe el índice, sin contenido sustantivo.
- draft: contenido preliminar, todavía sin cotejo suficiente.
- source_checked: comprobado contra una referencia concreta.
- cross_checked: comparado contra registros relacionados y otras fuentes disponibles.
- approved: revisado y aceptado para uso en análisis, con fuentes y límites anotados.
- disputed: existen fuentes en conflicto.
- stale: debe revisarse por cambio de edición, nueva información o error detectado.

## Proceso obligatorio antes de añadir un registro

1. Normalizar nombre, transliteración, título y alias sin borrar la grafía fuente.
2. Buscar el ID principal, alias y traducciones en \`catalog.json\` y los índices temáticos.
3. Buscar posibles coincidencias de eventos por participantes, lugar, periodo y consecuencias.
4. Comparar localizadores: dos referencias pueden hablar del mismo evento desde perspectivas distintas.
5. Si es la misma entidad, ampliar la ficha existente.
6. Si es la misma entidad con información contradictoria, mantener un único ID con reclamaciones y fuentes en conflicto, salvo que realmente sean dos entidades distintas.
7. Si la identidad es incierta, conservar ambos candidatos marcados IDENTITY_UNRESOLVED y no fusionarlos.
8. Actualizar el catálogo y el registro de tanda en el mismo cambio.

## Reglas de ID

- IDs estables, ASCII, mayúsculas y sin depender del nombre traducido.
- No reutilizar ni reciclar un ID eliminado.
- Alias y títulos alternativos van en la ficha y en el catálogo.
- Mantener diferenciados personaje, lugar, organización, evento y fuente, aunque compartan nombre.
- Para un evento recordado en flashbacks, usar el mismo event_id y registrar cada escena/fuente, a menos que la fuente establezca que ocurrieron eventos distintos.
- No fusionar novela principal, spin-off, anime, manga o juego como si fueran una misma continuidad sin registrar el alcance.

## Plantilla para log de tanda

- batch_id:
- date:
- scope:
- source_material:
- files_created:
- files_updated:
- records_added:
- records_updated:
- duplicates_merged:
- candidate_duplicates:
- conflicts_found:
- facts_left_unverified:
- checks_performed:
- reviewer:
- result: partial
- next_batch:

## Criterios de cierre

Una tanda no se cierra solo por cantidad de fichas. Debe incluir:
- búsqueda de duplicados;
- comprobación de IDs;
- validación de enlaces internos;
- etiquetas de procedencia/estado;
- lista de asuntos pendientes;
- actualización del catálogo e índice maestro.

## Política para cronología hasta el final

La cobertura pretende abarcar desde los periodos antiguos hasta el último contenido principal oficialmente publicado. No se marcará el final de la serie como completado hasta verificar la bibliografía y localizar las fuentes finales publicadas. Predicciones, teorías de fans y futuras decisiones de la AU se mantienen separadas del canon publicado.