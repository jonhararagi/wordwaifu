# Cobertura factual y registro de fallos/soluciones técnicas

**Fecha de revisión:** 2026-10-18  
**Destino:** `main`  
**Estado:** investigación aplicada; no declara cerrado el canon ni sustituye las pruebas automatizadas.

## 1. Prioridad de cobertura factual DanMachi

El corpus actual reconoce una deuda factual real: el grafo explícito documentado tiene 64 aristas, distribuidas entre Astrea, Hestia, parte de Loki Familia, rutas de adaptación de Ryu/Bell/Eina, historia parcial de Zeus/Hera y la expedición del volumen 21. El total no equivale a cobertura completa de relaciones. Los perfiles individuales añadidos a Loki Familia se etiquetan como `CONT-SO` cuando proceden de perfiles oficiales de Sword Oratoria. No deben copiarse automáticamente a la continuidad de la novela principal.

### Corrección aplicada en main · 2026-10-18

- El catálogo ya permite que una relación use `pending_verification` cuando la fuente primaria aún no está disponible; el validador compara el estado de la arista con el estado declarado por el claim.
- `REL-RYU-ASTREA-DEPARTURE-SECONDARY` quedó marcada como `pending_verification`, con el tipo de evidencia `community_secondary_lead_unverified_against_primary`. La nota conserva la pista secundaria sin elevarla a canon.
- La comprobación estática inicial encontró 49 aristas con archivos y headings de claims existentes. La revisión de la tanda del volumen 21 comprobó 64 aristas: extremos existentes, claim/localizador presente, continuidad y estado coincidentes y ausencia de IDs o rutas duplicados. La lectura estática complementa, pero no sustituye, la ejecución del validador ni la prueba de CI.
- Estado posterior de CI: la suite completa para el SHA funcional `19bbe40050496df71eec0a7e794ca08748a92fe7` terminó en verde en [Validate WordWaifu #39157291171](https://github.com/jonhararagi/wordwaifu/actions/runs/39157291171) y [DanMachi Lore and Retrieval Integrity #39157291147](https://github.com/jonhararagi/wordwaifu/actions/runs/39157291147). Los cambios documentales posteriores se validan de nuevo en sus propios SHA.

### Actualización incremental · 2026-10-18 · recorrido Ryu

- Se añadió el evento `EVT-DM-RYUU-ASTREA-RETURN-ANIME-001`, con un expediente de investigación dedicado y dos referencias oficiales: el perfil de personajes de DanMachi V y la noticia oficial de Ryu de nivel 6.
- Se añadieron tres aristas con claims explícitos: Ryu regresa junto a Bell desde las profundidades; Ryu visita a Astrea fuera de Orario en la adaptación; Ryu participa tarde en la guerra de Familias.
- En ese punto de la iteración el catálogo estaba en 61 registros, 57 IDs reservados, 103 documentos de apoyo y 55 relaciones. La cifra es histórica para la tanda Ryu; no es el inventario actual, que se registra al final de este documento.
- La lectura estática de esa iteración encontró 50 aristas `source_checked`, una `secondary_checked` y una `pending_verification`. Esa cuenta histórica no representa el estado de las tandas posteriores.
- El evento mantiene como pendientes el orden detallado por episodio, las consecuencias escena por escena y el cotejo separado de una edición de novela. No afirma reciprocidad romántica ni las reglas internas de Astrea Record.

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

### E. Herramienta de lockfiles: correcciones de uso y validación en releases públicos

El repositorio público de releases de `github/gh-actions-lock` publicó `0.2.0-rc.1` el 12 de octubre de 2026. El registro de cambios destaca tres correcciones concretas:

- `verify-local` reporta referencias `./` en lugar de migrarlas automáticamente en el disco.
- La lectura de workflows respeta `GH_ACTIONS_LOCK_REPO_ROOT` para localizar la raíz del repositorio.
- La comprobación detecta entradas sin usar en el lockfile y workflows que no están registrados en él.

Fuente: https://github.com/github/gh-actions-lock/releases

**Qué error/riesgo ilustra:** una herramienta de validación puede hacer cambios no deseados durante una operación que el usuario cree que solo inspecciona; además, una lista de dependencias fijadas puede aparentar cobertura completa mientras omite workflows o conserva entradas obsoletas. La nota de release enumera las correcciones; no publica un informe de incidente completo, por lo que no se atribuyen consecuencias que el autor no declara.

**Aplicación conservadora a WordWaifu:** los validadores deben ser de solo lectura por defecto; las migraciones deben requerir un modo explícito. Si el proyecto adopta el lockfile de Actions, el CI debe fallar ante workflows no registrados o entradas obsoletas. Como las workflows actuales ya fijan varias acciones a SHA completos y la función de lockfiles sigue en vista previa pública, no se instala una nueva herramienta en esta tanda sin demostrar que aporta cobertura adicional al repositorio.

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


### Verificación CI recuperada · 2026-10-18

- El fallo reproducible anterior se debía a una aserción demasiado estricta en `tests/test_lore_corpus.cjs`: exigía `secondary_checked` aunque el grafo ya rebajaba el claim a `pending_verification`. La intención del test —no promover la razón disputada a canon— era correcta; la condición estaba desactualizada.
- Se ajustó para admitir `secondary_checked` o `pending_verification`, y rechazar explícitamente `source_checked` sin evidencia primaria. La misma tanda añadió pruebas para las tres relaciones nuevas y la recuperación de los claims DMR-013 dentro de `CONT-ANIME`.
- Resultado para el SHA exacto `ad182ab5bba631930eae88339e1b9783d819ad89`: [Validate WordWaifu #39155674818 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39155674818) y [DanMachi Lore and Retrieval Integrity #39155674834 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39155674834).
- Esta certificación no se extiende automáticamente a un SHA nuevo. Cada commit posterior necesita sus propias ejecuciones; por eso los cambios de documentación que siguen se deben validar de nuevo.


### Ampliación de historia · Bell opening en CONT-ANIME · 2026-10-18

- Se añadió `EVT-DM-BELL-OPENING-CRISIS-ANIME-001`, con el claim DMR-014-CLM-001 sobre el estado de Bell como único miembro de Hestia Familia desde hace aproximadamente medio mes en la sinopsis del episodio 1 y DMR-014-CLM-002 sobre la crisis del quinto piso.
- El dossier se limita a la adaptación. No declara que ese medio mes date el primer encuentro de la novela, no fija la fecha del descenso de Hestia y no identifica a la espadachina usando únicamente la sinopsis.
- Estado estructural tras añadir ambos recorridos de adaptación: 61 registros, 57 IDs reservados, 102 documentos de apoyo y 54 aristas. El porcentaje de cobertura global sigue sin calcularse porque hay historias y localizadores primarios pendientes.
- Las pruebas de regresión ahora incluyen ambos expedientes y comprobarán su recuperabilidad por continuidad antes de cerrar la siguiente tanda.


### Ampliación de historia · encuentro Bell–Hestia en novela · 2026-10-18

- Se consultó la ficha editorial oficial de GA Bunko para el volumen 1: https://ga.sbcr.jp/product/9784797372809/. La sinopsis afirma que Bell, rechazado por otras Familias, conoce a Hestia, una diosa sin miembros, y acepta su invitación para unirse a su Familia.
- El evento `EVT-DM-BELL-MEETS-HESTIA-001` cambió de `pending_verification` a `source_checked_partial`; se creó `DANMACHI-RESEARCH-015` con `DMR-015-CLM-001` y se añadió la relación `REL-BELL-MEETS-HESTIA-NOVEL-SYNOPSIS` en `CONT-MAIN-LN`.
- Alcance limitado: la sinopsis confirma el núcleo del encuentro y la invitación, pero no ofrece localizador interno de capítulo/página. La fecha y el orden de la escena, cuándo recibe Bell la Falna y el intervalo desde el descenso de Hestia siguen abiertos.
- Catálogo actualizado: 61 registros, 57 IDs reservados, 103 documentos de apoyo y 55 aristas; estados de aristas: 53 `source_checked`, una `secondary_checked` y una `pending_verification`. La tasa global de cobertura factual sigue sin calcularse.


### Ampliación de historia · ruta Eina–Bell–Guild · 2026-10-18

- La página oficial de personajes de DanMachi III (https://danmachi.com/danmachi3/character/) describe a Eina Tulle como recepcionista y asesora de la Guild asignada a Bell y afirma que le aporta conocimiento del Dungeon y de la ciudad.
- Se añadió el expediente `EVT-DM-EINA-ADVISOR-ANIME-001`, el claim `DMR-016-CLM-001` y dos aristas explícitas: `REL-EINA-ADVISOR-BELL-ANIME` (relación de asesoramiento) y `REL-EINA-WORKS-GUILD-ANIME` (relación institucional).
- Se mantiene intacto el candidato de novela `EVT-DM-EINA-ADVISOR-001`: no se copiaron detalles de la adaptación a la novela ligera ni se inventaron fechas de reuniones o consejos concretos.
- El catálogo alcanzó 65 registros, 55 IDs reservados, 104 documentos de apoyo y 64 aristas. Los estados de relación siguen siendo conservadores: 57 `source_checked`, una `secondary_checked`, una `pending_verification`, dos `provisional_summary` y tres `source_checked_excerpt_only`. La cifra describe aristas con distintos alcances y no es un porcentaje de cobertura de historias.


### Corrección de modelo · alcance CROSS-CONTINUITY · 2026-10-18

- **Error observado:** una claim oficial de la prueba de conocimiento de DanMachi usa `continuity_scope: CROSS-CONTINUITY`, pero el validador de aristas solo aceptaba claves `CONT-...`. La regla impedía modelar una fuente oficial transversal sin forzarla artificialmente a una continuidad de novela o anime.
- **Corrección:** `lore/danmachi/tools/check-catalog.mjs` ahora permite explícitamente `CROSS-CONTINUITY` además de los identificadores `CONT-...`. La opción no reemplaza el filtrado de continuidad: solo debe utilizarse cuando la fuente realmente declara un alcance transversal.
- **Aplicación:** se activaron las fichas parciales de Zeus Familia y Hera Familia y se conectaron a `EVT-DM-GREAT-QUESTS-001` usando `DMR-008-CLM-027`. La relación conserva que la fuente atribuye ambas victorias conjuntamente; no infiere qué Familia derrotó cada monstruo ni cierra el resultado contra el Dragón Negro.
- **Regresión añadida:** `tests/test_lore_corpus.cjs` comprueba las dos aristas `CROSS-CONTINUITY` y que el buscador recupera el claim con ese filtro. La validación de CI para el HEAD más reciente debe confirmarse antes de afirmar que toda la tanda terminó en verde.


### Regresión final · parser CROSS-CONTINUITY y CI verde · 2026-10-18

- La prueba de la búsqueda transversal reveló un segundo fallo: aunque el validador aceptaba CROSS-CONTINUITY, el parser de src/lore-corpus.js solo extraía etiquetas CONT-.... Por ello, la relación podía existir en el catálogo y aun así no recuperarse al filtrar por su propio alcance.
- **Corrección aplicada:** la expresión de extracción de continuityScopes ahora acepta CROSS-CONTINUITY; el test filtra por ese valor y exige recuperar DMR-008-CLM-027.
- **Resultado CI para el SHA funcional exacto 15c968dd846138defd80c6599a6bdab84c7673fd:** [Validate WordWaifu #39156859477 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39156859477) y [DanMachi Lore and Retrieval Integrity #39156859489 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39156859489). Ambos incluyen test de lore, validación de catálogo y navegador.
- **Revisión estática del grafo en el mismo contenido publicado:** 64 relaciones, extremos existentes, claim/localizador existente, continuidad y estado coincidentes, sin duplicados ni combinación de tipos secondary/community con source_checked. La comprobación estática complementa, no reemplaza, CI.


### Ruta del volumen 21 por nivel de evidencia · 2026-10-18

- Se añadió `EVT-DM-V21-EXPEDITION-RESCUE-001` y cinco relaciones de la expedición fallida, la noticia que recibe Bell y los fragmentos de capítulo/prólogo. El evento reutiliza claims ya existentes en `BATCH-DM-008-main-story-volume-map.md`; no añade hechos sin referencia ni duplica la afirmación de las fuentes.
- Dos aristas de la sinopsis editorial (`DMR-008-CLM-022` y `DMR-008-CLM-024`) usan `provisional_summary`; tres aristas del texto público de la muestra (`DMR-008-CLM-025` y `DMR-008-CLM-026`) usan `source_checked_excerpt_only`. El validador acepta esos estados para que un enlace no aparente certeza superior a la claim fuente.
- Estado actualizado: 65 registros, 55 IDs reservados, 104 documentos de apoyo y 64 relaciones. Estados de arista: 57 `source_checked`, una `secondary_checked`, una `pending_verification`, dos `provisional_summary` y tres `source_checked_excerpt_only`.
- La historia sigue parcial: no se infiere el rescate completo, el estado individual de todos los atrapados ni la cronología del prólogo. La siguiente prueba debe confirmar recuperación, enlaces y estados en el SHA exacto.


### Estado operativo tras el cierre de la ruta del volumen 21 · 2026-10-18

- Conteo estructural de main: 65 registros activos, 55 IDs reservados, 104 documentos de apoyo y 64 relaciones explícitas.
- Estado de las 64 relaciones: 57 `source_checked`, 1 `secondary_checked`, 1 `pending_verification`, 2 `provisional_summary` y 3 `source_checked_excerpt_only`.
- La historia del volumen 21 enlaza los hitos respaldados por sinopsis editorial y los fragmentos de capítulo/prólogo, manteniendo cada estado de evidencia. No declara finalizada la expedición, el rescate ni la cronología exacta del prólogo.
- En el SHA de código/pruebas `19bbe40050496df71eec0a7e794ca08748a92fe7`, ambos workflows terminaron PASS. Esta certificación no se extiende automáticamente a los commits documentales posteriores; se verifican sus propios runs antes de cerrar la tanda.


### CI final de la ruta de volumen 21 y navegación de fichas · 2026-10-18

- Tras enlazar el expediente a las fichas de volumen 21, Loki Familia, Ais, Finn y Bell, los workflows terminaron en verde para el SHA de contenido `b5222780d313a097496d5c368cabab4e8cafd54c`: [Validate WordWaifu #39157471779 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39157471779) y [DanMachi Lore and Retrieval Integrity #39157471757 PASS](https://github.com/jonhararagi/wordwaifu/actions/runs/39157471757).
- El recorrido conecta la sinopsis editorial (estado `provisional_summary`) con el fragmento público del capítulo inicial y prólogo (estado `source_checked_excerpt_only`), manteniendo los límites de cada fuente.
- El HEAD documental posterior se vuelve a validar en sus propias ejecuciones; estos enlaces certifican exactamente el SHA citado, no cualquier commit futuro.
