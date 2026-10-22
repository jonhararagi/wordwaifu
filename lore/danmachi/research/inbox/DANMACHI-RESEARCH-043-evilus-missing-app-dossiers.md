---
id: DANMACHI-RESEARCH-043-EVILUS-MISSING-APP-DOSSIERS
title: Cinco expedientes de Evilus/era oscura integrados en la aplicación
status: application_dossiers_added_secondary_source_locator_pending
continuity: CONT-AR; CONT-SO; CONT-UNVERIFIED
---

# DANMACHI-RESEARCH-043 — Integración de cinco expedientes ausentes de la aplicación

- **Fecha:** 2026-10-22.
- **Rama:** `work/story-completion-danmachi-audit-2026-10`; `main` sin cambios.
- **Motivo:** Alecto, Apate, Thanatos, Basram y Valletta Grede ya tenían IDs/fichas en el catálogo, pero no tenían dossier dentro del registro visible `src/character-dossiers.js`. Se añadieron perfiles navegables y testeables bajo los IDs existentes; no se generaron identidades duplicadas.
- **Límite de evidencia:** se enlazan las páginas migradas EN/ES de Miraheze como fuente secundaria y se preservan incógnitas. No se presenta una escena de novela como leída ni se adivinan niveles, armas o magia personal.
- **Prioridad posterior:** extraer en una segunda pasada los apartados de personalidad/historia/habilidades/referencias que cada página de Miraheze publique con detalle y completar los claims en corpus si se justifica; después verificar escenas primarias.

## Fuentes

### DMR-043-SRC-001 — Alecto EN/ES
- `source_id`: DMR-043-SRC-001
- `source_title`: DanMachi Wiki — Alecto EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Alecto; https://danmachi.miraheze.org/wiki/Alecto
- `source_locator`: Main character page; History; Relationships; References
- `access_status`: current migrated pages identified; secondary source only

### DMR-043-SRC-002 — Apate Familia EN/ES (individual page 404)
- `source_id`: DMR-043-SRC-002
- `source_title`: DanMachi Wiki — Apate Familia/Familia Apate
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Apate_Familia; https://danmachi.miraheze.org/wiki/Familia_Apate
- `source_locator`: Information/Información; Members/Miembros; cited Astrea Record chapters
- `access_status`: current family pages read both languages; individual /Apate pages returned 404; secondary source only
- `limits`: No individual page was available. The source supports organizational facts and the roster, not a complete personal biography of Apate.

### DMR-043-SRC-003 — Thanatos EN/ES
- `source_id`: DMR-043-SRC-003
- `source_title`: DanMachi Wiki — Thanatos EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Thanatos; https://danmachi.miraheze.org/wiki/Thanatos
- `source_locator`: Main character page; History; Familia links; References
- `access_status`: current migrated pages identified; secondary source only

### DMR-043-SRC-004 — Basram EN/ES
- `source_id`: DMR-043-SRC-004
- `source_title`: DanMachi Wiki — Basram EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Basram; https://danmachi.miraheze.org/wiki/Basram
- `source_locator`: Main character page; Apate Familia/Spirit Soldiers links; References
- `access_status`: current migrated pages identified; secondary source only

### DMR-043-SRC-005 — Valletta Grede EN/ES
- `source_id`: DMR-043-SRC-005
- `source_title`: DanMachi Wiki — Valletta Grede EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Valletta_Grede; https://danmachi.miraheze.org/wiki/Valletta_Grede
- `source_locator`: Main character page; Thanatos Familia/Knossos/Sword Oratoria links; References
- `access_status`: current migrated pages identified; secondary source only

---

### DMR-043-CLM-001 · Alecto: deidad y afiliación histórica
- `claim_id`: DMR-043-CLM-001
- `claim`: Las páginas actuales de Alecto la describen como deidad de Evilus que buscaba destruir Orario y que permaneció en la ciudad durante más de 900 años. Alecto Familia fue derrotada siete años antes de la referencia comunitaria durante el Gran Conflicto; el roster de la Familia la sigue marcando activa tras la caída de los dependientes. Su personalidad combina comentarios sobre «seguir avanzando» y una supuesta posibilidad de llegar a amar a sus seguidores con el uso cruel de estos para entretenerse. Cuando Revinas Darda manifestó una maldición, Alecto habría mentido sobre la habilidad para asegurarse de que muriera llena de arrepentimiento y le dijo que no la ayudaría ni amaría. Las páginas le atribuyen Percepción Divina, Divinidad, Arcanum sellado y Espejo Divino restringido. Todo es una síntesis de la wiki, citada a Sword Oratoria vol. 15 cap. 4 y no cotejada directamente.
- `character_id`: CHAR-DARK-ALECTO
- `source_id`: DMR-043-SRC-001
- `source_title`: DanMachi Wiki — Alecto EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Alecto; https://danmachi.miraheze.org/wiki/Alecto; https://danmachien.miraheze.org/wiki/Alecto_Familia; https://danmachi.miraheze.org/wiki/Familia_Alecto
- `source_locator`: Personality; History; Abilities; Alecto Familia information/members
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-AR; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: No se copian habilidades de subordinados a la deidad.

### DMR-043-CLM-002 · Apate: deidad y vínculo con Spirit Soldiers
- `claim_id`: DMR-043-CLM-002
- `claim`: No hay una página individual accesible de Apate en los mirrors migrados; ambas URL /wiki/Apate devolvieron 404. La evidencia actual procede de Apate Familia: Apate figura como la deidad activa en el roster histórico. Su Familia fue una de las principales fuerzas de combate de Evilus; empleó drogas y maldiciones para fortalecer miembros prescindibles y experimentó con aventureros de segunda clase de Osiris Familia tras su derrota frente a Zeus/Hera. La Familia infundió poder de espíritus y creó doce Spirit Soldiers de nivel 5 con capacidades reportadas como magia sin canto y regeneración acelerada. La doctrina de la Familia se describe como fanática y contraria a la dignidad de personas y espíritus. Esto no demuestra que Apate ejecutara personalmente cada experimento ni permite inventar sus poderes o psicología individual. Las wikis enlazan Astrea Record vol. 1 caps. 9/11 y vol. 2 cap. 11 como pistas.
- `character_id`: CHAR-DARK-APATE
- `source_id`: DMR-043-SRC-002
- `source_title`: DanMachi Wiki — Apate EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Apate_Familia; https://danmachi.miraheze.org/wiki/Familia_Apate
- `source_locator`: Apate Familia: Information; Members; referenced Astrea Record chapters
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-AR; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: La autoría y mecánicas de Spirit Soldiers quedan pendientes de una cita específica.

### DMR-043-CLM-003 · Thanatos: deidad en la trama de Knossos
- `claim_id`: DMR-043-CLM-003
- `claim`: Thanatos aparece como un dios alto de cabello y ojos púrpura oscuro, con túnica negra desgarrada decorada en gris y púrpura. Las wikis lo describen como relajado, frívolo y sombrío en privado, aunque interpretaba una presencia digna y fascinante como dios de Evilus; la pose le resultaba cansadora y preguntó a Valletta si podía hacer el trabajo por él. Mantenía la calma, hablaba con Lefiya sin hostilidad, respondía preguntas con franqueza y podía comportarse de manera juguetona o inmadura, llamando a otros con el sufijo «-chan». Su motivación reportada para unirse a Evilus fue aumentar el número de muertes: amaba su trabajo celestial de purificar almas para su reencarnación y la caída de muertes durante la Era de los Dioses lo impulsó a buscar más trabajo. La wiki española le atribuye Intelecto Divino, Percepción Divina, Divinidad, Arcanum sellado y Espejo Divino restringido. Esta biografía pertenece al marco de Sword Oratoria/Knossos y sigue siendo secundaria.
- `character_id`: CHAR-DARK-THANATOS
- `source_id`: DMR-043-SRC-003
- `source_title`: DanMachi Wiki — Thanatos EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Thanatos; https://danmachi.miraheze.org/wiki/Thanatos; https://danmachien.miraheze.org/wiki/Thanatos_Familia; https://danmachi.miraheze.org/wiki/Familia_Thanatos
- `source_locator`: Appearance; Personality; Abilities; Thanatos Familia roster/Knossos
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-SO; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: No se infieren habilidades de Arcanum ni técnicas de combate por su divinidad.

### DMR-043-CLM-004 · Basram: identidad separada en el entorno de Apate Familia
- `claim_id`: DMR-043-CLM-004
- `claim`: Basram es descrito como hombre de mediana edad, corpulento y barbado, con túnica sacerdotal negra y púrpura, ojos delgados inquietantes y un shakujō manchado de sangre. Era fanático de Apate y consideraba a sí mismo y a sus dependientes apóstoles de una «herejía sagrada» destinada a cambiar el mundo mediante la injusticia; se enfurecía cuando sentía que iba contra la doctrina y llegó a usar a un miembro de la Familia como escudo humano. Las páginas le atribuyen fuerza sobrehumana por Falna, resistencia para responder después de quedar atravesado por una lanza y una espada y perder dos dedos, y sentidos mejorados. Su shakujō le permitía controlar a los Spirit Soldiers; una Daga del Espíritu (精霊の短剣) podía transformarlo en uno, aunque transformado fue derrotado rápidamente por los hermanos Gulliver heridos. El roster de Apate Familia deja su nivel numérico desconocido y enumera el estado como fallecido en la disolución. Species/raza se traduce como Raccoon/Mapache, con terminología por normalizar. Referencias de wiki: Astrea Record vol. 1 caps. 9/11, vol. 2 cap. 11 y vol. 3 caps. 2/6; no se leyeron los capítulos directamente.
- `character_id`: CHAR-DARK-BASRAM
- `source_id`: DMR-043-SRC-004
- `source_title`: DanMachi Wiki — Basram EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Basram; https://danmachi.miraheze.org/wiki/Basram; https://danmachien.miraheze.org/wiki/Apate_Familia; https://danmachi.miraheze.org/wiki/Familia_Apate
- `source_locator`: Appearance; Personality; Abilities; Equipment; Apate Familia roster
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-AR; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: Basram is not an alias of Apate; stable ID retained.

### DMR-043-CLM-005 · Valletta Grede: antagonismo de Thanatos Familia/Sword Oratoria
- `claim_id`: DMR-043-CLM-005
- `claim`: Valletta Grede se describe con cabello rosado de longitud media, ojos amarillos y ropa negra con líneas rojas, cinturón en el muslo y abrigo oscuro con ribete de piel. La wiki la sitúa en nivel 5 y afirma que, aunque tenía treinta y tantos años, la Falna la hacía parecer de finales de los veinte. Es una estratega metódica y sádica que disfrutaba matar y hacer sufrir, pero no era impulsiva: sus planes causaron problemas a Finn durante años y, según la wiki, sin ella Evilus habría caído tres años antes. Guardaba rencor personal a Finn por evitar la trampa del Nightmare del piso 27. Era una de las pocas personas que conocían la personalidad real de Thanatos y se permitía hablarle con rudeza; aun así, cuando Bete la acorraló habría suplicado por su vida. Shaldo es una barrera rara que reduce el status de quienes entran, vuelve a aplicar el efecto al moverse dentro de ella y alcanza un área de radio reportado de 60 metros; tiene canto largo, consume mucho Mind y deja de funcionar si Valletta abandona el área. Su espada maldita causaba heridas que no sanaban, y en la Era Oscura estaba en el primer puesto de la lista negra del Guild. Datos citados por las wikis, no escenas primarias cotejadas.
- `character_id`: CHAR-DARK-VALLETTA-GREDE
- `source_id`: DMR-043-SRC-005
- `source_title`: DanMachi Wiki — Valletta Grede EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Valletta_Grede; https://danmachi.miraheze.org/wiki/Valletta_Grede; https://danmachien.miraheze.org/wiki/Thanatos_Familia; https://danmachi.miraheze.org/wiki/Familia_Thanatos
- `source_locator`: Appearance; Personality; Abilities; Magic; Equipment; Thanatos Familia roster
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-SO; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: Maintain as secondary until the cited Sword Oratoria scenes are checked.

## Resultado
- Cinco perfiles que existían en el catálogo pero no en el registro visible de la aplicación fueron añadidos bajo sus IDs originales.
- Sus fichas muestran afiliación/contexto y campos explícitamente desconocidos; no se adjudican magias, rangos o motivaciones sin respaldo.
- Todos los claims DMR-043 quedan como evidencia secundaria. La siguiente pasada debe extraer los detalles por apartado de cada página migrada y verificar las escenas citadas antes de elevarlos a canon.
