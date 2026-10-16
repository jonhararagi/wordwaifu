# TLM-005 — Informe de verificación end-to-end del atlas DanMachi

**Estado:** DONE / PASS_CI para el SHA funcional `cd918d4294e3141155e5bda2a5ae0cd9999a618e`; ambos workflows también deben cerrar en success para el HEAD documental de este informe.  
**Repositorio:** `jonhararagi/wordwaifu`  
**Rama autorizada:** `work/story-completion-danmachi-audit-2026-10`  
**HEAD BEFORE real al iniciar TLM-005:** `4c2fa980bb2d7bb4e88c246a5178544bfe24d2a3`.  
**Baseline documental de TLM-004 que figuraba en el contrato:** `ff1622e33ed7c324ebe1bc7c789f12b38296f464`; la rama ya había avanzado antes de que empezara TLM-005.  
**SHA de implementación funcional verificada:** `cd918d4294e3141155e5bda2a5ae0cd9999a618e`.  
**Archivos de cierre:** este informe, `docs/STATUS.md`, `docs/CEREBRO_BOT_OBRERO_CONTROL.md` y `docs/DONE.md`. El HEAD documental exacto es el tip de la rama después del commit que guarda esos cuatro documentos; se registra en la entrega final y se verifica con los dos workflows.  
**Alcance:** pruebas del modelo temporal, cronología y lugares, búsqueda/filtros/navegación, dossiers/continuidades, regresión TLM-004, arranque con orígenes externos bloqueados y aislamiento de Asteria.

## Resultado ejecutivo

Se cerraron dos defectos reproducibles del validador temporal y se amplió el browser smoke existente con búsquedas temporales y un arranque limpio con solicitudes no locales abortadas. No se reescribió el dataset canónico de DanMachi ni se agregaron fechas o coordenadas. Las pruebas automatizadas y los dos workflows de implementación terminaron en success.

- [Validate WordWaifu #38977028108 — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38977028108), `head_sha=cd918d4294e3141155e5bda2a5ae0cd9999a618e`.
- [DanMachi Lore and Retrieval Integrity #38977028080 — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38977028080), `head_sha=cd918d4294e3141155e5bda2a5ae0cd9999a618e`.

Estas ejecuciones son CI de GitHub Actions/Chromium. No son una ejecución local del agente ni una inspección manual de Windows 11.

## Defectos reproducibles corregidos

### Modelo temporal

`src/danmachi-timeline.js` validaba que el acontecimiento referenciado por `anchor.eventId` existiera y tuviera el tipo temporal `anchor`, pero no prohibía que otro acontecimiento usara también ese tipo. Además, las referencias `relative_order` aceptaban autorreferencias y ciclos entre acontecimientos, lo que permitía almacenar una orden temporal contradictoria.

La corrección exige `anchor.eventId` en el modelo temporal v1, limita el tipo `anchor` al acontecimiento designado, rechaza las referencias a sí mismo y detecta ciclos en relaciones de orden estrictas entre IDs reales de eventos. El ID simbólico `T0-BELL-ARRIVAL` sigue siendo un ancla, no una fecha ni un acontecimiento duplicado. Las relaciones `overlaps` se excluyen del detector de ciclos de orden estricto. La ruta de compatibilidad de datasets heredados se conserva.

Se añadieron regresiones con fixtures sintéticos y explícitamente de prueba. Las fechas calendáricas `2042-03-04`, `2040-01-01` y `2041-01-01` solo aparecen en memoria dentro de tests; no se escribieron en el dataset de DanMachi.

### Búsqueda temporal en la UI

`tests/browser_smoke.cjs` verifica que la búsqueda por «Tiempo desconocido / pendiente» recupera `EVT-DM-DESCENT-001`, y que «Aproximadamente siete años antes de T0» recupera `EVT-DM-AR-ERA-001` sin convertir el marco T−7 en una fecha calendárica.

### Arranque con orígenes externos bloqueados

Se añadió al browser smoke un contexto Chromium limpio y separado que mantiene accesible el servidor local del repositorio y aborta solicitudes a cualquier origen externo. La prueba abre WordWaifu, entra en la enciclopedia DanMachi, carga los 15 eventos y el esquema relacional no geográfico, espera los placeholders de referencias visuales oficiales y comprueba que no se inserten imágenes remotas. Al terminar, verifica que el contexto principal conserva el proyecto `project-asteria` con nombre `Las Crónicas de Asteria`.

Evidencia del log para `cd918d4294e3141155e5bda2a5ae0cd9999a618e`: `PASS TLM-005 cold start: same-origin timeline and placeholders work with external requests blocked; Asteria storage remains isolated.`

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/danmachi-timeline.js` | Reglas de ancla única, puntero de ancla requerido, autorreferencia y ciclos temporales |
| `tests/test_danmachi_timeline.cjs` | Pruebas de las seis variantes temporales, ancla designada, referencias propias/ciclos y fixtures sintéticos |
| `tests/browser_smoke.cjs` | Búsqueda temporal E2E y arranque limpio con solicitudes externas bloqueadas / aislamiento Asteria |
| `docs/TLM-005-END-TO-END-VERIFICATION-REPORT.md` | Este informe |
| `docs/STATUS.md` | Estado operativo final |
| `docs/CEREBRO_BOT_OBRERO_CONTROL.md` | Registro persistente y criterios de cierre |
| `docs/DONE.md` | Punto de recuperación sobrescrito |

No se modificaron `src/app.js`, el esquema de persistencia de Asteria, el roster ni los datasets de lore para corregir estos defectos.

## Matriz de requisito, prueba y resultado

| Requisito del contrato | Comando / prueba real | Resultado |
|---|---|---|
| Variantes temporalmente tipadas; unknown continúa unknown | `node tests/test_danmachi_timeline.cjs` | PASS_CI |
| No admitir ancla duplicada, puntero de ancla ausente, autorreferencia u orden cíclico | Regresiones sintéticas nuevas en `tests/test_danmachi_timeline.cjs` | PASS_CI |
| 15 eventos, dos lugares, validación de catálogo, rutas e incertidumbre espacial | `node lore/danmachi/tools/check-timeline.mjs`; `node tests/test_danmachi_timeline.cjs` | PASS_CI |
| Búsqueda temporal unknown/approximate, filtros de continuidad y era | `node tests/browser_smoke.cjs` | PASS_CI |
| Navegación evento → lugar → evento relacionado → retorno y preservación de contexto | `node tests/browser_smoke.cjs` | PASS_CI |
| Búsqueda de entidades/afirmaciones, dossiers, relaciones, spoilers y continuidad separada | `node tests/test_lore_corpus.cjs`; `node tests/test_character_archive.cjs`; `node tests/test_character_dossiers.cjs`; browser smoke | PASS_CI |
| Procedencia visual, placeholders, local storage, gate de watermark, original, offline y aislamiento Asteria | `node tests/test_danmachi_visual_references.cjs`; `node tests/browser_smoke.cjs` | PASS_CI |
| Arranque limpio con orígenes externos bloqueados | Browser smoke ampliado, contexto Chromium independiente | PASS_CI |
| Validador de sintaxis de archivos relevantes | `node --check src/danmachi-timeline.js`; `node --check tests/test_danmachi_timeline.cjs`; `node --check tests/browser_smoke.cjs`; y checks configurados en ambos workflows | PASS_CI |
| Workflows exigidos en el SHA funcional | Validate #38977028108; DanMachi #38977028080, ambos con `head_sha=cd918d4294e3141155e5bda2a5ae0cd9999a618e` | PASS_CI |

### Comandos observados en GitHub Actions

El workflow general ejecutó, entre otros, `node --check src/danmachi-timeline.js`, `node --check tests/test_danmachi_timeline.cjs`, `node --check tests/browser_smoke.cjs`, `node tests/test_danmachi_timeline.cjs`, y `node tests/browser_smoke.cjs`.

El workflow DanMachi ejecutó `node tests/test_lore_corpus.cjs`, `node tests/test_danmachi_visual_references.cjs`, `node tests/test_roster_claim_dedup.cjs`, `node tests/test_character_archive.cjs`, `node tests/test_character_dossiers.cjs`, `node tests/test_project_schema.cjs`, `node tests/test_fanfic_review.cjs` y `node tests/browser_smoke.cjs`, junto con los validadores de sintaxis y la validación de cronología.

No se relajararon aserciones existentes ni se eliminaron pruebas rojas para obtener un resultado verde. El cambio temporal añadido resuelve contradicciones demostrables y el fixture de arranque es independiente del proyecto activo.

## Inventario real mantenido

- 15 acontecimientos y dos fichas de lugar permanecen en `lore/danmachi/timeline/eras-and-events.json`; las seis variantes temporales están cubiertas por los tests, aunque el dataset vivo solo usa las que tienen evidencia suficiente.
- La cronología conserva offsets aproximados T−7/T−5, T0 como ancla, tiempos desconocidos y orden relativo no calculable donde corresponde. No se agregaron fechas calendáricas reales.
- El esquema de lugares sigue siendo `non_geographic_relationship_schematic`, sin escala ni coordenadas. Las seis referencias espaciales desconocidas siguen sin lugar asignado; las relaciones provisionales no se promocionaron a confirmadas.
- Las seis referencias visuales externas mantienen su política link-only cuando no está verificada la autorización de embedding. Las pruebas TLM-004 de derechos y watermark permanecen en la misma suite.
- El catálogo recuperado en la prueba de búsqueda mantiene 95 afirmaciones de búsqueda y 98 entradas; la suite prueba separación de continuidades y abstención cuando no hay evidencia.
- No se modificó `main`, no se fusionó ninguna rama y no se creó, modificó ni cerró ningún PR.

## Etiquetas de evidencia

- **PASS_CI:** workflows de GitHub Actions/Chromium para el SHA funcional `cd918d4294e3141155e5bda2a5ae0cd9999a618e`, incluidas pruebas unitarias y browser smoke; URLs exactas indicadas arriba.
- **PASS_STATIC:** inspección de los módulos, contratos, datos y pruebas existentes para delimitar defectos y mantener el dataset canónico intacto.
- **PASS_REAL:** NOT_RUN para ejecución local directa del agente. CI ejecutó el entorno de navegador real de Actions; no se lo presenta como prueba local.
- **NOT_RUN:** inspección visual/manual en Windows 11 y pruebas Node/Playwright locales. No se afirma que se hayan realizado.
- **UNKNOWN:** no se certifica la completitud global del canon ni de toda la cobertura de localizaciones; está explícitamente fuera del alcance de esta fase.

## Cierre y siguiente acción

TLM-005 queda DONE / PASS_CI para los criterios automatizables aquí cubiertos. La enciclopedia y el atlas global DanMachi permanecen PARTIAL; los acontecimientos sin localizador/ubicación verificados siguen con incertidumbre explícita. La revisión manual de Windows 11 no se ha ejecutado.

El commit documental que incorpora este informe requiere sus propias ejecuciones de **Validate WordWaifu** y **DanMachi Lore and Retrieval Integrity** en el HEAD documental final exacto. La entrega registra los IDs/URLs y la conclusión de esas dos ejecuciones después de que el nuevo ref termine su CI. No hacer cambios adicionales después de verificar dicho SHA si se quiere conservar el gate exacto.

**Restricciones comprobadas:** `main` sin cambios; sin merge; sin PR creado, cerrado o modificado.
