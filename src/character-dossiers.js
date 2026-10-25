(function(root) {
  "use strict";
  const dossiers = {
    "DM-CHAR-BELL": {
      appearance: "Joven humano de cabello blanco y ojos rojos; su aspecto menudo y su velocidad le han valido comparaciones con un conejo. Suele vestir equipo ligero para moverse con rapidez en el Dungeon.",
      history: "Crece en una aldea apartada bajo el cuidado de Zeus, quien alimenta su imaginación con relatos de héroes. Viaja a Orario con la expectativa ingenua de vivir aventuras y es rechazado por varias Familias antes de que Hestia lo acepte como su primer miembro. El rescate de Ais frente a un Minotauro transforma su deseo de convertirse en héroe en una meta personal: alcanzar la fuerza necesaria para estar a su altura.",
      personality: "Es honesto, tímido en lo romántico, compasivo y extraordinariamente persistente. Su primera reacción ante el peligro suele ser proteger a alguien incluso cuando la retirada sería más sensata. No es un estratega frío: inspira confianza por sus actos, pero puede lanzarse a situaciones que superan sus recursos.",
      abilities: "Liaris Freese acelera su crecimiento mientras su aspiración por Ais se mantenga intensa; su progreso anómalo está ligado a la experiencia y al esfuerzo acumulado. Firebolt ofrece un ataque mágico rápido, Argonaut concentra energía para potenciar una acción y Ox Slayer mejora su respuesta contra minotauros. Sus estadísticas acumuladas suelen dejarlo por encima de otros aventureros recién ascendidos al mismo nivel.",
      relationships: "Hestia es su diosa y el núcleo afectivo de su Familia. Liliruca aporta estrategia y coordinación; Welf, herrería y apoyo directo; Mikoto, disciplina táctica; Haruhime, apoyo mágico. Ais es su modelo de fuerza y el vínculo que desencadena buena parte de su crecimiento. Ryuu llega a ser una compañera crucial tras el desastre del piso 37. La entrevista de Dengeki Online declara que Alfia es tía de Bell en la novelización de Astrea Record (DMR-045-CLM-007, CONT-AR). Otra entrevista de 2020 confirma que la madre de Bell es la hermana menor de Alfia en el marco de Memoria Freese (DMR-045-CLM-008, CONT-GAME); no la nombra como Meteria. La misma respuesta confirma la descripción del padre como サポーター (supporter) de Zeus Familia, sin revelar su nombre ni demostrar membresía formal (DMR-045-CLM-012, CONT-GAME). Ruta de evento: EVT-DM-GAME-ASTREA-RECORD-001. Nada de estos datos se transfiere a CONT-MAIN-LN.",
      conflict: "Su ideal de salvar a todos choca con la realidad de un mundo donde la fuerza y el tiempo son limitados. Su compasión puede convertirse en una vulnerabilidad táctica, y su crecimiento acelerado no elimina la falta de experiencia ni el coste emocional de cada derrota.",
      sources: ["https://danmachi.fandom.com/es/wiki/Bell_Cranel","https://danmachi.com/danmachi5/character/","https://dengekionline.com/articles/189750/","https://ln-news.com/articles/109766","https://www.reddit.com/r/DanMachi/comments/1h7wabo/","https://www.reddit.com/r/DanMachi/comments/1ifg4g6/volume_20_side_story_a_scene_between_a_certain/","https://yenpress.com/titles/9798855437867-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-20-light-novel"],
    },
    "DM-CHAR-HESTIA": {
      appearance: "Diosa de baja estatura, cabello negro largo recogido en dos coletas y ojos azules. Su atuendo característico es un vestido blanco con cintas azules; los adornos de campana que lleva en el pelo fueron un regalo de Bell.",
      history: "Tras descender al mundo inferior, Hestia depende durante un tiempo de la ayuda de Hephaistos y tiene dificultades para reclutar seguidores. Conoce a Bell cuando él tampoco logra entrar en una Familia y lo convierte en su primer miembro. Su vínculo comienza con una vivienda humilde y deudas difíciles, y la victoria contra la Familia Apollo transforma la pequeña Familia en una facción reconocida.",
      personality: "Enérgica, afectuosa, generosa y obstinada. Su apego a Bell puede volverla celosa, pero no se reduce a los celos: está dispuesta a humillarse o negociar con tal de conseguirle equipo y oportunidades. Su calidez da cohesión a una Familia cuyos integrantes tienen temperamentos muy distintos.",
      abilities: "Como diosa, no combate en el Dungeon como un aventurero con falna. Su función central es conceder la bendición que permite a sus seguidores desarrollar estadísticas y habilidades, además de actualizar sus estados. Su autoridad divina y su capacidad de asumir deudas o pedir favores son recursos sociales importantes, aunque no sustituyen el poder de combate.",
      relationships: "Bell es su primer seguidor y su principal prioridad. Hephaistos es su amiga y acreedora; Lili se convierte en una colaboradora clave para organizar la Familia. Aprende a confiar en los compañeros de Bell y a reconocer que protegerlo también significa permitir que crezca por sus propios medios.",
      conflict: "Su deseo de proteger a Bell compite con su necesidad de respetar su autonomía. La falta de dinero y de miembros limita sus opciones, y su impulsividad puede complicar negociaciones que requieren paciencia.",
      sources: ["https://danmachi.fandom.com/wiki/Hestia", "https://danmachi.fandom.com/es/wiki/Familia_Hestia"]
    },
    "CHAR-LILIRUCA-ARDE": {
      appearance: "Pallum de baja estatura, cabello castaño y aspecto juvenil. Durante su etapa como ayudante utilizaba ropa con capucha y el hechizo Cinder Ella para ocultar su identidad y adoptar otras apariencias.",
      history: "Crece en la Familia Soma, donde su condición de ayudante la expone a explotación y maltrato. Aprende a desconfiar de los aventureros y sobrevive mediante engaños y robos durante las expediciones. Bell la trata con una generosidad que contradice sus experiencias, la salva y le da una alternativa; después logra abandonar la Familia Soma y unirse a Hestia.",
      personality: "Práctica, desconfiada y observadora. Puede parecer cínica o dura porque calcula riesgos antes de confiar, pero esa cautela nace de la necesidad de protegerse y proteger a los suyos. Tiene talento para leer intenciones, recordar detalles y detectar contradicciones; también se frustra cuando Bell se expone sin considerar las consecuencias.",
      abilities: "Su tamaño y su experiencia como ayudante la hacen útil para explorar, cargar equipo y pasar desapercibida. Cinder Ella le permite alterar su apariencia, y Artel Assist y Command Call refuerzan su papel de apoyo y coordinación. Su mayor ventaja no es el combate frontal, sino la información, la logística y la capacidad de preparar un plan que otros puedan ejecutar.",
      relationships: "Bell es la persona que rompe su desconfianza hacia los aventureros. Hestia le ofrece un hogar estable; Welf y Mikoto son compañeros con quienes aprende a compartir responsabilidades. En la Familia suele funcionar como organizadora y estratega, especialmente cuando Hestia no puede entrar al Dungeon.",
      conflict: "Su instinto de supervivencia puede llevarla a manipular a otros o a ocultar información. Debe aprender a confiar sin perder el criterio que la mantuvo viva.",
      sources: ["https://danmachi.fandom.com/es/wiki/Liliruca_Arde", "https://danmachi.fandom.com/wiki/Hestia_Familia"]
    },
    "CHAR-WELF-CROZZO": {
      appearance: "Humano de cabello rojo y complexión robusta. Su indumentaria y sus manos suelen delatar su oficio: lleva herramientas, materiales y equipo adaptado a su trabajo como herrero además del equipamiento de aventurero.",
      history: "Nace en Rakia dentro de la familia Crozzo, célebre por fabricar espadas mágicas. Cuando despierta Crozzo Blood, su familia espera que repita ese legado, pero Welf rechaza que lo definan por una capacidad que teme que otros utilicen para hacer daño. Abandona Rakia y se establece en Orario, donde encuentra una Familia que valora tanto su trabajo como sus decisiones.",
      personality: "Directo, orgulloso de su oficio y leal. Detesta que su valor se mida únicamente por la espada mágica que puede producir. Tiene un sentido práctico y una ética de trabajo sólida; a diferencia de Bell, suele pensar en la preparación y en el equipo que hará posible la supervivencia del grupo.",
      abilities: "Combina combate de primera línea con herrería. Crozzo Blood le permite producir espadas mágicas, mientras Will-o-Wisp castiga a quienes intentan utilizar magia en su radio de efecto. Su progreso más importante consiste en decidir por sí mismo qué fabricar y por qué, no solo en aumentar la potencia destructiva de sus armas.",
      relationships: "Su amistad con Bell se basa en la confianza y el trabajo compartido. Hestia le da un lugar donde no tiene que obedecer las expectativas de Rakia; Lili y Mikoto son compañeras que compensan su tendencia a resolver los problemas de frente. Mantiene una relación especialmente estrecha con el oficio de herrero y con la responsabilidad que implica entregar un arma a otra persona.",
      conflict: "Su rechazo a las espadas mágicas nace de una culpa histórica que no creó personalmente. Debe reconciliar el poder de su sangre familiar con la responsabilidad de decidir cómo se usa.",
      sources: ["https://danmachi.fandom.com/es/wiki/Welf_Crozzo", "https://danmachi.fandom.com/wiki/Hestia_Familia"]
    },
    "CHAR-MIKOTO-YAMATO": {
      appearance: "Humana de cabello negro, normalmente recogido en una coleta, ojos violáceos y vestimenta inspirada en el Lejano Oriente. Utiliza una katana y conserva una postura disciplinada incluso fuera del combate.",
      history: "Se forma bajo las enseñanzas de Takemikazuchi y llega a Orario con una idea estricta del deber. Su paso por la Familia Takemikazuchi y su posterior incorporación a Hestia la obligan a equilibrar la obediencia a sus principios con las necesidades concretas de sus compañeros. Su experiencia marcial y su capacidad para trabajar en equipo la vuelven especialmente valiosa en expediciones coordinadas.",
      personality: "Seria, honorable, humilde y muy leal. Evita las tácticas que considera deshonestas, incluso bajo presión, y suele minimizar su propia contribución cuando otros la elogian. Su sinceridad la hace mala mentirosa, pero también una compañera fiable que se preocupa de manera activa por la seguridad de sus amigos.",
      abilities: "Su entrenamiento se centra en la espada y en técnicas de combate disciplinadas. Futsunomitama le permite crear un efecto de gravedad que inmoviliza enemigos dentro de un área, ofreciendo control del campo de batalla incluso contra adversarios físicamente superiores. Esa utilidad táctica complementa a los atacantes más fuertes de la Familia.",
      relationships: "Takemikazuchi es su maestro y una figura de referencia. Bell representa la clase de bondad que ella respeta; Welf comparte con ella un enfoque práctico y Lili aprecia su disciplina. Su lealtad se expresa mediante acciones concretas, no mediante grandes discursos.",
      conflict: "Su sentido del honor puede hacerle descartar soluciones eficaces si las considera indignas. La humildad también puede llevarla a restar importancia a sus capacidades y a asumir más responsabilidad de la que le corresponde.",
      sources: ["https://danmachi.fandom.com/wiki/Yamato_Mikoto", "https://danmachi.fandom.com/wiki/Hestia_Familia"]
    },
    "CHAR-SANJOUNO-HARUHIME": {
      appearance: "Renard de cabello rubio y orejas de zorro, asociada visualmente con vestimentas inspiradas en una sacerdotisa del Lejano Oriente. Su apariencia delicada contrasta con el efecto decisivo de su magia de apoyo.",
      history: "Su vida queda marcada por la servidumbre y la pérdida de control sobre su propio destino. Bell y sus compañeros intervienen para rescatarla, y Hestia le ofrece una comunidad en la que puede reconstruir su vida. Al incorporarse a la Familia, encuentra una función que no depende de su pasado: apoyar a otros aventureros sin quedar reducida a un objeto de protección.",
      personality: "Tímida, amable, cortés y propensa a idealizar a los héroes. Puede infravalorarse y sentirse una carga, pero su disposición a ayudar persiste incluso cuando tiene miedo. Su crecimiento emocional consiste en aceptar que sus decisiones y su apoyo tienen valor propio.",
      abilities: "Uchide no Kozuchi concede un aumento temporal de nivel a un aliado, una ventaja excepcional que puede cambiar el equilibrio de una batalla. Su magia consume recursos mentales y exige planificación; por eso su papel es estratégico y necesita protección y coordinación del equipo. Los abanicos mágicos que utiliza complementan su función, aunque no la convierten en una combatiente frontal.",
      relationships: "Bell participa en su rescate y se convierte en un modelo de bondad. Hestia le brinda hogar y seguridad; Lili y Mikoto la integran en el funcionamiento cotidiano de la Familia. Su apoyo puede beneficiar a todo el grupo, de modo que la confianza de sus compañeros es parte esencial de su eficacia.",
      conflict: "Su tendencia a sentirse indefensa puede ocultar la importancia real de sus capacidades. Necesita reconocer su agencia y aprender a actuar sin interpretar cada dificultad como una prueba de que no merece ser protegida.",
      sources: ["https://danmachi.fandom.com/wiki/Sanjouno_Haruhime", "https://danmachi.fandom.com/wiki/Hestia_Familia"]
    },
    "CHAR-RYUU-LION": {
      appearance: "Elfa de cabello verde y rasgos finos, conocida por su porte reservado y su velocidad de combate. Suele luchar con espada y magia, y su experiencia como aventurera se refleja en movimientos precisos y eficientes.",
      history: "Antes de conocer a Bell, Ryuu perteneció a la Astraea Familia y defendió una idea idealista de la justicia. La destrucción de su Familia durante la Era Oscura la condujo a una campaña de venganza contra los responsables. Tras consumarla, intenta volver a vivir sin dejar que el pasado determine cada decisión. En la adaptación de DanMachi IV, su trabajo en la taberna y el encuentro con Bell la arrastran a una expedición al piso 37, donde ambos deben sobrevivir a un desastre que pone a prueba tanto su resistencia como su voluntad de seguir viviendo.",
      personality: "Seria, honesta y disciplinada, pero profundamente compasiva. Ayuda a desconocidos aunque hacerlo la ponga en peligro. Su justicia no es ingenua: la experiencia le enseñó que la bondad puede convivir con decisiones terribles, y su recuperación consiste en volver a elegir proteger sin convertir el castigo en el centro de su vida.",
      abilities: "Es una combatiente versátil: combina espada, velocidad, magia élfica y canto simultáneo mientras se mueve. Su experiencia le permite improvisar bajo presión, explotar el terreno y apoyar a aliados además de atacar. Sus técnicas y su conocimiento del Dungeon la distinguen de alguien que depende únicamente de sus estadísticas.",
      relationships: "Astraea fue su diosa y Alise Lovelace una influencia central en su juventud. Kaguya y Lyra moldearon su comprensión de la justicia y la supervivencia. Bell se convierte en compañero decisivo durante la expedición del piso 37 y le ofrece una razón para volver a confiar en otros.",
      conflict: "La culpa por su pasado y el miedo a perder a otra persona pueden hacer que se aísle o acepte riesgos extremos. Su arco no borra la violencia que cometió: trata de decidir qué hacer con ella y cómo construir una vida posterior.",
      sources: ["https://danmachi.fandom.com/wiki/Ryuu_Lion", "https://danmachi.fandom.com/es/wiki/Ryuu_Lion", "https://danmachi.com/danmachi4/character/"]
    },
    "DM-CHAR-AIS": {
      appearance: "Aventurera humana de cabello rubio y ojos dorados, habitualmente vista con armadura ligera y espada. Su expresión contenida hace que parezca distante, aunque su lenguaje corporal suele revelar más que sus palabras.",
      history: "Ais crece marcada por la pérdida de sus padres y por el deseo de derrotar al Dragón Negro de Un Ojo. Entra en la Familia Loki y asciende con una rapidez extraordinaria, dedicando casi toda su vida al entrenamiento. La relación con Bell introduce una experiencia que no puede resolver solo mediante fuerza: descubre que proteger, enseñar y confiar también requieren apertura emocional.",
      personality: "Callada, directa y poco hábil para verbalizar emociones. No es indiferente; le cuesta comprender experiencias cotidianas porque ha organizado su vida alrededor del combate y la venganza. La bondad de Bell despierta en ella una curiosidad y una calidez que rara vez muestra abiertamente. Su desarrollo implica reconocer que su identidad puede ser más amplia que el objetivo que la consume.",
      abilities: "Su espada es extraordinariamente eficaz contra monstruos. Ariel potencia sus capacidades mediante el viento, mientras Avenger incrementa su poder ofensivo a partir del odio hacia los monstruos, con especial efecto contra dragones. Esta combinación es formidable, pero puede intensificar su obsesión y reducir su capacidad de evaluar el riesgo con calma.",
      relationships: "Loki es su diosa; Finn, Riveria y Gareth la entrenan y ayudan a moderar su tendencia autodestructiva. Tiona es una compañera cercana que la invita a participar en actividades fuera del combate. Bell es una excepción emocional: su sinceridad le permite mostrar una faceta menos rígida.",
      conflict: "La venganza le da dirección, pero también amenaza con convertirla en una combatiente definida por el odio. Debe aprender a ganar fuerza sin sacrificar el resto de su identidad.",
      sources: ["https://danmachi.fandom.com/wiki/Ais_Wallenstein", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-FINN-DEIMNE": {
      appearance: "Pallum de baja estatura, cabello rubio y aspecto juvenil que contrasta con su edad y autoridad. Suele vestir de manera ordenada y mantiene una presencia tranquila incluso cuando dirige una operación compleja.",
      history: "Finn aspira a convertirse en una figura de orgullo para los Pallum, una raza que suele ser subestimada por su tamaño. Llega a Orario y contribuye a construir la Familia Loki junto a Riveria y Gareth. Su carrera se basa tanto en victorias personales como en la capacidad de convertir a un grupo diverso de aventureros en una fuerza coordinada.",
      personality: "Inteligente, pragmático y decidido. Evalúa alternativas con rapidez y suele elegir el camino que ofrece mejores probabilidades de éxito, pero no evita el riesgo cuando la misión lo exige. Su serenidad no significa ausencia de emoción: está profundamente comprometido con el futuro de su pueblo y con las responsabilidades del capitán.",
      abilities: "Es un combatiente experimentado y un estratega sobresaliente. Su lectura del campo de batalla, memoria y capacidad para anticipar patrones le permiten coordinar a aventureros de alto nivel. En combate combina técnica, precisión y decisiones tácticas en vez de depender solo de fuerza bruta.",
      relationships: "Riveria y Gareth forman con él el núcleo histórico de los ejecutivos de Loki. Respeta a Ais como combatiente y se ocupa de su formación; también sirve como referencia para aventureros más jóvenes. Su diosa Loki confía en su juicio para dirigir a la Familia.",
      conflict: "El peso de representar a su raza puede hacer que trate su propia vida como una herramienta para un objetivo colectivo. Su papel exige equilibrar ambición, cuidado de sus compañeros y decisiones que no siempre dejan una opción limpia.",
      sources: ["https://danmachi.fandom.com/wiki/Finn_Deimne", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-RIVERIA-LJOS-ALF": {
      appearance: "Alta elfa de cabello verde, porte elegante y presencia autoritaria. Su vestimenta y su forma de hablar transmiten la disciplina de una maga que ha pasado años perfeccionando su técnica.",
      history: "Riveria deja atrás las expectativas de la realeza élfica para recorrer el mundo y construir su propio criterio. Termina en Orario y se convierte en uno de los pilares de la Familia Loki junto a Finn y Gareth. Además de su poder, asume la responsabilidad de enseñar y mantener con vida a una generación de aventureros que la considera una figura materna.",
      personality: "Serena, exigente y protectora. Puede ser severa durante el entrenamiento, pero su dureza busca que sus compañeros sobrevivan. Tiene orgullo por su cultura y sus capacidades, aunque está dispuesta a romper con las expectativas de su origen cuando considera que debe hacerlo.",
      abilities: "Es una maga de primera clase especializada en magia de gran alcance y versatilidad. Sus encantamientos pueden atacar, defender y apoyar al grupo, pero requieren tiempo, concentración y protección durante el canto. Su lectura táctica le permite escoger la magia adecuada en lugar de usar siempre el ataque más destructivo.",
      relationships: "Finn y Gareth son sus compañeros más antiguos y complementan su magia con mando y fuerza física. Ais recibe de ella entrenamiento técnico y orientación personal. Loki la provoca con frecuencia, pero Riveria mantiene respeto por la diosa y por el deber que comparten.",
      conflict: "Su tendencia a cuidar de todos puede convertirse en control excesivo. Debe aceptar que sus compañeros necesitan tomar decisiones propias, incluso cuando existe la posibilidad de que fallen.",
      sources: ["https://danmachi.fandom.com/wiki/Riveria_Ljos_Alf", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-GARETH-LANDROCK": {
      appearance: "Enano de complexión ancha, barba y aspecto robusto. Su presencia física y su manera franca de hablar lo hacen parecer más simple de lo que realmente es.",
      history: "Gareth recorre el mundo antes de consolidarse como uno de los pilares de la Familia Loki. Su experiencia le permite actuar como primera línea, instructor y apoyo estable en expediciones largas. Junto a Finn y Riveria ayuda a convertir una Familia poderosa en un equipo capaz de operar en los pisos más peligrosos del Dungeon.",
      personality: "Práctico, franco y paciente. Valora el trabajo bien hecho, la resistencia y la capacidad de mantener la calma bajo presión. A menudo cumple el papel de adulto sensato que recuerda que descansar, preparar el equipo y proteger a los compañeros son tan importantes como ganar una pelea.",
      abilities: "Su principal ventaja es la combinación de fuerza, resistencia y experiencia defensiva. Puede contener enemigos que obligarían a otros aventureros a retroceder y crear el espacio necesario para que los atacantes y magos trabajen. Su conocimiento del Dungeon procede de años de expediciones y no solo de su nivel.",
      relationships: "Finn aporta dirección estratégica y Riveria poder mágico; Gareth completa ese núcleo con presencia física y experiencia. Ais aprende de él la importancia del descanso y de no tratar el propio cuerpo como un recurso infinito.",
      conflict: "Su confianza en la resistencia puede llevarlo a asumir demasiado daño por los demás. La disciplina que enseña consiste en sobrevivir a largo plazo, no en demostrar que puede soportarlo todo.",
      sources: ["https://danmachi.fandom.com/wiki/Gareth_Landrock", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-TIONA-HIRYUTE": {
      appearance: "Amazoness de cabello oscuro y complexión atlética, conocida por su energía y su sonrisa abierta. Prefiere armas pesadas y un estilo de lucha directo, acorde con su entusiasmo por los desafíos.",
      history: "Tiona y su hermana Tione crecen en una cultura que valora la fuerza y el combate. Tras llegar a Orario, Tiona se une a la Familia Loki y encuentra una comunidad donde puede luchar junto a compañeros de gran nivel sin abandonar su personalidad juguetona. Sus recuerdos de historias de héroes influyen en su visión idealista de las aventuras.",
      personality: "Alegre, espontánea y empática. Disfruta del combate, pero no confunde la dureza con crueldad y suele animar a quienes están pasando por momentos difíciles. Su forma franca de expresar cariño contrasta con el temperamento más intenso de su hermana.",
      abilities: "Combina fuerza física con técnicas de combate agresivas y experiencia contra monstruos. Su capacidad para adaptarse a enfrentamientos caóticos la hace una aliada valiosa, especialmente cuando puede coordinar ataques con otros ejecutivos de Loki. No depende de la magia para ser peligrosa.",
      relationships: "Tione es su hermana y una de sus relaciones más importantes. Ais es una amiga a quien Tiona intenta ayudar a disfrutar de la vida más allá del entrenamiento. La Familia Loki funciona como su hogar y como el grupo con el que comparte sus mayores desafíos.",
      conflict: "Su entusiasmo puede hacer que minimice el peligro o se lance al combate antes de valorar todas las consecuencias. Su optimismo es una fortaleza, pero necesita coordinarse con compañeros más calculadores.",
      sources: ["https://danmachi.fandom.com/wiki/Tiona_Hiryute", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-TIONE-HIRYUTE": {
      appearance: "Amazoness de cabello oscuro y físico entrenado, con una presencia intensa que contrasta con la actitud más despreocupada de Tiona. Su postura y su forma de mirar suelen transmitir determinación.",
      history: "Crece junto a Tiona y comparte con ella una formación marcada por la lucha. En Orario se integra en la Familia Loki y se convierte en una ejecutiva de primera línea. Sus experiencias tempranas influyen en su carácter competitivo y en su manera de expresar el afecto: suele hacerlo mediante protección y compromiso antes que con serenidad.",
      personality: "Feroz, impulsiva y emocionalmente intensa. Puede parecer hostil cuando algo la frustra, pero es capaz de una lealtad profunda. Su comportamiento hacia Finn revela que su confianza y admiración pueden mezclarse con una expresión romántica poco discreta.",
      abilities: "Es una combatiente de primera línea que utiliza fuerza y agresividad para presionar a sus rivales. Su experiencia le permite continuar luchando en situaciones extremas y explotar oportunidades creadas por sus compañeros. La intensidad de sus ataques funciona mejor cuando se combina con la estrategia del grupo.",
      relationships: "Tiona es su hermana y su principal contraste emocional. Finn es el objeto de su admiración romántica, lo que a veces interfiere con su compostura. Sus compañeros de Loki aprenden a distinguir su brusquedad de la lealtad que demuestra en batalla.",
      conflict: "Su temperamento puede nublar el juicio y hacer que reaccione antes de escuchar. Aprender a separar emoción, estrategia y comunicación es esencial para que su fuerza no se convierta en una desventaja.",
      sources: ["https://danmachi.fandom.com/wiki/Tione_Hiryute", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-BETE-LOGA": {
      appearance: "Hombre lobo de cabello gris, orejas lupinas y complexión atlética. Su estilo de combate y su expresión severa refuerzan la impresión de alguien que siempre está midiendo la fuerza de quienes lo rodean.",
      history: "Bete llega a Orario con una historia marcada por la pérdida y por el desprecio hacia la debilidad que cree reconocer en sí mismo. Se integra en la Familia Loki y se convierte en un combatiente de primera línea. Su actitud áspera esconde una relación compleja con la culpa y con la idea de que solo los fuertes merecen sobrevivir.",
      personality: "Provocador, orgulloso y mordaz. Tiende a humillar a quienes considera incapaces, pero sus actos muestran que no es indiferente al sufrimiento ajeno. Cuando reconoce el valor de alguien, puede protegerlo con una intensidad que contradice sus palabras. Su dureza funciona como defensa contra el dolor y la pérdida.",
      abilities: "Es rápido y agresivo en combate, y su naturaleza de hombre lobo potencia su capacidad física bajo ciertas condiciones. Utiliza presión ofensiva y movilidad para quebrar la defensa del rival. Su experiencia como aventurero de alto nivel le permite reconocer amenazas, aunque su estilo depende de mantener el control emocional.",
      relationships: "La Familia Loki es su estructura de apoyo aunque él rara vez lo admita. Respeta a los ejecutivos que pueden seguirle el ritmo y su relación con quienes muestran valor genuino evoluciona más allá de sus insultos iniciales.",
      conflict: "Su desprecio por la debilidad es una proyección de sus propias pérdidas. Mientras no admita esa vulnerabilidad, corre el riesgo de alejar a quienes podrían ayudarlo.",
      sources: ["https://danmachi.fandom.com/wiki/Bete_Loga", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-FREYA": {
      appearance: "Diosa de cabello largo plateado y ojos claros, cuya presencia destaca incluso entre otras deidades. Suele vestir en tonos oscuros y rojos, con adornos que refuerzan su imagen de belleza y poder.",
      history: "Freya desciende al mundo inferior y reúne una Familia formada por aventureros excepcionales. Su capacidad para percibir el color de las almas guía su interés por individuos que considera únicos. La aparición de Bell despierta una fascinación particular: en vez de reclamarlo de inmediato, observa su crecimiento y pone a prueba qué clase de héroe puede llegar a ser.",
      personality: "Carismática, caprichosa y acostumbrada a conseguir lo que desea. Su interés por el talento puede transformarse en una obsesión, y su poder social le permite influir en personas y acontecimientos a gran escala. A la vez, es capaz de apreciar cualidades que no se reducen a la fuerza y de reconocer una voluntad que no puede controlar fácilmente.",
      abilities: "Su mirada distingue las almas y le permite percibir aspectos del estado emocional de una persona. Como diosa de la belleza, su encanto puede influir profundamente en mortales y deidades. En lugar de combatir físicamente, utiliza observación, persuasión y la fuerza de su Familia como instrumentos de influencia.",
      relationships: "Ottar es su protector más leal y uno de los pilares de su Familia. Hedin, Hogni y los demás ejecutivos responden a su autoridad desde distintas formas de devoción. Bell ocupa un lugar excepcional en su atención, lo que crea tensión entre su deseo de observarlo y su tendencia a poseer aquello que considera valioso.",
      conflict: "Su convicción de que puede decidir qué es mejor para otros convierte la admiración en control. El conflicto central es si puede reconocer la autonomía de alguien que no encaja en sus deseos.",
      sources: ["https://danmachi.fandom.com/wiki/Freya", "https://danmachi.com/danmachi5/character/"]
    },
    "CHAR-OTTAR": {
      appearance: "Boaz de gran estatura y musculatura poderosa, con cabello y ojos rojizos y rasgos porcinos. Su aspecto imponente se combina con una expresión habitualmente neutra y una forma de moverse contenida.",
      history: "Freya lo encuentra abandonado cuando es niño y le da un nombre y un lugar al que pertenecer. Desde entonces construye su vida alrededor de convertirse en alguien digno de servirla. Su ascenso se forja en entrenamientos brutales y derrotas frente a aventureros de generaciones anteriores; llega a ser el capitán y principal escudo de la Familia Freya.",
      personality: "Reservado, austero y poco hábil para la conversación cotidiana. Su lealtad a Freya es absoluta, pero no ciega: puede discutir una orden cuando cree que sus consecuencias la perjudicarán. No busca fama ni reconocimiento y expresa su identidad mediante disciplina, entrenamiento y cumplimiento del deber.",
      abilities: "Es un combatiente de nivel excepcional cuya fortaleza no reside solo en la fuerza bruta. Su defensa combina lectura de movimientos, precisión, resistencia y años de experiencia. Puede soportar ataques coordinados de varios aventureros de alto nivel y responder con una economía de movimientos que hace difícil encontrar una abertura.",
      relationships: "Freya le dio un nombre y un sentido de pertenencia; su lealtad hacia ella estructura sus decisiones. Mia Grand desempeñó un papel importante en su cuidado temprano. Hedin y los demás ejecutivos forman un entorno de rivales y compañeros que reconocen su autoridad por sus resultados.",
      conflict: "Su devoción puede desplazar sus deseos personales hasta volverlos difíciles de reconocer. Debe equilibrar el deber hacia Freya con la responsabilidad de juzgar por sí mismo qué acciones la protegen realmente.",
      sources: ["https://danmachi.fandom.com/wiki/Ottar", "https://danmachi.com/danmachi5/character/"]
    },
    "DM-CHAR-EINA": {
      appearance: "Semielfa de cabello castaño rojizo y vestimenta formal de la Asociación de Aventureros. Su imagen suele asociarse con documentos, registros y el trabajo cotidiano del Gremio.",
      history: "Eina trabaja como asesora de aventureros en el Gremio de Orario. Se convierte en la instructora inicial de Bell, a quien orienta sobre normas, preparación y riesgos del Dungeon. Su función le permite ver el contraste entre la teoría de la supervivencia y el modo impulsivo en que Bell se enfrenta a peligros reales.",
      personality: "Responsable, paciente y franca. Se preocupa por los aventureros a quienes asesora y puede mostrarse estricta cuando detecta una imprudencia. Su criterio combina conocimientos administrativos con experiencia práctica, y su preocupación por Bell no le impide señalar sus errores.",
      abilities: "No basa su valor en la fuerza de combate, sino en el conocimiento del Dungeon, la normativa del Gremio, los recursos disponibles y la preparación de expediciones. Su capacidad para explicar riesgos y detectar lagunas de conocimiento puede evitar errores que una espada no resolvería.",
      relationships: "Bell es su asesorado más visible y uno de los casos que más preocupación le provoca. Su vínculo con otros empleados del Gremio le da acceso a información útil, pero su responsabilidad principal es orientar sin sustituir las decisiones del aventurero.",
      conflict: "Debe aceptar que asesorar no significa controlar: puede advertir de los riesgos, pero no eliminar el peligro ni decidir por quienes bajan al Dungeon.",
      sources: ["https://danmachi.fandom.com/wiki/Eina_Tulle", "https://danmachi.com/danmachi5/character/"]
    }
    ,
    "CHAR-SYR-FLOVA": {
      appearance: "Camarera de la taberna Hostess of Fertility, de cabello claro y presencia amable. Su uniforme y su trato cercano la convierten en uno de los rostros más reconocibles del local.",
      history: "Syr trabaja atendiendo a aventureros en la Hostess of Fertility y conoce a Bell en un entorno cotidiano, lejos de la presión del Dungeon. Le ofrece comida y apoyo cuando él atraviesa dificultades, y sus encuentros se vuelven importantes porque permiten ver a Bell fuera de su papel de héroe. Su identidad y su relación con Freya forman parte de una trama que exige separar la apariencia pública de lo que sabe cada personaje.",
      personality: "Cálida, servicial y aparentemente sencilla, suele prestar atención a las necesidades de quienes la rodean. También sabe insistir, ocultar información y guiar una conversación hacia el resultado que desea. Esa mezcla de ternura y reserva hace que los demás no siempre puedan distinguir qué parte de su conducta es espontánea y cuál está cuidadosamente elegida.",
      abilities: "Su papel no es el de una aventurera de primera línea: su ventaja está en la observación social, la hospitalidad y la capacidad de acercarse a personas que se mantienen a distancia de otras facciones. Su historia también está vinculada a capacidades divinas y a una identidad que debe tratarse según la continuidad y el punto de la trama.",
      relationships: "Bell es su cliente y amigo, y ella procura ofrecerle momentos de descanso y normalidad. La relación con la Hostess of Fertility le da una red de compañeras que actúan como familia elegida. Su conexión con Freya y Horn altera la lectura de sus decisiones y obliga a reconsiderar episodios anteriores.",
      conflict: "La diferencia entre lo que muestra y lo que sabe crea un problema de confianza. Su deseo de acercarse a Bell compite con los compromisos y las identidades que mantiene en secreto.",
      sources: ["https://danmachi.fandom.com/wiki/Syr_Flova", "https://danmachi.com/danmachi5/character/"]
    },
    "CHAR-MIA-GRAND": {
      appearance: "Mujer madura de complexión fuerte y presencia intimidante, con el aspecto de alguien que ha pasado años trabajando y sobreviviendo en ambientes hostiles. Su ropa práctica y su postura autoritaria encajan con su papel de encargada de la taberna.",
      history: "Mia dirige la Hostess of Fertility y es una figura respetada por las camareras y los aventureros que frecuentan el local. Antes de esa vida cotidiana acumuló una trayectoria extraordinaria como aventurera, y su pasado le permite reconocer la diferencia entre fanfarronería y capacidad real. También intervino en la crianza y preparación de Ottar por encargo de Freya.",
      personality: "Áspera, directa y poco impresionable. Puede regañar o golpear a quienes alteran la taberna, pero protege a su equipo y se preocupa por su seguridad. Su dureza procede de la experiencia y no de la indiferencia: exige que los demás asuman las consecuencias de sus actos y no tolera que pongan en riesgo a quienes trabajan para ella.",
      abilities: "Su fuerza física y su experiencia como aventurera superan ampliamente lo que su ocupación actual deja ver. Conoce las exigencias del combate, puede evaluar a un luchador y sabe cómo preparar a alguien para sobrevivir. En la taberna, su autoridad y capacidad para mantener el orden también son herramientas prácticas de protección.",
      relationships: "Las camareras de la Hostess of Fertility forman su círculo más cercano. Syr recibe su protección y su confianza; Ottar conserva una relación de respeto con ella por el papel que desempeñó en su juventud. Con Bell alterna entre la crítica directa y la ayuda cuando considera que la situación lo merece.",
      conflict: "Está acostumbrada a resolver problemas mediante autoridad y fuerza, lo que puede hacerla intimidante. Su desafío es proteger a su gente sin impedir que tome decisiones por sí misma.",
      sources: ["https://danmachi.fandom.com/wiki/Mia_Grand", "https://danmachi.com/danmachi5/character/"]
    },
    "CHAR-HEDIN-SELLAND": {
      appearance: "Elfo de cabello claro y porte elegante, cuya expresión controlada y vestimenta refinada transmiten disciplina. Su imagen contrasta con la dureza de los métodos que emplea para entrenar y evaluar a los demás.",
      history: "Hedin es uno de los ejecutivos de la Familia Freya y un combatiente de gran nivel. Su lealtad a la diosa no elimina su capacidad de cálculo: estudia a quienes considera importantes y puede diseñar planes complejos para poner a prueba su carácter. Su papel dentro de la Familia combina autoridad, inteligencia táctica y una exigencia extrema hacia los demás.",
      personality: "Frío, metódico y exigente, suele ocultar sus emociones detrás de una conducta formal. No confunde obediencia con eficacia: puede cuestionar a sus compañeros y usar métodos duros cuando cree que un objetivo lo justifica. Bajo esa severidad existe una forma particular de devoción, expresada mediante trabajo y preparación.",
      abilities: "Combina magia élfica con capacidad de mando y planificación. Su mayor ventaja no es solo la potencia de sus hechizos, sino elegir el momento y el objetivo correctos. Puede coordinar a otros ejecutivos y transformar una diferencia de fuerza en una ventaja mediante presión, engaño o preparación previa.",
      relationships: "Freya es el centro de su lealtad. Ottar representa la autoridad marcial de la Familia y Hedin suele relacionarse con él desde el respeto y la competencia. Con Bell, sus decisiones muestran que puede considerar a una persona como un proyecto que debe ser empujado hasta revelar su potencial.",
      conflict: "Su pragmatismo puede tratar a otras personas como piezas de un plan. Debe decidir dónde termina la estrategia y empieza el daño que no puede justificarse por un resultado.",
      sources: ["https://danmachi.fandom.com/wiki/Hedin_Selland", "https://danmachi.com/danmachi5/character/"]
    },
    "CHAR-HOGNI-RAGNAR": {
      appearance: "Elfo de aspecto sombrío, cabello oscuro y presencia severa. Su equipo y sus movimientos reflejan un estilo de lucha menos elegante de lo que cabría esperar de un elfo, centrado en terminar el combate con eficacia.",
      history: "Hogni es un ejecutivo de la Familia Freya cuya historia está marcada por la distancia entre su apariencia y la forma en que entiende el mundo. Ha acumulado experiencia en enfrentamientos de alto riesgo y su reputación hace que otros lo consideren difícil de tratar. Su pertenencia a la Familia le da un objetivo estable, aunque no resuelve todas sus contradicciones personales.",
      personality: "Reservado, intenso y poco dado a la conversación superficial. Su conducta puede parecer extraña o amenazante, pero responde a una visión del mundo moldeada por la experiencia y por una identidad que no encaja con las expectativas de los demás. Cuando actúa, lo hace con una determinación que rara vez deja espacio para la duda.",
      abilities: "Es un combatiente de primera línea con dominio de armas y experiencia contra rivales poderosos. Su estilo combina agresividad y conocimiento de las debilidades del adversario. La fuerza individual se vuelve más peligrosa cuando opera con los ejecutivos de Freya, capaces de coordinar ataques y presionar al rival desde varios ángulos.",
      relationships: "Freya es la diosa a la que sirve. Ottar y Hedin son compañeros de alto rango con quienes comparte una jerarquía basada en la fuerza y los resultados. La dinámica entre ellos no es idéntica: cada uno expresa su lealtad y su carácter mediante métodos diferentes.",
      conflict: "Su aislamiento dificulta que otros entiendan sus motivaciones. La tensión entre su naturaleza individual y su función dentro de una Familia poderosa condiciona cómo se relaciona con aliados y enemigos.",
      sources: ["https://danmachi.fandom.com/wiki/Hogni_Ragnar", "https://danmachi.com/danmachi5/character/"]
    },
    "CHAR-ANYA-FROMEL": {
      appearance: "Chica gato de cabello claro y orejas felinas, con una expresión vivaz y una forma de moverse inquieta. Su uniforme de camarera y su energía la hacen destacar en la Hostess of Fertility.",
      history: "Anya trabaja en la Hostess of Fertility y forma parte del grupo de camareras que convierten la taberna en un refugio para aventureros. Su historia está conectada con Allen Fromel y con la Familia Freya, aunque su vida diaria transcurre entre clientes, compañeras y las tensiones que aparecen cuando el pasado de alguien vuelve a interferir en el presente.",
      personality: "Expresiva, impulsiva y afectuosa con quienes considera cercanos. Puede reaccionar con exageración o irritarse rápidamente, pero sus emociones son transparentes y su lealtad suele ser genuina. El contraste entre su carácter cotidiano y la seriedad de su familia revela que la independencia también puede ser una forma de tomar distancia de un entorno exigente.",
      abilities: "No se define por el combate en su trabajo actual, sino por su capacidad para relacionarse con clientes, detectar estados de ánimo y apoyar a sus compañeras. Su origen y sus vínculos con aventureros de alto nivel le dan acceso a un mundo más peligroso del que su ocupación cotidiana sugiere.",
      relationships: "La Hostess of Fertility es su hogar y Mia ejerce una autoridad protectora. Chloe y Lunoire son compañeras con las que comparte turnos y situaciones cómicas. Allen es su hermano, y la relación entre ambos combina afecto, frustración y diferencias en la manera de afrontar la Familia Freya.",
      conflict: "Su impulsividad puede convertir una conversación menor en un conflicto. También debe equilibrar la autonomía que busca con los lazos familiares que no puede borrar.",
      sources: ["https://danmachi.fandom.com/wiki/Anya_Fromel", "https://danmachi.com/danmachi5/character/"]
    },
    "CHAR-CHLOE-ROLO": {
      appearance: "Camarera de rasgos felinos y aspecto ágil, reconocible por su actitud relajada y su sonrisa traviesa. Su presencia en la taberna suele aportar humor, aunque no debe confundirse esa ligereza con falta de experiencia.",
      history: "Chloe trabaja en la Hostess of Fertility y conoce bien las costumbres de los aventureros que frecuentan el local. Antes de establecerse en esa vida tuvo experiencias que la obligaron a aprender a sobrevivir y a evaluar rápidamente las intenciones de otros. La taberna funciona para ella como lugar de trabajo y como comunidad estable.",
      personality: "Bromista, provocadora y sociable. Disfruta incomodando a los clientes y jugando con las reacciones de sus compañeras, pero sabe reconocer cuándo una situación deja de ser divertida. Su humor le permite manejar conversaciones tensas y conservar una distancia emocional cuando no quiere revelar demasiado.",
      abilities: "Su fortaleza práctica reside en la observación, la rapidez y la experiencia de calle. Sabe leer a los clientes y moverse en situaciones sociales difíciles, y su pasado la hace menos ingenua de lo que parece. Dentro de la taberna, ese conocimiento complementa la autoridad de Mia y la experiencia de las otras camareras.",
      relationships: "Anya es una compañera con quien comparte bromas y discusiones. Mia mantiene el orden del local y pone límites a sus excesos. La red de camareras es una familia de hecho: sus diferencias no impiden que se apoyen cuando un cliente o un aventurero pone a alguien en peligro.",
      conflict: "Su tendencia a bromear puede ocultar preocupaciones reales y hacer que otros la subestimen. Necesita reconocer cuándo la ironía deja de protegerla y empieza a dificultar la confianza.",
      sources: ["https://danmachi.fandom.com/wiki/Chloe_Rollo", "https://danmachi.com/danmachi5/character/"]
    },
    "CHAR-LEFIYA-VIRIDIS": {
      appearance: "Elfa joven de cabello rubio y expresión vivaz, vestida como maga aventurera con equipo adaptado a sus expediciones. Su lenguaje corporal suele mostrar nerviosismo cuando está junto a Ais, pero determinación cuando debe lanzar un hechizo.",
      history: "Lefiya se une a la Familia Loki como maga y se esfuerza por estar a la altura de aventureros que admira. Su relación con Ais influye en su motivación, y sus expediciones le exigen pasar de la idealización de los héroes a la cooperación real en situaciones peligrosas. Su progreso depende tanto de mejorar su magia como de aprender a confiar en su criterio.",
      personality: "Apasionada, insegura y muy exigente consigo misma. Puede sentir celos o frustración cuando cree que no avanza al ritmo de Ais, pero su esfuerzo es constante y su sentido de responsabilidad crece con la experiencia. Su admiración no es solo idolatría: también la empuja a estudiar, entrenar y actuar cuando sus compañeros necesitan apoyo.",
      abilities: "Es una maga especializada en hechizos élficos y destaca por la amplitud de su conocimiento mágico. El canto requiere tiempo y protección, por lo que su eficacia depende de la posición y la coordinación del grupo. Su potencial se expresa mejor cuando puede elegir el hechizo correcto y sus aliados crean el espacio para lanzarlo.",
      relationships: "Ais es su referente y una fuente de admiración. Riveria actúa como mentora en el desarrollo mágico y Finn contribuye a su formación táctica. Los miembros de Loki le ofrecen un entorno exigente donde sus errores tienen consecuencias, pero también puede aprender de aventureros más experimentados.",
      conflict: "La comparación constante con Ais amenaza con hacerle medir su valor solo por la distancia que la separa de su ideal. Debe construir una identidad propia como maga y compañera.",
      sources: ["https://danmachi.fandom.com/wiki/Lefiya_Viridis", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-ASTREA": {
      appearance: "Diosa de presencia serena y rasgos elegantes, asociada visualmente con la justicia, la balanza moral y una actitud de escucha. Su imagen contrasta con la violencia que sus seguidores afrontan en la Era Oscura de Orario.",
      history: "Astrea desciende a Orario y reúne una Familia de aventureras que buscan proteger a quienes no pueden defenderse. Durante la Era Oscura, sus ideales son puestos a prueba por la violencia de Evilus y por decisiones donde no existe una solución completamente justa. Su papel no consiste en evitar que sus seguidoras sufran, sino en ofrecerles una brújula moral para decidir qué hacer con ese sufrimiento.",
      personality: "Compasiva, reflexiva y comprometida con la justicia. No representa una justicia simplista que ignora las consecuencias: escucha, orienta y acepta que sus seguidoras deben actuar en circunstancias terribles. Su presencia influye especialmente en Ryuu, cuya evolución muestra tanto la fuerza como los límites de los ideales que Astrea transmite.",
      abilities: "Como diosa, concede falna y actualiza los estados de sus seguidores; no participa en el combate del Dungeon como aventurera. Su influencia más importante es moral y social: forma una Familia que intenta proteger a otros y que debe decidir cómo responder a la violencia sin perder su propósito.",
      relationships: "Ryuu la considera su diosa y una referencia ética. Alise, Kaguya, Lyra y las demás integrantes de Astrea Familia interpretan sus principios de maneras distintas, y sus debates muestran que compartir un ideal no significa estar de acuerdo en cada decisión.",
      conflict: "La justicia que defiende puede chocar con un mundo donde la venganza parece la única respuesta disponible. Su reto es sostener el ideal sin negar el daño real ni imponer una respuesta sencilla a quienes lo sufrieron.",
      sources: ["https://danmachi.fandom.com/es/wiki/Astrea", "https://danmachi.com/danmachi4/character/"]
    },
    "CHAR-ALISE-LOVELACE": {
      appearance: "Aventurera de cabello rojizo y expresión vivaz, con una presencia carismática que destaca entre sus compañeras. Su manera de moverse y hablar refleja una capitana acostumbrada a animar al grupo y tomar la iniciativa.",
      history: "Alise es la capitana de la Astraea Familia durante la Era Oscura de Orario. Reúne a sus compañeras alrededor de un ideal de justicia y las guía en operaciones contra las fuerzas de Evilus. Su liderazgo no elimina los desacuerdos internos, pero logra mantener a un grupo de personalidades diferentes unido frente a amenazas que superan a una sola aventurera.",
      personality: "Optimista, valiente y extrovertida, utiliza el humor y el entusiasmo para sostener la moral del grupo. Su idealismo no implica pasividad: está dispuesta a ponerse en peligro y asumir la responsabilidad de las decisiones difíciles. Para Ryuu, representa la posibilidad de luchar por justicia sin renunciar a la compasión.",
      abilities: "Como capitana, combina capacidad de combate con liderazgo y lectura táctica. Su valor reside tanto en las acciones directas como en coordinar a sus compañeras, mantener la iniciativa y decidir cuándo un riesgo es necesario. La eficacia de su Familia depende de esa cohesión y de la confianza que inspira.",
      relationships: "Ryuu la admira y adopta parte de su visión de justicia. Astrea es su diosa y referencia moral; Kaguya y Lyra cuestionan o complementan sus decisiones desde perspectivas más pragmáticas. La relación entre ellas convierte a la Familia en un debate vivo sobre qué significa proteger a otros.",
      conflict: "Su confianza en que puede salvar a todos puede llevarla a asumir riesgos extremos. El choque entre el ideal de justicia y la violencia de la Era Oscura obliga a sus compañeras a decidir qué hacer con el legado que deja.",
      sources: ["https://danmachi.fandom.com/es/wiki/Alise_Lovell", "https://danmachi.com/danmachi4/character/"]
    },
    "CHAR-KAGUYA": {
      appearance: "Aventurera de cabello oscuro y porte disciplinado, con técnicas y armas inspiradas en el Lejano Oriente. Su postura serena y la precisión de sus movimientos reflejan un entrenamiento centrado en la técnica y el autocontrol.",
      history: "Kaguya forma parte de la Astraea Familia durante la Era Oscura y aporta una visión más pragmática de la justicia que la de Alise. Su experiencia en el combate y su formación marcial influyen en Ryuu, con quien comparte técnicas y rivalidad amistosa. Sus decisiones muestran cómo una persona puede defender a los demás sin creer que todas las situaciones admiten una salida limpia.",
      personality: "Reservada, estricta y realista. No renuncia a proteger a los inocentes, pero desconfía de los ideales que ignoran los costes de una misión. Su franqueza puede parecer dura, aunque nace de la convicción de que una decisión responsable debe considerar lo que realmente puede lograrse.",
      abilities: "Es una espadachina técnica que domina métodos del Lejano Oriente y prioriza precisión, ritmo y control de distancia. Su enseñanza a Ryuu se centra en movimientos y tácticas que complementan la velocidad élfica. Su enfoque demuestra que el conocimiento marcial puede compensar desventajas físicas y crear oportunidades contra enemigos peligrosos.",
      relationships: "Alise es su capitana y compañera; Astrea ofrece el marco moral común, aunque Kaguya no comparte siempre la lectura idealista de la justicia. Ryuu es su rival y alumna informal: ambas intercambian técnicas y discuten, y esa relación deja una huella duradera en el estilo de combate de Ryuu.",
      conflict: "Su realismo puede derivar en dureza y distancia emocional. Debe decidir cuándo la prudencia protege al grupo y cuándo corre el riesgo de justificar una respuesta que contradice sus propios principios.",
      sources: ["https://danmachi.fandom.com/es/wiki/Gojouno_Kaguya", "https://danmachi.com/danmachi4/character/"]
    },
    "CHAR-LYRA": {
      appearance: "Pallum de aspecto pequeño y movimientos ágiles, con una expresión vivaz que puede ocultar intenciones. Su diseño y su conducta encajan con alguien que sobrevive gracias a observar, improvisar y evitar enfrentamientos innecesarios.",
      history: "Lyra pertenece a la Astraea Familia durante la Era Oscura y destaca por su inteligencia callejera. Enseña a Ryuu que sobrevivir no siempre depende de enfrentarse al enemigo de forma directa: el engaño, la información y la preparación pueden ser herramientas legítimas frente a adversarios crueles. Su experiencia influye en el lado más estratégico de Ryuu.",
      personality: "Ingeniosa, desconfiada y mordaz. Prefiere tener varias salidas preparadas antes de comprometerse con una acción, y suele usar el humor para mantener distancia. No carece de lealtad; simplemente considera que la supervivencia del grupo exige reconocer las reglas reales del entorno.",
      abilities: "Su principal capacidad es la estrategia informal: recopilar información, anticipar movimientos, tender trampas y aprovechar errores ajenos. Su tamaño y movilidad también le permiten actuar en espacios donde otros tendrían dificultades. Su aportación a la Familia es menos espectacular que la de una gran combatiente, pero puede decidir el resultado de una misión.",
      relationships: "Ryuu aprende de ella a utilizar recursos y tácticas menos directas. Alise es la capitana cuya visión de justicia contrasta con su pragmatismo; Kaguya comparte parte de su realismo. La interacción entre las tres muestra diferentes maneras de proteger al mismo grupo.",
      conflict: "Su desconfianza la ayuda a sobrevivir, pero también puede hacer difícil construir vínculos estables. El desafío es usar la astucia sin convertir toda relación en una negociación.",
      sources: ["https://danmachi.fandom.com/wiki/Lyra", "https://danmachi.com/danmachi4/character/"]
    },
    "CHAR-DAPHNE-LAUROS": {
      appearance: "Aventurera humana de cabello oscuro y porte práctico. Su equipo está preparado para expediciones, y su actitud suele transmitir la paciencia de alguien que ha aprendido a desconfiar de promesas grandilocuentes.",
      history: "Daphne llega a Orario con una visión poco romántica de las aventuras y acaba formando parte de la Familia Miach. Su relación con Cassandra, sus expediciones y los episodios en el Dungeon la obligan a revisar el límite entre escepticismo y confianza. Su historia combina supervivencia cotidiana, cooperación y el aprendizaje de aceptar que no todas las personas actúan por interés propio.",
      personality: "Realista, sarcástica y resolutiva. Puede mostrarse dura cuando cree que alguien está siendo ingenuo, pero también es capaz de actuar con valentía para proteger a sus compañeros. Su escepticismo funciona como defensa frente a la decepción, aunque no elimina su capacidad de empatía.",
      abilities: "Es una aventurera competente en expediciones y combate, con experiencia práctica para reaccionar cuando un plan falla. Su fuerza se expresa en decisiones rápidas, trabajo en equipo y adaptación al entorno. No es una figura aislada: su eficacia aumenta cuando puede coordinarse con Cassandra y otros miembros de su grupo.",
      relationships: "Cassandra es su amiga más cercana y una compañera cuyo modo de interpretar el peligro contrasta con su pragmatismo. La Familia Miach le ofrece una estructura en la que la cooperación y la confianza tienen un papel cotidiano. Sus vínculos revelan una lealtad que Daphne no siempre expresa de manera afectuosa.",
      conflict: "Su ironía puede herir a personas que necesitan apoyo y ocultar sus propias dudas. Debe aprender cuándo cuestionar una idea y cuándo acompañar a quien la sostiene.",
      sources: ["https://danmachi.fandom.com/wiki/Daphne_Lauros", "https://danmachi.com/danmachi4/character/"]
    },
    "CHAR-CASSANDRA-ILION": {
      appearance: "Aventurera de cabello claro y expresión amable, con una presencia tranquila que contrasta con la ansiedad que puede provocarle hablar de sus sueños. Su aspecto no refleja por sí solo la importancia que tienen sus visiones para el grupo.",
      history: "Cassandra es conocida por tener sueños proféticos que otros suelen descartar o interpretar mal. Su relación con Daphne y sus experiencias en el Dungeon la enfrentan repetidamente a la dificultad de advertir un peligro sin poder demostrarlo de forma convincente. Con el tiempo, debe encontrar una manera de convertir sus visiones en decisiones útiles para sus compañeros.",
      personality: "Gentil, nerviosa y perseverante. Sufre cuando los demás no creen sus advertencias, pero continúa intentando protegerlos. Su sensibilidad no equivale a debilidad: soporta la frustración de ser ignorada y vuelve a hablar cuando piensa que la vida de alguien está en riesgo.",
      abilities: "Su rasgo más distintivo son los sueños proféticos, cuya interpretación no siempre es clara ni fácil de comunicar. Como aventurera también contribuye al trabajo de equipo y a la supervivencia en el Dungeon. La utilidad de sus visiones depende de que pueda describirlas con precisión y de que sus compañeros estén dispuestos a considerar información incierta.",
      relationships: "Daphne es su amiga y compañera, aunque a menudo reacciona con escepticismo ante sus sueños. La Familia Miach le proporciona apoyo y un grupo con el que compartir el riesgo. Su vínculo con Bell y otros aventureros puede cambiar cuando alguien toma en serio una advertencia que antes se ignoraba.",
      conflict: "La incapacidad de probar sus visiones puede hacer que dude de sí misma. Debe comunicar el peligro sin convertir la necesidad de ser creída en el único criterio para actuar.",
      sources: ["https://danmachi.fandom.com/wiki/Cassandra_Ilion", "https://danmachi.com/danmachi4/character/"]
    },
    "CHAR-AISHA-BELKA": {
      appearance: "Amazoness de cabello oscuro y físico atlético, con una presencia segura y una expresión que transmite experiencia. Su equipo de combate es funcional y está pensado para enfrentamientos de alta intensidad.",
      history: "Aisha llega a Orario tras una vida en la que aprendió a sobrevivir mediante fuerza, experiencia y decisiones pragmáticas. Se convierte en una combatiente importante de la Familia Ishtar y más tarde coopera con Bell y sus aliados en situaciones que exigen dejar de lado rivalidades. Su trayectoria le permite evaluar el crecimiento de Bell con una mirada de veterana, no solo como espectadora.",
      personality: "Directa, segura y provocadora, suele hablar sin rodeos y poner a prueba a quienes la rodean. Su pragmatismo no impide que respete el valor ajeno ni que proteja a personas más vulnerables. Puede mostrarse dominante, pero reconoce rápidamente la competencia y la determinación cuando las ve.",
      abilities: "Es una combatiente experimentada que combina fuerza física con técnica y conocimiento del combate contra monstruos. Su estilo se apoya en tomar la iniciativa y explotar las aperturas del rival. También posee experiencia práctica para valorar cuándo una batalla debe evitarse y cuándo la fuerza es necesaria.",
      relationships: "Haruhime ocupa un lugar importante en su historia y en sus decisiones posteriores. Bell gana su respeto al demostrar que su bondad no es simple ingenuidad. Sus alianzas cambian con las circunstancias, pero su lealtad se manifiesta cuando decide que alguien merece ser protegido.",
      conflict: "Su seguridad puede hacer que subestime a quienes no conoce o que utilice la provocación como primera respuesta. La experiencia le enseña que la fuerza debe acompañarse de juicio y confianza.",
      sources: ["https://danmachi.fandom.com/wiki/Aisha_Belka", "https://danmachi.com/danmachi4/character/"]
    },
    "CHAR-FELS": {
      appearance: "Figura encapuchada que oculta su rostro y su cuerpo bajo ropas oscuras. Su apariencia misteriosa refuerza la separación entre su identidad personal y el papel que desempeña como sabio al servicio de Orario.",
      history: "Fels es un mago no muerto que ha vivido durante siglos y sirve a Ouranos en las tareas relacionadas con el Dungeon y los Xenos. Su historia está ligada a experimentos, investigación y a la búsqueda de una forma de coexistencia entre humanos y monstruos. Su perspectiva temporal le permite observar los ciclos de violencia con una distancia que los aventureros más jóvenes no poseen.",
      personality: "Analítico, reservado y marcado por la experiencia. Puede parecer frío porque evalúa consecuencias a largo plazo, pero su trabajo revela una preocupación persistente por las vidas que otros consideran descartables. No confía en soluciones fáciles: busca pruebas, prepara contingencias y acepta que el progreso puede ser lento.",
      abilities: "Domina magia, alquimia y conocimientos que exceden la experiencia habitual de un aventurero. Su longevidad le permite acumular investigación y diseñar herramientas o estrategias especializadas. No es solo un combatiente: su mayor aportación consiste en comprender fenómenos que el Gremio y las Familias no pueden resolver con fuerza bruta.",
      relationships: "Ouranos es su superior y colaborador central. Bell y sus aliados se convierten en socios necesarios cuando la cuestión de los Xenos exige decisiones difíciles. Su relación con los monstruos inteligentes se basa en la investigación y en la posibilidad de reconocer individuos donde otros solo ven objetivos.",
      conflict: "La investigación que persigue puede poner en peligro a personas concretas y exigir secretos difíciles de justificar. Debe equilibrar la esperanza de una solución duradera con la responsabilidad hacia quienes soportan el coste inmediato.",
      sources: ["https://danmachi.fandom.com/wiki/Fels", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-FILVIS-CHALIA": {
      appearance: "Elfa de aspecto delicado y cabello claro, cuyo porte reservado contrasta con la violencia de los conflictos en los que participa. Su diseño refleja tanto la elegancia élfica como una fragilidad que no debe confundirse con falta de capacidad.",
      history: "Filvis aparece vinculada a los acontecimientos de Sword Oratoria y a los problemas que rodean a Dionysus y a los monstruos del Dungeon. Su vida está marcada por una relación complicada con su propia identidad y por el intento de encontrar un lugar donde no sea definida exclusivamente por lo que otros esperan de ella. Su historia obliga a distinguir entre la apariencia pública y la verdad que una persona puede ocultar.",
      personality: "Reservada, orgullosa y emocionalmente compleja. Desea ser reconocida por sus actos y puede reaccionar con dureza cuando siente que otros la compadecen o la subestiman. Bajo esa defensa existe una necesidad de pertenencia y de confianza que hace que sus decisiones no puedan explicarse solo como ambición.",
      abilities: "Posee capacidad mágica y experiencia en combate, pero su importancia narrativa también reside en el conocimiento que tiene de los conflictos de Sword Oratoria. Su eficacia depende de cómo combina sus capacidades con la información disponible y de cuánto está dispuesta a revelar sobre sí misma.",
      relationships: "Dionysus ejerce una influencia decisiva sobre su trayectoria. Lefiya y los miembros de Loki Familia quedan vinculados a su historia a través de investigaciones y enfrentamientos que cambian su lectura de los hechos. Las relaciones que construye están atravesadas por secretos y por la dificultad de confiar.",
      conflict: "El deseo de ser aceptada puede entrar en conflicto con la identidad que intenta ocultar. Su historia plantea cuánto de una persona puede juzgarse por sus actos cuando otros han intervenido en las condiciones que la formaron.",
      sources: ["https://danmachi.fandom.com/wiki/Filvis_Chalia", "https://danmachi.com/sword_oratoria/character/"]
    },
    "CHAR-ALLEN-FROMEL": {
      "appearance": "El retrato del perfil oficial identifica a Allen Fromel en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Aventurero de primera clase asociado por el perfil a la velocidad excepcional dentro de Orario y a la fuerza de choque de Freya Familia. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Agresivo, intimidante y ferozmente devoto a Freya. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Nivel 6; el perfil lo presenta como el más rápido de la ciudad. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Es el hermano mayor de Anya Fromel; ambos aparecen vinculados a la Freya Familia y a Hostess of Fertility.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "CHAR-GULLIVER-BROTHERS": {
      "appearance": "El retrato del perfil oficial identifica a Gulliver Brothers en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Cuatro hermanos Pallum que alcanzan el nivel 5 y coordinan sus fortalezas como una única unidad de combate. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Su rasgo principal como grupo es la complementariedad: las armas y los colores de ojos y armaduras distinguen a cada hermano.",
      "abilities": "La formación conjunta los vuelve especialmente peligrosos. Cada hermano usa un arma diferente: lanza, martillo, hacha o espada a dos manos.",
      "relationships": "Son hermanos cuatrillizos y miembros de Freya Familia. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "CHAR-HORN": {
      "appearance": "El retrato del perfil oficial identifica a Horn en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Persona misteriosa encargada de asistir de cerca a Freya; la página oficial la describe como aventurera de alto nivel para su posición pero sin un título formal. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Reservada y enigmática en la presentación oficial. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Nivel 2 en la ficha, sin epíteto oficial. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Su labor gira en torno a Freya y su entorno inmediato. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "CHAR-HEITH-VELVET": {
      "appearance": "El retrato del perfil oficial identifica a Heith Velvet en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Encabeza una unidad de curanderos y herbolarios dedicada a atender lesiones dentro de Freya Familia. El título japonés Familia Chronicle episode ヘイズ corresponde al nombre ヘイズ・ベルベット del perfil oficial; Haze/Heizu es variante de romanización y no una identidad aparte. La sinopsis editorial sitúa a Heith en el centro del relato y menciona una recompensa por un troll ensangrentado alrededor de la cual se moviliza Ottar; no es una biografía cronológica completa y los detalles de escenas requieren el texto íntegro.",
      "personality": "Suele parecer agotada por el volumen de lesiones, pero su actitud se vuelve feroz cuando Freya está amenazada.",
      "abilities": "Nivel 4 en el perfil oficial; su especialidad es la atención médica y el tratamiento. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Sirve a Freya y trata de forma habitual a los miembros lesionados durante entrenamientos. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi5/character/",
        "https://ga.sbcr.jp/product/9784815640675/"
      ]
    },
    "CHAR-VAN-FREYA": {
      "appearance": "El retrato del perfil oficial identifica a Van en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Aventurero de sangre mitad Pallum que encuentra un lugar en la Freya Familia y se compromete con ella. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "La lealtad nace de haber encontrado pertenencia y aceptación dentro de la Familia. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Nivel 4 en el perfil de DanMachi V. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Declara lealtad a Freya y a la Familia que lo acogió. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "CHAR-LUNOIRE-FAUST": {
      "appearance": "El retrato del perfil oficial identifica a Lunoire Faust en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Trabajadora de Hostess of Fertility que aparece como una de las personas más sensatas del grupo y suele responder a las ocurrencias de Anya y Chloe. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Práctica y centrada, dentro de una taberna con personajes mucho más expresivos. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Nivel 4; la fuente aclara que “Black Fist” no es un epíteto oficial. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Trabaja junto a Anya y Chloe y comparte con Chloe las consecuencias del encargo fallido contra Ryu. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "DM-CHAR-LOKI": {
      "appearance": "El retrato del perfil oficial identifica a Loki en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Diosa responsable de una de las Familias más influyentes de Orario. La adaptación la muestra informal en la vida cotidiana, pero capaz de reunir a aventureros de gran talento. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Despreocupada y bromista, con debilidad por las personas bonitas y el alcohol; su actitud no debe confundirse con falta de criterio estratégico.",
      "abilities": "Su ficha se centra en la dirección de Familia, no en nivel de aventurera. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Lidera a Finn, Riveria, Gareth, Ais y el resto de Loki Familia. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/"
      ]
    },
    "CHAR-RAUL-NOORD": {
      "appearance": "El retrato del perfil oficial identifica a Raul Nord en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Aventurero que actúa como punto de apoyo para los miembros de menor rango durante situaciones difíciles. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Cauto y nervioso en su forma de actuar, pero capaz de responder a las responsabilidades que Finn deposita en él.",
      "abilities": "Nivel 4 en el perfil de la adaptación de Sword Oratoria. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Confía en el mando de Finn y contribuye a coordinar a integrantes más jóvenes. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/"
      ]
    },
    "CHAR-DIONYSUS": {
      "appearance": "El retrato del perfil oficial identifica a Dionysus en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Dios que investiga incidentes extraños que afectan a miembros de su Familia y busca cooperación con Loki Familia. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Cultivado y cordial en la superficie; sus intenciones deben evaluarse en el marco de la trama y los spoilers de Sword Oratoria.",
      "abilities": "No se le asigna nivel de aventurero. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Tiene un vínculo importante con Filvis Chalia y contacta con Loki Familia durante la investigación. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/"
      ]
    },
    "CHAR-ASFI-AL-ANDROMEDA": {
      "appearance": "El retrato del perfil oficial identifica a Asfi Al Andromeda en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Capitana de Hermes Familia y aventurera capaz, reconocida por fabricar objetos mágicos útiles para la exploración. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Práctica y competente, con atención al equipo y las herramientas que aumentan las opciones del grupo.",
      "abilities": "Creación de objetos mágicos y experiencia de exploración. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Sirve a Hermes y su conocimiento técnico la conecta con otros aventureros de Orario. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/"
      ]
    },
    "CHAR-OURANOS": {
      "appearance": "El retrato del perfil oficial identifica a Ouranos en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Figura divina que dirige el Guild desde una posición reservada y emplea la oración como parte de su labor. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Reservado, paciente y opaco para la mayor parte de Orario. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Su papel es institucional y religioso, no un rango de aventurero. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Está vinculado a la administración del Guild y a Fels. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/"
      ]
    },
    "CHAR-REVIS": {
      "appearance": "El retrato del perfil oficial identifica a Revis en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Mujer misteriosa encontrada en los niveles del Dungeon y asociada a acontecimientos del spin-off Sword Oratoria. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Difícil de leer; su tratamiento narrativo depende de revelaciones del spin-off. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "La página oficial destaca una capacidad de combate excepcional y un vínculo con monstruos. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "La relación con Ais y el nombre Aria pertenecen a una zona de spoilers importantes. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/"
      ]
    },
    "CHAR-KASHIMA-OUKA": {
      "appearance": "El retrato del perfil oficial identifica a Kashima Ouka en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Guerrero del Lejano Oriente que sirve como uno de los combatientes principales de Takemikazuchi Familia. La ficha oficial lo presenta como un luchador responsable y comprometido con su grupo. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Responsable y dedicado, aunque poco perceptivo ante los sentimientos que otras personas tienen por él.",
      "abilities": "Nivel 2; destaca por la disciplina marcial y el combate cuerpo a cuerpo. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Es objeto del afecto de Chigusa Hitachi, algo que él no parece advertir. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-HITACHI-CHIGUSA": {
      "appearance": "El retrato del perfil oficial identifica a Hitachi Chigusa en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Aventurera del Lejano Oriente que apoya a su grupo con arco y funciones de supporter. Su carácter reservado condiciona cómo expresa sus sentimientos. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Tímida y discreta; mantiene vínculos antiguos con Mikoto y Haruhime. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Nivel 1; utiliza arco y funciones de apoyo en expediciones. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Es amiga de la infancia de Mikoto y Haruhime y está enamorada de Ouka. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-LUVIS-LILIX": {
      "appearance": "El retrato del perfil oficial identifica a Luvis Lilix en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Elfo aventurero que había recibido orientación de Eina Tulle. La ficha oficial lo sitúa en una misión de búsqueda en los niveles inferiores y señala su conflicto recurrente con Dormul. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Presumido al hablar frente a Eina y competitivo en sus interacciones con Dormul. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Nivel 3; aventurero que desciende a niveles inferiores junto a su grupo. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Tiene sentimientos por Eina y suele enfrentarse verbalmente con Dormul Bolster. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-DORMUL-BOLSTER": {
      "appearance": "El retrato del perfil oficial identifica a Dormul Bolster en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Enano aventurero de Magni Familia y antiguo asesorado de Eina. Participa en una expedición al Dungeon y usa armas contundentes. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "De trato amable y algo torpe; mantiene una rivalidad con Luvis, aunque ambos pueden colaborar cuando la situación lo exige.",
      "abilities": "Nivel 3; combate con martillos y posee gran resistencia física para su rango. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Rivaliza con Luvis, en parte por sus sentimientos hacia Eina Tulle. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-MARI-XENOS": {
      "appearance": "El retrato del perfil oficial identifica a Mari (Xenos) en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Sirena Xenos que conoce a Bell en los niveles inferiores. Puede moverse con rapidez bajo el agua, pero no puede vivir o desplazarse por la superficie de la misma manera que otros Xenos. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Se apega rápidamente a Bell después de conocerlo. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Adaptada al desplazamiento acuático; la ficha no le asigna nivel de aventurera. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Desarrolla un vínculo afectuoso con Bell tras su primer encuentro. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-ISKA-BRA": {
      "appearance": "El retrato del perfil oficial identifica a Iska Bra en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "La ficha oficial la registra en Astrea Familia e identifica su especie como Amazoness, sin describir una trayectoria individual extensa. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "No establecida por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "No detalladas por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "La pertenencia documentada es a Astrea Familia; otros vínculos personales requieren una fuente adicional.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-MARIYU-LEAGE": {
      "appearance": "El retrato del perfil oficial identifica a Mariyu Leage en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "La página oficial la incluye entre los miembros de Astrea Familia e indica que es humana, pero el perfil no desarrolla otros aspectos biográficos. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "No establecida por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "No detalladas por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "La pertenencia documentada es a Astrea Familia; otros vínculos personales requieren una fuente adicional.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-LULUNE-LOUIE": {
      "appearance": "El retrato del perfil oficial identifica a Lulune Louie en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Aventurera de Hermes Familia con experiencia como ladrona; sus habilidades de mapeo son una de sus contribuciones reconocidas. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Impulsiva, propensa a equivocaciones y a decir cosas inoportunas, lo que suele provocar reprimendas de Asfi.",
      "abilities": "Experiencia como ladrona y habilidad de cartografía; el perfil de Sword Oratoria no le asigna un nivel.",
      "relationships": "Trabaja bajo la dirección de Asfi Al Andromeda. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/"
      ]
    },
    "CHAR-TSUBAKI-COLBRANDE": {
      "appearance": "El retrato del perfil oficial identifica a Tsubaki Collbrande en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "Herrera de alto nivel que dirige Hephaistos Familia y es reconocida por su extraordinaria habilidad en la forja. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "Extrovertida y cercana, suele mostrarse insistente al invitar a otros a celebrar y beber. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Maestra herrera; el perfil consultado no especifica un nivel. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Dirige Hephaistos Familia y mantiene vínculos profesionales con los aventureros que dependen de su trabajo como herrera.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/"
      ]
    },
    "CHAR-NOIN-UNIC": {
      "appearance": "El retrato del perfil oficial identifica a Noin Unic en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "La ficha oficial identifica a Noin como humana y la incluye entre las integrantes de Astrea Familia; no ofrece una biografía individual extensa. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "No establecida por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "No detalladas por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Afiliación a Astrea Familia documentada; otros vínculos personales requieren escenas o fuentes específicas.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-NEZE-RANKETT": {
      "appearance": "El retrato del perfil oficial identifica a Neze Rankett en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "El perfil oficial identifica a Neze como mujer lobo y la incluye entre los miembros de Astrea Familia, sin describir una trayectoria individual extensa. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "No establecida por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "No detalladas por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Afiliación documentada a Astrea Familia; no se inventan relaciones personales. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-ASTA-KNOX": {
      "appearance": "El retrato del perfil oficial identifica a Asta Knox en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "El portal oficial identifica a Asta como enana y la presenta en el roster de Astrea Familia; no desarrolla en ese perfil su psicología o una biografía extensa. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "No establecida por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "No detalladas por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Afiliación documentada a Astrea Familia; otros vínculos requieren evidencia individual. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-RYANA-LIETZ": {
      "appearance": "El retrato del perfil oficial identifica a Ryana Lietz en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "El perfil oficial identifica a Ryana como humana y la incluye en Astrea Familia, pero no establece una biografía individual extensa. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "No establecida por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "No detalladas por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Afiliación documentada a Astrea Familia; otros vínculos requieren evidencia individual. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-CELTY-SROWA": {
      "appearance": "El retrato del perfil oficial identifica a Celty Srowa en la adaptación; no se trata como diseño invariable entre temporadas.",
      "history": "El perfil oficial identifica a Celty como elfa y la incluye en Astrea Familia, sin detallar allí nivel o habilidades. Esta síntesis no es una biografía cronológica completa; las fechas y eventos necesitan escenas narrativas.",
      "personality": "No establecida por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "No detalladas por la ficha oficial consultada. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Afiliación documentada a Astrea Familia; no se deduce una amistad individual por pertenencia al grupo.",
      "conflict": "Un perfil de adaptación no sustituye una biografía por escenas. Acontecimientos, decisiones, evolución y cambios de estado requieren cotejo narrativo.",
      "sources": [
        "https://danmachi.com/danmachi4/character/"
      ]
    },
    "CHAR-ALFRIGG-GULLIVER": {
      "appearance": "La ficha oficial diferencia a Alfrigg Gulliver por ojos azul, armadura azul y lanza. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "history": "El perfil oficial de DanMachi V distingue a Alfrigg Gulliver como hermano mayor, con ojos azul y lanza. El nivel 5 y la coordinación táctica se atribuyen al conjunto de los cuatro hermanos. La fuente describe la unidad y no reconstruye toda la biografía individual.",
      "personality": "La página oficial individualiza arma y rasgos visuales, pero no una psicología completa. No se inventan miedos, gustos o hábitos privados.",
      "abilities": "Se distingue por usar lanza. El nivel 5 y la coordinación se atribuyen al grupo; no se inventan estadísticas individuales.",
      "relationships": "Es uno de los cuatro hermanos Gulliver y pertenece a Freya Familia en el estado descrito por DanMachi V.",
      "conflict": "La trayectoria individual necesita localizadores narrativos; no se infieren gustos, miedos ni estadísticas propias desde el perfil grupal.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "CHAR-DVALINN-GULLIVER": {
      "appearance": "La ficha oficial diferencia a Dvalinn Gulliver por ojos amarillo, armadura amarilla y martillo de guerra.",
      "history": "El perfil oficial de DanMachi V distingue a Dvalinn Gulliver como segundo hermano, con ojos amarillo y martillo de guerra. El nivel 5 y la coordinación táctica se atribuyen al conjunto de los cuatro hermanos. La fuente describe la unidad y no reconstruye toda la biografía individual.",
      "personality": "La página oficial individualiza arma y rasgos visuales, pero no una psicología completa. No se inventan miedos, gustos o hábitos privados.",
      "abilities": "Se distingue por usar martillo de guerra. El nivel 5 y la coordinación se atribuyen al grupo; no se inventan estadísticas individuales.",
      "relationships": "Es uno de los cuatro hermanos Gulliver y pertenece a Freya Familia en el estado descrito por DanMachi V.",
      "conflict": "La trayectoria individual necesita localizadores narrativos; no se infieren gustos, miedos ni estadísticas propias desde el perfil grupal.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "CHAR-BERLING-GULLIVER": {
      "appearance": "La ficha oficial diferencia a Berling Gulliver por ojos verde, armadura verde y hacha. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "history": "El perfil oficial de DanMachi V distingue a Berling Gulliver como tercer hermano, con ojos verde y hacha. El nivel 5 y la coordinación táctica se atribuyen al conjunto de los cuatro hermanos. La fuente describe la unidad y no reconstruye toda la biografía individual.",
      "personality": "La página oficial individualiza arma y rasgos visuales, pero no una psicología completa. No se inventan miedos, gustos o hábitos privados.",
      "abilities": "Se distingue por usar hacha. El nivel 5 y la coordinación se atribuyen al grupo; no se inventan estadísticas individuales.",
      "relationships": "Es uno de los cuatro hermanos Gulliver y pertenece a Freya Familia en el estado descrito por DanMachi V.",
      "conflict": "La trayectoria individual necesita localizadores narrativos; no se infieren gustos, miedos ni estadísticas propias desde el perfil grupal.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "CHAR-GRER-GULLIVER": {
      "appearance": "La ficha oficial diferencia a Grer Gulliver por ojos rojo, armadura roja y espadón. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "history": "El perfil oficial de DanMachi V distingue a Grer Gulliver como cuarto hermano, con ojos rojo y espadón. El nivel 5 y la coordinación táctica se atribuyen al conjunto de los cuatro hermanos. La fuente describe la unidad y no reconstruye toda la biografía individual.",
      "personality": "La página oficial individualiza arma y rasgos visuales, pero no una psicología completa. No se inventan miedos, gustos o hábitos privados.",
      "abilities": "Se distingue por usar espadón. El nivel 5 y la coordinación se atribuyen al grupo; no se inventan estadísticas individuales.",
      "relationships": "Es uno de los cuatro hermanos Gulliver y pertenece a Freya Familia en el estado descrito por DanMachi V.",
      "conflict": "La trayectoria individual necesita localizadores narrativos; no se infieren gustos, miedos ni estadísticas propias desde el perfil grupal.",
      "sources": [
        "https://danmachi.com/danmachi5/character/"
      ]
    },
    "CHAR-HERMES": {
      "appearance": "El perfil oficial de Hermes brinda referencia visual y funcional de adaptación; no es invariable para toda época.",
      "history": "Dios que dirige Hermes Familia y se desplaza con libertad. El portal oficial de DanMachi III lo muestra cooperando a veces con Bell, sin resolver todos sus objetivos. La cronología personal completa requiere escenas y localizadores narrativos.",
      "personality": "Desenvuelto e independiente en el retrato de adaptación; no resume todas sus motivaciones. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "Su papel es divino e institucional; no se le asigna nivel de aventurero. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Dirige Hermes Familia y mantiene una conexión narrativa con Bell, que debe desplegarse mediante eventos específicos.",
      "conflict": "Faltan localizadores de escenas narrativas para cerrar cronología, decisiones, límites y evolución. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "sources": [
        null
      ]
    },
    "CHAR-GANESHA": {
      "appearance": "El perfil oficial de Ganesha brinda referencia visual y funcional de adaptación; no es invariable para toda época.",
      "history": "Dios que dirige Ganesha Familia, vinculada a la seguridad pública de Orario en el perfil oficial. La adaptación combina gestos cómicos con su condición divina. La cronología personal completa requiere escenas y localizadores narrativos.",
      "personality": "La fuente muestra una fachada excéntrica pero remarca su dignidad divina; no se extrapolan los chistes a toda situación.",
      "abilities": "Su relevancia es institucional y religiosa; no se le asigna nivel de aventurero. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Es la deidad principal de Ganesha Familia y se relaciona institucionalmente con Shakti Varma. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Faltan localizadores de escenas narrativas para cerrar cronología, decisiones, límites y evolución. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "sources": [
        null
      ]
    },
    "CHAR-SHAKTI-VARMA": {
      "appearance": "El perfil oficial de Shakti Varma brinda referencia visual y funcional de adaptación; no es invariable para toda época.",
      "history": "Aventurera de nivel 5 que encabeza a los miembros de Ganesha Familia; el perfil oficial conecta sus responsabilidades con la seguridad de Orario. La cronología personal completa requiere escenas y localizadores narrativos.",
      "personality": "La fuente permite atribuir responsabilidad de mando y servicio urbano, pero no desarrolla gustos, temores ni hábitos privados.",
      "abilities": "Nivel 5 en el perfil oficial de adaptación; su función se vincula a la seguridad urbana. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Capitana de Ganesha Familia y subordinada institucional de su deidad principal. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "conflict": "Faltan localizadores de escenas narrativas para cerrar cronología, decisiones, límites y evolución. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "sources": [
        null
      ]
    },
    "CHAR-APOLLO": {
      "appearance": "El perfil oficial de Apollo brinda referencia visual y funcional de adaptación; no es invariable para toda época.",
      "history": "Dios que dirige Apollo Familia y aparece como dios solar de temperamento apasionado en el perfil oficial de DanMachi II. La cronología personal completa requiere escenas y localizadores narrativos.",
      "personality": "La adaptación enfatiza su intensidad y deseo; es un retrato acotado. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "abilities": "No se le asigna nivel de aventurero; su influencia deriva de su posición y Familia. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Dirige Apollo Familia; su conflicto con Hestia Familia debe recorrerse mediante eventos de la Guerra de Juegos.",
      "conflict": "Faltan localizadores de escenas narrativas para cerrar cronología, decisiones, límites y evolución. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "sources": [
        null
      ]
    },
    "CHAR-ISHTAR": {
      "appearance": "El perfil oficial de Ishtar brinda referencia visual y funcional de adaptación; no es invariable para toda época.",
      "history": "Diosa que dirige Ishtar Familia y cuya ambición aparece destacada por el portal oficial de DanMachi II. La cronología personal completa requiere escenas y localizadores narrativos.",
      "personality": "Orgullo, deseo y ambición son rasgos destacados por esa adaptación; no se extrapolan a estados no descritos.",
      "abilities": "No se le asigna nivel de aventurera; su influencia procede de su estatus divino y su Familia. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "relationships": "Dirige Ishtar Familia; Aisha y Haruhime están vinculadas históricamente a esta facción en el periodo de adaptación.",
      "conflict": "Faltan localizadores de escenas narrativas para cerrar cronología, decisiones, límites y evolución. La fuente oficial consultada no describe más detalles de este aspecto. Para ampliarlo sin inventar hechos hay que cotejar escenas o pasajes de la obra correspondiente; por eso esta laguna se mantiene explícita y la ficha distingue un retrato promocional de una biografía narrativa.",
      "sources": [
        null
      ]
    },
    "CHAR-KALI": {
      appearance: "La sinopsis editorial conecta Kali Familia con el pasado de las hermanas Hiryute; la apariencia detallada de Kali no se trata como verificada en esta tanda.",
      history: "Su relación con Kali Familia y con el pasado de Tiona y Tione aparece en la ruta editorial de Sword Oratoria volumen 6. Las explicaciones sobre Telskyura y la infancia de las gemelas proceden de fuentes comunitarias y requieren cotejo del volumen.",
      personality: "No se fija una psicología estable a partir de su afiliación. Los rasgos de los miembros de una Familia no se transfieren automáticamente a su deidad sin escenas propias.",
      abilities: "No se inventa un repertorio de habilidades que la fuente editorial revisada no detalle. Como deidad, no se le asigna nivel de aventurera ni estadísticas de combatiente. La verificación de sus poderes exige escenas directas de Sword Oratoria o una referencia primaria equivalente; hasta entonces, esta sección registra el límite de evidencia en vez de convertir material de wiki en canon.",
      relationships: "Kali está vinculada a Kali Familia. El pasado de Tiona y Tione se conecta con esa facción; Argana y Bache figuran como integrantes de combate en fuentes secundarias.",
      conflict: "La tensión de la ruta surge del pasado que las gemelas confrontan en Melen. Las motivaciones particulares de Kali requieren reconstrucción por escenas y localizadores.",
      sources: ["https://ga.sbcr.jp/product/9784797388466/","https://danmachi.fandom.com/wiki/Kali_Familia"]
    },
    "CHAR-ARGANA-KALIF": {
      appearance: "La wiki describe a Argana como amazoness de piel morena y cabello color arena, unos 170 cm y 27 años; la ficha la enumera nivel 6 y viva. Son datos comunitarios que necesitan cotejo en Sword Oratoria vol. 6.",
      history: "La fuente la identifica como una de las dos capitanas de Kali Familia, hermana mayor de Bache, y registra Kalima/Kārimā como alias. La sinopsis editorial del volumen 6 contextualiza el pasado de las gemelas y Kali, pero no confirma cargo, edad o combate individual.",
      personality: "El resumen comunitario la presenta como agresiva, violenta y atraída por luchar, y relata que interpreta la fuerza como superioridad. Su reencuentro con Tione y su interés por Finn se vinculan a escenas concretas; no se extrapolan a cualquier situación.",
      abilities: "La wiki le atribuye combate cuerpo a cuerpo experto, fuerza y capacidad de anticipar movimientos. Reporta Kalima/Blood Drain, que aumentaría parámetros al beber sangre de alguien con Falna, con una reducción marcada de resistencia como coste. El crecimiento sin límite no se declara verificado.",
      relationships: "Kali Familia y Bache son sus vínculos principales reportados. Las wikis la conectan con Tione como alumna/contrincante y con el contexto de Telskyura; cada vínculo individual necesita cotejo de volumen 6.",
      conflict: "El aumento de poder lleva un coste defensivo relevante. No escribir la habilidad como infinita, gratuita o sin contramedidas usando solo una wiki.",
      sources: ["https://danmachi.fandom.com/wiki/Argana_Kalif","https://danmachi.fandom.com/wiki/Kali_Familia","https://ga.sbcr.jp/product/9784797388466/","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-044-kali-fianna-maxim-review.md"]
    },

    "CHAR-BACHE-KALIF": {
      appearance: "La wiki describe a Bache como amazoness de piel morena y cabello color arena, unos 170 cm y 27 años; la ficha la enumera como nivel 6 y viva. Son datos comunitarios pendientes de cotejo en Sword Oratoria vol. 6.",
      history: "La fuente la presenta como una de las capitanas de Kali Familia y hermana menor de Argana. El epíteto en inglés es King of Poison; «Reina del Veneno» se conserva como glosa descriptiva, no traducción oficial.",
      personality: "Según el resumen comunitario, es más reservada que Argana, aunque habladora cuando algo le interesa. La wiki cuenta que teme la violencia de su hermana y les atribuye motivaciones diferentes; no se les asigna una psicología compartida.",
      abilities: "La wiki le atribuye Velgus, magia de encantamiento que impregna el cuerpo u objetos con veneno peligroso. El resumen afirma que su alcance pasó de la mano derecha al cuerpo entero al llegar al nivel 6. Las fuentes secundarias resumen de modo distinto la resistencia a estados anómalos; no se fija una contramedida universal.",
      relationships: "Kali Familia y Argana son sus vínculos principales reportados. Las wikis la conectan también con Tiona y Tione en el pasado de Telskyura; aterrizar cada relación en escenas del volumen 6.",
      conflict: "Velgus es una amenaza grave pero no debe tratarse como victoria automática. Mantener los límites y dudas documentadas en lugar de inventar inmunidades absolutas.",
      sources: ["https://danmachi.fandom.com/wiki/Bache_Kalif","https://danmachi.fandom.com/wiki/Kali_Familia","https://ga.sbcr.jp/product/9784797388466/","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-044-kali-fianna-maxim-review.md"]
    },

    "CHAR-SELDAS": {
      appearance: "Las fuentes comunitarias consultadas no permiten fijar una descripción física primaria fiable. No se inventan altura, cabello, ojos, vestimenta o armas.",
      history: "La wiki de Tione sitúa a Seldas como figura importante en su infancia; la tabla de Kali Familia la enumera nivel 1 y fallecida, de unos 7–8 años. Datos secundarios pendientes de cotejo en Sword Oratoria vol. 6.",
      personality: "La fuente comunitaria la describe como generosa y afectuosa con las niñas de su habitación, a quienes saludaba con una sonrisa y atendía cuando estaban heridas. El papel de madre/hermana mayor se recoge como la percepción de Tione reportada por wiki.",
      abilities: "La wiki la describe como combatiente entrenada en lucha cuerpo a cuerpo. No se localizó una Skill, magia o arma individual; que esos datos falten en esta ficha no significa que careciera de destrezas.",
      relationships: "El vínculo de infancia con Tione y la asociación con Kali Familia/Telskyura proceden de fuentes comunitarias. El relato dice que Tione la mató sin comprender plenamente lo sucedido durante un combate a muerte en torno a su quinto cumpleaños y ascenso al nivel 2; secuencia y contexto requieren cotejo.",
      conflict: "Su muerte se relaciona con el trauma y el rechazo posterior de Tione a Telskyura. No inventar últimas palabras, intención o coreografía de la pelea: localizar primero la escena primaria.",
      sources: ["https://danmachi.fandom.com/wiki/Tione_Hiryute","https://danmachi.fandom.com/wiki/Kali_Familia","https://danmachi.fandom.com/wiki/Telskyura","https://ga.sbcr.jp/product/9784797388466/","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-044-kali-fianna-maxim-review.md"]
    },

    "CHAR-ALBERT-WALDSTEIN": {
      appearance: "Las wikis inglesa y española lo describen con cabello negro, bufanda granate, armadura ligera y una espada larga plateada. Es una descripción secundaria, no un diseño cotejado en un pasaje de la novela.",
      history: "Las fuentes comunitarias lo presentan como héroe del pasado remoto, padre de Ais y esposo de Aria. Le atribuyen herir el ojo del Dragón Negro y morir en ese enfrentamiento. La cronología absoluta y el vínculo con la llegada de Ais al presente siguen sin resolverse.",
      personality: "Los resúmenes lo describen como valiente, dedicado al entrenamiento y afectuoso con Aria y Ais. Son interpretaciones comunitarias; no se extrapolan a decisiones o escenas que no estén citadas.",
      abilities: "La wiki le atribuye gran destreza con la espada y sostiene que no poseía Falna. No se le asignan niveles, estadísticas ni técnicas mágicas; sus capacidades fuera de la proeza reportada contra el Dragón Negro permanecen desconocidas.",
      relationships: "Su paternidad respecto de Ais y su vínculo conyugal con Aria proceden de fichas comunitarias. La navegación conserva evidencia secundaria y no resuelve la edad de Ais ni la mecánica temporal.",
      conflict: "Su pasado es crucial para el misterio de Ais, pero la escritura debe separar recuerdos o sueños de narración objetiva y no inventar cómo llegó Ais desde el pasado al presente.",
      sources: ["https://danmachi.fandom.com/wiki/Albert_Waldstein","https://danmachi.fandom.com/es/wiki/Albert_Waldstein","https://danmachi.fandom.com/wiki/Ais_Wallenstein","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-043-albert-aria-and-dark-era-review.md"]
    },
    "CHAR-ARIA": {
      appearance: "Las fuentes comunitarias indican que Ais se parece a Aria y la asocian indirectamente con cabello rubio largo. No se asignan ojos, ropa, edad ni diseño completo sin una descripción directa o referencia oficial cotejada.",
      history: "El artículo comunitario de Ais identifica a Aria como su madre y la relaciona con Albert Waldstein en un pasado remoto. No explica de forma concluyente el nacimiento, la desaparición ni cómo Ais llegó a la época actual; esas cuestiones permanecen abiertas.",
      personality: "No hay escenas suficientemente localizadas para fijar valores, motivaciones o rasgos estables de Aria. Su parentesco y el papel en recuerdos de Ais no bastan para completar su psicología.",
      abilities: "La denominación de espíritu procede de fuentes comunitarias. No se asignan Falna, nivel, magia, equipo ni habilidades concretas; no se infiere el origen de la magia de Ais únicamente por parentesco.",
      relationships: "La maternidad respecto de Ais y la relación con Albert se registran como reportes secundarios. El grafo explica qué fuente originó los vínculos y deja pendiente el cotejo primario.",
      conflict: "Aria es relevante para la identidad y el misterio temporal de Ais. Evitar tratar hipótesis sobre linaje, tiempo transcurrido o el combate del Dragón Negro como respuestas confirmadas.",
      sources: ["https://danmachi.fandom.com/wiki/Ais_Wallenstein","https://danmachi.fandom.com/wiki/Albert_Waldstein","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-043-albert-aria-and-dark-era-review.md"]
    },
    "CHAR-MAXIM": {
      appearance: "No se localizó una descripción física primaria verificable en esta revisión. No se inventan cabello, ojos, altura, ropa o arma.",
      history: "La wiki lo presenta como capitán de Zeus Familia, nivel 8 y fallecido. Resume que quedó gravemente herido tras la derrota ante el Dragón Negro y desafió a la generación siguiente durante el tiempo que le quedaba. La ruta principal a cotejar es DanMachi vol. 20; Episode Freya queda separado.",
      personality: "La fuente comunitaria lo retrata como duro al desafiar a aventureros jóvenes, pero interesado en que mejoraran y pudieran enfrentar al Dragón Negro. Es una lectura de interacciones según wiki, no una personalidad uniforme.",
      abilities: "Se le atribuyen fuerza física excepcional, sentidos mejorados y nivel 8 histórico. La fuente lo compara con Zald; no se asignan Skills, magia, armas ni estadísticas adicionales sin localizador de novela.",
      relationships: "Capitán de Zeus Familia; Zeus es la deidad patrona y Zald otra figura del mismo grupo. La afiliación no confirma amistad ni expediciones compartidas.",
      conflict: "Su legado combina la derrota histórica con una última etapa dedicada a poner a prueba a la siguiente generación. No inferir motivaciones más concretas sin una escena localizada.",
      sources: ["https://danmachi.fandom.com/wiki/Maxim","https://danmachi.fandom.com/wiki/Zeus_Familia","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-044-kali-fianna-maxim-review.md"]
    },
    "CHAR-HELGA": {
      appearance: "La ficha comunitaria de DanMemo la describe como Pallum de 120 cm, cabello castaño claro, ojos rojo pálido y dos lanzas. Son datos del retrato de juego, no una descripción primaria cotejada de la novela.",
      history: "La wiki de Helga (DanMemo) la identifica como vicecapitana y oficial de Estado Mayor de los Caballeros de Fianna, fallecida. El perfil pertenece a Memoria Freese, no se integra automáticamente en la cronología de las novelas.",
      personality: "La fuente de juego la retrata franca, táctica, ingeniosa y dispuesta a usar trucos. También describe humor provocador hacia compañeros a quienes aprecia. Son rasgos de ese relato y no una plantilla canónica para otros medios.",
      abilities: "La wiki le atribuye inventiva para fabricar explosivos con materiales de su época y comparaciones comunitarias cercanas a nivel 2 en combate, nivel 4 en destreza y nivel 3 al cabalgar. No son niveles Falna literales verificados.",
      relationships: "La wiki de Lyra la presenta como reencarnación de Helga en contexto relacionado con DanMemo. El vínculo queda secondary_checked, sin afirmar recuerdos compartidos ni que pertenezca a la novela ligera.",
      conflict: "Su estrategia prioriza ingenio y recursos improvisados. Separar datos del juego y vínculo interencarnacional de la continuidad de novela; la versión/evento exactos siguen pendientes.",
      sources: ["https://danmachi.fandom.com/wiki/Helga_%28DanMemo%29","https://danmachi.fandom.com/wiki/Lyra","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-044-kali-fianna-maxim-review.md"]
    },
    "CHAR-DARK-ALFIA": {
      appearance: "La ficha inglesa de DanMachi Wiki reporta cabello plateado, heterocromía (ojo izquierdo gris y derecho verde) y altura de 169 cm. Son rasgos publicados por la wiki como referencia secundaria, no una descripción cotejada en el texto o las ilustraciones de la edición revisada.",
      history: "Alfia es reportada por fuentes secundarias como antigua integrante ejecutiva de Hera Familia y figura antagonista de gran impacto en Astrea Record. Su historia se relaciona con una enfermedad que afecta sus capacidades; detalles, decisiones y grado de sacrificio requieren capítulos y páginas del texto publicado. En entrevista, Omori explica que había aparecido brevemente en Familia Chronicle y que Astrea Record terminó dándole un papel narrativo mayor; es contexto de proceso creativo, no reemplazo de un pasaje de la novela (DMR-045-CLM-017).",
      personality: "Los compendios comunitarios la presentan como severa, exigente y consciente de su talento excepcional. No debe convertirse ese resumen en una psicología cerrada: sus motivaciones frente a la nueva generación necesitan reconstruirse a partir de escenas y diálogo localizados.",
      abilities: "Las wikis listan Gif Blessing, Alme, Vel Ardore, Satanas Verion, Silentium Eden y Genos Angelus. Describen Gif Blessing como una condición ligada a su enfermedad que mantiene Limit Off a cambio de deterioro progresivo físico, mental y de resistencia; Silentium Eden se reporta como defensa mágica de alto coste de Mind que también restringe la propia magia de Alfia; Genos Angelus, como hechizo de canto largo y gran alcance. Son mecánicas secundarias: condiciones, cifras y aplicación por escena siguen pendientes de cotejo. Afterglow en vol. 20 continúa como pista de búsqueda, no como uso individual confirmado (DMR-045-CLM-016 and DMR-029-CLM-019).",
      relationships: "Las fuentes secundarias la vinculan con Hera Familia y con Meteria; su relación con Zald forma parte del eje antagonista descrito en resúmenes de Astrea Record. Una arista secundaria permite abrir la pista comunitaria del prólogo de vol. 20 (EVT-DM-V20-PROLOGUE-SEA-WITCH-LEAD-001); no debe tratarse como confirmación de identidad ni como una relación canónica verificada. Otra pista independiente remite a los caps. 2–3 para cotejar Afterglow (EVT-DM-V20-AFTERGLOW-LEGACY-LEAD-001); no confirma el uso individual de la técnica. Una entrevista a Omori afirma que la novelización presenta a Alfia como tía de Bell (DMR-045-CLM-007), pero no ofrece capítulo/página y no cierra el resto de su biografía. Una entrevista anterior sobre Memoria Freese confirma que la madre de Bell es la hermana menor de Alfia (DMR-045-CLM-008, CONT-GAME); ese pasaje no nombra a la hermana como Meteria y se mantiene separado de la relación CONT-AR. Un hilo comunitario sobre páginas de muestra del vol. 20 interpreta tentativamente como Alfia a una maga de cabello gris del prólogo, usando Genos Angelus contra una criatura marina (DMR-045-CLM-015, CONT-MAIN-LN). No confirma que la criatura sea Leviathan ni que el testigo sea Leon; hasta cotejar el texto autorizado queda como pista secundaria. La nota autoral hipotética se abre por separado en EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001 (`CONT-AU`); no forma parte de su biografía de Astrea Record.",
      conflict: "Su función narrativa provisional se lee como un antagonismo que pone a prueba a los héroes de Orario, no como una villana plana. La lectura moral de sus motivos debe distinguir el texto de la interpretación comunitaria y no importar datos de la versión de juego sin comparación.",
      sources: ["https://danmachi.fandom.com/wiki/Alfia","https://danmachi.fandom.com/es/wiki/Alfia/Habilidades","https://danmachi.com/news/news131.php","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md","https://dengekionline.com/articles/189750/","https://note.com/fujinoomori/n/n629829ac3fe4","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/events/candidates/EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001.md","https://ln-news.com/articles/109766"],
    },
    "CHAR-CECIL-BLACKLIZA": {
      appearance: "Las wikis describen a Cecil como una humana de 16 años, cabello azul recogido en coleta, ojos anaranjados y uniforme blanco de la nueva Astrea Familia. Apariencia y edad son reportes comunitarios, pendientes de cotejo con el pasaje de novela.",
      history: "Figura como capitana de la nueva Astrea Familia en Solingen y herrera de nivel 2. El perfil comunitario relata que su familia de herreros no apoyó su objetivo profesional y que se vinculó a Astrea para obtener Blacksmith. La secuencia personal y el puesto siguen secundarios.",
      personality: "El artículo la presenta como poco habladora, evasiva y amarga ante la salida de Ryu de la antigua Familia. También describe una evolución hacia aprecio genuino por Astrea. Mantenerlo como lectura secundaria, no personalidad fija.",
      abilities: "Su profesión de herrera y la capacidad de desarrollo Blacksmith están reportadas por wiki. No se registran técnicas, materiales, parámetros, velocidad de forja o calidad final del arma sin un localizador directo.",
      relationships: "Astrea es su deidad y patrona reportada; pertenece a la segunda generación de Astrea Familia. La tensión inicial con Ryu se atribuye a considerarla una desertora, mientras que la encomienda de forjar un arma nueva para la elfa se describe como un proyecto prolongado. No convertir el roce en enemistad permanente.",
      conflict: "Su deseo de ser una gran herrera se cruza con la falta de reconocimiento familiar y con la obligación emocional de forjar un arma para Ryu. Los datos sobre la capitanía, la familia de origen y su evolución siguen secundarios hasta localizar las escenas.",
      sources: ["https://danmachi.fandom.com/wiki/Cecil_Blackliza","https://danmachi.fandom.com/es/wiki/Familia_Astrea","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md"]
    },
    "CHAR-ISELINA": {
      appearance: "La tabla comunitaria solo aporta especie y nivel; no confirma cabello, ojos, altura, edad, ropa, voz ni diseño individual. Estos campos deben permanecer desconocidos, no completarse por el aspecto habitual de un hombre lobo.",
      history: "La lista de la nueva Astrea Familia sitúa a Iselina en Solingen y le atribuye especie hombre lobo y nivel 2. La ocupación figura desconocida; no se han localizado escenas primarias ni cronología personal.",
      personality: "No se registra una caracterización individual sustentada. Compartir Familia con Cecil, Shau y Ulanda no prueba su temperamento ni relaciones privadas.",
      abilities: "No hay habilidades, magia, arma ni especialidad individual respaldadas por los documentos revisados. La especie no basta para atribuirle una mecánica de combate específica.",
      relationships: "La afiliación a la nueva Astrea Familia está reportada por roster comunitario; el enlace a Astrea se representa solo por esa pertenencia grupal. No se atribuye amistad, rivalidad o subordinación particular.",
      conflict: "Su perfil es útil como nodo de navegación, pero corre el riesgo de confundirse con una ficha completa. Mantener el nivel/especie como secundarios y el resto sin afirmar hasta hallar una aparición narrativa.",
      sources: ["https://danmachi.fandom.com/es/wiki/Familia_Astrea","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md"]
    },
    "CHAR-SHAU": {
      appearance: "La fuente comunitaria enumera a Shau como pallum de la nueva Astrea Familia, pero no define su aspecto personal. No se atribuyen altura, edad, cabello, ojos, voz, uniforme más allá de la descripción general del grupo ni rasgos distintivos.",
      history: "El roster comunitario le asigna nivel 1 en la etapa de Solingen y deja la ocupación como desconocida. No se infiere trayectoria anterior, familia de origen, rango o participación en eventos.",
      personality: "Las referencias reunidas no describen de forma fiable su carácter. No se le atribuyen valentía, timidez, astucia ni otra cualidad a partir de estereotipos de pallum.",
      abilities: "Sin información individual comprobada sobre magia, habilidades, arma, soporte o especialidad. El nivel reportado es el único dato de progresión, todavía secundario.",
      relationships: "La pertenencia a la nueva Astrea Familia es un dato de roster secundario. No hay evidencia aquí para afirmar que sea ayudante de Cecil, amiga de Iselina o compañera cercana de Ulanda.",
      conflict: "La ficha debe conservar su utilidad para búsqueda sin rellenar vacíos con contenido inventado. Confirmar especie, nivel, ocupación y relaciones requiere el texto narrativo o una fuente primaria trazable.",
      sources: ["https://danmachi.fandom.com/es/wiki/Familia_Astrea","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md"]
    },
    "CHAR-ULANDA": {
      appearance: "La ficha de roster reporta a Ulanda como humana, sin aportar diseño personal suficiente. No se fijan edad, altura, color de cabello/ojos, voz, vestimenta particular ni otros rasgos por inferencia.",
      history: "La lista comunitaria la sitúa en la nueva Astrea Familia de Solingen, con nivel 1 y ocupación desconocida. No hay localizador de capítulo/página incorporado para su historia individual.",
      personality: "Las fuentes revisadas no ofrecen evidencia individual suficiente para describir su temperamento o motivaciones. No se derivan rasgos de su nivel o especie.",
      abilities: "No se atribuyen magia, habilidades, arma, técnica ni especialidad. El roster únicamente permite registrar la especie y nivel reportados, ambos pendientes de cotejo.",
      relationships: "Su afiliación con la nueva Familia y el vínculo institucional con Astrea son reportados por el roster. Ninguna relación particular con otras miembros se afirma sin escena o claim propio.",
      conflict: "El mayor problema documental es la escasez de información individual. Mantener el dossier legible y explícito sobre los desconocidos es preferible a convertir una fila de roster en biografía inventada.",
      sources: ["https://danmachi.fandom.com/es/wiki/Familia_Astrea","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md"]
    },
    "CHAR-ZANIS-LUSTRA": {
      appearance: "La ficha comunitaria describe a Zanis como humano de rostro delgado y gafas; le atribuye el alias Gandharva y nivel 2. Estos detalles visuales y de ficha no sustituyen una descripción directa de novela.",
      history: "Se le reporta como antiguo capitán de Soma Familia. El resumen comunitario del volumen 6 lo muestra presionando a Lili por su liberación y proponiendo usar Cinder Ella para atraer monstruos y venderlos. Cargo, nivel y secuencia narrativa siguen secundarios.",
      personality: "Los artículos comunitarios lo describen como inteligente, codicioso y dispuesto a aprovechar el desinterés de Soma para controlar la Familia. Es una caracterización secundaria: debe contrastarse con sus actos y diálogos concretos, no usarse como explicación universal de cada decisión.",
      abilities: "No se registra aquí magia, habilidades o equipo individual confirmado. El plan reportado depende de la capacidad Cinder Ella de Lili; no se transfiere esa capacidad a Zanis ni se presume una habilidad propia para controlar vino o Falna.",
      relationships: "Soma Familia: antigua capitanía reportada. Chandra: sucesión de puesto y desacuerdo con su estilo de liderazgo, según resúmenes comunitarios. Liliruca: presión por dinero, plan de monstruos y acusación sobre Canoe reportados; la acusación no demuestra culpabilidad.",
      conflict: "El perfil enlaza la degradación de Soma Familia, la instrumentalización de miembros y la acusación sobre Canoe. Debe separarse lo que Zanis dice de los hechos narrados por el texto; los estados y motivaciones requieren localizador primario.",
      sources: ["https://danmachi.fandom.com/wiki/Zanis_Lustra","https://danmachi.fandom.com/wiki/Soma_Familia","https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_6/Synopsis","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md"]
    },
    "CHAR-CHANDRA-IHIT": {
      appearance: "La fuente comunitaria identifica a Chandra como enano varón, pero no aporta una descripción visual exhaustiva en el perfil resumido. No se inventan altura, cabello, ojos, cicatrices o vestimenta.",
      history: "Se le reporta como aventurero de nivel 2 y capitán de Soma Familia después de Zanis. El resumen del volumen 6 cuenta que ayuda a Lili a salir de su celda durante el conflicto previo al War Game. Falta localizador primario para la capitanía y la escena de ayuda.",
      personality: "Los resúmenes lo pintan cansado del control de Zanis y aficionado al vino de Soma; esa motivación explica de manera secundaria por qué deja escapar a Lili. No implica que sea siempre altruista ni que mantenga una amistad posterior con ella.",
      abilities: "No se identifican técnicas, magia, equipo o destrezas de combate. El nivel 2 es una cifra de roster reportada; no se extrapola a capacidad de combate más allá de ese snapshot.",
      relationships: "Soma Familia: afiliación y capitanía reportadas. Zanis: desacuerdo y relevo de capitanía reportados. Liliruca: intervención de ayuda en el episodio del volumen 6 según resumen comunitario, todavía sin cita directa.",
      conflict: "Chandra se ubica entre el control abusivo de Zanis y la reforma posterior de Soma Familia. La ficha debe distinguir ese papel del contexto general de captura que sí aparece en la sinopsis editorial; la sinopsis por sí sola no demuestra lo que Chandra hace individualmente.",
      sources: ["https://danmachi.fandom.com/wiki/Chandra_Ihit","https://danmachi.fandom.com/wiki/Soma_Familia","https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_6/Synopsis","https://ga.sbcr.jp/product/9784797380583/","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md"]
    },
    "CHAR-CANOE-BELWAY": {
      appearance: "La ficha comunitaria lo describe como varón mapache de unos 155 cm, complexión algo robusta, cabello castaño rojizo y ojos amarillos; lo muestra con orejas y cola de mapache. Estos datos son secundarios, no una descripción cotejada con el texto original.",
      history: "Se le reporta como antiguo aventurero de Soma Familia, nivel 1 y fallecido. El perfil lo conecta con robo y maltrato a Lili, una espada mágica robada y una secuencia de huida en la que se enfrenta a peligros del Dungeon. Como el resumen también relaciona su codicia con un incidente de minotauro, la causalidad completa debe verificarse por escenas antes de fijar fechas.",
      personality: "Los compendios lo describen como codicioso y astuto, pero estas etiquetas proceden de resúmenes comunitarios. La ficha no los usa para concluir por sí sola la responsabilidad o el motivo de cada acción.",
      abilities: "No se le atribuyen magia, habilidades o estadísticas adicionales a partir del perfil. El equipo reportado incluye una espada mágica que habría robado a Lili; no se fija el nombre, sus efectos ni todos los momentos en que la poseyó.",
      relationships: "Soma Familia: antigua afiliación reportada. Liliruca: los resúmenes le atribuyen robo y maltrato. Zanis: en el resumen de volumen 6 lo acusa de desaparecer y acusa a Lili por ello; esa acusación se registra como dicho de personaje según fuente secundaria, no como prueba de la culpabilidad de Lili.",
      conflict: "Hay una tensión documental importante entre la acusación que Zanis hace en el resumen del volumen 6 y el destino de Canoe descrito por otro artículo comunitario. No debe resolverse por autoridad de una wiki; hay que leer las secuencias de volumen 2 y volumen 6 y separar qué pasó, quién lo sabe y qué se afirma.",
      sources: ["https://danmachi.fandom.com/wiki/Canoe_Belway","https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_2/Synopsis","https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_6/Synopsis","https://danmachi.fandom.com/wiki/Zanis_Lustra","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-046-solingen-astrea-and-soma-family-characters.md"]
    },
    "CHAR-METERIA": {
      appearance: "Las fichas comunitarias describen a Meteria como humana de cabello blanco y ojos azules, de constitución frágil por una enfermedad incurable. Es una descripción secundaria; no se fijan edad, altura, aspecto en una escena ni nombre médico para la enfermedad sin un pasaje trazable.",
      history: "Las wikis la identifican como antigua integrante de Hera Familia, hermana gemela de Alfia y madre de Bell Cranel. Relatan que dio a luz después de la caída de las grandes Familias y confió el bebé a Zeus, muriendo tiempo después. Una entrevista de 2020 confirma en el marco del juego que la madre de Bell es la hermana menor de Alfia, pero la respuesta no nombra a esa hermana como Meteria; por tanto, no identifica este registro de forma independiente. La maternidad y el parentesco gemelar siguen secundarios a la espera de un localizador primario. El padre biológico de Bell permanece sin identificar.",
      personality: "La nota publicada por Fujino Omori la describe como amable, sonriente y capaz de calmar a quienes la rodeaban, pero esa caracterización aparece en un escenario hipotético donde Alfia y Zald crían a Bell. Se conserva como material de autor en CONT-AU, no como personalidad ya demostrada en la novela principal.",
      abilities: "No se le atribuyen magia, falna, nivel ni capacidades de combate a partir de las fuentes revisadas. Su importancia documental se concentra en parentesco, salud reportada e historia familiar. Los campos de habilidad deben permanecer desconocidos en vez de completar una ficha de aventurera por analogía.",
      relationships: "Alfia es su hermana gemela según las wikis; Bell es identificado como su hijo. Hera Familia aparece como afiliación previa reportada y Zeus como la persona que cuidó al niño tras el nacimiento según resúmenes comunitarios. El padre de Bell no tiene ID ni nombre inferido. Ningún personaje se presume conocedor de estos vínculos en cualquier época. La escena autoral alternativa y su ruta navegable (EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001, CONT-AU) muestran a Meteria en el recuerdo de Alfia; no elevan las relaciones secundarias de la novela principal.",
      conflict: "La enfermedad reportada limita la vida de Meteria y contrasta con el lugar central que su maternidad ocupa en la historia familiar. El riesgo enciclopédico principal es llenar vacíos: no inventar fechas, diagnóstico, conversación final, motivo de embarazo o identidad del padre. La nota de autor debe mantenerse separada del relato principal.",
      sources: ["https://danmachi.fandom.com/wiki/Meteria","https://danmachi.fandom.com/es/wiki/Meteria","https://note.com/fujinoomori/n/n629829ac3fe4","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/events/candidates/EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001.md","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md","https://ln-news.com/articles/109766"]
    },
    "CHAR-DARK-ZALD": {
      appearance: "La ficha española reporta cabello castaño oscuro, ojos grises, cicatrices, armadura negra y capa rojo oscuro; también publica una altura de 212 cm. Son rasgos secundarios de la ficha comunitaria, no una descripción cotejada en la edición revisada de Astrea Record.",
      history: "Las fuentes secundarias lo sitúan como ejecutivo de Zeus Familia, con nivel 7 y llegada al piso 71 en una instantánea histórica de la wiki, no como estado permanente cotejado en la novela revisada. Se le atribuyen la derrota de Behemoth y un envenenamiento posterior, además de un enfrentamiento final con Ottar dentro del relato de Astrea Record; el método, la secuencia y el desenlace requieren localizar el pasaje publicado. Omori explicó que evitaba usar a Zald y Alfia con frecuencia porque le parecían demasiado fuertes: es contexto del proceso de escritura, no una escala cuantitativa (DMR-045-CLM-017).",
      personality: "Los resúmenes secundarios lo presentan como combatiente veterano y figura que acepta un papel de prueba para la nueva generación. Ese propósito y su dimensión moral son interpretaciones secundarias hasta localizar las escenas y separar diálogo explícito del análisis de lectores.",
      abilities: "Las wikis listan Deus Ambrosia, Al Questa, Niggle Gourmet y Rea Ambrosia. Según el resumen comunitario, Deus Ambrosia puede aumentar sus capacidades al consumir criaturas o materiales, pero la mejora depende de la cantidad y calidad ingeridas y no le permite alcanzar poder ilimitado sin coste. El veneno de Behemoth se describe como un deterioro persistente, así que el aumento de poder no debe separarse de esa limitación. Efectos exactos, condiciones y páginas siguen pendientes de cotejo; Afterglow en los caps. 2–3 del vol. 20 es aún una pista secundaria (DMR-045-CLM-016).",
      relationships: "Su trayectoria se vincula secundariamente con Zeus Familia, con Alfia dentro del conflicto de Astrea Record y con Ottar en un enfrentamiento reportado. Esas relaciones son rutas históricas y no implican que exista una fecha o escena verificada para cada detalle. Una arista de investigación conecta su ficha con la pista de Afterglow en los caps. 2–3 de vol. 20 (EVT-DM-V20-AFTERGLOW-LEGACY-LEAD-001); falta cotejo primario. El escenario autoral de crianza se consulta en EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001 (CONT-AU), sin atribuir esos hechos a la novela principal o a Astrea Record.",
      conflict: "El conflicto de Zald se estudia como antagonismo de alto impacto dentro de una tragedia mayor, con un posible sentido de prueba para los héroes del futuro según fuentes comunitarias. La enciclopedia no debe reducirlo a una ficha de poder ni inventar motivaciones más allá de lo que la novela confirme.",
      sources: ["https://danmachi.fandom.com/es/wiki/Zald","https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3","https://danmachi.com/news/news131.php","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md","https://www.reddit.com/r/DanMachi/comments/1ifg4g6/volume_20_side_story_a_scene_between_a_certain/","https://dengekionline.com/articles/189750/","https://ln-news.com/articles/109766","https://note.com/fujinoomori/n/n629829ac3fe4","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/events/candidates/EVT-DM-AU-ALFIA-ZALD-RAISE-BELL-001.md"]
    },
    "CHAR-DARK-RUDRA": {
      appearance: "La ficha comunitaria española describe a Rudra con piel oscura, pelo corto, toga de tono apagado, pantalón claro y zapatos negros terminados en punta hacia arriba. Se presenta solo como descripción secundaria reportada, no como una lectura cotejada de la novela principal.",
      history: "Rudra es reportado por compendios comunitarios como deidad patrona de Rudra Familia. Un extracto narrativo parcial de DanMachi vol. 14, cap. 13, atribuye una trampa con más de cien explosivos a Rudra Familia como grupo y enlaza la secuencia con la aparición del Juggernaut (DMR-045-CLM-013). Eso no prueba que la deidad Rudra la ordenara o autorizara. El epílogo registra por separado el relato público sobre Jura, otros supervivientes y Gale Wind (DMR-045-CLM-014); la página exacta sigue pendiente.",
      personality: "No se asigna a Rudra una psicología definitiva ni se deduce responsabilidad personal a partir de la afiliación de sus seguidores. La investigación distingue lo que hizo la Familia, lo que hizo Jura y lo que supo o autorizó la deidad.",
      abilities: "No se atribuyen habilidades, nivel de combatiente ni poderes individuales en esta ficha. Como deidad, no se le asigna nivel de aventurero. El material necesario para ampliar la sección es una fuente primaria que describa sus decisiones o capacidades.",
      relationships: "Los compendios comunitarios lo vinculan con Rudra Familia. El catálogo conecta la propia Familia con la tragedia histórica de Astrea y mantiene una arista separada de Rudra, la deidad, con evidencia secundaria. El pasaje parcial de vol. 14 respalda acciones del grupo, no una orden personal del dios (DMR-045-CLM-013).",
      conflict: "La relación con la tragedia de Ryu y el Juggernaut se mantiene en la continuidad de la novela principal, separada del núcleo de Astrea Record alrededor de T-7. No se imputa a Rudra cada acción de Jura ni se fusiona esta fase posterior con la historia de Alfia y Zald.",
      sources: ["https://danmachi.fandom.com/es/wiki/Rudra","https://danmachi.fandom.com/wiki/Rudra_Familia","https://yenpress.com/titles/9781975328191-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-13-light-novel","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md"]
    },
    "CHAR-DARK-JURA-HALMER": {
      appearance: "Las wikis describen a Jura como hombre-gato alto y delgado, con una oreja y parte del brazo derecho perdidos tras un encuentro con Ryuu; el resumen español menciona señales de agotamiento. Rasgos visuales secundarios, pendientes de cotejo en DanMachi vol. 13.",
      history: "La retrospectiva del volumen 14, cap. 13, sitúa a Jura con Rudra Familia durante la trampa histórica contra Astrea Familia y la aparición del Juggernaut; el extracto atribuye la operación a la Familia como grupo (DMR-045-CLM-013). El intento posterior de reproducir o controlar un Juggernaut pertenece al arco actual de volúmenes 13–14 y no es el mismo suceso. En el epílogo, la versión pública presenta a Gale Wind como muerta junto a Jura y supervivientes de Rudra Familia, aunque esa no es la verdad sobre la supervivencia de Ryuu (DMR-045-CLM-014). Páginas exactas pendientes.",
      personality: "Los resúmenes lo describen como manipulador y vengativo, obsesionado con controlar un Juggernaut y con miedo profundo hacia Ryuu. Se registra como conducta atribuida en el arco, no como diagnóstico permanente ni motivación fuera de esas circunstancias.",
      abilities: "Se le atribuyen sentidos de hombre-gato y una función de domador. El látigo carmesí, usado con un collar compatible, mejora el control sobre monstruos y aparece ligado a un Lambton. La capacidad requiere instrumentos y preparación; no se infiere control ilimitado del Dungeon.",
      relationships: "Miembro de Rudra Familia según referencias secundarias; la arista al evento histórico ya tiene evidencia parcial de vol. 14, cap. 13, sin atribuir a Jura cada detalle del plan ni al dios Rudra una orden personal. Otra arista conecta a Jura con el relato público del epílogo. Ambas son CONT-MAIN-LN; la página exacta y el plan posterior integral siguen pendientes.",
      conflict: "Su plan depende de experimentar con una amenaza que puede acabar con él mismo. Se explican el riesgo, el equipo necesario y la discrepancia del rótulo de debut entre las wikis.",
      sources: ["https://danmachi.fandom.com/es/wiki/Jura_Halmer","https://danmachi.fandom.com/wiki/Jura_Halmer","https://yenpress.com/titles/9781975328191-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-13-light-novel","https://yenpress.com/titles/9781975385026-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-14-light-novel","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-043-albert-aria-and-dark-era-review.md"]
    },
    "CHAR-DARK-VALLETTA-GREDE": {
      appearance: "La wiki inglesa le atribuye cabello rosado de longitud media, ojos amarillos, ropa de combate oscura y un aspecto más joven que su edad reportada por el efecto de Falna. Es material secundario, no un diseño cotejado.",
      history: "La fuente comunitaria la describe como antigua integrante de Thanatos Familia y ejecutiva principal de Evilus, con debut en Sword Oratoria vol. 7. Sus acciones en el núcleo de Astrea Record no quedan confirmadas; su afiliación y estado permanecen secundarios.",
      personality: "El resumen de wiki la presenta como estricta con Thanatos, rencorosa con Finn y agresiva al perseguir sus objetivos, aunque también suplicante cuando está acorralada. Es una lectura de escenas del artículo, no un rasgo atemporal probado.",
      abilities: "Se le atribuyen planificación de operaciones Evilus, magia de barrera Shaldo y una espada maldita. Shaldo reduce el estado de quienes entran y se reaplica con el movimiento dentro del área; la fuente reporta encantamiento largo, alto consumo de Mind y pérdida del efecto si sale del área.",
      relationships: "Las wikis la conectan con Thanatos Familia y con la red Evilus. Las relaciones tienen evidencia secundaria; no confirman su participación en Astrea Record ni convierten Evilus en una Familia única.",
      conflict: "Su peligro combina planificación con trampas de área, pero Shaldo tiene costes y condiciones. La ficha debe mostrar la vulnerabilidad junto a la amenaza.",
      sources: ["https://danmachi.fandom.com/wiki/Valletta_Grede","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-043-albert-aria-and-dark-era-review.md"]
    },
    "CHAR-DARK-THANATOS": {
      appearance: "La wiki inglesa lo describe con cabello y ojos púrpura oscuro y ropa negra desgastada con detalles grises y bordes púrpura. La descripción procede de su perfil comunitario, no de un cotejo primario de esta tanda.",
      history: "El artículo lo presenta como dios asociado con la muerte, deidad principal de Thanatos Familia y miembro de Evilus, con aparición en Sword Oratoria vol. 7. El estado publicado es «In Heaven». Esto no demuestra que participara en el núcleo de Astrea Record ni que comandara todas las facciones de Evilus.",
      personality: "La fuente lo describe como despreocupado y frívolo pese a un aura sombría, y lo vincula ideológicamente con el mal. Estos rasgos son secundarios y deben conectarse a sus escenas antes de usarse para predecir decisiones narrativas.",
      abilities: "No se incorporan nivel, técnicas de combate, magia o equipo; el artículo de referencia no basta para detallarlos aquí. No se usa el rol divino de la muerte como licencia para inventar facultades.",
      relationships: "Thanatos Familia y Evilus aparecen como asociaciones en la wiki inglesa. El grafo marca esa afiliación como secundaria; escenas concretas y alcance de su autoridad requieren localizadores.",
      conflict: "Se separa el rol reportado en Sword Oratoria de la trama de Astrea Record. La pista «Eren» de la galería no se eleva a alias confirmado ni se fusiona con otra identidad.",
      sources: ["https://danmachi.fandom.com/wiki/Thanatos","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-043-albert-aria-and-dark-era-review.md"]
    },
    "CHAR-DARK-EREBUS": {
      appearance: "La wiki inglesa reporta cabello negro con dos mechones grises, ojos grises y altura de 178 cm; también recoge el sobrenombre «Absolute Evil» en el contexto del juego. Son datos secundarios de CONT-GAME, no una descripción cotejada de la novelización. «Eren» aparece en la página como otro nombre, pero no se incorpora como alias canónico sin pasaje primario.",
      history: "Las referencias comunitarias lo asocian con Evilus y con el conflicto de Astrea Record. El pie editorial de LN News Online lo presenta como deidad del inframundo primordial y usa «Absolute Evil» (DMR-045-CLM-009), pero esa descripción se refiere al contexto de la historia original de Memoria Freese, CONT-GAME. No prueba una jerarquía única de Evilus ni un conjunto de acciones compartidas por todas sus facciones, y no se traslada sin cotejo a la novelización.",
      personality: "En CONT-GAME, la ficha comunitaria le atribuye la idea de que el mal verdadero debe ser odiado por todos y que una justicia absoluta es un ideal que debe alcanzarse y conquistarse; también lo describe como alguien proclive al aislamiento (DMR-045-CLM-018). Es un resumen secundario de su filosofía en la historia original del juego, no una motivación confirmada de la novela revisada. Para caracterizar CONT-AR, hay que cotejar sus propios diálogos.",
      abilities: "No se registra un nivel de aventurero ni un inventario fiable de poderes en las fuentes primarias revisadas en esta tanda. Cualquier habilidad o efecto sobrenatural debe añadirse cuando exista una escena concreta o una fuente oficial que lo respalde.",
      relationships: "Su asociación con el conflicto de Evilus y Astrea Record se conserva como evidencia secundaria. Evilus se modela como una red de facciones y no se le atribuyen automáticamente todas las acciones del conflicto.",
      conflict: "Erebus sirve para explorar la oposición ideológica a la justicia de Ryu y Astrea Familia. La ficha distingue antagonismo reportado de una reconstrucción completa de su plan.",
      sources: ["https://danmachi.fandom.com/wiki/Erebus","https://ln-news.com/articles/109766","https://danmachi.com/news/news131.php","https://danmachi.com/chronology/","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-029-historical-character-provenance.md","https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-045-dark-era-characters-continuity-audit.md"]
    },
    "CHAR-OLIVAS-ACT": {
      "appearance": "La wiki inglesa describe cabello blanco, ojos amarillo verdosos, equipo de combate blanco y una máscara con forma de cráneo; también atribuye un cambio de color de piel desde la cintura. Es información visual secundaria que debe cotejarse con las ilustraciones o escenas pertinentes.",
      "history": "La fuente comunitaria lo sitúa en Sword Oratoria, volumen 3, y relaciona su pasado con Evilus, el incidente del piso 27 y una transformación posterior en Creature. También lo marca como fallecido. La sinopsis editorial solo aporta el marco del volumen; ninguna de estas afirmaciones biográficas se presenta como verificación primaria.",
      "personality": "La descripción comunitaria lo caracteriza como cruel, sádico, fanático y propenso a subestimar a sus rivales. También indica que conocía nombres o alias de aventureros de Orario. Estos rasgos son pistas de lectura derivadas de una fuente secundaria, no una psicología atemporal ni una explicación definitiva de sus motivos.",
      "abilities": "La wiki atribuye a su forma Creature fuerza, rapidez, reflejos, resistencia, sentidos agudizados y regeneración. Describe que ingerir piedras mágicas le permite fortalecerse, pero con consumo ineficiente; regenerarse gastaría resistencia y Mind y reduciría su rendimiento posterior. También le atribuye la función Tamer para dirigir determinados monstruos. No se inventan costes, radios o estadísticas numéricas.",
      "relationships": "La fuente secundaria lo presenta como antiguo miembro de Evilus y enumera una afiliación previa con Enyo, que aquí no se fusiona con otra identidad. El vínculo con Evilus queda marcado como reportado. La asociación con Revis se limita a una aparición compartida descrita por la wiki; no se infieren amistad, subordinación ni confianza estable.",
      "conflict": "Su expediente sirve para reconstruir con precisión una amenaza física que puede regenerarse, pero cuyo consumo de recursos limita el combate. La escritura debe distinguir el estado anterior a su transformación del estado Creature, registrar la escena y el coste de cada recuperación y evitar tratar su resistencia como invulnerabilidad.",
      "sources": [
        "https://danmachi.fandom.com/wiki/Olivas_Act",
        "https://yenpress.com/titles/9780316318181-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-on-the-side-sword-oratoria-vol-3-light-novel",
        "https://github.com/jonhararagi/wordwaifu/blob/main/lore/danmachi/research/inbox/DANMACHI-RESEARCH-042-olivas-act-dossier.md"
      ]
    },
  };
  const clone = value => JSON.parse(JSON.stringify(value));
  root.WordWaifuCharacterDossiers = Object.freeze({
    get: id => dossiers[id] ? clone(dossiers[id]) : null,
    list: () => Object.keys(dossiers).map(id => ({ id, ...clone(dossiers[id]) }))
  });
})(typeof globalThis !== "undefined" ? globalThis : this);
