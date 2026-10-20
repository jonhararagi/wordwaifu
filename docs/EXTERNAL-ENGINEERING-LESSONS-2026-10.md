# Lecciones de ingeniería externas aplicadas a WordWaifu

Fecha de revisión: 2026-10-18

Este documento registra patrones observados en fuentes públicas de ingeniería. No atribuye esos incidentes al código de WordWaifu ni propone añadir infraestructura porque sí.

## 1. Persistencia local: transacciones cortas y atómicas

La guía de MDN sobre IndexedDB explica el ciclo de vida de las transacciones y el comportamiento de las operaciones; la especificación de IndexedDB define su commit/abort y atomicidad.

- Referencias: [MDN — Using IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) y [W3C — Indexed Database API](https://www.w3.org/TR/IndexedDB/).
- Aplicación aquí: mantener cambios coordinados del proyecto, metadatos y papelera dentro de la misma transacción cuando una invariante depende de todos ellos; manejar abortos y errores de forma explícita.
- Decisión: no se introduce una base de datos remota, un servicio residente ni nueva dependencia de hardware. El almacenamiento local existente sigue siendo la opción principal.

## 2. Hacer que los fallos queden contenidos y sean verificables

El postmortem de Cloudflare del 5 de diciembre de 2025 documenta un incidente cuyo alcance dependió de una combinación de cambios de configuración y tratamiento de solicitudes. El seguimiento “Code Orange: Fail Small” convierte lecciones de incidentes previos en un enfoque de resiliencia donde los fallos deben tener un radio de impacto limitado.

- Referencias: [Cloudflare — 5 December 2025 outage](https://blog.cloudflare.com/5-december-2025-outage/) y [Cloudflare — Code Orange: Fail Small](https://blog.cloudflare.com/fail-small-resilience-plan/).
- Aplicación aquí: no integrar en bloque una rama muy divergida; separar datos de contenido y código; revisar cada lote con validador de catálogo, pruebas de recuperación y CI antes de promoverlo a main.
- Decisión: esta tanda añade un paquete acotado de relaciones y fichas; no mezcla los centenares de commits divergentes de otra rama.

## 3. No asumir formatos internos de credenciales o integraciones

El changelog de GitHub del 2 de octubre de 2026 informó un cambio en el formato de los tokens de instalación de GitHub Apps: los tokens pueden ser bastante más largos, mientras las reglas de permisos, alcance y expiración permanecen. Es un recordatorio para tratar tokens como valores opacos y no depender de una longitud fija.

- Referencia: [GitHub Changelog — Stateless GitHub App installation tokens rolled out](https://github.blog/changelog/2026-10-02-stateless-github-app-installation-tokens-rolled-out/).
- Aplicación aquí: WordWaifu no implementa ni parsea esos tokens en el cliente, así que no se justifica un cambio de código ni agregar una integración. Cualquier futura automatización no debe inspeccionar su longitud o estructura interna.

## 4. Trazabilidad factual para una enciclopedia narrativa

- Cada arista del grafo apunta a una afirmación y una ruta de investigación en el catálogo DanMachi.
- El verificador de catálogo controla IDs únicos, endpoints activos, referencias de afirmaciones, continuidad y estado de evidencia.
- Las sinopsis editoriales no se presentan como texto completo de novela. Los compendios comunitarios permanecen en estado secundario mientras falte el localizador primario.
- Las pruebas automatizadas deben comprobar tanto los enlaces presentes como el estado de incertidumbre, para evitar que una importación transforme una hipótesis en canon.

## Estado de esta revisión

Se documentan las lecciones y se aplican a la integración de cobertura factual. No se afirma que Cloudflare o GitHub documenten un defecto específico de WordWaifu; son fuentes externas usadas para orientar prácticas de robustez.

## 5. Orden de carga del motor de historias en el navegador

- Síntoma/observación: el editor de historias consume `window.WordWaifuStoryForge`; el contrato de carga depende de que el motor se evalúe antes que `app.js`. Durante esta revisión, los controles de concepto y personaje no existían en el editor principal, aunque el proyecto sí tenía un motor de outline.
- Verificación local: `index.html` carga `src/story-forge.js` antes de `src/app.js`; ambos son scripts clásicos con `defer`. Los handlers nuevos verifican que los métodos del motor existan y muestran un estado visible si falta el motor.
- Fuente externa: [MDN — The script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) explica que los scripts clásicos con `defer` se ejecutan en orden documental y que `async` elimina esa garantía de orden.
- Aplicación: conservar el orden de dependencias; no añadir `async` ni mover `app.js` antes de `story-forge.js`. La prueba de navegador pulsa los botones nuevos y comprueba generación y guardado; los tests unitarios comprueban determinismo por semilla y campos del generador.
- Límite: MDN documenta la semántica de carga del navegador, no un incidente específico de WordWaifu. La ausencia de los botones era una carencia de integración propia del proyecto, no un fallo atribuido a MDN.



## 4. Migración compatible del grafo de relaciones importado — 2026-10-20

- **Problema local detectado:** src/project-schema.js y la rutina `ensureRelationshipStore` de src/app.js trataban la mera presencia de `relationships: []` como señal de que la migración ya estaba hecha. En el primer caso podía perderse información al validar/importar; en el segundo, también durante la recuperación del respaldo local o de un proyecto restaurado. Si una exportación intermedia guardaba la colección central vacía mientras las fichas conservaban `characters[].relationships`, reconstruir las proyecciones desde esa colección podía borrar los vínculos.
- **Solución:** completar el grafo de forma aditiva tanto en la validación de esquema como durante la recuperación de la aplicación. Se indexan primero las parejas centrales ya representadas y se migra cada pareja heredada válida que falte; las relaciones explícitas se conservan y los enlaces recíprocos no se duplican. Después se reconstruye la proyección por personaje desde el grafo central.
- **Pruebas de regresión añadidas:** pruebas de esquema para una colección `relationships: []` y otra parcialmente migrada, más un smoke test real de Chromium que arranca la aplicación desde un respaldo `localStorage` con IndexedDB deshabilitado y comprueba que los enlaces heredados sobreviven al guardado de recuperación. La CI debe confirmar el resultado del PR antes de considerar verificado el cambio.
- **Referencia técnica:** Danilo Sato, Martin Fowler — [Parallel Change (13 de mayo de 2014)](https://martinfowler.com/bliki/ParallelChange.html), describe la migración segura por etapas para mantener compatibilidad entre las formas antigua y nueva mientras se trasladan los consumidores. Aquí se aplica ese principio a datos JSON importados; no se atribuye a esa fuente el bug específico de WordWaifu.
