# DONE / PUNTO DE RECUPERACIÓN — DANMACHI-COVERAGE-001

**Estado:** IN_PROGRESS; la enciclopedia DanMachi permanece PARTIAL.

## Rama y HEAD

- Repositorio: `jonhararagi/wordwaifu`.
- Rama autorizada: `work/story-completion-danmachi-audit-2026-10`.
- HEAD funcional antes de este checkpoint: `5c6dfccb66fe00bac18be0e5dfe249e55e4ff821`.
- El commit documental de este punto será el HEAD posterior; comprobar la punta real y sus workflows en el SHA exacto antes de iniciar más escrituras.
- Informe actual: [DANMACHI-COVERAGE-001 — reconciliación de nombres Loki](DANMACHI-COVERAGE-001-LOKI-NAME-RECONCILIATION-REPORT.md).
- Informes anteriores: [Astrea — fuentes y red](DANMACHI-COVERAGE-001-ASTREA-ROSTER-AND-SOURCE-REPAIR-REPORT.md), [Loki secundarios](DANMACHI-COVERAGE-001-LOKI-SECONDARY-MEMBERS-REPORT.md), [Loki terciarios](DANMACHI-COVERAGE-001-LOKI-TERTIARY-ROSTER-REPORT.md).

## Tanda actual: reconciliación de identidad/alias

- Actualizado `lore/danmachi/characters/narfi.md`, ID heredado `CHAR-LOKI-NARFI`: el nombre que la fuente comunitaria reporta como Narvi Roll (ナルヴィ・ロール; Naruvī Rōru) se añade como término de recuperación. La identidad con el «Narfi» de notas anteriores queda **sin resolver** hasta cotejar el briefing de *Sword Oratoria* volumen 4 en una edición autorizada; se conserva una sola ficha provisional.
- Actualizado `lore/danmachi/characters/cruz.md`, ID `CHAR-LOKI-CRUZ`: «Cruz Bussell» (クルス・バッセル) añadido como nombre completo reportado por fuente secundaria.
- Actualizado el catálogo a 107 registros / 105 documentos, la entrada del índice de personajes y los enlaces del expediente de Familia Loki.
- Registradas fuentes DMR-017-SRC-001..003 y creado `lore/danmachi/research/inbox/DANMACHI-RESEARCH-017-loki-name-reconciliation.md`.
- No se crearon nuevos IDs de personaje; el expediente Narfi mantiene su ID/slug legado hasta cerrar la correspondencia.

## CI observado

- El checkpoint funcional previo `08c2d077235700d4d757ab04bacf464f674ba0fb` tuvo ambos workflows en success para el SHA exacto: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/38988792150), [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/38988792172).
- En el momento de esta entrega, CI para el SHA funcional actual `5c6dfccb66fe00bac18be0e5dfe249e55e4ff821` estaba en curso: [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/38988972422), [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/38988972460).
- Validación local: **NOT_RUN**.
- El SHA documental de este checkpoint requiere su propia verificación CI exacta. No trasladar resultados de un commit anterior al actual.

## Trabajo previo conservado

- Loki: fichas provisionales para Elfy Colette, Rakta Haze, Arcs, Cynthia y Orba; alias secundario Anakitty Autumn en Aki.
- Astrea: registro de fuentes reparado para DMR-003/007; roster histórico navegable y enlaces de retorno desde 12 perfiles históricos; enlaces separados para Cecil, Iselina, Shau y Ulanda como grupo relacionado con Nueva Astrea/Solingen.
- Catálogo actual: 107 registros, 105 documentos.
- Las wikis se mantienen como fuentes secundarias y las diferencias entre novela, adaptación, manga y AU no se fusionan.

## Próxima acción exacta

1. Consultar CI de este SHA funcional y del checkpoint documental exacto.
2. Resolver la correspondencia Narfi/Narvi Roll y el pasaje de Cruz Bussell en *Sword Oratoria* volumen 4, sin inventar capítulo/página.
3. Continuar cubriendo miembros de Loki que falten, separando personajes exclusivamente de manga/juego de los respaldados por la novela.
4. Después, ampliar Soma y las deidades/Familias pendientes, manteniendo esta misión abierta hasta que la cobertura esté demostrada.

## Permisos

- `main` intacta; no se hicieron merges ni operaciones sobre PR.
- No elevar afirmaciones secundarias a canon verificado.
