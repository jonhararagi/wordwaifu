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