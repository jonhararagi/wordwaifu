# Reglas para modelar la cronología de DanMachi

## Principios

1. Guardar hechos temporales por separado: fecha del acontecimiento, fecha en que se conoce y fecha en que una fuente lo menciona no son necesariamente iguales.
2. Usar intervalos aproximados cuando la fuente solo indique “hace varios meses” o una referencia equivalente.
3. No convertir la edad actual de un personaje en su edad histórica sin calcular el intervalo y confirmar la fecha base.
4. Diferenciar “estaba en Orario”, “pertenecía a una Familia”, “había conocido a una persona” y “aparece en una escena”. Una condición no demuestra automáticamente las otras.
5. Cada presencia de personaje debe guardar al menos el ID del personaje, el momento/intervalo, el lugar si se conoce, el acontecimiento asociado y la fuente.
6. Si dos cronologías secundarias discrepan, conservar las dos referencias y marcar el conflicto en vez de combinar datos.
7. Las fechas inventadas por el autor para la AU deben etiquetarse como decisiones autorales, no como cronología oficial.

## Plantilla de evento

- event_id:
- title:
- event_summary:
- time_start:
- time_end:
- time_precision: exact, approximate, relative o unknown
- location_id:
- participants:
- source_refs:
- canon_status: verified, provisional, au_override, unknown
- confidence_note:
- consequences:
- related_events:
- author_decision:

## Uso en la premisa actual

“Cinco años antes” necesita un ancla explícita. Una vez fijada, todas las apariciones de Hestia, Loki, Eina y Bell deben compararse contra ella. No usar una tabla de cronología para ocultar una decisión AU: si se adelanta el descenso de Hestia, debe aparecer tanto la referencia canónica como la excepción elegida por el autor.

## Variantes temporales de personajes

Época y continuidad son ejes independientes. Una misma persona puede aparecer durante la época llamada “Era Oscura” y también en la historia principal sin convertirse en dos personajes. La ficha principal conserva la identidad; cada aparición/evento registra su estado temporal y sus relaciones, afiliación, ubicación, capacidades y conocimiento disponibles en ese momento.

Toda revisión debe especificar época/intervalo, continuidad y punto narrativo. Si la AU altera el pasado, registrar el evento detonante, la decisión autoral, los personajes afectados y las consecuencias; no editar silenciosamente la ficha canónica ni asumir que todos los acontecimientos posteriores permanecen intactos.

La premisa de que el OC conoce a su Familia durante la época denominada “Era Oscura” queda registrada como dirección narrativa del autor. La composición de la Familia, el significado exacto de “conoce” y la equivalencia cronológica oficial de esa etiqueta siguen pendientes.

Consultar el [modelo de identidad y variantes temporales](../characters/01-identidad-y-variantes-temporales.md).


## Intervalos relativos anclados a acontecimientos

- Conservar literalmente la relación temporal que indique el texto: «una semana después», «tres días antes», «dos días más tarde», «al día siguiente», etc.
- Un intervalo puede anclarse a T0 o a otro acontecimiento existente mediante `anchorId`; no forzar todos los intervalos a una fecha absoluta ni a T0.
- Registrar dirección (`before` / `after`), cantidad, unidad y precisión (`exact`, `approximate`, `estimated`). El `anchorLabel` identifica de forma legible el suceso de referencia.
- Si el texto solo indica «unos días» o una duración indeterminada, mantenerlo como intervalo impreciso o solo como orden relativo; nunca redondearlo a tres, cuatro o siete días por intuición.
- Si el texto no establece duración, conservar únicamente precedencia, simultaneidad o solapamiento; no inferir una distancia.
- Si una referencia posterior califica un suceso previo (por ejemplo, un rumor sobre un ascenso), registrar el rumor como evento de conocimiento/difusión separado y no convertirlo en hecho canónico.
- La validación debe comprobar que cada evento-ancla existe y que el grafo temporal no contiene ciclos.
- Toda relación temporal debe guardar localizador y fuente. Los localizadores de PDFs aportados por el usuario deben distinguir página física del PDF y paginación impresa cuando exista.

### Ejemplos aplicados a DMR-060
- Rumor de Ais nivel 6: una semana después de Udaeus; continúa siendo rumor.
- Bell agota pociones normales: tres días antes de la visita a Naaza.
- Lili ve Firebolt: un día antes de la incursión al piso 10.
- Bell y Lili vuelven a formar equipo: dos días después del rescate/reconciliación.
- Bell y Lili atraviesan pisos 8–9: «unos días», duración exacta desconocida.
