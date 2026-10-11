# Registro de tandas de lore

## BATCH-DM-000 · Protocolo y semilla inicial
- Estado: guardada en feature/danmachi-lore-poc.
- Alcance: plantilla de lore, protocolo de revisión, premisa del OC, primeras fichas generales de Orario/Falna/Dungeon, Hestia/Loki/Eina/Bell/Ais, Familias y alertas iniciales de cronología.
- Fuentes primarias cotejadas: ninguna en esta tanda.
- Resultado: estructura y primeros resúmenes preliminares, no canon verificado.

## BATCH-DM-001 · Esqueleto cronológico y catálogo
- Estado: DONE como estructura documental.
- Alcance: ERA-00 a ERA-10 y ERA-AU; índices de personaje, Familia, lugar, regla, deidad, monstruo, misterio, magia/equipo, eventos, volúmenes y arcos; matriz de continuidad; plantillas; cola de tareas; registro de fuentes; control de duplicados; registro por tanda; 6 candidatos de eventos de canon y 4 eventos AU propuestos con fichas individuales.
- Volúmenes: 20 plantillas individuales iniciales (volume-01.md a volume-20.md). No se afirma que sean todos los volúmenes publicados ni que el volumen 20 sea el último; la bibliografía decidirá cuántas plantillas adicionales crear.
- Plantillas: personaje, evento, regla, lugar, volumen, Familia, era, misterio, relación, monstruo, habilidad/equipo, arco y capítulo/escena.
- Catálogo actualizado desde el árbol recursivo de GitHub: 103 archivos de lore rastreados, 26 registros con ficha, 76 IDs candidatos reservados y 77 documentos de apoyo indexados.
- Control estructural: catálogo JSON parseado; 26 IDs de registro, 76 IDs reservados, 77 IDs documentales y rutas comprobados como únicos en la última sincronización; ningún ID real se solapa con un ID reservado; todos los 103 archivos de lore quedan contabilizados en records o documents.
- Validador: `tools/check-catalog.mjs`, sin dependencias externas; valida catálogo, rutas, IDs en frontmatter, colisiones de IDs reservados, y enlaces Markdown.
- **PASS_REAL:** [GitHub Actions #38137112591](https://github.com/jonhararagi/wordwaifu/actions/runs/38137112591) para la versión anterior de la estructura.
- **Estado de la última estructura ampliada:** pendiente de que termine la ejecución nueva de CI, disparada por los commits posteriores.
- Fuentes primarias cotejadas: ninguna en esta tanda; los seis eventos de canon están marcados pending_verification y los cuatro de AU como proposed_author_event.
- Resultado: ESQUELETO AMPLIO, NAVEGABLE Y CON EVENTOS CANDIDATOS; no significa que la cronología ni el canon estén completos.

## BATCH-DM-002 · Verificación prioritaria para la premisa del OC
- Estado: pendiente.
- [ ] Identificar el término exacto detrás de “Época Dorada” con referencia de fuente; no convertirlo en nombre canónico por intuición.
- [ ] Cotejar la cronología de Hestia y Bell en la fuente primaria.
- [ ] Cotejar el papel de Eina, el registro en la Guild y la entrada al Dungeon.
- [ ] Aclarar qué significa que Loki llame “Bell” al OC.
- [ ] Registrar decisiones expresas del autor, distinguiendo propuesta de override AU aceptado.
- [ ] Verificar el último volumen principal publicado cuando se aborde ERA-10.

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
- Validador ejecutado y resultado:
- Evidencia:
- Próxima tanda:

## Regla
Una tanda se cierra por calidad y evidencia, no por cantidad de archivos. No transformar “redactado desde conocimiento general” en “verificado contra canon” por el mero hecho de subirlo a GitHub.