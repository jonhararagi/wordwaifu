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
**Estado: IN_PROGRESS — autorizado por CEREBRO.** Orden y criterios completos en [TLM-002 — Contrato del modelo temporal](TLM-002-TEMPORAL-MODEL-CONTRACT.md).

Alcance exclusivo de esta fase: contrato temporal estructurado, migración conservadora de los 15 eventos, validación, pruebas y presentación básica de la clase/precisión temporal. Mantener fecha, evidencia, origen narrativo y continuidad como dimensiones diferenciadas. No conectar ubicaciones al mapa ni trabajar en imágenes; quedan en TLM-003/TLM-004.

### TLM-003 — Cronología conectada al mapa
**Estado: NOT_STARTED; depende de TLM-001 y TLM-002.**

- Vincular eventos a ubicaciones existentes mediante IDs estables.
- Mostrar ubicación en el mapa cuando esté respaldada; marcar explícitamente “ubicación desconocida” cuando no lo esté.
- Permitir filtrar por época/era, continuidad, personajes, combate y nivel de certeza.
- Desde un evento abrir su ficha, personajes y lugar; conservar el contexto temporal al navegar.
- No inventar coordenadas ni localizaciones canónicas.

Criterio: elegir un período muestra únicamente eventos y presencias compatibles con ese período, y los enlaces no duplican fichas.

### TLM-004 — Panoramas e imágenes de referencia con procedencia
**Estado: IN_PROGRESS — autorizado por CEREBRO; ejecutar el contrato registrado en [TLM-002](TLM-002-TEMPORAL-MODEL-CONTRACT.md).**

- Inspeccionar primero el diálogo y la política existentes en `docs/CONTENT_RIGHTS_AND_TAKEDOWN.md` y la UI.
- Separar: enlaces a imágenes oficiales externas, imágenes aportadas por el usuario con derechos/permiso, y recursos propios o con licencia compatible.
- Registrar fuente, autor/titular cuando se conozca, URL, licencia/permiso, continuidad y elemento/evento al que corresponde.
- No descargar ni incorporar automáticamente imágenes oficiales de anime/novelas al repositorio sin permiso/licencia compatible.
- Si se implementa marca de agua en recursos que el usuario está autorizado a modificar, que sea visible y configurable, y que no oculte atribución. La marca de agua **no concede derechos** ni vuelve legal una copia no autorizada.
- Mantener la aplicación funcional sin red: las imágenes externas pueden fallar; las imágenes locales permitidas deben tener alternativa/placeholder.

Criterio: cada imagen tiene procedencia y tratamiento de derechos explícitos; la UI no promete que “uso educativo/personal” o una marca de agua autoricen su reproducción.

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
- TLM-001 está DONE como auditoría; el producto/atlas sigue PARTIAL. TLM-002 es la única tarea activa; TLM-003, TLM-004 y TLM-005 permanecen NOT_STARTED.

## 7. Registro de entregas

| Fecha (UTC) | Tarea | Estado | SHA / evidencia | Nota |
|---|---|---|---|---|
| 2026-10-16 | Establecer control persistente Cerebro/Obrero y programa TLM | DONE | Ver commit de control y docs/DONE.md | TLM-001 quedó completada como auditoría documental; las brechas funcionales siguen PARTIAL. |
| 2026-10-16 | TLM-001 — Auditoría del Atlas temporal | DONE (auditoría) | docs/TLM-001-ATLAS-TEMPORAL-AUDIT.md; CI run 38933332552 PASS para HEAD 8d404bc7f365ce4fd4165f4c0c6e04ee6eed5478 | No se modificó código ni se inició TLM-002. Próximo gate: modelar fechas y después conectar cronología/mapa.

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
