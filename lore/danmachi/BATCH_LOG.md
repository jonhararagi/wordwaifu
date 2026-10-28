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


## DANMACHI-RESEARCH-021 · Loki Familia y arcos con evidencia editorial (2026-10-18)

- Activadas fichas individuales para Riveria Ljos Alf, Gareth Landrock, Lefiya Viridis, Tiona Hiryute, Tione Hiryute, Bete Loga y Raul Nord, todas con alcance provisional de adaptación CONT-SO.
- Se añadieron relaciones explícitas para capitanía/vicecapitanía, pertenencia, vínculo de gemelas, amistad descrita por la fuente, admiración, interés romántico no recíproco por inferencia, y mando delegado de Finn a Raul. Cada arista apunta a una afirmación en DANMACHI-RESEARCH-011-loki-familia-dossier.md.
- Se registró DMR-005-SRC-002, la sinopsis editorial oficial de Sword Oratoria 14 (https://ga.sbcr.jp/product/9784815614348/). El mapa creado enumera solo lo que afirma la sinopsis y deja la secuencia de los capítulos por verificar.
- Se creó el mapa ARC-MAIN-21-RESCATE-PISO-60 con la sinopsis oficial y una muestra pública del texto. El volumen 21 no se presenta como cierre de la obra.
- El validador y las pruebas de corpus comprueban la activación de personajes y la existencia de relaciones ancladas a claims. El smoke de navegador comprueba el camino de Familia Loki a la ficha de Riveria y el retorno al expediente.
- **Pendiente factual:** el resto del texto íntegro de las novelas, localizadores primarios, orden exacto de las escenas y todos los caminos temporales continúan fuera del alcance de este lote.


## DANMACHI-RESEARCH-028 · Integración de pistas comunitarias de Astrea (2026-10-19)

- Se consultaron páginas de DanMachi Wiki sobre Astraea Familia, Gojouno Kaguya, Lyra, Alise Lovell, Timeline y la ficha española de Ryuu Lion.
- Se creó `research/inbox/DANMACHI-RESEARCH-028-astrea-wiki-leads.md` con diez afirmaciones atómicas y URL/localizador de cada página. Se añadieron seis registros de fuente secundaria al registro maestro.
- Se ampliaron las fichas de Kaguya y Lyra con biografía, valores, magia/equipo reportados por la comunidad, evitando copiar textos de la wiki y conservando una advertencia visible sobre la falta de localizador primario.
- Se amplió la ficha de Astrea Familia con pistas sobre su función pública, la emboscada/Juggernaut, intervalos cronológicos relativos y la nueva generación. Se distinguen los datos que solo atribuye la wiki de los que la sinopsis oficial de GA Bunko corrobora parcialmente.
- Se añadió el documento al catálogo y al cargador del buscador, y se añadieron tres aristas secundarias: desacuerdo moral Kaguya–Ryu, pertenencia reportada de Lyra y función histórica de Astrea Familia en Orario.
- Se añadieron regresiones para recuperación de datos de Kaguya y Lyra, estado secundario, URL de fuente y navegación de relaciones. La ejecución de CI queda pendiente de comprobar después de abrir la Pull Request.
- **Resultado factual deliberado:** ninguna de estas diez afirmaciones se eleva a canon confirmado. Prioridad de verificación: pasaje primario de la caída/Juggernaut, escena del desacuerdo Kaguya–Ryu, historia y capacidades de Lyra, estadísticas de Alise y datos de la nueva generación.

## DANMACHI-RESEARCH-028 · Ampliación de fichas de Astrea Familia desde wikis (2026-10-19)
- Se añadieron los claims DMR-028-CLM-011 a DMR-028-CLM-022 sobre Celty, Iska, Maryuu, Asta, Neze, Noin y Ryana.
- Se registraron cuatro fuentes comunitarias con URL y localizadores concretos: fichas de Celty e Iska, la página agregadora Minor Characters y el resumen de Ryuu para nombres/efectos de magias.
- Se enriquecieron siete fichas existentes y se añadieron dos aristas explícitas de Celty con Ryana y Ryuu, ambas con continuidad CONT-AR, claim de apoyo y estado secondary_checked.
- Se incorporaron las fuentes al directorio del buscador y regresiones para retrieval, URLs, estado de evidencia y navegación relacional.
- **Límite:** las wikis sí dan más detalles que las fichas promocionales breves, pero siguen siendo fuentes secundarias. No se aprobaron niveles, costes, escenas ni capacidades como canon primario; siguen pendientes sus localizadores en el texto original.

## INTEGRATION-BATCH-001 · Cronología tipada y panel histórico en la enciclopedia (2026-10-19)
- Se recuperó el módulo de timeline, su dataset versionado, validador y pruebas desde la rama de investigación; se mantiene el modelo explícito de tiempos relativos y se prohíben fechas absolutas inventadas.
- Se incorporaron 8 fichas de evento, 7 fichas individuales y la ficha única de Juggernaut, más 16 registros en el catálogo existente. No se modificaron ni eliminaron los registros de main para hacerles sitio.
- Se montó el panel dentro de la enciclopedia DanMachi con árbol de eras, lista de sucesos, filtro de continuidad, búsqueda y esquema relacional sin coordenadas geográficas falsas.
- Se añadieron pruebas para comprobar el montaje HTML, la carga del módulo y la presencia de los estilos, además de sumar validación temporal al workflow de integridad.
- Estado de evidencia preservado: T−7/T−5 se mantienen aproximados, T0 es ancla relativa, y los claims con cotejo primario pendiente conservan su estado provisional.
- El lote se debe fusionar únicamente tras Validate WordWaifu, DanMachi Lore and Retrieval Integrity, test_danmachi_timeline.cjs y check-timeline.mjs en verde.
## INTEGRATION-BATCH-001B · Reparación de procedencia histórica (2026-10-19)
- Se detectó que algunas fichas de la Era Oscura reutilizaban claims DMR-014 de personajes de Loki Familia; se corrigieron las referencias para que correspondan a las entidades descritas.
- Se importó la investigación de Zeus/Hera y se registraron sus seis fuentes comunitarias como bloque separado.
- Se creó DMR-029 con cinco claims secundarios y 14 fuentes; los datos de Thanatos y Valletta continúan como leads sin afirmar su aparición en la novela revisada.
- Se respetó el ID reservado CHAR-METERIA: no se creó una segunda ficha y la relación Alfia–Meteria permanece enlazada a la investigación secundaria.

## INTEGRATION-BATCH-002 · Cobertura factual de wikis para Zeus/Hera y Era Oscura (2026-10-19)
- Se amplió Alfia con habilidades y coste físico reportados por wikis inglesa/española, y Zald con Deus Ambrosia, veneno del Behemoth y combate final reportado; ambos expedientes conservan estado secundario pendiente de cotejo primario.
- Se crearon fichas únicas para Zeus, Hera y Meteria a partir de IDs reservados y se retiraron solo esas tres reservas.
- Se enriquecieron Zeus Familia y Hera Familia con pistas sobre la capitanía mortal de Hera, exploración, el piso 59 público frente al piso 71 reportado, y colaboración con el Gremio, sin promoverlos a canon primario.
- Se añadieron DMR-029-CLM-006..014 y fuentes específicas para la wiki española de Meteria y la nota alternativa del autor.
- Se añadieron nueve relaciones navegables con claimRef y estado secondary_checked; no se inventó nombre para la capitana de Hera ni para el padre de Bell.
- Los eventos de Dragón Negro y caída de Zeus/Hera quedan enlazados a fuentes secundarias pero siguen pending_verification.


## DANMACHI-RESEARCH-028C · Desglose ampliado de Kaguya y red histórica (2026-10-20)

- Se amplió `characters/gojouno-kaguya.md` con el alias Yamato Rindou, la instantánea biográfica comunitaria, las magias/habilidades y el equipo reportado, además del pasado de la casa Gojou y la corte imperial. Cada bloque incluye claim y URL de origen.
- Se añadieron los claims DMR-028-CLM-023..026 para el snapshot de identidad, el kit de combate, el legado de Kodachi Futaba y el trasfondo. Todos permanecen `secondary_checked`; el proyecto no declara cotejo de capítulo/página primaria.
- Se añadieron seis aristas nuevas al catálogo: pertenencia histórica de Kaguya, tres sacrificios individuales y supervivencia reportados alrededor del Juggernaut, y orden temporal aproximado entre Astrea Record y la tragedia. El legado de Kodachi Futaba se adjunta como claim de apoyo a la arista histórica Kaguya–Ryuu ya existente para no duplicar el mismo destino en la navegación.
- Los bordes nuevos apuntan a claims concretos con sus rutas de investigación y mantienen continuidad/estado de evidencia compatibles con el validador. No se crea una ficha de Gojouno Sakuya ni de las Familias previas de Kaguya sin un registro independiente.
- Se ampliaron las etiquetas del registro para recuperar a Kaguya mediante su alias y su equipo, y se agregaron pruebas de búsqueda/procedencia y navegación en `tests/test_lore_corpus.cjs`.
- **Pendiente hasta CI:** confirmar el validador de catálogo, la cuenta exacta de claims/entradas y las pruebas completas de retrieval después de la integración.

## Lote 2026-10-19 · Afterglow y técnica compartida de Zeus/Hera
- **Cambio:** se incorporó DMR-029-CLM-015 para la técnica Afterglow descrita por las wikis de Hera Familia y Zald; se añadió una relación tipada entre FAM-ZEUS y FAM-HERA y se enlazó desde ambos expedientes familiares y la ficha de Zald.
- **Límite probatorio:** evidencia `secondary_checked`; no se eleva a canon primario sin localizador de novela.
- **Validación esperada:** ID de relación único, referencias de claim/ruta válidas y checks del catálogo de lore.


## DANMACHI-RESEARCH-030 · Método progresivo y primera etapa Orario (2026-10-20)

- **Objetivo:** seguir el orden solicitado: Orario → sucesos ocurridos en Orario → personajes principales → secundarios → historias individuales → revisión integrada.
- **Documento nuevo:** `research/inbox/DANMACHI-RESEARCH-030-metodo-de-analisis-progresivo.md`, con módulos de cobertura, plantilla analítica de eventos, datos de personaje/historia, escala de evidencia E0–E4, reglas de continuidad y control de duplicados.
- **Orario:** se amplió `places/orario.md` como ficha central de ciudad, con matriz de temas pendientes y rutas hacia Dungeon, Babel, Guild e Hostess of Fertility. El contenido factual existente sigue limitado a CONT-ANIME y al glosario oficial DMR-026-SRC-001; no se ha elevado evidencia de anime a canon de novela ligera ni se ha presentado un mapa de fans como mapa oficial.
- **Catálogo e índices:** método inscrito en `catalog.json`; enlace añadido a `MASTER_INDEX.md`; etapa Orario priorizada en `WORK_QUEUE.md`.
- **ID documental:** `DOC-DANMACHI-ANALYSIS-METHOD-001`. Se reutiliza LOC-ORARIO y los claims/fuentes ya existentes; no se crea una segunda ficha de ciudad ni se inventan IDs de lugares.
- **Pendiente:** ejecutar CI en la PR, revisar integridad del catálogo y corregir cualquier fallo real antes de integrar en main.
- **Estado factual:** método listo para usar; análisis completo de Orario aún pendiente. La ficha central es una guía de cobertura, no una declaración de que la ciudad esté completa.


## DANMACHI-RESEARCH-037 · Separación de nodos organizativos

- Fecha: 2026-10-20; rama `work/danmachi-organization-graph-2026-10-20`.
- `ORG-GUILD` representa la institución; `DM-GUILD-001` sigue como ficha introductoria conjunta Dungeon/Guild.
- `ORG-HOSTESS` representa organización/personal y `LOC-HOSTESS` conserva el lugar físico.
- Las diez nuevas relaciones reutilizan claims oficiales del corpus DMR-006 y conservan `CONT-ANIME`.
- Índice de Familias sincronizado con IDs activos; recuentos operativos derivados del catálogo.


## DANMACHI-RESEARCH-039 · Inventario separado de lugares del Prototype

- Fecha: 2026-10-21.
- Se integran tres fichas de una rama anterior de Orario sobre el catálogo más reciente, sin sobrescribir los cambios del roster ni de la Era Oscura.
- Las fichas reutilizan DMR-034-CLM-002/003/004; DMR-039 funciona como índice de inventario y no inventa evidencia nueva.
- Todas las relaciones conservan `CONT-PROTOTYPE`; la prueba de regresión bloquea filtraciones hacia `CONT-MAIN-LN`.
- Pendiente: localizar pasajes equivalentes de la novela principal con localizador reproducible.


## DANMACHI-RESEARCH-040 · Calendario editorial y horizonte de cobertura

- Fecha de corte: 2026-10-21.
- Se registran vol. 21 como último tomo principal publicado consultado y los lanzamientos futuros anunciados de DanMachi 22, Sword Oratoria 17 y Familia Chronicle episode Amid.
- Episode Haze, publicado en mayo de 2026, queda abierto para censo de personajes, lugares, sucesos y relaciones a partir del texto disponible.
- El anuncio editorial no se convierte en acontecimiento de la historia: vol. 22 y las obras aún no publicadas permanecen como metadatos de calendario.
- Se añade control de recuperación por defecto y una prueba de regresión para fechas, fuentes oficiales y separación entre publicación prevista y contenido narrativo.


## DANMACHI-RESEARCH-041 · Familia Chronicle episode Haze / Heith

- Fecha de corte: 2026-10-21.
- Fuente editorial consultada: GA Bunko, episode ヘイズ, publicado el 2026-05-15; sinopsis limitada y no equivalente al texto completo.
- Resolución de identidad: el título japonés `episodeヘイズ` comparte la forma `ヘイズ` con el perfil oficial `ヘイズ・ベルベット`; se mantiene el ID estable `CHAR-HEITH-VELVET` y se añaden Haze/Heizu como alias de búsqueda.
- Se crea `EVT-DM-FC-HAZE-001` y se conecta a Heith y Ottar con claims editoriales parciales; no se infieren desenlaces, técnicas ni el roster completo de la aventura.
- El índice, buscador, roster, ficha Markdown, UI y catálogo comparten el mismo ID de personaje. Test de regresión agregado para bloquear la duplicación `CHAR-HAZE`.
- Pendiente: cotejo de texto íntegro y localizadores reproducibles.


## DANMACHI-RESEARCH-042 · Olivas Act y revisión de alias/personajes previos

- Fecha de corte: 2026-10-22.
- Fuente comunitaria: ficha inglesa de Olivas Act; recupera alias, apariencia, afiliaciones reportadas, combate, regeneración, sentidos y Tamer como pistas secundarias.
- Fuente editorial: página de Yen Press de *Sword Oratoria*, volumen 3; se usa solo para localizar el volumen y el marco de la trama, ya que la sinopsis no nombra a Olivas.
- Se añadió CHAR-OLIVAS-ACT con una ficha Markdown, expediente de interfaz y dos relaciones navegables con procedencia; los vínculos se etiquetan secondary_checked y no implican relaciones personales estables.
- Se añadieron nueve claims DMR-042 con dos fuentes registradas; los datos wiki no se elevan a verificación primaria.
- Auditoría anterior: Maryuu/Mariyu mantiene un ID único y la separación entre perfil de adaptación y habilidades comunitarias; Ryana/Liana conserva un único ID; Meteria mantiene los parentescos reportados y el escenario CONT-AU separado; Rudra permanece en la ruta posterior CONT-MAIN-LN/T-5 y no se fusiona con el núcleo T-7 de Astrea Record.
- Pendiente: cotejar escenas de la novela y cualquier diferencia entre wikis, además de revisar las pruebas CI tras el commit de esta tanda.


## DANMACHI-RESEARCH-043 · Albert, Aria y corrección de la Era Oscura

- Fecha de corte: 2026-10-22.
- Se activan las identidades reservadas CHAR-ALBERT-WALDSTEIN y CHAR-ARIA con rutas Markdown, fichas de interfaz y relaciones parentales reportadas por wiki.
- Las fichas de Albert y Aria dejan explícitas las incógnitas sobre la cronología de Ais; no se inventan Falna, niveles, habilidades o explicación temporal.
- Valletta Grede y Thanatos pasan de fichas escuetas a expedientes secundarios utilizables con afiliación, descripción, función y limitaciones atribuidas. Su alcance se corrige a CONT-SO por la ruta reportada en Sword Oratoria vol. 7; no se declara que participen en el núcleo de Astrea Record.
- Jura Halmer se amplía con apariencia, historia, equipo, capacidades y límites reportados por wikis. Se elimina la etiqueta de Astrea Record de sus tags, se conserva CONT-MAIN-LN y se documenta la discrepancia entre las páginas española e inglesa en el rótulo de debut.
- La revisión de Mariyu/Maryuu alinea el nombre visible a «Mariyu Reage», conservando el ID heredado y «Leage» como variante. Ryana, Meteria, Rudra y Olivas no se elevan a evidencia primaria ni reciben relaciones personales no respaldadas.
- Se añaden nueve claims con fuentes registradas, tres relaciones familiares secundarias y pruebas de recuperación y continuidad.
- Pendiente: cotejar las novelas/ediciones con localizadores concretos. La sinopsis de Yen Press del volumen 13 solo establece el marco del volumen, no la biografía de Jura; la sinopsis de Sword Oratoria 1 solo brinda contexto editorial, no prueba directa de Albert o Aria.


## DANMACHI-RESEARCH-044 · Maxim, Helga, Argana, Bache y Seldas
- Se amplían los cinco expedientes con identidad, afiliación, resumen histórico, personalidad o estilo de combate, límites y tareas de cotejo.
- Maxim queda ligado a la ruta del flashback de DanMachi vol. 20; Episode Freya se mantiene separado.
- Argana y Bache incluyen sus capacidades y costes/alcances reportados sin elevar los detalles de wiki a canon primario.
- Seldas registra el vínculo trágico reportado con Tione como spoiler mayor, con el pasaje de Sword Oratoria vol. 6 todavía por localizar.
- Helga y el vínculo con Lyra quedan restringidos a CONT-GAME: el informe no los traslada automáticamente a novela ligera o Astrea Record.
- Se añade el paquete de investigación con 10 claims, registro de fuentes, enlaces al buscador y pruebas de regresión.
- Pendiente de cierre primario: localizadores de vol. 6 y 20 y versión/evento de DanMemo.


## DANMACHI-RESEARCH-045 · auditoría histórica y de continuidad

- Fecha: 2026-10-23; publicación directa en main.
- Se ampliaron las rutas de Alfia, Zald, Meteria, Erebus y Rudra; Meteria recibió un expediente manual de interfaz que faltaba.
- Se añadió DMR-045 con tres claims: procedencia editorial oficial de Astrea Record; trampa del Juggernaut atribuida secundariamente a Rudra Familia como grupo, no personalmente al dios; e identidad/apariencia de Erebus según wiki, con «Eren» mantenido como nombre no verificado.
- Se modificaron las aristas existentes Rudra–evento y Erebus–Evilus para apuntar a claims específicos sin aumentar el número de relaciones ni crear vínculos no investigados.
- El buscador carga el nuevo expediente y ofrece Meteria en los detalles por defecto; se agregaron pruebas de búsqueda, continuidad, procedencia y cobertura UI.
- Fuentes oficiales: cronología y anuncio de novelización de Astrea Record. Fuentes comunitarias: perfiles de Alfia, Zald, Meteria, Erebus y Rudra/Rudra Familia. La nota del autor sobre Meteria continúa bajo CONT-AU.
- Pendiente: localizadores primarios de Astrea Record vols. 1–3, DanMachi vol. 20 y el arco de vols. 13–14.
- Veredicto: secondary_checked_with_primary_gaps; no se promueve ninguna biografía a canon primario.

- Actualización 2026-10-23: se incorporó `DMR-045-CLM-006` con un fragmento indexado de la ficha editorial de *Astrea Record 3*; enlaza a Alfia y Zald con el evento en `CONT-AR` mediante dos aristas `source_checked_excerpt_only`. El acceso directo a la página editorial devolvió HTTP 503; las escenas narrativas y las biografías de los cinco expedientes siguen pendientes de localizador primario.
- Actualización 2026-10-23: se comprobó la muestra pública de *Astrea Record 3* en BOOK☆WALKER. Solo fue visible la portada (contador 1/63); los intentos de navegación no expusieron páginas interiores. Queda registrada como `DMR-045-SRC-006`, `metadata_checked_only`, sin claims ni nuevas relaciones. El cotejo primario de escenas individuales sigue abierto.
- Actualización 2026-10-23: se registró la página 17/33 de la muestra BookWalker de DanMachi vol. 20 como `DMR-045-SRC-007`. El pasaje inspeccionado muestra `レオン` y `バルドル`; el registro no tiene claims y limita expresamente los términos no encontrados a esa página. No se equipara `バルドル` con Zald ni se infiere ausencia en el tomo completo.

## DANMACHI-RESEARCH-046 · perfiles de Solingen y Soma Familia

- Fecha: 2026-10-23; commits realizados directamente en main.
- Se amplían siete perfiles existentes: Cecil Blackliza, Iselina, Shau, Ulanda, Zanis Lustra, Chandra Ihit y Canoe Belway.
- Los cuatro miembros de Solingen quedan separados por ID; la ocupación de Iselina, Shau y Ulanda permanece desconocida porque el roster no la establece.
- Zanis, Chandra y Canoe cuentan con perfiles de UI manuales ampliados y enlazados a sus fuentes. La acusación de Zanis sobre la desaparición de Canoe se conserva como acusación reportada, no como prueba de culpabilidad de Liliruca.
- El catálogo registra DOC-DANMACHI-RESEARCH-046 y conserva 229 relaciones; once rutas de relación existentes reciben claims más específicos sin inventar aristas nuevas.
- La sinopsis oficial de GA Bunko del volumen 6 se usa solo para el contexto general de captura de Liliruca por Soma Familia. Cargos, especie, nivel, motivaciones e intervención individual siguen apoyados por fuentes comunitarias.
- Fuente de registro y detalle: DMR-046. Pendientes primarios: escenas de Solingen; capítulos/páginas de los volúmenes 2 y 6; secuencia de Canoe y conocimiento de Zanis.
- Estado: secondary_checked_with_primary_gaps; no se declara verificación completa de canon.


## DANMACHI-RESEARCH-045 · Parentesco Alfia–Bell desde entrevista autoral (2026-10-23)

- Fuente nueva: entrevista publicada por Dengeki Online el 2023-06-30, con una declaración directa atribuida a Fujino Omori sobre la novelización de Astrea Record.
- Se incorpora `DMR-045-SRC-008` y `DMR-045-CLM-007`: la novelización representa explícitamente a Alfia como tía de Bell, según la entrevista. El alcance se marca `CONT-AR` y como fuente autoral complementaria, no como localizador de capítulo/página de la novela.
- Se añade la arista navegable `REL-ALFIA-BELL-AUNT-INTERVIEW` entre los expedientes existentes de Alfia y Bell, con claim, fuente, intervalo y límite explícitos. No se ha inferido quién es la madre de Bell ni se han promocionado los datos secundarios sobre Meteria, Zald, Erebus o Rudra.
- El buscador/directorio de fuentes, las vistas Markdown, los expedientes manuales de interfaz y las pruebas regresivas incorporan la fuente con límites visibles. La relación no debe aparecer en `CONT-MAIN-LN` como si ya existiera localizador directo de la escena.
- Resultado: 243 relaciones en catálogo, tras añadir una arista con extremos existentes; las cinco fichas permanecen `secondary_checked_with_primary_gaps` en lo relativo a sus biografías completas y localizadores internos.


## DANMACHI-RESEARCH-045 · Declaración autoral adicional en entrevista de 2020 (2026-10-23)

- Fuente: LN News Online, entrevista exclusiva a Fujino Omori publicada el 2020-10-15, sección sobre la revelación del nacimiento de Bell en Memoria Freese.
- El entrevistador formula que la madre de Bell es la hermana menor de Alfia y Omori responde afirmativamente; también indica que el origen de Bell se reveló primero en DanMemo. Se registra `DMR-045-SRC-009` / `DMR-045-CLM-008` bajo `CONT-GAME`.
- Se añade una arista aparte `REL-ALFIA-BELL-AUNT-GAME-INTERVIEW` entre los registros de Alfia y Bell. No se mezcla con la relación de la novelización bajo `CONT-AR`; la respuesta no nombra a la hermana, por lo que no permite identificarla como Meteria ni crear una arista Meteria–Bell.
- Las dos fichas Markdown de Alfia y Bell, el expediente de interfaz y la ficha de Meteria muestran la nueva evidencia con sus límites. Las pruebas cubren recuperación del claim, la nueva arista y la prohibición de filtrarlo a `CONT-MAIN-LN` o identificar automáticamente a Meteria.
- Resultado: 244 relaciones estructuradas con extremos existentes. La identidad de la madre como Meteria, el parentesco gemelar, las capacidades y las biografías de los cinco personajes mantienen sus grados de evidencia previos salvo la corroboración de parentesco aquí delimitada.


## AUDIT-BRANCHES-2026-10-24 · revisión completa del censo de ramas

- **Base verificada:** `main` en `21f0482f3ba23142866e5534d2368ba43233668f`; ambos workflows posteriores al merge pasaron: Validate WordWaifu #2921 y DanMachi Lore and Retrieval Integrity #1609.
- **Censo:** se recuperaron 102 referencias contando `main`; la comparación cubrió las 101 ramas no principales. Resultado: 87 divergidas y 14 solo detrás; cero ramas ahead-only o al día para fusión directa.
- **PR:** 85 registros consultados; 60 fusionadas, 25 cerradas sin fusionar y ninguna abierta. Las PR históricas sustituidas se contrastaron con su sucesora cuando existía; nunca fusionar una rama divergida a ciegas.
- **Código funcional reciente ya integrado:** PR #85 (relación Alfia–Bell en CONT-AR), #86 (entrevista separada como CONT-GAME) y #87 (nivel de fuente “entrevista autoral” en el navegador). Las PR y los checks se enlazan en `docs/BRANCH_AUDIT_2026-10-24.md`.
- **Política de rescate:** mantener archivadas las ramas viejas sin borrarlas; cualquier requerimiento futuro de una rama histórica se recuperará por diff selectivo sobre el main vigente, con pruebas y continuidad actualizadas.
- **Próxima tarea efectiva:** DMR-045 mantiene pendientes los pasajes primarios de Alfia/Zald/Erebus, Meteria/Bell y Rudra/Jura. El censo de ramas no cierra la investigación factual.



## DANMACHI-RESEARCH-052 · Capacidades secundarias de Freya Familia (2026-10-27)

- Se hizo una pasada estructurada por las páginas comunitarias de Allen Fromel, Hedin Selland, Hogni Ragnar y Hermanos Gulliver; para Hedin se consultó además la subpágina de habilidades en español.
- Se registran snapshots reportados de nivel, magias, skills, desarrollos y equipo cuando la fuente los enumera; se anotan por separado los límites de Laurus Hildr, Dainsleif, Victim Abyss y la coordinación grupal de los Gulliver.
- La ficha conjunta Gulliver conserva cuatro especialidades: cálculo/decisión (Alfrigg), detección mágica (Dvalinn), búsqueda/alerta de emboscadas (Berling) y observación del adversario (Grer). La Resistencia Anormal solo se atribuye aquí de manera expresa a Dvalinn.
- Campos que la pasada no resolvió: costes numéricos, efecto descrito de Rasu Dain, lista completa de skills de Allen y magias/skills individuales con nombre para cada hermano Gulliver. Se dejan como «no informado en las fuentes consultadas», no como ausencia probada en el canon.
- Las notas se exponen en CONT-SECONDARY; no se reescriben personalidades, no se crean claims/eventos/aristas/IDs y no se traslada la información secundaria a otras continuidades.
- Fuente y matrices de límites: [DMR-052](research/inbox/DANMACHI-RESEARCH-052-freya-familia-secondary-capabilities.md), [bitácora](CHARACTER_UPDATE_LEDGER.md) y DMR-052-SRC-001–005 en el registro maestro de fuentes.
- **Integración:** [PR #172](https://github.com/jonhararagi/wordwaifu/pull/172), SHA real de `main` `79505bd740d47560d4bc67166c807d14090a950d`.
- **CI de PR:** [Validate #40572608737](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608737) y [Lore/Integrity #40572608435](https://github.com/jonhararagi/wordwaifu/actions/runs/40572608435), ambos `success` sobre `1ece6f0117dadf2fb0b0a4988d23c13df34d0609`.
- **CI post-merge sobre el SHA exacto de `main` `79505bd740d47560d4bc67166c807d14090a950d`: [Validate WordWaifu #40590376454](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376454) y [DanMachi Lore and Retrieval Integrity #40590376362](https://github.com/jonhararagi/wordwaifu/actions/runs/40590376362), ambos `success`.
- **Próxima acción:** revisar diff y pruebas antes de integrar; si una de las fuentes no informa el campo, cerrar ese dato y pasar a otra identidad.


## DANMACHI-RESEARCH-053 · Capacidades de primera línea de Familia Loki (2026-10-27)

- Pasada limitada a Bete Loga, Tiona Hiryute y Tione Hiryute, sin reabrir su investigación histórica ni reformular personalidades.
- Se registran Hati y las skills Úlfheðinn/Fenris Wolf/Solmani para Bete; Berserk/Intense Heat para Tiona; Berserk/Backdraft y List Iorum para Tione.
- Se registran armas y habilidades de desarrollo listadas por las wikis comunitarias, junto con dos límites de lectura: nivel 6 en encabezado frente a tablas estadísticas del nivel 5 y variantes Flosvirt/Frosvirt.
- Fuente, alcance y condiciones para reabrir: DMR-053 y DMR-053-SRC-001..004; los cuatro registros quedan como secondary_checked.
- **Integración:** [PR #174](https://github.com/jonhararagi/wordwaifu/pull/174), SHA de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`.
- **CI de PR sobre `37f50a3f0608cb00b3c355e75c008031e70bbe70`:** [Validate WordWaifu #40602468962](https://github.com/jonhararagi/wordwaifu/actions/runs/40602468962) y [DanMachi Lore and Retrieval Integrity #40602469069](https://github.com/jonhararagi/wordwaifu/actions/runs/40602469069), ambos `success`.
- **CI post-merge sobre el SHA exacto de `main` `28ae6f34859bc0a59beaf7a711bfa54504265ffd`:** [Validate WordWaifu #40602644529](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644529) y [DanMachi Lore and Retrieval Integrity #40602644563](https://github.com/jonhararagi/wordwaifu/actions/runs/40602644563), ambos `success`.
- **Próxima acción:** volver a la prioridad DMR-045 solo ante un nuevo localizador primario legible; no repetir las mismas muestras sin un disparador material.

## DMR-045 · Cruce autoral ya registrado (2026-10-27)

- Se reutiliza DMR-029-SRC-016 para el texto autoral y DMR-045-SRC-002/SRC-005 para la verificación editorial de su edición especial; no se crea otra entrada para la misma nota ni se repiten muestras que no devolvieron texto legible.
- El texto autoral se mantiene en CONT-AU; el cuadernillo contiene una versión revisada de un escenario descrito como “algo que podría haber sucedido”.
- Se añade una regresión que valida la separación de continuidad y la disponibilidad de la fuente en el directorio interactivo.
- **Estado del subtrabajo:** implementado en rama; CI e integración pendientes. DMR-045 sigue abierta para sus cinco cotejos primarios.


## DMR-045 · BookLive vol. 20, nueva ruta licenciada de metadatos (2026-10-27)

- Se registró la ficha BookLive del volumen 20 como DMR-045-SRC-052 y en el directorio interactivo como licensed-retailer-booklive-danmachi-vol20-preview.
- La página presenta botones de muestra en navegador y aplicación, pero el lector no se abrió ni se recuperó narración. El resultado queda en metadata_checked_only, no como éxito o fallo de lectura.
- Se añadió una regresión para validar la fuente, los controles y la ausencia de claims/eventos.
- **Estado:** implementado en rama; CI e integración pendientes. DMR-045 conserva los cinco cotejos primarios abiertos.
