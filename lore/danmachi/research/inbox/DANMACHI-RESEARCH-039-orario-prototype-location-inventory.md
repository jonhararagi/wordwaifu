# DANMACHI-RESEARCH-039 · Inventario de lugares urbanos del Prototype

- **Estado:** parcial; tres nodos documentales incorporados y navegables.
- **Objetivo:** registrar por separado tres conceptos urbanos recuperados del portal oficial Prototype y ya analizados en DMR-034.
- **Continuidad:** `CONT-PROTOTYPE`. Esta documentación no confirma que los lugares, la geometría o sus relaciones espaciales se repitan en la novela ligera principal.
- **Identificador de documento:** `DOC-DANMACHI-RESEARCH-039`.

## Inventario

| ID | Ficha | Claim de procedencia | Alcance |
|---|---|---|---|
| `LOC-ORARIO-AVENUES-PROTOTYPE` | [Avenidas principales](../../places/orario-avenues-prototype.md) | `DMR-034-CLM-002` | Ocho avenidas principales en el marco Prototype; no confirma cardinalidad, nombres ni geometría en la novela principal. |
| `LOC-ORARIO-CENTRAL-PARK-PROTOTYPE` | [Central Park](../../places/central-park-prototype.md) | `DMR-034-CLM-003` | Asociación con el centro urbano limitada a ese material. |
| `LOC-ORARIO-COMMERCIAL-STREETS-PROTOTYPE` | [Comercio de calle](../../places/commercial-streets-prototype.md) | `DMR-034-CLM-004` | Actividad comercial descrita en el Prototype; no se infieren barrios o sectores canónicos. |

Cada nodo tiene una relación de navegación hacia `LOC-ORARIO`, con continuidad `CONT-PROTOTYPE`. Esa arista agrupa documentación del corpus y no prueba por sí sola la posición o relación espacial en la novela ligera.

## Procedencia y límites

- Fuente de los claims: [DANMACHI-RESEARCH-034 — avenidas, comercio y Babel en Prototype](DANMACHI-RESEARCH-034-orario-prototype-streets-commerce-babel.md).
- Este inventario reutiliza claims existentes y no crea afirmaciones canónicas adicionales.
- El estado agregado `source_checked_partial` describe estas fichas; las aristas conservan `source_checked` porque remiten a claims concretos verificados dentro del Prototype. Los dos niveles no deben equipararse automáticamente.
- No se asignan coordenadas, orientaciones, distancias, divisiones por distritos ni nombres propios de calles que no estén sustentados por los claims.

## Verificación pendiente

- [ ] Localizar menciones equivalentes en una edición identificada de la novela principal, con volumen y capítulo/página o localizador electrónico reproducible.
- [ ] Si la novela no respalda una entrada, conservarla como material Prototype en vez de crear un reemplazo canónico por semejanza.
- [ ] Antes de añadir nuevas ubicaciones, distinguir lugar físico, organización, establecimiento y concepto urbano; comprobar continuidad e IDs activos/reservados.
