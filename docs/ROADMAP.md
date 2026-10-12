# WordWaifu · Hoja de ruta maestra

> Documento vivo. Las etapas describen el plan, no funcionalidades ya entregadas.

## TIMER de planificación

- Auditoría inicial y definición de alcance: **2–4 horas**.
- Primer prototipo útil, una vez confirmado el objetivo: **1–3 días**.
- MVP con persistencia, práctica y pruebas: **1–3 semanas**, según alcance y recursos.
- Calidad de producto, contenido amplio, accesibilidad y publicación: **varias semanas o más**.
- Estimaciones preliminares. Se recalculan tras inspeccionar el repositorio y elegir la plataforma.

## Fase 0 · Verdad del repositorio

**Objetivo:** saber qué existe antes de diseñar sobre suposiciones.

- [ ] Registrar HEAD, rama predeterminada, árbol de archivos y workflows.
- [ ] Detectar código, dependencias, licencias, secretos accidentales y archivos generados.
- [ ] Ejecutar solo comprobaciones compatibles con el estado real del proyecto.
- [ ] Confirmar el objetivo principal de WordWaifu, idiomas, plataforma inicial y modo de uso.
- [ ] Registrar decisiones y bloqueos en documentación.

**Salida:** inventario verificable, alcance mínimo acordado y ninguna afirmación de implementación sin evidencia.

## Fase 1 · Diseño del producto

- [ ] Definir usuario principal y caso de uso.
- [ ] Diseñar el bucle central: aprender → recuperar de memoria → recibir corrección → repasar → ver progreso.
- [ ] Definir si los personajes son acompañantes cosméticos, narrativos o parte de la progresión.
- [ ] Diseñar estados vacíos, carga, error, falta de conexión y accesibilidad.
- [ ] Elegir métricas de aprendizaje útiles sin manipular al usuario con presión artificial.

**Puerta de calidad:** una especificación breve con criterios de aceptación comprobables.

## Fase 2 · MVP funcional

El alcance final depende de la auditoría y de la plataforma elegida. Si se confirma la hipótesis de aprendizaje de vocabulario, el candidato inicial es:

- [ ] Una sesión de práctica completa, desde elegir contenido hasta recibir resultado.
- [ ] Preguntas con respuesta y explicación verificables.
- [ ] Progreso persistente con recuperación tras cerrar y abrir la aplicación.
- [ ] Revisión de palabras falladas y repetición espaciada sencilla.
- [ ] Interfaz adaptable a móvil y escritorio.
- [ ] Contenido de demostración original con procedencia documentada.
- [ ] Pruebas de la lógica de aprendizaje y de persistencia.

**No incluir todavía:** monetización, sistemas sociales, tienda compleja, IA costosa ni cuentas remotas hasta demostrar que el bucle principal funciona y aporta valor.

## Fase 3 · Calidad de producto

- [ ] Pruebas unitarias de reglas y cálculos.
- [ ] Pruebas de integración para guardado, recuperación y flujos críticos.
- [ ] Comprobación manual o automatizada en tamaños de pantalla representativos.
- [ ] Accesibilidad: teclado, contraste, etiquetas, foco y movimiento reducido.
- [ ] Rendimiento, manejo de errores, recuperación y exportación/borrado de datos si corresponde.
- [ ] CI reproducible con resultados visibles.
- [ ] Instrucciones de instalación y diagnóstico para una persona nueva.

## Fase 4 · Contenido y personalidad visual

- [ ] Definir una guía visual original y consistente.
- [ ] Mantener manifiesto de recursos: archivo, autor, URL de origen, licencia, atribución y uso autorizado.
- [ ] Separar prototipos de referencia de los recursos autorizados para distribución.
- [ ] Crear contenido pedagógico revisado, con respuestas válidas y explicaciones.
- [ ] Evitar depender de servicios externos sin alternativa o aviso claro al usuario.

## Fase 5 · Preparación de publicación

- [ ] Confirmar plataforma y requisitos de publicación.
- [ ] Revisar licencias, privacidad, seguridad, accesibilidad y dependencias.
- [ ] Probar instalación limpia y actualización.
- [ ] Documentar límites conocidos y procedimiento de recuperación.
- [ ] No anunciar lanzamiento hasta completar pruebas y revisión de recursos.

## Política de licencias y recursos externos

El carácter no comercial no concede automáticamente permiso para copiar o redistribuir software, ilustraciones, fuentes, voces, datasets, textos o personajes. Cada recurso externo debe clasificarse antes de integrarlo:

- **APTO:** licencia y atribución compatibles con el uso previsto, documentadas.
- **SOLO REFERENCIA:** se puede estudiar, pero no copiar al producto.
- **REVISIÓN NECESARIA:** términos ambiguos o permiso no confirmado; no distribuir.
- **EXCLUIDO:** licencia incompatible o prohibición clara.

Si un recurso de evaluación no puede permanecer en la entrega, debe estar aislado, identificado y retirarse antes de publicar. No se deben introducir materiales dudosos con la intención de resolverlo al final si eso implica distribuirlos.

## Protocolo de ejecución

1. **INSPECT:** leer las instrucciones y el estado actual; verificar HEAD.
2. **PLAN:** definir una sola tarea activa, archivos objetivo y criterios de aceptación.
3. **EXECUTE:** cambios acotados y reversibles.
4. **VERIFY:** ejecutar pruebas reales cuando sea posible; registrar exactamente lo no ejecutado.
5. **PERSIST:** guardar cambios y documentación en Git.
6. **REPORT:** HEAD antes/después, commit, archivos, pruebas, evidencias y bloqueos.

Estados de evidencia: `PASS_REAL`, `PASS_STATIC`, `FAIL_REAL`, `NOT_RUN`, `UNKNOWN`, `PARTIAL`, `NOT_READY`.

## Decisiones pendientes del propietario

1. ¿WordWaifu es principalmente una app para **aprender vocabulario**, un juego de palabras, un diccionario con personajes, o algo distinto?
2. ¿Cuál es la primera plataforma prioritaria: web, Windows o Android?
3. ¿Qué idioma se aprende primero y cuál es el idioma de la interfaz?

Resolver estas decisiones evita construir una arquitectura bonita para el producto equivocado.


## Auditoría de repositorio · 2026-10-12

**Estado:** `PARTIAL`. Auditoría estática remota; no se ejecutó el proyecto en un entorno local.

### Evidencia observada

- Repositorio: `jonhararagi/wordwaifu`; visibilidad pública; rama predeterminada: `main`.
- HEAD observado antes de los cambios: `c07ef226a61ad6e48b081890f1e3d96eecb585b5` (commit `docs: add staged roadmap and quality gates`).
- Árbol de raíz visible en GitHub: `.gitignore`, `README.md` y `docs/ROADMAP.md`.
- No se observó código de aplicación, manifiesto de dependencias ni workflow de CI en el árbol de raíz/documentación inspeccionado. Esto no sustituye una auditoría de seguridad exhaustiva.
- La hipótesis de aprendizaje de vocabulario en documentos antiguos es inconsistente con el trabajo de producto más reciente. El PR #1 (`Foundation: WordWaifu offline world atlas and narrative canon`) define el producto como taller offline-first de universos narrativos; debe tratarse como la dirección de producto más respaldada hasta confirmación explícita del propietario.

### Resultado por control

| Control | Estado | Evidencia / límite |
|---|---|---|
| Rama y HEAD | `PASS_STATIC` | Metadatos de GitHub y referencia `main` consultados |
| Inventario inicial de archivos | `PASS_STATIC` | Árbol raíz y `docs/` consultados |
| Código ejecutable y dependencias en `main` | `PASS_STATIC` | No hay código de aplicación en el árbol de `main`; no hubo clonación local |
| Implementación en ramas/PR | `PASS_STATIC` | `foundation/story-foundry-north-star` contiene `index.html`, `src/app.js`, `src/project-repository.js`, `src/project-schema.js`, `src/styles.css`, `tests/` y `.github/workflows/validate.yml` |
| CI y pruebas de la rama `main` | `NOT_RUN` | `main` no contiene workflow; no se ejecutó CI en esta auditoría |
| CI declarada en la rama de fundación | `UNKNOWN` | Existe `.github/workflows/validate.yml`; no se consultaron resultados de ejecución de esta revisión |
| Secretos | `UNKNOWN` | No se hizo escaneo de secretos ni auditoría completa |
| Plataforma, idiomas y objetivo final | `NOT_READY` | Requiere decisión del propietario |
| Pruebas locales | `NOT_RUN` | No se afirma ejecución local |

### Decisión técnica provisional

No crear una implementación paralela ni asumir que el proyecto es una app de vocabulario. Primero reconciliar el prototipo ya existente en `foundation/story-foundry-north-star` con las ramas `work/wf-004-c2-destructive-snapshots` y `work/wf-004-c3-project-trash`, confirmar su CI y decidir una rama de integración. La dirección con más evidencia disponible es un taller web local/offline-first de universos narrativos, con atlas interactivo, gestión de entidades, persistencia local, importación/exportación y protección ante borrados.

### Bloqueos que requieren al propietario

1. Confirmar que la visión de taller offline-first de universos narrativos del PR #1 es la dirección oficial.
2. Confirmar la política de integración: mantener `main` limpia hasta revisar CI y fusionar los PR por orden, o elegir una rama de desarrollo como base.
3. Confirmar si se desea soporte de escritorio empaquetado además de la aplicación web.

### Siguiente tarea

`WW-002`: reconciliar las ramas y PR existentes; revisar CI real, continuidad y límites de seguridad de persistencia antes de añadir funciones nuevas. No incorporar recursos de terceros sin verificar licencia, atribución y derechos de redistribución.

### Registro de cambios

- Rama de trabajo: `work/audit-baseline-2026-10-12`.
- Esta auditoría se limita a evidencia accesible desde GitHub; no equivale a pruebas locales.


### Corrección de auditoría · 2026-10-12 (segunda pasada)

La primera pasada solo examinó el árbol de `main` y documentación; eso no representaba el trabajo existente en ramas de desarrollo. Se inspeccionó el árbol recursivo del commit `3500ec0517f216a5b96a82c08c9f81a5dc108e42` de `foundation/story-foundry-north-star` y se encontraron prototipo, módulos de datos, pruebas y workflow. También se identificaron PRs de protección de snapshots y papelera en progreso. Por tanto, no debe describirse WordWaifu globalmente como “sin código”: la afirmación correcta es que `main` aún no integra la implementación y hay trabajo sustancial en ramas/PR.

- Producto provisional más respaldado: taller de universos narrativos offline-first.
- PR de fundación: https://github.com/jonhararagi/wordwaifu/pull/1
- PR de auditoría: https://github.com/jonhararagi/wordwaifu/pull/6
- Verificación de ejecución local: `NOT_RUN`.
- Próximo gate: reconciliar ramas, inspeccionar el workflow y revisar resultados CI antes de nuevas funciones.


### Auditoría de QA · CI de lore (2026-10-12)

Se consultó el historial de GitHub Actions, no solo la existencia del workflow.

- Último run inspeccionado: [DanMachi Lore and Retrieval Integrity #38199172414](https://github.com/jonhararagi/wordwaifu/actions/runs/38199172414), commit `4b69c6051864f489ae651466f604e5191ee217dd`, conclusión `failure`.
- El log muestra que `node tests/test_lore_corpus.cjs` pasa (35 entradas / 32 source claims), pero `node tests/test_character_archive.cjs` falla en la línea 48: el test esperaba el encabezado inglés `Temporal state A` aunque el dossier existente usa `Estado temporal A`. La aserción equivalente sobre el estado B tenía el mismo problema.
- Cambio mínimo preparado en una rama aislada: [PR #7](https://github.com/jonhararagi/wordwaifu/pull/7), que solo actualiza las dos aserciones del test. No modifica código de producción ni contenido de lore.
- HEAD del fix: `4b16e4e926ecaba7ef47b7e3c03e6656210be19a`.
- Estado al redactar este registro: CI de PR #7 `IN_PROGRESS`; no declarar el fix validado hasta que termine.
- El historial muestra varios runs cancelados y fallidos recientes en la rama lore. La concurrencia con `cancel-in-progress: true` cancela runs anteriores al llegar pushes nuevos; revisar el run final del HEAD y no interpretar cancelaciones como fallos de pruebas.


### Actualización de seguimiento · regresión de continuidad (2026-10-12)

La ejecución CI del PR #7 avanzó después de la primera iteración:

- Run de revisión: https://github.com/jonhararagi/wordwaifu/actions/runs/38200687872
- En la revisión de pasos, `Test lore retrieval filters and abstention`, `Test character archive model`, `Test private preview file allowlist` y `Test project import validation` finalizaron en `success`.
- `Install Chromium` seguía `in_progress` en la última consulta. Por tanto, el resultado total del workflow todavía no está confirmado; navegador y validador de catálogo siguen pendientes.
- La segunda ejecución mostró que no bastaba con corregir el idioma de la prueba: también existía una fuga real de la sección española `Estado temporal B · Perfil oficial del anime` hacia la continuidad histórica. PR #7 ahora corrige el filtro de producción y conserva la prueba que detecta la fuga.

### Riesgo de integración descubierto

PR #1 y PR #3 apuntan ambos a `main` y comparten prácticamente todo el conjunto de fundación (workflow, README, arquitectura, modelo de datos, aplicación, repositorio, esquema y pruebas). PR #3 añade el trabajo de papelera y contratos WF-004-C3. No se deben fusionar ambos a ciegas: primero comparar los cambios incrementales contra el mismo ancestro y elegir un único tren de integración. PR #2 está cerrado sin fusionar y se basa en la rama de fundación; su protección de snapshots debe rebasarse/reaplicarse sobre la línea elegida, no perderse ni incorporarse como copia paralela.

### Próxima prioridad de integración

1. Confirmar el resultado final del run CI de PR #7.
2. Comparar PR #1, #2 y #3 por diferencias incrementales y dependencias, no solo por el número de archivos.
3. Elegir un único PR base para integrar el núcleo, preservando snapshots y papelera; luego ejecutar CI sobre esa combinación.
