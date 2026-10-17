# DANMACHI-COVERAGE-001 — Tanda 3: Arcs, Cynthia y Orba

**Estado:** implementación publicada. CI del SHA funcional estaba iniciándose al redactar la entrega; la misión global continúa IN_PROGRESS.

## Cambios

- Tres expedientes individuales nuevos:
  - [Arcs](../lore/danmachi/characters/arcs.md) — `CHAR-LOKI-ARCS`.
  - [Cynthia](../lore/danmachi/characters/cynthia.md) — `CHAR-LOKI-CYNTHIA`.
  - [Orba](../lore/danmachi/characters/orba.md) — `CHAR-LOKI-ORBA`.
- Catálogo de **104 a 107 registros**; 104 documentos catalogados.
- Índice de personajes, índice de Familias y expediente de Familia Loki enlazan los nuevos expedientes.
- Fuente comunitaria DMR-016-SRC-001 y el informe de investigación DMR-016 quedaron registrados.

## Procedencia y límites

Los tres expedientes se basan por ahora en una referencia comunitaria que indica como debuts *Sword Oratoria*, volumen 7. No se cotejaron los capítulos o páginas de la novela y no se inventaron localizadores. Arcs conserva únicamente los datos mínimos informados; Cynthia queda sin nivel, raza o hechizos; Orba conserva el conflicto de fuente entre «aventurero» y «ayudante/supporter». Ninguna de las fichas se considera biografía completa.

La página oficial de perfiles de *Sword Oratoria* sirve para contextualizar los personajes principales, pero no presenta perfiles individuales de estos tres miembros. La fuente comunitaria se trata como índice de búsqueda, no como canon primario. ([Página oficial de personajes](https://danmachi.com/sword_oratoria/character/), [referencia comunitaria: Minor Characters](https://danmachi.fandom.com/wiki/Minor_Characters)).

## SHA y CI

- SHA anterior de rama: `4d0d2ea42078b9066c98b6caceb519c8d83cac91`.
- SHA funcional: [`91625334628fe21f7d99930876fc049294c5d794`](https://github.com/jonhararagi/wordwaifu/commit/91625334628fe21f7d99930876fc049294c5d794).
- [Validate WordWaifu — run 38988164201](https://github.com/jonhararagi/wordwaifu/actions/runs/38988164201).
- [DanMachi Lore and Retrieval Integrity — run 38988164371](https://github.com/jonhararagi/wordwaifu/actions/runs/38988164371).
- En el momento de redactar el documento, Validate WordWaifu estaba `queued` y el workflow de integridad `in_progress`; no equivale a PASS. El SHA documental requiere verificación CI independiente.
- Validación local: NOT_RUN.

## Archivos

`lore/danmachi/characters/arcs.md`, `cynthia.md`, `orba.md`, `lore/danmachi/catalog.json`, `lore/danmachi/sources/00-registro-fuentes.md`, `lore/danmachi/characters/00-indice-personajes.md`, `lore/danmachi/familias/00-indice-familias.md`, `lore/danmachi/familias/loki-familia.md`, `lore/danmachi/research/inbox/DANMACHI-RESEARCH-016-loki-tertiary-roster.md`, además de los tres documentos operativos de recuperación.

## Continuación

Primero se confirman los workflows de esta tanda. Después se cotejan y amplían los miembros de Loki todavía sin expediente, antes de pasar a Astrea, Soma y las deidades/Familias pendientes. `main` no se modificó; no hubo merges ni operaciones sobre PR.
