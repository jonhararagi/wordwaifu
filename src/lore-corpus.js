(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.WordWaifuLoreCorpus = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const TICK = String.fromCharCode(96);
  const STOP_WORDS = new Set([
    "que","cual","cuales","como","donde","cuando","porque","para","por","con","sin",
    "una","uno","unas","unos","del","las","los","les","sus","sobre","entre",
    "esta","este","estos","estas","ser","son","fue","eran","era","hay","tiene",
    "tienen","tengo","quiero","saber","dime","me","te","se","su","mi","tu",
    "el","la","un","y","o","a","de","en","es","lo","le","al","quien","gustan","gusta","gustaria"
  ]);
  const ONLINE_SOURCE_DIRECTORY = [
    { id:"official-chronology", category:"official", title:"Cronología oficial de DanMachi", publisher:"Portal oficial de la serie", authority:"Referencia oficial", url:"https://danmachi.com/chronology/", coverage:"Cronología de la serie y obras derivadas, incluida la presentación de Astrea Record.", limits:"Es una referencia oficial de cronología/promoción; no reemplaza el pasaje completo de una novela." },
    { id:"wfs-danmemo-knights-fianna", category:"official", title:"WFS · Memoria Freese — Knights of Fianna", publisher:"Wright Flyer Studios (WFS)", authority:"Anuncio oficial del juego", url:"https://www.wfs.games/news/20220623_01.html", coverage:"Anuncio del relato original de quinto aniversario escrito por Fujino Omori y lista oficial de personajes, incluida Helga.", limits:"Confirma contexto e inclusión en el juego; no verifica toda la ficha comunitaria ni la reencarnación Helga–Lyra." },
    { id:"official-anime-v", category:"official", title:"Perfiles oficiales · DanMachi V", publisher:"Portal oficial del anime", authority:"Referencia oficial de adaptación", url:"https://danmachi.com/danmachi5/character/", coverage:"Perfiles de personajes y estado descrito para la adaptación de la quinta temporada.", limits:"Usar como CONT-ANIME; no transferir automáticamente todos los detalles a la novela ligera." },
    { id:"official-anime-v-ryuu-levelup", category:"official", title:"Anuncio oficial · Ryu Lion llega a nivel 6", publisher:"Portal oficial del anime DanMachi", authority:"Noticia oficial de adaptación", url:"https://danmachi.com/news/news255.php", coverage:"Anuncio oficial del nivel 6 de Ryu, el doble ascenso, la magia Astrea Record y su participación en la guerra de Familias.", limits:"Fuente promocional CONT-ANIME; no sustituye un localizador del texto de la novela." },
    { id:"official-anime-iv", category:"official", title:"Perfiles oficiales · DanMachi IV", publisher:"Portal oficial del anime", authority:"Referencia oficial de adaptación", url:"https://danmachi.com/danmachi4/character/", coverage:"Perfiles de Astrea Familia y otros personajes de la adaptación.", limits:"La página oficial describe la adaptación; no constituye por sí sola un localizador de la novela." },
    { id:"official-sword-oratoria", category:"official", title:"Perfiles oficiales · Sword Oratoria", publisher:"Portal oficial del anime Sword Oratoria", authority:"Referencia oficial de adaptación", url:"https://danmachi.com/sword_oratoria/character/", coverage:"Perfiles de Loki Familia y personajes relacionados de Sword Oratoria.", limits:"Los cargos, edades y niveles corresponden al perfil de adaptación; no equivalen a una cronología exhaustiva de la novela." },
    { id:"official-anime-episode1", category:"official", title:"Sinopsis oficial · DanMachi episodio 1", publisher:"Portal oficial del anime DanMachi", authority:"Sinopsis oficial de adaptación", url:"https://danmachi.com/danmachi/story/episode1.html", coverage:"Punto de apertura de Bell y estado inicial de Hestia Familia en la sinopsis.", limits:"Usar como CONT-ANIME; cotejar el volumen 1 antes de atribuir todos los detalles a la novela." },
    { id:"official-anime-iii", category:"official", title:"Perfiles oficiales · DanMachi III", publisher:"Portal oficial del anime", authority:"Referencia oficial de adaptación", url:"https://danmachi.com/danmachi3/character/", coverage:"Perfiles publicados para personajes y estados representados en la tercera temporada.", limits:"Comprobar temporada y continuidad antes de reutilizar una afirmación." },
    { id:"official-danmachi3-story", category:"official", title:"Sinopsis oficial · DanMachi III, episodio 12", publisher:"Portal oficial del anime", authority:"Sinopsis oficial de adaptación", url:"https://danmachi.com/danmachi3/story/index.html", coverage:"Mención de Daedalus Street en la sinopsis del episodio 12.", limits:"Sólo respalda lo que la sinopsis describe en CONT-ANIME; no prueba la geografía detallada de la novela." },
    { id:"official-danmachi2-story", category:"official", title:"Sinopsis oficial · DanMachi II, episodio 5", publisher:"Portal oficial del anime", authority:"Sinopsis oficial de adaptación", url:"https://danmachi.com/danmachi2/story/index.html?slideNum=2", coverage:"La iglesia que servía de base a Hestia Familia, su destrucción y el traslado a la mansión de Apollo Familia.", limits:"La sinopsis no fija la dirección urbana ni asigna expresamente a Apollo Familia la causa de la destrucción de la iglesia." },
    { id:"official-anime-location-glossary", category:"official", title:"Glosario oficial de lugares · DanMachi", publisher:"Portal oficial del anime DanMachi", authority:"Glosario oficial de adaptación (CONT-ANIME)", url:"https://danmachi.com/danmachi/special/index.html", coverage:"Entradas oficiales de Orario, Babel, Hostess of Fertility y Rivira; Rivira aparece como población comercial del piso seguro 18 del Dungeon.", limits:"La descripción corresponde a CONT-ANIME; no ofrece un mapa exacto ni autoriza trasladar automáticamente sus detalles a la novela principal." },
    { id:"ga-ln-volume-01-synopsis", category:"official", title:"GA Bunko · DanMachi volumen 1 — sinopsis editorial", publisher:"GA Bunko / SB Creative", authority:"Sinopsis editorial oficial (paratexto, no fragmento narrativo)", url:"https://ga.sbcr.jp/product/9784797372809/", coverage:"Premisa geográfica general: Orario como gran ciudad que alberga el Dungeon, un vasto laberinto subterráneo.", limits:"No verifica avenidas, barrios, distancias ni distribución interna; mantener la distinción entre paratexto y texto de la novela." },
    { id:"ga-ln-volume-02-trial", category:"official", title:"GA Bunko · DanMachi — muestra de lectura trial02.pdf", publisher:"GA Bunko / SB Creative", authority:"Extracto editorial de novela ligera (acceso parcial)", url:"https://ga.sbcr.jp/sp/danmachi/trial02.pdf", coverage:"La muestra oficial del volumen 2 sitúa, en el índice textual del capítulo IV 「だからボクは力になりたい」, una plaza semicircular al norte de Orario frente a una avenida principal; aparecen marcadores de folio 20–21.", limits:"El PDF directo devolvió HTTP 503; capítulo y folios proceden del índice textual, no de inspección visual. Mantener CONT-MAIN-LN y source_checked_excerpt_only; no asignar coordenadas ni nombre propio." },
    { id:"ga-ln-volume-03-trial", category:"official", title:"GA Bunko · DanMachi volumen 3 — muestra trial03.pdf", publisher:"GA Bunko / SB Creative", authority:"Extracto editorial de novela ligera (acceso parcial)", url:"https://ga.sbcr.jp/sp/danmachi/trial03.pdf", coverage:"El índice del capítulo I menciona Pantheon durante un recorrido por una avenida comercial y describe la entrada en la sede de la Guild de mármol blanco.", limits:"El PDF directo devolvió HTTP 503; los folios 36–37 provienen del índice textual y no han sido verificados visualmente. El orden narrativo favorece distinguir Pantheon de la sede de la Guild; véase DMR-051. La relación física exacta con Babel sigue sin resolver." },
    { id:"official-sword-oratoria-vol-7", category:"official", title:"GA Bunko · Sword Oratoria volumen 7", publisher:"GA文庫 / SB Creative", authority:"Sinopsis editorial oficial", url:"https://ga.sbcr.jp/product/9784797389340/", coverage:"La sinopsis dice que Loki Familia obtiene una pista en Melen y comienza a investigar Daedalus Street; menciona también el avance contra remanentes de Evilus.", limits:"La afirmación está acotada a CONT-SO-LN y al resumen del volumen; no confirma la primera mención en la novela principal ni la geometría de la calle." },
    { id:"official-daedalus-short-story", category:"official", title:"GA Bunko · relato corto 迷宮街の恋愛話・裏", publisher:"GA文庫 / SB Creative", authority:"Relato corto/extra oficial (CONT-SHORT)", url:"https://ga.sbcr.jp/sp/AIS/fifthanniv_ais.pdf", coverage:"El índice textual sitúa una escena nocturna en Daedalus Street con integrantes de Loki Familia, entre ellas Ais, Tiona, Lefiya y Filvis.", limits:"El PDF directo devolvió HTTP 503; el pasaje es `source_checked_excerpt_only`. No transferir la escena a la novela principal ni a Sword Oratoria." },
    { id:"official-prototype-03", category:"official", title:"DanMachi Prototype · Episodio 3", publisher:"Portal oficial de DanMachi", authority:"Texto oficial Prototype · continuidad separada", url:"https://danmachi.com/10_projects/prototype_03.php", coverage:"Descripción introductoria de Orario como ciudad sobre el Dungeon, la Guild y habitantes de diferentes pueblos.", limits:"Obra titulada Prototype; mantener como CONT-PROTOTYPE, no como prueba automática del canon publicado." },
    { id:"official-prototype-16", category:"official", title:"DanMachi Prototype · Episodio 16", publisher:"Portal oficial de DanMachi", authority:"Texto oficial Prototype · continuidad separada", url:"https://danmachi.com/10_projects/prototype_16.php", coverage:"Ocho avenidas cardinales/intercardinales, centro urbano, Central Park, comercio callejero y tiendas/servicios de Babel.", limits:"Los detalles sólo quedan verificados para Prototype; no extrapolar a CONT-MAIN-LN ni CONT-ANIME sin cotejo." },
    { id:"official-prototype-26", category:"official", title:"DanMachi Prototype · Episodio 26", publisher:"Portal oficial de DanMachi", authority:"Texto oficial Prototype · continuidad separada", url:"https://danmachi.com/10_projects/prototype_26.php", coverage:"Central Park alrededor de Babel, escena nocturna, locales hasta el piso veinte y habitaciones de dioses en los pisos superiores.", limits:"Distribución y usos por piso pertenecen a Prototype hasta una verificación independiente." },
    { id:"ga-astrea-1", category:"official", title:"GA Bunko · Astrea Record, volumen 1", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial", url:"https://ga.sbcr.jp/product/9784815610173", coverage:"Sinopsis editorial oficial de la primera novela de Astrea Record.", limits:"La sinopsis no equivale al texto íntegro ni permite inventar capítulos, páginas o escenas." },
    { id:"ga-astrea-2", category:"official", title:"GA Bunko · Astrea Record, volumen 2", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial", url:"https://ga.sbcr.jp/product/9784815610180", coverage:"Sinopsis editorial oficial de la segunda novela de Astrea Record.", limits:"Sirve para afirmaciones realmente presentes en la sinopsis, no para reconstruir cada detalle." },
    { id:"ga-astrea-3", category:"official", title:"GA Bunko · Astrea Record, volumen 3", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial", url:"https://ga.sbcr.jp/product/9784815617554", coverage:"Sinopsis editorial oficial de la tercera novela de Astrea Record.", limits:"No sustituye la lectura y localización del pasaje en la novela." },
    { id:"publisher-yenpress-astrea-record-vol3", category:"official", title:"Yen Press · Astrea Record, Vol. 3 (edición inglesa)", publisher:"Yen Press / Yen On", authority:"Catálogo editorial oficial", url:"https://yenpress.com/titles/9781975379926-astrea-record-vol-3-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-tales-of-heroes", coverage:"Ficha oficial de la edición inglesa licenciada; identifica autor, ISBN 9781975379926, fecha de publicación (26 de noviembre de 2024) y sinopsis general de la batalla final.", limits:"La página ofrece metadatos y sinopsis editorial, no texto narrativo ni localizadores individuales de Alfia, Zald o Erebus. No usarla para verificar biografías, técnicas o alineamientos. CONT-AR, edición inglesa." },
    { id:"licensed-retailer-bookwalker-astrea-record-vol3", category:"licensed_retailer", title:"BOOK☆WALKER · Astrea Record 3 (ficha editorial japonesa)", publisher:"BOOK☆WALKER / SB Creative", authority:"Distribuidor licenciado", url:"https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/", coverage:"Ficha de la edición japonesa de アストレア・レコード３ 正邪決戦; identifica a Fujino Omori, ilustraciones de Kakage y el editor SB Creative. La ficha ofrece el enlace 試し読み (muestra gratuita).", limits:"La sinopsis y los metadatos no verifican escenas o detalles biográficos por personaje. CONT-AR, edición japonesa." },
    { id:"licensed-retailer-bookwalker-astrea-record-vol3-sample", category:"licensed_retailer", title:"BOOK☆WALKER · muestra gratuita de Astrea Record 3", publisher:"BOOK☆WALKER / SB Creative", authority:"Muestra gratuita de distribuidor licenciado", url:"https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/?sample=1", coverage:"Ruta directa al lector de muestra gratuita enlazado desde la ficha de BOOK☆WALKER para el volumen japonés 3 de Astrea Record.", limits:"La primera comprobación automatizada del 25-10-2026 devolvió “Could not download. Please check your network connection.”; un reintento por la ruta de muestra pública normal del mismo día terminó en timeout. Ningún intento devolvió páginas narrativas legibles. Estos errores no demuestran que la edición esté indisponible para todos los lectores. No citar ni inferir escenas desde esta prueba. CONT-AR; metadata_checked_only." },
    { id:"licensed-retailer-bookwalker-astrea-record-vol1-sample", category:"licensed_retailer", title:"BOOK☆WALKER · muestra gratuita de Astrea Record 1", publisher:"BOOK☆WALKER / SB Creative", authority:"La ficha japonesa anuncia 試し読み (muestra gratuita); texto de muestra no extraído", url:"https://bookwalker.jp/dee09029f8-9a55-40d2-bce2-384e8387f016/?sample=1", coverage:"Ficha del volumen 1: https://bookwalker.jp/dee09029f8-9a55-40d2-bce2-384e8387f016/. La ruta normal redirigió al lector de prueba, pero este respondió un error de red.", limits:"En el reintento público normal del 25-10-2026, el lector mostró “Could not download. Please check your network connection.” No se obtuvo página narrativa ni localizador. El error no demuestra que el libro esté indisponible para todos los lectores. CONT-AR; metadata_checked_only." },
    { id:"licensed-retailer-bookwalker-astrea-record-vol2-sample", category:"licensed_retailer", title:"BOOK☆WALKER · muestra gratuita de Astrea Record 2", publisher:"BOOK☆WALKER / SB Creative", authority:"La ficha de producto y la serie muestran 試し読み (muestra gratuita); texto de muestra no extraído", url:"https://bookwalker.jp/deb27a4c03-eff6-43f8-a76b-105368b329aa/?sample=1", coverage:"Ficha del volumen 2: https://bookwalker.jp/deb27a4c03-eff6-43f8-a76b-105368b329aa/. La página identifica アストレア・レコード２ 正義失墜 y a SB Creative como editorial.", limits:"Los intentos públicos normales de extraer la muestra del 25-10-2026 terminaron en timeout; no se obtuvo texto narrativo legible. No inferir escenas o ausencia de personajes de un timeout. CONT-AR; metadata_checked_only." },
    { id:"licensed-preview-google-play-books-danmachi-vol14", category:"licensed_retailer", title:"Google Play Books · DanMachi vol. 14 (muestra anunciada; texto no cotejado)", publisher:"Google Play Books / Yen Press LLC", authority:"Ficha de distribuidor licenciado; la ficha indexada anuncia Free sample, pero no se inspeccionó la muestra", url:"https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Try_to_Pick_Up_Girls_i?id=PLS9DwAAQBAJ", coverage:"La ficha pública indexada identifica DanMachi vol. 14 y a Yen Press LLC como vendedor; el registro bibliográfico de Google Books de la misma edición informa Limited preview. La comprobación de las páginas públicas solo recuperó metadatos/sinopsis y no expuso texto de muestra.", limits:"Ruta para consulta normal autorizada, no extracto narrativo recuperado. No se leyó el capítulo 13 ni el epílogo; no respalda la trampa de Rudra Familia, la aparición del Juggernaut ni la responsabilidad personal de Rudra. No inventar página o capítulo desde la sinopsis; CONT-MAIN-LN; metadata_checked_only." },
    { id:"official-sbcreative-astrea-record-vol1-sample", category:"official", title:"SB Creative BinB · Astrea Record 1 — 立ち読み (reader route; metadata only)", publisher:"SB Creative / GA Bunko", authority:"Tienda electrónica oficial de SB Creative; la página de la serie ofrece el enlace 立ち読み", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561017JAAA01MBJE3X&lginbtn=false", coverage:"La página oficial de la serie DanMachi lista アストレア・レコード１　邪悪胎動 con la opción de lectura de muestra 立ち読み: https://ebook.sbcr.jp/landing/p/danmachi. La ruta directa abre el lector BinB.", limits:"La extracción pública del lector solo expuso un iframe y el estado Now loading...; no se recuperó ninguna página narrativa ni localizador. Esto describe esta consulta, no demuestra indisponibilidad para todos los lectores. CONT-AR; metadata_checked_only." },
    { id:"official-sbcreative-astrea-record-vol2-sample", category:"official", title:"SB Creative BinB · Astrea Record 2 — 立ち読み (reader route; metadata only)", publisher:"SB Creative / GA Bunko", authority:"Tienda electrónica oficial de SB Creative; la página de la serie ofrece el enlace 立ち読み", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561018JAAA02MBJE3X&lginbtn=false", coverage:"La página oficial de la serie DanMachi lista アストレア・レコード２　正義失墜 con la opción de lectura de muestra 立ち読み: https://ebook.sbcr.jp/landing/p/danmachi. La ruta directa abre el lector BinB.", limits:"La extracción pública del lector solo expuso un iframe y el estado Now loading...; no se recuperó ninguna página narrativa ni localizador. Esto describe esta consulta, no demuestra indisponibilidad para todos los lectores. CONT-AR; metadata_checked_only." },
    { id:"official-sbcreative-astrea-record-vol3-sample", category:"official", title:"SB Creative BinB · Astrea Record 3 — 立ち読み (reader route; metadata only)", publisher:"SB Creative / GA Bunko", authority:"Tienda electrónica oficial de SB Creative; la página de la serie ofrece el enlace 立ち読み", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561019JAAA03MBJE3X&lginbtn=false", coverage:"La página oficial de la serie DanMachi lista アストレア・レコード３　正邪決戦 con la opción 立ち読み: https://ebook.sbcr.jp/landing/p/danmachi. La ficha directa del producto (https://ebook.sbcr.jp/product/81561019JAAA03MBJE3X) indica 立ち読み（無料） y muestra el aviso del visor «お使いのブラウザは新ビューワに対応しておりません。». En la consulta del 2026-10-25 la extracción solo mostró un iframe y “Now loading...”.", limits:"En la revalidación pública del 2026-10-29, el bloque de lector mostró el aviso «お使いのブラウザは新ビューワに対応しておりません。»; la apertura directa devolvió solo siete líneas y ninguna página narrativa. La sesión interactiva autorizada no pudo iniciar porque el servicio de navegador reportó insufficient_credits. No se confirmó el comportamiento del lector en un navegador compatible ni se obtuvo un localizador. Esto no demuestra indisponibilidad general. CONT-AR; metadata_checked_only; claims_supported: []." },
    { id:"official-sbcreative-danmachi-vol14-sample", category:"official", title:"SB Creative BinB · DanMachi vol. 14 — 立ち読み (reader route; metadata only)", publisher:"SB Creative / GA Bunko", authority:"Tienda electrónica oficial de SB Creative; la página de la serie ofrece el enlace 立ち読み", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=79739620JAAA14MBJE3X&lginbtn=false", coverage:"La página oficial de la serie DanMachi lista ダンジョンに出会いを求めるのは間違っているだろうか１４ con la opción de lectura de muestra 立ち読み: https://ebook.sbcr.jp/landing/p/danmachi. La ruta directa abre el lector BinB.", limits:"La extracción pública del lector solo expuso un iframe y el estado Now loading...; no se recuperó ninguna página narrativa ni localizador. Esto describe esta consulta, no demuestra indisponibilidad para todos los lectores. CONT-MAIN-LN; metadata_checked_only." },
    { id:"official-sbcreative-danmachi-vol20-sample", category:"official", title:"SB Creative BinB · DanMachi vol. 20 — 立ち読み (reader route; metadata only)", publisher:"SB Creative / GA Bunko", authority:"Tienda electrónica oficial de SB Creative; la página de la serie ofrece el enlace 立ち読み", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81562869JAAA20MBJE3X&lginbtn=false", coverage:"La página oficial de la serie DanMachi lista ダンジョンに出会いを求めるのは間違っているだろうか２０ con la opción de lectura de muestra 立ち読み: https://ebook.sbcr.jp/landing/p/danmachi. La ruta directa abre el lector BinB.", limits:"La extracción pública del lector solo expuso un iframe y el estado Now loading...; no se recuperó ninguna página narrativa ni localizador. Esto describe esta consulta, no demuestra indisponibilidad general. No respalda detalles del prólogo ni las retrospectivas de los capítulos 2–3 sobre Alfia, Zald o Afterglow. CONT-MAIN-LN; metadata_checked_only." },
    { id:"licensed-retailer-barnes-noble-danmachi-vol14-sample", category:"licensed_retailer", title:"Barnes & Noble NOOK · DanMachi vol. 14 (Read sample; metadata only)", publisher:"Barnes & Noble / Yen Press", authority:"Distribuidor licenciado; la ficha ofrece el enlace Read sample", url:"https://nook.barnesandnoble.com/products/9781975385026/sample?sourceEan=9781975385019", coverage:"La ficha pública estadounidense de Barnes & Noble para DanMachi vol. 14 identifica la edición y ofrece Read sample: https://www.barnesandnoble.com/w/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-14-fujino-omori/1130510787. El enlace conduce a la ruta normal del lector NOOK.", limits:"El intento de abrir la ruta de muestra en esta consulta devolvió Cache miss y no expuso páginas narrativas. No se leyó el capítulo 13 ni el epílogo; no respalda la trampa de Rudra Familia, la aparición del Juggernaut ni la responsabilidad personal de Rudra. El resultado no demuestra indisponibilidad general ni disponibilidad en todas las regiones. CONT-MAIN-LN; metadata_checked_only." },
    { id:"licensed-retailer-bookwalker-danmachi-vol14-sample", category:"licensed_retailer", title:"BOOK☆WALKER · muestra gratuita de DanMachi, volumen 14", publisher:"BOOK☆WALKER / SB Creative / GA Bunko", authority:"Muestra gratuita de distribuidor licenciado; no se leyó texto narrativo", url:"https://bookwalker.jp/deb74ef953-7194-47cb-8abb-7453a4b2e353/?sample=1", coverage:"Ruta de muestra enlazada desde la ficha japonesa de ダンジョンに出会いを求めるのは間違っているだろうか１４, publicada por SB Creative / GA Bunko.", limits:"La ruta normal del 25-10-2026 redirigió al visor de prueba y devolvió “Could not download. Please check your network connection.” No se obtuvo página narrativa ni localizador reproducible. No respalda la trampa de Rudra Familia ni la atribución personal a Rudra; el error no demuestra indisponibilidad global. CONT-MAIN-LN; metadata_checked_only." },
    { id:"licensed-retailer-booklive-danmachi-vol14", category:"licensed_retailer", title:"BookLive · DanMachi vol. 14 (ficha y muestra anunciada)", publisher:"BookLive / SB Creative / GA Bunko", authority:"Distribuidor licenciado; vista previa anunciada, no inspeccionada", url:"https://booklive.jp/product/index/title_id/201522/vol_no/014", coverage:"La ficha pública japonesa de DanMachi vol. 14 presenta los controles ブラウザ試し読み (prueba en navegador) y アプリ試し読みはこちら (prueba en app). Se consultó la ficha comercial, no el contenido de la muestra.", limits:"Ruta de consulta autorizada, no pasaje narrativo recuperado. No se inspeccionaron páginas de la muestra ni se verificó el capítulo 13 o el epílogo; no respalda la trampa de Rudra Familia ni una atribución personal a Rudra. CONT-MAIN-LN; metadata_checked_only." },
    { id:"licensed-retailer-booklive-astrea-record-vol3", category:"licensed_retailer", title:"BookLive · Astrea Record 3 (ficha y muestra anunciada)", publisher:"BookLive / SB Creative / GA Bunko", authority:"Distribuidor licenciado; vista previa anunciada, no inspeccionada", url:"https://booklive.jp/product/index/title_id/1237250/vol_no/003", coverage:"La ficha pública japonesa de Astrea Record 3 presenta los controles ブラウザ試し読み (prueba en navegador) y アプリ試し読みはこちら (prueba en app). Se consultó la ficha comercial, no el contenido de la muestra.", limits:"Ruta de consulta autorizada, no pasaje narrativo recuperado. No se inspeccionaron páginas de la muestra; no verifica escenas, habilidades, identidades o relaciones de Alfia, Zald o Erebus. CONT-AR; metadata_checked_only." },
    { id:"licensed-retailer-bookwalker-astrea-record-vol1-sample-anthology", category:"licensed_retailer", title:"BOOK☆WALKER · GA文庫 2022-10 anthology sample (Astrea Record 1)", publisher:"BOOK☆WALKER / SB Creative / GA Bunko", authority:"Compilación de muestras gratuitas de distribuidor licenciado; el lector no expuso narrativa", url:"https://bookwalker.jp/dedafe030d-bc1c-4b5a-ad6a-877ba7bc3e7b/?sample=2", coverage:"La ficha del compendio gratuito de octubre de 2022 enumera Astrea Record 1, 邪悪胎動, entre las obras incluidas. La ficha advierte que la compilación de muestras puede diferir parcialmente del producto final.", limits:"El enlace normal redirigió al lector público viewer.bookwalker.jp/browserWebApi/03/view?cid=dafe030d-bc1c-4b5a-ad6a-877ba7bc3e7b; la extracción no pudo abrir esa vista y un reintento directo terminó en timeout. No se vio ninguna página narrativa ni localizador. Esta compilación no se trata como texto cotejado de la edición final. CONT-AR; metadata_checked_only." },
    { id:"licensed-retailer-bookwalker-astrea-record-vol2-sample-anthology", category:"licensed_retailer", title:"BOOK☆WALKER · GA文庫 2022-11 anthology sample (Astrea Record 2)", publisher:"BOOK☆WALKER / SB Creative / GA Bunko", authority:"Compilación de muestras gratuitas de distribuidor licenciado; el lector no expuso narrativa", url:"https://bookwalker.jp/ded45bc452-2ba7-41c9-9d75-e6951e5231fc/?sample=2", coverage:"La ficha del compendio gratuito de noviembre de 2022 anuncia Astrea Record 2 y resume el arco de la tragedia que alcanza Orario. Es una descripción de catálogo de una compilación de muestras, no una escena leída.", limits:"El enlace normal de muestra terminó en timeout durante la extracción pública. No se obtuvieron páginas narrativas ni localizadores de Alfia, Zald o Erebus. No se afirma que el lector esté caído para todos los usuarios ni se infieren escenas a partir de la sinopsis. CONT-AR; metadata_checked_only." },
    { id:"licensed-retailer-bookwalker-astrea-record-vol3-sample-anthology", category:"licensed_retailer", title:"BOOK☆WALKER · GA文庫 2022-12 anthology sample (Astrea Record 3)", publisher:"BOOK☆WALKER / SB Creative / GA Bunko", authority:"Compilación de muestras gratuitas de distribuidor licenciado; el lector no expuso narrativa", url:"https://bookwalker.jp/def1fe306c-b1b8-4c55-9390-1cb7f16d0775/?sample=2", coverage:"La ficha del compendio gratuito de diciembre de 2022 anuncia Astrea Record 3, 正邪決戦, y la conclusión de la batalla entre justicia y mal. Es sinopsis editorial de una compilación de muestras, no una escena leída.", limits:"El enlace normal de muestra terminó en timeout durante la extracción pública. No se obtuvieron páginas narrativas ni localizadores de Alfia, Zald o Erebus. No se afirma que el lector esté caído para todos los usuarios ni se infieren escenas a partir de la sinopsis. CONT-AR; metadata_checked_only." },
    { id:"community-fandom", category:"community", title:"DanMachi Wiki · Fandom", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/DanMachi_Wiki", coverage:"Índice amplio de personajes, familias, términos, volúmenes y cronología.", limits:"Usar para descubrir alias y posibles referencias; revisar las citas y confirmar con fuentes oficiales o novelas." },
    { id:"community-orario-en", category:"community", title:"DanMachi Wiki · Orario (inglés)", publisher:"Wiki comunitaria Fandom", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Orario", coverage:"Mapa esquemático y tabla de lugares de Orario por aparición.", limits:"Los sectores y posiciones del mapa son pistas; cotejar cada lugar en una fuente primaria." },
    { id:"community-orario-es", category:"community", title:"DanMachi Wiki en español · Orario", publisher:"Wiki comunitaria Fandom en español", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Orario", coverage:"Diagrama urbano etiquetado con ubicaciones candidatas.", limits:"No aceptar la geometría ni las relaciones espaciales del dibujo como oficiales sin cotejo." },
    { id:"community-daedalus-street", category:"community", title:"DanMachi Wiki · Daedalus Street", publisher:"Wiki comunitaria Fandom", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Daedalus_Street", coverage:"Descripción comunitaria de la calle, el trazado residencial y el orfanato de Maria.", limits:"La sinopsis del anime sólo confirma la mención del nombre; la topología y los lugares asociados requieren localizadores primarios." },
    { id:"community-guild", category:"community", title:"DanMachi Wiki · Guild", publisher:"Wiki comunitaria Fandom", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Guild", coverage:"Funciones atribuidas a la Guild y descripción del edificio Pantheon.", limits:"Separar institución y sede física; confirmar cada función en fuentes primarias." },
    { id:"community-babel", category:"community", title:"DanMachi Wiki · Babel", publisher:"Wiki comunitaria Fandom", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Babel", coverage:"Número de pisos y distribución funcional reportada de la torre.", limits:"Conservar pisos y usos detallados como pistas secundarias hasta cotejo primario." },
    { id:"community-orario-atwiki-ja", category:"community", title:"ダンまち @ ウィキ · オラリオ", publisher:"Wiki comunitaria japonesa atwiki", authority:"Fuente secundaria", url:"https://w.atwiki.jp/danmachi/pages/53.html", coverage:"Descripción comunitaria de murallas, avenidas radiales, economía de piedras mágicas y pista de ubicación/descripción de アモールの広場 (Plaza del Amor).", limits:"Página comunitaria con actualización visible de 2020; la Plaza del Amor y sus detalles permanecen en CONT-UNVERIFIED hasta cotejar el pasaje primario." },
    { id:"community-orario-atwiki-index-ja", category:"community", title:"ダンまちデータベース @ ウィキ · オラリオ", publisher:"Wiki comunitaria japonesa atwiki", authority:"Fuente secundaria", url:"https://w.atwiki.jp/danmachi-world/pages/13.html", coverage:"Índice abreviado de edificios principales y una base de Familia.", limits:"Usar para descubrir nombres; la lista breve no prueba ubicación o cronología." },
    { id:"community-timeline", category:"community", title:"DanMachi Wiki · Timeline", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Timeline", coverage:"Mapa de fechas aproximadas y acontecimientos de DanMachi, Sword Oratoria y Astrea Record.", limits:"La cronología puede simplificar o combinar continuidades; verificar cada dato antes de aprobarlo." },
    { id:"community-astrea-family", category:"community", title:"DanMachi Wiki · Astraea Familia", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Astraea_Familia", coverage:"Roster histórico/actual, función durante la Era Oscura y pistas de la caída de la Familia.", limits:"Contrastar el rol histórico, los nombres y los destinos con pasajes primarios; el roster puede mezclar periodos." },
    { id:"community-kaguya", category:"community", title:"DanMachi Wiki · Gojouno Kaguya", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Gojouno_Kaguya", coverage:"Ficha secundaria con afiliaciones, estado, nivel 4, magias Gokou/Shikai, skills Kaina Blood y Tekiheni, habilidades de desarrollo y armas.", limits:"La lista española de Habilidades atribuye Sakibeni donde la ficha inglesa dice Tekiheni; conservar el conflicto. Las estadísticas, técnicas y relaciones siguen siendo datos secundarios y no equivalen a un cotejo de novela; ver CHARACTER_UPDATE_LEDGER.md." },
    { id:"community-lyra", category:"community", title:"DanMachi Wiki · Lyra", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Lyra", coverage:"Ficha secundaria con nivel 3, magias Mūs Mine/Wingus Smite, skills Ratts Phil/Agile Salt, desarrollo Abnormal Resistance, boomerangs Carnivore, bombas y objeto mágico Aegis.", limits:"Wingus Smite no presenta un efecto explicado en la consulta; no inventarlo ni asignar costes no relatados. Ver CHARACTER_UPDATE_LEDGER.md." },
    { id:"community-alise", category:"community", title:"DanMachi Wiki · Alise Lovell", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Alise_Lovell", coverage:"Ficha secundaria con nivel 4, magia Agaris Alvesynth, skills Lubrude Bequia/Batleate Asyrath, desarrollo Hunter/Abnormal Resistance/Fire Flash y equipo Crimson Order/Crimson Flower Heat Dress.", limits:"Detalles de combate, estadísticas y equipo siguen siendo secundarios aunque la ficha los enumere; sin costes o localizadores primarios no se elevan a canon cotejado. Véase CHARACTER_UPDATE_LEDGER.md." },
    { id:"community-celty-srowa", category:"community", title:"DanMachi Wiki · Celty Srowa", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Celty_Srowa", coverage:"Ficha secundaria sobre origen, personalidad, funciones de retaguardia y atribución individual de magia de fuego; la página de Ryu le atribuye otra magia de rayo.", limits:"La atribución fuego/rayo queda en conflicto entre fuentes secundarias comunitarias; no afirmar que posee ambas ni escoger una sin evidencia primaria. La personalidad no se reescribe en esta actualización; véase CHARACTER_UPDATE_LEDGER.md." },
    { id:"community-iska-bra-es", category:"community", title:"DanMachi Wiki en español · Iska Bra", publisher:"Wiki comunitaria en español", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Iska_Bra", coverage:"Historia, motivación, moda y personalidad atribuidas a Iska.", limits:"La biografía recoge un resumen comunitario; no sustituye la novela ni confirma edad o nivel." },
    { id:"community-minor-characters", category:"community", title:"DanMachi Wiki · Minor Characters", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Minor_Characters", coverage:"Resumen de integrantes secundarios; en la pasada del 2026-10-27 aportó magia curativa de Maryuu, equipo de Asta y rangos amplios como 3–4 para varios miembros históricos de Astrea Familia.", limits:"Artículo agregador, no fuente primaria. Un rango 3–4 no determina el nivel individual; las filas pueden omitir datos o mezclar estados. Véase CHARACTER_UPDATE_LEDGER.md para resultados y reglas de no repetición." },
    { id:"community-ryuu-en", category:"community", title:"DanMachi Wiki · Ryuu Lion", publisher:"Wiki comunitaria mantenida por colaboradores", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Ryuu_Lion", coverage:"Resumen comunitario de relaciones y magias atribuidas a antiguas compañeras de Ryu, incluidas magias nombradas (Gokou, Rea Vindemia, Mūs Mine, Irivute) y efectos descritos sin nombre para Noin, Neze, Iska, Asta y Celty.", limits:"Usar como fuente secundaria de descubrimiento. Algunos efectos no tienen nombre reportado y Celty recibe atribuciones de fuego y rayo en fuentes distintas; no resolver el conflicto ni inventar costes sin pasaje primario. Véase CHARACTER_UPDATE_LEDGER.md." },
    { id:"community-ryuu-es", category:"community", title:"DanMachi Wiki en español · Ryuu Lion", publisher:"Wiki comunitaria en español", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Ryuu_Lion", coverage:"Historia y cronología de Ryu antes y después de la caída de Astrea Familia.", limits:"La narración combina periodos y referencias secundarias; comprobar cada acontecimiento por separado." },
    { id:"community-alfia-abilities-es", category:"community", title:"DanMachi Wiki en español · Alfia/Habilidades", publisher:"Wiki comunitaria en español", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Alfia/Habilidades", coverage:"Nombres, efectos y costes reportados para Satanas Verion, Silentium Eden, Genos Angelus y Gif Blessing.", limits:"Los costes numéricos y la descripción de efectos requieren cotejo con los pasajes primarios; no equivalen a reglas generales confirmadas." },
    { id:"community-zald-es", category:"community", title:"DanMachi Wiki en español · Zald", publisher:"Wiki comunitaria en español", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Zald", coverage:"Instantánea histórica, habilidades, magia, arma, enfrentamiento con Behemoth y veneno reportado.", limits:"Niveles, estadísticas y secuencia histórica son datos comunitarios; no se convierten en valores permanentes ni hechos primarios." },
    { id:"community-alfia-en", category:"community", title:"DanMachi Wiki · Alfia (inglés)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Alfia", coverage:"Perfil comunitario de Alfia: identidad, afiliación reportada a Hera Familia, instantánea histórica, vínculos familiares y habilidades atribuidas; pista de búsqueda para DMR-045.", limits:"Wiki secundaria, no texto primario. Mantener niveles, habilidades y parentescos como claims con procedencia propia; no inferir valores permanentes ni asignar páginas no verificadas. Continuidad según cada claim (CONT-AR/CONT-GAME/CONT-MAIN-LN)." },
    { id:"community-meteria-en", category:"community", title:"DanMachi Wiki · Meteria (inglés)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Meteria", coverage:"Perfil comunitario de Meteria: maternidad de Bell, parentesco reportado con Alfia, antigua afiliación a Hera Familia, apariencia y salud.", limits:"Fuente secundaria para los claims de Meteria, pendiente del localizador narrativo primario en CONT-MAIN-LN. La entrevista sobre Memoria Freese no nombra a Meteria; no elevar la identidad de la madre usando esa entrevista sola ni trasladar CONT-AU al canon principal." },
    { id:"community-meteria-es", category:"community", title:"DanMachi Wiki · Meteria (español)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Meteria", coverage:"Contraste comunitario en español del perfil de Meteria: parentesco reportado con Alfia y Bell, afiliación e información biográfica.", limits:"Segunda presentación de información comunitaria, no evidencia primaria independiente. Mantener el parentesco y la biografía en estado secundario hasta localizar el pasaje de CONT-MAIN-LN; no inventar fecha, página ni identidad del padre." },
    { id:"community-zald-en", category:"community", title:"DanMachi Wiki · Zald (inglés)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Zald", coverage:"Perfil de Zald: afiliación histórica reportada a Zeus Familia, instantánea de estado, Behemoth, veneno y habilidades atribuidas.", limits:"La ficha comunitaria sirve para localizar datos, no para cotejar capítulo/página de Astrea Record. Mantener la progresión temporal y los costes reportados por separado; no convertir una instantánea en estadística permanente ni en escala automática de combate (CONT-AR)." },
    { id:"community-erebus-en", category:"community", title:"DanMachi Wiki · Erebus (inglés)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Erebus", coverage:"Perfil comunitario de Erebus: identidad divina, apariencia, sobrenombre, afiliación atribuida a Evilus y denominaciones reportadas.", limits:"No constituye un localizador de Astrea Record. «Eren» no se incorpora como alias canónico sin comprobación primaria; no inferir poderes, jerarquía total o responsabilidad individual sobre cada facción de Evilus. Conservar separados CONT-AR y CONT-GAME." },
    { id:"community-rudra-familia-en", category:"community", title:"DanMachi Wiki · Rudra Familia (inglés)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Rudra_Familia", coverage:"Resumen comunitario de Rudra Familia, afiliación atribuida a Evilus y la trampa contra Astrea Familia asociada con la aparición del Juggernaut.", limits:"El resumen atribuye acciones a la Familia como grupo y no prueba que el dios Rudra diseñara, conociera, ordenara o autorizara personalmente el plan. Mantener el incidente posterior de CONT-MAIN-LN separado del marco T-7 de CONT-AR; verificar el pasaje de la novela." },
    { id:"community-rudra-es", category:"community", title:"DanMachi Wiki · Rudra (español)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Rudra", coverage:"Perfil comunitario del dios Rudra: apariencia, afiliación atribuida a Rudra Familia/Evilus y estado posterior reportado.", limits:"Datos secundarios sin localizador primario individual. La afiliación del dios no demuestra que participara personalmente en la trampa ni que conociera las acciones de Jura; no atribuirle responsabilidad sin evidencia de CONT-MAIN-LN." },
    { id:"community-miraheze-meteria-en", category:"community", title:"DanMachi Wiki (Miraheze) · Meteria (inglés)", publisher:"DanMachi Wiki contributors · Miraheze", authority:"Fuente secundaria comunitaria; ficha accesible", url:"https://danmachien.miraheze.org/wiki/Meteria", coverage:"El perfil público identifica a Meteria como madre de Bell, hermana gemela de Alfia y antigua integrante de Hera Familia; su ficha de personaje lo declara en la infobox y el resumen biográfico.", limits:"Es una wiki comunitaria, no fuente oficial ni localizador de una novela. No se ha establecido si esta página es editorialmente independiente de otras wikis; úsese como referencia secundaria accesible, sin promover por sí sola una relación a canon primario ni nombrar al padre de Bell." },
    { id:"community-miraheze-alfia-en", category:"community", title:"DanMachi Wiki (Miraheze) · Alfia (inglés)", publisher:"DanMachi Wiki contributors · Miraheze", authority:"Fuente secundaria comunitaria; ficha accesible", url:"https://danmachien.miraheze.org/wiki/Alfia", coverage:"La infobox enumera a Meteria como hermana gemela y a Bell como sobrino; incluye metadatos de aparición como retrospectiva del volumen 20 y Astrea Record, vol. 1, además de referencias a perfil de juego y ficha de estado.", limits:"Fuente secundaria comunitaria, no es fuente oficial ni localizador primario. El índice de apariciones es una pista de búsqueda, no una página narrativa comprobada. Los estados, habilidades y parentescos continúan sujetos a los claims y límites de cada continuidad; no asignar capítulo/página no vistos." },
    { id:"community-miraheze-zald-en", category:"community", title:"DanMachi Wiki (Miraheze) · Zald (inglés)", publisher:"DanMachi Wiki contributors · Miraheze", authority:"Fuente secundaria comunitaria; ficha accesible", url:"https://danmachien.miraheze.org/wiki/Zald", coverage:"La infobox reporta afiliación previa a Zeus Familia y aparición en Astrea Record, vol. 1; el resumen describe a Behemoth, el veneno y la historia posterior de Zald.", limits:"Fuente secundaria comunitaria, no es fuente oficial ni lectura directa del volumen ni localizador primario. Los niveles, estados, costes y secuencias conservan su procedencia comunitaria; no demuestra las retrospecciones de Afterglow atribuidas a los capítulos 2–3 del volumen 20." },
    { id:"community-miraheze-erebus-en", category:"community", title:"DanMachi Wiki (Miraheze) · Erebus (inglés)", publisher:"DanMachi Wiki contributors · Miraheze", authority:"Fuente secundaria comunitaria; ficha accesible", url:"https://danmachien.miraheze.org/wiki/Erebus", coverage:"La infobox registra la aparición en Astrea Record, vol. 1, y el resumen asocia a Erebus con Evilus y con los sucesos originales de Memoria Freese.", limits:"Fuente secundaria comunitaria, no es fuente oficial ni localizador primario. No promueve la ideología del juego a la novelización. La etiqueta “Eren” procede de esa wiki y sigue sin confirmación primaria como alias canónico; no inferir poderes ni responsabilidad total sobre Evilus." },
    { id:"community-miraheze-rudra-familia-en", category:"community", title:"DanMachi Wiki (Miraheze) · Rudra Familia (inglés)", publisher:"DanMachi Wiki contributors · Miraheze", authority:"Fuente secundaria comunitaria; ficha accesible", url:"https://danmachien.miraheze.org/wiki/Rudra_Familia", coverage:"El resumen comunitario describe a Rudra Familia como parte de Evilus y atribuye a la Familia una trampa contra Astrea Familia que provocó la aparición accidental del Juggernaut.", limits:"Fuente secundaria comunitaria, no es fuente oficial ni localizador primario reproducible. Mantener la acción atribuida al grupo separada de la responsabilidad personal del dios Rudra: no prueba que diseñara, conociera, ordenara o autorizara el plan." },
    { id:"community-booklive-astrea-record-vol3-review", category:"community", title:"BookLive · Reseña comunitaria de Astrea Record 3 (entrada del 2023-02-11)", publisher:"BookLive / reseña de usuario atribuida a ブクログ", authority:"Reseña comunitaria de lector; no es texto editorial", url:"https://booklive.jp/review/list/title_id/1237250/vol_no/003", coverage:"Una reseña de usuario fechada el 11-02-2023 resume el séptimo día de la guerra, ubica el duelo Zald–Ottar en la superficie y el combate de Alfia contra Astrea Familia dentro del Dungeon; menciona también a Delphyne. El fragmento visible/indexado parece aludir a una ofrenda floral de Bell y Hermes ante tumbas de Erebus, Zald y Alfia (DMR-045-CLM-022).", limits:"Fuente secundaria generada por usuario dentro de una página de reseñas. El resumen puede contener errores y no sustituye la novela; no es la sinopsis editorial oficial ni un localizador narrativo primario. La mención de flores y tumbas es una pista para cotejo, no confirmación de escena, relaciones privadas ni destino biográfico. CONT-AR; secondary_checked." },
    { id:"community-astrea-record-vol3-differences", category:"community", title:"DanMachi Wiki · Astrea Record Light Novel Volume 3/Differences", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria · comparación comunitaria entre Memoria Freese y la novelización", url:"https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3/Diferencias", coverage:"Resume adiciones/cambios que atribuye a la novelización: Satanas Verion/Lugio con un segundo ataque explosivo, el pendiente de Asfi, el uso por Alfia de la esgrima de Zald, detalles de Genos Angelus y Gif Blessing, Deus Ambrosia y el estado final de Zald, y una escena EXTRA con Zald, Alfia y Erebus. Guía de búsqueda para CONT-AR, no transcripción narrativa.", limits:"Wiki comunitaria y página de diferencias, no texto primario. No usar como cita ni localizador de capítulo/página; no elevar sus detalles a source_checked ni trasladar información de CONT-GAME a CONT-AR sin cotejo. La página no demuestra la formulación exacta ni ofrece paginación narrativa reproducible." },
    { id:"official-author-note-meteria-alfia-zald-au", category:"official", title:"Fujino Omori · それは遥か彼方の静穏の夢", publisher:"Fujino Omori (nota del autor)", authority:"Fuente primaria de autor; continuidad alternativa", url:"https://note.com/fujinoomori/n/n629829ac3fe4", coverage:"Caracterización de Meteria y situación hipotética en la que Alfia y Zald crían a Bell, registrada exclusivamente como CONT-AU.", limits:"No confirma que esa crianza o esas decisiones sucedieran en CONT-MAIN-LN. El parentesco en la novela principal sigue necesitando un localizador narrativo primario." },
    { id:"community-zeus-familia", category:"community", title:"DanMachi Wiki · Zeus Familia", publisher:"Wiki comunitaria", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Zeus_Familia", coverage:"Roster histórico, expediciones, exploración y colaboración con el Gremio según las wikis.", limits:"El récord público y el piso 71 son afirmaciones distintas reportadas por la wiki; el detalle exacto requiere cotejo primario." },
    { id:"community-hera-familia", category:"community", title:"DanMachi Wiki · Hera Familia", publisher:"Wiki comunitaria", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Hera_Familia", coverage:"Roster histórico, capitana de nivel 9 no identificada y técnica Afterglow.", limits:"No inferir la identidad civil de la capitana ni el estado institucional de la Familia a partir del resumen comunitario." },
    { id:"community-afterglow", category:"community", title:"DanMachi Wiki · Terminology / Afterglow", publisher:"Wiki comunitaria", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Terminology", coverage:"Descripción de la técnica compartida de corte a distancia llamada Afterglow.", limits:"El origen, los usuarios históricos y los detalles de ejecución necesitan cotejo primario." },
    { id:"official-ga-astrea-record-3-limited-edition", category:"official", title:"GA Bunko · Astrea Record 3, edición limitada con cuadernillo", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial", url:"https://ga.sbcr.jp/product/9784815617554/", coverage:"Confirma que la edición especial incluye una versión ampliada/revisada de 「それは遥か彼方の静穏の夢」 en un cuadernillo adicional.", limits:"Confirma contenido anunciado de la edición, no los hechos específicos de los personajes ni que el escenario hipotético ocurriera en CONT-MAIN-LN o CONT-AR." },
    { id:"official-sbcr-astrea-record-3-product-page", category:"official", title:"SB Creative · Astrea Record 3 — ficha editorial de edición limitada", publisher:"SB Creative / GA文庫", authority:"Ficha editorial oficial; metadatos y sinopsis general", url:"https://www.sbcr.jp/product/4815617554/", coverage:"La ficha editorial presenta el volumen final de Astrea Record y resume en términos generales la batalla contra Evilus y la defensa de Orario; también describe el cuadernillo adicional de la edición especial.", limits:"La sinopsis visible no nombra los emparejamientos Zald–Ottar ni Alfia–Astrea Familia y no respalda DMR-045-CLM-006. Para ese detalle, el registro usa la reseña secundaria BookLive DMR-045-SRC-043; no es un localizador de la novela. CONT-AR; el cuadernillo alternativo queda en CONT-AU." },
    { id:"official-ga-main-v20", category:"official", title:"GA Bunko · DanMachi novela principal, volumen 20", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial; metadatos y sinopsis general", url:"https://ga.sbcr.jp/product/9784815628697/", coverage:"Publicación del volumen 20 e información editorial sobre el enfrentamiento Orario–Distrito Escolar.", limits:"La sinopsis no menciona a Maxim ni verifica nivel, cargo histórico, derrota o muerte; no usar como evidencia de sus claims individuales." },
    { id:"community-leon-vardenburg-vol20-trial-sword-leads", category:"community", title:"Manga Tanteisha · Leon Vardenburg — pista secundaria de armas", publisher:"Manga Tanteisha", authority:"Fuente secundaria; correspondencia por cotejar", url:"https://manga-tantei.com/danmachileon-18686", coverage:"Lista los nombres japoneses de tres armas del hechizo de Leon; en otra sección menciona a Alfia y Zald entre los héroes históricos que lo derrotaron e influyeron en él.", limits:"El artículo no demuestra una correspondencia uno-a-uno entre cada arma y un héroe, ni confirma que Maxim sea el referente de マキシマム. No sustituye la escena de la novela ni prueba biografía, parentesco o relación personal." },
    { id:"official-bookwalker-danmachi-vol20-page17", category:"official", title:"BOOK☆WALKER · DanMachi vol. 20 — página de muestra 17/33", publisher:"BOOK☆WALKER / GA文庫", authority:"Muestra autorizada; fragmento narrativo inspeccionado", url:"https://viewer-trial.bookwalker.jp/03/21/viewer.html?cid=2996c502-7cb0-42b4-821a-b63df271d442", coverage:"En la página de muestra 17/33 se ven las formas japonesas レオン (Leon) y バルドル (Baldur/Baldr).", limits:"Este registro solo localiza esa página inspeccionada: en ella no aparecieron アルフィア, ザルド, メーテリア ni ブレイズ・オブ・ラウンド. No demuestra ausencia en otras páginas del volumen y no debe equiparar バルドル con ザルド." },
    { id:"official-ga-main-v21", category:"official", title:"GA Bunko · DanMachi novela principal, volumen 21", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial", url:"https://ga.sbcr.jp/product/9784815632946/", coverage:"Tomo 21, publicado el 2025-10-15; sinopsis editorial del arco de expedición y rescate.", limits:"La sinopsis es paratexto; no sustituye escenas y localizadores del volumen." },
    { id:"official-ga-main-v22-upcoming", category:"official", title:"GA Bunko · DanMachi novela principal, volumen 22 (anunciado)", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial de publicación futura", url:"https://ga.sbcr.jp/product/9784815642907/", coverage:"Fecha prevista 2026-12-15 y texto promocional sobre el Dragón Negro.", limits:"A fecha de corte 2026-10-21 no se ha publicado; registrar solo metadatos editoriales, no contenido narrativo del tomo." },
    { id:"official-ga-sword-oratoria-v17-upcoming", category:"official", title:"GA Bunko · Sword Oratoria, volumen 17 (anunciado)", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial de publicación futura", url:"https://ga.sbcr.jp/product/9784815642914/", coverage:"Fecha prevista 2027-01-15.", limits:"No publicado a fecha de corte; no inferir escenas, participantes o estados futuros." },
    { id:"official-ga-family-chronicle-amid-upcoming", category:"official", title:"GA Bunko · Familia Chronicle, episode Amid (anunciado)", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial de publicación futura", url:"https://ga.sbcr.jp/product/9784815642938/", coverage:"Fecha prevista 2027-02-15 y presentación editorial de la obra.", limits:"No publicado a fecha de corte; no construir una ficha biográfica completa solo con el anuncio." },
    { id:"official-ga-family-chronicle-haze", category:"official", title:"GA Bunko · Familia Chronicle, episode Haze", publisher:"GA Bunko / SB Creative", authority:"Ficha editorial oficial de volumen publicado", url:"https://ga.sbcr.jp/product/9784815640675/", coverage:"Publicado el 2026-05-15; sinopsis menciona a Haze y la recompensa por un troll ensangrentado, alrededor de la cual se moviliza Ottar y otros guerreros.", limits:"La sinopsis no reemplaza lectura ni localizadores. El título japonés episodeヘイズ y el perfil oficial ヘイズ・ベルベット se enlazan con CHAR-HEITH-VELVET; no crear una identidad duplicada." },
    { id:"official-ga-danmachi-release-horizon", category:"official", title:"GA Bunko · anuncio de calendario DanMachi 2026–2027", publisher:"GA Bunko / SB Creative", authority:"Anuncio editorial oficial", url:"https://ga.sbcr.jp/bunko_blog/orio/20260522/", coverage:"Anuncio de publicación de DanMachi 22, Sword Oratoria 17 y Familia Chronicle episode Amid.", limits:"Fechas anunciadas pueden cambiar; consultar de nuevo al llegar a la fecha programada y no tratar el anuncio como texto narrativo." },
    { id:"community-olivas-act", category:"community", title:"DanMachi Wiki · Olivas Act", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Olivas_Act", coverage:"Alias, apariencia, afiliaciones reportadas y habilidades atribuidas a la forma Creature.", limits:"Usar para descubrir y organizar escenas; ninguna capacidad o evento se considera confirmado sin localizador primario." },
    { id:"community-albert-waldstein-en", category:"community", title:"DanMachi Wiki · Albert Waldstein (inglés)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Albert_Waldstein", coverage:"Alias, parentesco reportado, apariencia y combate histórico.", limits:"No verifica el texto primario ni resuelve la cronología de Ais." },
    { id:"community-albert-waldstein-es", category:"community", title:"DanMachi Wiki · Albert Waldstein (español)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Albert_Waldstein", coverage:"Contraste de alias, parentesco y relato histórico.", limits:"Segunda wiki comunitaria, no evidencia primaria independiente." },
    { id:"community-ais-aria", category:"community", title:"DanMachi Wiki · Ais Wallenstein", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Ais_Wallenstein", coverage:"Parentesco reportado de Ais con Albert y Aria y preguntas abiertas sobre su origen.", limits:"No resuelve circunstancias de nacimiento, desaparición ni traslado temporal." },
    { id:"community-maxim", category:"community", title:"DanMachi Wiki · Maxim", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Maxim", coverage:"Cargo histórico, nivel y relato del encuentro con el Dragón Negro.", limits:"Cotejar el flashback de DanMachi vol. 20; no mezclar Episode Freya." },
    { id:"community-zeus-familia", category:"community", title:"DanMachi Wiki · Zeus Familia", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Zeus_Familia", coverage:"Roster histórico y estado atribuido a los miembros.", limits:"No sustituye escenas individuales de novela." },
    { id:"community-argana-kalif", category:"community", title:"DanMachi Wiki · Argana Kalif", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Argana_Kalif", coverage:"Apariencia, afiliación, parentesco y Kalima/Blood Drain reportados.", limits:"Nivel y capacidades requieren cotejo en Sword Oratoria vol. 6." },
    { id:"community-bache-kalif", category:"community", title:"DanMachi Wiki · Bache Kalif", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Bache_Kalif", coverage:"Perfil de Bache y magia Velgus.", limits:"Confirmar alcance y efectos en el texto primario." },
    { id:"community-tione-hiryute", category:"community", title:"DanMachi Wiki · Tione Hiryute", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Tione_Hiryute", coverage:"Infancia de Tione y vínculo reportado con Seldas.", limits:"Usar como ruta de búsqueda, no como sustituto del volumen 6." },
    { id:"community-kali-familia", category:"community", title:"DanMachi Wiki · Kali Familia", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Kali_Familia", coverage:"Roster de Kali Familia y contexto de Telskyura.", limits:"No prueba por sí sola habilidades o relaciones individuales." },
    { id:"community-helga-danmemo", category:"community", title:"DanMachi Wiki · Helga (DanMemo)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria de juego", url:"https://danmachi.fandom.com/wiki/Helga_%28DanMemo%29", coverage:"Cargo, aspecto y capacidades atribuidos a la versión de DanMemo.", limits:"Mantener la ficha en CONT-GAME, no como biografía de novela." },
    { id:"official-ga-sword-oratoria-06", category:"official", title:"GA Bunko · Sword Oratoria vol. 6", publisher:"GA Bunko", authority:"Sinopsis editorial oficial", url:"https://ga.sbcr.jp/product/9784797388466/", coverage:"Marco de Melen, Kali Familia y pasado de las gemelas Hiryute.", limits:"No confirma niveles o capacidades individuales." },
    { id:"official-sword-oratoria-vol6-preview", category:"official", title:"GA Bunko / BinB · Sword Oratoria 6 (lector de muestra)", publisher:"GA Bunko / SB Creative · lector BinB / Voyager Japan", authority:"Fuente editorial oficial enlazada por la editorial; metadatos solamente", url:"https://r.binb.jp/epm/e1_27313_02062016113152/", coverage:"Lector gratuito vinculado desde la página de producto de Sword Oratoria vol. 6; título, autor y sinopsis editorial.", limits:"La extracción automatizada solo devuelve la interfaz y metadatos; no expone texto narrativo ni páginas que permitan verificar escenas individuales." },
    { id:"community-lyra", category:"community", title:"DanMachi Wiki · Lyra", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Lyra", coverage:"Relación reportada con Helga y referencias a DanMemo.", limits:"Reencarnación secundaria; evento/versionado original pendiente." },
    { id:"community-telskyura", category:"community", title:"DanMachi Wiki · Telskyura", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Telskyura", coverage:"Contexto comunitario del entorno de Kali Familia.", limits:"Fuente de contexto, no cronología primaria." },
    { id:"community-valletta-grede", category:"community", title:"DanMachi Wiki · Valletta Grede", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Valletta_Grede", coverage:"Afiliación, estrategia y magia Shaldo reportadas para Sword Oratoria vol. 7.", limits:"No demuestra participación individual en el núcleo de Astrea Record." },
    { id:"community-thanatos", category:"community", title:"DanMachi Wiki · Thanatos", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Thanatos", coverage:"Perfil del dios, Thanatos Familia y vínculo reportado con Evilus.", limits:"No atribuirle automáticamente todas las acciones de Evilus ni escenas de Astrea Record." },
    { id:"community-jura-halmer-es", category:"community", title:"DanMachi Wiki · Jura Halmer (español)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/es/wiki/Jura_Halmer", coverage:"Historia, equipo, domador y relación reportada con el Juggernaut.", limits:"El rótulo de debut discrepa del artículo inglés; verificar la novela principal." },
    { id:"community-jura-halmer-en", category:"community", title:"DanMachi Wiki · Jura Halmer (inglés)", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/Jura_Halmer", coverage:"Habilidades y equipo atribuidos a Jura.", limits:"Usar como guía de búsqueda, no como localizador primario." },
    { id:"yenpress-danmachi-13", category:"official", title:"DanMachi vol. 13 · sinopsis editorial", publisher:"Yen Press", authority:"Paratexto editorial; no texto de la novela", url:"https://yenpress.com/titles/9781975328191-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-13-light-novel", coverage:"Contexto del arco de Rivira y de la persecución de Ryuu/Lyu.", limits:"No nombra a Jura ni demuestra sus capacidades." },
    { id:"yenpress-sword-oratoria-01", category:"official", title:"Sword Oratoria vol. 1 · sinopsis editorial", publisher:"Yen Press", authority:"Paratexto editorial; no texto de la novela", url:"https://yenpress.com/titles/9780316318143-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-on-the-side-sword-oratoria-vol-1-light-novel", coverage:"Contexto editorial de Sword Oratoria y Ais.", limits:"No nombra a Albert ni Aria y no demuestra parentescos." },
    { id:"yenpress-sword-oratoria-03", category:"official", title:"Sword Oratoria, volumen 3 · sinopsis editorial", publisher:"Yen Press", authority:"Paratexto editorial; no texto de la novela", url:"https://yenpress.com/titles/9780316318181-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-on-the-side-sword-oratoria-vol-3-light-novel", coverage:"Marco editorial de la investigación de Ais, los monstruos que atacan Rivira y un domador que conoce su nombre.", limits:"La sinopsis no nombra a Olivas directamente ni establece sus capacidades; sirve para orientar la lectura del volumen." },
    { id:"author-interview-alfia-aunt-bell", category:"interview", title:"Dengeki Online · entrevista a Fujino Omori sobre Alfia y la novelización de Astrea Record", publisher:"Dengeki Online · entrevista a Fujino Omori", authority:"Declaración autoral en entrevista; fuente complementaria, no texto de novela", url:"https://dengekionline.com/articles/189750/", coverage:"DMR-045-CLM-007: Omori dice que la novelización dejó explícito que Alfia es tía de Bell. DMR-045-CLM-017: explica que Alfia había aparecido brevemente en Familia Chronicle, que Astrea Record le dio un papel narrativo más amplio y que evitaba usar a Alfia/Zald por considerarlos demasiado fuertes.", limits:"No aporta capítulo/página de las escenas. El comentario sobre fuerza es una explicación cualitativa del proceso creativo, no una escala de poder. No identifica a Meteria como madre o gemela de Alfia ni valida el resto de las biografías o estadísticas." },
    { id:"author-interview-alfia-aunt-game", category:"interview", title:"LN News Online · entrevista y pies editoriales de los perfiles de origen de Bell", publisher:"LN News Online · entrevista a Fujino Omori", authority:"La respuesta del autor y los pies editoriales son capas distintas; no texto de novela; los captions son evidencia secundaria", url:"https://ln-news.com/articles/109766", coverage:"La respuesta de Omori confirma en CONT-GAME el parentesco que formula el entrevistador. En la misma sección, los pies editoriales describen a Erebus, Alfia y Zald; se registran como claims secundarios separados.", limits:"La respuesta no nombra a la hermana como Meteria. Los captions no son palabras de Omori ni localizadores narrativos; no trasladar los perfiles/niveles a CONT-AR o CONT-MAIN-LN." },
    { id:"community-reddit-vol20-prologue-alfia-lead", category:"community", title:"Reddit · Vol 20 preview pages — pista para el prólogo", publisher:"Usuario de r/DanMachi", authority:"Fuente secundaria · resumen comunitario de páginas de muestra", url:"https://www.reddit.com/r/DanMachi/comments/1h7wabo/", coverage:"El comentarista interpreta tentativamente el prólogo como una maga de cabello gris usando Genos Angelus contra una criatura marina (DMR-045-CLM-015).", limits:"No confirma que la maga sea Alfia, que la criatura sea Leviathan ni que el testigo sea Leon; no aporta página reproducible y no sustituye el texto publicado." },
    { id:"community-reddit-vol20-afterglow-chapter2-3", category:"community", title:"Reddit · Vol. 20, Afterglow en caps. 2–3 — pista secundaria", publisher:"Comunidad r/DanMachi", authority:"Fuente secundaria · comentario comunitario", url:"https://www.reddit.com/r/DanMachi/comments/1ifg4g6/volume_20_side_story_a_scene_between_a_certain/", coverage:"Un comentarista dirige al lector a las retrospectivas de los capítulos 2 y 3 para investigar Afterglow y menciona a Alfia y Zald; considera más explícito el caso de Zald (DMR-045-CLM-016).", limits:"El hilo trata principalmente un relato extra y el comentario no es la novela publicada. No verifica usos individuales, mecánica, correspondencia entre armas y personajes ni páginas exactas." },
    { id:"official-yenpress-danmachi-vol20-metadata", category:"official", title:"Yen Press · DanMachi vol. 20 (ficha editorial)", publisher:"Yen Press / Yen On", authority:"Referencia editorial oficial · metadatos solamente para la pista del prólogo", url:"https://yenpress.com/titles/9798855437867-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-20-light-novel", coverage:"Confirma la edición inglesa del volumen 20, el autor, el traductor y la sinopsis comercial general.", limits:"La sinopsis no describe la escena del prólogo ni respalda las identificaciones de Alfia/Leviathan/Leon; la vista de muestra oficial no devolvió el texto interior legible." },
    { id:"licensed-preview-google-books-danmachi-vol20", category:"licensed_retailer", title:"Google Books · DanMachi vol. 20 (vista previa e índice limitado)", publisher:"Google Books / Yen Press", authority:"Vista previa licenciada; búsqueda de contenido limitada", url:"https://books.google.com/books?id=XWHEEQAAQBAJ", coverage:"La ficha de la edición inglesa enumera The Heroes' Afterglow y The Knights Afterglow. La búsqueda pública devolvió No results found in this book para Alfia, Meteria y Rudra, y No preview available for this page para los resultados de Afterglow. Una comprobación adicional del lector anunció Preview · 28 pages, pero la vista pública falló con Page didn't load.", limits:"Es una prueba de acceso autorizado, no lectura del contenido narrativo: el visor no renderizó páginas legibles. No se infiere que un personaje esté ausente del volumen; Zald y Erebus no pudieron buscarse porque Google Books devolvió HTTP 429. No respalda claims ni localizadores narrativos individuales; permanece metadata_checked_only con claims_supported: []. CONT-MAIN-LN." },
    { id:"licensed-preview-google-play-danmachi-vol20", category:"licensed_retailer", title:"Google Play Books · DanMachi vol. 20 (muestra gratuita anunciada; lector no inspeccionado)", publisher:"Google Play Books / Yen Press LLC", authority:"Distribuidor licenciado; muestra anunciada, no texto narrativo", url:"https://play.google.com/store/books/details/Fujino_Omori_Is_It_Wrong_to_Try_to_Pick_Up_Girls_i?id=XWHEEQAAQBAJ", coverage:"La ficha pública señala a Yen Press LLC como vendedor de la edición inglesa del volumen 20, con 232 páginas y la opción “Free sample” (publicación indicada: 11 de agosto de 2026). Comparte el identificador XWHEEQAAQBAJ con la ruta de Google Books ya registrada en DMR-045-SRC-018.", limits:"No se abrió ninguna página narrativa: la herramienta de navegador no llegó a iniciar por insufficient_credits y el lector directo no fue accesible mediante la extracción web. Esto es una limitación de consulta, no una falla confirmada del lector. No respalda hechos individuales sobre Alfia, Zald, Meteria, Erebus o Rudra. CONT-MAIN-LN; metadata_checked_only; claims_supported: []. Reintentar solo cuando el flujo público normal de muestra sea accesible." },
    { id:"licensed-retailer-kobo-danmachi-vol20", category:"licensed_retailer", title:"Kobo · DanMachi vol. 20 (vista previa anunciada; lector no inspeccionado)", publisher:"Rakuten Kobo / Yen Press / Yen On", authority:"Distribuidor licenciado; vista previa anunciada, no inspeccionada", url:"https://www.kobo.com/us/en/ebook/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-20-light-novel", coverage:"El resultado público indexado de la ficha del ebook en inglés muestra los controles “Preview Now” y “Save Preview”. La metadata identifica la edición Yen Press / Yen On, ISBN 9798855437867 y fecha de publicación 11 de agosto de 2026. La apertura directa de la ficha devolvió Cache miss; no se abrió la vista previa.", limits:"Ruta de consulta licenciada, no texto narrativo recuperado. No se inspeccionaron páginas ni se verificó ninguna escena o localizador de Alfia, Zald, Meteria, Erebus o Rudra. No inferir presencia o ausencia de personajes a partir de metadatos o errores de acceso. CONT-MAIN-LN; metadata_checked_only; claims_supported: []." },
    { id:"licensed-retailer-bookwalker-danmachi-vol20", category:"licensed_retailer", title:"BOOK☆WALKER · DanMachi vol. 20 (muestra anunciada; lector no inspeccionado)", publisher:"BOOK☆WALKER / SB Creative / GA Bunko", authority:"Distribuidor licenciado; muestra anunciada, no inspeccionada", url:"https://bookwalker.jp/de2996c502-7cb0-42b4-821a-b63df271d442/?sample=1", coverage:"La ficha pública oficial del volumen 20 (https://bookwalker.jp/de2996c502-7cb0-42b4-821a-b63df271d442/) ofrece el enlace 試し読み (muestra). La ruta normal de muestra redirige al visor https://viewer-trial.bookwalker.jp/trial-page/03/view?cid=2996c502-7cb0-42b4-821a-b63df271d442, que esta herramienta no pudo abrir: al seguir la redirección devolvió «Internal Error» y señaló «not accessible via this tool»; no se confirmó una respuesta HTTP del visor.", limits:"Ruta licenciada para consulta manual, no texto narrativo recuperado. No se abrió ninguna página, ni se verificaron escenas o localizadores de Alfia, Zald, Meteria, Erebus o Rudra. No inferir presencia o ausencia de personajes a partir de esta limitación de acceso. CONT-MAIN-LN; metadata_checked_only; claims_supported: []." },
    { id:"licensed-retailer-booklive-danmachi-vol20-preview", category:"licensed_retailer", title:"BookLive · DanMachi vol. 20 (ficha y muestra anunciada; lector no inspeccionado)", publisher:"BookLive / SB Creative / GA Bunko", authority:"Distribuidor licenciado; metadatos y control de muestra solamente", url:"https://booklive.jp/product/index/title_id/201522/vol_no/020", coverage:"Ficha del volumen 20: título japonés, fecha de publicación 2024-12-15, 368 páginas y controles ブラウザ試し読み / アプリ試し読みはこちら.", limits:"No se abrió el lector ni se recuperaron páginas narrativas en esta pasada. El estado del lector es desconocido; no usar para afirmar escenas, aparición o ausencia de personajes. CONT-MAIN-LN; metadata_checked_only; claims_supported: []." },
    { id:"licensed-preview-binb-astrea-record-vol3", category:"licensed_retailer", title:"Voyager BinB · Astrea Record 3 (lector de muestra japonesa)", publisher:"GA Bunko / SB Creative · lector BinB de Voyager Japan", authority:"Muestra licenciada; metadatos e interfaz solamente", url:"https://r.binb.jp/epm/e1_270413_31102022103801/", coverage:"La página identifica アストレア・レコード３ 正邪決戦, a Fujino Omori y una sinopsis editorial. La extracción automatizada solo devolvió controles del lector (índice, búsqueda en el texto y ajustes); no expuso páginas narrativas.", limits:"No se verificó capítulo, página, escena ni afirmación sobre Alfia, Zald, Meteria, Erebus o Rudra. Es una ruta de consulta legal que puede revisarse manualmente, no un localizador primario por personaje. CONT-AR." },
    { id:"licensed-preview-google-play-astrea-record-vol1", category:"licensed_retailer", title:"Google Play Books · Astrea Record Vol. 1 (muestra anunciada; texto no extraído)", publisher:"Google Play Books / Yen Press LLC", authority:"Ficha de venta licenciada; la página anuncia Free sample", url:"https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_1_Is_It_Wrong_to_Tr?id=M_3xEAAAQBAJ", coverage:"La sinopsis editorial sitúa la historia siete años antes de la llegada de Bell y presenta a Lyu buscando una idea de justicia con el apoyo de Astrea Familia. Es una sinopsis de catálogo, no una escena narrativa.", limits:"La página muestra Free sample, pero la extracción pública solo devolvió la ficha comercial y la sinopsis, no páginas narrativas ni localizadores. No demuestra que Alfia, Zald o Erebus aparezcan en una escena concreta. CONT-AR; metadata_checked_only." },
    { id:"licensed-preview-google-play-astrea-record-vol2", category:"licensed_retailer", title:"Google Play Books · Astrea Record Vol. 2 (muestra anunciada; texto no extraído)", publisher:"Google Play Books / Yen Press LLC", authority:"Ficha de venta licenciada; la página anuncia Free sample", url:"https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_2_Is_It_Wrong_to_Tr?id=cLwFEQAAQBAJ", coverage:"La sinopsis editorial describe el amanecer tras una noche de tragedia en Orario, los esfuerzos de los supervivientes y las dudas de Lyu sobre la justicia. Es una sinopsis de catálogo, no un pasaje de la novela.", limits:"La página muestra Free sample, pero la extracción pública solo devolvió la ficha comercial y la sinopsis, no páginas narrativas ni localizadores. No se crea ningún claim sobre una persona a partir de esta descripción general. CONT-AR; metadata_checked_only." },
    { id:"licensed-preview-google-play-astrea-record-vol3", category:"licensed_retailer", title:"Google Play Books · Astrea Record Vol. 3 (disponibilidad regional variable; texto no extraído)", publisher:"Google Play Books / Yen Press LLC", authority:"Ficha de venta licenciada; el render consultado muestra limitación regional", url:"https://play.google.com/store/books/details/Fujino_Omori_Astrea_Record_Vol_3_Is_It_Wrong_to_Tr?id=Z0gVEQAAQBAJ", coverage:"La sinopsis editorial describe el asedio final de Orario y la división de tareas entre Finn y Astrea Familia. Es información de catálogo, no lectura del episodio final.", limits:"La página abierta durante esta consulta indicó que el artículo no estaba disponible en esa región; un resultado localizado distinto anunciaba Free sample. No se puede concluir que la muestra esté disponible o ausente globalmente. Ninguna página narrativa quedó visible. CONT-AR; metadata_checked_only." },
    { id:"licensed-retailer-dbook-astrea-record-vol3-sample", category:"licensed_retailer", title:"dBook · muestra de Astrea Record 3 (lanzador de app; texto no extraído)", publisher:"dBook / NTT DOCOMO / SB Creative / GA Bunko", authority:"Distribuidor licenciado; muestra anunciada, no texto narrativo", url:"https://dbook.docomo.ne.jp/item/b1b573a541fb926b318d941d5c6181ceb595f28a264a162b9eb0c6f0d3f66cc9/2000/", coverage:"Ficha japonesa de アストレア・レコード３ 正邪決戦, de Fujino Omori, publicada por SB Creative/GA Bunko. La página ofrece 試し読み; al abrir esa acción, la ruta pública conduce al lanzador de aplicación https://dbook.docomo.ne.jp/applaunch/view/?launch=app&pid=b1b573a541fb926b318d941d5c6181ceb595f28a264a162b9eb0c6f0d3f66cc9.", limits:"La extracción del lanzador de muestra devolvió cero líneas de contenido y ninguna página narrativa o localizador. Puede requerir la aplicación normal de dBook; esto no demuestra un fallo general del lector. No respalda claims individuales. CONT-AR; metadata_checked_only; claims_supported: []. Reabrir solo cuando una sesión normal autorizada muestre páginas legibles." },
    { id:"official-astrea-record-revision", category:"official", title:"Astrea Record · anuncio de novelización revisada", publisher:"Portal oficial de DanMachi", authority:"Referencia oficial de publicación; no demuestra escenas individuales", url:"https://danmachi.com/news/news131.php", coverage:"Confirma que Astrea Record nació como historia larga del tercer aniversario de Memoria Freese y pasó a tres volúmenes revisados por Fujino Omori.", limits:"No prueba que todos los datos de la versión del juego sean idénticos en la novela revisada ni valida técnicas personales." },
    { id:"official-yenpress-danmachi-vol14-primary-excerpt", category:"official", title:"Yen Press · DanMachi vol. 14 — localizadores narrativos parciales", publisher:"Yen Press / Yen On", authority:"Novela principal publicada; extractos narrativos parciales", url:"https://yenpress.com/titles/9781975385026-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-14-light-novel", coverage:"Capítulo 13: trampa de Rudra Familia y aparición del Juggernaut (DMR-045-CLM-013); epílogo: relato público sobre Jura, supervivientes y Gale Wind (DMR-045-CLM-014).", limits:"La ficha oficial identifica la edición, pero no transcribe esas escenas. Los localizadores de capítulo/epílogo proceden de extractos textuales indexados; el lector gratuito oficial no devolvió interior legible y las páginas no están verificadas. No atribuir el plan personalmente a la deidad Rudra." },
    { id:"official-sbcr-binb-danmachi-vol14-reader-metadata-only", category:"official", title:"SB Creative / BinB · DanMachi vol. 14 — lector oficial gratuito", publisher:"SB Creative / GA Bunko · BinB reader", authority:"Lector editorial oficial · metadatos solamente; sin texto narrativo legible en la extracción", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=79739620JAAA14MBJE3X&lginbtn=false", coverage:"Intento del 2026-10-24 de abrir la muestra gratuita de la edición japonesa de DanMachi 14 para cotejar el capítulo 13 y el incidente de Rudra Familia.", limits:"La vista recuperada solo mostró «Now loading...» y opciones de menú; no expuso páginas narrativas. No respalda DMR-045-CLM-013/014 ni ningún claim individual; no equivale a haber leído el capítulo ni permite asignar páginas." },
    { id:"official-sbcr-astrea-record-vol1-preview-metadata-only", category:"official", title:"SB Creative eBook Store · Astrea Record 1 — lector de muestra", publisher:"SB Creative / GA Bunko · SBCr eBook Store", authority:"Ruta de muestra editorial; interfaz/metadatos solamente", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561017JAAA01MBJE3X&lginbtn=false", coverage:"El lector devolvió “Now loading...” y controles de menú (bibliografía, tabla de contenidos, búsqueda en el texto, avance automático, lectura por voz y ajustes); no expuso página narrativa legible en la extracción consultada.", limits:"Intento de acceso normal a la muestra licenciada de Astrea Record 1; no aporta capítulo, página, escena ni soporte para una afirmación individual. No inferir presencia o ausencia de personajes a partir de la carga fallida. CONT-AR." },
    { id:"official-sbcr-astrea-record-vol2-preview-metadata-only", category:"official", title:"SB Creative eBook Store · Astrea Record 2 — lector de muestra", publisher:"SB Creative / GA Bunko · SBCr eBook Store", authority:"Ruta de muestra editorial; interfaz/metadatos solamente", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561018JAAA02MBJE3X&lginbtn=false", coverage:"El lector devolvió “Now loading...” y controles de menú (bibliografía, tabla de contenidos, búsqueda en el texto, avance automático, lectura por voz y ajustes); no expuso página narrativa legible en la extracción consultada.", limits:"Intento de acceso normal a la muestra licenciada de Astrea Record 2; no aporta capítulo, página, escena ni soporte para una afirmación individual. No inferir presencia o ausencia de personajes a partir de la carga fallida. CONT-AR." },
    { id:"official-sbcr-astrea-record-vol3-preview-metadata-only", category:"official", title:"SB Creative eBook Store · Astrea Record 3 — lector de muestra", publisher:"SB Creative / GA Bunko · SBCr eBook Store", authority:"Ruta oficial de muestra; aviso de compatibilidad del visor observado, sin narración extraída", url:"https://ebook.sbcr.jp/sbv.17050.sbcr/main.html?cid=81561019JAAA03MBJE3X&lginbtn=false", coverage:"Una consulta previa devolvió “Now loading...” y controles de menú. La ficha oficial del producto (https://ebook.sbcr.jp/product/81561019JAAA03MBJE3X) ofrece 立ち読み（無料）. La página embebida muestra el aviso «お使いのブラウザは新ビューワに対応しておりません。»; es un indicio de compatibilidad del visor durante la consulta, no una página de la novela.", limits:"El 2026-10-29, la extracción directa del lector devolvió siete líneas sin página narrativa; la sesión interactiva no pudo iniciar por insufficient_credits. No aporta capítulo, página, escena ni soporte para una afirmación individual. No inferir ausencia de personajes ni fallo general del lector. CONT-AR; metadata_checked_only; claims_supported: []." },
    { id:"official-astrea-record-vol1-preview", category:"official", title:"GA Bunko / BinB · Astrea Record 1 (versión de lectura de muestra)", publisher:"GA Bunko / SB Creative · lector de prueba BinB / Voyager Japan", authority:"Fuente editorial oficial; metadatos solamente", url:"https://r.binb.jp/epm/e1_260370_02092022101233/", coverage:"Página oficial de lectura de muestra que identifica Astrea Record 1, su autor Fujino Omori y su procedencia como novelización revisada del escenario largo originado en Memoria Freese.", limits:"La extracción disponible solo devuelve la interfaz y metadatos del lector, no las páginas narrativas. No respalda ninguna capacidad, relación, escena o biografía individual; abrir la página no equivale a haber leído el capítulo." },
    { id:"official-bookwalker-astrea-record-vol3-preview-metadata-only", category:"official", title:"BOOK☆WALKER · Astrea Record 3 — muestra pública", publisher:"BOOK☆WALKER / GA文庫", authority:"Muestra autorizada; metadatos solamente", url:"https://bookwalker.jp/dead6afbb1-d488-4cf3-a255-669537f7f049/?sample=1", coverage:"El visor público identifica Astrea Record 3 y mostró contador 1/63 en la portada durante la comprobación del 2026-10-23.", limits:"El visor de canvas no permitió navegar a páginas interiores en la prueba. No respalda ninguna capacidad, relación, escena o biografía individual y no demuestra ausencia de un personaje en el volumen completo." },
    { id:"community-astrea-family-es-current", category:"community", title:"Familia Astrea · roster en Solingen", publisher:"DanMachi Wiki en español", authority:"Fuente secundaria de roster", url:"https://danmachi.fandom.com/es/wiki/Familia_Astrea", coverage:"Reporta la nueva generación de Astrea Familia, base en Solingen, capitanía de Cecil y datos de roster de Iselina, Shau y Ulanda.", limits:"Especie, niveles, cargo y geografía requieren localizadores primarios individuales." },
    { id:"community-cecil-blackliza", category:"community", title:"DanMachi Wiki · Cecil Blackliza", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria de personaje", url:"https://danmachi.fandom.com/wiki/Cecil_Blackliza", coverage:"Cargo, oficio, nivel, apariencia y contexto familiar reportados.", limits:"No aporta localizador reproducible de capítulo/página." },
    { id:"community-zanis-lustra", category:"community", title:"DanMachi Wiki · Zanis Lustra", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria de personaje", url:"https://danmachi.fandom.com/wiki/Zanis_Lustra", coverage:"Identidad, nivel y capitanía anterior reportados.", limits:"La caracterización de wiki no sustituye los actos y diálogos del volumen 6." },
    { id:"community-volume-6-synopsis", category:"community", title:"DanMachi Wiki · resumen del volumen 6", publisher:"DanMachi Wiki contributors", authority:"Resumen secundario de trama", url:"https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_6/Synopsis", coverage:"Escena resumida de la visita de Lili a Soma, acusación de Zanis y actuación atribuida a Chandra.", limits:"La acusación debe seguir siendo acusación; no equivale a un veredicto ni a una cita primaria." },
    { id:"community-chandra-ihit", category:"community", title:"DanMachi Wiki · Chandra Ihit", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria de personaje", url:"https://danmachi.fandom.com/wiki/Chandra_Ihit", coverage:"Especie, nivel, capitanía y rasgos reportados.", limits:"La ayuda a Lili y el desacuerdo con Zanis requieren localizador de novela." },
    { id:"community-canoe-belway", category:"community", title:"DanMachi Wiki · Canoe Belway", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria de personaje", url:"https://danmachi.fandom.com/wiki/Canoe_Belway", coverage:"Identidad, antigua afiliación, nivel y destino reportados.", limits:"La secuencia y causa del destino se deben contrastar con los volúmenes 2 y 6." },
    { id:"official-ga-danmachi-06", category:"official", title:"GA Bunko · DanMachi volumen 6", publisher:"GA Bunko / SB Creative", authority:"Sinopsis editorial oficial", url:"https://ga.sbcr.jp/product/9784797380583/", coverage:"Marco general del War Game y la captura de Liliruca por Soma Familia.", limits:"No verifica individualmente a Zanis, Chandra, Canoe ni sus niveles o acciones." },
    { id:"reference-wikipedia", category:"community", title:"Wikipedia · Is It Wrong to Try to Pick Up Girls in a Dungeon?", publisher:"Enciclopedia colaborativa", authority:"Referencia secundaria general", url:"https://en.wikipedia.org/wiki/Is_It_Wrong_to_Try_to_Pick_Up_Girls_in_a_Dungeon%3F", coverage:"Contexto general de la serie, publicaciones y adaptaciones.", limits:"No es la fuente adecuada para confirmar detalles finos de psicología, relaciones o cronología." },
    { id:"community-vol20-synopsis", category:"community", title:"DanMachi Wiki · DanMachi Light Novel Volume 20/Synopsis", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_20/Synopsis",
      coverage:"Resumen comunitario por capítulos del volumen 20: pistas secundarias sobre Alfia en el capítulo 2 y Zald/Leon/Udaeus en el capítulo 3 (DMR-045-CLM-019 y DMR-045-CLM-020).",
      limits:"Sinopsis de wiki comunitaria, no texto primario ni localizador de página. El acceso directo quedó bloqueado en esta consulta; se usó el contenido indexado por búsqueda. Mantener como pista secundaria de CONT-MAIN-LN, sin promover a escena cotejada." },
    { id:"community-volume-14-synopsis", category:"community", title:"DanMachi Wiki · DanMachi Light Novel Volume 14/Synopsis", publisher:"DanMachi Wiki contributors", authority:"Fuente secundaria", url:"https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_14/Synopsis",
      coverage:"Resumen comunitario del capítulo 13: después de la venganza de Ryuu contra Rudra Familia, describe la aparición de Rudra, su comentario sobre invitarla a su Familia y su posterior captura por el Gremio.",
      limits:"Sinopsis comunitaria, no página narrativa primaria. La apertura directa devolvió HTTP 402 en esta consulta; se usó contenido indexado por búsqueda. No demuestra que Rudra conociera, ordenara o autorizara la trampa anterior. Mantener CONT-MAIN-LN como evidencia secundaria." },
    {"id":"community-freya-allen","category":"community","title":"DanMachi Wiki · Allen Fromel","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Allen_Fromel","coverage":"Nivel 6 reportado, magia Gralineze Fromel, aceleración y arma; guía de búsqueda para las capacidades de Allen.","limits":"No es fuente primaria. La aceleración y sus riesgos se conservan como descripción comunitaria; no añadir costes ni skills no reportados. Véase DMR-052 y CHARACTER_UPDATE_LEDGER.md."},
    {"id":"community-freya-hedin","category":"community","title":"DanMachi Wiki · Hedin Selland","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Hedin_Selland","coverage":"Snapshot de nivel, skills, magia, habilidades de desarrollo y equipo reportados para Hedin.","limits":"Wiki comunitaria; no reemplaza capítulos/páginas de la novela. Los detalles de costes, duración y estado de armas se mantienen con sus limitaciones documentadas en DMR-052."},
    {"id":"community-freya-hedin-skills-es","category":"community","title":"DanMachi Wiki · Hedin Selland/Habilidades","publisher":"Wiki DanMachi en español","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/es/wiki/Hedin_Selland/Habilidades","coverage":"Resumen comunitario de Caelus Hildr, Varian Hildr y Laurus Hildr, sus efectos y límites, además de habilidades de desarrollo.","limits":"No se ha cotejado el texto primario en esta pasada. Alcance, duración y coste son descripciones secundarias, no valores universales verificados."},
    {"id":"community-freya-hogni","category":"community","title":"DanMachi Wiki · Hogni Ragnar","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Hogni_Ragnar","coverage":"Snapshot de nivel 6 reportado, Dainsleif/Burn Dain/Rasu Dain, skills y arma Victim Abyss.","limits":"Rasu Dain aparece enumerada sin explicación detallada recuperada. Costes y alcance se conservan como datos secundarios; no reabrir la misma página sin una actualización."},
    {"id":"community-freya-gulliver-es","category":"community","title":"Wiki DanMachi · Hermanos Gulliver","publisher":"Wiki DanMachi contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/es/wiki/Hermanos_Gulliver","coverage":"Snapshot conjunto de nivel, coordinación, cuatro armas y especialidades tácticas reportadas para Alfrigg, Dvalinn, Berling y Grer.","limits":"Las capacidades de grupo no son estadísticas individuales. Resistencia Anormal se atribuye expresamente a Dvalinn; no transferirla a todos ni inventar skills/magias individuales."},
    {"id":"community-freya-gulliver-en","category":"community","title":"DanMachi Wiki · Gulliver Brothers","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Gulliver_Brothers","coverage":"Resumen comunitario de nivel conjunto, teamwork, roles, armamento y Resistencia Anormal atribuida expresamente a Dvalinn.","limits":"La capacidad sincronizada es grupal y no representa stats individuales. No transferir a todos los hermanos la habilidad que la fuente atribuye a Dvalinn; no reemplaza el cotejo primario."},
    {"id":"community-loki-bete-en","category":"community","title":"DanMachi Wiki · Bete Loga","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Bete_Loga","coverage":"Nivel reportado, skills, magia Hati y equipo.","limits":"La tabla detallada de stats corresponde al nivel 5; conservarla separada del encabezado nivel 6. No eleva los mecanismos a canon primario."},
    {"id":"community-loki-bete-skills-es","category":"community","title":"Bete Loga/Habilidades · Wiki DanMachi","publisher":"Wiki DanMachi contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/es/wiki/Bete_Loga/Habilidades","coverage":"Descripciones comunitarias de Hati, habilidades de desarrollo y equipo.","limits":"El nombre de botas aparece como Frosvirt frente a Flosvirt en inglés; registrar la variante sin resolverla como cambio canónico."},
    {"id":"community-loki-tiona-en","category":"community","title":"DanMachi Wiki · Tiona Hiryute","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Tiona_Hiryute","coverage":"Skills Berserk e Intense Heat, habilidades de desarrollo y equipo.","limits":"Encabezado nivel 6 y tabla de stats de nivel 5 son snapshots distintos. La ausencia de magia nombrada en esta página no prueba inexistencia universal."},
    {"id":"community-loki-tione-en","category":"community","title":"DanMachi Wiki · Tione Hiryute","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Tione_Hiryute","coverage":"Skills Berserk/Backdraft, magia List Iorum, habilidades de desarrollo y equipo.","limits":"Encabezado nivel 6 y tabla de stats de nivel 5 son snapshots distintos; costes y duración de List Iorum no están recuperados."},

    {"id":"community-hermes-asfi","category":"community","title":"DanMachi Wiki · Asfi Al Andromeda","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Asfi_Al_Andromeda","coverage":"Nivel 4 reportado, Kalov Argol, skills, habilidades de desarrollo, equipo y limitaciones descritos para Asfi; véase DMR-054-SRC-001.","limits":"Wiki comunitaria; mecánicas, costes y condiciones no cotejados directamente con el texto primario. La nota se expone solo bajo CONT-SECONDARY."},
    {"id":"community-hermes-lulune","category":"community","title":"DanMachi Wiki · Lulune Louie","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Lulune_Louie","coverage":"Nivel 3 reportado, combate acrobático, manejo de cuchillo, sentidos y cartografía; véase DMR-054-SRC-002.","limits":"El contenido recuperado no enumera magia/skills con nombre ni arma específica. No interpretar la omisión como ausencia universal en canon; fuente secundaria."},
    {"id":"community-hestia-lili","category":"community","title":"DanMachi Wiki ES · Liliruca Arde","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/es/wiki/Liliruca_Arde","coverage":"Nivel 2 reportado, Cinder Ella, Artel Assist, Command Call, desarrollo/equipo; DMR-056-SRC-001.","limits":"Extracto indexado; costes y localizadores primarios no cotejados. CONT-SECONDARY."},
    {"id":"community-hestia-mikoto","category":"community","title":"DanMachi Wiki · Yamato Mikoto","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Yamato_Mikoto","coverage":"Futsunomitama, Yatanokurogarasu, Yatanoshirogarasu y equipo; DMR-056-SRC-002.","limits":"Ejemplos de combate conservan el contexto del artículo. Coste/radio/duración general no informados en extracto. CONT-SECONDARY."},
    {"id":"community-hestia-haruhime","category":"community","title":"DanMachi Wiki · Sanjouno Haruhime","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Sanjouno_Haruhime","coverage":"Uchide no Kozuchi, Kokonoe, snapshots 15/10 y 20/9 minutos, skill y equipo; DMR-056-SRC-003.","limits":"Conserva el máximo general de nueve colas y el snapshot de seis en War Game sin forzar una equivalencia. CONT-SECONDARY."},
    {"id":"community-hestia-nina","category":"community","title":"DanMachi Wiki · Nina Tulle","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Nina_Tulle","coverage":"Perfil de sanadora, Magia Kris, Lagriel Krisheim, nombres de skills, Mage y equipo; DMR-056-SRC-004.","limits":"Efectos de Fairy Cradle/Alf Minister no descritos en extracto; perfil de afiliación no prueba membresía formal. CONT-SECONDARY."},
    {"id":"community-hestia-family-en","category":"community","title":"DanMachi Wiki · Hestia Familia","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Hestia_Familia","coverage":"Texto de pasantía y tabla de roster de Hestia Familia; DMR-056-SRC-005.","limits":"La narrativa dice que Nina no es miembro oficial sin falna, pero la tabla la marca activa. Contradicción interna preservada. CONT-SECONDARY."},
    {"id":"community-hestia-family-es","category":"community","title":"DanMachi Wiki ES · Familia Hestia","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/es/wiki/Familia_Hestia","coverage":"Contraste del texto de pasantía y tabla de roster; DMR-056-SRC-006.","limits":"El texto dice que Nina no es miembro oficial sin falna, pero la tabla la marca activa. Contradicción interna preservada. CONT-SECONDARY."},
    {"id":"community-dmr058-daphne-en","category":"community","title":"DanMachi Wiki · Daphne Lauros","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Daphne_Lauros","coverage":"Nivel 3/piso 37 reportados junto con snapshot anterior de nivel 2; Raumure, Elios Passion, Laurus Wreath, Abnormal Resistance, Escape y Fencer Laureate; DMR-058-SRC-001.","limits":"No mezclar snapshots de distinto periodo. Escape está condicionado a persecución mediante Elios Passion. Costes, incrementos exactos, cooldowns y localizadores narrativos primarios no cotejados. CONT-SECONDARY."},
    {"id":"community-dmr058-daphne-es","category":"community","title":"DanMachi Wiki ES · Daphne Lauros","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/es/wiki/Daphne_Lauros","coverage":"Contraste en español de Raumure, Elios Passion, Laurus Wreath, Escape y Fencer Laureate; DMR-058-SRC-002.","limits":"Referencia comunitaria relacionada con la página inglesa, no una fuente primaria independiente. Mantener los snapshots por periodo; costes y localizadores primarios no cotejados. CONT-SECONDARY."},
    {"id":"community-dmr058-cassandra-en","category":"community","title":"DanMachi Wiki · Cassandra Ilion","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/wiki/Cassandra_Ilion","coverage":"Nivel 3/piso 37 reportados y snapshot anterior de nivel 2; Soullight, Cure Ephialtes, Five Dimension Troia, Treatment, Holy Crystal Rod y Rabbit Charm; DMR-058-SRC-003.","limits":"El efecto concreto de Five Dimension Troia sigue desconocido; no se recuperaron costes de Mind, cooldowns precisos ni localizadores narrativos primarios. CONT-SECONDARY."},
    {"id":"community-dmr058-magic-es","category":"community","title":"DanMachi Wiki ES · Magia","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/es/wiki/Magia","coverage":"Índice comunitario de las magias Raumure, Soullight y Cure Ephialtes; DMR-058-SRC-004.","limits":"Índice de nombres/efectos secundarios, no un pasaje narrativo; no aporta coste de uso, cooldown ni localizador primario en esta pasada. CONT-SECONDARY."},
    {"id":"community-dmr058-skills-es","category":"community","title":"DanMachi Wiki ES · Habilidades","publisher":"DanMachi Wiki contributors","authority":"Fuente secundaria","url":"https://danmachi.fandom.com/es/wiki/Habilidades","coverage":"Entrada comunitaria de Five Dimension Troia; DMR-058-SRC-005.","limits":"La fuente la caracteriza como misteriosa/indescifrable, pero no especifica su efecto concreto. No inferir una mecánica. CONT-SECONDARY."},
  ];
  const DEFAULT_RESEARCH_PATHS = [
    "research/inbox/DANMACHI-RESEARCH-053-loki-frontline-capabilities.md",
    "research/inbox/DANMACHI-RESEARCH-054-hermes-familia-secondary-capabilities.md",
    "research/inbox/DANMACHI-RESEARCH-056-hestia-familia-support-capabilities.md",
    "research/inbox/BATCH-DM-003-era-oscura-y-personajes-multiepoca.md",
    "research/inbox/BATCH-DM-004-psicologia-personajes-y-retrieval.md",
    "research/inbox/BATCH-DM-005-astrea-familia-network.md",
    "research/inbox/BATCH-DM-006-oficial-roster-y-retratos.md",
    "research/inbox/BATCH-DM-007-astrea-family-network-and-journey.md",
    "research/inbox/BATCH-DM-008-main-story-volume-map.md",
    "research/inbox/BATCH-DM-009-parallel-stories-and-chronicles.md",
    "research/inbox/BATCH-DM-010-astrea-departure-and-ryu-revenge.md",
    "research/inbox/DANMACHI-RESEARCH-010-hestia-familia-dossier.md",
    "research/inbox/DANMACHI-RESEARCH-011-loki-familia-dossier.md",
    "research/inbox/DANMACHI-RESEARCH-012-astrea-familia-dossier.md",
    "research/inbox/DANMACHI-RESEARCH-013-ryuu-v-and-war-game.md",
    "research/inbox/DANMACHI-RESEARCH-014-bell-opening-episode.md",
    "research/inbox/DANMACHI-RESEARCH-015-bell-hestia-first-meeting-publisher-synopsis.md",
    "research/inbox/DANMACHI-RESEARCH-016-eina-advisor-anime.md",
    "research/inbox/DANMACHI-RESEARCH-021-zeus-hera-familias.md",
    "research/inbox/DANMACHI-RESEARCH-025-soma-relationship-network.md",
    "research/inbox/DANMACHI-RESEARCH-026-orario-babel-hostess-glossary.md",
    "research/inbox/DANMACHI-RESEARCH-028-astrea-wiki-leads.md",
    "research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md",
    "research/inbox/DANMACHI-RESEARCH-031-orario-wiki-geography-leads.md",
    "research/inbox/DANMACHI-RESEARCH-032-daedalus-street-official-anime-reference.md",
    "research/inbox/DANMACHI-RESEARCH-033-hestia-familia-residences.md",
    "research/inbox/DANMACHI-RESEARCH-034-orario-prototype-streets-commerce-babel.md",
    "research/inbox/DANMACHI-RESEARCH-035-orario-volume1-publisher-synopsis.md",
    "research/inbox/DANMACHI-RESEARCH-038-dark-era-and-hiryute-sisters.md",
    "research/inbox/DANMACHI-RESEARCH-039-orario-prototype-location-inventory.md",
    "research/inbox/DANMACHI-RESEARCH-040-publication-horizon-2026-10.md",
    "research/inbox/DANMACHI-RESEARCH-041-familia-chronicle-episode-haze.md",
    "research/inbox/DANMACHI-RESEARCH-042-olivas-act-dossier.md",
    "research/inbox/DANMACHI-RESEARCH-043-albert-aria-and-dark-era-review.md",
    "research/inbox/DANMACHI-RESEARCH-044-kali-fianna-maxim-review.md",
    "research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md",
    "research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md",
    "research/inbox/DANMACHI-RESEARCH-047-orario-north-plaza-volume2-preview.md",
    "research/inbox/DANMACHI-RESEARCH-048-pantheon-main-novel-preview.md",
    "research/inbox/DANMACHI-RESEARCH-051-pantheon-babel-guild-headquarters-reconciliation.md",
    "research/inbox/DANMACHI-RESEARCH-049-daedalus-street-sword-oratoria-vol7.md",
    "research/inbox/DANMACHI-RESEARCH-050-daedalus-street-official-short-story.md"
  ];
  const DEFAULT_DETAIL_IDS = [
    "CHAR-RYUU-LION","CHAR-ALISE-LOVELACE","CHAR-ASTREA","DM-CHAR-BELL","DM-CHAR-HESTIA","DM-CHAR-AIS","DM-CHAR-EINA",
    "CHAR-FINN-DEIMNE","CHAR-FREYA","CHAR-OTTAR","CHAR-KAGUYA","CHAR-LYRA","CHAR-ISKA-BRA","CHAR-MARIYU-LEAGE",
    "CHAR-NOIN-UNIC","CHAR-NEZE-RANKETT","CHAR-ASTA-KNOX","CHAR-RYANA-LIETZ","CHAR-CELTY-SROWA","CHAR-CECIL-BLACKLIZA",
    "CHAR-ISELINA","CHAR-SHAU","CHAR-ULANDA","CHAR-RIVERIA-LJOS-ALF","CHAR-GARETH-LANDROCK","CHAR-LEFIYA-VIRIDIS",
    "CHAR-TIONA-HIRYUTE","CHAR-TIONE-HIRYUTE","CHAR-BETE-LOGA","CHAR-RAUL-NOORD","CHAR-SOMA","CHAR-ZANIS-LUSTRA",
    "CHAR-CHANDRA-IHIT","CHAR-CANOE-BELWAY","CHAR-DARK-ALFIA","CHAR-DARK-ZALD","CHAR-DARK-EREBUS",
    "CHAR-DARK-JURA-HALMER","CHAR-DARK-RUDRA","CHAR-DARK-THANATOS","CHAR-DARK-VALLETTA-GREDE",
    "LOC-ORARIO-CENTRAL-PARK-PROTOTYPE","LOC-ORARIO-AVENUES-PROTOTYPE","LOC-ORARIO-COMMERCIAL-STREETS-PROTOTYPE",
    "EVT-DM-FC-HAZE-001","EVT-DM-GAME-ASTREA-RECORD-001","CHAR-HEITH-VELVET",
    "CHAR-KALI","CHAR-ARGANA-KALIF","CHAR-BACHE-KALIF","CHAR-SELDAS","CHAR-HELGA","CHAR-MAXIM","CHAR-OLIVAS-ACT","CHAR-METERIA",
    "CHAR-ALBERT-WALDSTEIN","CHAR-ARIA"
  ];
  function getDefaultResearchPaths() { return DEFAULT_RESEARCH_PATHS.slice(); }
  function getDefaultDetailIds() { return DEFAULT_DETAIL_IDS.slice(); }
  function normalize(value) {
    return String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("es").replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9faf-]+/g, " ")
      .trim().replace(/\s+/g, " ");
  }
  // Small, explicit morphology bridges common Spanish noun/verb forms without
  // weakening the all-query-terms-must-match rule for unrelated words.
  const SEARCH_SYNONYMS = Object.freeze({
    venganza: ["venganza", "vengar", "vengarse"],
    vengar: ["venganza", "vengar", "vengarse"],
    vengarse: ["venganza", "vengar", "vengarse"]
  });
  function tokenMatches(haystack, token) {
    return (SEARCH_SYNONYMS[token] || [token]).some(form => haystack.includes(form));
  }
  function tokens(value) { return normalize(value).split(" ").filter(t => t.length >= 2 && !STOP_WORDS.has(t)); }
  function clean(value) {
    return String(value ?? "").trim()
      .replace(new RegExp("^" + TICK + "([^" + TICK + "]*)" + TICK + "$"), "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1")
      .replace(new RegExp(TICK + "([^" + TICK + "]+)" + TICK, "g"), "$1")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\s+/g, " ");
  }
  function field(block, key) {
    const m = new RegExp("^- (?:" + TICK + key + TICK + ":|\\*\\*" + key + ":\\*\\*|\\*\\*" + key + "\\*\\*:|" + key + ":)\\s*(.*)$", "m").exec(block);
    return m ? clean(m[1]) : "";
  }
  function unique(values) { return [...new Set(values.filter(Boolean))]; }
  function findIds(value, regex) { return unique(String(value ?? "").match(regex) || []); }
  function parseSource(markdown, sourceDocument) {
    const headings = [...markdown.matchAll(/^### (DMR-\d{3}-CLM-\d{3}) · (.+)$/gm)];
    const claimBoundaries = [...markdown.matchAll(/^#{2,6} DMR-\d{3}-CLM-\d{3} · .+$/gm)];
    return headings.map(match => {
      const nextBoundary = claimBoundaries.find(boundary => boundary.index > match.index);
      const block = markdown.slice(match.index, nextBoundary ? nextBoundary.index : markdown.length);
      const urlField = field(block, "source_url");
      return {
        claimId: field(block, "claim_id") || match[1],
        entryId: field(block, "claim_id") || match[1],
        heading: clean(match[2]),
        claim: field(block, "claim") || field(block, "Afirmación") || field(block, "Afirmacion"),
        characterIds: findIds(field(block, "character_id") + " " + field(block, "character_ids"), /\b(?:DM-CHAR|CHAR)-[A-Z0-9-]+\b/g),
        aspect: field(block, "aspect") || "general",
        eraOrInterval: field(block, "era_or_interval"),
        continuityScopes: findIds(field(block, "continuity_scope"), /\b(?:CONT-[A-Z0-9-]+|CROSS-CONTINUITY)\b/g),
        sourceIds: findIds(block, /\bDMR-\d{3}-SRC-\d{3}\b/g),
        sourceTitle: field(block, "source_title"),
        sourceType: field(block, "source_type"),
        sourceLocator: field(block, "source_locator"),
        sourceUrls: findIds(urlField, /https?:\/\/[^\s;, )]+/g),
        evidenceType: field(block, "evidence_type") || field(block, "claim_type") || "unspecified",
        verificationStatus: clean(field(block, "verification_status") || "unverified").toLowerCase(),
        spoilerLevel: clean(field(block, "spoiler_level") || "unknown").toLowerCase(),
        confidenceNote: field(block, "confidence_note"),
        sourceDocument
      };
    });
  }
  function getAspects(claim) {
    const text = (claim.heading + " " + claim.aspect + " " + claim.claim).toLowerCase();
    const aspects = [];
    if (/gust|preferenc|afici[oó]n|comida|aversi[oó]n|favorite|favorit/.test(text)) aspects.push("likes");
    if (/miedo|temor|fear|inseguridad/.test(text)) aspects.push("fears");
    if (/voz|forma de hablar|habla|speech|expresi[oó]n verbal/.test(text)) aspects.push("voice");
    if (/evoluci[oó]n|crisis|cambio psicol[oó]gico|p[eé]rdida(s)? (que|durante)/.test(text)) aspects.push("evolution");
    if (/relaci[oó]n|v[ií]nculo|lealtad|afecto|rom[aá]ntic|gu[ií]a|capitana/.test(text)) aspects.push("relationships");
    if (/motivaci[oó]n|objetivo|deseo|valores?|justicia|prop[oó]sito/.test(text)) aspects.push("motivation");
    if (/personalidad|temperamento|car[aá]cter|misericordiosa|amable|luminoso|directa/.test(text)) aspects.push("personality");
    if (/conducta|comportamiento|liderazgo|presi[oó]n|entrenamiento|h[aá]bito|trabajando|pr[aá]ctico|competencia/.test(text)) aspects.push("behavior");
    return unique(aspects.length ? aspects : ["general"]);
  }
  function getPeriod(claim) {
    const text = (claim.eraOrInterval + " " + claim.claim + " " + claim.heading).toLowerCase();
    if (/au del oc|continuidad au|historia alternativa|au-/.test(text)) return "AU";
    if (/astrea record|era oscura|siete a[nñ]os antes|t[-−]7|死の七日間/.test(text)) return "ASTREA_RECORD";
    if (/historia principal|danmachi (iii|iv|v)|estado representado en danmachi|inicio de bell|bell cranel/.test(text)) return "MAIN_STORY";
    return "OTHER";
  }
  function splitContinuityClaims(claim) {
    if (claim.claimId === "DMR-001-CLM-010") {
      const base = { ...claim, characterIds: ["CHAR-RYUU-LION"] };
      return [
        { ...base, entryId: claim.claimId + "--CONT-AR", heading: "Ryu Lion · estado histórico",
          claim: "La sinopsis editorial del volumen 1 vincula a Ryu Lion con Astrea Familia durante el periodo histórico de Astrea Record.",
          aspect: "afiliación e identidad", eraOrInterval: "Era Oscura de Orario, aproximadamente siete años antes de la visita de Bell a Orario.",
          continuityScopes: ["CONT-AR"], sourceIds: ["DMR-001-SRC-003"], sourceTitle: "GA Bunko · Astrea Record, volumen 1",
          sourceType: "official_reference", sourceLocator: "Sinopsis editorial; Ryu Lion, Astrea y Alise como capitana.",
          sourceUrls: ["https://ga.sbcr.jp/product/9784815610173"], evidenceType: "explicit_publisher_synopsis",
          verificationStatus: "source_checked", confidenceNote: "Sinopsis oficial; no es un localizador interno del volumen." },
        { ...base, entryId: claim.claimId + "--CONT-ANIME", heading: "Ryu Lion · estado en la adaptación anime",
          claim: "El perfil oficial de la adaptación presenta a Ryu como antigua aventurera y trabajadora de Hostess of Fertility.",
          aspect: "estado y afiliación", eraOrInterval: "Estado posterior descrito por el perfil oficial de DanMachi IV; fecha interna no establecida.",
          continuityScopes: ["CONT-ANIME"], sourceIds: ["DMR-001-SRC-006"], sourceTitle: "Perfil oficial de personajes de DanMachi IV",
          sourceType: "official_reference", sourceLocator: "Entrada リュー・リオン en las secciones Astrea Familia y Hostess of Fertility.",
          sourceUrls: ["https://danmachi.com/danmachi4/character"], evidenceType: "explicit_character_profile",
          verificationStatus: "source_checked", confidenceNote: "Dato de adaptación, no debe transferirse automáticamente a la novela principal." },
        { ...base, entryId: claim.claimId + "--CROSS-CONTINUITY", heading: "Ryu Lion · vínculo entre versiones",
          claim: "La coincidencia del nombre sugiere una identidad común entre el estado histórico de Astrea Record y el posterior de la adaptación; sigue siendo una inferencia provisional.",
          aspect: "identidad y continuidad", eraOrInterval: "Comparación entre Astrea Record y un estado posterior de adaptación.",
          continuityScopes: ["CROSS-CONTINUITY"], sourceIds: ["DMR-001-SRC-003", "DMR-001-SRC-006"],
          sourceTitle: "GA Bunko Astrea Record vol. 1 y perfil oficial DanMachi IV", sourceType: "mixed_official_references",
          sourceLocator: "Sinopsis editorial y perfil de adaptación.",
          sourceUrls: ["https://ga.sbcr.jp/product/9784815610173", "https://danmachi.com/danmachi4/character"],
          evidenceType: "inference", verificationStatus: "provisional",
          confidenceNote: "No verifica el estado de Ryu en la novela principal." }
      ];
    }
    if (claim.claimId === "DMR-002-CLM-017") return [{
      ...claim, entryId: claim.claimId + "--CONT-ANIME", heading: "Astrea · perfil de adaptación",
      claim: "El perfil oficial del anime presenta a Astrea como diosa de justicia y orden, misericordiosa y amable.",
      aspect: "valores y temperamento", continuityScopes: ["CONT-ANIME"], sourceIds: ["DMR-002-SRC-002"],
      sourceTitle: "Perfil oficial de personajes de DanMachi IV", sourceType: "ADAPTATION",
      sourceLocator: "Entrada アストレア.", sourceUrls: ["https://danmachi.com/danmachi4/character"],
      evidenceType: "explicit_character_profile", verificationStatus: "source_checked",
      confidenceNote: "Esta afirmación procede de la adaptación."
    }];
    if (claim.claimId === "DMR-002-CLM-019") {
      const base = { ...claim, characterIds: ["CHAR-ALISE-LOVELACE"] };
      return [
        { ...base, entryId: claim.claimId + "--CONT-AR", heading: "Alise Lovelace · capitanía y guía histórica",
          claim: "La sinopsis editorial identifica a Alise Lovelace como capitana de Astrea Familia y la presenta como guía de Ryu durante su búsqueda de justicia.",
          aspect: "liderazgo y relación documentada", eraOrInterval: "Periodo histórico de Astrea Record, aproximadamente siete años antes de la llegada de Bell.",
          continuityScopes: ["CONT-AR"], sourceIds: ["DMR-001-SRC-003"], sourceTitle: "GA Bunko · Astrea Record, volumen 1",
          sourceType: "official_reference", sourceLocator: "Sinopsis editorial con 団長アリーゼ; Alise como capitana y guía de Ryu.",
          sourceUrls: ["https://ga.sbcr.jp/product/9784815610173"], evidenceType: "explicit_publisher_synopsis",
          verificationStatus: "source_checked", spoilerLevel: "mild",
          confidenceNote: "Sinopsis editorial; no establece toda la historia privada del vínculo ni localizadores internos del volumen." },
        { ...base, entryId: claim.claimId + "--CONT-ANIME", heading: "Alise Lovelace · temperamento en la adaptación",
          claim: "El perfil oficial de la adaptación describe a Alise como directa y de ánimo luminoso.",
          aspect: "personalidad y temperamento", eraOrInterval: "Estado descrito por el perfil oficial de DanMachi IV; fecha interna no establecida.",
          continuityScopes: ["CONT-ANIME"], sourceIds: ["DMR-002-SRC-002"], sourceTitle: "Perfil oficial de personajes de DanMachi IV",
          sourceType: "ADAPTATION", sourceLocator: "Entrada アリーゼ・ローヴェル, descripción de temperamento.",
          sourceUrls: ["https://danmachi.com/danmachi4/character"], evidenceType: "explicit_character_profile",
          verificationStatus: "source_checked", spoilerLevel: "none",
          confidenceNote: "Dato de adaptación; no es evidencia de su estado en la novela principal." }
      ];
    }
    return [claim];
  }
  function parseCharacterProfile(markdown, sourceDocument) {
    const text = String(markdown || "");
    const front = /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s|$)/.exec(text);
    const metadata = front ? front[1] : "";
    const body = front ? text.slice(front[0].length) : text;
    const getMeta = (key) => {
      const match = new RegExp("^" + key + ":\\s*(.*)$", "m").exec(metadata);
      return match ? clean(match[1].replace(/[\\[\\],]/g, " ")) : "";
    };
    const id = getMeta("id");
    const titleMatch = /^#\s+(.+)$/m.exec(body);
    const headings = [...body.matchAll(/^##\s+(.+)$/gm)];
    const sections = headings.map((heading, index) => {
      const start = heading.index + heading[0].length;
      const end = index + 1 < headings.length ? headings[index + 1].index : body.length;
      const sectionText = body.slice(start, end)
        .replace(/^###\s+(.+)$/gm, "\n$1: ")
        .replace(/^\s*[-*]\s+/gm, "• ")
        .replace(/^\s*>\s?/gm, "")
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/\*([^*]+)\*/g, "$1")
        .replace(new RegExp(String.fromCharCode(96) + "([^" + String.fromCharCode(96) + "]+)" + String.fromCharCode(96), "g"), "$1")
        .replace(/[ \t]+/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
      return { heading: clean(heading[1]), text: sectionText };
    }).filter(section => section.heading && section.text);
    return {
      id,
      title: titleMatch ? clean(titleMatch[1]) : id,
      status: getMeta("status") || "provisional",
      continuityScopes: unique(metadata.match(/\bCONT-[A-Z0-9-]+\b/g) || []),
      sourceRefs: unique(metadata.match(/\bDMR-\d{3}-SRC-\d{3}\b/g) || []),
      claimRefs: unique(metadata.match(/\bDMR-\d{3}-CLM-\d{3}\b/g) || []),
      sourceDocument,
      sections
    };
  }
  function claimsFromOfficialRoster(records, existingClaims) {
    const alreadyCovered = new Set((existingClaims || []).flatMap(claim => claim.characterIds || []));
    const generated = [];
    const usedClaimIds = new Set((existingClaims || []).map(claim => claim.claimId).filter(Boolean));
    let counter = 1;
    const make = (record, scope, aspect, heading, claim, dossier) => {
      if (!claim || !String(claim).trim()) return;
      const sourceUrl = dossier && dossier.sourceUrl ? dossier.sourceUrl : record.sourcePage;
      const sourceTitle = dossier && dossier.sourceLabel ? dossier.sourceLabel : (record.sourceTitle || "Perfil oficial de adaptación");
      const sourceType = dossier && dossier.sourceType ? "SECONDARY" : (record.evidenceType || "official_adaptation_profile");
      const sourceId = dossier && dossier.sourceType ? "DMR-007-SRC-001" : (record.sourceId || "DMR-006-SRC-001");
      let claimId;
      do { claimId = "DMR-008-CLM-" + String(counter++).padStart(3,"0"); } while (usedClaimIds.has(claimId));
      usedClaimIds.add(claimId);
      const period = scope === "CONT-AR" ? "Astrea Record · Era Oscura de Orario"
        : scope === "CONT-MAIN-LN" ? "Novela ligera principal · el punto temporal depende del pasaje referenciado"
        : scope === "CROSS-CONTINUITY" ? "Comparación entre novelas, relatos paralelos y adaptaciones"
        : "Estado descrito por " + (record.sourceTitle || "el perfil de adaptación");
      generated.push({
        claimId, entryId: claimId, heading: record.name + " · " + heading, claim: String(claim).trim(),
        characterIds: [record.id], aspect, eraOrInterval: period,
        continuityScopes: [scope], sourceIds: [sourceId], sourceTitle, sourceType,
        sourceLocator: dossier ? "Síntesis original por apartados; consultar el artículo citado y sus referencias primarias." : (record.locator || "Perfil de personaje publicado en la página oficial."),
        sourceUrls: sourceUrl ? [sourceUrl] : [], evidenceType: dossier ? "original_paraphrase_of_secondary_compendium" : "explicit_character_profile",
        verificationStatus: dossier ? "secondary_reference_checked" : "source_checked",
        spoilerLevel: dossier && dossier.spoilerLevel ? dossier.spoilerLevel : "none",
        confidenceNote: dossier
          ? "Resumen redactado de forma original a partir de una wiki comunitaria. Es una fuente secundaria y puede combinar novelas y adaptaciones; contrastar hechos finos con el volumen y la continuidad seleccionados."
          : (record.detailStatus || "Paráfrasis del perfil oficial de adaptación; no representa por sí sola toda la novela ligera."),
        sourceDocument: dossier ? dossier.sourceUrl : record.sourcePage
      });
    };
    for (const record of records || []) {
      if (!record || !record.id) continue;
      const dossierMap = record.dossiers && typeof record.dossiers === "object" ? record.dossiers : {};
      if (!alreadyCovered.has(record.id)) {
        const scope = record.continuity || "CONT-ANIME";
        make(record, scope, "identidad y contexto", "resumen del perfil", record.summary, null);
        make(record, scope, "personalidad y temperamento", "personalidad", record.personality, null);
        make(record, scope, "habilidades y combate", "capacidades", record.abilities, null);
        make(record, scope, "relaciones y vínculos", "relaciones destacadas", record.relationships, null);
        if (record.detailStatus) make(record, scope, "límites de evidencia", "cobertura documental", record.detailStatus, null);
      }
      for (const [scope, dossier] of Object.entries(dossierMap)) {
        if (!dossier || typeof dossier !== "object") continue;
        make(record, scope, "apariencia e identidad visual", "apariencia y presentación", dossier.appearance, dossier);
        make(record, scope, "evolución e historia", "historia y contexto", dossier.history, dossier);
        make(record, scope, "evolución psicológica", "evolución del personaje", dossier.development, dossier);
        make(record, scope, "habilidades y combate", "perfil de combate", dossier.combatProfile, dossier);
        make(record, scope, "hábitos y conducta", "hábitos y detalles distintivos", dossier.habits, dossier);
        make(record, scope, "motivación y función narrativa", "función narrativa", dossier.narrativeRole, dossier);
        for (const relation of dossier.relationshipDetails || []) {
          if (!relation || !relation.name || !relation.detail) continue;
          make(record, scope, "relaciones y vínculos", "relación con " + relation.name, relation.detail, dossier);
        }
        for (const ability of dossier.abilities || []) {
          if (!ability || !ability.name || !ability.detail) continue;
          make(record, scope, "habilidades y combate", ability.name, ability.detail, dossier);
        }
      }
    }
    return generated;
  }
  function buildIndex(catalog, documents, profileDocuments) {
    const parsedClaims = documents.flatMap(doc => parseSource(doc.content, doc.path)).flatMap(splitContinuityClaims)
      .map(claim => ({ ...claim, aspects: getAspects(claim), periodKey: getPeriod(claim) }));
    const officialRoster = typeof globalThis !== "undefined" && globalThis.WordWaifuOfficialCharacterRoster
      ? globalThis.WordWaifuOfficialCharacterRoster.list() : [];
    const generatedClaims = claimsFromOfficialRoster(officialRoster, parsedClaims)
      .map(claim => ({ ...claim, aspects: getAspects(claim), periodKey: getPeriod(claim) }));
    const claims = [...parsedClaims, ...generatedClaims];
    const usedIds = new Set(claims.flatMap(claim => claim.characterIds));
    const allCharacterRecords = (catalog.records || [])
      .filter(record => ["character", "deity_character"].includes(record.type));
    const primaryCharacterNames = new Set(allCharacterRecords.map(record => {
      const tags = Array.isArray(record.tags) ? record.tags : [];
      const name = tags.find(tag => typeof tag === "string" && !/^spoiler/i.test(tag)) || record.name || record.title || record.id;
      return normalize(name);
    }).filter(Boolean));
    const catalogCharacters = allCharacterRecords
      .filter(record => usedIds.has(record.id))
      .map(record => {
        const tags = Array.isArray(record.tags) ? record.tags.filter(tag => typeof tag === "string") : [];
        const name = tags.find(tag => !/^spoiler/i.test(tag)) || record.name || record.title || record.id;
        const normalizedName = normalize(name);
        // Tags that name a different catalogued character describe a relationship,
        // not an alias for this character. Keep relation navigation in the graph.
        const searchableTags = tags.filter(tag => {
          const normalizedTag = normalize(tag);
          return normalizedTag === normalizedName || !primaryCharacterNames.has(normalizedTag);
        });
        const aliases = unique([name, ...searchableTags.filter(tag => !/familia|multi-era|motivation|leadership|training|loyalty|spoiler|deity|historical state|timeline|provisional/i.test(tag))]);
        return { id: record.id, name, aliases, keywords: unique(searchableTags), profilePath: record.path };
      });
    // Official adaptation references extend discoverability without pretending to be
    // fully researched canonical dossier files. Each entry must have source-backed claims.
    const knownCharacterIds = new Set(catalogCharacters.map(character => character.id));
    const externalCharacters = officialRoster
      .filter(record => usedIds.has(record.id) && !knownCharacterIds.has(record.id))
      .map(record => ({ id: record.id, name: record.name, aliases: unique([record.name, ...(record.aliases || [])]), keywords: unique([record.family, record.role, record.sourceTitle, ...(record.aliases || [])]) }));
    const characters = [...catalogCharacters, ...externalCharacters]
      .sort((a, b) => a.name.localeCompare(b.name, "es"));
    const profileDetails = Object.create(null);
    (profileDocuments || []).forEach(document => {
      const parsed = parseCharacterProfile(document.content, document.path);
      if (parsed.id) profileDetails[parsed.id] = parsed;
    });
    return { schemaVersion: 1, indexName: "WordWaifu DanMachi Lore Search", mode: "curated-claims",
      sourceClaimCount: documents.reduce((sum, doc) => sum + parseSource(doc.content, doc.path).length, 0),
      entryCount: claims.length, characters, claims, profileDetails,
      relationships: Array.isArray(catalog.relationships) ? catalog.relationships : [],
      entityRecords: (catalog.records || []).filter(record => record && typeof record.id === "string" && typeof record.type === "string").map(record => ({
        id: record.id, path: record.path || "", name: record.name || record.title || "", type: record.type, status: record.status || "unknown",
        priority: record.priority || "normal", tags: Array.isArray(record.tags) ? record.tags.filter(tag => typeof tag === "string") : []
      })),
      profileDocumentCount: Object.keys(profileDetails).length };
  }
  async function load(basePath) {
    const base = basePath || "./lore/danmachi/";
    const paths = ["catalog.json", ...getDefaultResearchPaths()];
    const responses = await Promise.all(paths.map(path => fetch(base + path, { cache: "no-cache" })));
    for (let i = 0; i < responses.length; i++) if (!responses[i].ok) throw new Error("No se pudo cargar " + paths[i] + " (HTTP " + responses[i].status + ").");
    const catalog = await responses[0].json();
    const docs = await Promise.all(responses.slice(1).map(async (response, i) => ({
      path: paths[i + 1], content: await response.text()
    })));
    const detailIds = new Set(getDefaultDetailIds());
    const profileRecords = (catalog.records || []).filter(record =>
      detailIds.has(record.id) && typeof record.path === "string" &&
      record.path.startsWith("characters/") && record.path.endsWith(".md"));
    const profileResponses = await Promise.all(profileRecords.map(record =>
      fetch(base + record.path, { cache: "no-cache" }).then(response => {
        if (!response.ok) throw new Error("No se pudo cargar ficha existente " + record.path + " (HTTP " + response.status + ").");
        return response.text().then(content => ({ path: record.path, content }));
      })));
    return buildIndex(catalog, docs, profileResponses);
  }
  function search(index, options) {
    const settings = options || {};
    const queryTokens = tokens(settings.query || "");
    const characterId = String(settings.characterId || "");
    const continuity = String(settings.continuity || "ALL");
    const period = String(settings.period || "ALL");
    const aspect = String(settings.aspect || "all");
    const spoiler = String(settings.spoiler || "all");
    const verificationStatus = String(settings.verificationStatus || "ALL").toLowerCase();
    const limit = Number.isInteger(settings.limit) ? Math.max(1, Math.min(settings.limit, 100)) : 20;
    const characterMap = new Map((index.characters || []).map(character => [character.id, character]));
    const results = [];
    for (const claim of index.claims || []) {
      if (characterId && !claim.characterIds.includes(characterId)) continue;
      if (continuity !== "ALL" && !claim.continuityScopes.includes(continuity)) continue;
      if (period !== "ALL" && claim.periodKey !== period) continue;
      if (aspect !== "all" && !(claim.aspects || []).includes(aspect)) continue;
      if (spoiler === "hide-major" && ["major", "endgame"].includes(claim.spoilerLevel)) continue;
      if (spoiler === "safe-only" && !["none", "mild"].includes(claim.spoilerLevel)) continue;
      const claimVerificationStatus = String(claim.verificationStatus || "unverified").toLowerCase();
      const matchesVerificationStatus = verificationStatus === "all"
        || claimVerificationStatus === verificationStatus
        || (verificationStatus === "source_checked" && claimVerificationStatus.startsWith("source_checked_"))
        || (verificationStatus === "secondary_checked" && claimVerificationStatus.startsWith("secondary_checked_"));
      if (!matchesVerificationStatus) continue;
      const characterRecords = (claim.characterIds || []).map(id => characterMap.get(id)).filter(Boolean);
      const aliases = characterRecords.flatMap(character => character.aliases || []);
      const haystack = normalize([claim.heading, claim.claim, claim.aspect, claim.eraOrInterval, claim.periodKey,
        claim.continuityScopes.join(" "), claim.aspects.join(" "), aliases.join(" "), claim.sourceTitle,
        claim.sourceLocator, claim.sourceIds.join(" "), claim.claimId, claim.entryId].join(" "));
      const foundTokens = queryTokens.filter(token => tokenMatches(haystack, token));
      if (queryTokens.length && foundTokens.length !== queryTokens.length) continue;
      results.push({ ...claim, characterNames: characterRecords.map(character => character.name),
        profilePaths: characterRecords.map(character => character.profilePath).filter(Boolean),
        score: queryTokens.length ? foundTokens.length * 10 : 1 });
    }
    results.sort((a, b) => b.score - a.score || a.claimId.localeCompare(b.claimId, "en") || a.entryId.localeCompare(b.entryId, "en"));
    return { results: results.slice(0, limit), totalMatches: results.length, truncated: results.length > limit,
      abstain: results.length === 0, queryTokens };
  }

  function searchEntities(catalog, options) {
    const settings = options || {};
    const requestedType = normalize(settings.type || settings.entityType || "all");
    const queryTokens = tokens(settings.query || "");
    const allowedTypes = new Set(["all", "familia", "character", "character group", "deity character", "location", "setting",
      "institution and location", "world rule", "chronology", "event", "author event", "index"]);
    if (!allowedTypes.has(requestedType)) {
      return { results: [], totalMatches: 0, truncated: false, abstain: true, queryTokens,
        error: "Tipo de entidad no reconocido: " + requestedType };
    }
    const records = Array.isArray(catalog && catalog.records) ? catalog.records : [];
    const results = records.filter(record => {
      if (!record || typeof record.id !== "string" || typeof record.type !== "string") return false;
      if (requestedType !== "all" && normalize(record.type) !== requestedType) return false;
      const tags = Array.isArray(record.tags) ? record.tags.filter(tag => typeof tag === "string") : [];
      const haystack = normalize([record.id, record.path, record.type, record.status, record.priority, ...tags].join(" "));
      return queryTokens.every(token => tokenMatches(haystack, token));
    }).map(record => ({
      id: record.id, path: record.path || "", type: record.type, status: record.status || "unknown",
      priority: record.priority || "normal", tags: Array.isArray(record.tags) ? record.tags.slice() : []
    })).sort((a, b) => a.id.localeCompare(b.id, "en"));
    const limit = Number.isInteger(settings.limit) ? Math.max(1, Math.min(settings.limit, 100)) : 50;
    return { results: results.slice(0, limit), totalMatches: results.length, truncated: results.length > limit,
      abstain: results.length === 0, queryTokens };
  }

  function getOnlineSourceDirectory() {
    return ONLINE_SOURCE_DIRECTORY.map(source => ({ ...source }));
  }
  function cleanExternalText(value) {
    return String(value ?? "").replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ").replace(/&#160;/g, " ")
      .replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">")
      .replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
      .replace(/&#(\d+);/g, (all, code) => {
        const number = Number(code);
        return Number.isFinite(number) && number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : all;
      })
      .replace(/&#x([0-9a-f]+);/gi, (all, code) => {
        const number = parseInt(code, 16);
        return Number.isFinite(number) && number > 0 && number <= 0x10ffff ? String.fromCodePoint(number) : all;
      })
      .replace(/\s+/g, " ").trim();
  }
  function extractExternalLead(html) {
    let source = String(html || "");
    source = source
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<aside\b[\s\S]*?<\/aside>/gi, " ")
      .replace(/<figure\b[\s\S]*?<\/figure>/gi, " ")
      .replace(/<table\b[\s\S]*?<\/table>/gi, " ")
      .replace(/<sup\b[\s\S]*?<\/sup>/gi, " ");
    const paragraphs = [...source.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
      .map(match => cleanExternalText(match[1]))
      .filter(text => text.length > 45)
      .filter(text => !/^(jump to|navigation|contents|references|external links|categories)/i.test(text));
    let result = "";
    for (const paragraph of paragraphs.slice(0, 5)) {
      if (result.length + paragraph.length > 1300) {
        const remainder = 1300 - result.length;
        if (remainder > 100) result += (result ? "\n\n" : "") + paragraph.slice(0, remainder).trim();
        break;
      }
      result += (result ? "\n\n" : "") + paragraph;
    }
    return result.trim();
  }
  function allowedExternalImageUrl(value, providerId) {
    try {
      const url = new URL(String(value || ""));
      if (url.protocol !== "https:") return "";
      if (providerId === "danmachi-wiki" && /(?:^|\.)wikia\.nocookie\.net$/i.test(url.hostname)) return url.href;
      if (providerId === "wikipedia-en" && (url.hostname === "upload.wikimedia.org" || url.hostname === "en.wikipedia.org")) return url.href;
    } catch {}
    return "";
  }
  async function searchExternalSources(query, options) {
    const searchText = String(query ?? "").trim().slice(0, 160);
    const settings = options || {};
    if (!searchText) throw new TypeError("Escribí un tema o elegí un personaje antes de buscar en la web.");
    const fetcher = settings.fetchImpl || settings.fetch || (typeof fetch === "function" ? fetch : null);
    if (!fetcher) throw new Error("Este entorno no ofrece fetch para consultar fuentes web.");
    const providers = [
      { id:"danmachi-wiki", label:"DanMachi Wiki (Fandom)", authority:"Fuente secundaria · wiki comunitaria", note:"Úsala para localizar páginas, nombres alternativos y referencias; no confirma canon por sí sola.", endpoint:"https://danmachi.fandom.com/api.php", searchUrl:"https://danmachi.fandom.com/wiki/Special:Search?query="+encodeURIComponent(searchText), articleUrl:title=>"https://danmachi.fandom.com/wiki/"+encodeURIComponent(String(title||"").replace(/ /g,"_")) },
      { id:"wikipedia-en", label:"Wikipedia en inglés", authority:"Fuente secundaria · enciclopedia general", note:"Útil para contexto de serie/publicación; normalmente no basta para detalles específicos del canon.", endpoint:"https://en.wikipedia.org/w/api.php", searchUrl:"https://en.wikipedia.org/w/index.php?search="+encodeURIComponent(searchText), articleUrl:title=>"https://en.wikipedia.org/wiki/"+encodeURIComponent(String(title||"").replace(/ /g,"_")) }
    ];
    const providerReports = await Promise.all(providers.map(async provider => {
      try {
        const url = new URL(provider.endpoint);
        url.searchParams.set("action","query"); url.searchParams.set("list","search");
        url.searchParams.set("srsearch",searchText); url.searchParams.set("srnamespace","0");
        url.searchParams.set("srlimit","5"); url.searchParams.set("srprop","snippet|timestamp");
        url.searchParams.set("format","json"); url.searchParams.set("origin","*");
        const request = { method:"GET", mode:"cors", credentials:"omit", cache:"no-store", headers:{Accept:"application/json"} };
        if(settings.signal) request.signal = settings.signal;
        const response = await fetcher(url.href,request);
        if(!response || !response.ok) throw new Error("HTTP "+(response?response.status:"sin respuesta"));
        const payload = await response.json();
        const hits = payload && payload.query && Array.isArray(payload.query.search) ? payload.query.search : [];
        const results = hits.slice(0,5).map(hit=>({
          providerId:provider.id, providerLabel:provider.label, authority:provider.authority,
          title:cleanExternalText(hit.title)||"Resultado sin título",
          snippet:cleanExternalText(hit.snippet)||"La fuente no proporcionó un resumen para este resultado.",
          extract:"", thumbnailUrl:"", imageCredit:"",
          url:provider.articleUrl(hit.title), updatedAt:typeof hit.timestamp==="string"?hit.timestamp:"",
          pageId:Number.isSafeInteger(Number(hit.pageid))&&Number(hit.pageid)>0?Number(hit.pageid):null
        }));
        const pageIds = results.map(hit=>hit.pageId).filter(Boolean);
        if(pageIds.length){
          try {
            const imageRequestUrl = new URL(provider.endpoint);
            imageRequestUrl.searchParams.set("action","query");
            imageRequestUrl.searchParams.set("prop","pageimages|info");
            imageRequestUrl.searchParams.set("pageids",pageIds.join("|"));
            imageRequestUrl.searchParams.set("piprop","thumbnail");
            imageRequestUrl.searchParams.set("pithumbsize","320");
            imageRequestUrl.searchParams.set("inprop","url");
            imageRequestUrl.searchParams.set("format","json");
            imageRequestUrl.searchParams.set("origin","*");
            const imageResponse = await fetcher(imageRequestUrl.href,request);
            if(imageResponse&&imageResponse.ok){
              const imagePayload=await imageResponse.json();
              const pages=imagePayload&&imagePayload.query&&imagePayload.query.pages;
              const pageList=Array.isArray(pages)?pages:Object.values(pages||{});
              const byId=new Map(pageList.map(page=>[Number(page.pageid),page]));
              results.forEach(hit=>{
                const page=byId.get(hit.pageId);
                if(!page)return;
                hit.url=typeof page.canonicalurl==="string"&&page.canonicalurl.startsWith("https://")
                  ?page.canonicalurl:typeof page.fullurl==="string"&&page.fullurl.startsWith("https://")?page.fullurl:hit.url;
                hit.thumbnailUrl=allowedExternalImageUrl(page.thumbnail&&page.thumbnail.source,provider.id);
                if(hit.thumbnailUrl)hit.imageCredit="Miniatura alojada por "+provider.label+"; derechos de imagen de sus titulares. No se guarda en WordWaifu.";
              });
            }
          } catch { /* A failed thumbnail lookup must not erase the article search results. */ }
          const detailHits=results.filter(hit=>hit.pageId).slice(0,3);
          await Promise.all(detailHits.map(async hit=>{
            try {
              const detailUrl=new URL(provider.endpoint);
              detailUrl.searchParams.set("action","parse");
              detailUrl.searchParams.set("page",hit.title);
              detailUrl.searchParams.set("section","0");
              detailUrl.searchParams.set("prop","text");
              detailUrl.searchParams.set("format","json");
              detailUrl.searchParams.set("origin","*");
              const detailResponse=await fetcher(detailUrl.href,request);
              if(!detailResponse||!detailResponse.ok)return;
              const detailPayload=await detailResponse.json();
              const html=detailPayload&&detailPayload.parse&&detailPayload.parse.text&&detailPayload.parse.text["*"];
              const extract=extractExternalLead(html);
              if(extract)hit.extract=extract.slice(0,1300);
            } catch { /* Keep the safe search snippet if page lead extraction is unavailable. */ }
          }));
        }
        return {
          providerId:provider.id, providerLabel:provider.label, authority:provider.authority,
          note:provider.note, searchUrl:provider.searchUrl, error:"", results
        };
      } catch(error) {
        return {
          providerId:provider.id, providerLabel:provider.label, authority:provider.authority,
          note:provider.note, searchUrl:provider.searchUrl,
          error:cleanExternalText(error && error.message ? error.message : "Fuente no disponible"), results:[]
        };
      }
    }));
    return {
      query:searchText, providers:providerReports,
      results:providerReports.flatMap(provider=>provider.results),
      hasFailures:providerReports.some(provider=>Boolean(provider.error)),
      sourceDirectory:getOnlineSourceDirectory()
    };
  }

  return { load, buildIndex, search, searchEntities, normalize, tokens, parseCharacterProfile, getOnlineSourceDirectory, searchExternalSources, cleanExternalText, extractExternalLead, allowedExternalImageUrl, getDefaultResearchPaths, getDefaultDetailIds };
});
