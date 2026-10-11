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
