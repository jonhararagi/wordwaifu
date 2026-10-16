# TLM-005 — Verificación end-to-end del atlas DanMachi

**Estado:** IN_PROGRESS — única tarea activa del programa TLM.  
**Rama autorizada:** `work/story-completion-danmachi-audit-2026-10`  
**TLM-004 aceptada:** implementación `8960fdd11ecff5fd66d69c1bae221a13f12342c4`; HEAD documental de recuperación anterior `ff1622e33ed7c324ebe1bc7c789f12b38296f464`.  
**Regla de seguridad:** no modificar `main`, no fusionar ramas y no abrir/cerrar/modificar PR.

## 1. Objetivo

Verificar de extremo a extremo la integración real de modelo temporal, cronología, mapa relacional, fuentes visuales, dossiers, búsqueda, navegación y persistencia de WordWaifu. Reparar solo defectos reproducibles que estén dentro de este alcance y añadir regresiones para impedir que vuelvan a aparecer.

TLM-005 no intenta completar el canon de DanMachi, inventar fechas o coordenadas, ni sustituye la revisión de procedencia/derechos cerrada en TLM-004.

## 2. INSPECT — estado de la rama antes de cambios

1. Leer `docs/CEREBRO_BOT_OBRERO_CONTROL.md`, `docs/STATUS.md`, `docs/DONE.md`, los informes TLM-001–004 y este contrato.
2. Consultar el HEAD de la rama y las ejecuciones de workflows asociadas a ese SHA. No heredar el estado de CI desde otro commit.
3. Revisar como mínimo `src/danmachi-timeline.js`, `src/danmachi-visual-references.js`, `src/lore-corpus.js`, `src/official-character-roster.js`, `src/character-archive.js`, `src/app.js`, `index.html`, `src/styles.css`, los datasets de timeline/lugares/referencias y las pruebas existentes.
4. No asumir nombres de selectores, APIs ni fixtures: basar las pruebas en el código actual y reutilizar el browser harness disponible.

## 3. Cobertura automatizada requerida

### A. Modelo temporal y canon
- Cubrir `absolute_date`, `approximate_interval`, `relative_offset`, `relative_order`, `unknown` y `anchor` con fixtures/pruebas adecuados.
- Asegurar que fechas desconocidas permanezcan desconocidas y que un fixture hipotético o sintético no se convierta en canon/dato publicado.
- Comprobar que `dateLabel`, `temporal`, `narrativeOrigin`, `evidenceStatus` y `continuityScopes` no se sustituyen unos a otros ni se mezclan.
- Confirmar que la incertidumbre se ve en la UI sin presentar estimaciones como fecha exacta.

### B. Cronología, lugares y navegación
- Comprobar los 15 eventos actuales y las dos fichas de lugar con sus IDs/referencias, sin elevar referencias provisionales o desconocidas a hechos verificados.
- Probar filtros de búsqueda, era y continuidad; selección de evento; enlace evento → lugar → evento relacionado; regreso/atrás y mantenimiento del contexto cuando corresponda.
- Confirmar que el mapa sigue identificado como esquema relacional no geográfico y sin escala; ningún test ni UI debe exigir coordenadas inventadas.
- Comprobar entradas inválidas, IDs inexistentes, duplicados y datos incompletos cuando lo cubran los validadores actuales.

### C. Continuidad, roster, dossiers y búsqueda
- Comprobar búsqueda y apertura de fichas, aliases/IDs y enlaces entre personaje, Familia, deidad, acontecimiento y lugar allí donde la relación está registrada.
- Probar que fuentes y contenido de Anime, novelas y Astrea Record no se filtran entre continuidades incompatibles.
- Verificar navegación de vuelta desde un dossier y que las etiquetas de spoiler/continuidad no desaparezcan al cambiar de vista.

### D. Procedencia visual y derechos (regresión TLM-004)
- Verificar que las imágenes oficiales sin embedding autorizado sigan como enlace de fuente/placeholder, nunca como imagen remota incrustada.
- Comprobar fallback por fuente rota u offline, y que páginas editoriales no se anuncien como ilustraciones concretas de escena.
- Confirmar que el archivo raster del usuario permanezca en almacenamiento del navegador, sin peticiones de subida; archivos corruptos, estados `pending_review`/`blocked` y referencias externas no pueden exportarse como copias marcadas.
- Confirmar que atribución/overlay no muta el original, y que la exportación requiere el gate de autorización y confirmación explícita.

### E. Aislamiento y funcionamiento local
- Repetir los flujos que atraviesan proyecto, timeline, dossiers y estudio de arte y verificar que no contaminan ni sobrescriben el proyecto de demostración Asteria.
- Comprobar arranque, navegación esencial y placeholders con la red desconectada o con solicitudes externas bloqueadas; documentar con precisión cualquier dependencia que impida el modo offline.
- Probar errores y datos persistidos; distinguir una simulación de un error de almacenamiento real.

## 4. Ejecución y evidencia

- Ejecutar las pruebas de Node y browser disponibles realmente. Añadir cobertura solo donde haya brecha, evitando clonar suites existentes.
- GitHub Actions debe ejecutar tanto **Validate WordWaifu** como **DanMachi Lore and Retrieval Integrity**. Registrar SHA de implementación y SHA documental final por separado; comprobar que ambos workflows concluyan en `success` para el SHA final exacto.
- La prueba local del agente se declara `PASS_REAL` únicamente si el comando se ejecutó en un entorno real y su salida fue observada. Los resultados de Actions/Chromium son `PASS_CI`; la revisión estática no es ejecución.
- La revisión visual/manual de Windows 11 se registra como `PASS_REAL` solo si alguien la ejecuta de verdad y registra navegador/entorno, pasos y hallazgos. Si el entorno del agente no dispone de Windows 11, mantener `NOT_RUN`; no bloquear el resto del cierre ni afirmar que se hizo.
- No ocultar una prueba roja borrando el caso, relajando el assertion sin fundamento o editando un fixture ajeno. Investigar el origen, corregir solo si existe relación demostrable y conservar evidencia del reintento.

## 5. Persistencia obligatoria

Crear `docs/TLM-005-END-TO-END-VERIFICATION-REPORT.md` con:
- HEAD BEFORE real y SHA de implementación.
- Archivos modificados y razón de cada cambio.
- Matriz requisito → test/comando → resultado → SHA.
- IDs/casos cubiertos y cualquier limitación no resuelta.
- URLs y conclusiones exactas de los dos workflows en el SHA final.
- Resultados separados: `PASS_REAL`, `PASS_CI`, `PASS_STATIC`, `NOT_RUN`, `UNKNOWN`.
- Declaración de que `main` y PR no se tocaron.
- Siguiente acción concreta: si TLM-005 cierra, indicar que el programa TLM termina con las limitaciones explícitas, pero la enciclopedia global sigue PARTIAL.

Actualizar `docs/STATUS.md`, `docs/CEREBRO_BOT_OBRERO_CONTROL.md` y sobrescribir `docs/DONE.md` con el nuevo punto de recuperación. Consultar la referencia real de rama después de cada secuencia de cambios; no dejar un HEAD documental supuesto.

## 6. Criterios de cierre

- [ ] Los tests temporales, de cronología/lugares, continuidad, dossiers/búsqueda, procedencia/derechos y aislamiento pasan o tienen excepción documentada y aprobada.
- [ ] Navegación E2E de evento ↔ lugar ↔ personaje/dossier cubierta por browser tests.
- [ ] Ningún hecho hipotético/temporal incierto se convierte en canon ni se inventan coordenadas.
- [ ] Pruebas de regresión ejecutadas y resultados reproducibles documentados.
- [ ] Ambos workflows en `success` para el SHA documental final exacto.
- [ ] Revisión Windows 11 ejecutada de verdad o declarada claramente `NOT_RUN`; sin declaración falsa.
- [ ] Informe TLM-005 creado y STATUS/control/DONE coherentes.
- [ ] `main` y PR sin modificar.

**Tarea única activa:** TLM-005. No iniciar nuevas líneas de trabajo fuera de este alcance hasta entregar evidencia y punto de recuperación.
