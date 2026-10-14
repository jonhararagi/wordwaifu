# Matriz de integración — auditoría DanMachi (2026-10-13)

## Alcance y regla de seguridad

- Candidata examinada: `work/story-completion-danmachi-audit-2026-10`.
- Commit de auditoría más reciente al redactar esta matriz: `cceb20c83b6cdc5c4d47693ea7c7420d385c5a68`.
- No se fusionó ninguna rama, no se alteró `main` y no se publicó ni cerró ningún PR.
- Los estados de grafo son comparaciones de refs; **divergido no significa que una función falte**, y una ruta presente no prueba equivalencia funcional. Los SHA de blob solo prueban igualdad exacta del archivo examinado.

## Matriz por rama

| Rama fuente | Grafo frente a la candidata | Evidencia de árbol inspeccionada | Decisión segura |
|---|---|---|---|
| `work/integration-wordwaifu-lore-trash-2026-10` | Antecesora; candidata +375 / fuente +0 commits exclusivos | `src/project-repository.js` tiene el mismo blob SHA que la candidata | Equivalencia confirmada para ese archivo; no cherry-pick duplicado. |
| `work/wf-004-c3-project-trash` | Antecesora; candidata +381 / fuente +0 commits exclusivos | `src/project-repository.js` coincide exactamente | La implementación de papelera está en la línea de la candidata; conservar pruebas de tombstones/snapshots. |
| `work/story-foundry-integration-2026-10-13` | Divergida; candidata +626 / fuente +61 commits exclusivos (2026-10-14) | `stories/README.md` coincide exactamente | El índice de historias coincide; auditar por separado los archivos ejecutables antes de declarar toda la rama equivalente. |
| `work/art-studio-and-character-dossiers-2026-10` | Divergida; candidata +376 / fuente +32 commits exclusivos (2026-10-14) | `src/character-dossiers.js` coincide; `src/art-studio.js` difiere | No reemplazar el Art Studio de la candidata por el de origen. Comparar el diff funcional restante antes de cualquier cherry-pick. |
| `work/danmachi-cast-coverage-images-2026-10` | Divergida; candidata +377 / fuente +47 commits exclusivos (2026-10-14) | `assets/character-portraits/ryu-lion.svg` coincide; `src/official-character-roster.js` difiere | Retrato confirmado idéntico; el roster requiere diff de comportamiento/datos. |
| `work/danmachi-dossier-depth-2026-10` | Divergida; candidata +376 / fuente +3 commits exclusivos (2026-10-14) | La candidata tiene `lore/danmachi/familias/astrea-familia.md` y `tests/test_danmachi_family_dossier.cjs`; esas rutas no existen en la rama consultada | Diferencia de estructura confirmada; no aplicar cambios por sobrescritura de directorios. |
| `work/connected-lore-power-catalog-2026-10` | Divergida; candidata +328 / fuente +46 commits exclusivos (2026-10-14) | `src/project-schema.js` difiere; `src/mythic-catalog.js` no existe en esa ref | La candidata contiene una evolución posterior del esquema/catálogo; comparar únicamente cambios únicos aún ausentes. |
| `work/integration-mainline-2026-10` | Divergida; candidata +626 / fuente +31 commits exclusivos (2026-10-14) | `src/project-repository.js` difiere | No sustituir el repositorio actual; revisar las diferencias de persistencia y recuperación una por una. |
| `work/integration-validation-fixes-2026-10` | Divergida; candidata +375 / fuente +38 commits exclusivos (2026-10-14) | `tests/browser_smoke.cjs` difiere; la candidata incluye la regresión del conteo del catálogo | Mantener la prueba nueva; revisar si la rama aporta otros arreglos únicos. |
| `work/visual-foundry-rework-2026-10` | Divergida; candidata +377 / fuente +8 commits exclusivos (2026-10-14) | `src/art-studio.js` no existe en la ref consultada | No se puede tratar como reemplazo directo del módulo actual; comparar el resto del árbol. |
| `work/wf-004-c2-destructive-snapshots` | Divergida; candidata +500 / fuente +4 commits exclusivos (2026-10-14) | No se confirmó igualdad global de snapshots | Revisión pendiente de deltas de retención, restauración y borrado permanente; no cherry-pick masivo. |
| `work/family-navigation-ci-status-2026-10-13` | Divergida; candidata +626 / fuente +6 commits exclusivos (2026-10-14) | `src/lore-corpus.js` difiere | El filtro por entidad Familia ya está en la candidata; comparar cualquier mejora adicional de navegación/CI antes de integrar. |
| `work/feature-connected-family-explorer-2026-10` | Divergida; candidata +375 / fuente +17 commits exclusivos (2026-10-14) | SHA de `src/lore-corpus.js`, `src/app.js` y `tests/browser_smoke.cjs` difieren de la candidata | El explorador de Familias no es equivalente por árbol; revisar su delta funcional y sus regresiones antes de cherry-pick selectivo. |
| `foundation/story-foundry-north-star` | Divergida; candidata +486 / fuente +4 commits exclusivos (2026-10-14) | `docs/MASTER_VISION.md` coincide; `src/app.js` difiere y `stories/README.md` no existe en esa rama | Conservar la visión coincidente, pero no asumir que la fundación contiene la implementación actual del editor; comparar solo propuestas funcionales aún ausentes. |
| `work/story-foundry-generator-2026-10` | Divergida; candidata +626 / fuente +60 commits exclusivos (2026-10-14) | `src/app.js` difiere | El smoke de la candidata ya ejercita editor e importación de historias; la equivalencia total de generación sigue sin demostrarse. |
| `work/audit-baseline-2026-10-12` | Divergida; candidata +626 / fuente +8 commits exclusivos (2026-10-14) | Rama de referencia de auditoría; no se ha demostrado que su árbol sea mejor que la candidata | Usar como evidencia histórica, no como base de sobrescritura. |
| `feature/danmachi-lore-poc` | Divergida; candidata +486 / fuente +253 commits exclusivos (2026-10-14) | No se encontró equivalencia de árbol completa | Tratar como fuente histórica; incorporar solo hechos/cambios únicos tras validar continuidad y fuentes. |
| `fix/lore-archive-spanish-continuity-test` | Divergida; candidata +486 / fuente +239 commits exclusivos (2026-10-14) | La candidata conserva pruebas de continuidad en `tests/test_lore_corpus.cjs` | La corrección de continuidad está representada en la suite actual; revisar commits exclusivos antes de cerrar equivalencia. |
| `verify/lore-depth-ci` | Divergida; candidata +486 / fuente +208 commits exclusivos (2026-10-14) | La candidata contiene workflows y validadores de DanMachi, pero no se probó identidad total de árboles | Comparar workflows/fixtures específicos; no asumir que una rama de verificación está integrada por su nombre. |

## Pruebas y regresiones

- `tests/test_lore_corpus.cjs`: regresiones de búsqueda de Familias y abstención ante entidades que no son Familia.
- `tests/test_official_character_roster.cjs`: 59 IDs únicos; Eina Tulle conserva nombre japonés, procedencia oficial de DanMachi III y nivel/URL de retrato sin afirmar cuando no están respaldados.
- `tests/test_power_catalog.cjs` y `tests/test_project_schema.cjs`: generación de candidatos originales; `powers[]` persiste y valida campos, IDs y referencias opcionales a personajes/historias.
- `tests/browser_smoke.cjs`: creación/edición/importación de historias; papelera y snapshots; borrado permanente con marca anti-resurrección; lectura combinada del respaldo local del panel de arte; red de Familia; catálogo mitológico; crear/guardar/recargar una ficha de poder.
- El conteo del catálogo mitológico se deriva de `data/catalog/mythic-arsenal.json`; la prueba restablece filtros antes de comprobar el total.
- En el SHA funcional `bbc42acd7160dcd222cd439895201621bc3f662f`, [Validate WordWaifu](https://github.com/jonhararagi/wordwaifu/actions/runs/38515600587) y [DanMachi Lore and Retrieval Integrity](https://github.com/jonhararagi/wordwaifu/actions/runs/38515600602) finalizaron ambos en `success` e incluyeron Chromium.
## Orden seguro de integración restante

1. Mantener esta rama como candidata y conservar sus versiones actuales de `src/project-repository.js`, `src/app.js`, `src/art-studio.js`, `src/official-character-roster.js` y `src/lore-corpus.js` hasta comparar cada diff.
2. Resolver deltas únicos de persistencia/snapshots y sus pruebas, sin reemplazar el repositorio por la rama antigua.
3. Resolver deltas únicos de expedientes, roster y continuidad, conservando etiquetas de canon, adaptación y AU.
4. Resolver deltas únicos de arte/panel visual y catálogo de poderes/mitología.
5. Ejecutar validación estructural, pruebas de corpus y catálogo, smoke de navegador y workflows en el SHA final.
6. Detenerse antes de mergear o cerrar PR; requiere autorización explícita.

## Límites de la auditoría

No se afirma que todos los commits exclusivos de cada rama estén incorporados. El grafo de varias ramas está divergido y varias implementaciones presentan SHA distintos; por eso queda pendiente la comparación semántica archivo por archivo de sus deltas únicos. No se debe declarar integración total ni ausencia de cambios huérfanos hasta cerrar esa comparación y obtener CI verde en el commit final.

## Revisión semántica focalizada posterior a la matriz inicial

Fecha de revisión: 2026-10-14. Esta sección registra comparaciones concretas; no convierte la matriz en una afirmación de integración completa.

- **Snapshots/papelera** (work/wf-004-c2-destructive-snapshots / work/integration-mainline-2026-10): se conservó la implementación transaccional actual y se incorporó selectivamente el tombstone mínimo de borrado permanente de la rama de integración. Ahora write(), saveActive() y activateProject() rechazan IDs marcados como borrados permanentemente; la marca oculta no conserva payload recuperable y la prueba de navegador comprueba que una pestaña obsoleta no pueda resucitar el proyecto. No se reemplazó project-repository.js entero.
- **Panel de arte** (work/art-studio-and-character-dossiers-2026-10): se incorporó el delta de lectura combinada del módulo Art Studio. Si IndexedDB puede leerse pero una escritura anterior cayó al respaldo local, la galería fusiona ambos almacenes por ID estable (IndexedDB prevalece si hay duplicado). Se añadió regresión en Chromium para que el registro de respaldo no desaparezca.
- **Roster de personajes** (work/danmachi-cast-coverage-images-2026-10): el archivo fuente usa alias/nombres alternativos para Noin/Neoin, Neze/Neese, Asta, Ryana/Liana y Celty/Selty; no son cinco personajes nuevos. Sí se encontró una omisión real en la candidata: Eina Tulle no figuraba en src/official-character-roster.js, aunque el perfil oficial de DanMachi III la documenta. Se añadió una ficha limitada a especie y función verificadas, con nivel/epíteto sin afirmar y sin inventar una URL de imagen. La regresión correspondiente está en tests/test_official_character_roster.cjs.
- **Explorador de Familias** (work/feature-connected-family-explorer-2026-10 / work/story-foundry-integration-2026-10-13): se conserva el corpus actual y se incorporó el delta de navegación por afiliación al panel «Personas relacionadas». La red se calcula desde el roster y las afirmaciones de la continuidad elegida; presenta la afiliación como afiliación, no como amistad, y el smoke verifica el acceso desde la ficha de Bell a integrantes de Hestia Familia. Los deltas restantes de corpus y commits exclusivos siguen pendientes.
- **Generador/editor** (work/story-foundry-generator-2026-10): src/app.js de la candidata es más extenso (3296 frente a 2887 líneas) y contiene más referencias a historias, generación, importación y exportación. No se copia la versión fuente antigua; faltan comparaciones de comportamiento para cambios únicos concretos.
- **Catálogo de poderes** (work/connected-lore-power-catalog-2026-10): se integraron selectivamente src/power-catalog.js y src/power-workbench.js como módulos separados del catálogo mitológico; se añadieron el panel navegable, campos estructurados, vínculos opcionales a personaje e historia, validación de powers[] y pruebas de persistencia en navegador. No se importaron los módulos de franquicias adicionales ni el explorador de universos de esa rama porque requieren auditoría independiente de sus datos y rutas.

**Estado tras esta revisión:** la omisión de roster se corrigió con fuente oficial, el catálogo estructurado de poderes, la red de Familia, la lectura combinada de arte y la marca anti-resurrección quedaron integrados. Ambos workflows pasaron en el SHA funcional `bbc42acd7160dcd222cd439895201621bc3f662f`. La auditoría semántica de todas las ramas divergentes sigue abierta; no se declara integración total, no se realiza merge y no se modifica `main`.

## Reconciliación actual de la candidata con `main` — 2026-10-14

- **Refs comprobadas:** candidata antes de esta actualización documental `f16adcecb4f8c03cdf20f9a44761475f9d5781e6`; `main` `675587f5ef50abd48382a07fc167ca08a26cae3f`. Compare: divergidas; candidata +626 / `main` +6 commits exclusivos desde la base común `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`. Los conteos son del grafo, no una lista automática de cherry-picks.
- **Deltas del árbol confirmados:** `README.md`, `src/app.js`, `src/project-repository.js`, `src/art-studio.js`, `src/official-character-roster.js`, `src/lore-corpus.js` y `src/project-schema.js` tienen blobs distintos entre ambas refs. No se sustituye ninguno en bloque.
- **Roster:** ambas versiones contienen 59 identidades. Cinco IDs/nombres normalizados difieren por alias/romanización (Noin/Neoin, Neze/Neese, Asta, Ryana/Liana y Celty/Selty); no deben contarse como diez personajes. Se incorporaron selectivamente los 24 paquetes de investigación por continuidad del roster de `main` a los registros de la candidata, conservando los IDs y alias de la candidata. La prueba nueva exige fuente HTTPS, etiqueta de procedencia y nivel de spoilers.
- **Interfaz de expedientes:** se añadió a la candidata un renderizador que muestra el dossier asociado a la continuidad elegida, sus apartados, fuentes y avisos de spoilers. El material de wiki se etiqueta explícitamente como fuente secundaria; no se presenta como canon primario ni sustituye los 33 perfiles de `src/character-dossiers.js`.
- **Persistencia:** `main` contiene un helper local `restorePreviousBackup`; la candidata ya incluye rollback explícito del respaldo en las rutas de guardado, papelera y restauración. Se conserva la implementación actual y no se copia `src/project-repository.js` entero.
- **Corpus:** `main` contiene `claimsFromOfficialRoster`, mientras la candidata mantiene filtros y búsqueda de entidades adicionales. La equivalencia semántica del retrieval y la posible integración selectiva de afirmaciones generadas sigue pendiente de revisar; no se declara equivalencia por el mero hecho de que ambas tengan un corpus.
- **Decisión de seguridad:** no se modifica `main`, no se fusiona la rama completa ni se abre/cierra PR. Los deltas restantes se integrarán únicamente cuando la intención y las pruebas permitan demostrar que no duplican ni degradan las funciones de la candidata.


## Inventario de PRs revisado en GitHub — 2026-10-14

- **Abiertos:** 0 PRs abiertos en el repositorio.
- **Cerrados/integrados:** 15 PRs encontrados; 4 muestran un commit de merge y 11 están cerrados sin merge.
- **Integrados:** [#8 roster y retratos](https://github.com/jonhararagi/wordwaifu/pull/8) → `3698cb3`; [#11 panel de arte y 33 expedientes](https://github.com/jonhararagi/wordwaifu/pull/11) → `42aee93`; [#14 integración de atlas, papelera, lore y arte](https://github.com/jonhararagi/wordwaifu/pull/14) → `bca375e`; [#16 Story Foundry y corpus ampliado](https://github.com/jonhararagi/wordwaifu/pull/16) → `11a5ed5`.
- **Cerrados sin merge:** [#1](https://github.com/jonhararagi/wordwaifu/pull/1), [#2](https://github.com/jonhararagi/wordwaifu/pull/2), [#3](https://github.com/jonhararagi/wordwaifu/pull/3), [#5](https://github.com/jonhararagi/wordwaifu/pull/5), [#6](https://github.com/jonhararagi/wordwaifu/pull/6), [#7](https://github.com/jonhararagi/wordwaifu/pull/7), [#9](https://github.com/jonhararagi/wordwaifu/pull/9), [#10](https://github.com/jonhararagi/wordwaifu/pull/10), [#12](https://github.com/jonhararagi/wordwaifu/pull/12), [#13](https://github.com/jonhararagi/wordwaifu/pull/13) y [#15](https://github.com/jonhararagi/wordwaifu/pull/15).
- **Rutas duplicadas/sustituidas explícitamente:** #13 fue cerrada por duplicar la ruta de integración #14; #15 fue sustituida por #16; #6 documenta que la integración posterior quedó en #14/#16. El cierre no se interpreta como merge.
- Esta consulta fue de solo lectura; no se abrió, cerró ni modificó ningún PR. El inventario de PRs describe la historia de GitHub, no sustituye la comparación semántica de ramas fuente.
