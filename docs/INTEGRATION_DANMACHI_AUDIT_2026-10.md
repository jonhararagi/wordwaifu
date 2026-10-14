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

**Estado de aquella revisión:** la omisión de roster se corrigió con fuente oficial, el catálogo estructurado de poderes, la red de Familia, la lectura combinada de arte y la marca anti-resurrección quedaron integrados. Los workflows pasaron en el SHA `bbc42acd7160dcd222cd439895201621bc3f662f`. Esa nota era un snapshot histórico; la reconciliación con `main` se documenta en la sección final.

## Reconciliación actual de la candidata con `main` — 2026-10-14

- **Refs comprobadas:** candidata antes de esta actualización documental `f16adcecb4f8c03cdf20f9a44761475f9d5781e6`; `main` `675587f5ef50abd48382a07fc167ca08a26cae3f`. Compare: divergidas; candidata +626 / `main` +6 commits exclusivos desde la base común `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`. Los conteos son del grafo, no una lista automática de cherry-picks.
- **Deltas del árbol confirmados:** `README.md`, `src/app.js`, `src/project-repository.js`, `src/art-studio.js`, `src/official-character-roster.js`, `src/lore-corpus.js` y `src/project-schema.js` tienen blobs distintos entre ambas refs. No se sustituye ninguno en bloque.
- **Roster:** ambas versiones contienen 59 identidades. Cinco IDs/nombres normalizados difieren por alias/romanización (Noin/Neoin, Neze/Neese, Asta, Ryana/Liana y Celty/Selty); no deben contarse como diez personajes. Se incorporaron selectivamente los 24 paquetes de investigación por continuidad del roster de `main` a los registros de la candidata, conservando los IDs y alias de la candidata. La prueba nueva exige fuente HTTPS, etiqueta de procedencia y nivel de spoilers.
- **Interfaz de expedientes:** se añadió a la candidata un renderizador que muestra el dossier asociado a la continuidad elegida, sus apartados, fuentes y avisos de spoilers. El material de wiki se etiqueta explícitamente como fuente secundaria; no se presenta como canon primario ni sustituye los 33 perfiles de `src/character-dossiers.js`.
- **Persistencia:** `main` contiene un helper local `restorePreviousBackup`; la candidata ya incluye rollback explícito del respaldo en las rutas de guardado, papelera y restauración. Se conserva la implementación actual y no se copia `src/project-repository.js` entero.
- **Corpus:** `main` contiene `claimsFromOfficialRoster`, mientras la candidata mantiene filtros y búsqueda de entidades adicionales. La equivalencia semántica del retrieval y la posible integración selectiva de afirmaciones generadas sigue pendiente de revisar; no se declara equivalencia por el mero hecho de que ambas tengan un corpus.
- **Decisión de seguridad de la auditoría inicial:** no se modificó `main`, ni se fusionó la candidata ni se abrió/cerró PR durante esa revisión. Luego se preparó una rama de reconciliación basada directamente en `main`, con CI separado.


## Inventario de PRs revisado en GitHub — 2026-10-14

- **Abiertos en la consulta original:** 0 PRs (snapshot anterior a la rama de reconciliación; no representa el estado posterior).
- **Cerrados/integrados:** 15 PRs encontrados; 4 muestran un commit de merge y 11 están cerrados sin merge.
- **Integrados:** [#8 roster y retratos](https://github.com/jonhararagi/wordwaifu/pull/8) → `3698cb3`; [#11 panel de arte y 33 expedientes](https://github.com/jonhararagi/wordwaifu/pull/11) → `42aee93`; [#14 integración de atlas, papelera, lore y arte](https://github.com/jonhararagi/wordwaifu/pull/14) → `bca375e`; [#16 Story Foundry y corpus ampliado](https://github.com/jonhararagi/wordwaifu/pull/16) → `11a5ed5`.
- **Cerrados sin merge:** [#1](https://github.com/jonhararagi/wordwaifu/pull/1), [#2](https://github.com/jonhararagi/wordwaifu/pull/2), [#3](https://github.com/jonhararagi/wordwaifu/pull/3), [#5](https://github.com/jonhararagi/wordwaifu/pull/5), [#6](https://github.com/jonhararagi/wordwaifu/pull/6), [#7](https://github.com/jonhararagi/wordwaifu/pull/7), [#9](https://github.com/jonhararagi/wordwaifu/pull/9), [#10](https://github.com/jonhararagi/wordwaifu/pull/10), [#12](https://github.com/jonhararagi/wordwaifu/pull/12), [#13](https://github.com/jonhararagi/wordwaifu/pull/13) y [#15](https://github.com/jonhararagi/wordwaifu/pull/15).
- **Rutas duplicadas/sustituidas explícitamente:** #13 fue cerrada por duplicar la ruta de integración #14; #15 fue sustituida por #16; #6 documenta que la integración posterior quedó en #14/#16. El cierre no se interpreta como merge.
- Esta consulta fue de solo lectura; no se abrió, cerró ni modificó ningún PR. El inventario de PRs describe la historia de GitHub, no sustituye la comparación semántica de ramas fuente.


## Cierre de comparación viva de corpus y persistencia — 2026-10-14

La comparación se repitió contra los refs actuales de GitHub, no contra los conteos históricos de esta matriz. Resultado del grafo: candidata +629 commits exclusivos y `main` +6 desde la base común `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`. Es un grafo divergido, no una autorización para fusionar automáticamente.

### Deltas de implementación medidos por blob

| Archivo | Blob en main | Blob en candidata | Diferencia de comportamiento identificada | Decisión |
|---|---|---|---|---|
| `src/lore-corpus.js` | `b6daaf8a7d8de973bd91719ccf26b667cc1ee77a` | `c4cd6cbc4a6026a8a3483c77d615b7f2f92f7313` | `main` crea afirmaciones a partir del roster (`claimsFromOfficialRoster`); la candidata ofrece `searchEntities` y `tokenMatches`, y su índice cuenta 98 afirmaciones fuente / 101 entradas en la prueba de corpus. | No copiar la generación de afirmaciones sin una prueba de deduplicación por personaje, continuidad y fuente. El generador de `main` añade también afirmaciones de dossiers aunque ya existan afirmaciones documentales para ese personaje; importarlo sin adaptar la deduplicación cambiaría los conteos y puede introducir solapamientos. La búsqueda estructurada de la candidata se conserva. |
| `src/project-repository.js` | `c605f878de7ec898d603f62addfe78dc481d4089` | `238018631f56c192969ba03af518176cd72569ea` | `main` conserva `restorePreviousBackup`; la candidata tiene un método menos, con rollback explícito y reglas de tombstone en las rutas de guardado/activación. | No copiar el helper aislado sin demostrar un camino de error que la candidata no cubra. Mantener las pruebas de borrado permanente y no-resurrección como criterio. |
| `src/official-character-roster.js` | `8cae08937062bba746fd5501dd96a086fa97d188` | `dd82ac5306a7e66df077e79a0cc2deea40177406` | Los blobs difieren, pero no hay diferencia de nombres de funciones que justifique un reemplazo total; los alias deben tratarse como normalizaciones, no como personajes nuevos. | Mantener roster candidato y verificar diferencias de datos por ID, continuidad y URL de fuente antes de portar registros. |
| `src/project-schema.js` | `9f739d3629a743e55ce386b2bc81ece3e67d966e` | `89173c987396e04025e776f2babe32b403c1f5ae` | La candidata es mayor (21.721 caracteres frente a 16.968) e incluye validación del modelo de poderes/historias. | No sustituir por el esquema más corto de `main`; la reducción podría eliminar contratos de datos añadidos. |
| `src/art-studio.js` | `341601c2edc3f84fedbaf1d286764650328d2388` | `e2c62e8f3c222eb70f28ff4eb3438fe74592dcd5` | Los dos módulos tienen distinta extensión y el trabajo previo ya añadió lectura combinada de IndexedDB y respaldo local por ID. | No reemplazo por bloque; conservar el test de recuperación de galería. |

### Criterio de cierre aplicado

- La divergencia de archivos no se considera automáticamente un defecto: cada cambio debe demostrar comportamiento ausente y una prueba que falle antes y pase después.
- El retrieval del corpus no se declara equivalente entre ramas. La candidata conserva la búsqueda estructurada y el filtro de entidades; la generación automática de afirmaciones de `main` queda clasificada como delta no portado por riesgo concreto de duplicación, no como trabajo supuestamente integrado.
- Los conteos históricos de commits de secciones anteriores son snapshots fechados. La comprobación viva más reciente del 2026-10-14 da candidata +646 / `main` +6 desde la base común `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`; ver la sección de estado actual al final.
- Al cerrar aquella comparación no se modificó `main`, no se creó un merge commit, no se abrió/cerró PR y no se borraron ramas. Las limitaciones factuales del catálogo siguen vigentes; la reconciliación de árbol queda descrita en la sección final.


## Estado vivo posterior — 2026-10-14 (HEAD `fbbeeee6d80bdf3fcdd963d70c4696587c7cb2a5`)

### Validación de CI del HEAD exacto

- [DanMachi Lore and Retrieval Integrity #530](https://github.com/jonhararagi/wordwaifu/actions/runs/38552041877): `success`; job `Catalog, retrieval and browser smoke` completado.
- [Validate WordWaifu #1021](https://github.com/jonhararagi/wordwaifu/actions/runs/38552041932): `success`; job `validate` completado.
- Ambos runs corresponden al mismo SHA `fbbeeee6d80bdf3fcdd963d70c4696587c7cb2a5`. El resultado valida el árbol actual de la candidata; no certifica cobertura canónica completa ni integración semántica de cada rama.

### Corrección de Panel de arte verificada

La prueba de regresión que se había añadido desde `main` falló inicialmente porque la implementación candidata no persistía la marca anti-resurrección entre recargas. La corrección final:

- Persiste los IDs eliminados en `wordwaifu.art.deleted.v1`.
- Filtra las marcas persistidas tanto en lectura de galería como en lectura individual.
- Registra la marca antes de borrar para impedir resurrección si falla la limpieza del respaldo.
- Mantiene la marca si la eliminación en IndexedDB tuvo éxito pero no pudo limpiarse la copia de respaldo.
- Limpia la marca al guardar de nuevo el mismo recurso y evita escribir en localStorage cuando no existe marca previa.
- Refresca la galería después de un error de eliminación parcial y conserva el mensaje de advertencia.
- Añade regresión explícita para confirmar que la marca existe antes y después de una recarga completa.

Commits funcionales relacionados: [`dddc9c1`](https://github.com/jonhararagi/wordwaifu/commit/dddc9c1488c78c03f0bb60ed2adc229009d7135c), [`e4ed9f7`](https://github.com/jonhararagi/wordwaifu/commit/e4ed9f781c994c6eff17b9b6ca399e5ff178b9dc), [`7c16bfa`](https://github.com/jonhararagi/wordwaifu/commit/7c16bfa778306ec45f480bf2ff552addb0692db4) y [`fbbeeee`](https://github.com/jonhararagi/wordwaifu/commit/fbbeeee6d80bdf3fcdd963d70c4696587c7cb2a5).

### Inventario estructurado actual

Snapshot de `lore/danmachi/catalog.json` en el mismo HEAD: 48 registros activos, 67 IDs reservados, 100 documentos de apoyo y 165 archivos rastreados. Los estados de los 48 registros son: 21 `provisional`, 13 `draft`, 1 `provisional_inference`, 6 `pending_verification`, 4 `proposed_author_event`, 2 `source_checked_partial` y 1 `provisional_reference_checked`.

Esto significa que el catálogo sigue sin registros declarados como completos/approved. No se debe presentar la validación estructural verde como aprobación factual de esos expedientes.

### Diferencia viva entre ramas y siguiente bloque de trabajo

- Compare actual: candidata +646 commits y `main` +6 respecto de la base común. No se realizó merge ni se modificó `main`.
- Los seis commits exclusivos de `main` incluyen dos cambios documentales iniciales, los merges #14/#16 y sus actualizaciones documentales. Las funciones de atlas/lore/arte, Story Foundry y navegación de familias ya están presentes selectivamente en la candidata; las diferencias restantes deben probarse por comportamiento, no portarse mediante reemplazo masivo.
- Pendientes reales: cerrar la comparación semántica de `src/lore-corpus.js` (generación/deduplicación de claims), completar auditoría por ID de roster y fuentes, resolver expedientes DanMachi solo cuando haya evidencia primaria y documentar los deltas funcionales restantes con pruebas de regresión.
- Estado al cierre de esta revisión: `main` sirvió como padre directo de la rama de reconciliación. No se borraron ramas ni se hizo force push. La PR y la integración final se gestionan a partir de esta rama y sus controles, no de los 647 commits exclusivos de la candidata.


## Reconciliación de árbol preparada para integrar en main — 2026-10-14

La historia de la candidata original tiene 647 commits exclusivos frente a los 6 exclusivos de `main`, por lo que no se debe usar el historial completo como una operación automática. La comparación de árboles demostró que la integración puede hacerse como un cambio acotado desde el HEAD vigente de `main`.

- **Base:** `main` en `675587f5ef50abd48382a07fc167ca08a26cae3f`.
- **Árbol funcional de origen:** candidata validada `aa020ad50484f3dd1734432cadca971da3a02e47`.
- **Rama de reconciliación:** `work/mainline-reconciliation-2026-10-14`.
- **Primer commit de integración:** `6d8fa74a6edf135d74c015586aeec8ca61c01406`, hijo directo de `main`; la rama no hereda el historial divergente.
- **Contenido reconciliado:** 86 rutas copiadas selectivamente desde el árbol validado (23 rutas nuevas y 63 versiones actualizadas). Se conservaron además las tres rutas que existen solo en `main`: `docs/README-INITIAL-PRODUCT-VISION.md`, `docs/README-WORLD-STORY-FOUNDRY.md` y `lore/danmachi/sources/DMR-007-wiki-comunitaria.md`.
- **Workflows en el mismo HEAD de integración `b9aa066879aadbf4e5dbe1ad406c350aa5ec944f`:**
  - [DanMachi Lore and Retrieval Integrity #532](https://github.com/jonhararagi/wordwaifu/actions/runs/38559650533): `success`.
  - [Validate WordWaifu #1025](https://github.com/jonhararagi/wordwaifu/actions/runs/38559650446): `success`.
- El workflow de DanMachi incluye ahora el nombre de la rama de reconciliación en sus filtros de `push`, para que futuras correcciones en esta rama sigan verificándose.
- **Lo que los checks no certifican:** aprobación factual de todos los expedientes DanMachi, ni revisión visual manual en Windows. El catálogo sigue provisional y esos límites no se convierten en «completado» solo por CI verde.

Esta ruta elimina el problema de historial: el cambio propuesto para `main` queda como un conjunto revisable de 86 archivos y dos commits sobre el HEAD de `main`, en vez de intentar fusionar 647 commits como si fueran todos deltas pendientes. La integración definitiva depende de los checks sobre la revisión final de esta rama.
