PARTIAL

# WordWaifu — Punto de continuidad CEREBRO / BOT OBRERO

**Última actualización:** 2026-10-16  
**Estado del atlas temporal-geográfico:** PARTIAL.  
**TLM-001:** DONE como auditoría.  
**TLM-002:** DONE / PASS_CI y aceptada por CEREBRO.  
**Tarea activa única:** **TLM-003 — conectar cronología DanMachi con un mapa/esquema de lugares por IDs estables.**

## Rama y HEAD

- Repositorio: `jonhararagi/wordwaifu`.
- Rama autorizada: `work/story-completion-danmachi-audit-2026-10`.
- HEAD de cierre TLM-002 confirmado por workflows: `10561399ae476c9c196cb3f97aca93e42df16987`.
- HEAD previo al cierre de esta actualización documental: `c05e1266700fab41b0b2e3adc77b4222f0e53689`.
- Consultar la referencia real de la rama para el HEAD AFTER exacto; no incrustar el SHA final dentro del mismo árbol que lo genera.
- `main`: no modificada.
- PRs: no abiertos, fusionados, cerrados ni modificados.
- Los workflows de TLM-002 no validan automáticamente los commits documentales posteriores. Comprobar CI ligado al SHA nuevo al finalizar cada tarea.

## TLM-002 aceptada

- Implementación: [`4d75c97aa690ddba73ec6ef09eb0fbefef06d342`](https://github.com/jonhararagi/wordwaifu/commit/4d75c97aa690ddba73ec6ef09eb0fbefef06d342).
- Cierre documental: [`10561399ae476c9c196cb3f97aca93e42df16987`](https://github.com/jonhararagi/wordwaifu/commit/10561399ae476c9c196cb3f97aca93e42df16987).
- [Informe TLM-002](TLM-002-TEMPORAL-MODEL-REPORT.md) y [esquema temporal](DANMACHI-TEMPORAL-MODEL.md).
- PASS_CI para el HEAD documental final: [Validate WordWaifu #38941639636](https://github.com/jonhararagi/wordwaifu/actions/runs/38941639636) y [DanMachi Lore and Retrieval Integrity #38941639826](https://github.com/jonhararagi/wordwaifu/actions/runs/38941639826), ambos success.
- Los 15 eventos conservan IDs, dateLabel, fuentes, evidencia, continuidad y expedientes; cada uno posee modelo temporal estructurado. Ninguna fecha exacta se inventó.
- Revisión visual/manual Windows 11: NOT_RUN.

## TLM-003 — contrato activo

Contrato operativo obligatorio: [`docs/TLM-003-TIMELINE-MAP-INTEGRATION-CONTRACT.md`](TLM-003-TIMELINE-MAP-INTEGRATION-CONTRACT.md).

### Objetivo

Conectar cada evento con las fichas de lugar pertinentes por ID estable y construir una vista geográfica/esquemática de DanMachi desde el panel temporal existente. Debe permitir navegar evento → lugar → otros eventos relacionados, conservando el filtro temporal y de continuidad.

### Hallazgos que guían la ejecución

- `lore/danmachi/timeline/eras-and-events.json` tiene 15 eventos y no estaban conectados a lugares en el cierre TLM-001.
- `lore/danmachi/places/dungeon.md` registra `LOC-DUNGEON` con evidencia editorial de su papel general y relación con Orario.
- `lore/danmachi/canon/01-mundo-orario.md` usa `DM-WORLD-001` como ficha de escenario provisional; no tratarlo automáticamente como lugar geográfico ya normalizado.
- `lore/danmachi/canon/03-dungeon-y-guild.md` mezcla contexto institucional y lugar y conserva dudas de verificación.
- El mapa SVG de `src/app.js` pertenece a los universos/proyectos locales del usuario. No insertar automáticamente lugares DanMachi en el proyecto Asteria ni sobreescribir `project.locations`.
- No hay permiso para inventar coordenadas, barrios, pisos, rutas ni topología. Si solo se conocen relaciones jerárquicas, la vista debe rotularse como esquema no geográfico/no a escala.
- Es posible que no todos los eventos puedan asociarse a un lugar confirmado. Evaluar los 15 individualmente; mostrar “Ubicación desconocida”/“Ubicación por verificar” en vez de fingir cobertura.

### Trabajo requerido

1. Verificar HEAD actual y leer el contrato TLM-003, TLM-001, el modelo temporal y el protocolo de trabajo.
2. Crear un modelo de `locationRefs` o equivalente con IDs estables y tipos espaciales diferenciados: lugar del evento, zona amplia o contexto relacionado; separar estado de verificación y precisión espacial.
3. Reutilizar `LOC-DUNGEON`. Crear `LOC-ORARIO` solo si puede respaldarse y documentarse con fuentes apropiadas; mantener catálogo/índice/dossier sincronizados.
4. Añadir al dataset una decisión justificada para cada uno de los 15 eventos. Las referencias provisionales deben mostrarse como candidatas, no como hechos confirmados.
5. Implementar mapa/esquema DanMachi conectado al tiempo y continuidad. El layout visual no puede confundirse con coordenadas canónicas.
6. Añadir pruebas de validación del modelo, enlaces, filtros, estados unknown/provisional, ausencia de coordenadas falsas y aislamiento frente al proyecto Asteria.
7. Ejecutar los workflows y registrar los resultados para el SHA exacto. NOT_RUN local/Windows debe seguir etiquetado honestamente.
8. Publicar `docs/TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md`, actualizar STATUS y sobrescribir DONE con el punto de reanudación al finalizar.

### Fuera de alcance

- No incorporar imágenes de anime/novelas ni desarrollar marcas de agua: TLM-004.
- No hacer una revisión visual integral Windows/end-to-end de todo el producto más allá de las pruebas de este cambio: se mantiene en TLM-005.
- No expandir el canon ni añadir datos sin trazabilidad.
- No modificar `main`, fusionar ramas o alterar PR.

## Estado de fases

| Fase | Estado | Evidencia / siguiente paso |
|---|---|---|
| TLM-001 — Auditoría temporal/geográfica | DONE | `docs/TLM-001-ATLAS-TEMPORAL-AUDIT.md` |
| TLM-002 — Modelo temporal estructurado | DONE / PASS_CI | `docs/TLM-002-TEMPORAL-MODEL-REPORT.md`; workflows #38941639636 y #38941639826 |
| TLM-003 — Conectar cronología y mapa | IN_PROGRESS | Ejecutar el contrato `docs/TLM-003-TIMELINE-MAP-INTEGRATION-CONTRACT.md` |
| TLM-004 — Panoramas/imágenes y procedencia | NOT_STARTED | No copiar recursos oficiales sin permisos/licencias compatibles |
| TLM-005 — Verificación end-to-end y revisión visual | NOT_STARTED | Pruebas finales; Windows manual solo tras realizarla |

## Recuperación si ChatGPT se interrumpe

1. Leer [control CEREBRO/BOT OBRERO](CEREBRO_BOT_OBRERO_CONTROL.md), [STATUS](STATUS.md), este archivo y el [contrato TLM-003](TLM-003-TIMELINE-MAP-INTEGRATION-CONTRACT.md).
2. Verificar el HEAD real y workflows de la rama autorizada.
3. Continuar únicamente TLM-003; no repetir la migración TLM-002 y no iniciar TLM-004/TLM-005 dentro de esta tarea.
