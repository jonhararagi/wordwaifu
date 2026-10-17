# DONE / PUNTO DE RECUPERACIÓN — DANMACHI-COVERAGE-001

**Estado:** IN_PROGRESS; la enciclopedia DanMachi permanece PARTIAL.

## Rama y HEAD

- Repositorio: `jonhararagi/wordwaifu`.
- Rama autorizada: `work/story-completion-danmachi-audit-2026-10`.
- HEAD funcional anterior al checkpoint documental: `dac71211e69472cdbd8b527ee7f2b0b54b41ddbd`.
- El HEAD posterior será el commit que actualice este documento; comprobar la punta real y sus workflows exactos antes de iniciar otra escritura.
- Informe actual: [DANMACHI-COVERAGE-001 — reparación de fuentes y red de Astrea](DANMACHI-COVERAGE-001-ASTREA-ROSTER-AND-SOURCE-REPAIR-REPORT.md).
- Informes previos: [tanda secundaria de Loki](DANMACHI-COVERAGE-001-LOKI-SECONDARY-MEMBERS-REPORT.md), [terciarios de Loki](DANMACHI-COVERAGE-001-LOKI-TERTIARY-ROSTER-REPORT.md).

## Última tanda: Astrea — reparación de fuentes y navegación

- Se registraron las referencias faltantes `DMR-003-SRC-001`, `DMR-003-SRC-002` y `DMR-007-SRC-001..006` en `lore/danmachi/sources/00-registro-fuentes.md`. Sus URLs, tipo de fuente, claims cubiertos, continuidad y límites se guardaron desde los paquetes de investigación existentes; no se inventaron nuevas escenas.
- Se amplió `lore/danmachi/familias/astrea-familia.md` con una red navegable de Astrea, Alise, Ryu/Ryuu, Kaguya, Lyra, Iska, Mariyu/Maryuu, Noin, Neze, Asta, Ryana y Celty.
- Se separaron los perfiles etiquetados Nueva Astrea Familia/Solingen (Cecil, Iselina, Shau y Ulanda) para no mezclarlos automáticamente con el roster histórico de `CONT-AR`.
- Se añadieron enlaces de retorno al expediente organizativo desde las 12 fichas históricas y las 4 fichas posteriores/de Solingen, con advertencias para no inferir relaciones personales a partir de afiliación compartida.
- Comprobación estática en los archivos actuales: todos los 12 IDs de fuente declarados por el expediente de Astrea están registrados, y sus 16 enlaces relativos resuelven a rutas catalogadas.
- Catálogo permanece en **107 registros / 104 documentos**; no se duplicaron los personajes que ya tenían ficha.

## CI comprobado para commits funcionales

- SHA `5202ed029fe4d7f768c923f60639841fad0c1567`: [Validate WordWaifu — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38988480037), [DanMachi Lore and Retrieval Integrity — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38988480040).
- SHA `b2b449a678f17f1d3f3a751f14af7f62b3db3319`: [Validate WordWaifu — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38988565677), [DanMachi Lore and Retrieval Integrity — success](https://github.com/jonhararagi/wordwaifu/actions/runs/38988565690).
- En la última consulta los workflows para `9d9a3dd247624325d23a5883b555b13053e2a34a`, `5e1bd33f38f6ce92cc16524ecc0c08b0940ce596` y `dac71211e69472cdbd8b527ee7f2b0b54b41ddbd` aún estaban en curso. Comprobarlos nuevamente con sus SHA exactos:
  - [Validate / 9d9a3dd](https://github.com/jonhararagi/wordwaifu/actions/runs/38988609412) · [Lore Integrity / 9d9a3dd](https://github.com/jonhararagi/wordwaifu/actions/runs/38988609502).
  - [Validate / 5e1bd33](https://github.com/jonhararagi/wordwaifu/actions/runs/38988639057) · [Lore Integrity / 5e1bd33](https://github.com/jonhararagi/wordwaifu/actions/runs/38988639069).
  - [Validate / dac712](https://github.com/jonhararagi/wordwaifu/actions/runs/38988668936) · [Lore Integrity / dac712](https://github.com/jonhararagi/wordwaifu/actions/runs/38988668942).
- Validación local: **NOT_RUN**.
- El SHA documental de este checkpoint necesitará comprobación CI propia tras guardarse. No se toma el estado de commits previos como evidencia para el nuevo SHA.

## Últimas tandas Loki

- `CHAR-LOKI-AKI` tiene alias secundario de búsqueda Anakitty Autumn; no se creó una segunda identidad.
- Se añadieron `CHAR-LOKI-ELFY-COLETTE` y `CHAR-LOKI-RAKTA-HAZE`.
- Se añadieron `CHAR-LOKI-ARCS`, `CHAR-LOKI-CYNTHIA`, `CHAR-LOKI-ORBA`.
- Fuentes secundarias, IDs y límites quedan registrados. El nivel y la función de Orba conservan una discrepancia sin resolver. La lista de Loki no está demostrada exhaustiva.

## Próxima acción exacta

1. Confirmar el HEAD documental tras este checkpoint y ambos workflows en el SHA exacto.
2. Continuar con aliases/identidades secundarios de Loki (por ejemplo, Narvi/Narfi y Cruz/Cruz Bussell), solo con fuente y evitando IDs duplicados.
3. Completar fichas individuales y procedencia de la Familia Soma, luego dioses/Familias pendientes, sin dar por cerrada una etapa histórica sin cotejo.
4. Mantener `IN_PROGRESS` hasta que la cobertura y los tests estén demostrados.

## Límites y permisos

- Separar canon, fuente secundaria, adaptación y AU; no inventar capítulos, páginas o desenlaces.
- `main` no se modificó; no hubo merges ni operaciones sobre PR.
