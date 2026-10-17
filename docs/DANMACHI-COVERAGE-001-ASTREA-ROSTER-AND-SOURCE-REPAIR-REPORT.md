# DANMACHI-COVERAGE-001 — reparación de fuentes y red de Astrea

**Estado:** cambios funcionales publicados; cobertura global DanMachi aún PARTIAL.

## Cambios realizados

1. **Registro de fuentes reparado.** Se añadieron las referencias DMR-003-SRC-001/002 y DMR-007-SRC-001..006 al registro maestro a partir de los paquetes de investigación existentes. Las entradas incluyen URL, tipo de fuente, continuidad, claims respaldados y límites de uso. Las referencias comunitarias siguen explícitamente como secundarias.
2. **Expediente de Familia Astrea ampliado.** Se enlazan las fichas ya existentes de Astrea, Alise Lovelace, Ryu/Ryuu Lion, Gojouno Kaguya, Lyra, Iska Bra, Mariyu/Maryuu Reage, Noin Unic, Neze Rankett, Asta Knox, Ryana Lietz y Celty Srowa. La sección distingue qué relación está respaldada por una sinopsis oficial, por un perfil oficial de adaptación o por una lista comunitaria.
3. **Separación de continuidad.** Cecil Blackliza, Iselina, Shau y Ulanda permanecen bajo una sección separada de Nueva Astrea Familia/Solingen. No se les fusiona automáticamente con el roster de `CONT-AR`; la cronología de esa afiliación sigue pendiente.
4. **Navegación bidireccional.** Se agregaron enlaces de retorno a Familia Astrea desde doce fichas históricas y cuatro fichas etiquetadas como grupo posterior/Solingen. Las fichas avisan que la afiliación compartida no demuestra amistad ni otras relaciones personales.
5. **Catálogo:** 107 registros y 104 documentos; no se añadieron duplicados de personajes que ya tenían expediente.

## Archivos clave

- [Expediente de Familia Astrea](../lore/danmachi/familias/astrea-familia.md)
- [Registro maestro de fuentes](../lore/danmachi/sources/00-registro-fuentes.md)
- [Paquete de investigación DMR-007](../lore/danmachi/research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md)

La investigación fuente incluye perfiles oficiales de DanMachi IV/V, sinopsis editorial de GA Bunko y referencias comunitarias. El perfil oficial de adaptación respalda solo las relaciones y rasgos que describe en esa continuidad; el roster comunitario sigue provisional para el detalle histórico y el texto íntegro de *Astrea Record* aún debe cotejarse por capítulo/página.

## Verificación

- Comprobación estática: los 12 IDs de fuente declarados por el expediente familiar existen en el registro maestro; sus 16 enlaces relativos resuelven a rutas catalogadas.
- CI exacto SHA `5202ed029fe4d7f768c923f60639841fad0c1567`: [Validate WordWaifu — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38988480037), [DanMachi Lore and Retrieval Integrity — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38988480040).
- CI exacto SHA `b2b449a678f17f1d3f3a751f14af7f62b3db3319`: [Validate WordWaifu — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38988565677), [DanMachi Lore and Retrieval Integrity — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38988565690).
- En la última consulta los workflows de `9d9a3dd...`, `5e1bd33...` y `dac71211e69472cdbd8b527ee7f2b0b54b41ddbd` seguían en curso. Volver a consultarlos y verificar asimismo el SHA de este checkpoint documental antes de declarar PASS_CI para el estado completo.
- Validación local: NOT_RUN.
- `main` no se modificó. No hubo merges ni operaciones sobre PR.

## Pendientes

Cotejar capítulo/página en las novelas para las relaciones y el roster histórico, confirmar la fecha/pertenencia de la agrupación posterior de Solingen, y seguir con los aliases de Loki y la cobertura de Soma/deidades/Familias.
