# TLM-004 — Panoramas visuales y procedencia

**Estado al corte de implementación:** IN_PROGRESS — pendiente de validar CI en el SHA publicado.  
**Rama:** `work/story-completion-danmachi-audit-2026-10`  
**HEAD BEFORE verificado:** `f863f8ff0be9d5007b0781a613af5d69f8795c8d`  
**SHA de implementación:** se registrará en el cierre documental después de comprobar CI.  
**Alcance:** registro visual validable, enlaces externos seguros, archivos locales y exportación marcada sujeta a derechos, integrados al atlas existente.  
**Límites:** no se descargó ni comiteó ninguna imagen oficial; no se modificó `src/app.js`, Asteria, `main` ni PR.

## Hallazgos y decisión de uso

- `src/official-character-roster.js` ya contiene URLs directas de perfiles de adaptación. El retrato de Bell de DanMachi V se registra como `CONT-ANIME`, sin relación con eventos/lugares y sin incrustarlo mientras no se verifique el permiso/condición de embed.
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

Cada referencia incluye ID estable, tipo de medio, título/caption, URL fuente, titular conocido o `unknown`, tipo de fuente, estado de uso, licencia/permiso, continuidad, spoilers, eventos/lugares relacionados, crédito, modo de almacenamiento, política de watermark y limitaciones. El validador rechaza IDs duplicados, URLs no HTTPS, referencias a entidades inexistentes y evaluaciones faltantes.

### Recursos externos

La UI nunca asigna `assetUrl` externo a `img.src`. El perfil de Bell queda link-only con un aviso de que no se verificó la incrustación y que no demuestra una escena. Los enlaces usan `noopener noreferrer`; no se copian ni almacenan.

### Recursos locales

La interfaz acepta PNG/JPEG/WebP/GIF/AVIF raster, hasta 5 MB, y rechaza SVG activo. Imagen y metadatos se guardan mediante `WordWaifuArtStudio` en IndexedDB con el respaldo local existente. La UI informa éxito solo tras recibir respuesta de guardado; si falla, muestra el error.

### Overlay y exportación marcada

El overlay HTML/CSS de crédito no altera la imagen. La exportación PNG exige recurso local con estado `user_owned`, `licensed` o `permission_recorded`, `allowModifyExport=true`, imagen raster decodificable y confirmación explícita. Se conserva el original. `pending_review`, `blocked`, referencias externas y recursos sin permiso explícito no muestran botón y son rechazados por el guard. Marca de agua, atribución y uso personal/educativo no son autorización.

## Evidencia pendiente de CI

- Unidades: esquema, IDs, URL segura, continuidad y cobertura de 15 eventos + 2 lugares; estados de exportación.
- Browser smoke: tarjetas/placeholder, almacenamiento local, overlay/crédito, exportación confirmada, original intacto, preview offline, ausencia de solicitud remota y aislamiento Asteria.
- Revisión manual Windows 11: `NOT_RUN`; TLM-005 permanece separada.
- Se añadirán resultados de CI en el cierre documental tras verificar el SHA exacto.
