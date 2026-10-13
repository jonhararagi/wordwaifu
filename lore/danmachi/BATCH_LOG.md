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

## DANMACHI-RESEARCH-002 · Psicología de personajes, cobertura multiepoca y retrieval

- Fecha: 2026-10-11
- Estado: partial.
- ID interno: DANMACHI-RESEARCH-002; el nombre de archivo BATCH-DM-004 se conserva, pero la cola reserva esa clave para ERA-01.
- HEAD preflight: `3553289c5eb60a716bcd5f4fbf893e28c262b0e3`; main se mantiene separado.
- Paquete creado: `research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md`.
- Perfiles ampliados: DM-CHAR-BELL, DM-CHAR-HESTIA, DM-CHAR-AIS, DM-CHAR-EINA, CHAR-RYUU-LION, CHAR-ASTREA, CHAR-ALISE-LOVELACE.
- Fichas individuales provisionales: CHAR-FINN-DEIMNE, CHAR-FREYA, CHAR-OTTAR; sus IDs pasan de reservedIds a records.
- Claims: DMR-002-CLM-001, DMR-002-CLM-002, DMR-002-CLM-003, DMR-002-CLM-004, DMR-002-CLM-005, DMR-002-CLM-006, DMR-002-CLM-007, DMR-002-CLM-008, DMR-002-CLM-009, DMR-002-CLM-010, DMR-002-CLM-011, DMR-002-CLM-012, DMR-002-CLM-013, DMR-002-CLM-014, DMR-002-CLM-015, DMR-002-CLM-016, DMR-002-CLM-017, DMR-002-CLM-018, DMR-002-CLM-019, DMR-002-CLM-020.
- Fuentes nuevas: DMR-002-SRC-001, DMR-002-SRC-002, DMR-002-SRC-003; para Ryu/Alise se reutilizan DMR-001-SRC-003/004.
- Auditoría real de código: la búsqueda actual opera sobre entidades de proyectos guardadas en IndexedDB y el respaldo local; no se encontró carga del corpus `lore/danmachi/` ni de `catalog.json`.
- Pruebas existentes inspeccionadas: `tests/browser_smoke.cjs` comprueba búsqueda textual de entidades de demo (“Mira”, “Puerto Umbría”) y búsqueda maestra en dos proyectos; no son pruebas del corpus DanMachi y no fueron ejecutadas durante esta tanda.
- Herramientas examinadas: SillyTavern, LlamaIndex, AnythingLLM y RAGFlow; los resultados y límites figuran en el paquete.
- No se añadieron dependencias ni se modificó el motor de aplicación.
- GitHub Actions #38146056803 para el commit sustantivo `58debfdafee9c12869ec95f7d55e550114c6a4d9`: `completed/success`, validador de catálogo y enlaces completado. La corrección documental de seguimiento genera una nueva ejecución y se verificará sobre su SHA exacto.
- Límite probatorio: páginas de adaptación y sinopsis editoriales; no se consultó el texto íntegro de las novelas ni se inventaron gustos/miedos/voz.
- Próximas prioridades: localizadores internos de novela; recuperación del corpus con metadatos y citas tras una tarea de implementación autorizada.
- Veredicto: PARTIAL.


## DANMACHI-RETRIEVAL-001 · Primera búsqueda local de evidencia

- Estado: implementación en rama de trabajo; validación por confirmar.
- Fuente única: los paquetes Markdown DMR-001 y DMR-002 y el catálogo existente; se evitan ficheros de índice redundantes.
- Interfaz: nueva sección Consulta de lore con filtros de personaje, continuidad, periodo, aspecto y spoiler. Los resultados exhiben texto del claim, ID, fuentes, localizadores, estado de verificación y nota de confianza.
- Los estados Ryu CONT-AR y CONT-ANIME se recuperan por separado; consultas sin evidencia como Ais + gustos devuelven abstención.
- Validación planificada: pruebas unitarias de recuperación y browser smoke en Chromium dentro de GitHub Actions.
- Límite: búsqueda textual con corpus parcial; sin LLM, embeddings ni RAG.


## DANMACHI-RESEARCH-007 · Red de Astrea Familia, tragedia y viaje de Ryu
- Estado: PARTIAL. Paquete: [BATCH-DM-007](research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md).
- Añadido: 11 perfiles ampliados en el grafo: 7 integrantes históricos (incluida Mariyu/Maryuu normalizada a un solo ID), 4 integrantes de la nueva generación y rasgos oficiales añadidos a Alise, Kaguya, Lyra y Astrea, 26 afirmaciones con IDs, fuentes, continuidad y nivel de spoiler.
- Fuentes: perfiles oficiales de DanMachi IV/V y sinopsis editorial de Familia Chronicle: Episode Ryuu 2; la orden de Astrea de que Ryu permanezca en la Ciudad Forjadora de Espadas ya está respaldada por la sinopsis editorial. Juggernaut, memorial y Solingen permanecen marcados como datos secundarios por verificar.
- Integración: `src/lore-corpus.js` carga el nuevo lote y las fichas; `src/character-archive.js` amplía relaciones, cronología, momentos y expedientes de Ryu/Astrea.
- QA: prueba de navegador actualizada para recorrer Ryu → Iska Bra → volver a Ryu y verificar los vínculos Ryu–Alise/Kaguya/Lyra en la continuidad del anime. Resultado de CI pendiente; las pruebas de índice/relaciones se ejecutaron en el entorno de integración. La validación Playwright de GitHub Actions no está confirmada.
- Límite: no se consultaron íntegramente los volúmenes; la investigación global de DanMachi sigue PARTIAL.


## DANMACHI-RESEARCH-008 · Mapa provisional de volúmenes 1–21

- Resultado: dossiers de orientación en `volumes/main/volume-01.md` a `volume-21.md` y un archivo con 21 afirmaciones para recuperación.
- Integración: `src/lore-corpus.js` carga el lote para búsqueda por personaje, continuidad, periodo y aspecto.
- Estado: `provisional_summary`; no se presenta como cotejo completo de la novela ni como final de la serie.
- Pendiente: eventos atómicos y localizadores internos en la edición primaria.


## DANMACHI-RESEARCH-009 · Líneas paralelas y crónicas

- Dossiers: Astrea Record I–III, Sword Oratoria 1/12/13 y Familia Chronicle de Ryu, Ryu II, Freya, Asfi y Haze.
- Integración: 11 afirmaciones añadidas a `src/lore-corpus.js`; búsqueda cubierta por pruebas.
- Estado: `provisional_summary`; faltan localizadores de capítulo, cronología atómica y cotejo individual de relaciones.


## Misión de integración · navegación inversa y recuperación de términos

- Rama: `work/story-completion-danmachi-audit-2026-10`.
- Cambios: `src/character-archive.js` deriva enlaces de navegación inversos a partir de las relaciones con evidencia existentes; `tests/test_character_archive.cjs` comprueba Ryu ↔ Kaguya, ausencia de destinos duplicados y evidencia; `src/lore-corpus.js` permite recuperar `venganza`/`vengar`/`vengarse` como variantes explícitas; `tests/test_lore_corpus.cjs` ajusta la búsqueda del reencuentro para usar términos presentes en la afirmación.
- Continuidad y procedencia: las aristas se siguen mostrando únicamente cuando hay afirmaciones de la continuidad seleccionada y estas superan el filtro de spoilers. La relación inversa se identifica como navegación, no como una nueva afirmación canónica simétrica.
- Estado de validación: JavaScript y pruebas de lore/personajes han pasado en GitHub Actions en la revisión actual; los trabajos de navegador y validación de estructura todavía deben terminar antes de cerrar esta tanda.
- Límite: esto mejora la navegación del archivo de personajes, pero no termina la migración de relaciones a datos independientes ni habilita aún un explorador genérico de Familias, lugares, eventos, objetos y conceptos.


## DANMACHI-RESEARCH-010 · Expediente ampliado de Familia Hestia

- **Estado:** PARTIAL; expediente de organización ampliado con hechos editoriales trazables y límites de continuidad explícitos.
- **Archivos:** `familias/hestia-familia.md`; registro de fuentes `sources/00-registro-fuentes.md`.
- **Fuentes nuevas:** perfil oficial de personajes de DanMachi IV y sinopsis oficial del episodio 1. Registradas como `DMR-004-SRC-001` y `DMR-004-SRC-002`, con URLs, localizadores de sección, continuidad, afirmaciones apoyadas y límites.
- **Contenido incorporado:** estado de apertura con Bell como único miembro descrito por la sinopsis del episodio; instantánea del roster en la adaptación; funciones descritas de Hestia, Bell, Liliruca, Welf, Mikoto y Haruhime; dinámica narrativa, límites para escenas, reglas para modelar cambios de roster y campos que siguen desconocidos.
- **Control de continuidad:** los perfiles de DanMachi IV permanecen en `CONT-ANIME`; no se usan para afirmar sin cotejo que cada detalle aparece igual en `CONT-MAIN-LN`. No se inventan fechas absolutas, niveles entre temporadas, cantidades económicas ni localizadores de novela.
- **QA pendiente al registrar esta tanda:** ejecución del validador de catálogo, pruebas de lore y prueba de navegador tras el último commit; la CI debe confirmarse por ejecución.
- **Próximo lote:** ampliar expedientes de Familias y personajes centrales con la misma estructura de afirmaciones, relaciones, estado temporal y fuentes; priorizar cotejo de novela ligera por volumen/capítulo.


## DANMACHI-RESEARCH-011 · Expediente ampliado de Familia Loki

- **Estado:** PARTIAL; organización, liderazgo y relaciones descritos desde una fuente oficial de adaptación.
- **Archivos:** `familias/loki-familia.md`; `sources/00-registro-fuentes.md`; `research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md`; `catalog.json`.
- **Fuente:** página oficial de personajes de *Sword Oratoria*, registrada como `DMR-005-SRC-001`.
- **Afirmaciones:** ocho IDs de claim para Loki, Finn, Riveria, Gareth, Ais, Lefiya, Tiona, Tione, Bete y Raul; las afirmaciones de la misma sección se agrupan cuando comparten evidencia y continuidad.
- **Integración:** el expediente de Familia Loki ahora contiene estructura de mando, snapshot de roster, relaciones explícitas, pautas para escribir escenas y reglas para registrar el ingreso del OC como divergencia AU.
- **Límites:** `CONT-SO` no se trata como prueba automática de cada estado de `CONT-MAIN-LN`; membresías históricas, localizadores de novela y cronología de expediciones siguen pendientes.
- **QA:** el validador de catálogo y la nueva prueba del expediente Hestia se añadieron al workflow `Validate WordWaifu`; ejecución de CI para el último commit pendiente al momento de registrar este lote.
- **Siguiente paso:** repetir la extracción por eventos para el roster histórico de Loki Familia y ampliar Astrea Familia sin convertir afiliación compartida en amistad inferida.


## DANMACHI-RESEARCH-012 · Expediente histórico de Familia Astrea

- **Estado:** PARTIAL; ficha de organización creada e indexada con fuentes editoriales oficiales y perfiles de adaptación separados.
- **Archivos:** `familias/astrea-familia.md`; `research/inbox/DANMACHI-RESEARCH-012-astrea-familia-dossier.md`; `catalog.json`; `sources/00-registro-fuentes.md`; `MASTER_INDEX.md`.
- **Fuentes:** sinopsis oficiales de *Astrea Record* I–III y perfiles oficiales de DanMachi IV ya registrados en el registro maestro.
- **Afirmaciones:** cuatro claims con IDs para la referencia temporal relativa, Astrea como guía, Alise como capitana y el impacto del conflicto histórico sobre el sentido de justicia de Ryu.
- **Calidad:** no se afirma que el roster histórico esté completo. Kaguya y Lyra permanecen como pistas secundarias en un paquete separado. Afiliación no se convierte en amistad; no se inventan edades, niveles ni destinos.
- **Límite:** sinopsis editoriales no reemplazan localizadores internos de los volúmenes; el resultado sigue parcial y las continuidades CONT-AR/CONT-ANIME se conservan separadas.
- **QA:** pendiente la ejecución final de CI para este commit y la extensión de las pruebas de procedencia a los tres expedientes de Familia.
- **Siguiente paso:** mapear cada integrante y evento de Astrea Record por volumen/escena cuando se disponga de los textos, y ampliar el grafo de relaciones con periodos y fuentes.


## DANMACHI-RESEARCH-013 · Integración de los tres expedientes de Familia en búsqueda global

- **Alcance:** conectar los nuevos expedientes de Hestia, Loki y Astrea con el recuperador de WordWaifu; evitar que los documentos queden únicamente como Markdown.
- **Integración de código:** `src/lore-corpus.js` ahora carga los paquetes DANMACHI-RESEARCH-010, 011 y 012 y expone los dos nuevos directorios oficiales de fuente (perfiles de Sword Oratoria y sinopsis del episodio 1).
- **Afirmaciones recuperables:** 18 claims con IDs estables, IDs de personajes cuando hay una entidad registrada, continuidad, aspecto, fuente, localizador, URL, estado de verificación y nota de confianza.
- **Pruebas:** `tests/test_lore_corpus.cjs` incluye búsquedas por el estado inicial de Hestia Familia, liderazgo de Loki Familia y capitanía de Alise en Astrea Familia; los conteos esperados se actualizan a 88 claims de fuente y 91 entradas tras las expansiones de continuidad existentes.
- **Integridad:** `tests/test_danmachi_family_dossier.cjs` comprueba profundidad mínima, referencias, claims, continuidades y entradas de catálogo para los tres expedientes. `validate.yml` ejecuta el validador de catálogo y esta prueba.
- **Incidencia detectada y corregida durante CI:** una primera ejecución reveló IDs de claim duplicados/mal asignados en los campos de recuperación; se corrigieron en los tres paquetes antes de la siguiente validación.
- **Estado final de CI:** pendiente de confirmar en la ejecución correspondiente al último commit; no declarar la misión global completa por este lote.
