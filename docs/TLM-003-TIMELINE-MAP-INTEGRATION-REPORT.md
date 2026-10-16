# TLM-003 — Informe de integración entre cronología y mapa DanMachi

Estado de tarea: DONE / PASS_CI  
Estado del atlas completo: PARTIAL  
Repositorio: jonhararagi/wordwaifu  
Rama: work/story-completion-danmachi-audit-2026-10  
HEAD BEFORE verificado: c859e3c822bfea7f8b73a8f959eb29a856736d27  
SHA de implementación validado por CI: c9fa2d05de3bb81526523202bea0fb5cb058ae06  
HEAD de cierre documental: el SHA del commit que contiene esta actualización; está enlazado por el ref/historial de la rama y también se registra en la respuesta de entrega. Un commit no puede incluir su propio SHA sin una referencia circular.

## Resultado

La cronología conserva sus 15 acontecimientos y el modelo temporal TLM-002. Cada evento recibió una evaluación espacial individual. El corpus de cronología declara dos lugares por ID estable, y el validador comprueba esos IDs frente al catálogo y a las rutas Markdown. El panel DanMachi incorpora una vista de esquema de relaciones no geográfico y sin escala; no se modifica el mapa SVG de src/app.js ni el estado persistido del proyecto Asteria.

Recuento espacial del dataset:
- 2 fichas de lugar: LOC-ORARIO y LOC-DUNGEON.
- 9 referencias de evento a lugar.
- 4 eventos con referencia verificada.
- 5 eventos con referencia provisional.
- 6 eventos con ubicación desconocida y ninguna referencia geográfica asignada.

## Fichas de lugar y fuentes

### LOC-ORARIO — ficha nueva

Se creó lore/danmachi/places/orario.md y se registró en lore/danmachi/catalog.json, quitándolo del listado de IDs reservados. La fuente base es DMR-012-SRC-001, página editorial oficial de GA文庫/SB Creative para la novela principal, volumen 1: https://ga.sbcr.jp/product/9784797372809/

La sinopsis respalda la identidad de Orario como ciudad que posee el Dungeon subterráneo y el marco inicial de Bell/Hestia. Solo se usa para identidad urbana y relación general. No respalda un plano de la ciudad, calle, puerta, barrio, coordenadas ni la ubicación exacta de cada escena. DM-WORLD-001 se conserva como escenario narrativo.

### LOC-DUNGEON — ficha existente reutilizada

Se reutiliza lore/danmachi/places/dungeon.md y su registro activo. DMR-012-SRC-001 respalda el marco general del Dungeon asociado a Orario. La sinopsis editorial de Yen Press del volumen 14, https://yenpress.com/titles/9781975385019-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-14-light-novel, respalda el marco narrativo general de Bell/Ryu en el Dungeon profundo, no una topología XY. La mención del piso 37 no genera una ficha de piso ni coordenadas.

El índice de lugares y la ficha Dungeon se actualizaron para enlazar la ficha nueva de Orario, conservando DM-WORLD-001 y DM-GUILD-001 con sus tipos existentes.

## Tabla espacial para los 15 acontecimientos

| ID de acontecimiento | Estado espacial | Vínculo / tipo de relación | Fuente(s) y razón / límite |
|---|---|---|---|
| EVT-DM-DESCENT-001 | UNKNOWN | Sin referencia | La cronología citada no fija ciudad ni lugar; “mundo inferior” no implica Orario. No se crea marcador. |
| EVT-DM-GREAT-QUESTS-001 | UNKNOWN | Sin referencia | El expediente conserva ubicación/orden exactos pendientes; no se presupone que todas las expediciones ocurran en el Dungeon. |
| EVT-DM-ZH-OEBD-001 | UNKNOWN | Sin referencia | El expediente candidato no localiza el enfrentamiento con detalle suficiente. No se crea referencia al Dungeon. |
| EVT-DM-ZH-FALL-001 | UNKNOWN | Sin referencia | No hay evidencia suficiente para afirmar dónde tuvo lugar la caída de las Familias. |
| EVT-DM-AR-ERA-001 | VERIFIED · city_level | LOC-ORARIO · broad_setting (escenario amplio) | Cronología oficial https://danmachi.com/chronology/ ubica Astrea Record dentro de la Era Oscura de Orario. Esto solo indica marco urbano general, no el punto de cada escena. |
| EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001 | PROVISIONAL · dungeon_general | LOC-DUNGEON · related_context (contexto relacionado) | Sinopsis editorial del volumen 13 y cronología secundaria https://yenpress.com/titles/9781975328191-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-13-light-novel y https://danmachi.fandom.com/wiki/Timeline. El vínculo es contexto relacionado por el Juggernaut; la fuente no demuestra que la tragedia T−5 suceda dentro del Dungeon. Cotejo primario pendiente. |
| EVT-DM-RYUU-REVENGE-001 | UNKNOWN | Sin referencia | La evidencia describe la retrospectiva de venganza, pero no localiza cada acto de persecución. |
| EVT-DM-HESTIA-DESCENT-001 | UNKNOWN | Sin referencia | La llegada al mundo inferior no demuestra que Hestia llegara a Orario ni a un lugar concreto. |
| EVT-DM-BELL-ARRIVAL-001 | VERIFIED · city_level | LOC-ORARIO · event_place (lugar del evento) | Cronología oficial https://danmachi.com/chronology/ nombra la llegada de Bell a Orario. No fija puerta, calle ni coordenadas. |
| EVT-DM-BELL-MEETS-HESTIA-001 | VERIFIED · city_level | LOC-ORARIO · event_place | Sinopsis editorial del volumen 1 https://ga.sbcr.jp/product/9784797372809/ enmarca el encuentro de Bell/Hestia en Orario. No identifica un edificio. |
| EVT-DM-BELL-AIS-MINOTAUR-001 | PROVISIONAL · dungeon_general | LOC-DUNGEON · event_place (candidato) | Cronología oficial y sinopsis editorial del volumen 1 https://danmachi.com/chronology/ y https://yenpress.com/titles/9780316340137-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-1-light-novel. El lugar se conserva como provisional porque el localizador primario de la escena sigue pendiente; no se inventa piso. |
| EVT-DM-EINA-ADVISOR-001 | PROVISIONAL · city_level | LOC-ORARIO · related_context | Sinopsis editorial del volumen 1 y el expediente candidato interno. Orario es contexto urbano de la actividad de la Guild, no ubicación verificada de la conversación con Eina. |
| EVT-DM-RYUU-JURA-PURSUIT-001 | PROVISIONAL · dungeon_general | LOC-DUNGEON · related_context | Yen Press volumen 13 y cronología secundaria https://yenpress.com/titles/9781975328191-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-13-light-novel y https://danmachi.fandom.com/wiki/Timeline. El localizador primario de la persecución no está verificado; no se asume que todo ocurra en un solo punto. |
| EVT-DM-JUGGERNAUT-RETURN-001 | PROVISIONAL · dungeon_general | LOC-DUNGEON · related_context | Sinopsis editorial del volumen 13 y referencia secundaria https://yenpress.com/titles/9781975328191-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-13-light-novel y https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_13/Synopsis. La localización exacta de la nueva aparición sigue pendiente; sin piso ni ruta. |
| EVT-DM-JUGGERNAUT-DEFEAT-001 | VERIFIED · dungeon_general | LOC-DUNGEON · event_place (nivel Dungeon, no plano de piso) | Sinopsis editorial del volumen 14 https://yenpress.com/titles/9781975385019-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-14-light-novel sitúa a Bell y Ryu profundamente en el Dungeon. El registro de ubicación no fija la topología del piso 37 ni coordenadas. |

## Modelo y comportamiento implementado

- El dataset conserva los 15 IDs, los campos temporal y dateLabel, evidenceStatus, narrativeOrigin, continuityScopes, fuentes y detailPath.
- Cada evento usa locationAssessment (status, spatialPrecision, reason) y locationRefs con locationId, relationship, verificationStatus, spatialPrecision, context y sourceUrls.
- El registro data.locations define fichas del corpus y relaciones generales. Las tarjetas enlazan por ID, no por coincidencia de nombre.
- Un evento UNKNOWN no puede tener locationRefs. Referencias inexistentes, estados/tipos/precisiones inválidos, duplicados, rutas faltantes, fuentes desligadas o coordenadas en un esquema no geográfico se rechazan.
- La vista comparte el filtro de búsqueda, era y continuidad con los eventos. Muestra conteos de eventos vinculados, provisionales y sin ubicación demostrable; el detalle del lugar lista los eventos que coinciden con los filtros.
- Navegación evento → lugar → evento relacionado → lugar → retorno al evento probada en Chromium, conservando los filtros del panel.
- LOC-DUNGEON/LOC-ORARIO solo existen en el corpus DanMachi. No se tocan project.locations ni datos de Asteria.

## Archivos modificados

1. lore/danmachi/timeline/eras-and-events.json
2. lore/danmachi/catalog.json
3. lore/danmachi/places/orario.md (nuevo)
4. lore/danmachi/places/00-indice-lugares.md
5. lore/danmachi/places/dungeon.md
6. src/danmachi-timeline.js
7. lore/danmachi/tools/check-timeline.mjs
8. index.html
9. src/styles.css
10. tests/test_danmachi_timeline.cjs
11. tests/browser_smoke.cjs
12. docs/DANMACHI-LOCATION-MODEL.md (nuevo)
13. docs/TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md (este informe)
14. docs/TLM-003-TIMELINE-MAP-INTEGRATION-CONTRACT.md
15. docs/STATUS.md
16. docs/DONE.md
17. docs/CEREBRO_BOT_OBRERO_CONTROL.md

No se modificó src/app.js. No se añadieron imágenes.

## Pruebas, resultados y evidencia

**PASS_CI — SHA de implementación c9fa2d05de3bb81526523202bea0fb5cb058ae06**

- [Validate WordWaifu #38950288434](https://github.com/jonhararagi/wordwaifu/actions/runs/38950288434) — success. El workflow ejecutó sintaxis, test DanMachi de cronología/modelo espacial, validación de catálogo y browser smoke Chromium.
- [DanMachi Lore and Retrieval Integrity #38950288325](https://github.com/jonhararagi/wordwaifu/actions/runs/38950288325) — success. El workflow ejecutó sintaxis, pruebas del corpus, browser smoke y validación del catálogo/enlaces.
- Las pruebas unitarias cubren referencias no existentes, IDs duplicados, ruta Markdown faltante, tipo de entidad incompatible, ubicación UNKNOWN con referencias falsas, coordenadas en el esquema, catálogo faltante/duplicado/tipo incorrecto y compatibilidad temporal.
- La prueba Chromium cubre la etiqueta no geográfica, los dos IDs, conteos, filtros, navegación en ambos sentidos, links de retorno y que la lectura del mapa no cambie wordwaifu.project.v1.
- **NOT_RUN local:** no se ejecutó Node/Playwright localmente desde este agente; la evidencia de ejecución corresponde al CI de GitHub.
- **NOT_RUN:** revisión visual/manual Windows 11. El test automatizado de Chromium no equivale a una revisión visual manual.

## Limitaciones restantes

- Seis acontecimientos continúan UNKNOWN; no tienen referencia de lugar ni marcador. Esto es intencional porque la evidencia actual no permite localizarlos.
- Cinco acontecimientos tienen vínculo PROVISIONAL que no debe leerse como canon geográfico confirmado. Faltan localizadores de escena, en especial para T−5, el rescate del Minotauro, las asesorías de Eina y el arco de la persecución/Juggernaut.
- No se dispone de coordenadas verificadas para Orario o Dungeon; no hay escala ni plano de piso. El esquema no geográfico no intenta resolver geografía canónica.
- La cobertura temporal/continuidad del canon sigue siendo parcial y la revisión visual manual no se hizo.
- TLM-004 (imágenes/derechos) y TLM-005 (revisión end-to-end integral) quedan NOT_STARTED.

## Estado de cierre y próxima acción

**TLM-003 = DONE / PASS_CI** para la integración y los criterios espaciales verificables. El atlas completo sigue **PARTIAL**.

Próxima tarea: **TLM-004 — panoramas/imágenes de referencia con procedencia y derechos** cuando se ordene expresamente. No se descargaron ni añadieron imágenes durante TLM-003.
