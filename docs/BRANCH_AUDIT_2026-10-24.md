# Auditoría de ramas de WordWaifu

- **Corte:** 2026-10-24 UTC.
- **Repositorio:** [jonhararagi/wordwaifu](https://github.com/jonhararagi/wordwaifu).
- **Base de comparación:** `main` en `21f0482f3ba23142866e5534d2368ba43233668f`.
- **Método:** comparación de GitHub `main...rama` para cada referencia no principal; cruce con las PR devueltas por GitHub y revisión de las PR cerradas no fusionadas que podían parecer recuperables. Los valores “ahead/behind” son el resultado de la comparación al corte, no un porcentaje de trabajo hecho.

## Resultado ejecutivo

| Medida | Resultado |
|---|---:|
| Referencias no principales encontradas | 101 |
| Divergidas (tienen commits exclusivos y también están detrás de main) | 87 |
| Solo detrás de main (sin commits exclusivos según la comparación) | 14 |
| Ahead-only / listas para integrar sin ponerse al día | 0 |
| PR registradas en el índice consultado | 85 |
| PR fusionadas | 60 |
| PR cerradas sin fusionar | 25 |
| PR abiertas | 0 |

**Decisión:** ninguna rama se considera apta para fusionar íntegramente contra el main actual. Todas las 101 referencias no principales están al menos un commit detrás de `main`; muchas tienen cientos de commits de divergencia. Un contador “ahead” no demuestra trabajo nuevo sin integrar: los merges tipo squash dejan ramas antiguas con commits no compartidos aunque su contenido útil ya se haya rescatado en una PR posterior. No se fusionó ninguna rama antigua a ciegas.

## Código funcional efectivamente integrado

Las tres PR siguientes ya están fusionadas en `main` y forman el cambio funcional reciente; no hay que volver a importar las ramas de origen:

- [PR #85 — parentesco Alfia–Bell desde entrevista sobre la novelización](https://github.com/jonhararagi/wordwaifu/pull/85): incorpora `DMR-045-CLM-007` y una arista navegable bajo `CONT-AR`. La entrevista es evidencia autoral complementaria, no un localizador de página/capítulo.
- [PR #86 — evidencia de origen del juego separada](https://github.com/jonhararagi/wordwaifu/pull/86): agrega `DMR-045-CLM-008` en `CONT-GAME`, sin identificar a la hermana como Meteria ni trasladar el dato al canon principal.
- [PR #87 — nivel de fuente propio para entrevistas](https://github.com/jonhararagi/wordwaifu/pull/87): incorpora el grupo visual “ENTREVISTA AUTORAL” al navegador de fuentes, separado de páginas oficiales/editoriales y de wikis comunitarias.

### CI en los commits exactos

| Commit de main | Validate WordWaifu | DanMachi Lore and Retrieval Integrity |
|---|---|---|
| `825bdddd3789ae6d494a36921c32173d0083f7da` (PR #85) | [Éxito #2899](https://github.com/jonhararagi/wordwaifu/actions/workflows/validate.yml) | [Éxito #1605](https://github.com/jonhararagi/wordwaifu/actions/workflows/danmachi-lore-check.yml) |
| `7959def50325ca0ae9fd8275c5724ad9c4191ad1` (PR #86) | [Éxito #2915](https://github.com/jonhararagi/wordwaifu/actions/workflows/validate.yml) | [Éxito #1607](https://github.com/jonhararagi/wordwaifu/actions/workflows/danmachi-lore-check.yml) |
| `21f0482f3ba23142866e5534d2368ba43233668f` (PR #87, main actual al corte) | [Éxito #2921](https://github.com/jonhararagi/wordwaifu/actions/workflows/validate.yml) | [Éxito #1609](https://github.com/jonhararagi/wordwaifu/actions/workflows/danmachi-lore-check.yml) |

## PR cerradas sin fusionar: tratamiento

Las PR cerradas sin fusionar no son una cola de fusiones. El historial visible identifica estos grupos como sustituidos o rescatados posteriormente:

- **#74, #73:** los metadatos del cuadernillo de *Astrea Record 3*, sus relaciones AU permitidas y la entrada de muestra de *Astrea Record 1* se rescataron con IDs separados en #75, #76 y las integraciones posteriores. La arista Alfia→Zald que no tenía localizador narrativo no se reimportó.
- **#65:** reemplazada por #66, basada en un main posterior.
- **#57:** el inventario Prototype se rescató y corrigió mediante #61, incluyendo la colisión de IDs y pruebas de continuidad.
- **#40, #41:** sustituidas por #44 y el arreglo de índice #43; Afterglow y los dossiers quedaron bajo IDs/procedencia secundaria actualizados.
- **#28–#24:** propuestas duplicadas de ubicaciones Orario; el lote validado se integró por #29.
- **#21, #20, #19:** las funciones del Story Forge se rescataron selectivamente en la implementación vigente, entre otras mediante #30–#32; no se copió el editor antiguo en bloque.
- **#13, #12, #10, #9:** reemplazadas por la integración consolidada #14.
- **#15, #7, #6, #5, #3, #2, #1:** PR históricas cerradas. En el historial consultado no apareció una nota final que demostrara un cambio exclusivo aún pendiente de integrar. Por su divergencia/antigüedad, permanecen archivadas; si se necesita alguna conducta concreta, debe rescatarse desde su diff sobre el main actual y volver a validarse, no fusionar la rama completa.

No se borraron las ramas remotas como efecto colateral de esta auditoría. La conservación de una referencia histórica no significa que esté aprobada ni lista para fusionar.

## Inventario completo de ramas no principales

“Ahead” y “behind” son conteos de commits frente al `main` indicado en la cabecera.

| Rama | Ahead | Behind | Clasificación |
|---|---:|---:|---|
| `feature/danmachi-lore-poc` | 393 | 495 | Divergida |
| `feature/story-foundry-chapter-arc-2026-10` | 4 | 474 | Divergida |
| `fix/connect-bell-hestia-meeting-event-2026-10-20` | 3 | 153 | Divergida |
| `fix/danmachi-au-duration-evidence-2026-10-23` | 1 | 8 | Divergida |
| `fix/lore-archive-spanish-continuity-test` | 379 | 495 | Divergida |
| `fix/preserve-legacy-relationship-links-2026-10-20` | 4 | 154 | Divergida |
| `fix/preserve-legacy-relationships-during-app-recovery-2026-10-20` | 3 | 152 | Divergida |
| `foundation/story-foundry-north-star` | 144 | 495 | Divergida |
| `improve/all-dossiers-integrity-2026-10-21` | 2 | 133 | Divergida |
| `improve/repository-contracts-status-sync-2026-10-21` | 4 | 134 | Divergida |
| `lore/connect-eina-advisor-event-2026-10-20` | 3 | 151 | Divergida |
| `verify/lore-depth-ci` | 348 | 495 | Divergida |
| `work/art-studio-and-character-dossiers-2026-10` | 282 | 495 | Divergida |
| `work/audit-baseline-2026-10-12` | 6 | 493 | Divergida |
| `work/complete-danmachi-wiki-kaguya-relations-2026-10-20` | 3 | 163 | Divergida |
| `work/connected-lore-power-catalog-2026-10` | 344 | 495 | Divergida |
| `work/danmachi-astrea-departure-event-registration-2026-10-19` | 1 | 288 | Divergida |
| `work/danmachi-astrea-record-final-day-excerpt-2026-10-23` | 9 | 6 | Divergida |
| `work/danmachi-astrea-record-vol3-preview-metadata-only-2026-10-23` | 8 | 5 | Divergida |
| `work/danmachi-au-scenario-navigation-2026-10-23` | 3 | 9 | Divergida |
| `work/danmachi-author-au-caregiver-graph-2026-10-23` | 6 | 14 | Divergida |
| `work/danmachi-cast-coverage-images-2026-10` | 296 | 495 | Divergida |
| `work/danmachi-character-completion-2026-10-20` | 0 | 137 | Solo detrás |
| `work/danmachi-character-completion-dark-era-2026-10` | 25 | 135 | Divergida |
| `work/danmachi-character-coverage-2026-10-20` | 1 | 150 | Divergida |
| `work/danmachi-daedalus-short-story-continuity-2026-10-23` | 10 | 17 | Divergida |
| `work/danmachi-daedalus-sword-oratoria-vol7-2026-10-23` | 10 | 19 | Divergida |
| `work/danmachi-dmr045-astrea3-au-provenance-2026-10-23` | 11 | 14 | Divergida |
| `work/danmachi-dmr045-au-source-provenance-2026-10-23` | 6 | 16 | Divergida |
| `work/danmachi-dmr045-author-note-profile-routes-2026-10-23` | 5 | 15 | Divergida |
| `work/danmachi-dmr045-limited-edition-source-2026-10-23` | 4 | 14 | Divergida |
| `work/danmachi-dmr045-official-preview-reader-index-2026-10-23` | 8 | 14 | Divergida |
| `work/danmachi-dossier-depth-2026-10` | 253 | 495 | Divergida |
| `work/danmachi-factual-coverage-2026-10-18` | 3 | 293 | Divergida |
| `work/danmachi-haze-heith-identity-2026-10-21` | 0 | 74 | Solo detrás |
| `work/danmachi-orario-first-pass-2026-10-20` | 1 | 135 | Divergida |
| `work/danmachi-orario-inventory-source-contract-2026-10-21` | 0 | 118 | Solo detrás |
| `work/danmachi-orario-north-plaza-2026-10-23` | 11 | 21 | Divergida |
| `work/danmachi-orario-published-locations-2026-10-23` | 16 | 20 | Divergida |
| `work/danmachi-orario-publisher-preview-2026-10-23` | 16 | 22 | Divergida |
| `work/danmachi-organization-graph-2026-10-20` | 2 | 136 | Divergida |
| `work/danmachi-place-relations-ci-verified-2026-10-18` | 3 | 292 | Divergida |
| `work/danmachi-place-relations-counts-fixed-2026-10-18` | 5 | 292 | Divergida |
| `work/danmachi-place-relations-official-glossary-2026-10-18` | 3 | 292 | Divergida |
| `work/danmachi-place-relations-parser-fixed-2026-10-18` | 4 | 292 | Divergida |
| `work/danmachi-place-relations-search-fixed-2026-10-18` | 3 | 292 | Divergida |
| `work/danmachi-place-relations-validated-tree-2026-10-18` | 2 | 292 | Divergida |
| `work/danmachi-progressive-analysis-orario-2026-10-20` | 7 | 160 | Divergida |
| `work/danmachi-release-horizon-2026-10-21` | 0 | 99 | Solo detrás |
| `work/danmachi-rivira-floor18-official-glossary-2026-10-21` | 0 | 73 | Solo detrás |
| `work/danmachi-secondary-roster-expansion-2026-10-20` | 0 | 136 | Solo detrás |
| `work/danmachi-so6-preview-metadata-2026-10-23` | 1 | 11 | Divergida |
| `work/danmachi-v20-preview-page17-locator-2026-10-23` | 7 | 4 | Divergida |
| `work/danmachi-v20-trial-sword-secondary-lead-2026-10-23` | 2 | 7 | Divergida |
| `work/danmachi-volume20-source-boundary-2026-10-23` | 2 | 10 | Divergida |
| `work/danmachi-wiki-afterglow-claim-2026-10-19` | 1 | 163 | Divergida |
| `work/danmachi-wiki-astrea-lore-2026-10-19` | 0 | 269 | Solo detrás |
| `work/danmachi-wiki-astrea-member-details-2026-10-19` | 0 | 251 | Solo detrás |
| `work/danmachi-xenos-and-dungeon-cast-2026-10-20` | 0 | 135 | Solo detrás |
| `work/danmachi-xenos-and-evilus-census-2026-10-21` | 0 | 135 | Solo detrás |
| `work/danmemo-helga-official-context-2026-10-23` | 5 | 24 | Divergida |
| `work/dmr045-alfia-bell-author-interview-2026-10` | 11 | 3 | Divergida |
| `work/dmr045-game-interview-alfia-bell-2026-10` | 13 | 2 | Divergida |
| `work/eminence-in-shadow-full-canon-2026-10` | 739 | 495 | Divergida |
| `work/family-navigation-ci-status-2026-10-13` | 3 | 492 | Divergida |
| `work/feature-connected-family-explorer-2026-10` | 268 | 495 | Divergida |
| `work/fix-continuity-tagged-profile-sections-2026-10-19` | 0 | 164 | Solo detrás |
| `work/fix-danmachi-wiki-search-manifest-2026-10-20` | 20 | 162 | Divergida |
| `work/fix-dmr049-continuity-key-2026-10-23` | 9 | 18 | Divergida |
| `work/integrate-danmachi-timeline-2026-10-19` | 0 | 200 | Solo detrás |
| `work/integrate-danmachi-visual-references-2026-10-19` | 8 | 185 | Divergida |
| `work/integrate-danmachi-wiki-depth-2026-10-20` | 2 | 161 | Divergida |
| `work/integrate-danmachi-wiki-enrichment-2026-10-19` | 0 | 167 | Solo detrás |
| `work/integrate-fanfic-review-2026-10-19` | 0 | 186 | Solo detrás |
| `work/integration-mainline-2026-10` | 29 | 493 | Divergida |
| `work/integration-validation-fixes-2026-10` | 289 | 495 | Divergida |
| `work/integration-wordwaifu-lore-trash-2026-10` | 251 | 495 | Divergida |
| `work/lore-interview-source-tier-2026-10` | 3 | 1 | Divergida |
| `work/mainline-reconciliation-2026-10-14` | 3 | 489 | Divergida |
| `work/narrative-assistant-microwindow-2026-10-15` | 10 | 456 | Divergida |
| `work/orario-daedalus-pantheon-2026-10-20` | 2 | 158 | Divergida |
| `work/orario-hestia-residences-2026-10-20` | 2 | 157 | Divergida |
| `work/orario-ln-volume1-publisher-synopsis-2026-10-20` | 1 | 155 | Divergida |
| `work/orario-official-prototype-geography-2026-10-20` | 2 | 156 | Divergida |
| `work/orario-wiki-evidence-2026-10-20` | 9 | 159 | Divergida |
| `work/post-merge-closure-audit-2026-10-14` | 28 | 485 | Divergida |
| `work/story-completion-danmachi-audit-2026-10` | 1308 | 495 | Divergida |
| `work/story-forge-generator-2026-10-14` | 15 | 474 | Divergida |
| `work/story-foundry-chapter-arc-2026-10` | 8 | 474 | Divergida |
| `work/story-foundry-complete-planner-2026-10` | 31 | 485 | Divergida |
| `work/story-foundry-fill-empty-fields-2026-10-19` | 1 | 290 | Divergida |
| `work/story-foundry-generator-2026-10` | 58 | 493 | Divergida |
| `work/story-foundry-generators-current-editor-2026-10-19` | 4 | 291 | Divergida |
| `work/story-foundry-integration-2026-10-13` | 58 | 492 | Divergida |
| `work/story-generator-concrete-outline-2026-10` | 11 | 474 | Divergida |
| `work/story-generator-core-2026-10-14` | 27 | 485 | Divergida |
| `work/story-outline-phase-summary-2026-10-19` | 1 | 289 | Divergida |
| `work/visual-foundry-rework-2026-10` | 257 | 495 | Divergida |
| `work/wf-004-c2-destructive-snapshots` | 130 | 495 | Divergida |
| `work/wf-004-c3-project-trash` | 245 | 495 | Divergida |
| `work/wiki-depth-abilities-and-helga-2026-10-20` | 25 | 163 | Divergida |

## Siguiente paso de lore

El lote DMR-045 continúa con brechas factuales y no se declara completo: localizar pasajes primarios reproducibles para Alfia/Zald/Erebus en *Astrea Record* I–III, para Meteria/Bell en el volumen principal 20 y para distinguir las decisiones personales de Rudra frente a Jura/Familia en los volúmenes 13–14. Las entrevistas nuevas mejoran el grafo y la procedencia, pero no sustituyen esas escenas.
