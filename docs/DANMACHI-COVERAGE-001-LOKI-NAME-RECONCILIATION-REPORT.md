# DANMACHI-COVERAGE-001 — reconciliación de nombres secundarios de Loki

**Estado:** implementación publicada; la misión global continúa IN_PROGRESS.

## Cambios

- [Ficha de Narvi Roll / etiqueta anterior «Narfi»](../lore/danmachi/characters/narfi.md): añade Narvi Roll (ナルヴィ・ロール) y su romanización reportada como término de recuperación. Se conserva el ID legado `CHAR-LOKI-NARFI` y una sola ficha; la equivalencia con el nombre anterior del repo no se considera demostrada.
- [Ficha de Cruz Bussell](../lore/danmachi/characters/cruz.md): incorpora el nombre completo reportado por la fuente comunitaria sin crear otra identidad.
- Actualizados catálogo, índice de personajes y expediente de Familia Loki.
- Registradas fuentes comunitarias DMR-017-SRC-001..003 y creado el paquete `DANMACHI-RESEARCH-017-loki-name-reconciliation.md`.
- Catálogo: **107 registros / 105 documentos**.

## Procedencia y cautelas

Las referencias comunitarias identifican a Narvi Roll (ナルヴィ・ロール) y Cruz Bussell (クルス・バッセル), y atribuyen a ambos un debut en *Sword Oratoria*, volumen 4. Son referencias de investigación, no citas primarias. Un apunte anterior del repositorio utilizaba «Narfi» para una escena de briefing, pero capítulo/página nunca se registraron; no se fusiona definitivamente el nombre sin abrir y cotejar el texto autorizado.

## CI

- El checkpoint anterior `08c2d077235700d4d757ab04bacf464f674ba0fb` tuvo ambos workflows en success: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/38988792150), [Lore Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/38988792172).
- Para el SHA funcional `5c6dfccb66fe00bac18be0e5dfe249e55e4ff821`, ambos workflows estaban en curso durante la entrega: [Validate](https://github.com/jonhararagi/wordwaifu/actions/runs/38988972422), [Lore Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/38988972460).
- Validación local: NOT_RUN. Se debe volver a consultar CI para el SHA documental exacto tras guardarlo.

## Siguiente paso

Cotejar el nombre japonés y la escena de volumen 4 directamente. Luego cubrir los miembros de Loki que falten, sin convertir nombres exclusivos de manga/juego en canon de la novela, y seguir con Soma y las deidades/Familias. `main` no se modificó; no hubo merges ni operaciones sobre PR.
