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
- El atlas completo se mantiene PARTIAL. TLM-004 y TLM-005 siguen NOT_STARTED.

### TLM-004 — Panoramas e imágenes de referencia con procedencia
**Estado: IN_PROGRESS — autorizado por CEREBRO.** Contrato vinculante: [docs/TLM-004-VISUAL-REFERENCES-AND-RIGHTS-CONTRACT.md](TLM-004-VISUAL-REFERENCES-AND-RIGHTS-CONTRACT.md).

- Hacer una sección de “Referencias visuales” útil para acontecimientos y lugares DanMachi; no forzar imágenes para cada evento.
- Registrar ID estable del recurso, URL/página fuente, autor/titular conocido, licencia/permiso o estado pendiente, continuidad, spoilers, evento/lugar y modo de almacenamiento.
- Para arte oficial remoto, preferir abrir la fuente original; previsualizar solo cuando el origen y las condiciones de uso/embebido lo permitan. No descargar ni comitear imágenes oficiales sin permiso/licencia compatible.
- Permitir archivos locales propios/licenciados/permitidos a través del almacenamiento del navegador existente, sin subirlos al repo o a servicios remotos.
- Separar overlay de atribución en UI de exportación de copia con watermark. Exportar una versión marcada solo cuando los derechos permitan modificación/exportación y el usuario lo confirme.
- Nunca tratar “uso educativo/personal”, atribución ni marca de agua como licencia automática.
- Respetar continuidad y spoilers: retrato de adaptación anime (CONT-ANIME) no equivale a una escena de novela principal. Mostrar placeholder si una imagen falla o no puede mostrarse.
- Evitar metadatos dispersos o un formulario gigante; integrar la galería contextual al panel existente.

Cierre: referencias con procedencia clara, recursos locales que no salen del navegador, controles de watermark honestos, tests/CI por SHA y ninguna imagen oficial no autorizada añadida al repo.

### TLM-005 — Verificación de extremo a extremo
**Estado: NOT_STARTED; depende de TLM-002 a TLM-004.**

- Añadir pruebas para fechas exactas/relativas/desconocidas/hipotéticas, filtros de continuidad, enlaces a lugares y ausencia de coordenadas inventadas.
- Probar la UI de cronología y mapa en navegador/CI.
- Registrar resultados reales y CI para los SHAs exactos.
- Comprobar regresiones de búsqueda, dossiers, navegación y funcionamiento offline.

Criterio: pruebas verdes, revisión visual realizada o marcada NOT_RUN, y todas las limitaciones conocidas documentadas.

## 6. Estado inicial de este programa

- Existe una cronología DanMachi previa con eras/eventos y ancla relativa; esto es una base parcial, no prueba de cronología completa.
- TLM-001 ya confirmó cobertura/precisión temporal y desconexión geográfica en `docs/TLM-001-ATLAS-TEMPORAL-AUDIT.md`; la implementación sigue incompleta.
- La petición de imágenes no autoriza copiar recursos oficiales al repositorio.
- TLM-001 está DONE como auditoría; el producto/atlas sigue PARTIAL. TLM-002 está DONE; la implementación del atlas sigue PARTIAL. TLM-003 es la siguiente fase aún NOT_STARTED; TLM-004 y TLM-005 también siguen NOT_STARTED.

## 7. Registro de entregas

| Fecha (UTC) | Tarea | Estado | SHA / evidencia | Nota |
|---|---|---|---|---|
| 2026-10-16 | Establecer control persistente Cerebro/Obrero y programa TLM | DONE | Ver commit de control y docs/DONE.md | TLM-001 quedó completada como auditoría documental; las brechas funcionales siguen PARTIAL. |
| 2026-10-16 | TLM-001 — Auditoría del Atlas temporal | DONE (aceptada por CEREBRO) | commit `1611254124e6fa2eb1186a803fca0bc712ef6dab`; CI runs `38934243074` y `38934243080` PASS en ese SHA | Atlas PARTIAL; 0/15 eventos conectados a lugares; fechas libres; TLM-002 autorizada. |
| 2026-10-16 | TLM-002 — Modelo temporal explícito | DONE / PASS_CI | 4d75c97aa690ddba73ec6ef09eb0fbefef06d342; runs 38941141919 y 38941142159 success | 15 eventos migrados; dateLabel intacto; esquema aditivo; geografía e imágenes no tocadas. Ver docs/TLM-002-TEMPORAL-MODEL-REPORT.md. |
| 2026-10-16 | TLM-003 — Conexión cronología/mapa | DONE / PASS_CI | c9fa2d05de3bb81526523202bea0fb5cb058ae06; runs 38950288434 y 38950288325 success | 15 eventos evaluados; 2 lugares, 9 referencias, esquema no geográfico; ver informe TLM-003-TIMELINE-MAP-INTEGRATION-REPORT.md. |
| 2026-10-16 | TLM-004 — Panoramas visuales y procedencia | IN_PROGRESS | `docs/TLM-004-VISUAL-REFERENCES-AND-RIGHTS-CONTRACT.md`; HEAD anterior `67c48d55601a372653c425e1517cfe4f6c322813` | Única tarea activa. No incorporar imágenes oficiales no autorizadas; separar visualización remota, archivos locales y watermark. |

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
