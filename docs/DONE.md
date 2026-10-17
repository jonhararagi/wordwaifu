## DANMACHI-COVERAGE-008 — seguimiento de acceso primario al relato de Rakta (2026-10-17)

- **Estado:** IN_PROGRESS; no se leyó el relato en texto primario.
- **Hallazgo nuevo:** Suruga-ya identifica un folleto de 4 páginas de Gamers para *Sword Oratoria* vol. 12 con el título «花束の代わりに捧ぐ狼の咆哮» (DMR-023-SRC-003). Es metadato secundario, no evidencia del contenido.
- **Ruta oficial:** la ficha de SB Creative para 掌編集２ enlaza una muestra «試し読み», pero el destino devolvió error 500/no accesible mediante la herramienta web (DMR-023-SRC-004). No se obtuvieron páginas legibles.
- **Dictamen:** la escena de Rakta, Gareth y Bete sigue como referencia secundaria pendiente; no se confunde con el reporte de piso 37 del vol. 2.
- **Pendiente:** acceder a la muestra desde navegador autorizado o consultar copia legítima de la recopilación; cotejar por separado el vol. 2.
- **Pruebas locales:** NOT_RUN; CI del HEAD actual en curso/por comprobar.
- **main:** sin cambios; sin merges ni operaciones de PR.

---

## DANMACHI-COVERAGE-007 — auditoría de localizadores de Elfy Colette (2026-10-17)

- **Estado:** IN_PROGRESS; no se completó el cotejo primario.
- **Rama autorizada:** work/story-completion-danmachi-audit-2026-10. HEAD base: 0174743fce8e398b987d5779b404a0977ec904f4.
- **Resultado verificable:** las sinopsis oficiales de DanMachi vol. 10 y Sword Oratoria vol. 6 fueron registradas en DMR-024-SRC-001/002. Aportan contexto editorial, pero no nombran a Elfy/Lomoire ni verifican sus rasgos individuales.
- **Muestra SO6:** DMR-024-SRC-003 registra que el visor devolvió “Could not download. Please check your network connection.” No se leyeron páginas; el fallo no prueba que el personaje esté ausente del libro.
- **Ficha:** CHAR-LOKI-ELFY-COLETTE conserva su ID y el estado secondary_reference_primary_locator_pending. Se quitó CONT-ANIME del alcance no verificado. Alias, afiliación, magia de fuego, personalidad y relación con Lefiya siguen como afirmaciones secundarias.
- **Catálogo:** 134 registros / 112 documentos. Estas cantidades no equivalen a cobertura completa.
- **Pendiente concreto:** cotejar el texto autorizado de ambos volúmenes y registrar localizador exacto solo después de leer el pasaje.
- **Pruebas locales:** NOT_RUN; CI del SHA documental nuevo pendiente de consultar.
- **main:** sin cambios; sin merges ni operaciones de PR.

---

## DANMACHI-COVERAGE-006 — reconciliación de escenas de Rakta Haze (2026-10-17)

- **Rama autorizada:** `work/story-completion-danmachi-audit-2026-10`; `main` sin cambios, sin merge ni operaciones de PR.
- **Corrección principal:** se separó el reporte del piso 37 en *Sword Oratoria* vol. 2 de la escena atribuida por fuente comunitaria a la historia extra «花束の代わりに捧ぐ狼の咆哮», asociada al vol. 12.
- **Procedencia:** DMR-023-SRC-001 es secundaria y describe el bonus; DMR-023-SRC-002 es la ficha oficial de `掌編集２`, que confirma el alcance general de la recopilación, pero no confirma por separado la historia individual.
- **Fichas y claims:** `CHAR-LOKI-RAKTA-HAZE` conserva el mismo ID y `secondary_reference_primary_locator_pending`. DMR-015-CLM-002 se limita al reporte del vol. 2/piso 37; DMR-023-CLM-001 registra la escena del cementerio como pista secundaria; DMR-023-CLM-002 describe solo el alcance editorial general. No se añadieron claims primarios verificados.
- **Catálogo:** 134 registros / 111 documentos. Las cantidades miden estructura, no completitud.
- **Siguiente paso:** cotejar el pasaje del piso 37 y el relato bonus por separado, usando texto autorizado. No transferirlos a anime sin evidencia.
- **Pruebas locales:** NOT_RUN; validar ambos workflows para el SHA documental final.
- **Estado global:** DanMachi IN_PROGRESS; enciclopedia PARTIAL.

---

## DANMACHI-COVERAGE-005 — procedencia Sword Oratoria vol. 4 y corrección de renderizado (2026-10-17)

- **Rama autorizada:** `work/story-completion-danmachi-audit-2026-10`; `main` sin cambios, sin merges ni operaciones de PR.
- **Alcance de lore:** corregida la trazabilidad de Aki y Alicia; sus escenas del briefing ya no se presentan como pasajes primarios cotejados. El registro editorial de GA Bunko y la vista previa autorizada están delimitados por alcance.
- **Fuentes nuevas:** `DMR-022-SRC-001` (sinopsis oficial de volumen 4; contexto general) y `DMR-022-SRC-002` (muestra BOOK☆WALKER de 30 páginas iniciales; no llega a la escena buscada). La muestra no menciona a Aki/Narvi/Cruz/Alicia/Raul en el segmento revisado; esto no prueba que estén ausentes en el volumen completo.
- **Fichas/catálogo:** Aki = `secondary_reference_primary_locator_pending`; Alicia = `primary_novel_locator_pending`. Estados de frontmatter e índice estructurado sincronizados; Narfi/Narvi Roll y Cruz/Cruz Bussell conservan IDs únicos provisionales. No se crearon IDs de personaje.
- **Documentación:** se añadió `RESEARCH-DM-022` y quedó indexado en el catálogo. Recuento observado tras esta tanda: 134 registros / 110 documentos; el número no equivale a porcentaje de cobertura.
- **Corrección funcional incidental validada:** la eliminación de referencias visuales podía terminar siendo sobreescrita por una renderización asíncrona antigua. `src/danmachi-visual-references.js` ahora descarta resultados con versión de caché obsoleta.
- **CI del fix funcional exacto `eefd4ae5e0d6d81d244ae9efe324d14c4e480cf7`:** Validate WordWaifu #1541 SUCCESS (https://github.com/jonhararagi/wordwaifu/actions/runs/39011017441); DanMachi Lore and Retrieval Integrity #799 SUCCESS (https://github.com/jonhararagi/wordwaifu/actions/runs/39011017430).
- **Validación local:** NOT_RUN desde esta interfaz. El checkpoint documental que incorpora la muestra y sincroniza estos documentos debe validarse también por ambos workflows en su SHA final.
- **Estado general:** DanMachi IN_PROGRESS; enciclopedia PARTIAL.
- **Siguiente acción:** seguir con la siguiente prioridad (Rakta, Sword Oratoria vol. 2) buscando un localizador directo; no inferir raza, nivel por etapa, miedo o relación a partir solo de wikis.

---

## DANMACHI-COVERAGE-004 — checkpoint de matriz Loki (2026-10-17)

- **Rama:** `work/story-completion-danmachi-audit-2026-10`.
- **Base verificada:** `6a71c496da7db98398ce2ac014c57b2e6766d9a7`.
- **Cambio:** mapa de cobertura por clase de evidencia y cola de cotejo en `lore/danmachi/familias/loki-familia.md`; se sincronizaron `lore/danmachi/WORK_QUEUE.md` y `lore/danmachi/BATCH_LOG.md`.
- **Alcance:** documentación y navegación; no se añadieron fichas ni IDs. Los miembros secundarios siguen provisionales y las entradas manga/juego no se convierten en canon de novela.
- **CI del checkpoint anterior:** Validate WordWaifu #1538 SUCCESS y DanMachi Lore and Retrieval Integrity #797 SUCCESS para `6a71c496da7db98398ce2ac014c57b2e6766d9a7`.
- **Pruebas locales de este cambio:** NOT_RUN. Consultar ambos workflows para el SHA documental final antes de aceptar este checkpoint.
- **Estado global:** DanMachi IN_PROGRESS; enciclopedia PARTIAL.
- **Restricciones:** `main` intacta; sin merges ni operaciones de PR.

---

## DANMACHI-COVERAGE-003 — corrección del test de corpus (2026-10-17)

- **Hallazgo real de CI (intento corregido):** DanMachi Lore and Retrieval Integrity #794 falló en `tests/test_lore_corpus.cjs` porque el índice devolvió 122 claims frente a 120 esperados tras añadirse dos claims explícitos de la sinopsis editorial del volumen 2.
- **Corrección:** ajustar las expectativas del test de corpus a 122 claims y 125 entradas buscables; no retirar ni ocultar las dos afirmaciones nuevas. La corrección pasó el test del corpus y las pruebas de navegador.
- **Base inmediata:** `b75b6a54dc0ba7839d069e9f6a6c383cbd6422ce`; el commit de esta corrección actualizará test y punto de reanudación.
- **Estado del snapshot funcional:** PASS_CI en `f14945bfd09545f47666ac9af00c2fe54bcd5782`. Pruebas locales NOT_RUN.
- **Evidencia CI del snapshot de contenido y test `f14945bfd09545f47666ac9af00c2fe54bcd5782`:** Validate WordWaifu #1537 **SUCCESS** (https://github.com/jonhararagi/wordwaifu/actions/runs/39005140262) y DanMachi Lore and Retrieval Integrity #796 **SUCCESS** (https://github.com/jonhararagi/wordwaifu/actions/runs/39005140287), ambos vinculados al mismo SHA. El primer intento del código funcional había fallado solo por la expectativa de conteo obsoleta; la corrección a 122 claims y 125 entradas fue aceptada por el corpus test.
- **Control del commit documental:** este checkpoint mueve el HEAD solo para persistir evidencia y debe verificarse en Actions de la nueva cabeza.
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
