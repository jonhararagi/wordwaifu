(function(root) {
  "use strict";
  const dossiers = {
    "DM-CHAR-BELL": {
      appearance: "Joven humano de cabello blanco y ojos rojos; su aspecto menudo y su velocidad le han valido comparaciones con un conejo. Suele vestir equipo ligero para moverse con rapidez en el Dungeon.",
      history: "Crece en una aldea apartada bajo el cuidado de Zeus, quien alimenta su imaginación con relatos de héroes. Viaja a Orario con la expectativa ingenua de vivir aventuras y es rechazado por varias Familias antes de que Hestia lo acepte como su primer miembro. El rescate de Ais frente a un Minotauro transforma su deseo de convertirse en héroe en una meta personal: alcanzar la fuerza necesaria para estar a su altura.",
      personality: "Es honesto, tímido en lo romántico, compasivo y extraordinariamente persistente. Su primera reacción ante el peligro suele ser proteger a alguien incluso cuando la retirada sería más sensata. No es un estratega frío: inspira confianza por sus actos, pero puede lanzarse a situaciones que superan sus recursos.",
      abilities: "Liaris Freese acelera su crecimiento mientras su aspiración por Ais se mantenga intensa; su progreso anómalo está ligado a la experiencia y al esfuerzo acumulado. Firebolt ofrece un ataque mágico rápido, Argonaut concentra energía para potenciar una acción y Ox Slayer mejora su respuesta contra minotauros. Sus estadísticas acumuladas suelen dejarlo por encima de otros aventureros recién ascendidos al mismo nivel.",
      relationships: "Hestia es su diosa y el núcleo afectivo de su Familia. Liliruca aporta estrategia y coordinación; Welf, herrería y apoyo directo; Mikoto, disciplina táctica; Haruhime, apoyo mágico. Ais es su modelo de fuerza y el vínculo que desencadena buena parte de su crecimiento. Ryuu llega a ser una compañera crucial tras el desastre del piso 37.",
      conflict: "Su ideal de salvar a todos choca con la realidad de un mundo donde la fuerza y el tiempo son limitados. Su compasión puede convertirse en una vulnerabilidad táctica, y su crecimiento acelerado no elimina la falta de experiencia ni el coste emocional de cada derrota.",
      sources: ["https://danmachi.fandom.com/es/wiki/Bell_Cranel", "https://danmachi.com/danmachi5/character/"]
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
    "CHAR-RAUL-NOORD": {
      appearance: "Humano de aspecto corriente, cabello oscuro corto y puntiagudo y ojos marrones según la referencia secundaria. Su equipo incluye ropa de aventurero y una espada; los detalles visuales proceden de la ficha comunitaria, no de una descripción cotejada en la novela.",
      history: "Pertenece a la Familia Loki y ocupa una función práctica entre sus miembros: la referencia oficial de Sword Oratoria indica que suele encargarse de tareas cotidianas y trabajo de supporter. En emergencias, Finn confía en él para dirigir a los miembros de menor rango. El perfil oficial de adaptación lo sitúa en nivel 4, dato ligado a ese snapshot y no una constante para toda la cronología.",
      personality: "Preocupadizo y vacilante al afrontar el peligro, con inseguridad visible pese a su nivel. No es simplemente inútil ni un cobarde plano: sigue cumpliendo tareas, intenta responder a las responsabilidades delegadas y puede funcionar como apoyo humano y reconocible frente a los miembros excepcionales de la Familia. La fuente secundaria amplía esta idea con su baja autoestima, su esfuerzo por mejorar y su admiración por Finn; esos matices deben cotejarse con los pasajes de las novelas antes de marcarlos como canon primario.",
      abilities: "El perfil oficial de Sword Oratoria le asigna nivel 4 en la etapa descrita y lo presenta como capaz de coordinar a integrantes de menor rango cuando la situación lo requiere. Las fuentes consultadas aquí no bastan para confirmar una lista exhaustiva de habilidades, magia, estadísticas o técnicas exclusivas; no inventarlas.",
      relationships: "Finn es la referencia de mando más importante: le delega la coordinación de miembros de menor rango. Raul trabaja dentro de la red de apoyo de Loki Familia; compartir afiliación con Ais, Bete, Riveria o los demás no demuestra por sí solo una amistad íntima con cada uno. La fuente secundaria describe una admiración intensa hacia Finn, pendiente de localización en la novela.",
      conflict: "La tensión útil del personaje es la distancia entre su temor e inseguridad y la responsabilidad que otros le confían. En escenas íntimas puede ser amable, torpe, leal o tierno si el contexto de la historia lo justifica; esos comportamientos no son contradicciones automáticas. El corrector solo debería advertir contradicciones contra hechos o rasgos documentados con evidencia, no castigar una emoción nueva por no aparecer en un resumen.",
      sources: ["https://danmachi.com/sword_oratoria/character/", "https://danmachi.fandom.com/wiki/Raul_Nord", "https://danmachi.fandom.com/es/wiki/Raul_Nord"]
    },
    "DM-CHAR-LOKI": {
      appearance: "Diosa de la Familia Loki. La apariencia y vestimenta deben mostrarse según la continuidad seleccionada y la referencia visual disponible, sin convertir detalles de una adaptación en hechos universales.",
      history: "Desciende al Mundo Inferior y dirige la Loki Familia, una de las principales fuerzas de Orario. Su grupo reúne aventureros de alto nivel y participa en expediciones y conflictos centrales de la ciudad. Para una cronología concreta, los acontecimientos deben ordenarse por novela o adaptación.",
      personality: "Extrovertida, provocadora, competitiva y aficionada a bromear, especialmente con otras deidades. Esa fachada cómica no elimina su capacidad para evaluar riesgos, dirigir a sus aventureros y actuar con seriedad cuando su Familia está amenazada.",
      abilities: "Como diosa no tiene un nivel de aventurera ni debe recibir estadísticas de Falna. Su influencia principal es social y organizativa: dirige una Familia poderosa y participa en decisiones entre deidades. No atribuirle técnicas de combate de aventurero sin una fuente específica.",
      relationships: "Finn, Riveria, Gareth, Ais, Bete y los demás miembros forman parte de su Familia, pero la naturaleza de cada vínculo debe describirse individualmente y con contexto. Mantiene una rivalidad cómica con Hestia; esa rivalidad no equivale por sí sola a enemistad absoluta.",
      conflict: "Su humor y su competitividad pueden ocultar la presión de mantener a una Familia de primera línea. Una escena seria, afectuosa o vulnerable no es contradicción automática: debe contrastarse con un hecho explícito o un patrón documentado, no con un resumen superficial.",
      sources: ["https://danmachi.fandom.com/es/wiki/Loki", "https://danmachi.fandom.com/es/wiki/Familia_Loki"]
    },
    "CHAR-OURANOS": {
      appearance: "Dios vinculado a la Guild y a los rituales que sostienen el orden de Orario. Los detalles físicos deben cotejarse con la referencia de la continuidad elegida antes de usarlos como evidencia visual.",
      history: "Permanece en la sede de la Guild y realiza una función ritual relacionada con el Dungeon. Su papel y sus decisiones se comprenden mejor a la luz de los secretos institucionales y de los acontecimientos de las novelas; evitar revelar esos datos sin aviso de spoiler.",
      personality: "Reservado, solemne y orientado a mantener el equilibrio de Orario. Sus acciones no deben reducirse a pasividad: su posición implica responsabilidades y decisiones cuyos motivos requieren contexto narrativo.",
      abilities: "No asignarle nivel de aventurero. Su función está asociada a un ritual divino y a la estructura de la Guild; cualquier efecto concreto debe quedar vinculado a una fuente narrativa verificable.",
      relationships: "La Guild constituye el marco institucional de su actuación. Los vínculos con otros dioses, la Guild y las amenazas del Dungeon deben separarse de las inferencias que solo surgen al conocer revelaciones posteriores.",
      conflict: "La tensión central enfrenta la preservación del orden con la necesidad de responder a amenazas que no pueden resolverse mediante procedimientos ordinarios. Los motivos ocultos requieren evidencia antes de clasificarse como hechos.",
      sources: ["https://danmachi.fandom.com/es/wiki/Ouranos", "https://danmachi.fandom.com/wiki/Ouranos"]
    },
    "CHAR-ASFI-AL-ANDROMEDA": {
      appearance: "Humana de cabello oscuro, asociada con la Familia Hermes y con el uso de equipo de apoyo para las expediciones. Los detalles específicos de atuendo deben confirmarse en la referencia visual de la adaptación.",
      history: "Es una aventurera y creadora de objetos mágicos que cumple funciones importantes para Hermes y sus compañeros. Su conocimiento técnico y su participación en operaciones de apoyo la hacen relevante más allá de su capacidad de combate.",
      personality: "Práctica, competente y poco impresionada por la teatralidad de Hermes. Tiende a valorar la preparación y la utilidad concreta; no debe confundirse su actitud profesional con ausencia de afecto o lealtad.",
      abilities: "Su perfil se asocia con la creación y utilización de objetos mágicos y con habilidades de aventurera. Los nombres, límites y costes de cada objeto o habilidad deben documentarse por separado; no inferir una lista completa a partir de su oficio.",
      relationships: "Trabaja estrechamente con Hermes y presta apoyo a operaciones que requieren planificación y equipo. La colaboración funcional no demuestra automáticamente intimidad personal con todos los integrantes de la Familia.",
      conflict: "Debe equilibrar la preparación metódica con encargos de Hermes que pueden ser impredecibles. Su competencia puede justificar que actúe con calma bajo presión, sin convertirla en infalible.",
      sources: ["https://danmachi.fandom.com/es/wiki/Asfi_Al_Andromeda", "https://danmachi.fandom.com/wiki/Asfi_Al_Andromeda"]
    },
    "CHAR-KASHIMA-OUKA": {
      appearance: "Aventurero humano de la Familia Takemikazuchi. Para detalles de aspecto y equipo, usar la ficha visual de la adaptación correspondiente y no mezclar diseños entre continuidades.",
      history: "Forma parte de la Familia Takemikazuchi y participa en las actividades de sus compañeros en Orario. Su trayectoria debe ordenarse según los acontecimientos de las novelas y la adaptación; no asumir que el orden del anime cubre todos sus matices.",
      personality: "Se muestra como un compañero con sentido de responsabilidad y una relación estrecha con su grupo. Las afirmaciones más específicas sobre temperamento, miedos o evolución deben sostenerse con escenas localizables.",
      abilities: "Es un aventurero cuyo nivel y capacidades deben registrarse con fecha narrativa. No añadir técnicas, estadísticas o habilidades especiales sin una referencia concreta.",
      relationships: "Está vinculado a Takemikazuchi y a los miembros de su Familia, incluidos Mikoto y Chigusa. Cada relación debe indicar el motivo del vínculo y el momento en que se establece.",
      conflict: "Su papel debe evaluarse a través de decisiones y escenas concretas, no a partir de una etiqueta genérica de compañero leal. La información que no esté localizada queda como pendiente de verificación.",
      sources: ["https://danmachi.fandom.com/es/wiki/Kashima_Ouka", "https://danmachi.fandom.com/wiki/Takemikazuchi_Familia"]
    },
    "CHAR-HITACHI-CHIGUSA": {
      appearance: "Aventurera humana de la Familia Takemikazuchi. Los rasgos físicos concretos deben comprobarse con la ficha de personaje de la adaptación o con una descripción localizada en las novelas.",
      history: "Forma parte de la Familia Takemikazuchi y mantiene vínculos con Mikoto y los demás miembros. Su historia está relacionada con las actividades de la Familia y con las expediciones en las que participa.",
      personality: "Su caracterización debe apoyarse en sus acciones y diálogos, evitando convertir una impresión breve en un rasgo permanente. La timidez, el valor o la preocupación pueden variar según el contexto sin constituir por sí mismos contradicciones.",
      abilities: "Las capacidades de combate y apoyo deben registrarse con la continuidad y etapa en que se observan. No atribuir magia, nivel ni habilidades no confirmadas.",
      relationships: "Mikoto, Ouka y Takemikazuchi son referencias importantes para situarla dentro de su Familia. La ficha final debe explicar qué escenas sustentan cada relación.",
      conflict: "El expediente debe diferenciar hechos narrados de interpretaciones sobre su personalidad. Los detalles todavía no localizados se mantienen como pendientes, no como canon confirmado.",
      sources: ["https://danmachi.fandom.com/es/wiki/Hitachi_Chigusa", "https://danmachi.fandom.com/wiki/Takemikazuchi_Familia"]
    },
    "CHAR-TSUBAKI-COLBRANDE": {
      appearance: "Herrera enana y aventurera de la Familia Hephaistos, reconocible por su parche en el ojo y su presencia imponente. Los detalles del diseño deben vincularse a la adaptación utilizada.",
      history: "Dirige la sucursal de la forja de Hephaistos en Orario y destaca como artesana de primer nivel. Su papel combina la producción de equipo con la experiencia práctica de una aventurera, por lo que no debe tratarse únicamente como personaje de taller.",
      personality: "Directa, enérgica y orgullosa de su oficio. Evalúa a las personas por su trabajo y determinación; su franqueza puede parecer intimidante, pero no implica que sea incapaz de respetar a otros.",
      abilities: "Su principal especialidad es la herrería y la fabricación de equipo de alta calidad. Las armas concretas, materiales, límites y resultados deben enlazarse con fuentes específicas, sin asumir que todo objeto asociado a su taller fue fabricado personalmente por ella.",
      relationships: "Está vinculada a Hephaistos y a la red de herreros de Orario. Sus interacciones con Welf y otros aventureros deben describirse según las escenas documentadas, distinguiendo relación profesional de amistad.",
      conflict: "Su orgullo artesanal exige equilibrar calidad, recursos y necesidades de quienes dependen de su equipo. La ficha debe mostrar su criterio profesional y no limitarla a una lista de armas.",
      sources: ["https://danmachi.fandom.com/es/wiki/Tsubaki_Colbrande", "https://danmachi.fandom.com/wiki/Hephaistos_Familia"]
    },
    "CHAR-DORMUL-BOLSTER": {
      appearance: "Enano aventurero de la Familia Ganesha. La descripción visual exacta debe cotejarse con el material de referencia de la adaptación.",
      history: "Participa en las actividades de la Familia Ganesha y en la vida aventurera de Orario. La ficha debe ampliar su trayectoria a partir de escenas y volúmenes localizados, sin rellenar los periodos no documentados con conjeturas.",
      personality: "Los rasgos individuales deben apoyarse en diálogos y decisiones observables. No asignar automáticamente una personalidad estereotípica por su especie o por pertenecer a una Familia concreta.",
      abilities: "Su nivel, estilo de combate y capacidades deben registrarse por etapa narrativa con referencias concretas. No añadir técnicas o estadísticas por analogía con otros enanos.",
      relationships: "Su pertenencia a Ganesha Familia establece un vínculo institucional; las relaciones personales necesitan evidencia adicional y una explicación del contexto.",
      conflict: "La prioridad es distinguir su participación confirmada en la historia de los detalles aún no investigados. La ausencia de información no debe convertirse en una debilidad inventada.",
      sources: ["https://danmachi.fandom.com/es/wiki/Dormul_Bolster", "https://danmachi.fandom.com/wiki/Ganesha_Familia"]
    },
    "CHAR-LUVIS-LILIX": {
      appearance: "Elfo aventurero vinculado a la Familia Ganesha. Los rasgos físicos específicos deben verificarse con el material visual o textual de referencia.",
      history: "Figura entre los miembros registrados de la Familia Ganesha. Para completar su historia hace falta identificar los episodios y volúmenes en que aparece; no atribuirle una biografía extensa que las fuentes consultadas no sostienen.",
      personality: "No se deben convertir datos escasos en una personalidad cerrada. Los rasgos se incorporarán cuando existan escenas localizables, manteniendo separados los hechos y las inferencias.",
      abilities: "Nivel, magia, habilidades y especialidad de combate permanecen sin confirmar en este expediente hasta localizar evidencia específica.",
      relationships: "La afiliación a Ganesha Familia es un vínculo confirmado por el registro; cualquier amistad, rivalidad o parentesco requiere respaldo independiente.",
      conflict: "Su principal brecha documental es la falta de una síntesis basada en escenas verificables. El sistema debe mostrar 'sin verificar' en los campos no investigados.",
      sources: ["https://danmachi.fandom.com/es/wiki/Luvis_Lilix", "https://danmachi.fandom.com/wiki/Ganesha_Familia"]
    },
    "CHAR-LULUNE-LOUIE": {
      appearance: "Miembro de la Familia Hermes y aventurera pallum. Los detalles visuales y el equipo deben contrastarse con la ficha de adaptación correspondiente.",
      history: "Participa en las actividades de la Familia Hermes y aparece vinculada a expediciones y operaciones de sus compañeros. Su cronología y contribuciones específicas deben ampliarse a partir de referencias localizables.",
      personality: "La ficha debe reflejar sus acciones observadas sin atribuirle rasgos por defecto debido a su especie o afiliación. Los detalles no corroborados deben permanecer abiertos.",
      abilities: "Registrar únicamente nivel, habilidades y funciones de apoyo confirmados en la etapa correspondiente. No inferir capacidades por el papel general de la Familia Hermes.",
      relationships: "Su afiliación la conecta con Hermes y con otros miembros de su grupo. Los vínculos personales deben incluir la razón y el contexto narrativo, no solo nombres asociados.",
      conflict: "La información disponible necesita una revisión de escenas para evitar que una ficha breve se presente como biografía completa. Mantener explícita la incertidumbre.",
      sources: ["https://danmachi.fandom.com/es/wiki/Lulune_Louie", "https://danmachi.fandom.com/wiki/Hermes_Familia"]
    },
    "CHAR-ALLEN-FROMEL": {
      "appearance": "Hombre felino de la Freya Familia, reconocible por sus rasgos de gato y su equipo de aventurero. Para detalles finos de vestimenta, usar el retrato oficial de la adaptación elegida.",
      "history": "Allen Fromel pertenece al núcleo de combatientes de la Freya Familia y actúa como uno de sus ejecutores más peligrosos. Su trayectoria está estrechamente ligada a la estructura interna de esa Familia y a los acontecimientos del arco de Freya. La cronología exacta de sus decisiones debe mostrarse con avisos de spoiler y distinguir los hechos de novela de los resúmenes de adaptación.",
      "personality": "Arisco, orgulloso y agresivo en el trato; su conducta puede ser hostil incluso con aliados. Esa aspereza no debe interpretarse como prueba de que carezca de lealtad o de motivos propios: las escenas concretas y el contexto de su pasado importan para entender sus decisiones.",
      "abilities": "Es un aventurero de primera línea de gran velocidad y peligro en combate. Registrar nivel, habilidades y técnicas por etapa narrativa; no inferir que todos sus atributos o capacidades permanecen iguales durante toda la historia.",
      "relationships": "Su vínculo principal es con Freya y con los ejecutivos de la Freya Familia. La cercanía institucional no demuestra por sí sola amistad con cada miembro; los vínculos individuales deben enlazarse a escenas o fuentes.",
      "conflict": "Su hostilidad y su orgullo pueden chocar con la cooperación que exige una Familia poderosa. El verificador narrativo no debe prohibir una escena vulnerable o amable si no contradice una acción o un hecho documentado.",
      "sources": [
        "https://danmachi.com/danmachi5/character/",
        "https://danmachi.fandom.com/wiki/Allen_Fromel"
      ]
    },
    "CHAR-GULLIVER-BROTHERS": {
      "appearance": "Cuatro hermanos pallum que funcionan como una unidad de combate dentro de la Freya Familia. Conviene mostrar la imagen de grupo oficial y no fusionar sus identidades individuales cuando la escena requiera distinguirlos.",
      "history": "Los Gulliver Brothers son miembros de la Freya Familia conocidos por actuar coordinadamente. Su condición de hermanos y su trabajo en conjunto son datos centrales; las biografías individuales y el reparto exacto de acciones deben permanecer separados cuando las fuentes no los atribuyan con claridad a uno de ellos.",
      "personality": "Su caracterización pública enfatiza la coordinación fraternal y la eficacia grupal. No atribuir automáticamente a cada hermano una personalidad idéntica ni inventar diferencias individuales sin evidencia.",
      "abilities": "Su principal rasgo de combate es la cooperación entre los cuatro, que les permite funcionar como una unidad táctica. Las técnicas específicas, límites y datos individuales deben verificarse por separado antes de incorporarse a escenas o reglas del generador.",
      "relationships": "La relación fraternal es explícita y su afiliación los conecta con Freya. Otros vínculos personales deben llevar evidencia independiente, no derivarse únicamente de pertenecer a la misma Familia.",
      "conflict": "El trabajo en equipo es una fortaleza, pero la narración debe conservar la identidad de cada hermano y explicar qué aporta cada uno. Si la fuente no individualiza un dato, debe registrarse como colectivo o pendiente.",
      "sources": [
        "https://danmachi.com/danmachi5/character/",
        "https://danmachi.fandom.com/wiki/Gulliver_Brothers"
      ]
    },
    "CHAR-HORN": {
      "appearance": "Mujer vinculada a la Freya Familia y a la identidad pública de Syr. Los retratos y la presentación visual deben seguir la continuidad elegida; la ficha debe advertir que su expediente contiene spoilers importantes.",
      "history": "Horn está ligada a Freya y a la historia de Syr Flova. Su papel se entiende a través de la relación entre identidad, sustitución y los acuerdos que rodean a Freya; no debe resumirse como si fuera simplemente otra camarera de Hostess of Fertility. Mostrar los detalles de su pasado detrás de una advertencia de spoiler.",
      "personality": "Su conducta está atravesada por el deber hacia Freya y por emociones que no siempre coinciden con ese deber. Evitar reducirla a una sola etiqueta moral: las motivaciones deben explicarse mediante acontecimientos y decisiones concretas.",
      "abilities": "Su vínculo con Freya incluye capacidades y consecuencias que requieren referencia narrativa específica. No trasladar automáticamente a Horn las habilidades de Freya ni atribuir poderes no documentados.",
      "relationships": "Freya es la relación central de su expediente; Syr es una identidad y un vínculo narrativo inseparable de los acontecimientos que la implican. La relación con Bell debe describirse según la etapa y con aviso de spoiler.",
      "conflict": "La tensión entre lealtad, identidad y voluntad propia es esencial. El verificador debe considerar el contexto de las revelaciones y no etiquetar como contradicción una reacción emocional nueva por no aparecer en un resumen.",
      "sources": [
        "https://danmachi.com/danmachi5/character/",
        "https://danmachi.fandom.com/wiki/Horn"
      ]
    },
    "CHAR-HEITH-VELVET": {
      "appearance": "Mujer elfa asociada a la Freya Familia, con presencia de sanadora y atuendo propio de su función. Los detalles visuales deben seguir la referencia oficial de la adaptación en uso.",
      "history": "Heith Velvet forma parte de la Freya Familia y es reconocida por su función de apoyo médico. Su papel cobra relevancia cuando las consecuencias de los enfrentamientos requieren atención y recuperación; los detalles de sus apariciones deben ordenarse por volumen o adaptación.",
      "personality": "Su perfil se debe leer a través de su trabajo de sanadora y sus interacciones documentadas. No asumir que una persona compasiva carece de dureza, ni atribuirle un temperamento completo a partir de una sola escena.",
      "abilities": "Se asocia con magia y conocimientos de curación. Registrar nombres, alcance y límites de las técnicas solo cuando haya evidencia concreta; no equiparar automáticamente su capacidad a la de otros sanadores.",
      "relationships": "Su afiliación a Freya Familia define el contexto profesional y social. Las relaciones con Freya, Allen y los demás ejecutivos deben describirse individualmente cuando exista respaldo narrativo.",
      "conflict": "La responsabilidad de curar puede entrar en tensión con las órdenes y los objetivos de una Familia de combate. La ficha debe separar la función confirmada de las interpretaciones sobre sus convicciones.",
      "sources": [
        "https://danmachi.com/danmachi5/character/",
        "https://danmachi.fandom.com/wiki/Heith_Velvet"
      ]
    },
    "CHAR-VAN-FREYA": {
      "appearance": "Aventurero pallum de la Freya Familia. Para los rasgos visuales concretos, usar el retrato oficial de la continuidad seleccionada.",
      "history": "Van pertenece a la Freya Familia y figura entre sus miembros registrados. La ficha de adaptación ofrece una referencia de su identidad y afiliación, pero una biografía completa requiere localizar sus acciones en las novelas y distinguirlas de los datos del roster.",
      "personality": "No convertir la afiliación a Freya en una personalidad predeterminada. Añadir rasgos estables únicamente cuando puedan apoyarse en diálogos o decisiones localizables.",
      "abilities": "El nivel, las habilidades y la especialidad de combate deben registrarse por etapa narrativa y con evidencia. No inferir técnicas a partir de la especie pallum o del rango de la Familia.",
      "relationships": "Su pertenencia a Freya Familia es el vínculo institucional confirmado. Amistades, rivalidades y lealtades personales requieren referencias independientes.",
      "conflict": "La brecha principal es documental: antes de asignarle motivaciones específicas, deben identificarse escenas que las sostengan. El contenido ausente debe aparecer como pendiente, no como debilidad inventada.",
      "sources": [
        "https://danmachi.com/danmachi5/character/",
        "https://danmachi.fandom.com/wiki/Van"
      ]
    },
    "CHAR-LUNOIRE-FAUST": {
      "appearance": "Chienthrope de aspecto canino que trabaja en Hostess of Fertility. El diseño y el uniforme deben seguir la ficha oficial de Sword Oratoria.",
      "history": "Lunoire Faust trabaja como camarera en Hostess of Fertility y forma parte del entorno cotidiano de la taberna. Su presencia la conecta con Mia Grand y con las demás empleadas, pero su trabajo civil no debe confundirse con una ficha de combate ni con una biografía exhaustiva.",
      "personality": "El registro debe basarse en las interacciones mostradas. La afiliación laboral no basta para atribuirle rasgos de carácter; los cambios de humor o las respuestas distintas según el cliente no son contradicciones automáticas.",
      "abilities": "No atribuir nivel, magia o técnicas de combate sin una fuente específica. Su función de camarera y su especie son datos distintos de una hoja de habilidades.",
      "relationships": "Su vínculo confirmado es el trabajo en Hostess of Fertility. Las relaciones con Syr, Mia, Anya y Chloe deben explicarse por escenas compartidas, sin presumir intimidad solo por compartir lugar de trabajo.",
      "conflict": "La ficha debe evitar rellenar los vacíos de un personaje secundario con rasgos genéricos. Las escenas futuras pueden ampliar el expediente sin que los campos actualmente desconocidos se consideren errores.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/",
        "https://danmachi.fandom.com/wiki/Lunoire_Faust"
      ]
    },
    "CHAR-DIONYSUS": {
      "appearance": "Dios que aparece en la continuidad de Sword Oratoria. Su aspecto y atuendo deben corresponder al material visual de esa adaptación, no a diseños externos o interpretaciones mitológicas.",
      "history": "Dionysus dirige una Familia y participa en los acontecimientos de Sword Oratoria que rodean a Filvis y a los incidentes del Dungeon. La lectura de su historia depende de revelaciones posteriores; cualquier resumen de su papel debe indicar el nivel de spoiler y diferenciar apariencia pública de hechos revelados.",
      "personality": "Se presenta con modales sociables y una actitud que puede parecer razonable, pero la evaluación de sus motivos requiere atender a los acontecimientos completos. No convertir una primera impresión en una conclusión definitiva ni omitir las revelaciones que cambian su interpretación.",
      "abilities": "Como dios, no tiene nivel de aventurero ni estadísticas de Falna. Las capacidades, recursos o medios asociados a su plan deben describirse únicamente con referencias concretas y sin trasladarle habilidades de otros dioses.",
      "relationships": "Filvis Chalia es una relación central para comprender su papel. Su Familia y los integrantes de Loki Familia quedan vinculados a los acontecimientos de Sword Oratoria; el expediente debe especificar cuándo una relación es pública y cuándo depende de una revelación.",
      "conflict": "La distancia entre la imagen pública y los motivos revelados es parte del conflicto narrativo. El corrector debe usar hechos y fuentes, no una etiqueta de 'bueno' o 'malo' para decidir qué reacciones puede tener.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/",
        "https://danmachi.fandom.com/wiki/Dionysus"
      ]
    },
    "CHAR-REVIS": {
      "appearance": "Figura humanoide vinculada a los acontecimientos del Dungeon y al conflicto de Sword Oratoria. No fijar detalles visuales más específicos que los respaldados por la referencia de la continuidad.",
      "history": "Revis es una antagonista relevante en Sword Oratoria y participa en los acontecimientos relacionados con los planes que amenazan Orario. Su identidad, acciones y relación con los monstruos requieren aviso de spoiler y una cronología basada en las novelas, porque los resúmenes breves pueden ocultar revelaciones importantes.",
      "personality": "Determinada, hostil y orientada a sus objetivos, aunque sus motivos no deben reducirse a una simple maldad sin contexto. Describir su conducta a partir de decisiones verificables y separar motivación explícita de interpretación.",
      "abilities": "Es una combatiente peligrosa en el conflicto de Sword Oratoria. Sus capacidades concretas, transformaciones o ventajas deben registrarse por separado con referencias, sin inventar estadísticas o reglas a partir de su papel de antagonista.",
      "relationships": "Sus vínculos principales se explican mediante los acontecimientos de Sword Oratoria y los personajes que se enfrentan a ella. No inferir una relación personal a partir de una mera coincidencia en el mismo conflicto.",
      "conflict": "La tensión entre sus objetivos y la supervivencia de otros personajes debe representarse mediante acciones y consecuencias. Los juicios de personalidad no sustituyen la evidencia narrativa.",
      "sources": [
        "https://danmachi.com/sword_oratoria/character/",
        "https://danmachi.fandom.com/wiki/Revis"
      ]
    },
    "CHAR-MARI-XENOS": {
      "appearance": "Sirena Xenos adaptada al entorno acuático. Su cuerpo y movilidad dependen del agua, por lo que no debe dibujarse o describirse como si se desplazara por tierra del mismo modo que un aventurero humano.",
      "history": "Mari aparece en los niveles inferiores del Dungeon y conoce a Bell durante los acontecimientos de DanMachi IV. La referencia de adaptación la identifica como sirena Xenos y la vincula a un entorno acuático. Los detalles más amplios de su historia deben seguir la continuidad y los pasajes donde aparece.",
      "personality": "Se apega a Bell después de conocerlo y manifiesta una actitud afectuosa. No ampliar esa relación a un romance definido ni atribuirle motivaciones complejas sin escenas que las sostengan.",
      "abilities": "Su adaptación acuática le permite desplazarse en el agua con eficacia. No asignar nivel de aventurera ni habilidades de Falna sin evidencia; sus capacidades biológicas no son equivalentes a una hoja de estado.",
      "relationships": "Bell es el vínculo personal más destacado en su aparición. Su condición de Xenos la conecta con el grupo de seres inteligentes del Dungeon, pero cada relación individual requiere evidencia adicional.",
      "conflict": "Su entorno y sus limitaciones de movilidad condicionan qué escenas resultan plausibles. El generador debe respetar esas condiciones físicas sin convertirlas en una prohibición absoluta de escenas nuevas que expliquen cómo se resuelve la dificultad.",
      "sources": [
        "https://danmachi.com/danmachi4/character/",
        "https://danmachi.fandom.com/wiki/Mari"
      ]
    },
    "CHAR-ISKA-BRA": {
      "appearance": "Amazoness y miembro histórica de Astrea Familia. Para la apariencia exacta, utilizar el retrato oficial de DanMachi IV y no completar rasgos ausentes por estereotipo.",
      "history": "El portal oficial de DanMachi IV la incluye entre las integrantes de Astrea Familia e identifica su especie como amazoness. El perfil consultado no desarrolla una biografía individual extensa, por lo que no se debe inventar su pasado, nivel o acciones durante la Era Oscura.",
      "personality": "No establecida por la ficha oficial consultada. Incorporar rasgos cuando se localicen diálogos o decisiones concretas en novelas, adaptaciones o materiales oficiales.",
      "abilities": "La ficha oficial consultada no detalla nivel, magia ni habilidades. Mantener esos campos como no verificados hasta obtener evidencia individual.",
      "relationships": "Su afiliación histórica a Astrea Familia está documentada. No deducir amistad íntima, parentesco o rivalidad con cada integrante por compartir Familia.",
      "conflict": "La falta de una biografía extensa es una brecha de investigación, no una invitación a rellenar la ficha con clichés. La interfaz debe indicar claramente qué se sabe y qué no.",
      "sources": [
        "https://danmachi.com/danmachi4/character/",
        "https://danmachi.fandom.com/es/wiki/Iska_Bra"
      ]
    },
    "CHAR-MARIYU-LEAGE": {
  "appearance": "El perfil oficial de DanMachi IV identifica a Mariyu Reage como humana y miembro de Astrea Familia. El extracto comunitario de personajes menores no proporciona detalle físico suficiente para fijar facciones, cabello, ojos, estatura o complexión.",
  "history": "La wiki reporta los nombres Maryuu Reage/Mariyu Reage y el epíteto Demi Virgo, así como apariciones retrospectivas en DanMachi volumen 14 y DanMachi IV, episodio 15. La misma fuente lista nivel 3–4 de forma ambigua; no fijar nivel canónico antes de identificar escena, edición y momento.",
  "personality": "La referencia comunitaria le atribuye una actitud fraternal hacia sus compañeras, fuerte rechazo de Evilus por el daño causado y voluntad de contraatacar. Esto sigue siendo una síntesis secundaria pendiente de contrastar con escenas de Astrea Record.",
  "abilities": "La wiki le atribuye Rea Vindemia (レア・ヴィンデミア), magia curativa de área amplia que cura heridas y recupera resistencia; también menciona el uso de una maza y la posibilidad de combatir en primera línea. Nombre, efecto, alcance, coste y limitaciones no están verificados en texto primario.",
  "relationships": "Su afiliación a Astrea Familia aparece en el perfil oficial de adaptación y el roster histórico se apoya en una referencia comunitaria. No se deben inferir amistades individuales ni una relación personal con Alise, Ryuu o Alfia sin una escena.",
  "conflict": "El resumen la presenta como curandera que también puede entrar en combate y desea responder a la violencia de Evilus. No tratar la función de curación como prohibición de combatir ni afirmar una técnica sin revisar Astrea Record revisado.",
  "sources": [
    "https://danmachi.com/danmachi4/character/",
    "https://danmachi.fandom.com/es/wiki/Mariyu_Leage",
    "https://danmachi.fandom.com/wiki/Minor_Characters",
    "https://danmachi.fandom.com/es/wiki/Magia",
    "https://danmachi.miraheze.org/wiki/Maryuu_Reage"
  ]
},
    "CHAR-NOIN-UNIC": {
      "appearance": "Humana e integrante histórica de Astrea Familia. Usar el retrato de DanMachi IV para la apariencia y evitar extrapolar detalles no visibles.",
      "history": "El perfil oficial de DanMachi IV identifica a Noin Unic como humana y la incluye en Astrea Familia. La fuente de adaptación no aporta una historia personal extensa, así que los acontecimientos específicos de su vida deben localizarse antes de incorporarse como hechos.",
      "personality": "No establecida por el perfil oficial consultado. Registrar únicamente rasgos apoyados en diálogos o acciones identificables; no inferir una personalidad completa a partir del grupo.",
      "abilities": "El perfil oficial consultado no especifica nivel, magia ni técnicas. Los campos permanecen pendientes de verificación.",
      "relationships": "Su afiliación a Astrea Familia está documentada. No se debe convertir la pertenencia al grupo en prueba de una amistad concreta o de un vínculo familiar.",
      "conflict": "La tarea pendiente es localizar evidencia individual y evitar que la escasez de información se convierta en invención. Las escenas originales pueden proponer rasgos nuevos si se marcan como creación y no como canon.",
      "sources": [
        "https://danmachi.com/danmachi4/character/",
        "https://danmachi.fandom.com/wiki/Noin_Unic"
      ]
    },
    "CHAR-NEZE-RANKETT": {
      "appearance": "Mujer lobo (werewolf) e integrante histórica de Astrea Familia. Los detalles de apariencia deben respetar el retrato oficial de DanMachi IV.",
      "history": "La ficha oficial la identifica como mujer lobo y miembro de Astrea Familia. No desarrolla una cronología individual extensa; los hechos de su vida durante la Era Oscura requieren referencias narrativas concretas y no deben inventarse a partir de su especie.",
      "personality": "No establecida por el perfil oficial consultado. Evitar atribuirle impulsividad, ferocidad o instintos específicos solo por ser una mujer lobo.",
      "abilities": "El perfil oficial no detalla nivel ni habilidades. Cualquier ventaja racial, magia o técnica debe documentarse por separado y con una fuente específica.",
      "relationships": "La afiliación a Astrea Familia es el vínculo confirmado. Las relaciones con las demás integrantes requieren escenas o referencias individuales.",
      "conflict": "La ficha necesita investigación adicional antes de poder describir una psicología o un historial de combate completos. La incertidumbre debe mantenerse visible en vez de ocultarse con frases genéricas.",
      "sources": [
        "https://danmachi.com/danmachi4/character/",
        "https://danmachi.fandom.com/wiki/Neze_Rankett"
      ]
    },
    "CHAR-ASTA-KNOX": {
      "appearance": "Enana e integrante histórica de Astrea Familia. Usar el retrato oficial de DanMachi IV y no añadir rasgos visuales que no aparezcan en la referencia.",
      "history": "El portal oficial de DanMachi IV identifica a Asta Knox como enana y la incluye en el roster de Astrea Familia. El perfil no ofrece una biografía extensa ni establece por sí solo sus hazañas o rango durante la Era Oscura.",
      "personality": "No establecida por el perfil oficial consultado. No inferir testarudez, dureza o destreza artesanal por su especie enana.",
      "abilities": "No detalladas por la fuente oficial consultada. Mantener sin confirmar nivel, magia, habilidades y especialidad de combate.",
      "relationships": "La afiliación histórica a Astrea Familia está documentada. Las relaciones personales necesitan pruebas individuales, no inferencias basadas en la composición del grupo.",
      "conflict": "La brecha actual es de documentación individual. Debe quedar como tarea de investigación y no como un vacío rellenado con estereotipos.",
      "sources": [
        "https://danmachi.com/danmachi4/character/",
        "https://danmachi.fandom.com/wiki/Asta_Knox"
      ]
    },
    "CHAR-RYANA-LIETZ": {
  "appearance": "El perfil oficial de adaptación la identifica como humana y miembro de Astrea Familia, pero no ofrece una descripción textual detallada para el expediente. La apariencia individual sigue sin verificarse; no completar rasgos a partir de estereotipos o un retrato.",
  "history": "La ficha oficial de DanMachi IV la incluye en Astrea Familia. Extractos de la wiki comunitaria de magia atribuyen a Ryana el hechizo de fuego Irivute y mencionan encantamiento simultáneo/ocultación del círculo mágico; se mantienen como pistas secundarias, no como una escena de Astrea Record cotejada.",
  "personality": "No hay evidencia primaria localizada suficiente para una caracterización individual. La afiliación a Astrea Familia no permite inferir automáticamente idealismo, temperamento, amistad o conducta táctica.",
  "abilities": "La wiki comunitaria relaciona a Ryana Lietz con Irivute (イリヴュート), clasificado como magia de fuego, y la incluye entre usuarias de encantamiento simultáneo y supresión/ocultación del círculo mágico. Efecto, potencia, coste, condiciones y límites requieren verificación textual.",
  "relationships": "La pertenencia a Astrea Familia está respaldada por el perfil de adaptación; su inclusión en un roster histórico procede de referencias secundarias. No se añaden vínculos personales sin una interacción identificable.",
  "conflict": "La prioridad es verificar la técnica atribuida y localizar menciones individuales en Astrea Record. Los campos no investigados deben seguir pendientes, sin que el generador convierta falta de datos en una limitación de personaje.",
  "sources": [
    "https://danmachi.com/danmachi4/character/",
    "https://danmachi.fandom.com/wiki/Ryana_Lietz",
    "https://danmachi.fandom.com/es/wiki/Magia",
    "https://danmachien.miraheze.org/wiki/Ryana_Lietz"
  ]
},
    "CHAR-CELTY-SROWA": {
      "appearance": "Elfa e integrante histórica de Astrea Familia. El diseño debe seguir el retrato oficial de DanMachi IV y no mezclar versiones visuales.",
      "history": "La ficha oficial de DanMachi IV identifica a Celty Srowa como elfa y la incluye entre las integrantes de Astrea Familia. El perfil no describe una biografía extensa, por lo que no deben inventarse sus acciones específicas ni su posición durante la Era Oscura.",
      "personality": "No establecida por el perfil oficial consultado. Evitar deducir orgullo, reserva o temperamento a partir de su especie élfica.",
      "abilities": "La fuente oficial consultada no detalla nivel, magia ni habilidades. Registrar esos campos como pendientes de verificación.",
      "relationships": "La pertenencia histórica a Astrea Familia está confirmada; no se atribuyen relaciones personales sin escenas o fuentes individuales.",
      "conflict": "Su expediente requiere investigación de fuentes primarias y secundarias identificables. La ausencia de datos debe mostrarse como tal, no como una contradicción ni como una limitación permanente del personaje.",
      "sources": [
        "https://danmachi.com/danmachi4/character/",
        "https://danmachi.fandom.com/wiki/Celty_Srowa"
      ]
    }
,
"CHAR-DARK-ZALD": {"appearance":"Humano; antiguo ejecutivo de Zeus Familia. El resumen secundario lo vincula con Behemoth y un deterioro progresivo.","history":"Zald se convierte en una prueba para la nueva generación; vol. 3 caps. 8–9 y extra «Zald» son rutas de lectura pendientes de página.","personality":"Orgulloso, combativo y moralmente ambiguo según fuentes secundarias; mantener la lectura provisional.","abilities":"Deus Ambrosia y mejoras al consumir criaturas son datos comunitarios por verificar; el veneno es un límite narrativo central.","relationships":"Zeus Familia; Ottar como contraparte del enfrentamiento final en los resúmenes secundarios. La afiliación a una Familia no prueba amistad íntima; cada vínculo requiere una interacción documentada en una fuente.","conflict":"Poder extraordinario contra degradación inevitable; héroe contra monstruo. Interpretación de trabajo para escribir; no es afirmación canónica hasta contrastarse con una escena primaria.","sources":["https://danmachi.fandom.com/es/wiki/Zald","https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_3"]},
"CHAR-METERIA": {
  "appearance": "Las fichas comunitarias describen a Meteria como humana de cabello blanco y ojos azules; comparan su aspecto con el de Bell salvo por los ojos y la presentan como físicamente débil por una enfermedad incurable. Apariencia, enfermedad y estado requieren cotejo textual/visual primario.",
  "history": "Las wikis identifican a Meteria como antigua integrante de Hera Familia, hermana gemela mayor de Alfia y madre de Bell; también la marcan como fallecida. Son spoilers mayores reportados por la comunidad, aún sin localizador primario incorporado. No se identifica al padre de Bell por inferencia.",
  "personality": "La wiki atribuye a Alfia descripciones de Meteria como amable, pura y siempre sonriente, y dice que tranquilizaba a los demás. Se conserva como atribución secundaria, no como perfil exhaustivo. Historias sobre comida, Hera o conversaciones de «qué pasaría si» deben separarse de cualquier escenario hipotético.",
  "abilities": "No hay en las fuentes registradas una habilidad mágica o de combate individual que pueda tratarse como confirmada. Mantener habilidades, nivel, oficio y especialidad desconocidos hasta encontrar un pasaje o perfil oficial fiable.",
  "relationships": "Los compendios comunitarios la describen como hermana gemela mayor de Alfia y madre de Bell, además de asociarla con Hera Familia y el afecto de Hera. El padre de Bell no se infiere; tampoco se presupone qué personajes conocen estos parentescos en cada periodo.",
  "conflict": "La fragilidad física y la valoración de la vida son temas descritos secundariamente. Parte de las anécdotas remite a una nota del autor que se asocia con un escenario hipotético de Alfia/Zald criando a Bell; no importar ese What If a CONT-MAIN-LN.",
  "sources": [
    "https://danmachi.fandom.com/wiki/Meteria",
    "https://danmachi.fandom.com/es/wiki/Meteria",
    "https://note.com/fujinoomori/n/n629829ac3fe4",
    "https://danmachien.miraheze.org/wiki/Meteria"
  ]
},
"CHAR-DARK-ALFIA": {"appearance":"Humana; antigua ejecutiva de Hera Familia, con una enfermedad incurable según fuentes secundarias. Descripción física aún provisional: verificar novela o ilustración oficial antes de fijar rasgos no documentados.","history":"Astrea Record vol. 3 caps. 8–9 e historia extra «Alfia» son rutas para comprobar enfermedad y confrontación.","personality":"Controlada y perspicaz, pero dura y autoritaria en resúmenes secundarios. La psicología debe contrastarse con decisiones y diálogos de escenas concretas antes de considerarla canónica.","abilities":"Magia potente y habilidad negativa ligada al deterioro; detalles de técnica y límites requieren página primaria.","relationships":"Meteria es descrita como su hermana gemela; AU/What If debe permanecer separado. La afiliación a una Familia no prueba amistad íntima; cada vínculo requiere una interacción documentada en una fuente.","conflict":"Talento contra enfermedad; culpa familiar y la decisión de asumir el papel de antagonista. Interpretación de trabajo para escribir; no es afirmación canónica hasta contrastarse con una escena primaria.","sources":["https://danmachi.fandom.com/wiki/Alfia","https://danmachi.fandom.com/es/wiki/Alfia/Habilidades"]},
"CHAR-DARK-EREBUS": {"appearance":"Deidad asociada con Evilus; las referencias la relacionan con el nombre Eren. Descripción física aún provisional: verificar novela o ilustración oficial antes de fijar rasgos no documentados.","history":"Vol. 1 cap. 2 «EREN» es el localizador inicial, aún por cotejar en la novela revisada. Faltan localizadores por volumen, capítulo y página; esta síntesis secundaria no sustituye leer el texto revisado.","personality":"Antagonista ideológico en interpretaciones secundarias; no atribuirle cada crimen de Evilus. La psicología debe contrastarse con decisiones y diálogos de escenas concretas antes de considerarla canónica.","abilities":"No asignar nivel de aventurero a una deidad; habilidades propias sin verificar. Nivel, magia y límites deben verificarse con la edición publicada; no completar por inferencia ni por material alternativo.","relationships":"Evilus y el debate sobre justicia con Ryuu/Alise; no presumir subordinación directa de cada facción.","conflict":"La definición del bien y el mal frente a una fuerza que se presenta como mal absoluto. Interpretación de trabajo para escribir; no es afirmación canónica hasta contrastarse con una escena primaria.","sources":["https://danmachi.fandom.com/wiki/Erebus","https://danmachi.fandom.com/es/wiki/Astrea_Record_Novela_Ligera_Volumen_1"]},
"CHAR-DARK-RUDRA": {
  "appearance": "La wiki española describe a Rudra con piel oscura, cabello corto, toga de tonos apagados, pantalones claros, calzado negro de punta levantada, pulsera blanca, aros, collar de cuentas rojas y sombra azul en los párpados. Es una descripción secundaria todavía no contrastada con ilustración/pasaje primario.",
  "history": "Los extractos comunitarios lo identifican como deidad y líder asociado a Rudra Familia/Evilus, con una aparición retrospectiva reportada en DanMachi volumen 14 y en DanMachi IV, episodio 20. El artículo de Rudra Familia sitúa una trampa y el incidente del Juggernaut alrededor de cinco años antes de Bell; la actuación de la Familia no demuestra que Rudra diera la orden o conociera todos los pasos.",
  "personality": "El resumen comunitario le atribuye la voluntad de extender caos y sufrimiento, poco apego aparente a sus seguidores y admiración por la represalia posterior de Ryuu. No basta para reconstruir sus motivaciones privadas ni para hacerle responsable personal de cada acto de Evilus.",
  "abilities": "La wiki le atribuye percepción divina de mentiras de mortales, aura de divinidad, Arcanum sellado al descender y un espejo divino que permite observar lugares del mundo inferior. Estas capacidades y sus límites son reportes comunitarios, pendientes de localizar en la novela; no son niveles ni habilidades de aventurero.",
  "relationships": "Rudra Familia y Evilus son afiliaciones reportadas. Jura Halmer aparece vinculado a Rudra Familia en el resumen del incidente del Juggernaut. Distinguir siempre el liderazgo organizativo de una decisión personal probada de Rudra.",
  "conflict": "La trampa atribuida a Rudra Familia termina creando una amenaza que la organización no controla, según la síntesis comunitaria. La responsabilidad individual de Rudra, su conocimiento y el momento exacto de su retorno al Cielo necesitan cotejo en DanMachi volumen 13/14.",
  "sources": [
    "https://danmachi.fandom.com/es/wiki/Rudra",
    "https://danmachi.fandom.com/wiki/Rudra_Familia",
    "https://danmachien.miraheze.org/wiki/Rudra"
  ]
},
"CHAR-DARK-JURA-HALMER": {"appearance":"Hombre-gato relacionado por fuentes secundarias con Rudra Familia. Descripción física aún provisional: verificar novela o ilustración oficial antes de fijar rasgos no documentados.","history":"Fase posterior, aprox. cinco años antes de Bell; DanMachi vol. 13 «Encounter and Vow». No es CONT-AR por defecto.","personality":"Manipulador y vengativo según resúmenes; la novela debe sostener rasgos con acciones. La psicología debe contrastarse con decisiones y diálogos de escenas concretas antes de considerarla canónica.","abilities":"Látigo y collares de control atribuidos por fuentes secundarias; mecanismo y límites pendientes. Nivel, magia y límites deben verificarse con la edición publicada; no completar por inferencia ni por material alternativo.","relationships":"Rudra Familia y el conflicto con Ryuu; supervivencia no implica alianza ni consentimiento. La afiliación a una Familia no prueba amistad íntima; cada vínculo requiere una interacción documentada en una fuente.","conflict":"Manipulación del Dungeon y las consecuencias de una apuesta extrema. Interpretación de trabajo para escribir; no es afirmación canónica hasta contrastarse con una escena primaria.","sources":["https://danmachi.fandom.com/wiki/Jura_Halmer","https://danmachi.fandom.com/es/wiki/Jura_Halmer"]},
"CHAR-DARK-VITO": {"appearance":"Humano que algunas referencias llaman «Sin Rostro», asociado con Evilus. Descripción física aún provisional: verificar novela o ilustración oficial antes de fijar rasgos no documentados.","history":"Vol. 1: secuencia Zald–Vito; capítulo y página exactos pendientes. Faltan localizadores por volumen, capítulo y página; esta síntesis secundaria no sustituye leer el texto revisado.","personality":"Sufrimiento y resentimiento son pistas secundarias, no explicación que absuelve sus actos. La psicología debe contrastarse con decisiones y diálogos de escenas concretas antes de considerarla canónica.","abilities":"Nivel/condición física mencionados por wikis deben comprobarse en la novela revisada. Nivel, magia y límites deben verificarse con la edición publicada; no completar por inferencia ni por material alternativo.","relationships":"La conversación con Zald es la ruta principal; no importar afiliaciones marcadas como no canónicas. La afiliación a una Familia no prueba amistad íntima; cada vínculo requiere una interacción documentada en una fuente.","conflict":"Cómo el sufrimiento puede explicar la radicalización sin justificar el daño. Interpretación de trabajo para escribir; no es afirmación canónica hasta contrastarse con una escena primaria.","sources":["https://danmachi.fandom.com/es/wiki/Vito","https://danmachi.fandom.com/wiki/DanMachi_~Memoria_Freese~/Astraea_Record"]},
"CHAR-DARK-OLIVAS-ACT": {
  "appearance": "El extracto de la wiki comunitaria lo describe con cabello blanco largo, ojos amarillo verdosos, atuendo de combate blanco y máscara con forma de cráneo; también reporta coloración amarillo verdosa desde la cintura hacia abajo. Es una descripción secundaria, pendiente de cotejo con la novela/ilustraciones.",
  "history": "La wiki lo sitúa en Sword Oratoria, volumen 3, y le atribuye relación con Evilus/Enyo y participación en la llamada Pesadilla del piso 27. La misma fuente reporta los alias Vendetta y Fanatic, nivel 3 y apariciones en manga/episodio. Estos puntos sirven para localizar escenas; no confirman participación en el núcleo de Astrea Record.",
  "personality": "La ficha comunitaria lo caracteriza como cruel/sádico, fanático tras una resurrección y excesivamente confiado al evaluar rivales; también afirma que conocía a aventureros por sus alias. Son valoraciones secundarias de Sword Oratoria, no un diagnóstico ni rasgos garantizados en otras etapas.",
  "abilities": "La wiki lo describe como criatura capaz de fortalecerse al consumir piedras mágicas, con un coste corporal/consumo muy alto, y sostiene que superó su fuerza anterior. Mecanismo, límites, nivel por periodo y efectos exactos están pendientes de cotejo en Sword Oratoria, volumen 3.",
  "relationships": "Las fuentes secundarias lo vinculan con Evilus/Enyo y con la Pesadilla del piso 27. No hay evidencia directa incorporada de una relación personal con Alise o Ryuu en el periodo central de Astrea Record; la pertenencia a una red no implica amistad o interacción directa.",
  "conflict": "El relato comunitario asocia poder obtenido mediante consumo de piedras mágicas, fanatismo y violencia contra aventureros. El rol exacto de Olivas, sus límites y la cadena de responsabilidad deben extraerse de escenas de Sword Oratoria, sin trasladar estos hechos a CONT-AR.",
  "sources": [
    "https://danmachi.fandom.com/wiki/Olivas_Act",
    "https://danmachi.fandom.com/wiki/Sword_Oratoria_Light_Novel_Volume_3/Synopsis",
    "https://danmachien.miraheze.org/wiki/Olivas_Act"
  ]
},
"CHAR-DARK-ARDEE-VARMA": {"appearance":"Integrante de Ganesha Familia según la presentación oficial de Square Enix; no pertenece a Astrea Familia.","history":"Página oficial del manga para afiliación y relación con Ryuu; novela ligera aún por localizar. Faltan localizadores por volumen, capítulo y página; esta síntesis secundaria no sustituye leer el texto revisado.","personality":"La adaptación oficial la describe como luminosa y con fuerte sentido de justicia. La psicología debe contrastarse con decisiones y diálogos de escenas concretas antes de considerarla canónica.","abilities":"El perfil oficial no especifica nivel, magia o técnica. Nivel, magia y límites deben verificarse con la edición publicada; no completar por inferencia ni por material alternativo.","relationships":"Ryuu es el vínculo declarado por la página oficial; Ganesha Familia es su afiliación. La afiliación a una Familia no prueba amistad íntima; cada vínculo requiere una interacción documentada en una fuente.","conflict":"Justicia compartida por personas de Familias distintas bajo la violencia de la Era Oscura. Interpretación de trabajo para escribir; no es afirmación canónica hasta contrastarse con una escena primaria.","sources":["https://magazine.jp.square-enix.com/biggangan/introduction/danmachi_astrea/","https://danmachi.com/news/news131.php"]},
    "CHAR-SOMA": {
      appearance: "La fuente comunitaria presenta a Soma como una deidad cuyo aspecto individual debe describirse desde las ilustraciones o el texto de la obra, todavía no cotejados en esta ficha. No se fijan color de ojos, vestimenta ni rasgos físicos por memoria.",
      history: "Soma aparece como patrono de Soma Familia y como deidad dedicada a la elaboración de bebidas. El compendio secundario describe una etapa de alejamiento respecto de la gestión de sus seguidores, seguida por su implicación en la crisis y reforma de la Familia; la secuencia requiere verificación en el texto de la novela.",
      personality: "La dedicación obsesiva a su elaboración y el distanciamiento de sus seguidores son rasgos de conducta resumidos por una fuente comunitaria. No constituyen un diagnóstico ni una personalidad inmutable: la fuente también refiere una reacción posterior, cuyo alcance y motivos deben comprobarse en escenas originales.",
      abilities: "No se asignan habilidades de combate, nivel o técnica Falna a Soma. La información recogida se refiere a su condición divina, a la elaboración de bebidas y a su autoridad sobre la Familia; los límites concretos de sus poderes no forman parte de la evidencia disponible.",
      relationships: "Soma es la deidad patrona de la organización Soma Familia. Liliruca Arde aparece vinculada a esa Familia antes de pasar a Hestia; Zanis Lustra y Chandra Ihit ocupan estados de capitanía descritos como sucesivos por fuentes secundarias. Estos roles no implican por sí solos amistad o intimidad.",
      conflict: "El problema narrativo reportado contrapone la pasión de Soma por elaborar una bebida con la responsabilidad de atender a sus seguidores. La resolución suele resumirse como una reforma de la Familia, pero su permanencia, causas y consecuencias deben validarse con el texto original, no ampliarse mediante conjeturas.",
      sources: ["https://danmachi.fandom.com/wiki/Soma", "https://danmachi.fandom.com/wiki/Soma_Familia", "https://ga.sbcr.jp/product/9784797380583/"]
    },
    "CHAR-ZANIS-LUSTRA": {
      appearance: "La ficha comunitaria lo describe como hombre humano de rostro delgado y gafas. Esta descripción se conserva como referencia secundaria y no como verificación visual de una ilustración o descripción de la novela; la apariencia canónica requiere un localizador primario.",
      history: "Zanis Lustra es identificado por una fuente comunitaria como antiguo capitán de Soma Familia y alias Gandharva. Las mismas páginas relatan una etapa de control abusivo y su pérdida posterior del cargo. No se asignan fechas, capítulos o páginas exactas sin revisar el volumen correspondiente.",
      personality: "Los resúmenes secundarios lo califican como codicioso y manipulador por su conducta hacia otros miembros. Estas palabras resumen acciones reportadas, no una evaluación exhaustiva de cada motivación. La ficha distingue la acusación de un personaje de los hechos que la narración efectivamente demuestra.",
      abilities: "La wiki comunitaria le asigna nivel 2, dato pendiente de confirmar en el texto primario. No se le inventan magia, habilidades, arma, estilo de combate o estadísticas detalladas; el puesto anterior de capitán no basta para inferirlos.",
      relationships: "Soma es su deidad patrona; Chandra Ihit aparece como capitán posterior en referencias comunitarias. Liliruca está involucrada en el conflicto sobre la salida de Soma Familia y en una acusación secundaria relacionada con Canoe. La acusación no prueba responsabilidad de Lili.",
      conflict: "El conflicto documentado por la fuente secundaria gira en torno al uso de autoridad, beneficios económicos y control de los miembros. La caída de Zanis y el castigo que algunas referencias mencionan son spoilers cuya secuencia y condiciones deben cotejarse con la novela.",
      sources: ["https://danmachi.fandom.com/wiki/Zanis_Lustra", "https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_6/Synopsis"]
    },
    "CHAR-CHANDRA-IHIT": {
      appearance: "La referencia comunitaria identifica a Chandra como un enano masculino. No contiene información suficiente para describir de forma segura estatura, ropa, rasgos faciales u otros detalles; esos elementos se dejan pendientes en lugar de completarse con una ilustración no examinada.",
      history: "Chandra Ihit aparece en el compendio comunitario como capitán de Soma Familia tras la etapa de Zanis. La misma fuente le atribuye oposición a las prácticas de Zanis y ayuda a Liliruca. El rol se usa como pista de investigación; falta localizar la escena en la novela.",
      personality: "La fuente comunitaria le atribuye desaprobación hacia Zanis e interés por el alcohol. Esto sugiere una diferencia de conducta respecto del antiguo capitán, pero no alcanza para convertirlo en un retrato psicológico completo ni para determinar cómo actúa en situaciones no descritas.",
      abilities: "El compendio le asigna nivel 2, aún pendiente de confirmar por fuente primaria. No hay aquí datos suficientes para afirmar técnicas, hechizos, armas, estadísticas o límites de combate. La especie enana y el cargo de capitán no son evidencia de una habilidad específica.",
      relationships: "Soma es la deidad de la Familia; Zanis es el antiguo capitán con quien se lo contrasta en las fuentes secundarias. La intervención de Chandra en la huida de Lili se mantiene como afirmación secundaria pendiente de escena primaria, sin inventar una relación privada entre ambos.",
      conflict: "Chandra se sitúa dentro de un cambio de liderazgo y de la reconstrucción de la Familia tras el conflicto descrito por wikis. Su responsabilidad exacta, sus motivaciones y la duración del nuevo orden se deben confirmar en el texto; no asumir que el cambio de capitán resuelve de inmediato todos los abusos.",
      sources: ["https://danmachi.fandom.com/wiki/Chandra_Ihit", "https://danmachi.fandom.com/wiki/Soma_Familia"]
    },
    "CHAR-CANOE-BELWAY": {
      appearance: "Una fuente secundaria lo lista como beast-person de tipo mapache, pero la apariencia física individual no se ha cotejado con arte oficial o prosa de novela. Este descriptor mínimo es una pista procedente del compendio, no una reconstrucción visual completa.",
      history: "Canoe Belway figura en una lista comunitaria como antiguo miembro de Soma Familia, con estado de ausencia/fallecimiento reportado. Un resumen secundario del volumen 6 refiere que Zanis acusa a Lili por la desaparición de Canoe. La acusación no permite establecer por sí misma qué ocurrió ni quién sería responsable.",
      personality: "No se dispone de escenas individuales suficientes para describir su personalidad, valores, miedos o conducta. No se inferirá carácter por su especie, por el hecho de estar ausente ni por las palabras de otro personaje acerca de su desaparición.",
      abilities: "No se fija nivel o capacidad especial. Cualquier detalle de combate o magia debe proceder de una escena o ficha primaria localizable; la pertenencia anterior a Soma Familia no demuestra rango ni poder.",
      relationships: "Su asociación organizativa reportada es Soma Familia. Zanis aparece ligado a una acusación sobre su desaparición, mientras que Lili es la persona señalada en ese reclamo. Esta relación representa el contenido del reclamo, no una afirmación de culpabilidad ni un vínculo íntimo.",
      conflict: "La incertidumbre sobre su destino es justamente el aspecto que debe preservarse. Las fuentes secundarias difieren en cómo describen ausencia y fallecimiento; sin un pasaje primario comprobado, WordWaifu no resolverá la discrepancia ni inventará causa, fecha o circunstancias.",
      sources: ["https://danmachi.fandom.com/wiki/Soma_Familia", "https://danmachi.fandom.com/wiki/Category:Soma_Familia", "https://danmachi.fandom.com/wiki/DanMachi_Light_Novel_Volume_6/Synopsis"]
    },
    "CHAR-TSUKINOKAMI-KAEDE": {
      appearance: "La lista comunitaria presenta a Tsukinokami Kaede como Hume Bunny, pero no se dispone de una descripción de apariencia individual comprobada con novela o ilustración oficial. No se infieren rasgos de vestimenta, cabello, edad o tamaño a partir del nombre o la especie.",
      history: "Kaede aparece en el roster comunitario de Soma Familia. No se ha localizado para esta tanda una acción individual, biografía ni intervalo exacto de pertenencia en la novela. Su inclusión en el catálogo tiene como propósito poder buscarla y enlazarla sin inventar el resto de su historia.",
      personality: "No hay conductas o decisiones individuales verificadas suficientes para resumir su personalidad. La ficha deja el apartado abierto de manera explícita y no transforma arquetipos asociados a su especie en rasgos canónicos.",
      abilities: "Nivel, magia, habilidades y estilo de combate: desconocidos en la evidencia disponible. No se infiere nivel a partir de la especie Hume Bunny ni de su supuesto roster actual.",
      relationships: "La única relación registrada por ahora es la pertenencia reportada a Soma Familia, bajo la deidad Soma. Esta afiliación organizativa no prueba amistad, rivalidad o cercanía con Lili, Chandra u otros miembros.",
      conflict: "No se ha establecido un conflicto individual. El problema editorial de esta ficha es una brecha de evidencia: encontrar la aparición original y determinar si el roster comunitario refleja su estado en el periodo que se esté consultando.",
      sources: ["https://danmachi.fandom.com/wiki/Category:Soma_Familia", "https://danmachi.fandom.com/wiki/Soma_Familia"]
    },
    "CHAR-SHINONOME-MOMIJI": {
      appearance: "El compendio comunitario la identifica como Renard y como miembro de Soma Familia; no se dispone de una descripción completa contrastada con novela o imagen oficial. No se añaden colores, ropa, edad ni rasgos físicos por asociación con un diseño típico.",
      history: "Shinonome Momiji aparece en el listado comunitario de la Familia, pero su biografía y escenas individuales no se han localizado para esta tanda. La ficha registra el nombre y el mínimo dato de roster como ayuda para recuperación posterior, no como historia narrativa completa.",
      personality: "La evidencia disponible no permite describir actitudes, temores, deseos o decisiones. Cualquier interpretación psicológica a partir de su especie o de su afiliación sería especulativa y queda fuera de la ficha.",
      abilities: "Nivel, habilidades, magia, arma y aptitud de combate no están confirmados por la evidencia consultada. No deducir poderes de su condición reportada de Renard.",
      relationships: "Soma es la deidad patrona de la Familia a la que el roster secundario la asocia. No se documentan todavía interacciones personales verificadas con Kaede, Coco, Lili o Chandra; la pertenencia compartida no es evidencia de amistad.",
      conflict: "No hay un conflicto individual establecido. La siguiente investigación debe buscar en el texto primario su aparición, periodo y acciones antes de extender esta ficha, y distinguir el roster del estado activo de la Familia en cualquier momento.",
      sources: ["https://danmachi.fandom.com/wiki/Category:Soma_Familia", "https://danmachi.fandom.com/wiki/Soma_Familia"]
    },
    "CHAR-COCO-COLLINS": {
      appearance: "Una lista comunitaria identifica a Coco Collins como Pallum vinculada a Soma Familia. No ofrece para esta ficha una descripción individual suficiente para afirmar apariencia, ropa, edad, color de cabello u otros elementos físicos.",
      history: "Coco Collins figura en la lista secundaria de Soma Familia. No se ha encontrado durante esta tanda un localizador de la novela que detalle su historia o una acción individual, por lo que no se inventan acontecimientos ni se presenta el roster como una biografía.",
      personality: "No existen conductas individuales documentadas en la evidencia reunida que permitan describir su personalidad. La ficha se niega a llenar el vacío con estereotipos sobre los Pallum o con rasgos deducidos de otros personajes.",
      abilities: "Nivel, capacidades, magia, arma y especialidad son desconocidos en esta ficha. No se presupone que tenga la misma función de supporter que Liliruca solo porque ambas son Pallum.",
      relationships: "El vínculo disponible es la afiliación de roster a Soma Familia y, por tanto, la relación organizativa con Soma. La pertenencia común no basta para afirmar una relación personal con Kaede, Momiji, Zanis o Chandra.",
      conflict: "No se atribuye un conflicto individual. El pendiente es encontrar evidencia primaria que confirme que la identidad aparece en la continuidad objetivo, su período de pertenencia y cualquier dato de caracterización antes de promoverla desde ficha de roster a biografía desarrollada.",
      sources: ["https://danmachi.fandom.com/wiki/Category:Soma_Familia", "https://danmachi.fandom.com/wiki/Soma_Familia"]
    }
  };
  const clone = value => JSON.parse(JSON.stringify(value));
  root.WordWaifuCharacterDossiers = Object.freeze({
    get: id => dossiers[id] ? clone(dossiers[id]) : null,
    list: () => Object.keys(dossiers).map(id => ({ id, ...clone(dossiers[id]) }))
  });
})(typeof globalThis !== "undefined" ? globalThis : this);
