# Archivo de historias originales de WordWaifu

Este directorio guarda manuscritos originales del proyecto, independientes del código de la aplicación.

## Formato de cada historia

Cada historia debe tener:
- Un manuscrito Markdown completo, con título, sinopsis, elenco, arcos y capítulos.
- Un paquete JSON estructurado para importación futura: metadatos, personajes, lugares, eventos, capítulos y escenas con IDs estables.
- Un estado explícito: `idea`, `outline`, `draft`, `complete` o `revised`.
- Registro de continuidad: qué cambió, por qué, y qué preguntas siguen abiertas.
- Copia exportable sin dependencias externas.

## Separación entre datos y prosa

El JSON no reemplaza el manuscrito. Guarda estructura y enlaces para que WordWaifu pueda buscar, ordenar y validar los datos. El Markdown conserva el texto literario íntegro, legible incluso sin la aplicación. No se guarda una copia del texto completo en cada ficha de capítulo si puede referenciarse por ID o ruta.

## Convención de carpetas

```text
stories/
  README.md
  original/
    <slug>.md       # manuscrito legible
    <slug>.json     # estructura narrativa portable
```

## Criterio de “historia completa”

No basta con que exista una sinopsis o un esquema. Una historia se marca `complete` solo cuando:
1. Tiene comienzo, desarrollo, clímax y resolución.
2. Los conflictos principales quedan resueltos o deliberadamente abiertos.
3. Los personajes cambian a través de decisiones y consecuencias.
4. Los capítulos contienen escenas narradas, no solo títulos o resúmenes.
5. Se ejecuta una revisión de continuidad y se registran las limitaciones pendientes.

## Compatibilidad

El prototipo actual de WordWaifu guarda entidades de historia en el proyecto local, pero su pantalla de historias todavía no es un editor completo de manuscritos/capítulos. Estos archivos son el archivo fuente verificable; la integración de capítulos y edición en la aplicación debe tratarse como una tarea de implementación separada, no como una función ya disponible.
