## DANMACHI-COVERAGE-003 — corrección del test de corpus (2026-10-17)

- **Hallazgo real de CI:** DanMachi Lore and Retrieval Integrity #794 falló en `tests/test_lore_corpus.cjs`: el índice devolvió 122 claims frente a 120 esperados tras añadirse dos claims explícitos de la sinopsis editorial del volumen 2.
- **Corrección:** ajustar las expectativas del test de corpus a 122 claims y 125 entradas buscables; no retirar ni ocultar las dos afirmaciones nuevas. La validación general #1535 estaba aún en curso en el checkpoint previo; volver a comprobar ambos workflows para el SHA posterior a esta corrección.
- **Base inmediata:** `b75b6a54dc0ba7839d069e9f6a6c383cbd6422ce`; el commit de esta corrección actualizará test y punto de reanudación.
- **Estado:** PASS_CI no declarado hasta verificar el nuevo SHA exacto. Pruebas locales NOT_RUN.
- **Restricciones:** mantener `main` intacta; sin merges ni operaciones de PR.

---

# DANMACHI-COVERAGE-003 — anclajes editoriales de Liliruca/Soma (2026-10-17)

**Estado de trabajo:** contenido publicado; aceptación pendiente de consultar Actions para el SHA exacto de este checkpoint. La enciclopedia global sigue PARTIAL y el trabajo global IN_PROGRESS.

- **Repositorio/rama:** `jonhararagi/wordwaifu` / `work/story-completion-danmachi-audit-2026-10`.
- **HEAD previo del checkpoint documental:** `ffee9140c049e4dd32bc387e4a6e3a1b79b4cf0a` (contenido funcional de la tanda).
- **Fuente editorial añadida:** DMR-013-SRC-014, GA Bunko, volumen 2: https://ga.sbcr.jp/product/9784797373073/.
- **Claims nuevos:** DMR-013-CLM-018 (primer equipo de Lili y Bell en la sinopsis editorial) y DMR-013-CLM-019 (reputación de Soma Familia y misterio del `神酒`). El estado es `source_checked_publisher_synopsis_only`: sin capítulo/página, no equivale a cotejo del texto completo.
- **Archivos funcionales modificados:** registro maestro de fuentes, paquete DANMACHI-RESEARCH-013, fichas de Liliruca/Soma/Soma Familia, índice de personajes y MASTER_INDEX.
- **IDs de personajes/familias:** no se crearon nuevos ni se duplicaron. No se cambia `catalog.json` porque no se añadió ninguna ficha/registro de lore; los claims y la fuente se integran en el dossier y el registro de fuentes existentes.
- **Pruebas locales:** NOT_RUN desde esta interfaz. Consultar las dos Actions para el SHA final de esta actualización antes de comunicar PASS_CI.
- **Restricciones:** `main` intacta; sin merges ni operaciones de PR.
- **Próxima prioridad:** localizar escenas primarias de los volúmenes 2/6 para los detalles de Lili, Chandra, Zanis y Soma; después continuar con el roster ordinario de Loki, Astrea, Soma y otras familias sin convertir candidatos de wiki en fichas completas.

---

# DONE / PUNTO DE RECUPERACIÓN — DANMACHI-COVERAGE-002

**Estado:** IN_PROGRESS para el trabajo global de enciclopedia; lote funcional Kaguya/Lyra + redes Zeus/Hera = PASS_CI en el SHA indicado.

## Rama y evidencia verificable
- Repositorio: `jonhararagi/wordwaifu`.
- Rama autorizada: `work/story-completion-danmachi-audit-2026-10`.
- **SHA de contenido validado:** `4efe1844c2c8adfb832f77db398f38e3409ee68c`.
- `Validate WordWaifu #1533`: SUCCESS en el SHA de contenido validado — https://github.com/jonhararagi/wordwaifu/actions/runs/39004303215
- `DanMachi Lore and Retrieval Integrity #792`: SUCCESS en el mismo SHA — https://github.com/jonhararagi/wordwaifu/actions/runs/39004303375
- El lote de preflight anterior también pasó ambos workflows en `958112385d0869ae4e68dffc762cfaff6d63613d`: Validate WordWaifu #1532 y DanMachi Lore and Retrieval Integrity #791.

## Cambios funcionales de DANMACHI-COVERAGE-002
- Ampliada `characters/gojouno-kaguya.md`: alias y epíteto, afiliación, papel/capacidades documentados en `CONT-ANIME`, vínculo de fricción y respeto con Ryuu, relación institucional con Alise, trazabilidad a DMR-007-CLM-002/023 y brechas de `CONT-AR`.
- Ampliada `characters/lyra.md`: especie, nivel y epíteto limitados a la fuente de adaptación; papel estratégico y apoyo de confianza a Ryuu con DMR-007-CLM-003/024; relaciones de familia sin inferir amistad donde solo hay afiliación; habilidades detalladas y cronología primaria pendientes.
- Corregida la contradicción en `familias/astrea-familia.md`: Kaguya/Lyra no quedan descritas solamente como descubrimientos secundarios; se separa expresamente el perfil oficial de adaptación de los localizadores de novela que faltan.
- Actualizado `characters/00-indice-personajes.md` para reflejar esos estados reales y conservar los mismos IDs.
- Añadidos mapas de relaciones con procedencia en `familias/zeus-familia.md` y `familias/hera-familia.md`. Se reusan `FAM-ZEUS`, `FAM-HERA`, `CHAR-MAXIM`, `CHAR-DARK-ZALD`, `CHAR-DARK-ALFIA` y `CHAR-METERIA`; no se crean clones.
- La referencia oficial auxiliar sostiene únicamente la victoria conjunta de Zeus Familia y Hera Familia contra Behemoth y Leviathan. No se asignan las bestias por separado. La capitanía histórica desconocida de Hera permanece sin nombre ni ID inventado.

## Integridad y límites
- CI verificó catálogo/IDs/enlaces; ambos workflows incluyen chequeo de sintaxis, pruebas de los modelos y browser smoke.
- Validación local: NOT_RUN desde esta interfaz.
- Catálogo observado antes de esta tanda funcional: 134 registros. Esta tanda modificó 6 archivos existentes y creó 0 IDs; la cantidad de registros no mide completitud semántica.
- `main` intacta; no se hicieron merges, ni cambios a PR.
- La enciclopedia completa sigue PARTIAL. Requieren trabajo: localizadores primarios individuales de Astrea Record; roster histórico por periodo de Astrea; cotejo primario de Zeus/Hera, Maxim, Alfia y Meteria; capitanía no identificada de Hera; y cobertura de Loki/Soma/secundarios y otras familias/dioses.

## Próxima acción exacta
1. Seguir desde el HEAD real de `work/story-completion-danmachi-audit-2026-10`; no retroceder a SHA históricos.
2. Trabajar el siguiente bloque de relaciones/fichas con fuentes recuperadas y claims existentes; primero revisar roster secundario y referencias originales antes de crear IDs.
3. Continuar separando `CONT-MAIN-LN`, `CONT-AR`, `CONT-ANIME`, `CONT-MANGA`, `CONT-GAME` y `CONT-AU`.
4. Verificar los dos workflows para cualquier nuevo SHA antes de declarar PASS_CI.
5. Mantener IN_PROGRESS mientras haya brechas sustanciales.

## Histórico de puntos de recuperación
- `DANMACHI-COVERAGE-001`: lote Zeus/Hera inicial, investigación y vínculos. Los informes previos están en `docs/DANMACHI-COVERAGE-001-ZEUS-HERA-FAMILIAS-REPORT.md` y en las demás notas COVERAGE-001.
- Lote Loki secundario: se añadieron expedientes navegables y se mantuvieron estados provisionales sin inflar la cobertura.
- Este documento prevalece como punto de reanudación sobre los resúmenes operativos anteriores; los informes históricos conservan el contexto de sus lotes.
