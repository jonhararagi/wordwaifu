# Índice maestro de acontecimientos

## Estado

Índice inicial de clases de eventos. No representa un catálogo confirmado de todos los acontecimientos canónicos. Cada evento real se añadirá con un ID propio y se enlazará a fuente, personajes, lugares, Familias y volúmenes.

## Familias de eventos por investigar

| Grupo | Prefijo sugerido | Temas que deberán indexarse | Estado |
|---|---|---|---|
| Mitos y eras antiguas | EVT-ANCIENT | Origen del mundo, amenazas antiguas, héroes legendarios, historias de dragones | Pendiente de fuentes |
| Descenso de dioses | EVT-DESCENT | Llegadas, reglas acordadas, primeros pactos, consecuencias sociales | Pendiente |
| Historia de Orario | EVT-ORARIO | Fundación, evolución urbana, Guild, Babel y cambios institucionales | Pendiente |
| Monstruos y Dungeon | EVT-DUNGEON | Descubrimientos de pisos, anomalías, expediciones, monstruos excepcionales | Pendiente |
| Zeus/Hera | EVT-ZH | Formación, miembros, expediciones, enfrentamientos y caída | Prioridad alta |
| Dragón Negro | EVT-OEBD | Apariciones, enfrentamientos, víctimas, supervivientes y objetivo futuro | Prioridad alta; fuentes pendientes |
| Astrea Familia | EVT-AST | Integrantes, incidentes, supervivientes, consecuencias posteriores | Prioridad alta |
| Familias y conflictos | EVT-FAMILY | Alianzas, guerras, disoluciones, cambios de liderazgo y expediciones | Pendiente |
| Hestia y Bell | EVT-HB | Llegada de Hestia, encuentro con Bell, creación de la Familia y primeras misiones | Prioridad crítica |
| Loki Familia | EVT-LOKI | Reclutamientos, expediciones, cambios de rango, conflictos y decisiones internas | Prioridad alta |
| Freya Familia | EVT-FREYA | Afiliaciones, maniobras, conflictos y efectos sobre Bell/Orario | Prioridad alta; spoilers |
| Arcos por volumen | EVT-VOL | Un registro por acontecimiento relevante de cada volumen principal | Pendiente del inventario bibliográfico |
| Historias paralelas | EVT-SIDE | Acontecimientos de Sword Oratoria, Familia Chronicle, Astrea Record y otros materiales oficiales | Pendiente de clasificación |
| Futuro AU del OC | EVT-AU | Llegada, encuentros, decisiones, reclutamiento y consecuencias de la historia original del autor | Solo decisiones aprobadas |

## Plantilla de evento por añadir

- event_id:
- canonical_title:
- aliases:
- description_short:
- chronology_start:
- chronology_end:
- time_precision:
- participants:
- location_ids:
- familia_ids:
- related_event_ids:
- primary_source_ids:
- secondary_sources:
- continuity_scope: main, side_story, game, adaptation, au o unknown
- canon_status: verified, provisional, disputed, author_override o unknown
- spoilers: none, mild, major o endgame
- impact: local, character, familia, city, world o endgame
- duplicate_of:
- notes:

## Regla

Dos escenas que describen el mismo acontecimiento deben enlazarse a un solo ID canónico con varias fuentes, no convertirse en eventos duplicados. Si las versiones difieren materialmente, crear registros relacionados con una nota de discrepancia, sin borrar las fuentes originales.

## Eventos candidatos ya registrados

- [Índice de eventos candidatos](../events/00-indice-candidatos.md)
- Descenso de las deidades: `EVT-DM-DESCENT-001`.
- Zeus/Hera y derrotas de Behemoth/Leviathan: `EVT-DM-GREAT-QUESTS-001` (resultado respaldado por referencia oficial; fecha y secuencia pendientes).
- Zeus/Hera y Dragón Negro: `EVT-DM-ZH-OEBD-001`.
- Caída/pérdida de posición de Zeus y Hera: `EVT-DM-ZH-FALL-001`.
- Llegada de Hestia al mundo inferior: `EVT-DM-HESTIA-DESCENT-001`.
- Primer encuentro Bell–Hestia: `EVT-DM-BELL-MEETS-HESTIA-001`.
- Eina como asesora de Bell: `EVT-DM-EINA-ADVISOR-001`.
- Llegada del OC a Orario: `AU-EVT-OC-ARRIVAL-001` (propuesta del autor).
- Interacción del OC con Eina: `AU-EVT-OC-EINA-001` (propuesta del autor).
- Reclutamiento del OC por Loki: `AU-EVT-OC-LOKI-RECRUITMENT-001` (propuesta del autor).
- Loki llama “Bell” al OC: `AU-EVT-LOKI-NAMES-OC-BELL-001` (propuesta del autor).

Estos registros facilitan la siguiente tanda, pero las seis entradas de canon siguen pendientes de cotejo y las cuatro entradas AU requieren decisión expresa del autor.


## Eventos de los volúmenes principales 1 y 2 (DMR-060/061)

**V1 — CONT-MAIN-LN**
- `EVT-DM-V01-BELL-RECEIVES-FALNA-001` — Falna en biblioteca (PDF pp. 211–214); el encuentro previo conserva su ID de candidato.
- `EVT-DM-V01-HEPHAISTOS-GIVES-DAGA-HESTIA-001` — Hephaistos entrega la daga (pp. 145–146).
- `EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001` — Festival (pp. 150–159).
- `EVT-DM-V01-FREYA-CHARMS-AND-RELEASES-SILVERBACK-001` — Encanto y liberación de un Silverback (pp. 160–164).
- `EVT-DM-V01-GANESHA-RESPONDS-TO-MONSTER-ESCAPE-001` — respuesta ante nueve monstruos escapados (pp. 170–173).
- `EVT-DM-V01-BELL-HESTIA-SILVERBACK-CHASE-001` — persecución y promesa familiar (pp. 165–190; se solapa con la respuesta pública).
- `EVT-DM-V01-HESTIA-UPDATES-BELL-GIVES-DAGA-001` — actualización de Estado y entrega (pp. 193–196).
- `EVT-DM-V01-BELL-DEFEATS-SILVERBACK-001` — derrota (pp. 196–200).
- `EVT-DM-V01-HESTIA-EXPLAINS-DAGA-AND-LOAN-001` — explicación del arma, préstamo y contrato (pp. 203–208).

**V2 — CONT-MAIN-LN**
- `EVT-DM-V02-AIS-UDAEUS-001` / `EVT-DM-V02-AIS-REACHES-LV6-RUMOR-001` — combate y rumor exactamente una semana después (pp. 106–111; rumor, no Estado confirmado).
- `EVT-DM-V02-BELL-FIREBOLT-ACQUISITION-001` / `EVT-DM-V02-BELL-FIREBOLT-TEST-001` — Grimorio, adquisición y pruebas de Firebolt.
- `EVT-DM-V02-BELL-EXHAUSTS-RECOVERY-POTIONS-001` / `EVT-DM-V02-BELL-BUYS-MIND-POTION-NAZA-001` — pociones agotadas tres días antes y compra a Naaza (p.167 y pp.167–169).
- `EVT-DM-V02-BELL-WITNESSES-LILI-HARASSMENT-001` — hostigamiento a Lili (pp.169–170).
- `EVT-DM-V02-LILI-OBSERVES-BELL-FIREBOLT-001` — Firebolt visto el día anterior al piso 10 (p.198).
- `EVT-DM-V02-FLOOR10-OGRE-AMBUSH-001` / `EVT-DM-V02-LILI-ABANDONS-BELL-001` — Ogros, cebo y abandono (pp.195–214).
- `EVT-DM-V02-LILI-REVEALS-HOBBIT-IDENTITY-001` — Cinder Ella y revelación de su raza (pp.214–221).
- `EVT-DM-V02-LILI-PARENTS-DIE-IN-DUNGEON-001` — recuerdo sobre sus padres (p.216; piso/fecha desconocidos).
- `EVT-DM-V02-HESTIA-EINA-DISCUSS-LILI-001` — advertencia en paralelo (pp.218–219).
- `EVT-DM-V02-GEDO-CAPTURES-LILI-001` — emboscada de Gedo (pp.221–224).
- `EVT-DM-V02-SOMA-ABANDONS-LILI-AS-BAIT-001` — traición y uso como cebo (pp.224–229).
- `EVT-DM-V02-BELL-RESCUES-LILI-AND-RECONCILES-001` — rescate y reconciliación (pp.230–237).
- `EVT-DM-V02-BELL-AND-LILI-REHIRE-001` — reencuentro dos días después (pp.237–240).
- `EVT-DM-V02-AIS-RECOVERS-JADE-PROTECTOR-001` — hallazgo del Protector (pp.242–243).

**Reserva de procedencia:** ambos PDFs son traducciones privadas de la novela ligera original oficial, no cotejadas con japonés. Los números indicados son páginas físicas PDF. La inspección de imágenes embebidas se hizo mediante hojas de contacto (24 recursos V1 y 29 V2) y ampliación de fichas clave; no equivale a un recorrido visual página completa de todos los folios.
