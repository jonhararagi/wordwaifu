# Modelo temporal de DanMachi — schema 1

## Compatibilidad

El dataset conserva el campo schemaVersion: 1 del corpus y añade temporalModelVersion: 1. Cada uno de los 15 eventos conserva su dateLabel original como etiqueta legible/compatibilidad y añade temporal y narrativeOrigin. No se reescriben IDs, evidencias, continuityScopes, fuentes ni detailPath.

Los datasets antiguos que no incluyen ninguno de los campos nuevos (todos los eventos sin temporal y narrativeOrigin) siguen siendo aceptados por una rama explícita de compatibilidad y se muestran con la etiqueta “Tiempo sin normalizar”. Una migración parcial sin versión, o una combinación de versiones, se rechaza.

## Campo temporal

Todas las variantes requieren sourceUrls: una lista no vacía de URLs HTTPS que ya aparecen en el objeto sources del mismo evento. No se inventan IDs de fuentes. Cada variante requiere precision.

| kind | Campos relevantes | Significado |
|---|---|---|
| absolute_date | value, calendar, precision: day / month / year | Fecha calendárica; value debe concordar con la precisión. El calendario es obligatorio. Ningún evento actual usa esta variante. |
| approximate_interval | lower, upper, precision: approximate | Límites temporales respaldados. Cada límite tiene value, calendar y precision. Calendarios distintos o límites invertidos son inválidos. Ningún evento actual se ajusta a límites publicados justificables. |
| relative_offset | anchorId, direction: before / after, amount, unit, precision: approximate / estimated / exact | Desplazamiento numérico respecto a un ancla explícita. La cantidad es positiva; unit usa second, minute, hour, day, week, month, year, decade o century. |
| relative_order | relation: before / after / between / overlaps, referenceIds, distanceKnown: false, precision: order_only | Orden/correspondencia sin calcular una distancia. between requiere exactamente dos referencias; otras relaciones, una. Todas las referencias deben existir como evento o ancla. |
| unknown | reason, precision: unknown | La fecha no está establecida; exige motivo y no permite fabricar valor de fecha. |
| anchor | anchorId, precision: anchor | El propio evento define el ancla de trabajo; no es una fecha calendárica. |

Los límites de fecha utilizan strings ISO-like YYYY, YYYY-MM o YYYY-MM-DD, según la precisión declarada. Para el calendario gregoriano se comprueba también que el día/mes sea válido. La ordenación aproximada compara límites; no convierte etiquetas relativas a fechas absolutas.

T0-BELL-ARRIVAL conserva su identidad y referencias oficiales existentes; anchor.eventId lo conecta con el evento EVT-DM-BELL-ARRIVAL-001. No se asigna año, mes ni día.

## Campo narrativeOrigin

Este campo es independiente de evidenceStatus y continuityScopes:

- published_reference: registro que intenta referenciar material publicado; no significa que la evidencia de cada detalle esté confirmada.
- user_hypothesis: hipótesis del usuario.
- user_plan: planificación creativa.
- author_au: divergencia/AU escrita por el autor.

El validador impide que user_hypothesis o user_plan entren silenciosamente en CONT-MAIN-LN o CONT-AR; deben usar CONT-AU o CONT-UNVERIFIED, salvo una autorización transversal explícita. author_au requiere CONT-AU. Las pruebas generan esas fixtures en memoria; ninguna fixture se agrega a la cronología real.

## Por qué la migración conserva el formato anterior

No existe una fecha absoluta confirmada entre los 15 registros actuales. T−7 y T−5 se representan como desplazamientos aproximados respecto de T0; la persecución de Ryu queda entre T−5 y T0 sin duración numérica; los sucesos genéricamente “antes/después” conservan solo ese orden; los descensos con fecha no fijada permanecen unknown. Para los volúmenes 13–14 se conserva el contexto “meses después” en qualifier, sin transformarlo en un número de meses. La UI muestra por separado la clase/precisión temporal, la etiqueta original y el estado de evidencia.
