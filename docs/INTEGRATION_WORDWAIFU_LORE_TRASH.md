# Integración controlada: lore + papelera

## Alcance
Esta rama parte de `b557fe7f1ff730bfc089a84811d62feae0b464cc` y combina la enciclopedia, recuperación local, fichas, recursos, filtros de continuidad, spoilers, abstención y búsqueda externa opcional de la rama de lore con la implementación de papelera de proyectos de la base.

## Contratos preservados
- `src/project-repository.js` y `src/project-schema.js` se conservan desde la base de papelera; el repositorio no se reemplaza por una implementación antigua.
- Se mantienen snapshots previos a borrados de entidades, límite de 25 snapshots, tombstones, aislamiento por ID, protección del proyecto activo, restauración reversible y borrado permanente independiente.
- Los resultados externos se presentan como pistas secundarias y no como afirmaciones verificadas del corpus.
- La separación de continuidad cubre `Estado temporal A`, `Estado temporal B` y el encabezado independiente `Perfil oficial del anime`.
- Solo se considera evidencia de CI la ejecución asociada al SHA exacto integrado.

## Gates manuales
- **NOT_RUN:** prueba de cuota real en almacenamiento aislado.
- **NOT_RUN:** inspección visual manual en Windows 11.
- La validación estructural no demuestra que todo el canon esté completamente verificado.

## Límites
Sin motor de simulación nuevo, sin conexión a LLM, sin release ni despliegue. Esta rama no autoriza ni realiza un merge a `main` y no abre un pull request.
