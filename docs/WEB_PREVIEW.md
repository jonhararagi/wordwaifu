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
5. La app se sirve desde la raíz **/**; así **src/lore-corpus.js** y las rutas relativas **./lore/danmachi/catalog.json**, los tres documentos de investigación y las fichas de personajes permitidas se resuelven bajo el mismo origen.
6. Cerrá la sesión de preview y eliminá el Codespace cuando termines para no mantener almacenamiento consumido.

## Límite importante: facturación y acceso

Codespaces tiene una cuota mensual incluida en cuentas personales, pero el consumo que la supere puede ser facturable si hay un método de pago habilitado. Si no hay método de pago, GitHub bloquea el uso una vez agotada la cuota. Este repositorio no puede consultar tu consumo o configuración de facturación; revisalos antes de crear el entorno. No se creó un Codespace desde esta tarea.

El puerto no es una publicación pública ni una URL permanente. Requiere tu sesión de GitHub y el Codespace debe estar en ejecución. Esta solución evita alterar Pages, pero no se puede confirmar desde un navegador sin autenticar si tu cuenta tiene disponibilidad para crear el entorno.

## Alcance de archivos servido

El servidor tiene una lista permitida de rutas. Publica únicamente **index.html**, los módulos y estilos usados por la app, las doce ilustraciones SVG originales no oficiales de **assets/character-portraits/**, **lore/danmachi/catalog.json**, los documentos **BATCH-DM-003**, **BATCH-DM-004** y **BATCH-DM-005**, y las 12 fichas Markdown explícitamente utilizadas por la enciclopedia. Esto permite que «Más info» recupere notas previas del repositorio sin abrir todo el árbol de lore. Los demás documentos Markdown siguen bloqueados. Rutas como **.git/config**, **docs/** y **lore/danmachi/characters/00-indice-personajes.md** responden 404.

## Comprobaciones

El workflow **DanMachi Lore and Retrieval Integrity** valida la búsqueda local y el navegador Chromium. Entre sus pruebas existentes confirma que Ryu se recupera separada en **CONT-AR** y **CONT-ANIME**, y que una consulta sobre gustos de Ais sin evidencia produce una abstención explícita. El nuevo test del servidor comprueba que las rutas requeridas responden y que archivos fuera de la lista permitida no se exponen.

La enciclopedia de personajes carga **src/character-archive.js** y también lee las fichas Markdown seleccionadas del repositorio. Así, el botón «Más info» puede recuperar notas de continuidad, advertencias cronológicas y preguntas de investigación que ya existían en esas fichas, en lugar de duplicarlas en un resumen nuevo. Para Ryu Lion, Alise (registrada históricamente como Lovelace), Astrea, Bell Cranel, Hestia, Ais Wallenstein, Eina Tulle, Finn Deimne, Freya, Ottar, Gojouno Kaguya y Lyra incluye retratos vectoriales conceptuales creados para WordWaifu y marcados como no oficiales. Las imágenes de las wikis no se copian al repositorio; la enciclopedia ofrece enlaces a galerías comunitarias mientras no se verifiquen licencias de terceros.
