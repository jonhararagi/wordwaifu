# Cobertura factual y registro de fallos/soluciones técnicas

**Fecha de revisión:** 2026-10-18  
**Destino:** `main`  
**Estado:** investigación aplicada; no declara cerrado el canon ni sustituye las pruebas automatizadas.

## 1. Prioridad de cobertura factual DanMachi

El corpus actual reconoce una deuda factual real: el grafo explícito documentado tiene 49 aristas, centradas en Astrea, Hestia y una parte de Loki Familia. Los perfiles individuales añadidos a Loki Familia se etiquetan como `CONT-SO` cuando proceden de perfiles oficiales de Sword Oratoria. No deben copiarse automáticamente a la continuidad de la novela principal.

### Corrección aplicada en main · 2026-10-18

- El catálogo ya permite que una relación use `pending_verification` cuando la fuente primaria aún no está disponible; el validador compara el estado de la arista con el estado declarado por el claim.
- `REL-RYU-ASTREA-DEPARTURE-SECONDARY` quedó marcada como `pending_verification`, con el tipo de evidencia `community_secondary_lead_unverified_against_primary`. La nota conserva la pista secundaria sin elevarla a canon.
- Se comprobó que las 49 aristas actuales resuelven a archivos y headings de claims existentes y que sus continuidades/estados declarados coinciden. Esta es una comprobación estática por lectura del catálogo y de los expedientes, no una ejecución del validador ni una prueba de CI.
- CI para el SHA de esta corrección: **NOT_CONFIRMED** desde las herramientas disponibles en esta ejecución; no declarar la suite verde hasta comprobar el run del commit exacto.

### Próximos cierres que sí pueden verificarse

1. **Relaciones con evidencia propia.** Para cada arista registrar `sourceId`, `targetId`, `type`, `continuity`, `period`, `eventId` si corresponde, `sourceRefs`, `claimId` y estado de verificación. Rechazar extremos inexistentes, autorrelaciones accidentales, duplicados y claims que no pertenezcan a la continuidad visible.
2. **Separar dirección de navegación.** Un enlace inverso sirve para volver al origen; no convierte “lidera”, “entrena” o “protege” en una relación simétrica. Mostrar el sentido original de la afirmación.
3. **Cerrar caminos antes de añadir volumen de datos.** Probar recorridos Ryu → miembro relacionado → Astrea Familia → Astrea → evento histórico → cronología → fuente y vuelta atrás/inicio. Repetir para Hestia Familia y Loki Familia. Las sugerencias por etiquetas deben quedar separadas de los vínculos probados.
4. **Cotejo factual de prioridad alta.** Recuperar localizadores internos de las novelas y relatos íntegros para Ryu/Astrea Familia, la petición de Ryu relacionada con abandonar Orario, la cronología de Hestia y Bell, los hitos de Zeus/Hera y el Dragón Negro, y los detalles de la Guild/Dungeon. La sinopsis editorial solo sostiene lo que dice explícitamente.
5. **Estados conservadores.** Mantener `pending_verification`, `provisional` o `disputed` si no hay localizador suficiente. Una wiki comunitaria sirve para descubrir pistas y alias, no para aprobar por sí sola un hecho. No completar vacíos por inferencia ni declarar “100%”.
6. **Historias y continuidad.** Cada evento necesita participantes, orden temporal respaldado, continuidad, fuente, consecuencias conocidas y campos pendientes. Mantener los eventos AU separados de la novela principal y de las adaptaciones; no decidir por el autor una divergencia irreversible.

### Pruebas de cierre para cada tanda

- Validador de catálogo e IDs, rutas Markdown y referencias locales.
- Integridad de extremos y claims del grafo; ausencia de duplicados.
- Prueba de filtro por continuidad y de que una relación sin evidencia no se presente como confirmada.
- Prueba de navegación adelante/atrás e inicio sin perder la ficha de origen.
- Diff de los estados de verificación para comprobar que ningún registro fue promovido sin una nueva fuente.
- CI sobre el SHA exacto que se pretende integrar; el resultado de una rama o un SHA anterior no valida cambios posteriores.

## 2. Actualizaciones públicas de ingeniería y aplicación a WordWaifu

### A. GitHub Actions: lockfiles de dependencias de workflows (14 de octubre de 2026)

**Problema documentado:** una etiqueta o rama de una acción puede moverse después de revisar el workflow; una ejecución posterior podría descargar código distinto sin un cambio visible en el repositorio. Un tag movido también puede ampliar el impacto de una dependencia comprometida.

**Solución publicada:** GitHub anunció en vista previa pública los lockfiles de dependencias de workflows, que fijan las acciones y workflows reutilizables a commits concretos. También permite comprobar si el lockfile está desactualizado. El pinning no demuestra que la dependencia sea segura: sigue siendo necesaria su revisión.

**Aplicación recomendada:** inventariar `.github/workflows/*.yml`, revisar las acciones de terceros, fijar por SHA completo cuando proceda y evaluar `actions.lock` cuando la función esté disponible para el repositorio. Añadir actualizaciones deliberadas y comprobación de lockfile a CI; no cambiar masivamente las versiones sin probar los workflows.

Fuente: https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview/

### B. GitHub Actions: expiración de artefactos (24 de septiembre de 2026)

**Problema documentado:** los artefactos expirados seguían apareciendo en el resumen de una ejecución y en la API con una etiqueta “Expired”, aunque los archivos ya se habían borrado. Esto confundía a quienes intentaban saber si el contenido seguía almacenado.

**Solución publicada:** los artefactos expirados dejaron de mostrarse en el resumen y en los endpoints de listado/consulta; los logs siguen siendo la referencia para conocer qué artefactos produjo una ejecución pasada.

**Aplicación recomendada:** no usar la presencia de un artefacto en la UI como evidencia permanente. Guardar los resultados necesarios fuera de la ventana de retención, mantener logs legibles y reportar el SHA, la ejecución y el resultado. No asumir que los artefactos se pueden recuperar tras expirar.

Fuente: https://github.blog/changelog/2026-09-24-expired-github-actions-artifacts-no-longer-shown-in-ui-and-api/

### C. GitHub Actions: retención de checks, runs y estados (vigente desde 1 de octubre de 2026)

**Cambio documentado:** checks, workflow runs y commit statuses ahora obedecen la misma configuración de retención que los artefactos y logs. El valor por defecto indicado por GitHub es 90 días; en repositorios públicos el máximo de retención de esos datos es 90 días. La política no es retroactiva y no restaura datos ya eliminados.

**Riesgo para la auditoría:** un enlace a una ejecución antigua puede dejar de servir como evidencia accesible aunque el cambio histórico haya ocurrido. No debe confundirse “no encuentro la ejecución” con “la prueba nunca pasó”.

**Aplicación recomendada:** mantener en cada cierre un registro duradero con SHA, workflow, número/URL de ejecución, fecha, resultado y resumen de pruebas. Para evidencia que deba conservarse más allá de la retención, guardar un informe de texto versionado o un artefacto propio según las necesidades del proyecto. No aumentar la retención sin evaluar los límites de la cuenta/repositorio.

Fuentes:
- https://github.blog/changelog/2026-08-27-actions-retention-will-cover-checks-workflow-runs-and-statuses/
- https://github.blog/changelog/2026-10-01-actions-retention-now-covers-checks-runs-and-statuses/
- https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization

### D. IndexedDB: transacciones, rollback y pestañas antiguas

**Problema técnico documentado por MDN:** si una operación falla y la transacción se aborta, sus cambios se revierten. Las transacciones también pueden quedar inactivas si el código espera trabajo asíncrono ajeno antes de emitir nuevas solicitudes. Una actualización de esquema puede bloquearse mientras otra pestaña mantiene abierta una conexión antigua.

**Solución recomendada en la documentación:** agrupar escrituras que deben ser atómicas en una transacción; escuchar `error`, `abort` y `complete`; manejar `blocked`; cerrar la conexión al recibir `versionchange`; y no informar éxito hasta el evento `complete`.

**Aplicación a WordWaifu:** las operaciones de proyecto, papelera, restauración, importación y respaldo deben preservar el estado anterior ante fallos. Mantener pruebas que inyecten errores de almacenamiento y etiquetarlas como simulación; no describirlas como una prueba de cuota real. Añadir o conservar un test de actualización con dos conexiones/pestañas, si no existe en la suite actual. La recomendación es una revisión técnica, no una afirmación de que todas esas pruebas ya están implementadas.

Fuente: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

## 3. Decisiones inmediatas

- No añadir GPU, workers ni complejidad de hardware sin un benchmark que identifique el cuello de botella.
- Priorizar datos de relación verificables y caminos narrativos que el usuario pueda recorrer.
- No copiar código de otros proyectos; adaptar patrones generales y citar la fuente.
- No llamar “bug corregido” a un problema que solo se ha investigado. Registrar por separado problema observado, cambio aplicado y prueba que lo demuestra.
- Al cerrar una tanda, actualizar catálogo, documento afectado, log de tanda y prueba; no añadir únicamente otra auditoría.

## 4. Fuentes técnicas de referencia

- MDN, IndexedDB y manejo de transacciones: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
- GitHub Changelog, lockfiles de workflows: https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview/
- GitHub Changelog, artefactos expirados: https://github.blog/changelog/2026-09-24-expired-github-actions-artifacts-no-longer-shown-in-ui-and-api/
- GitHub Changelog, retención de checks/runs/statuses: https://github.blog/changelog/2026-10-01-actions-retention-now-covers-checks-runs-and-statuses/

**Estado final de esta nota:** investigación documentada; no equivale a que las brechas de canon o los tests mencionados hayan sido cerrados. La cobertura factual de DanMachi sigue parcial hasta cotejar fuentes primarias y verificar los recorridos en el HEAD actual.
