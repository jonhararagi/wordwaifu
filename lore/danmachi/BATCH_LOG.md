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

## DANMACHI-RESEARCH-001 · Era Oscura de Orario y personajes multiepoca

- Fecha: 2026-10-11
- Estado: partial; source_checked solo para declaraciones explícitas en páginas oficiales web.
- ID interno: DANMACHI-RESEARCH-001. La cadena BATCH-DM-003 del archivo se mantiene por instrucción; la cola ya reserva BATCH-DM-003 para ERA-00.
- Fuentes: cronología oficial, anuncio oficial de edición novelada, páginas GA Bunko de los volúmenes 1–3 y perfil oficial de personajes de la adaptación.
- Localizadores: bloques de sinopsis; «約七年前», «オラリオの暗黒期», «死の七日間» y nombres japoneses.
- Paquete creado: `research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md`.
- Afirmaciones registradas: DMR-001-CLM-001, DMR-001-CLM-002, DMR-001-CLM-003, DMR-001-CLM-004, DMR-001-CLM-005, DMR-001-CLM-006, DMR-001-CLM-007, DMR-001-CLM-008, DMR-001-CLM-009, DMR-001-CLM-010.
- Fuentes añadidas: DMR-001-SRC-001, DMR-001-SRC-002, DMR-001-SRC-003, DMR-001-SRC-004, DMR-001-SRC-005, DMR-001-SRC-006.
- Fichas y eventos canónicos modificados: ninguno.
- Índice maestro: enlace al paquete añadido.
- Catálogo: documento agregado para navegación.
- Cola: se precisó el término oficial y se añadió la tarea de seguimiento; no se reasignó BATCH-DM-003.
- Diferencias directas detectadas: ninguna; se distingue la Era Oscura de Orario de «Época Dorada» y de la historia antigua en general.
- Pendientes: lectura íntegra de novelas, localizadores internos, fechas absolutas/duración completa, secuencia Zeus/Hera, cronología Hestia/Bell, estados posteriores de Astrea/Alise y decisiones AU.
- Validador y Actions: [PASS en el SHA exacto a6c01dcc3bedb0f4127b6f9260435337a9323f05](https://github.com/jonhararagi/wordwaifu/actions/runs/38141893958). GitHub Actions terminó con estado completed/success; el texto íntegro de las novelas sigue pendiente.
- Próxima tanda: extraer eventos atómicos de *Astrea Record* 1–3 y luego investigar Hestia/Bell por separado.
- Veredicto: PARTIAL.

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

## DANMACHI-ORGANIZE-001 · Integración estructurada de la evidencia DMR-001

- Estado: parcial; integración documental completada a nivel de páginas oficiales consultadas.
- Fuente de entrada: [paquete DMR-001](research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md), publicado en `a6c01dcc3bedb0f4127b6f9260435337a9323f05`.
- Cambios: se incorporó la Era Oscura de Orario (término oficial **オラリオの暗黒期**) como franja histórica aproximada dentro de ERA-06; se mantuvo “Época Dorada” sin equivalencia inventada; se organizó *Astrea Record* en ERA-09 con separación entre novela publicada, evento original de DanMemo y perfiles del anime.
- Fichas nuevas: **CHAR-RYUU-LION**, **CHAR-ASTREA**, **CHAR-ALISE-LOVELACE**. Ryu tiene estados separados para CONT-AR y CONT-ANIME; Astrea y Alise solo tienen el estado que respaldan las sinopsis consultadas.
- Afirmaciones relacionadas: DMR-001-CLM-001 a DMR-001-CLM-010; los estados se enlazan a DMR-001-SRC-001 a DMR-001-SRC-006.
- IDs: los tres IDs de personajes se movieron de reservedIds a records; no se creó ningún evento atómico adicional porque las sinopsis aún no proporcionan detalle suficiente.
- Evidencia no alcanzada: texto íntegro de *Astrea Record* 1–3, localizadores internos de capítulos/páginas, rosters completos, destinos individuales y comparación exhaustiva entre juego, trilogía y adaptación.
- Validación de la tanda de investigación precedente: GitHub Actions #38141893958, SHA exacto `a6c01dcc3bedb0f4127b6f9260435337a9323f05`, success.
- Validación de esta integración: pendiente del nuevo commit.
- Resultado: datos mejor organizados y navegables; no equivale a canon completo ni a approved.
