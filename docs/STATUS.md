# Estado de WordWaifu

## Resumen
- Producto: WordWaifu · World & Story Foundry.
- Objetivo: aplicación local/offline-first para organizar universos, canon, atlas temporal, personajes, relaciones, acontecimientos, organizaciones e historias/novelas.
- **Avance global estimado: 20%** de la visión completa; estimación ponderada por alcance, no métrica de código ni cobertura.
- Tecnología: HTML/CSS/JavaScript, SVG, IndexedDB v3 y respaldo compatible en localStorage.
- WordWaifu gestiona el canon y la planificación narrativa; BotImagen gestiona recursos visuales. La integración aún no está implementada.

## GitHub
- Repositorio: `jonhararagi/wordwaifu`.
- Rama: `foundation/story-foundry-north-star`.
- HEAD de código/pruebas probado: `0f035460a5a053dc47fe28a098f8bae056c8a540`.
- CI: [PASS_REAL, ejecución #38024310803](https://github.com/jonhararagi/wordwaifu/actions/runs/38024310803).
- PR #1: [abierto en borrador](https://github.com/jonhararagi/wordwaifu/pull/1), sin fusionar ni marcar listo.
- `main`: intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- El commit documental posterior no cambia el SHA del código sometido a CI; reconsultar HEAD vivo al retomar.
- Prueba manual en Windows 11: **NOT_RUN**.

## Capacidad con evidencia automatizada
- **WF-001-B:** CRUD de lugares, movimiento SVG y borrado seguro.
- **WF-002-A/B/C:** CRUD de personajes, acontecimientos y organizaciones, con limpieza/validación de referencias.
- **WF-003-A:** relaciones canónicas con ID estable y proyección compatible.
- **WF-004-A:** repositorio desacoplado e integración con IndexedDB, con respaldo local y pruebas de resiliencia.
- **WF-004-B:** catálogo multiverso por ID, apertura contextual e índice maestro con declaración de búsqueda parcial ante fallos.
- **WF-004-C.1:** snapshots versionados, restauración protegida y respaldo antes de importar.
- **WF-004-C.2:** snapshot verificado antes de borrar entidades, límite de 25 y cancelación segura cuando no hay espacio.
- **WF-004-C.3:** papelera de proyectos recuperable. IndexedDB v3 conserva la identidad y los snapshots; la purga permanente requiere una acción y confirmación separadas.

## Evidencia de WF-004-C.3
- **PASS_REAL:** CI [#38024310803](https://github.com/jonhararagi/wordwaifu/actions/runs/38024310803), workflow completo.
- **PASS_REAL:** Chromium probó mover a papelera, conservar snapshots, restaurar el mismo universo y borrar permanentemente solo el ID elegido.
- **PASS_STATIC:** sintaxis JavaScript, 18 pruebas de esquema y comprobación estructural.
- **PARTIAL:** la papelera no tiene caducidad automática; los usuarios deciden cuándo purgar.
- **NOT_RUN:** revisión manual visual/usabilidad en Windows 11.

## Límites aún abiertos
- La purga es irreversible por diseño y está separada de la acción inicial de mover a papelera.
- La expiración automática de entradas en papelera no está implementada.
- El modelo temporal utiliza historial de ubicación; todavía debe evaluarse si se necesita un registro explícito más general de presencia por evento/capítulo.
- Novel Studio completo, generación narrativa avanzada, Continuity Guard integral e integración con BotImagen permanecen pendientes.

## Siguiente tarea activa
**WF-005-A — Modelo explícito de presencia temporal en lugares.**  
**TIMER inicial: 3–5 horas.** Inspeccionar `locationHistory`, el selector temporal y `DATA_MODEL.md`; preservar compatibilidad, consultar lugares por ID y probar límites de intervalos sin duplicar fichas de personajes.

## Protocolo de continuidad
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD/PR/CI actuales antes de escribir. Una sola tarea activa. No tocar `main` ni fusionar PR sin autorización.
