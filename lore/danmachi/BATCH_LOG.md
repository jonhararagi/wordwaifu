# Registro de tandas de lore

## DANMACHI-COVERAGE-008 — seguimiento de acceso primario al relato de Rakta (2026-10-17)

- **Estado:** IN_PROGRESS; no se leyó el relato en texto primario.
- **Hallazgo nuevo:** Suruga-ya identifica un folleto de 4 páginas de Gamers para *Sword Oratoria* vol. 12 con el título «花束の代わりに捧ぐ狼の咆哮» (DMR-023-SRC-003). Es metadato secundario, no evidencia del contenido.
- **Ruta oficial:** la ficha de SB Creative para 掌編集２ enlaza una muestra «試し読み», pero el destino devolvió error 500/no accesible mediante la herramienta web (DMR-023-SRC-004). No se obtuvieron páginas legibles.
- **Dictamen:** la escena de Rakta, Gareth y Bete sigue como referencia secundaria pendiente; no se confunde con el reporte de piso 37 del vol. 2.
- **Pendiente:** acceder a la muestra desde navegador autorizado o consultar copia legítima de la recopilación; cotejar por separado el vol. 2.
- **Pruebas locales:** NOT_RUN; CI del HEAD actual en curso/por comprobar.
- **main:** sin cambios; sin merges ni operaciones de PR.

---


## DANMACHI-COVERAGE-007 · Auditoría de fuentes candidatas para Elfy Colette (2026-10-17)

- **Estado:** IN_PROGRESS; no se verificó biografía individual en texto primario.
- **Rama / HEAD base:** work/story-completion-danmachi-audit-2026-10 / 0174743fce8e398b987d5779b404a0977ec904f4.
- **Fuentes:** DMR-024-SRC-001 (ficha editorial oficial de DanMachi vol. 10), DMR-024-SRC-002 (ficha editorial oficial de Sword Oratoria vol. 6) y DMR-024-SRC-003 (listado/muestra BOOK☆WALKER de SO6; extracción fallida).
- **Resultado:** las dos sinopsis oficiales aportan contexto de sus volúmenes, pero no nombran a Elfy Colette/Lomoire ni respaldan sus rasgos individuales. El visor de muestra devolvió “Could not download. Please check your network connection.” No se leyeron páginas; el error no es evidencia de ausencia en el libro.
- **Dossier:** CHAR-LOKI-ELFY-COLETTE mantiene el mismo ID y el estado secondary_reference_primary_locator_pending. Se retiró CONT-ANIME porque esta tanda no verificó una fuente de adaptación para esta identidad. Alias, magia de fuego, personalidad y relación con Lefiya siguen explícitamente secundarios.
- **Catálogo:** 134 records / 112 documentos. La cantidad describe estructura, no completitud.
- **Pendiente:** cotejo directo de edición autorizada y localizador de capítulo/página; no inventar lectura japonesa/romaji del alias.
- **main:** sin cambios; sin merges ni operaciones de PR.


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
- **Pruebas:** `tests/test_lore_corpus.cjs` incluye búsquedas por el estado inicial de Hestia Familia, liderazgo de Loki Familia y capitanía de Alise en Astrea Familia; los conteos esperados se actualizan a 89 claims de fuente y 92 entradas tras las expansiones de continuidad existentes.
- **Integridad:** `tests/test_danmachi_family_dossier.cjs` comprueba profundidad mínima, referencias, claims, continuidades y entradas de catálogo para los tres expedientes. `validate.yml` ejecuta el validador de catálogo y esta prueba.
- **Incidencia detectada y corregida durante CI:** una primera ejecución reveló IDs de claim duplicados/mal asignados en los campos de recuperación; se corrigieron en los tres paquetes antes de la siguiente validación.
- **Continuidad:** una afirmación que mezclaba el papel histórico de Astrea con su perfil de anime se dividió en dos claims independientes (`DMR-006-CLM-002` en `CONT-AR` y `DMR-006-CLM-005` en `CONT-ANIME`); el test de navegador había detectado la mezcla y ahora el modelo conserva una continuidad por afirmación.
- **Estado final de CI:** pendiente de confirmar en la ejecución correspondiente al último commit; no declarar la misión global completa por este lote.


## DANMACHI-RESEARCH-011 · Ancla cronológica oficial y límite bibliográfico de la saga principal
- Fecha de consulta: 2026-10-13
- Estado: source_checked para cronología oficial y metadatos editoriales; el cotejo capítulo por capítulo del volumen 21 sigue pendiente.
- Paquete de evidencia: se añadió una sección con tres afirmaciones atómicas al [mapa narrativo de volúmenes principales](research/inbox/BATCH-DM-008-main-story-volume-map.md).
- Fuentes: cronología oficial de DanMachi; fichas oficiales GA Bunko de los volúmenes 21 y 22.
- Hallazgo cronológico: *Astrea Record* se presenta como situado siete años antes y dentro de la Era Oscura de Orario; es una ancla relativa, no una cronología absoluta de toda la historia antigua.
- Hallazgo bibliográfico: volumen 21 publicado aproximadamente el 2025-10-15; volumen 22 anunciado para 2026-12-15, fecha futura respecto de la consulta.
- Afirmaciones: DMR-011-CLM-001 a DMR-011-CLM-003.
- Fuentes registradas: DMR-011-SRC-001 a DMR-011-SRC-003.
- Resultado: ERA-10 ya puede indicar que el volumen 21 es el último publicado comprobado y que el final canónico sigue pendiente; no se declara finalizada la serie.
- Pendientes: verificar el lanzamiento efectivo del volumen 22 después de la fecha anunciada y cotejar el volumen 21 por capítulo/escena.


## DANMACHI-RESEARCH-014 · Atomización de la sinopsis editorial del volumen 21
- Fecha de consulta: 2026-10-13
- Fuente consultada: ficha oficial de GA Bunko del volumen 21, https://ga.sbcr.jp/product/9784815632946/.
- Cambios: se añadieron DMR-008-CLM-022 a DMR-008-CLM-024 para separar la expedición fallida y el piso 60, la movilización de Orario y el regreso de Bell con la noticia.
- Recuperación: los tres claims quedan enlazados al registro de fuente DMR-011-SRC-002 y se añadieron pruebas de búsqueda por tema.
- Conteos esperados: 95 afirmaciones de fuente y 98 entradas.
- Límite: la fuente es la sinopsis editorial; no se inventaron capítulos, páginas, supervivientes completos ni secuencia interna. El cotejo del texto íntegro sigue pendiente.


## DANMACHI-RESEARCH-015 · Cotejo del fragmento público del volumen 21
- Se inspeccionó el lector público oficial enlazado desde GA Bunko: tabla de contenidos, prólogo y apertura del capítulo «一章　アイズＳＯＳ».
- Se añadieron dos paráfrasis de evidencia primaria limitada al fragmento visible; no se inventaron números de página.
- Se distingue la sinopsis editorial del texto de muestra; el volumen completo sigue pendiente de cotejo capítulo por capítulo.
- Fuente: https://ga.sbcr.jp/product/9784815632946/ · https://ul.sbcr.jp/GA-aIMd4 · https://r.voyager.co.jp/epm/e1_535248_22082025135526/


## DANMACHI-RESEARCH-016 · Ancla oficial para Zeus/Hera y dos Grandes Misiones
- **Fuente:** prueba oficial de conocimiento de DanMachi, pregunta 1, https://danmachi.com/center-test/normal.html.
- **Afirmación:** DMR-008-CLM-027 registra que la respuesta oficial identifica a Zeus Familia y Hera Familia conjuntamente como quienes derrotaron a Behemoth y Leviathan.
- **Límite:** no se infiere qué Familia derrotó a qué monstruo, el momento de la caída de ambas Familias ni el resultado contra el Dragón Negro.
- **QA:** se amplían los conteos esperados del corpus a 98 afirmaciones y 101 entradas y se añade una prueba de recuperación.


## DANMACHI-RESEARCH-017 · Registro de evento para las victorias de las Tres Grandes Misiones
- Se creó `events/candidates/EVT-DM-GREAT-QUESTS-001.md` para separar el hecho respaldado (resultado conjunto contra Behemoth y Leviathan) de la cronología que sigue desconocida.
- Se enlazó con `DMR-008-CLM-027` y `DMR-011-SRC-005`, el candidato de expedición contra el Dragón Negro y el candidato de caída de Zeus/Hera.
- Se añadió al catálogo y a los índices de eventos y cronología. No se marcó como evento completo/verificado en todos sus detalles.

## DANMACHI-RESEARCH-018 · Pista temporal del Dragón Negro
- **Edición oficial identificada:** GA Bunko, volumen principal 15, ISBN 978-4-7973-9622-5, https://ga.sbcr.jp/product/9784797396225/.
- **Pista no editorial:** una búsqueda textual encontró en el volumen 15 una intervención de Alise que menciona cinco años desde el fracaso de Zeus/Hera contra el Dragón Negro. La copia consultada no se registra como edición autorizada ni como localizador final.
- **Cruce temporal provisional:** la cronología oficial sitúa *Astrea Record* aproximadamente siete años antes de la llegada de Bell (https://danmachi.com/chronology/). Si el pasaje del volumen 15 comparte ese marco, la derrota sería aproximadamente doce años antes de Bell. No es todavía un hecho canónico registrado: depende de confirmar la escena y su ancla.
- **Límite:** la ficha editorial identifica la edición, no demuestra el contenido del pasaje. Sin año absoluto, sin fecha exacta y sin fusionar la derrota con la caída/expulsión de las Familias.
- **Paquete de trabajo:** `research/inbox/BATCH-DM-009-black-dragon-relative-chronology.md`.


## DANMACHI-RESEARCH-020 · Primer expediente navegable de ubicación: Dungeon

- Se añadió `places/dungeon.md`, con una descripción original de la función del Dungeon, relaciones internas hacia Orario, Guild, Bell y Hestia, reglas de continuidad y tareas de investigación pendientes.
- Se registró `DMR-012-SRC-001`: ficha editorial oficial de GA文庫 para el volumen principal 1, consultada el 2026-10-14. Su alcance se limita al marco general de Orario, el laberinto subterráneo y la premisa de Bell/Hestia; no prueba detalles de pisos, reglas o escenas no descritas.
- Se añadió `LOC-DUNGEON` al catálogo estructurado y al índice de lugares, retirándolo de `reservedIds` para evitar una colisión entre ID reservado y registro activo.
- Estado: PARTIAL. Los pisos, accesos, topología detallada, monstruos y reglas de expedición siguen pendientes de cotejo con fuentes por volumen/capítulo.


## DANMACHI-COVERAGE-004 · Matriz de cobertura del roster de Loki
- Se añadió a `familias/loki-familia.md` una matriz que separa perfiles oficiales de adaptación, secundarios con leads de novela pendientes, roster terciario y personajes manga/juego.
- La matriz enlaza expedientes existentes y fija una cola de cotejo por volúmenes 4, 2, 10/Sword Oratoria 6 y Sword Oratoria 7. No se crearon IDs nuevos ni se promovieron claims secundarios a canon confirmado.
- Estado: PARTIAL. Próximo objetivo de contenido: cotejar un pasaje de volumen 4 para Aki/Narfi/Cruz y convertirlo en relaciones atómicas con localizador, si el texto accesible permite verificarlo.

## DANMACHI-COVERAGE-005 · Auditoría de procedencia de Sword Oratoria, volumen 4 (2026-10-17)

- **Estado:** PARTIAL; la sinopsis editorial oficial fue cotejada, pero no se abrió ni verificó el pasaje individual del briefing de expedición.
- **Fuente añadida:** `DMR-022-SRC-001`, GA Bunko, `https://ga.sbcr.jp/product/9784797383126/`, edición japonesa del volumen 4, ISBN 978-4-7973-8312-6. Alcance: metadatos editoriales y sinopsis que sitúa la expedición y el desafío al área inexplorada del piso 59.
- **Reparación:** Aki ya no declara que su escena del campamento tenga un localizador primario identificado; su enlace al alias se mantiene como secundario. Alicia ya no cita el perfil de adaptación ni la página de Soma Familia como apoyo de una escena de Sword Oratoria; la escena permanece como pista interna pendiente.
- **Navegación:** el índice de personajes etiqueta de nuevo el estado de Aki y añade un enlace visible para Alicia Forestlight, con aviso de verificación pendiente.
- **Catálogo estructurado:** se sincronizaron los estados de `CHAR-LOKI-AKI` y `CHAR-LOKI-ALICIA-FORESTLIGHT` en `catalog.json` con los expedientes degradados; no quedan marcados como localizador primario identificado.
- **Nombres:** Narfi/Narvi Roll y Cruz/Cruz Bussell siguen con una sola ficha por identidad candidata; sus nombres/afiliaciones proceden de fuentes comunitarias, no de una lectura cotejada del briefing.
- **IDs de personajes:** 0 nuevos; no se duplican personas. Se añade un documento de investigación `RESEARCH-DM-022` al catálogo.
- **Pruebas locales:** NOT_RUN. La aceptación depende de ambos workflows sobre el SHA funcional y, después, el SHA del checkpoint documental final.
- **Conclusión probatoria:** se corrigió la trazabilidad defectuosa; **no** se declara cotejado el briefing individual ni completa la cobertura de Loki.
- **Siguiente paso:** abrir una edición autorizada o muestra pública que contenga el briefing y guardar localizadores reales. Si no está disponible, continuar con otra fuente primaria accesible sin inventar detalles.

## DANMACHI-COVERAGE-005b · Carrera asíncrona al eliminar referencias visuales (2026-10-17)

- El workflow `Validate WordWaifu` en `e27769b168d4ebb12e60aa3245eae04d271b3336` falló en `tests/browser_smoke.cjs:610`: una espera no observó desaparecer una referencia eliminada del DOM dentro de 5 segundos. El workflow DanMachi Lore and Retrieval Integrity pasó en ese mismo SHA.
- La lectura del test y `src/danmachi-visual-references.js` reveló que varias fichas (acontecimiento/lugar) renderizan en paralelo mientras se consulta almacenamiento local. Una renderización iniciada antes de invalidar la caché podía terminar después y reinsertar una tarjeta obsoleta.
- Corrección: las funciones `renderInto` y `renderGeneral` capturan `localReferenceVersion` y descartan la respuesta renderizada si la versión cambió durante el `await`. Se conserva la prueba de humo integral que exige que el recurso borrado desaparezca de todas las vistas.
- Estado: corrección de código publicada en `eefd4ae5e0d6d81d244ae9efe324d14c4e480cf7`; ambos workflows PASS_CI en el SHA exacto. No se cambiaron los datos de lore ni las continuidades.
- **Muestra pública:** BOOK☆WALKER, vista de 30 páginas iniciales, revisada en https://viewer-trial.bookwalker.jp/03/21/viewer.html?cid=46a7007a-c3c7-4804-ab0d-c23beba67739&cty=0. El visor no llega al briefing y no expone los nombres buscados. Se registra como `DMR-022-SRC-002`; no es prueba negativa sobre el volumen completo.
- **Fix de renderizado:** la corrección anti-render obsoleto está en `eefd4ae5e0d6d81d244ae9efe324d14c4e480cf7`. Validate WordWaifu #1541 SUCCESS (https://github.com/jonhararagi/wordwaifu/actions/runs/39011017441) y DanMachi Lore and Retrieval Integrity #799 SUCCESS (https://github.com/jonhararagi/wordwaifu/actions/runs/39011017430), ambos en el SHA exacto `eefd4ae5e0d6d81d244ae9efe324d14c4e480cf7`.

## DANMACHI-COVERAGE-006 · Separación de las dos escenas reportadas de Rakta Haze (2026-10-17)

- **Estado:** PARTIAL; se corrigió una mezcla de escenas basada en resúmenes secundarios. Ninguna de las dos escenas se cotejó en el texto completo.
- **Hallazgo:** la escena de Rakta escondiéndose detrás de Gareth ante Bete se atribuye por una referencia comunitaria a «A Wolf's Roar Offered Instead of a Bouquet» (花束の代わりに捧ぐ狼の咆哮), historia corta promocional asociada a *Sword Oratoria* vol. 12; el contexto reportado es el cementerio de aventureros antes del segundo asalto a Knossos. No debe confundirse con el reporte diferente de la expedición al piso 37 en el volumen 2.
- **Fuentes añadidas:** `DMR-023-SRC-001`, referencia comunitaria (https://danmachi.fandom.com/wiki/A_Wolf%27s_Roar_Offered_Instead_of_a_Bouquet); `DMR-023-SRC-002`, ficha oficial de `掌編集２`, ISBN 978-4-8156-1967-1 (https://www.sbcr.jp/product/4815619671/). La editorial confirma el alcance general de la recopilación, pero no verifica el relato individual.
- **Contenido cambiado:** `characters/rakta-haze.md` separa Momento A (vol. 2/piso 37) y Momento B (historia corta asociada al vol. 12); elimina `CONT-ANIME` sin evidencia independiente; limita relaciones con Gareth/Bete a la escena reportada.
- **Investigación:** se corrigió `DMR-015-CLM-002` y se añadió `DMR-023-CLM-001` (resumen secundario de la historia extra) y `DMR-023-CLM-002` (alcance editorial de la recopilación).
- **Catálogo:** 134 registros; se añadió `RESEARCH-DM-023`, para un total de 111 documentos. No se crearon IDs de personaje ni claims de canon primario confirmados.
- **Siguiente verificación primaria:** revisar el texto/índice de `掌編集２` y revisar aparte *Sword Oratoria* vol. 2 para el piso 37. No inventar capítulos/páginas ni fusionar las escenas.
- **Pruebas locales:** NOT_RUN. Validar el SHA final con ambos workflows. La enciclopedia global permanece PARTIAL; trabajo IN_PROGRESS.

