DONE

# WordWaifu · Punto de continuidad

**Tarea cerrada:** WF-002-C · Modelo y CRUD básico de organizaciones con referencias seguras.
**Estado:** atlas, personajes, acontecimientos y organizaciones tienen pruebas automatizadas de CRUD en Chromium.
**Fecha:** 2026-10-09.

## Estado de Git
- Repositorio: `jonhararagi/wordwaifu`.
- Rama de trabajo: `foundation/story-foundry-north-star`.
- HEAD BEFORE de WF-002-C: `a28d7b057d949041eb3e74d2ada93d4b0471c316`.
- HEAD de código probado: `e71c3b5062476561db40da524d7b5aa5e773d9bd`.
- CI de código y pruebas: **PASS**, [ejecución #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101).
- PR #1: [abierto y en borrador](https://github.com/jonhararagi/wordwaifu/pull/1); no fusionado ni marcado listo.
- `main` permanece intacta en `15a9e0677bf27596dfaef97b5b7d7dfd1569eb98`.
- Este commit de cierre actualiza documentación después del HEAD de código probado. En la próxima sesión, consultar el HEAD vivo de la rama; no tratar `e71c3b5062476561db40da524d7b5aa5e773d9bd` como un SHA necesariamente actual.

## Trabajo implementado
- Añadido `organizations` al esquema del proyecto como campo compatible opcional. Los proyectos JSON antiguos sin la lista se normalizan a `organizations: []`; no hace falta cambiar `schemaVersion`.
- Registro de organización separado con nombre, tipo, descripción, ideología, objetivos, responsables, miembros, sede, historia y estado del canon.
- Nueva vista lateral «Organizaciones» con lista/búsqueda, ficha de detalle, selección, creación, edición y eliminación.
- Los selectores de responsables, miembros y sede reutilizan personajes y ubicaciones existentes por ID; no duplican ni embeben fichas.
- La edición conserva el ID estable. El borrado requiere confirmación e informa de los efectos; elimina solo la organización y conserva los personajes, ubicaciones y organizaciones no relacionados.
- El esquema comprueba que los IDs de organización son únicos frente a las demás entidades, que responsables/miembros apuntan a personajes existentes y que la sede apunta a un lugar existente o es `null`.
- Proyectos guardados anteriormente en `localStorage` se abren con una lista de organizaciones vacía si ese campo aún no existía.
- Se amplió el fixture de demostración con «Archivo de Cartógrafos» como ejemplo original.
- Actualizadas pruebas de esquema y Chromium para creación, edición con ID estable, persistencia, eliminación selectiva, supervivencia de entidades relacionadas, importación/exportación y compatibilidad hacia atrás.

## Evidencia
- **PASS_REAL:** [CI #37936748101](https://github.com/jonhararagi/wordwaifu/actions/runs/37936748101), ejecución completada con éxito.
- **PASS_REAL:** Chromium confirmó CRUD de organización, referencias a responsables/miembros/sede, ID estable al editar, persistencia tras recarga, borrado y round-trip de exportación/importación sin errores de página.
- **PASS_STATIC:** 13 pruebas de esquema, incluida compatibilidad con proyectos antiguos, IDs globales únicos y rechazo de referencias colgantes a personaje/lugar.
- **FAIL_REAL durante desarrollo, corregido:** las primeras pruebas reutilizaron una organización que no existía en el fixture importado y duplicaron una declaración local al corregirla. Se corrigió el fixture para crear explícitamente una organización independiente; la última ejecución pasó.
- **NOT_RUN:** validación visual/manual en la PC Windows 11 del usuario.

## Aprendizaje técnico externo
Consulté modelos públicos de worldbuilding como referencias conceptuales, sin copiar código: [Loreweaver: `types/world.ts`](https://github.com/LightWraith8268/loreweaver/blob/cf6120883527e9b2528dffafcfcbe18c10267cf5/types/world.ts) y [Saga Architect: `WORLDBUILDING_MODEL.md`](https://github.com/Bboy9090/SagaArchitect/blob/4fa6fd16e86991a0410b595e3668e6fedc67d150/docs/WORLDBUILDING_MODEL.md). El patrón útil es mantener las facciones como entidades separadas con responsables/miembros referenciados, pero WordWaifu exige IDs estables y valida que cada referencia exista. Los enlaces, riesgos y decisiones están registrados en [`docs/TECHNICAL_RESEARCH.md`](TECHNICAL_RESEARCH.md).

## Progreso global
**Estimación: 12%** de la visión completa. Es una estimación subjetiva ponderada por alcance, no porcentaje de código ni cobertura. Las operaciones básicas de creación/edición/borrado tienen evidencia automatizada para ubicaciones, personajes, acontecimientos y organizaciones. Siguen pendientes relaciones dedicadas, IndexedDB y respaldos, índice multiverso completo, cronología avanzada, generadores narrativos, Novel Studio, Content Guard e integración con BotImagen.

## Siguiente tarea activa
**WF-003-A — Modelo y CRUD dedicado de relaciones entre personajes.**

**TIMER inicial: 3–5 horas**, recalcular después de inspeccionar el modelo actual y sus datos existentes.

### Criterios de aceptación
1. Inspeccionar el formato actual `characters[].relationships` antes de modificarlo y mantener compatibilidad con proyectos ya guardados.
2. Registrar una relación con IDs de origen/destino, tipo, descripción y estado del canon; los nombres no son claves.
3. Crear, consultar, editar y borrar relaciones desde la interfaz conservando IDs al editar.
4. Validar referencias a personajes existentes; impedir auto-relaciones y evitar duplicados accidentales según el tipo/dirección definidos.
5. Al borrar una relación no borrar los personajes enlazados. La eliminación se confirma si afecta datos existentes.
6. Pruebas de esquema y Chromium para CRUD, compatibilidad, persistencia, importación/exportación y limpieza selectiva.
7. CI PASS y actualización de `docs/STATUS.md`, `docs/ROADMAP.md` y este mismo `docs/DONE.md`. Mantener la validación manual de Windows como `NOT_RUN` hasta realizarla.

### Antes de empezar
Leer `docs/DONE.md`, `docs/STATUS.md`, `docs/WORK_PROTOCOL.md`, `docs/MASTER_VISION.md`, `docs/DATA_MODEL.md` y `docs/TECHNICAL_RESEARCH.md`. Verificar HEAD, PR y CI; inspeccionar `src/app.js`, `src/project-schema.js`, `tests/test_project_schema.cjs` y `tests/browser_smoke.cjs`.
