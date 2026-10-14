# Matriz de integración — auditoría DanMachi (2026-10-13)

## Alcance y regla de seguridad

- Candidata examinada: `work/story-completion-danmachi-audit-2026-10`.
- Commit de auditoría más reciente al redactar esta matriz: `cceb20c83b6cdc5c4d47693ea7c7420d385c5a68`.
- No se fusionó ninguna rama, no se alteró `main` y no se publicó ni cerró ningún PR.
- Los estados de grafo son comparaciones de refs; **divergido no significa que una función falte**, y una ruta presente no prueba equivalencia funcional. Los SHA de blob solo prueban igualdad exacta del archivo examinado.

## Matriz por rama

| Rama fuente | Grafo frente a la candidata | Evidencia de árbol inspeccionada | Decisión segura |
|---|---|---|---|
| `work/integration-wordwaifu-lore-trash-2026-10` | Antecesora; candidata por delante, 0 detrás | `src/project-repository.js` tiene el mismo blob SHA que la candidata | Equivalencia confirmada para ese archivo; no cherry-pick duplicado. |
| `work/wf-004-c3-project-trash` | Antecesora; candidata por delante, 0 detrás | `src/project-repository.js` coincide exactamente | La implementación de papelera está en la línea de la candidata; conservar pruebas de tombstones/snapshots. |
| `work/story-foundry-integration-2026-10-13` | Divergida; candidata +590 / fuente +61 commits exclusivos (2026-10-14) | `stories/README.md` coincide exactamente | El índice de historias coincide; auditar por separado los archivos ejecutables antes de declarar toda la rama equivalente. |
| `work/art-studio-and-character-dossiers-2026-10` | Divergida; candidata +340 / fuente +32 commits exclusivos (2026-10-14) | `src/character-dossiers.js` coincide; `src/art-studio.js` difiere | No reemplazar el Art Studio de la candidata por el de origen. Comparar el diff funcional restante antes de cualquier cherry-pick. |
| `work/danmachi-cast-coverage-images-2026-10` | Divergida; candidata +341 / fuente +47 commits exclusivos (2026-10-14) | `assets/character-portraits/ryu-lion.svg` coincide; `src/official-character-roster.js` difiere | Retrato confirmado idéntico; el roster requiere diff de comportamiento/datos. |
| `work/danmachi-dossier-depth-2026-10` | Divergida; candidata +340 / fuente +3 commits exclusivos (2026-10-14) | La candidata tiene `lore/danmachi/familias/astrea-familia.md` y `tests/test_danmachi_family_dossier.cjs`; esas rutas no existen en la rama consultada | Diferencia de estructura confirmada; no aplicar cambios por sobrescritura de directorios. |
| `work/connected-lore-power-catalog-2026-10` | Divergida; candidata +292 / fuente +46 commits exclusivos (2026-10-14) | `src/project-schema.js` difiere; `src/mythic-catalog.js` no existe en esa ref | La candidata contiene una evolución posterior del esquema/catálogo; comparar únicamente cambios únicos aún ausentes. |
| `work/integration-mainline-2026-10` | Divergida; candidata +590 / fuente +31 commits exclusivos (2026-10-14) | `src/project-repository.js` difiere | No sustituir el repositorio actual; revisar las diferencias de persistencia y recuperación una por una. |
| `work/integration-validation-fixes-2026-10` | Divergida; candidata +339 / fuente +38 commits exclusivos (2026-10-14) | `tests/browser_smoke.cjs` difiere; la candidata incluye la regresión del conteo del catálogo | Mantener la prueba nueva; revisar si la rama aporta otros arreglos únicos. |
| `work/visual-foundry-rework-2026-10` | Divergida; candidata +341 / fuente +8 commits exclusivos (2026-10-14) | `src/art-studio.js` no existe en la ref consultada | No se puede tratar como reemplazo directo del módulo actual; comparar el resto del árbol. |
| `work/wf-004-c2-destructive-snapshots` | Divergida; candidata +464 / fuente +4 commits exclusivos (2026-10-14) | No se confirmó igualdad global de snapshots | Revisión pendiente de deltas de retención, restauración y borrado permanente; no cherry-pick masivo. |
| `work/family-navigation-ci-status-2026-10-13` | Divergida; candidata +590 / fuente +6 commits exclusivos (2026-10-14) | `src/lore-corpus.js` difiere | El filtro por entidad Familia ya está en la candidata; comparar cualquier mejora adicional de navegación/CI antes de integrar. |
| `work/feature-connected-family-explorer-2026-10` | Divergida; candidata +339 / fuente +17 commits exclusivos (2026-10-14) | SHA de `src/lore-corpus.js`, `src/app.js` y `tests/browser_smoke.cjs` difieren de la candidata | El explorador de Familias no es equivalente por árbol; revisar su delta funcional y sus regresiones antes de cherry-pick selectivo. |
| `foundation/story-foundry-north-star` | Divergida; candidata +450 / fuente +4 commits exclusivos (2026-10-14) | `docs/MASTER_VISION.md` coincide; `src/app.js` difiere y `stories/README.md` no existe en esa rama | Conservar la visión coincidente, pero no asumir que la fundación contiene la implementación actual del editor; comparar solo propuestas funcionales aún ausentes. |
| `work/story-foundry-generator-2026-10` | Divergida; candidata +590 / fuente +60 commits exclusivos (2026-10-14) | `src/app.js` difiere | El smoke de la candidata ya ejercita editor e importación de historias; la equivalencia total de generación sigue sin demostrarse. |
| `work/audit-baseline-2026-10-12` | Divergida; candidata +590 / fuente +8 commits exclusivos (2026-10-14) | Rama de referencia de auditoría; no se ha demostrado que su árbol sea mejor que la candidata | Usar como evidencia histórica, no como base de sobrescritura. |
| `feature/danmachi-lore-poc` | Divergida; candidata +450 / fuente +253 commits exclusivos (2026-10-14) | No se encontró equivalencia de árbol completa | Tratar como fuente histórica; incorporar solo hechos/cambios únicos tras validar continuidad y fuentes. |
| `fix/lore-archive-spanish-continuity-test` | Divergida; candidata +450 / fuente +239 commits exclusivos (2026-10-14) | La candidata conserva pruebas de continuidad en `tests/test_lore_corpus.cjs` | La corrección de continuidad está representada en la suite actual; revisar commits exclusivos antes de cerrar equivalencia. |
| `verify/lore-depth-ci` | Divergida; candidata +450 / fuente +208 commits exclusivos (2026-10-14) | La candidata contiene workflows y validadores de DanMachi, pero no se probó identidad total de árboles | Comparar workflows/fixtures específicos; no asumir que una rama de verificación está integrada por su nombre. |

## Pruebas y regresiones

- `tests/test_lore_corpus.cjs`: añadidas consultas de regresión para «Familia de Astrea», «Loki Familia», «Familia Hestia» y abstención ante «Bell Cranel».
- `tests/browser_smoke.cjs`: el test ya no codifica el antiguo total 75/75. Lee el total del archivo fuente `data/catalog/mythic-arsenal.json` (80 entidades en la ref inspeccionada) y exige que la interfaz muestre ese total completo; restablece filtros antes de comprobarlo.
- El smoke de navegador anterior falló en [run 38477415589](https://github.com/jonhararagi/wordwaifu/actions/runs/38477415589) y [run 38477722186](https://github.com/jonhararagi/wordwaifu/actions/runs/38477722186) porque la aserción esperaba 75/75 aunque el JSON contenía 80 entidades.
- Para el commit `a97c85a`, [Validate WordWaifu #959](https://github.com/jonhararagi/wordwaifu/actions/runs/38477722186) terminó en fallo y [DanMachi Lore and Retrieval Integrity #476](https://github.com/jonhararagi/wordwaifu/actions/runs/38477722203) estaba en espera de la ejecución anterior. El arreglo del conteo está en commits posteriores; **su CI no se declara aprobado en este documento**.

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

- **Snapshots/papelera** (work/wf-004-c2-destructive-snapshots): src/project-repository.js fuente tiene 666 líneas y no contiene marcadores de tombstone; la candidata tiene 982 líneas y sí contiene rutas de tombstone, restauración y evaluación de borrado. Decisión: conservar la candidata; no copiar el archivo antiguo. Revisar pruebas exclusivas de la rama como delta histórico, no como reemplazo.
- **Roster de personajes** (work/danmachi-cast-coverage-images-2026-10): el archivo fuente usa alias/nombres alternativos para Noin/Neoin, Neze/Neese, Asta, Ryana/Liana y Celty/Selty; no son cinco personajes nuevos. Sí se encontró una omisión real en la candidata: Eina Tulle no figuraba en src/official-character-roster.js, aunque el perfil oficial de DanMachi III la documenta. Se añadió una ficha limitada a especie y función verificadas, con nivel/epíteto sin afirmar y sin inventar una URL de imagen. La regresión correspondiente está en tests/test_official_character_roster.cjs.
- **Explorador de Familias** (work/feature-connected-family-explorer-2026-10): src/lore-corpus.js de la candidata es más extenso (473 frente a 431 líneas) y contiene más referencias explícitas a Familia y búsqueda. No se reemplaza; siguen pendientes las diferencias funcionales específicas de commits exclusivos.
- **Generador/editor** (work/story-foundry-generator-2026-10): src/app.js de la candidata es más extenso (3296 frente a 2887 líneas) y contiene más referencias a historias, generación, importación y exportación. No se copia la versión fuente antigua; faltan comparaciones de comportamiento para cambios únicos concretos.
- **Catálogo de poderes** (work/connected-lore-power-catalog-2026-10): su src/project-schema.js contiene referencias a campos de poder ausentes del esquema actual, pero su rama no incluye el módulo integrado src/mythic-catalog.js. No se traslada el esquema en bloque; el delta requiere identificar qué campos tienen consumidores reales y qué validaciones son compatibles con el modelo actual.

**Estado tras esta revisión:** una omisión de roster fue corregida con fuente oficial y prueba dedicada. La auditoría semántica de todas las ramas divergentes sigue abierta; no se declara integración total, no se realiza merge y no se modifica main.