# WordWaifu

**Construye mundos. Conserva el canon. Escribe historias coherentes.**

WordWaifu se perfila como un taller local y offline-first para crear universos narrativos: atlas interactivo, personajes, lugares, acontecimientos, organizaciones, cronología y continuidad de historias. La rama `main` aún es principalmente documental; una propuesta de implementación sustancial existe en ramas y pull requests abiertos, por lo que deben revisarse e integrarse de forma ordenada antes de considerar el producto entregado.

## Estado actual

- **Fase:** fundación y descubrimiento.
- **Rama principal:** `main`.
- **Implementación verificada:** `main` contiene `.gitignore`, este README y `docs/ROADMAP.md`. La rama `foundation/story-foundry-north-star` incluye un prototipo HTML/CSS/JavaScript, esquema de proyecto, repositorio local, pruebas y workflow; véase el [PR de fundación](https://github.com/jonhararagi/wordwaifu/pull/1). Esa implementación no está integrada en `main`.
- **Regla de honestidad:** no se declarará una función, prueba, publicación o integración como terminada sin evidencia reproducible.

## Visión de producto

Construir una aplicación cuidada y competitiva, con la calidad de experiencia que se espera de un producto comercial, manteniendo el proyecto comprensible, accesible y sostenible.

Principios iniciales:

1. **Canon coherente.** Las relaciones, eventos y cronología deben ayudar a detectar contradicciones.
2. **Offline-first.** El núcleo debe funcionar localmente sin exigir cuentas, API ni IA remota.
3. **Datos portables.** Importar, validar, exportar y respaldar proyectos de forma explícita y segura.
4. **Diseño adaptable.** Planificar desde el comienzo para móvil y escritorio, con accesibilidad y rendimiento razonables.
5. **Privacidad por defecto.** No incluir secretos, credenciales ni datos personales en el repositorio; recopilar lo mínimo necesario.
6. **Calidad comprobable.** Cada función importante necesita criterios de aceptación y pruebas apropiadas.
7. **Arte y licencias responsables.** Preferir contenido original, dominio público o licencias compatibles. No copiar recursos de terceros solo porque el uso previsto sea no comercial.

## Ruta de trabajo propuesta

Consulta [la hoja de ruta](docs/ROADMAP.md) para las etapas, puertas de calidad y condiciones de salida. Revisa también el [PR de fundación](https://github.com/jonhararagi/wordwaifu/pull/1) y las ramas de trabajo relacionadas antes de iniciar cambios duplicados.

### Próximo paso inmediato

Auditar y reconciliar las ramas/PR existentes, confirmar qué revisión será la base de desarrollo y ejecutar la suite CI disponible antes de extender el prototipo. Evitar iniciar una arquitectura paralela.

## Cómo se trabajará

Protocolo de cada tarea: **INSPECT → PLAN → EXECUTE → VERIFY → PERSIST → REPORT**.

Los informes deben indicar tarea, estado, HEAD antes/después, archivos afectados, comandos y pruebas ejecutadas, evidencia y bloqueos. Distinguir explícitamente entre prueba real, comprobación estática y trabajo no ejecutado.

## Uso de recursos externos

Se pueden investigar herramientas, bibliotecas, referencias visuales y conjuntos de datos. Antes de incorporar cualquier recurso, registrar origen, licencia, atribución exigida, restricciones de redistribución y si permite el uso previsto. Los recursos con condiciones incompatibles se mantienen fuera del producto distribuido; si se usan temporalmente para evaluación, se documentan y se eliminan antes de la entrega. Las marcas, personajes y materiales protegidos no se consideran libres por el mero hecho de que el proyecto no sea comercial.

## Estado de este documento

Este README define una dirección inicial de trabajo. La hoja de ruta y las decisiones deben actualizarse cuando la inspección del código y las necesidades del propietario aporten evidencia nueva.
