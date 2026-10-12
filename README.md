# WordWaifu — World & Story Foundry

**Taller local y offline-first para construir mundos de ficción, explorar su canon en atlas interactivos y desarrollar historias con herramientas deterministas.**

WordWaifu reúne atlas, biblia narrativa, fichas de personajes, relaciones, cronología, continuidad, biblioteca visual y planificación de historias. El núcleo está pensado para funcionar en el navegador sin una API de IA obligatoria y con proyectos guardados localmente.

## Evolución del producto

La descripción inicial en `main` planteaba una experiencia de aprendizaje de vocabulario con identidad anime. Esta integración amplía ese punto de partida hacia un taller de construcción de mundos y narrativa. Se conservan como principios la privacidad por defecto, el progreso comprensible, la accesibilidad, las pruebas reproducibles y el uso responsable de contenido con derechos.

Para mantener trazabilidad, se archivan la visión original y la descripción completa de la rama de integración en:
- [Visión original del producto](docs/README-INITIAL-PRODUCT-VISION.md)
- [Descripción completa de World & Story Foundry](docs/README-WORLD-STORY-FOUNDRY.md)

## Módulos

- **World Atlas:** navegación por lugares, regiones y puntos de interés.
- **Canon Core:** personajes, lugares, organizaciones, acontecimientos y relaciones con IDs estables.
- **Character Forge / Lore Forge:** fichas, expedientes, fuentes y corpus de conocimiento.
- **Timeline / Continuity Guard:** separación temporal y filtros para no mezclar continuidades.
- **Visual Library / Art Studio:** prompts y recursos vinculados a entidades, con almacenamiento local y respaldo.
- **Project Trash:** snapshots, restauración y borrado controlado.
- **Story / Novel Forge:** planificación de historias y documentos narrativos.

## Estado verificable

La rama de integración contiene el prototipo de atlas, CRUD de entidades, relaciones, persistencia local, papelera, archivo de personajes, expedientes ampliados y panel de arte. En el commit de origen `e56f412f97b7730da63eb80c25d914983a56cd0a`, las acciones **Validate WordWaifu** y **DanMachi Lore and Retrieval Integrity** terminaron en verde, incluyendo la prueba Chromium de creación, edición, recarga y eliminación del panel de arte y los fallos simulados de almacenamiento.

Esto no significa que WordWaifu esté terminado. La integración final sigue en revisión: las PR #9 y #10 contienen cambios solapados de cobertura del elenco y profundidad de expedientes que deben reconciliarse sin duplicar registros; ninguna de las PR de integración ha sido fusionada en `main`.

## Documentación

- [Visión maestra](docs/MASTER_VISION.md)
- [Estado del proyecto](docs/STATUS.md)
- [Hoja de ruta](docs/ROADMAP.md)
- [Arquitectura](docs/ARCHITECTURE.md)
- [Modelo de datos](docs/DATA_MODEL.md)
- [Modo offline](docs/OFFLINE_FIRST.md)
- [Derechos de contenido y retirada](docs/CONTENT_RIGHTS_AND_TAKEDOWN.md)

Cada función importante debe cumplir el protocolo **INSPECT → PLAN → EXECUTE → VERIFY → PERSIST → REPORT**. No se declara terminada una función por la mera existencia de un archivo: debe haber evidencia reproducible y resultados de validación del commit candidato.
