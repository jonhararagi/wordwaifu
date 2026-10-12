# WordWaifu · Preview web desde el navegador

## Estado

No hay una publicación pública de GitHub Pages disponible para este repositorio en la revisión REMOTE-PREVIEW-001. No se ha activado Pages ni se ha desplegado la rama de trabajo sobre un sitio de producción.

La alternativa preparada es GitHub Codespaces. El enlace de abajo abre el flujo oficial de creación para la rama de lore; **es un enlace de inicio, no una URL de la aplicación ya publicada**:

https://codespaces.new/jonhararagi/wordwaifu?quickstart=1&ref=feature%2Fdanmachi-lore-poc

## Uso

1. Iniciá sesión en GitHub y abrí el enlace de Codespaces.
2. Confirmá que la rama seleccionada sea **feature/danmachi-lore-poc**. Creá el Codespace únicamente si tu cuota incluida está disponible y tus ajustes de facturación no permiten un gasto no deseado.
3. El contenedor ejecuta **.devcontainer/start-preview.sh** al arrancar. El servidor estático usa Python de la biblioteca estándar, sin npm install, extensiones obligatorias, claves API ni proveedor externo.
4. Abrí el panel **Ports** y usá el enlace del puerto **8000** si el navegador no se abre automáticamente. La visibilidad está configurada como **Private**: solo quien creó el Codespace, autenticado en GitHub, puede acceder.
5. La app se sirve desde la raíz **/**; así **src/lore-corpus.js** y las rutas relativas **./lore/danmachi/catalog.json** y los dos documentos Markdown se resuelven bajo el mismo origen.
6. Cerrá la sesión de preview y eliminá el Codespace cuando termines para no mantener almacenamiento consumido.

## Límite importante: facturación y acceso

Codespaces tiene una cuota mensual incluida en cuentas personales, pero el consumo que la supere puede ser facturable si hay un método de pago habilitado. Si no hay método de pago, GitHub bloquea el uso una vez agotada la cuota. Este repositorio no puede consultar tu consumo o configuración de facturación; revisalos antes de crear el entorno. No se creó un Codespace desde esta tarea.

El puerto no es una publicación pública ni una URL permanente. Requiere tu sesión de GitHub y el Codespace debe estar en ejecución. Esta solución evita alterar Pages, pero no se puede confirmar desde un navegador sin autenticar si tu cuenta tiene disponibilidad para crear el entorno.

## Alcance de archivos servido

El servidor tiene una lista permitida de rutas. Publica únicamente **index.html**, los módulos y estilos usados por la app, las tres ilustraciones SVG originales no oficiales de **assets/character-portraits/**, **lore/danmachi/catalog.json** y los documentos **BATCH-DM-003** y **BATCH-DM-004**. Las demás rutas siguen bloqueadas por defecto. Rutas como **.git/config**, **docs/** y los perfiles Markdown individuales responden 404. No cambia el corpus ni sus afirmaciones.

## Comprobaciones

El workflow **DanMachi Lore and Retrieval Integrity** valida la búsqueda local y el navegador Chromium. Entre sus pruebas existentes confirma que Ryu se recupera separada en **CONT-AR** y **CONT-ANIME**, y que una consulta sobre gustos de Ais sin evidencia produce una abstención explícita. El nuevo test del servidor comprueba que las rutas requeridas responden y que archivos fuera de la lista permitida no se exponen.

La enciclopedia de personajes carga además **src/character-archive.js**. Sus retratos son marcadores CSS decorativos, no imágenes oficiales.
