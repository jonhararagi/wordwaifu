# Estado de WordWaifu
## Estado operativo y verificación — 2026-10-21

<!-- DANMACHI-METRICS:BEGIN -->
- **Corpus DanMachi:** 164 registros activos; 31 IDs reservados; 118 documentos de apoyo.
- **Grafo de conocimiento:** 219 relaciones explícitas; 219/219 con ambos extremos activos y distintos; IDs de relación únicos.
- **Roster de adaptación:** 63 identidades; 63/63 tienen registro, ruta Markdown e expediente UI con el mismo ID.
- **Expedientes de interfaz:** 79 perfiles estructurados en `src/character-dossiers.js`.
- **Tipos en el catálogo:** 79 personajes; 5 grupos; 12 deidades con registro de personaje.
- **Marcadas `complete`:** 0/79 registros `character`; esto no define el universo de personajes esperados ni autoriza un porcentaje global de canon.
<!-- DANMACHI-METRICS:END -->

**Esta sección prevalece sobre el historial inferior.** Los conteos describen estructura e integridad; no certifican un porcentaje global de cobertura del canon.

- **Rama de verificación integrada:** `main`; el lote de personajes y Era Oscura está fusionado en el PR [#58](https://github.com/jonhararagi/wordwaifu/pull/58).
- **Procedencia y continuidad:** `CONT-ANIME`, `CONT-MAIN-LN`, `CONT-SO`, `CONT-AR` y `CONT-AU` siguen separados. Sinopsis editoriales, perfiles de adaptación y wikis no equivalen a cotejar una escena del texto completo.
- **Estado factual:** la integración estructural del roster está validada; siguen pendientes pasajes primarios de la novela, cronologías escena por escena y el censo de personajes fuera del roster de adaptación.
- **Prioridad del lore:** Orario continúa en investigación; después siguen acontecimientos por fecha/lugar/causa/consecuencia y reconstrucción de historias individuales.

## Snapshot histórico de la auditoría previa
Los registros por debajo del separador incluyen historiales y resultados antiguos de otras iteraciones; no deben prevalecer sobre el estado operativo actual de esta sección.

---


## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Estimación histórica (snapshot antiguo): 19%**. No corresponde al HEAD actual ni se usa como medida de progreso vigente; véase la sección operativa superior.
- Tecnología: HTML/CSS/JavaScript, SVG, IndexedDB y respaldo de compatibilidad en localStorage.
- WordWaifu gestiona canon y planificación narrativa; BotImagen gestiona recursos visuales. Atlas, lore, expedientes, arte, papelera, Story Foundry, catálogo de poderes y catálogo mitológico quedaron reconciliados en `main` mediante PR #18. La cobertura factual y algunos gates manuales siguen parciales.

## GitHub y control de cambios
- Repositorio: `jonhararagi/wordwaifu`.
- Rama autorizada de esta misión: `work/story-completion-danmachi-audit-2026-10`. Las referencias a ramas de tareas anteriores en esta sección son contexto histórico, no la rama activa de esta auditoría.
- `main` se actualizó en esta misión: PR #18 está fusionada; el HEAD operativo se registra al inicio de este documento. No usar los SHA históricos de la sección antigua como estado actual.
- La comparación de ramas fechada el 2026-10-10 que sigue en el historial es histórica; no acredita la relación actual entre esta candidata y `main`.
- La lista de PR que aparece en el historial de esta sección es una instantánea antigua. Estado vigente: [PR #18](https://github.com/jonhararagi/wordwaifu/pull/18) integrada en `main`.
- Guardias y regresión de activación: [`6c80626`](https://github.com/jonhararagi/wordwaifu/commit/6c80626a75b4791db296d47eb7d524608ea8977b), [`d6a4d96`](https://github.com/jonhararagi/wordwaifu/commit/d6a4d96c57243bd8ca0bb4a01a1da486894ccb35).
- Registro de continuidad: [`aea71f6`](https://github.com/jonhararagi/wordwaifu/commit/aea71f6240eaef99ba0e5201416e361e9c8ad4ea).
- Workflow de validación configurado para pushes en `main` y `work/**`, PR hacia `main` y `workflow_dispatch`: [`4502475`](https://github.com/jonhararagi/wordwaifu/commit/4502475cdf9b536c0c5d6dbf51a83efc7408ae6d).

## Capacidad con evidencia automatizada
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones con limpieza selectiva de referencias.
- **WF-003-A:** relaciones con ID estable y proyección compatible.
- **WF-004-B:** catálogo multiverso y búsqueda contextual por IDs.
- **WF-004-C.1 · PARCIAL:** snapshots versionados, migración IndexedDB v1→v2, restauración con copia previa y respaldo antes de importar.
- **WF-004-C.2 · DONE / PASS_REAL histórico:** snapshots previos verificados para los cinco tipos de borrado; límite 25/26 validado. Evidencia histórica: [CI #38008260869](https://github.com/jonhararagi/wordwaifu/actions/runs/38008260869). No acredita cambios posteriores de C.3.

## HEAD de código validado más reciente
- SHA: `327360caa66875becbd11e5563fc2988196553a4`.
- CI: [#38022402137 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/38022402137).

## WF-004-C.3 — Papelera y recuperación (PARTIAL)
- IndexedDB v2→v3 añade el almacén `trash`; la API y la UI permiten enviar proyectos a la papelera, listar, restaurar por ID y borrar permanentemente con confirmación.
- El proyecto activo está protegido y se conservan/restauran sus snapshots. El catálogo y la búsqueda multiverso filtran tombstones.
- **Hardening de esta iteración:** `write(project)` valida el tombstone dentro de la transacción de escritura; `saveActive(project)` consulta la papelera antes de escribir el respaldo local y restaura el respaldo previo si detecta la carrera.
- Chromium verifica que escribir/guardar un ID en papelera se rechace, que el respaldo no sea sobrescrito y que el respaldo de otro universo sobreviva al movimiento y al borrado permanente.
- **PASS_STATIC:** sintaxis JavaScript y 18 pruebas de esquema.
- **PASS_REAL:** [CI #38023966741](https://github.com/jonhararagi/wordwaifu/actions/runs/38023966741), commit de código `2ef649202e1f27db0e0ff0a939e4307933e178de`; sintaxis, 18 pruebas de esquema, Chromium smoke y validador estructural completados.
- **PASS_REAL:** el smoke ahora crea dos universos con el mismo nombre y distintos IDs, mueve ambos a papelera, restaura uno, borra permanentemente el otro y verifica que sus snapshots e identidad no se mezclan.
- **NOT_RUN:** cuota real agotada; una excepción simulada no se presenta como cuota real. Revisión visual/manual en Windows 11 también sigue pendiente.
- **PARTIAL:** quedan los gates de cuota real y revisión manual en Windows 11.

## Gates pendientes — WF-004-C.3 sigue PARTIAL
- [x] CI de código y regresión duplicada en verde: sintaxis, 18 pruebas de esquema, Chromium y validación estructural; [#38023966741](https://github.com/jonhararagi/wordwaifu/actions/runs/38023966741).
- [x] El respaldo local de otro universo sobrevive al movimiento a papelera y al borrado permanente.
- [x] Proyectos con el mismo nombre y distintos IDs permanecen aislados en mover/restaurar/borrar.
- [ ] Cuota real agotada o limitación del entorno demostrada y documentada; excepciones inyectadas no equivalen a cuota real.
- [ ] Revisión visual/manual en Windows 11.
## Límites conocidos del producto
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral e integración con BotImagen siguen pendientes.
- La inspección visual manual en Windows 11 no está acreditada.
- WF-004-C.3 permanece parcial hasta superar los gates pendientes.

## Protocolo de continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WF-004-C3-TRASH-CONTRACT.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, CI y PR antes de escribir. Mantener una tarea activa por agente. Para nuevas integraciones, usar rama basada en `main`, CI verde en el SHA exacto y PR revisable; no usar force push ni borrar ramas.


## Actualización de continuidad — plan de cuota y Windows 11 (2026-10-10)
- Se añadió [`docs/WF-004-C3-QUOTA-WINDOWS-TEST-PLAN.md`](WF-004-C3-QUOTA-WINDOWS-TEST-PLAN.md) para definir evidencia `PASS_SIMULATED` frente a `PASS_REAL`, criterios seguros para investigar cuota real y una lista reproducible de revisión manual en Windows 11.
- Esta adición es documentación, no una ejecución de pruebas: no acredita cuota real ni inspección Windows.
- **WF-004-C.3 continúa PARTIAL.** Siguientes pasos: implementar/verificar la regresión automatizada de fallo simulado si aún falta; ejecutar CI; realizar cuota real solo en entorno aislado seguro si es viable; mantener Windows 11 como `NOT_RUN` hasta contar con ejecución real.

### Actualización incremental · 2026-10-18

En `main` se activaron cuatro expedientes secundarios de Hestia Familia que estaban reservados como candidatos: Liliruca Arde, Welf Crozzo, Mikoto Yamato y Haruhime Sanjouno. El catálogo ahora enlaza sus relaciones explícitas a claims del perfil oficial de DanMachi V con continuidad `CONT-ANIME`; esto mejora las fichas y la navegación, pero no implica que sus biografías de novela estén completamente cotejadas. Se mantiene la distinción entre perfil oficial de adaptación y canon de novela con localizador primario.
