# DanMachi — espacio de extracción de información

**Propósito:** reunir y ordenar el material que se extrae de novelas, muestras licenciadas, documentos de trabajo y fuentes secundarias antes de incorporarlo al corpus canónico de WordWaifu.

> Esta carpeta es un área de trabajo y preparación. **No es el canon definitivo ni reemplaza** `canon/`, `characters/`, `places/`, `events/`, `monsters/`, `sources/`, `research/inbox/` ni los índices existentes.

## Flujo de trabajo

1. **Ingresar la fuente** en `inbox/`: conservar nombre, procedencia, edición, idioma, continuidad y límites de acceso.
2. **Extraer** en `work/`: registrar pasajes o segmentos con localizadores reales. Separar observación literal, paráfrasis y análisis.
3. **Revisar**: aplicar las pasadas necesarias (por ejemplo, extracción, contraste/continuidad y control de omisiones); marcar dudas sin completarlas por intuición.
4. **Guardar checkpoint** en `checkpoints/`: última unidad terminada, siguiente unidad exacta, pendientes y cambios realizados.
5. **Promover al corpus**: solo después de verificar procedencia, continuidad, duplicados e IDs, transferir los resultados a las fichas y registros canónicos existentes. La extracción no crea IDs por sí sola.

## Estructura

- `inbox/`: inventario de materiales entrantes y enlaces a fuentes. No almacenar copias no autorizadas de obras protegidas.
- `work/`: notas de extracción y análisis todavía no promovidas al corpus.
- `checkpoints/`: cierres de sesión reanudables y estado por volumen/tanda.
- `templates/`: plantillas comunes para que todas las extracciones tengan el mismo formato.

## Reglas obligatorias

- Etiquetar cada dato con una continuidad: `CONT-MAIN-LN`, `CONT-SO-LN`, `CONT-AR`, `CONT-FC`, `CONT-ANIME`, `CONT-MANGA`, `CONT-GAME`, `CONT-PROTOTYPE`, `CONT-SHORT`, `CONT-SECONDARY` o `CONT-AU`.
- No mezclar continuidades ni trasladar automáticamente datos de anime, juegos, wikis o AU a `CONT-MAIN-LN`.
- Registrar la fuente y el localizador exacto disponible. Página física del PDF, página impresa, capítulo, sección y línea de transcripción son localizadores distintos; no convertir uno en otro.
- Las traducciones privadas/no editoriales se identifican como tales y no se presentan como cotejadas con el japonés si no lo fueron.
- Las wikis y otras fuentes comunitarias son evidencia secundaria; guardar URL, título, idioma, fecha de consulta y límites.
- Distinguir `OBSERVADO`, `PARÁFRASIS`, `INFERENCIA`, `PENDIENTE` y `CONTRADICCIÓN`.
- Antes de crear una ficha, evento, relación, alias o fuente, buscar el registro existente y reutilizar su ID cuando corresponda.
- No copiar aquí el corpus canónico completo. Esta carpeta contiene material de trabajo y checkpoints; el dato confirmado vive en su ubicación canónica.
- No declarar una página, pasada, prueba o validación completada sin haberla realizado.

## Estado inicial

- **Tarea activa relacionada:** DMR-062, auditoría cruzada de la transcripción Markdown de DanMachi Volumen 1.
- **Estado:** parcial/en curso. La primera tanda y las diez fichas de monstruos constan en el expediente DMR-062 y en el historial de integración; no se reinicia la extracción de pp. 11–214.
- **Pendientes conocidos:** PDF pp. 1–10; inspecciones visuales pp. 19–21, 23–24 y 49–54; auditoría atómica de reglas/objetos; revisión de eventos candidatos y menciones de personajes sin duplicar registros.
- **Límite de acceso registrado:** el conector usado para leer el archivo Markdown original devolvió contenido vacío. No afirmar que se ha vuelto a leer íntegramente hasta disponer de contenido legible.

## Plantilla y registros

Usar [la plantilla de extracción](templates/volume-extraction.md) para cada volumen o bloque de trabajo. Los informes de investigación formales siguen residiendo en `research/inbox/`; este espacio no los sustituye.
