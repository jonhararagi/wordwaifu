# Registro de tandas de lore

## BATCH-DM-000 · Protocolo y semilla inicial
- Estado: guardada en feature/danmachi-lore-poc.
- Alcance: plantilla de lore, protocolo de revisión, premisa del OC, primeras fichas generales de Orario/Falna/Dungeon, Hestia/Loki/Eina/Bell/Ais, Familias y alertas iniciales de cronología.
- Fuentes primarias cotejadas: ninguna en esta tanda.
- Resultado: estructura y primeros resúmenes preliminares, no canon verificado.

## BATCH-DM-001 · Esqueleto cronológico y cobertura por categorías
- Estado: estructura creada; fuentes y contenido histórico siguen pendientes.
- Alcance: eras desde la historia antigua hasta el último volumen/final publicado; cronología AU separada; índices de personajes, Familias, deidades, lugares, reglas, monstruos, magia/equipo, misterios, acontecimientos y volúmenes; plantillas de personaje, evento, regla, lugar, volumen, Familia, era, misterio, relación, monstruo, habilidad/equipo y arco.
- Cobertura por eras: ERA-00 a ERA-10 y ERA-AU.
- Control de identidad: los IDs de fichas existentes se alinearon con los índices principales; candidatos futuros están en reservedIds para evitar crearlos dos veces.
- Catálogo actual: 15 registros con ficha, 76 IDs candidatos reservados y 52 documentos de apoyo indexados.
- Integridad estática realizada durante esta tanda: el JSON se pudo parsear; no se detectaron IDs duplicados entre registros reales ni colisión entre IDs reales y reservados; los IDs y rutas de documentos del catálogo fueron comprobados como únicos.
- Herramienta añadida: tools/check-catalog.mjs, comprobador sin dependencias externas para detectar IDs duplicados, colisiones de rutas, archivos ausentes, discrepancias entre frontmatter y catálogo y enlaces Markdown rotos. El script está guardado pero no se ejecutó contra un checkout local en esta sesión.
- Fuentes primarias cotejadas: ninguna en esta tanda.
- Resultado: ESQUELETO AMPLIO; no significa que toda la cronología o todos los datos canónicos estén completados.

## BATCH-DM-002 · Prioridad crítica: cronología y premisa del OC
- Estado: pendiente.
- [ ] Verificar la terminología oficial detrás de “Época Dorada”.
- [ ] Cotejar la cronología de Hestia y Bell en la fuente primaria.
- [ ] Cotejar el registro/asesoría de la Guild y la función de Eina.
- [ ] Aclarar qué significa “Loki lo llama Bell”.
- [ ] Registrar decisiones expresas del autor y no inferir overrides AU.
- [ ] Ejecutar el comprobador desde un checkout del repositorio y corregir errores reales.

## Plantilla para próximas tandas

### BATCH-DM-NNN · [alcance]
- Fecha:
- Estado: planned, in_progress, partial, cross_checked o approved.
- Fuentes examinadas:
- Localizadores revisados:
- Registros creados:
- Registros actualizados:
- Alias añadidos:
- Duplicados evitados/fusionados:
- Conflictos entre fuentes:
- Decisiones del autor:
- Datos sin verificar:
- Verificaciones ejecutadas:
- Evidencia:
- Próxima tanda:

## Regla
Una tanda se cierra por calidad y evidencia, no por cantidad de archivos. No transformar “redactado desde conocimiento general” en “verificado contra canon” por el mero hecho de subirlo a GitHub.