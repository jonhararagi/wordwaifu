# DANMACHI-COVERAGE-001 — seis fichas del roster manga de Loki

**Estado:** cambios publicados; CI del SHA funcional estaba en curso al redactar esta entrega. La misión global sigue IN_PROGRESS.

## Cambios

- Se añadieron seis fichas individuales de cobertura: [Nick](../lore/danmachi/characters/nick.md), [Nicole](../lore/danmachi/characters/nicole.md), [Ruuni](../lore/danmachi/characters/ruuni.md), [Shifon](../lore/danmachi/characters/shifon.md), [Stark](../lore/danmachi/characters/stark.md) y [Coco de Loki (manga)](../lore/danmachi/characters/coco-loki.md).
- Se añadieron sus seis IDs en `lore/danmachi/catalog.json` y en el índice de personajes; se enlazaron desde el expediente de Familia Loki.
- Se actualizó DMR-018-SRC-001 y se creó `lore/danmachi/research/inbox/DANMACHI-RESEARCH-019-loki-manga-roster.md`.
- Catálogo actual: **128 registros / 107 documentos**.
- Coco de Loki mantiene ID independiente de Coco Collins, personaje del expediente Soma Familia.

## Cautela de continuidad

La fuente comunitaria sitúa las apariciones de estos seis personajes en capítulos del manga de *Sword Oratoria* y advierte que algunos personajes del manga no están demostrados como los mismos que aparecen en la novela. Por eso las seis fichas quedan con `CONT-MANGA` y `secondary_reference_manga_only_primary_check_pending`. El equipo y magia de Shifon, por ejemplo, permanecen como atribuciones secundarias; no son confirmaciones primarias.

## Verificación

- 128 registros, sin IDs duplicados en la comprobación estática.
- Los seis IDs aparecen una vez cada uno en catálogo y en índice.
- Los 45 enlaces relativos de `lore/danmachi/familias/loki-familia.md` resuelven a rutas catalogadas, sin enlaces rotos.
- DMR-018-SRC-001 incluye los claims DMR-018-CLM-017..022.
- SHA funcional: [`66c7bf03d65e76e08055afcdfa151cda0b413ef5`](https://github.com/jonhararagi/wordwaifu/commit/66c7bf03d65e76e08055afcdfa151cda0b413ef5).
- [Validate WordWaifu — run 38989630921](https://github.com/jonhararagi/wordwaifu/actions/runs/38989630921) y [DanMachi Lore and Retrieval Integrity — run 38989630922](https://github.com/jonhararagi/wordwaifu/actions/runs/38989630922) estaban `IN_PROGRESS` al redactar.
- El SHA anterior `7a36e28d15c663e73b1bdde16d85537ae061119f` sí tiene los dos workflows en `success`: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/38989485820), [Lore Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/38989485783).
- Validación local: NOT_RUN.

## Próximos pasos

Cerrar la verificación exacta por SHA, continuar con el roster Loki que aún falte y cotejar los nombres alias pendientes. Luego, seguir con Soma y las deidades/Familias; todavía no declarar completa la enciclopedia ni pasar al generador principal. `main` y los PRs no se tocaron.
