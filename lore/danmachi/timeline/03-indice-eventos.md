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
- `EVT-DM-V01-HESTIA-UPDATES-BELL-AFTER-MINOTAUR-001` — actualización inicial de Estado posterior al Minotauro; snapshot p. 33 y Habilidad revelada desde la perspectiva de Hestia (PDF pp. 30–36).
- `EVT-DM-V01-BELL-MEETS-SEAL-FLOVER-001` — Bell conoce a Seal Flover; devolución de Piedra Mágica, desayuno ofrecido e invitación aceptada a cenar (PDF pp. 42–46).
- `EVT-DM-V01-BELL-DEFEATS-KOBOLD-PARTY-001` — combate contra el grupo de Kobolds y recuperación de fragmentos y garra (PDF pp. 46–51).
- `EVT-DM-V01-BELL-DEFEATS-GOBLIN-AND-GETS-TOOTH-001` — Bell derrota a un Goblin y recoge un Diente de Goblin (PDF p. 53).
- `EVT-DM-V01-BELL-RECEIVES-FALNA-001` — Falna en biblioteca (PDF pp. 211–214).
- `EVT-DM-V01-HESTIA-PETITIONS-HEPHAISTOS-DAGGER-001` — Hestia pide una daga para Bell y Hephaistos acepta forjarla después de dos días de insistencia (p. 115 y pp. 129–133).
- `EVT-DM-V01-HEPHAISTOS-GIVES-DAGA-HESTIA-001` — Hephaistos entrega la daga terminada a Hestia (pp. 145–146), posterior al evento de petición y forja.
- `EVT-DM-V01-FREYA-LOKI-CAFE-MEETING-001` — Freya se reúne con Loki y Ais durante el Festival y reconoce a Bell entre la multitud (pp. 139–145).
- `EVT-DM-V01-BELL-HESTIA-FESTIVAL-DATE-001` — encuentro en Festival de Monstruos (pp. 150–165).
- `EVT-DM-V01-FREYA-CHARMS-AND-RELEASES-SILVERBACK-001` — Encanto y liberación de un Silverback (pp. 159–167).
- `EVT-DM-V01-GANESHA-RESPONDS-TO-MONSTER-ESCAPE-001` — respuesta ante nueve fugas reportadas (pp. 170–173).
- `EVT-DM-V01-BELL-HESTIA-SILVERBACK-CHASE-001` — persecución, señuelo y promesa familiar (pp. 173–190).
- `EVT-DM-V01-HESTIA-UPDATES-BELL-GIVES-DAGA-001` — actualización de Estado y entrega de daga (pp. 193–196).
- `EVT-DM-V01-BELL-DEFEATS-SILVERBACK-001` — derrota del Silverback (pp. 196–200).
- `EVT-DM-V01-HESTIA-EXPLAINS-DAGA-AND-LOAN-001` — origen, deuda y contrato de la daga (pp. 203–208).

**V2 — CONT-MAIN-LN**
- `EVT-DM-V02-AIS-UDAEUS-001` — combate contra Udaeus (pp. 106–111).
- `EVT-DM-V02-AIS-REACHES-LV6-RUMOR-001` — rumor una semana después, no confirmación (p. 111).
- `EVT-DM-V02-BELL-FIREBOLT-ACQUISITION-001` / `EVT-DM-V02-BELL-FIREBOLT-TEST-001` — adquisición y prueba de Firebolt.
- `EVT-DM-V02-BELL-EXHAUSTS-RECOVERY-POTIONS-001` — tres días antes de Naaza (p. 167).
- `EVT-DM-V02-BELL-BUYS-MIND-POTION-NAZA-001` — compra a Naaza (pp. 167–169).
- `EVT-DM-V02-BELL-WITNESSES-LILI-HARASSMENT-001` — Bell ve el hostigamiento a Lili (pp. 169–170).
- `EVT-DM-V02-LILI-OBSERVES-BELL-FIREBOLT-001` — Firebolt observado el día antes del piso 10 (p. 198).
- `EVT-DM-V02-FLOOR10-OGRE-AMBUSH-001` — Ogros y Arsenal del Dungeon (pp. 195–213).
- `EVT-DM-V02-LILI-ABANDONS-BELL-001` — Lili toma la daga y abandona a Bell (pp. 213–229).
- `EVT-DM-V02-SOMA-BETRAYAL-BELL-RESCUE-001` — Kanu y otros miembros de Soma traicionan a Lili (pp. 221–230).
- `EVT-DM-V02-BELL-RESCUES-LILI-AND-RECONCILES-001` — rescate y reconciliación (pp. 230–237).
- `EVT-DM-V02-BELL-AND-LILI-REHIRE-001` — reencuentro y nueva contratación dos días después (pp. 237–240).
- `EVT-DM-V02-AIS-RECOVERS-JADE-PROTECTOR-001` — Ais encuentra el Protector de Jade (pp. 242–243).

**Reserva de procedencia:** ambos PDFs son traducciones privadas de la novela ligera original oficial, no cotejadas con japonés. Los números indicados son páginas físicas PDF. Las fichas visuales de V1/V2 requieren auditoría integral adicional.
- `EVT-DM-V01-BELL-HEARS-LOKI-RETELL-MINOTAUR-001` — Bell oye a la Familia Loki burlarse de su rescate del Minotauro en La Señora de la Abundancia y se marcha decidido a fortalecerse (PDF pp. 57–72).
