# TLM-004 — Panoramas visuales y procedencia

**Estado de implementación:** DONE / PASS_CI para el SHA de código indicado abajo.  
**Rama:** `work/story-completion-danmachi-audit-2026-10`  
**HEAD BEFORE real al iniciar TLM-004:** `9a492e69f649fefc16fa24d4658a2e134d76bf7b`.  
**HEAD documental indicado en la orden que no coincidía con la rama:** `f863f8ff0be9d5007b0781a613af5d69f8795c8d`.  
**SHA de implementación validada:** `8960fdd11ecff5fd66d69c1bae221a13f12342c4`. La referencia de rama posterior a este cierre documental es el HEAD documental final.  
**CI sobre el SHA de implementación:** [Validate WordWaifu #38967733362 — intento 2, success](https://github.com/jonhararagi/wordwaifu/actions/runs/38967733362) y [DanMachi Lore and Retrieval Integrity #38967733260 — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38967733260). El primer intento de Validate se interrumpió por una interacción interceptada entre marcadores de mapa fuera del módulo visual; el reintento del mismo SHA pasó.  
**Alcance:** registro validable integrado al atlas existente, enlaces externos seguros, recursos raster del usuario almacenados solo en el navegador y exportación marcada sujeta a derechos.  
**Límites:** no se descargó ni se añadió ninguna imagen oficial al repositorio. Se modificó puntualmente `src/app.js` porque la auditoría demostró que el archivo de personajes incrustaba retratos oficiales remotos sin verificación de permiso de embedding; el cambio suprime esa incrustación y ofrece arte conceptual local/enlaces a las fuentes. No se alteró el almacenamiento de Asteria, `main` ni ningún PR. La revisión manual en Windows 11 sigue `NOT_RUN`; TLM-005 continúa pendiente.

## Hallazgos y decisión de uso

- `src/official-character-roster.js` conserva URLs de procedencia de retratos oficiales. Se auditaron 58 URLs distintas del campo `imageUrl` y 5 referencias históricas `historicalImageUrl`; ninguna se usa como `img.src` remoto en el archivo de personajes. En su lugar se muestra ilustración conceptual local original (etiquetada como no oficial) o inicial, con enlace HTTPS a la página oficial y `noopener noreferrer`. Ryu en continuidad histórica enlaza a DanMachi IV; su continuidad de anime enlaza a DanMachi V. Estas referencias no prueban la apariencia exacta en una escena de novela.
- `src/art-studio.js` ya conserva recursos locales en IndexedDB con respaldo en `localStorage`, marcas de borrado y límite de 5 MB. Se amplía esta biblioteca existente; no se crea otra base de datos ni un endpoint remoto.
- Páginas oficiales/editoriales se muestran como tarjetas de contexto y enlaces a la fuente. Una página editorial no se describe como imagen de escena ni como licencia para copiar su portada.
- Se registraron seis fuentes/referencias externas, todas link-only mientras no se verifique la incrustación. No se usan capturas, imágenes copiadas ni scraping de wikis.

## Evaluación de acontecimientos y lugares

`context_source_page_only` significa que solo se ofrece página de fuente y **no** que haya una imagen reutilizable. `no_scene_specific_asset` significa que no se encontró una asociación visual concreta y permitida. El registro cubre los 15 acontecimientos y las dos fichas de lugar.

| ID del acontecimiento | Resultado visual | Referencia/contexto |
|---|---|---|
| `EVT-DM-DESCENT-001` | `no_scene_specific_asset` | Sin recurso asociado — La página cronológica sirve como contexto, pero no se identificó una imagen autorizada ni una escena visual específica. |
| `EVT-DM-GREAT-QUESTS-001` | `no_scene_specific_asset` | Sin recurso asociado — Expediciones descritas de forma general; no se atribuye una imagen de combate o localización sin evidencia. |
| `EVT-DM-ZH-OEBD-001` | `no_scene_specific_asset` | Sin recurso asociado — No se identificó una imagen oficial con permiso de incrustación ni una referencia visual primaria vinculada al suceso. |
| `EVT-DM-ZH-FALL-001` | `no_scene_specific_asset` | Sin recurso asociado — No se atribuye un retrato ni una portada a la caída de las Familias Zeus/Hera. |
| `EVT-DM-AR-ERA-001` | `context_source_page_only` | `DM-VIS-REF-ASTREA-RECORD-PUBLISHER-001` — La página editorial aporta contexto de publicación, no prueba de una escena ni del evento T−5. |
| `EVT-DM-ASTREA-FAMILIA-JUGGERNAUT-001` | `context_source_page_only` | `DM-VIS-REF-YEN-VOL13-001` — El volumen 13 orienta al pasaje; el detalle espacial de la tragedia sigue provisional y no se añade una escena visual. |
| `EVT-DM-RYUU-REVENGE-001` | `context_source_page_only` | `DM-VIS-REF-YEN-VOL13-001` — Referencia editorial de arco; sin imagen de escena verificada. |
| `EVT-DM-HESTIA-DESCENT-001` | `no_scene_specific_asset` | Sin recurso asociado — No se deduce el lugar de llegada ni se asigna una imagen de la adaptación a una escena de la novela. |
| `EVT-DM-BELL-ARRIVAL-001` | `context_source_page_only` | `DM-VIS-REF-CHRONOLOGY-MAIN-001`, `DM-VIS-REF-GA-VOL1-001` — La cronología y la página del volumen 1 son enlaces contextuales, no una imagen demostrada de la llegada. |
| `EVT-DM-BELL-MEETS-HESTIA-001` | `context_source_page_only` | `DM-VIS-REF-GA-VOL1-001` — La página del volumen 1 sirve de referencia editorial; no se enlaza una ilustración a la escena sin evidencia. |
| `EVT-DM-BELL-AIS-MINOTAUR-001` | `context_source_page_only` | `DM-VIS-REF-CHRONOLOGY-MAIN-001`, `DM-VIS-REF-GA-VOL1-001` — No se confunde el retrato de Bell ni la página editorial con la escena del Minotauro. |
| `EVT-DM-EINA-ADVISOR-001` | `context_source_page_only` | `DM-VIS-REF-GA-VOL1-001` — Contexto general del volumen 1, no evidencia visual concreta de la conversación. |
| `EVT-DM-RYUU-JURA-PURSUIT-001` | `context_source_page_only` | `DM-VIS-REF-YEN-VOL13-001` — Referencia del volumen 13; no determina el punto exacto de persecución. |
| `EVT-DM-JUGGERNAUT-RETURN-001` | `context_source_page_only` | `DM-VIS-REF-YEN-VOL13-001` — Referencia del volumen 13; no atribuye una ilustración específica a la reaparición. |
| `EVT-DM-JUGGERNAUT-DEFEAT-001` | `context_source_page_only` | `DM-VIS-REF-YEN-VOL14-001` — Contexto del volumen 14; no inventa piso, plano ni vista geográfica. |

| Ficha de lugar | Resultado visual | Referencia/contexto |
|---|---|---|
| `LOC-ORARIO` | `context_source_page_only` | `DM-VIS-REF-GA-VOL1-001` — La página editorial ayuda a ubicar el marco urbano; no proporciona un panorama reutilizable con derechos verificados. |
| `LOC-DUNGEON` | `context_source_page_only` | `DM-VIS-REF-YEN-VOL13-001`, `DM-VIS-REF-YEN-VOL14-001` — Las páginas editoriales aportan contexto del arco, no topología, planos de pisos ni imágenes autorizadas para incrustar. |

## Modelo y derechos

Cada referencia incluye ID estable, tipo de medio, título/caption, URL fuente HTTPS, titular conocido o `unknown`, tipo de fuente, estado de uso, licencia/permiso, continuidad, spoilers, eventos/lugares relacionados, crédito, modo de almacenamiento, política de watermark y límites. El validador rechaza IDs duplicados, tipos no admitidos, URLs inseguras, relaciones a eventos/lugares inexistentes, incompatibilidad de continuidad entre referencia y evento, diferencias entre relaciones y cobertura y evaluaciones faltantes. El tipo `licensed_material` también está reconocido para los recursos licenciados declarados por el formulario local.

### Recursos externos

La UI nunca asigna `assetUrl` externo a `img.src`. El perfil de Bell queda link-only con un aviso de que no se verificó la incrustación y que no demuestra una escena. Los enlaces usan `noopener noreferrer`; no se copian ni almacenan.

### Recursos locales

La interfaz acepta PNG/JPEG/WebP/GIF/AVIF raster, hasta 5 MB, y rechaza SVG activo. Imagen y metadatos se guardan mediante `WordWaifuArtStudio` en IndexedDB con el respaldo local existente. La UI informa éxito solo tras recibir respuesta de guardado; si falla, muestra el error.

### Overlay y exportación marcada

El overlay HTML/CSS de crédito no altera la imagen. La exportación PNG exige recurso local con estado `user_owned`, `licensed` o `permission_recorded`, `allowModifyExport=true`, imagen raster decodificable y confirmación explícita. Se conserva el original. `pending_review`, `blocked`, referencias externas y recursos sin permiso explícito no muestran botón y son rechazados por el guard. Marca de agua, atribución y uso personal/educativo no son autorización.

## Resultado de pruebas y límites

- `tests/test_danmachi_visual_references.cjs`: PASS en ambos workflows para `8960fdd11ecff5fd66d69c1bae221a13f12342c4`. Cubre esquema/IDs, URL segura, relaciones, continuidad, cobertura de 15 eventos y 2 lugares y bloqueo de exportación marcada para políticas o estados no autorizados.
- Browser smoke de TLM-004: PASS en Chromium de CI. Verifica enlaces y placeholders, alta de raster local, rechazo de bytes corruptos, guardado/lectura local, overlay de atribución, confirmación explícita, exportación PNG, conservación del original, preview offline, cero solicitudes de red para las imágenes locales y aislamiento de Asteria.
- El archivo de personajes se verificó con Ryu, Alise, Astrea, Kaguya e Iska en sus continuidades: ningún retrato oficial remoto se incrusta; las fuentes oficiales permanecen accesibles mediante enlaces y las tiras de momentos advierten que no representan imágenes de la escena.
- [Validate WordWaifu #38967733362 — intento 2](https://github.com/jonhararagi/wordwaifu/actions/runs/38967733362) y [DanMachi Lore and Retrieval Integrity #38967733260](https://github.com/jonhararagi/wordwaifu/actions/runs/38967733260): success para `8960fdd11ecff5fd66d69c1bae221a13f12342c4`. El primer intento de Validate falló porque el marcador de un fixture de mapa interceptó el clic de otro marcador; el reintento del mismo SHA pasó. No se modificó el código de mapas para ocultar esa flaqueza.
- Revisión manual Windows 11: `NOT_RUN`. Las pruebas fueron ejecutadas por GitHub Actions/Chromium, no localmente por este agente.
- TLM-005 sigue NOT_STARTED y pendiente de una revisión end-to-end dedicada. El atlas global todavía es parcial; TLM-004 no pretende completar el canon, añadir escenas no comprobadas ni conceder derechos sobre fuentes externas.
