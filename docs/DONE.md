PARTIAL

# WordWaifu — Punto de continuidad del CEREBRO / BOT OBRERO

**Actualizado:** 2026-10-16  
**Estado del atlas DanMachi:** funcionalidad ampliada, pero aún PARTIAL en cobertura espacial y visual.  
**TLM-001:** DONE como auditoría.  
**TLM-002:** DONE / PASS_CI.  
**TLM-003:** DONE / PASS_CI y aceptada por CEREBRO.  
**Tarea activa única:** **TLM-004 — panoramas y referencias visuales con procedencia, permisos y tratamiento de marca de agua.**

## Rama y HEAD

- Repositorio: `jonhararagi/wordwaifu`.
- Rama autorizada: `work/story-completion-danmachi-audit-2026-10`.
- HEAD del cierre documental TLM-003: `67c48d55601a372653c425e1517cfe4f6c322813`.
- HEAD previo a esta actualización de continuidad: `c983cf57f9084eab32ff251cb8fc5a3f2843f51e`.
- Consultar la referencia de rama para el HEAD AFTER exacto de este archivo.
- `main`: no modificada.
- PRs: no abiertos, fusionados, cerrados ni modificados.
- Los workflows TLM-003 citados abajo validan su SHA de cierre; no se atribuye automáticamente ese resultado a commits de control/documentación posteriores. Verificar CI por el SHA actual al terminar TLM-004.

## TLM-003 — cierre aceptado por CEREBRO

- Cierre: [`67c48d55601a372653c425e1517cfe4f6c322813`](https://github.com/jonhararagi/wordwaifu/commit/67c48d55601a372653c425e1517cfe4f6c322813).
- Informe: [`docs/TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md`](TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md).
- Modelo espacial: [`docs/DANMACHI-LOCATION-MODEL.md`](DANMACHI-LOCATION-MODEL.md).
- [Validate WordWaifu #38950807146](https://github.com/jonhararagi/wordwaifu/actions/runs/38950807146) y [DanMachi Lore and Retrieval Integrity #38950807317](https://github.com/jonhararagi/wordwaifu/actions/runs/38950807317): ambos `success` en el SHA exacto de cierre.
- Evaluados 15 acontecimientos; 2 fichas de lugar (`LOC-ORARIO`, `LOC-DUNGEON`), 9 referencias, 4 estados espaciales verificados, 5 provisionales y 6 desconocidos.
- La vista es un esquema relacional **no geográfico y sin escala**, no un mapa con coordenadas. Las ubicaciones sin respaldo siguen desconocidas.
- No se modificó el mapa Asteria ni se importaron datos de DanMachi al proyecto local del usuario.
- Revisión visual/manual Windows 11: `NOT_RUN`.

## TLM-004 — orden activa de trabajo

Contrato completo y vinculante: [`docs/TLM-004-VISUAL-REFERENCES-AND-RIGHTS-CONTRACT.md`](TLM-004-VISUAL-REFERENCES-AND-RIGHTS-CONTRACT.md).

Objetivo: añadir referencias visuales útiles a la cronología y lugares sin fingir cobertura y sin mezclar continuidad de anime con canon de novela. Se inspeccionaron previamente los sistemas existentes y consta que:

- `src/official-character-roster.js` ya apunta a algunos retratos remotos oficiales y declara que no se almacenan en el repositorio.
- `src/art-studio.js` ya ofrece recursos por URL/archivo y persistencia local mediante IndexedDB con fallback local; verificar el comportamiento real antes de extenderlo.
- `docs/CONTENT_RIGHTS_AND_TAKEDOWN.md` advierte que atribución/enlace, uso educativo/personal o marca de agua no conceden por sí solos licencia o permiso.
- La cronología de DanMachi ahora tiene la vista espacial TLM-003; agregar la sección “Referencias visuales” contextual allí, no duplicar galerías por cada módulo.

### Tarea del BOT OBRERO

1. Comprobar el HEAD actual; leer contrato, protocolo, estado, modelo de ubicaciones y política de derechos.
2. Auditar los 15 eventos y los lugares para identificar candidatos visuales pertinentes, sin obligar a que cada elemento tenga imagen.
3. Definir y validar un registro de recursos visuales con IDs estables, fuente/página, titular conocido, licencia/permiso/estado pendiente, continuidad, nivel de spoiler y referencias al evento/lugar.
4. Para material oficial externo, priorizar enlaces a páginas oficiales/editoriales. Solo previsualizar imágenes remotas si el origen/condiciones permiten ese uso y pasa el allowlist existente. No descargar ni comitear imágenes oficiales, capturas, scans, portadas ni ilustraciones de terceros sin licencia/permiso compatible.
5. Permitir archivos propios/licenciados aportados por el usuario en almacenamiento del navegador; no subirlos a GitHub ni enviarlos a endpoints remotos.
6. Separar overlay informativo de atribución en la UI de exportación de una copia con marca de agua. Exportar una copia marcada solo con derechos que permitan modificar/exportar y confirmación explícita. Conservar intacto el original.
7. No etiquetar por defecto un recurso como autorizado porque diga “uso educativo” o “uso personal”; no presentar la marca de agua como permiso. Los recursos pendientes/bloqueados no deben tener ruta de exportación.
8. Mostrar continuidad correcta y spoilers; un retrato de adaptación no es evidencia visual de una escena específica de la novela.
9. Añadir pruebas para previews/links, placeholders, créditos, estado de derechos, watermark gate, recursos locales, offline y aislamiento del proyecto activo.
10. Publicar `docs/TLM-004-VISUAL-REFERENCES-AND-RIGHTS-REPORT.md`, actualizar STATUS/control y sobrescribir DONE al cerrar.

### Fuera de alcance

- Descarga en lote de imágenes oficiales o incorporar material sin derechos verificados.
- Usar marcas de agua para tratar de legitimar una copia no autorizada.
- Hacer scraping de wikis o copiarles imágenes.
- Declarar completada la revisión global visual/manual de Windows 11; TLM-005 sigue separada.
- Tocar `main`, fusionar ramas o cambiar PR.

## Estado de fases

| Fase | Estado | Evidencia / siguiente paso |
|---|---|---|
| TLM-001 — Auditoría | DONE | `docs/TLM-001-ATLAS-TEMPORAL-AUDIT.md` |
| TLM-002 — Modelo temporal | DONE / PASS_CI | `docs/TLM-002-TEMPORAL-MODEL-REPORT.md` |
| TLM-003 — Conexión cronología/mapa | DONE / PASS_CI | `docs/TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md`; cierre `67c48d5` |
| TLM-004 — Referencias visuales y procedencia | IN_PROGRESS | Ejecutar `docs/TLM-004-VISUAL-REFERENCES-AND-RIGHTS-CONTRACT.md` |
| TLM-005 — Validación integral y revisión visual | NOT_STARTED | Solo comenzar con el trabajo visual/funcional anterior integrado y revisable |

## Recuperación tras interrupción

Leer `docs/CEREBRO_BOT_OBRERO_CONTROL.md`, `docs/STATUS.md`, este DONE y el contrato TLM-004. Comprobar la rama y el SHA actual de GitHub antes de escribir; evitar repetir commits ya aplicados. Retomar únicamente TLM-004. Cuando se cierre, TLM-005 será la siguiente tarea, si los criterios y pruebas justifican ese paso.
