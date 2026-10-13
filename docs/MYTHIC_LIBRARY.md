# Biblioteca mitológica y de reliquias

La aplicación carga el catálogo de referencia desde `data/catalog/mythic-arsenal.json`. Los registros de referencia son datos compartidos de solo lectura para no confundir la mitología con adaptaciones de una historia concreta.

## Esquema del catálogo

- `schemaVersion`: versión del formato.
- `entities[]`: `id` estable, `name`, `kind`, `tradition`, `region`, `status`, `summary`, `tags[]`, `sourceNotes`, `sourceIds[]`, `relations[]`.
- `relations[]`: `type` y `targetId`; las relaciones entrantes se muestran también para permitir navegar en ambos sentidos.
- `artifactProfile` (solo para objetos que lo necesitan): `objectCategory`, `associatedFigureIds[]`, `documentedCapabilities[]`, `useConditions`, `costsAndLimits`, `risks`, `evolutionStages[]` y `adaptationMechanics`.
- `sources[]`: `id`, `title`, `url` y `use`. Las notas advierten cuando una interpretación es regional, discutida o procede de fuentes coloniales o recopilaciones modernas.
- `starterDecks[]`: colecciones iniciales de IDs del catálogo, no personajes ni proyectos independientes.

Los estados distinguen `mythology_reference`, `historical_reference`, `creative_adaptation` y `original`. Una capacidad jugable inventada debe describirse como adaptación; no debe atribuirse a una cultura como hecho documentado. En especial, las tradiciones americanas conservan etiquetas culturales y regionales específicas en vez de tratarse como un panteón unificado.

## Relaciones y adaptaciones de proyecto

Las relaciones incluidas en el JSON son referencias curatoriales del catálogo. Los vínculos creados en la interfaz se guardan en `mythicRelations[]` dentro del proyecto activo, con `id`, `sourceId`, `targetId`, `type` y `createdAt`; pueden editarse o eliminarse sin cambiar la fuente central. La ficha muestra vínculos salientes y entrantes.

Las propuestas generadas se guardan por separado en `mythicProposals[]`. Cada propuesta conserva los modos seleccionados, `entityIds[]`, el texto editable de concepto, habilidad, activación, coste, riesgo, progresión y debilidad, y un `storyId` opcional. La referencia a una ficha central evita duplicar sus metadatos; las diferencias quedan en la propuesta narrativa.

## Generador

La Forja admite cuatro modos combinables: portador de armas, reencarnación/encarnación, invocador de cartas e invocador de reliquias. La generación no guarda automáticamente. Se puede editar, volver a generar, vincular a una historia del proyecto, guardar, editar una propuesta guardada y eliminarla.

## Añadir registros y fuentes

1. Asigná un ID estable y único con un prefijo cultural o de categoría claro.
2. Registrá nombre, tradición, región, categoría, descripción concisa, etiquetas y estado epistemológico.
3. Añadí una fuente a `sources[]` con título, URL y nota de uso; vinculala desde `sourceIds[]`.
4. Registrá relaciones por IDs existentes. No inventes parentescos ni equivalencias entre tradiciones.
5. Para armas/reliquias, completá `artifactProfile` separando capacidades descritas de mecánicas de adaptación.
6. Ejecutá `node tests/test_mythic_catalog.cjs` y `node tests/test_project_schema.cjs`. El flujo de validación ejecuta también el smoke test de navegador.

Las referencias de contexto no sustituyen una edición crítica o una fuente comunitaria específica. Si la afirmación depende de una tradición oral local, anotá la procedencia y evitá universalizarla.
