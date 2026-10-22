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

### DMR-043-SRC-002 — Apate EN/ES
- `source_id`: DMR-043-SRC-002
- `source_title`: DanMachi Wiki — Apate EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Apate; https://danmachi.miraheze.org/wiki/Apate
- `source_locator`: Main character page; History; Relationships; References
- `access_status`: current migrated pages identified; secondary source only

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
- `claim`: Los registros de WordWaifu y las páginas comunitarias sitúan a Alecto como deidad de Alecto Familia dentro del contexto de Evilus y Astrea Record. Las acciones de la Familia y de Dina/Vena Dis no deben atribuirse automáticamente a la diosa como acciones personales; la cronología precisa y las motivaciones requieren escenas primarias.
- `character_id`: CHAR-DARK-ALECTO
- `source_id`: DMR-043-SRC-001
- `source_title`: DanMachi Wiki — Alecto EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Alecto; https://danmachi.miraheze.org/wiki/Alecto
- `source_locator`: Main profile; Familia affiliation; history/references
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-AR; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: No se copian habilidades de subordinados a la deidad.

### DMR-043-CLM-002 · Apate: deidad y vínculo con Spirit Soldiers
- `claim_id`: DMR-043-CLM-002
- `claim`: Apate se vincula a Apate Familia y al bloque de Evilus/Astrea Record; los registros de investigación asocian Spirit Soldiers con ese entorno. Sin una afirmación precisa de la fuente sobre autoría personal, las acciones de la Familia, Basram y los Spirit Soldiers deben mantenerse separadas de las decisiones de Apate. No se asignan niveles Falna ni magia individual por inferencia.
- `character_id`: CHAR-DARK-APATE
- `source_id`: DMR-043-SRC-002
- `source_title`: DanMachi Wiki — Apate EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Apate; https://danmachi.miraheze.org/wiki/Apate
- `source_locator`: Main profile; Familia links; history/references
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-AR; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: La autoría y mecánicas de Spirit Soldiers quedan pendientes de una cita específica.

### DMR-043-CLM-003 · Thanatos: deidad en la trama de Knossos
- `claim_id`: DMR-043-CLM-003
- `claim`: Thanatos aparece como deidad patrona de Thanatos Familia, relacionada en las páginas comunitarias con Evilus y la trama de Knossos de Sword Oratoria. Ese contexto no convierte todos los atentados o las decisiones de los miembros en actos personales de Thanatos ni autoriza a transferir los eventos a Astrea Record o a la novela principal. Su personalidad y habilidades individuales quedan sujetas a los datos concretos de la página y al cotejo de los capítulos citados.
- `character_id`: CHAR-DARK-THANATOS
- `source_id`: DMR-043-SRC-003
- `source_title`: DanMachi Wiki — Thanatos EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Thanatos; https://danmachi.miraheze.org/wiki/Thanatos
- `source_locator`: Main profile; Familia affiliation; Sword Oratoria/Knossos references
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-SO; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: No se infieren habilidades de Arcanum ni técnicas de combate por su divinidad.

### DMR-043-CLM-004 · Basram: identidad separada en el entorno de Apate Familia
- `claim_id`: DMR-043-CLM-004
- `claim`: Basram ya tiene un ID individual en el catálogo y está vinculado en los expedientes de investigación con Apate Familia, Evilus y Spirit Soldiers. El dossier de aplicación mantiene esa asociación como contexto, pero no inventa cargo, magia, nivel, autoría de técnicas colectivas ni relaciones personales que necesiten una escena concreta.
- `character_id`: CHAR-DARK-BASRAM
- `source_id`: DMR-043-SRC-004
- `source_title`: DanMachi Wiki — Basram EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Basram; https://danmachi.miraheze.org/wiki/Basram
- `source_locator`: Main profile; Apate Familia; Spirit Soldiers; references
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-AR; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: Basram is not an alias of Apate; stable ID retained.

### DMR-043-CLM-005 · Valletta Grede: antagonismo de Thanatos Familia/Sword Oratoria
- `claim_id`: DMR-043-CLM-005
- `claim`: Valletta Grede tiene un expediente individual en el catálogo y se asocia a Thanatos Familia, Evilus y Sword Oratoria. Su perfil de aplicación conserva el marco de Knossos como contexto de la trama, sin transferir esos eventos a Astrea Record ni inventar el cargo, las capacidades o la secuencia exacta de su desenlace si no aparece un pasaje concreto. Debe distinguirse la conducta personal de Valletta del conjunto de Evilus.
- `character_id`: CHAR-DARK-VALLETTA-GREDE
- `source_id`: DMR-043-SRC-005
- `source_title`: DanMachi Wiki — Valletta Grede EN/ES
- `source_type`: SECONDARY_WIKI
- `source_url`: https://danmachien.miraheze.org/wiki/Valletta_Grede; https://danmachi.miraheze.org/wiki/Valletta_Grede
- `source_locator`: Main profile; Thanatos Familia; Knossos; Sword Oratoria references
- `verification_status`: secondary_extract_only_primary_locator_pending
- `continuity_scope`: CONT-SO; CONT-UNVERIFIED
- `spoiler_level`: major
- `confidence_note`: Maintain as secondary until the cited Sword Oratoria scenes are checked.

## Resultado
- Cinco perfiles que existían en el catálogo pero no en el registro visible de la aplicación fueron añadidos bajo sus IDs originales.
- Sus fichas muestran afiliación/contexto y campos explícitamente desconocidos; no se adjudican magias, rangos o motivaciones sin respaldo.
- Todos los claims DMR-043 quedan como evidencia secundaria. La siguiente pasada debe extraer los detalles por apartado de cada página migrada y verificar las escenas citadas antes de elevarlos a canon.
