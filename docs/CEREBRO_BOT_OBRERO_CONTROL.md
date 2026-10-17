# CEREBRO / BOT OBRERO — Control operativo de WordWaifu

**Documento de mando persistente.** Leer este archivo junto con `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/ROADMAP.md` y `docs/DONE.md` al iniciar o recuperar una sesión.

## 1. Roles

### CEREBRO (dirección, alcance y aceptación)
- Convierte los objetivos del usuario en fases pequeñas, con identificador estable y criterios verificables.
- Define qué se puede cambiar, riesgos, pruebas y condiciones para declarar DONE.
- Revisa la evidencia presentada por el Obrero; no convierte propuestas ni revisiones estáticas en resultados de ejecución.
- Mantiene este registro coherente con STATUS y DONE.

### BOT OBRERO (ejecución en GitHub)
- Comprueba rama y HEAD antes de actuar; lee el contexto pertinente.
- Ejecuta solo la tarea activa y modifica directamente el repositorio.
- Añade o actualiza pruebas y documentación; ejecuta las pruebas disponibles.
- Registra SHA anterior/posterior, archivos, resultados, limitaciones y el siguiente paso exacto.
- No cambia `main`, no integra ramas ni crea/cierra PR sin autorización explícita del usuario.

## 2. Reglas de continuidad obligatorias

1. La fuente de verdad es el estado GitHub de la rama autorizada, no el recuerdo de una conversación.
2. Antes de escribir, volver a leer la rama y comprobar si el trabajo ya existe para evitar duplicados.
3. Una sola tarea activa por vez. No iniciar la siguiente hasta aceptar o bloquear la actual.
4. Cada entrega actualiza los documentos pertinentes y sobrescribe `docs/DONE.md` con el punto de reanudación más reciente.
5. Si se interrumpe el chat, el próximo agente debe comenzar por este documento, `docs/STATUS.md` y `docs/DONE.md`; después verificar el HEAD real.
6. No afirmar que algo está implementado por haberlo planificado; ni que funciona por existir código; ni que una prueba pasó si no hay resultado asociado al SHA exacto.
7. No borrar, reescribir masivamente ni reemplazar módulos completos sin una razón demostrada y un alcance aprobado.
8. Mantener WordWaifu utilizable sin IA, Ollama, GPU ni servicios remotos obligatorios. Los generadores deterministas/locales son el camino base.

## 3. Estados y evidencia

- `DONE`: criterios de aceptación cumplidos con evidencia suficiente.
- `IN_PROGRESS`: tarea activa; todavía no cumple todos los criterios.
- `BLOCKED`: no puede avanzar; documentar causa, evidencia y acción para desbloquear.
- `NOT_STARTED`: aprobada, aún no iniciada.
- `DEFERRED`: deliberadamente aplazada, con motivo.
- `PASS_REAL`: ejecución real observada en el entorno nombrado.
- `PASS_CI`: workflow CI exitoso para el SHA indicado.
- `PASS_STATIC`: inspección estática; no implica funcionamiento en navegador.
- `NOT_RUN` / `UNKNOWN` / `PARTIAL`: prueba no ejecutada / evidencia desconocida / validación parcial.

Una fase solo puede cerrarse cuando sus criterios de aceptación estén enumerados y cada uno tenga evidencia o una excepción aprobada claramente indicada.

## 4. Flujo de trabajo por tarea

`INSPECT → PLAN → EXECUTE → VERIFY → PERSIST → REPORT`

En cada tarea se registrará:
- ID, objetivo y exclusiones.
- Rama autorizada, HEAD BEFORE y HEAD AFTER.
- Archivos modificados.
- Criterios de aceptación y pruebas vinculadas al SHA.
- Riesgos, bloqueos y trabajo restante.
- Próxima acción concreta.
- Estado de `main` y PR: indicar expresamente si no se tocaron.

## 5. Programa de trabajo: atlas temporal de DanMachi e imágenes de referencia

Objetivo del usuario: poder entender **cuándo** ocurre cada hecho o combate y **en qué zona del mapa** sucede, admitiendo fechas aproximadas o planes hipotéticos sin confundirlos con canon; además, disponer de panoramas visuales útiles sin tratar una marca de agua como permiso de copyright.

### TLM-001 — Auditar el estado real de la cronología y el mapa
**Estado: DONE — auditoría aceptada por CEREBRO.**

Evidencia: [informe TLM-001](TLM-001-ATLAS-TEMPORAL-AUDIT.md), commit `1611254124e6fa2eb1186a803fca0bc712ef6dab`; [Validate WordWaifu #38934243074](https://github.com/jonhararagi/wordwaifu/actions/runs/38934243074) y [DanMachi Lore and Retrieval Integrity #38934243080](https://github.com/jonhararagi/wordwaifu/actions/runs/38934243080), ambos success para ese SHA. El atlas funcional continúa PARTIAL.

Alcance:
- Inspeccionar `src/danmachi-timeline.js`, `lore/danmachi/timeline/eras-and-events.json`, `src/lore-corpus.js`, `index.html`, `src/styles.css`, pruebas y documentación del atlas.
- Confirmar qué filtros temporales, enlaces a personajes/lugares, continuidad, fuentes y ubicación ya funcionan; no duplicar lo existente.
- Identificar cómo se representa actualmente una fecha relativa, aproximada, desconocida o hipotética, y cómo un evento se conecta a una localización del mapa.
- Revisar pruebas disponibles y ejecutar las pertinentes si el entorno lo permite.
- Entregar una matriz requisito / implementación encontrada / evidencia / brecha / archivo candidato.

Criterios de aceptación:
- [x] HEAD y rama reales registrados: HEAD BEFORE 8d404bc7f365ce4fd4165f4c0c6e04ee6eed5478.
- [x] Auditoría basada en los archivos actuales; matriz incluida en docs/TLM-001-ATLAS-TEMPORAL-AUDIT.md.
- [x] Cada brecha incluye evidencia, incertidumbre o prueba necesaria.
- [x] No se hicieron cambios funcionales antes de comprobar el estado actual.
- [x] Informe persistido, STATUS actualizado y DONE sobrescrito con punto de reanudación.

### TLM-002 — Modelo temporal explícito
**Estado: DONE — implementación y CI confirmados para el SHA 4d75c97aa690ddba73ec6ef09eb0fbefef06d342.** Ver informe TLM-002-TEMPORAL-MODEL-REPORT.md, contrato TLM-002-TEMPORAL-MODEL-CONTRACT.md y modelo DANMACHI-TEMPORAL-MODEL.md.

Alcance exclusivo de esta fase: contrato temporal estructurado, migración conservadora de los 15 eventos, validación, pruebas y presentación básica de la clase/precisión temporal. Mantener fecha, evidencia, origen narrativo y continuidad como dimensiones diferenciadas. No conectar ubicaciones al mapa ni trabajar en imágenes; quedan en TLM-003/TLM-004.

### TLM-003 — Cronología conectada al mapa
**Estado: DONE / PASS_CI** para el SHA de implementación c9fa2d05de3bb81526523202bea0fb5cb058ae06. Informe: docs/TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md; modelo: docs/DANMACHI-LOCATION-MODEL.md. Workflows [Validate WordWaifu #38950288434](https://github.com/jonhararagi/wordwaifu/actions/runs/38950288434) y [DanMachi Lore and Retrieval Integrity #38950288325](https://github.com/jonhararagi/wordwaifu/actions/runs/38950288325) están en success para ese SHA.

- Evaluados los 15 eventos: 4 referencias verificadas, 5 provisionales y 6 sin ubicación, con 9 vínculos por ID.
- LOC-ORARIO creado con fuente editorial GA Bunko del volumen 1 (DMR-012-SRC-001); LOC-DUNGEON reutilizado.
- La nueva vista es un esquema relacional no geográfico y sin escala; usa los mismos filtros de búsqueda, era y continuidad que el timeline.
- Navegación evento → lugar → evento relacionado → retorno probada en Chromium; el test confirma que no se cambia el almacenamiento del proyecto activo.
- No se modificó src/app.js, el mapa Asteria, main o PR; no se añadieron imágenes ni coordenadas. Node/Playwright local y revisión manual Windows 11 siguen NOT_RUN.
- El atlas/enciclopedia global se mantiene PARTIAL. TLM-004 está DONE / PASS_CI y TLM-005 queda DONE / PASS_CI para el SHA funcional `cd918d4294e3141155e5bda2a5ae0cd9999a618e`. La inspección manual Windows 11 y la ejecución local Node/Playwright permanecen NOT_RUN.

### TLM-004 — Panoramas e imágenes de referencia con procedencia
**Estado: DONE / PASS_CI para el SHA de implementación `8960fdd11ecff5fd66d69c1bae221a13f12342c4`.** Informe: [docs/TLM-004-VISUAL-REFERENCES-AND-RIGHTS-REPORT.md](TLM-004-VISUAL-REFERENCES-AND-RIGHTS-REPORT.md).

- Registro estable `lore/danmachi/visual-references.json`: seis referencias link-only, procedencia, titulares/estado de derechos, continuidad, spoilers y relaciones; cobertura explícita para los 15 acontecimientos y las dos fichas de lugar. Las referencias contextuales no se presentan como ilustraciones de escena.
- Se reutiliza `src/art-studio.js` / `WordWaifuArtStudio` y su almacenamiento del navegador; no se creó una segunda biblioteca ni un servicio remoto.
- Los retratos oficiales de adaptación permanecen como URLs de procedencia y enlaces HTTPS. El archivo de personajes muestra arte conceptual local claramente no oficial o inicial; sin permiso de embedding no asigna los retratos remotos a `img.src`.
- Recursos raster propios/licenciados/permitidos se guardan solo en el navegador. Los bytes corruptos se rechazan antes del guardado; la UI solo informa éxito cuando el backend local confirma persistencia.
- Overlay de crédito separado de la exportación marcada. La copia PNG solo se ofrece con `apply_to_authorized_copy`, `user_owned`/`licensed`/`permission_recorded`, `allowModifyExport=true`, raster decodificable y confirmación explícita; el original se conserva. `pending_review`, `blocked` y referencias externas no pueden exportarse.
- Ninguna atribución, marca de agua o etiqueta personal/educativa se trata como autorización. Ninguna imagen oficial se descargó o comiteó; no se hizo scraping de wikis.
- Pruebas de unidad y navegador TLM-004: PASS. Browser smoke cubre navegación, tarjetas/placeholders, enlaces, preview local/offline, almacenamiento, watermark gate, original preservado, cero solicitudes remotas de imágenes locales y aislamiento Asteria.
- CI exacto en `8960fdd11ecff5fd66d69c1bae221a13f12342c4`: [Validate WordWaifu #38967733362 — intento 2](https://github.com/jonhararagi/wordwaifu/actions/runs/38967733362) y [DanMachi Lore and Retrieval Integrity #38967733260](https://github.com/jonhararagi/wordwaifu/actions/runs/38967733260), ambos success. El primer intento de Validate encontró una intercepción de clic entre marcadores de un fixture de mapa fuera del módulo visual; el reintento del mismo SHA pasó.
- Se cambió `src/app.js` solo tras demostrar la dependencia indispensable: el archivo incrustaba retratos oficiales remotos sin permiso verificado. No se modificó almacenamiento Asteria, `main` ni PR.
- TLM-005 queda pendiente. Revisión manual Windows 11: `NOT_RUN`; Node/Playwright local del agente: `NOT_RUN`. Solo se declara la evidencia de GitHub Actions/Chromium que realmente se ejecutó.

Cierre: referencias procedentes; referencias oficiales remotas link-only; recursos del usuario locales; exportación marcada sometida a derechos y confirmación; pruebas y CI PASS en SHA exacto. La enciclopedia/cobertura total de DanMachi y TLM-005 permanecen fuera de este cierre.

### TLM-005 — Verificación de extremo a extremo
**Estado: DONE / PASS_CI para el SHA funcional `cd918d4294e3141155e5bda2a5ae0cd9999a618e`.** Informe: [docs/TLM-005-END-TO-END-VERIFICATION-REPORT.md](TLM-005-END-TO-END-VERIFICATION-REPORT.md).

- HEAD BEFORE real: `4c2fa980bb2d7bb4e88c246a5178544bfe24d2a3`. SHA funcional: `cd918d4294e3141155e5bda2a5ae0cd9999a618e`.
- `src/danmachi-timeline.js` ahora exige `anchor.eventId` en el esquema v1; solo el acontecimiento designado puede usar la variante `anchor`; autorreferencias/ciclos de orden temporal se rechazan. La compatibilidad heredada permanece.
- `tests/test_danmachi_timeline.cjs` cubre las seis variantes, presentación/precisión, ancla única, autorreferencias/ciclos, datos espaciales unknown/provisional y catálogo/lugares. Fechas calendáricas sintéticas aparecen solo en memoria de prueba, no en el dataset de canon.
- `tests/browser_smoke.cjs` prueba búsqueda de estado desconocido y offset T−7, navegación evento ↔ lugar ↔ evento relacionado ↔ vuelta, y un arranque limpio en Chromium con todos los orígenes externos bloqueados salvo el servidor local.
- El arranque frío valida carga de 15 eventos, mapa relacional no geográfico, placeholders de retratos oficiales, y que la sesión principal conserve `project-asteria` / `Las Crónicas de Asteria`.
- Las suites de búsqueda/dossiers/continuidad, derechos visuales TLM-004, watermark, original preservado y offline siguen verdes.
- [Validate WordWaifu #38977028108 — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38977028108) y [DanMachi Lore and Retrieval Integrity #38977028080 — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38977028080), ambos en `head_sha=cd918d4294e3141155e5bda2a5ae0cd9999a618e`. Estos son resultados de CI del SHA funcional; el mismo contrato exige CI adicional en el HEAD documental final creado a continuación.
- Evidencia: `PASS_CI` para las pruebas y Chromium en Actions; `PASS_STATIC` para inspección de módulos y datos. Ejecución local Node/Playwright del agente: `NOT_RUN`. Inspección manual Windows 11: `NOT_RUN`.
- Sin cambio de canon/datasets o coordenadas. La cobertura global DanMachi se mantiene PARTIAL.

TLM-005 cierra las pruebas automatizables de alcance; no completa el canon global ni sustituye la inspección manual.

## 6. Estado inicial de este programa

- Existe una cronología DanMachi previa con eras/eventos y ancla relativa; esto es una base parcial, no prueba de cronología completa.
- TLM-001 ya confirmó cobertura/precisión temporal y desconexión geográfica en `docs/TLM-001-ATLAS-TEMPORAL-AUDIT.md`; la implementación sigue incompleta.
- La petición de imágenes no autoriza copiar recursos oficiales al repositorio.
- TLM-001 está DONE como auditoría; TLM-002, TLM-003 y TLM-004 están DONE / PASS_CI para sus SHAs registrados; TLM-005 está DONE / PASS_CI para `cd918d4294e3141155e5bda2a5ae0cd9999a618e`. El producto/atlas global sigue PARTIAL. La revisión manual Windows 11 y la ejecución local Node/Playwright siguen NOT_RUN.

## 7. Registro de entregas

| Fecha (UTC) | Tarea | Estado | SHA / evidencia | Nota |
|---|---|---|---|---|
| 2026-10-16 | Establecer control persistente Cerebro/Obrero y programa TLM | DONE | Ver commit de control y docs/DONE.md | TLM-001 quedó completada como auditoría documental; las brechas funcionales siguen PARTIAL. |
| 2026-10-16 | TLM-001 — Auditoría del Atlas temporal | DONE (aceptada por CEREBRO) | commit `1611254124e6fa2eb1186a803fca0bc712ef6dab`; CI runs `38934243074` y `38934243080` PASS en ese SHA | Atlas PARTIAL; 0/15 eventos conectados a lugares; fechas libres; TLM-002 autorizada. |
| 2026-10-16 | TLM-002 — Modelo temporal explícito | DONE / PASS_CI | 4d75c97aa690ddba73ec6ef09eb0fbefef06d342; runs 38941141919 y 38941142159 success | 15 eventos migrados; dateLabel intacto; esquema aditivo; geografía e imágenes no tocadas. Ver docs/TLM-002-TEMPORAL-MODEL-REPORT.md. |
| 2026-10-16 | TLM-003 — Conexión cronología/mapa | DONE / PASS_CI | c9fa2d05de3bb81526523202bea0fb5cb058ae06; runs 38950288434 y 38950288325 success | 15 eventos evaluados; 2 lugares, 9 referencias, esquema no geográfico; ver informe TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md. |
| 2026-10-16 | TLM-004 — Panoramas visuales y procedencia | DONE / PASS_CI | SHA de implementación `8960fdd11ecff5fd66d69c1bae221a13f12342c4`; Validate #38967733362 (reintento) y DanMachi #38967733260 success; ver informe TLM-004 | Seis referencias externas link-only; 15 eventos + 2 lugares evaluados; storage local, gates de permisos/watermark y archivo de personajes sin embed remoto no verificado. TLM-005 y revisión manual Windows 11 pendientes. |
| 2026-10-16 | TLM-005 — Verificación end-to-end | DONE / PASS_CI en implementación | `cd918d4294e3141155e5bda2a5ae0cd9999a618e`; Validate #38977028108 y DanMachi #38977028080 success; informe `docs/TLM-005-END-TO-END-VERIFICATION-REPORT.md` | Añadidas guardas de ancla temporal/ciclos, regresiones de seis variantes, búsqueda temporal UI y arranque Chromium con orígenes externos bloqueados/aislamiento Asteria. Windows 11 y ejecución local siguen NOT_RUN; atlas global PARTIAL. |

## 8. Plantilla de reporte del BOT OBRERO

```text
Tarea:
Estado:
Rama:
HEAD BEFORE:
HEAD AFTER:
Archivos:
Criterios cumplidos / pendientes:
Pruebas y resultado (incluye SHA exacto):
Evidencia PASS_REAL / PASS_CI / PASS_STATIC / NOT_RUN / UNKNOWN:
Bloqueos:
main/PR:
Próxima acción exacta:
```


## 9. DANMACHI-COVERAGE-001 — ejecución de cobertura individual (2026-10-16)

**Estado: IN_PROGRESS.** No es una auditoría de cierre ni declara completa la enciclopedia.

- Rama autorizada: `work/story-completion-danmachi-audit-2026-10`.
- Tanda funcional registrada en los commits funcionales `7c6ecebcdfc12722a6e769df17012bb8d995bbdd`, `332139154515ebcd37d8f74a2dd0bc8638d55dc0`, `1d12c50c0dbb649ce9041951c9c8106e4b7e82a5`, `8bb71f318572f252c30155a7a1da40ef091401cd`: perfiles individuales de Aki, Alicia Forestlight, Leene Arshe, Narfi y Cruz, sus IDs en `lore/danmachi/catalog.json` y enlaces desde `lore/danmachi/familias/loki-familia.md`.
- IDs nuevos: `CHAR-LOKI-AKI`, `CHAR-LOKI-ALICIA-FORESTLIGHT`, `CHAR-LEENE-ARSHE`, `CHAR-LOKI-NARFI` y `CHAR-LOKI-CRUZ`. El catálogo pasó de 97 a 102 registros. Aki, Alicia y Narfi tienen localizador de escena identificado en *Sword Oratoria*, vol. 4; capítulo/página y cronología siguen pendientes. Leene se etiqueta con foco en `CONT-SO`/adaptación y spoilers.
- Comprobación de recuperación: las fichas de Liliruca Arde, Soma, Zanis Lustra y Chandra Ihit ya existen en el directorio correcto y tienen metadatos de procedencia/continuidad. No duplicarlas ni contar como creadas en esta tanda.
- La edición del índice de Familia Loki añade navegación a Aki, Alicia, Leene, Narfi y Cruz, y advierte que la lista de miembros y la cronología no son exhaustivas.
- **Pendiente de verificación:** validar el esquema del catálogo, enlaces, búsqueda y regresiones mediante los validadores del repositorio; comprobar los workflows para el SHA funcional y para el HEAD documental exacto. La consulta de runs disponible no devolvió resultados porque filtra ejecuciones disparadas por PR; el CI requerido permanece UNKNOWN/PENDING. La fuente primaria localizada para Aki/Alicia/Narfi/Cruz es *Sword Oratoria*, vol. 4, briefing de expedición; no se registra capítulo/página exactos sin cotejo de una edición autorizada. No se declara PASS_CI con la evidencia disponible en esta sesión.
- **Siguiente acción concreta:** continuar con la siguiente tanda de miembros confirmados de Familia Loki y completar fichas individuales existentes antes de ampliar el roster; revisar después Familia Astrea sin mezclar `CONT-MAIN-LN`, `CONT-AR` y adaptaciones.
- `main` no se modificó. No se hicieron merges ni operaciones sobre PR.


## DANMACHI-COVERAGE-001 — Tanda 2: Elfy Colette, Rakta Haze y alias de Aki

**Estado:** IN_PROGRESS; la enciclopedia DanMachi sigue PARTIAL.

- **Rama:** work/story-completion-danmachi-audit-2026-10.
- **HEAD anterior:** 74d4314835eaab03c96b033cc35449d7147a4707.
- **Commit funcional:** 3cf972222458b1a2c3a21bb8798ed76621b1fcc3.
- **Alcance realizado:** dos fichas individuales nuevas para Elfy Colette y Rakta Haze; alias de búsqueda Anakitty Autumn añadido al dossier Aki existente, sin crear un ID duplicado. Catálogo de 102 a 104 registros y documento de investigación DMR-015 registrado.
- **Archivos funcionales:** lore/danmachi/characters/elfy-colette.md; lore/danmachi/characters/rakta-haze.md; lore/danmachi/characters/aki.md; lore/danmachi/catalog.json; lore/danmachi/familias/loki-familia.md; lore/danmachi/familias/00-indice-familias.md; lore/danmachi/characters/00-indice-personajes.md; lore/danmachi/sources/00-registro-fuentes.md; lore/danmachi/research/inbox/DANMACHI-RESEARCH-015-loki-secondary-members.md.
- **Procedencia:** DMR-015-SRC-001..003 son referencias comunitarias, registradas expresamente como secundarias. Localizadores primarios, página/capítulo y niveles por periodo siguen pendientes; no promover esas afirmaciones a canon primario.
- **Criterio CI:** el estado observado al iniciar el cierre documental era in_progress en ambos workflows del SHA funcional. El agente que retome debe consultar la punta real de la rama y comprobar ambos workflows para ese SHA exacto antes de anotar PASS_CI.
- **Siguientes pasos:** cotejo primario de las fichas; continuar roster secundario de Loki sin duplicaciones; luego Familia Astrea, expedientes Soma y cobertura de dioses/Familias.
- **Exclusiones respetadas:** main sin modificar, ningún merge ni operación sobre PR.


## DANMACHI-COVERAGE-001 — Tanda 3: Arcs, Cynthia y Orba

**Estado:** IN_PROGRESS hasta comprobar workflows en el SHA documental final.

- **HEAD anterior:** 4d0d2ea42078b9066c98b6caceb519c8d83cac91.
- **Commit funcional:** 91625334628fe21f7d99930876fc049294c5d794.
- **Cambios:** tres dossiers individuales de cobertura para Arcs, Cynthia y Orba; 107 registros en catálogo, 104 documentos catalogados; índices y expediente de Familia Loki actualizados.
- **Fuente:** DMR-016-SRC-001, referencia comunitaria de personajes menores. Se registró solo como fuente secundaria.
- **Cautelas:** no hay cotejo primario de sus escenas; nivel y función se mantienen como datos reportados. Orba conserva el conflicto de etiqueta ocupacional. No inferir amistades, hechizos ni lugar en unidades de combate.
- **CI funcional al cierre de implementación:** Validate WordWaifu estaba queued (run 38988164201) y DanMachi Lore and Retrieval Integrity in_progress (run 38988164371). Consultar conclusión por SHA exacto después del commit documental.
- **CI tanda 2:** ambos workflows fueron success en los SHA funcional/documental 3cf9722 y 4d0d2ea.
- **Siguientes pasos:** cerrar verificación CI exacta; continuar con el roster Loki nombrado; después Astrea, Soma y deidades/Familias.
- **Permisos respetados:** rama autorizada únicamente; main y PR sin modificar; sin merges.
