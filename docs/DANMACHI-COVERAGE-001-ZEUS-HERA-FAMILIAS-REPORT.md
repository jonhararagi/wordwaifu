# DANMACHI-COVERAGE-001 — Zeus/Hera y Familias históricas

**Estado:** cambios funcionales publicados; CI del SHA funcional pendiente de conclusión exacta. La enciclopedia global sigue PARTIAL.

## Resultado
- Creados [Zeus](../lore/danmachi/characters/zeus.md), [Hera](../lore/danmachi/characters/hera.md), [Maxim](../lore/danmachi/characters/maxim.md), [Meteria](../lore/danmachi/characters/dark-era/meteria.md), [Zeus Familia](../lore/danmachi/familias/zeus-familia.md) y [Hera Familia](../lore/danmachi/familias/hera-familia.md).
- Catálogo actualizado: 128 → **134 registros**; documentos: 108 → **109**.
- Añadidas fuentes comunitarias DMR-021-SRC-001..006 y un expediente de investigación con ocho claims y límites explícitos.
- Actualizados índices de deidades, Familias, personajes y MASTER_INDEX; vinculados Alfia, Zald, ERA-04/ERA-05 y los eventos candidatos históricos.

## Procedencia y canon
La prueba oficial de franquicia registrada como DMR-011-SRC-005 respalda, mediante el claim ya existente DMR-008-CLM-027, que Zeus Familia y Hera Familia derrotaron conjuntamente a Behemoth y Leviathan. Esa fuente no reparte un monstruo por Familia ni describe por sí sola fechas, participantes, bajas o secuencia.

Las referencias comunitarias se usan para localizar identidades, roster y posibles eventos, pero sus datos sobre Maxim, Meteria, Bell, capitanías, niveles, la expedición del Dragón Negro y la caída/expulsión de las Familias se mantienen con estado **secondary reference / primary locator pending**. No se atribuye la identidad de la capitanía de Hera mediante aliases especulativos.

Se resolvió el crosswalk de identidad sin duplicar fichas: el ID reservado CHAR-ALFIA apunta al expediente CHAR-DARK-ALFIA existente; CHAR-ZARD apunta a CHAR-DARK-ZALD. Meteria queda con spoiler mayor.

## SHA y pruebas
- Tip funcional: [`b279d1d70e739ce5aa992088dbf6884cea2a6941`](https://github.com/jonhararagi/wordwaifu/commit/b279d1d70e739ce5aa992088dbf6884cea2a6941).
- [Validate WordWaifu #39000909473](https://github.com/jonhararagi/wordwaifu/actions/runs/39000909473).
- [DanMachi Lore and Retrieval Integrity #39000909662](https://github.com/jonhararagi/wordwaifu/actions/runs/39000909662).
- Ambos workflows estaban `queued` en el último chequeo. Se debe registrar su conclusión final y confirmar el `head_sha` exacto; no se declara PASS_CI de antemano.
- Validación local: NOT_RUN.

## Punto de entrada y recuperación
También se actualizaron `lore/danmachi/README.md`, `docs/STATUS.md`, `docs/DONE.md` y `docs/CEREBRO_BOT_OBRERO_CONTROL.md` para que el trabajo de Zeus/Hera se encuentre desde el índice general y sea recuperable en la siguiente sesión. El nuevo checkpoint combinado requiere consultar su propio SHA real y las dos conclusiones de CI antes de cerrar el lote.

## Archivos nuevos
`characters/zeus.md`, `characters/hera.md`, `characters/maxim.md`, `characters/dark-era/meteria.md`, `familias/zeus-familia.md`, `familias/hera-familia.md`, `research/inbox/DANMACHI-RESEARCH-021-zeus-hera-familias.md`.

## Continuación
Priorizar pasajes primarios para la historia de las dos Familias, Great Quests y el Dragón Negro. Mantener distintos la derrota militar, la pérdida de posición, expulsión, disolución e inactividad. No dar por completa la enciclopedia ni pasar al generador principal todavía.

`main` permanece intacta; no hubo merges ni operaciones sobre PR.
