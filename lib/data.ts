import type { Locale } from "@/lib/i18n";

export type Localized<T> = Record<Locale, T>;

export const sports = [
  {
    slug: "futbol",
    image: "/media/sports/soccer.webp",
    title: { es: "Becas de fútbol en USA", en: "Soccer scholarships in the USA" },
    intro: {
      es: "¿Sueñas con continuar tu carrera de fútbol mientras persigues una educación superior en los Estados Unidos? Aquí te guiaremos a través de lo que necesitas saber sobre cómo obtener una beca de fútbol en los Estados Unidos.",
      en: "Are you dreaming of continuing your soccer career while pursuing higher education in the United States? Here, we'll walk you through what you need to know about obtaining a soccer scholarship in the USA.",
    },
    sections: [
      {
        title: { es: "Resumen del fútbol en las universidades de Estados Unidos", en: "Overview of soccer in US colleges" },
        body: {
          es: "El fútbol es un deporte altamente competitivo en las universidades de Estados Unidos, con oportunidades para jugar en varios niveles, incluyendo las Divisiones I, II y III de la NCAA, la NAIA y la NJCAA. Entender el panorama es crucial para los aspirantes a estudiantes-atletas.",
          en: "Soccer is a highly competitive sport in US colleges, with opportunities to play at various levels, including NCAA Divisions I, II, III, NAIA, and NJCAA. Understanding the landscape is crucial for aspiring student-athletes.",
        },
      },
      {
        title: { es: "Requisitos atléticos", en: "Athletic requirements" },
        body: {
          es: "Para ser considerado para una beca de fútbol, los atletas necesitan demostrar habilidades excepcionales en el fútbol, generalmente a través de su desempeño en clubes o en la escuela secundaria, estadísticas de jugadores, videos destacados y reconocimientos como premios o capitanía del equipo.",
          en: "To be considered for a soccer scholarship, athletes need to demonstrate outstanding soccer abilities, usually through club or high school performance, player statistics, highlight videos, and recognition such as awards or team captainship.",
        },
      },
      {
        title: { es: "Proceso de reclutamiento", en: "Recruitment process" },
        body: {
          es: "El proceso de reclutamiento para el fútbol puede comenzar tan temprano como en tu segundo año de secundaria. Aquí te explicaremos los pasos esenciales, desde la creación de videos destacados, creación de un buen currículum y hasta las referencias necesarias para llegar a la universidad deseada.",
          en: "The recruitment process for soccer can start as early as your sophomore year in high school. We'll outline essential steps, from creating highlight reels, and building an outstanding CV, to the references needed to get to the desired university.",
        },
      },
      {
        title: { es: "Oportunidades de becas", en: "Scholarship opportunities" },
        body: {
          es: "Las becas pueden variar ampliamente, desde becas completas que cubren la matrícula, la habitación y la comida, hasta becas parciales. Te explicaremos cómo se otorgan las becas y qué puedes esperar.",
          en: "Scholarships can vary widely, from full-rides covering tuition, room, and board, to partial scholarships. We’ll explain how scholarships are awarded and what you can expect.",
        },
      },
    ],
    conclusion: {
      es: "Conseguir una beca de fútbol en los Estados Unidos es un viaje desafiante pero gratificante. Con la preparación y el apoyo adecuados, tu sueño de jugar fútbol y obtener un título en los Estados Unidos está a tu alcance.",
      en: "Securing a soccer scholarship in the USA is a challenging but rewarding journey. With the right preparation and support, your dream of playing soccer and earning a degree in the United States is within reach.",
    },
  },
  {
    slug: "atletismo",
    image: "/media/sports/track.jpg",
    title: { es: "Becas de atletismo en USA", en: "Track and field scholarships in the USA" },
    intro: {
      es: "¿Eres un corredor de pista que busca llevar el deporte al nivel universitario en los Estados Unidos? Esta guía te ayudará a navegar los aspectos esenciales para asegurar una beca, ya seas velocista o corredor de larga distancia. Aquí cubriremos la importancia de la versatilidad al competir tanto en las temporadas de interior como en las de exterior.",
      en: "Are you a track and field athlete looking to elevate your sport to the collegiate level in the United States? This guide will navigate you through the essentials of securing a track and field scholarship, whether you're a sprinter or a long-distance runner. We'll cover the importance of versatility in competing across both indoor and outdoor seasons.",
    },
    sections: [
      {
        title: { es: "Atletismo en las universidades de Estados Unidos", en: "Overview of track and field in US colleges" },
        body: {
          es: "El atletismo en las universidades de Estados Unidos ofrece un formato de doble temporada único, con la mayoría de los atletas compitiendo tanto en campeonatos de interior como de exterior. Esta estructura permite una amplia gama de eventos, desde sprints hasta carreras de larga distancia, incluyendo vallas y relevos. Comprender las demandas y oportunidades de ambas temporadas es crucial para cualquier atleta que aspire al éxito universitario.",
          en: "Track and field in U.S. colleges offers a unique dual-season format, with most athletes competing in both indoor and outdoor championships. This structure allows for a wide range of events, from sprints to long-distance running, including hurdles and relays. Understanding the demands and opportunities of both seasons is crucial for any track and field athlete aiming for collegiate success.",
        },
      },
      {
        title: { es: "Requisitos atléticos", en: "Athletic requirements" },
        body: {
          es: "Los programas universitarios de atletismo en los Estados Unidos buscan atletas que sobresalgan en sus respectivos eventos y muestren potencial de desarrollo. Los reclutas deben demostrar sus logros a través de tiempos de competencia, distancias o alturas, según su especialidad. Resaltar las actuaciones en competiciones de interior y exterior puede demostrar tu adaptabilidad y amplitud de habilidades, haciéndote un candidato más atractivo para los entrenadores universitarios.",
          en: "Collegiate track and field programs in the U.S. seek athletes who excel in their respective events and show potential for development. Recruits need to demonstrate their achievements through competition times, distances, or heights, depending on their specialty. Highlighting performances from both indoor and outdoor competitions can showcase your adaptability and breadth of skills, making you a more attractive candidate to college coaches.",
        },
      },
      {
        title: { es: "Proceso de reclutamiento", en: "Recruitment process" },
        body: {
          es: "El proceso de reclutamiento a menudo comienza en el penúltimo año de la escuela secundaria. Los atletas deben compilar un currículum atlético completo, incluyendo sus mejores marcas personales, resultados de campeonatos y cualquier clasificación relevante.",
          en: "The recruitment process for track and field often starts the junior year of high school. Athletes should compile a comprehensive athletic resume, including personal bests, championship results, and any relevant rankings.",
        },
      },
      {
        title: { es: "Oportunidades de becas", en: "Scholarship opportunities" },
        body: {
          es: "Las becas pueden variar desde becas completas hasta financiamiento parcial, con la asignación fuertemente influenciada por tu evento y nivel de rendimiento. Los entrenadores asignan becas en función de las necesidades del equipo y la capacidad del atleta para sumar puntos en competencias de conferencia y nacionales. Entender que las becas pueden estar más disponibles en tu área de especialidad, o que podrías necesitar competir en múltiples eventos para asegurar financiamiento, es clave.",
          en: "Scholarships for track and field can range from full rides to partial funding, with the allocation heavily influenced by your event and performance level. Coaches allocate scholarships based on the team's needs and the athlete's ability to score points in conference and national meets. Understanding that scholarships might be more readily available in your specialty area, or that you may need to compete in multiple events to secure funding, is key.",
        },
      },
    ],
    conclusion: {
      es: "Asegurar una beca de atletismo en los Estados Unidos es una meta ambiciosa que recompensa la dedicación, versatilidad y rendimiento. Ya sea que brilles en sprints, sobresalgas en carreras de distancia o te especialices en eventos de campo, demostrar tu capacidad para competir en ambas temporadas de interior y exterior es esencial. Con la preparación y mentalidad adecuadas, puedes alcanzar tus objetivos atléticos universitarios mientras persigues una educación superior.",
      en: "Securing a track and field scholarship in the U.S. is an ambitious goal that rewards dedication, versatility, and performance. Whether you shine in sprints, excel in distance running, or specialize in field events, showcasing your ability to compete across both indoor and outdoor seasons is essential. With the right preparation and mindset, you can achieve your collegiate athletics goals while pursuing a higher education.",
    },
  },
  {
    slug: "natacion",
    image: "/media/sports/swim.jpg",
    title: { es: "Becas de natación en USA", en: "Swimming scholarships in the USA" },
    intro: {
      es: "¿Eres un nadador competitivo con aspiraciones de llevar tus talentos a una universidad en los Estados Unidos? Esta guía está diseñada para ayudarte a asegurar una beca de natación en los Estados Unidos, enfatizando la crucial adaptación a las dimensiones de las piscinas estadounidenses.",
      en: "Are you a competitive swimmer with aspirations of taking your talents to a college in the United States? This guide is crafted to navigate you through securing a swimming scholarship in the U.S., emphasizing the crucial adaptation to the American pool dimensions.",
    },
    sections: [
      {
        title: { es: "Resumen de la natación universitaria en los Estados Unidos", en: "Overview of college swimming in the US" },
        body: {
          es: "La natación universitaria en los Estados Unidos ofrece un panorama competitivo vibrante, con atletas participando en las Divisiones I, II y III de la NCAA, la NAIA y la NJCAA. Un aspecto clave de la natación a nivel universitario en los Estados Unidos es el tamaño de la piscina; la mayoría de las competencias universitarias se llevan a cabo en piscinas de 25 yardas, a diferencia de las piscinas de 25 metros o 50 metros más comunes a nivel internacional. Esta diferencia puede afectar las estrategias y los tiempos de carrera, por lo que la familiaridad y la adaptabilidad al formato de 25 yardas son esenciales para el éxito.",
          en: "College swimming in the United States offers a vibrant competitive landscape, with athletes participating in NCAA Divisions I, II, III, NAIA, and NJCAA. A key aspect of swimming at the collegiate level in the U.S. is the pool size; most college competitions take place in 25-yard pools, unlike the 25-meter or 50-meter pools more common internationally. This difference can affect race strategies and times, making familiarity and adaptability to the 25-yard format essential for success.",
        },
      },
      {
        title: { es: "Requisitos atléticos", en: "Athletic requirements" },
        body: {
          es: "Para asegurar una beca de natación, los atletas deben demostrar un rendimiento excepcional en sus eventos preferidos, con tiempos que cumplan o superen los estándares universitarios. Entender la conversión de tiempos entre piscinas de 25 metros o 50 metros al formato de 25 yardas es crucial. Los nadadores deben intentar ganar experiencia en piscinas de 25 yardas, si es posible, o usar herramientas de conversión para presentar sus tiempos con precisión a los entrenadores universitarios.",
          en: "To secure a swimming scholarship, athletes must demonstrate exceptional performance in their preferred events, with times that meet or exceed collegiate standards. Understanding the conversion of times between 25-meter or 50-meter pools to the 25-yard format is crucial. Swimmers should aim to gain experience in 25-yard pools, if possible, or use conversion tools to accurately present their times to college coaches.",
        },
      },
      {
        title: { es: "Proceso de reclutamiento", en: "Recruitment process" },
        body: {
          es: "El proceso de reclutamiento para la natación puede comenzar tan temprano como en tu segundo año de secundaria. Se alienta a los nadadores a compilar un perfil completo, que incluya sus mejores tiempos (con conversiones para piscinas de 25 yardas), resultados de campeonatos y videos de competencias.",
          en: "The recruitment process for swimming can begin as early as your sophomore year in high school. Swimmers are encouraged to compile a comprehensive profile, including best times (with conversions for 25-yard pools), championship results, and video footage of races.",
        },
      },
      {
        title: { es: "Oportunidades de becas", en: "Scholarship opportunities" },
        body: {
          es: "Las becas de natación pueden ser tanto completas como parciales, dependiendo de la división de la escuela, el presupuesto del equipo y el nivel de rendimiento del atleta. Los entrenadores asignan becas en función de las necesidades del equipo y la capacidad del nadador para contribuir a la puntuación en las competencias. Demostrar tu versatilidad en varios eventos puede mejorar tu atractivo para los programas universitarios.",
          en: "Swimming scholarships can be both full and partial, depending on the school's division, the team's budget, and the athlete's performance level. Coaches allocate scholarships based on the team's needs and the swimmer's ability to contribute to scoring in meets. Demonstrating your versatility across various events can enhance your attractiveness to college programs.",
        },
      },
    ],
    conclusion: {
      es: "Apuntar a una beca de natación en los Estados Unidos requiere no solo velocidad y resistencia, sino también la adaptabilidad a un entorno competitivo diferente. La transición a competir en piscinas de 25 yardas representa un desafío y una oportunidad únicos para los nadadores internacionales. Al prepararte para este ajuste y mostrar tus habilidades de manera efectiva, puedes navegar con éxito el proceso de reclutamiento y destacarte en la natación universitaria.",
      en: "Aiming for a swimming scholarship in the United States requires not just speed and stamina, but also the adaptability to a different competitive environment. The transition to racing in 25-yard pools represents a unique challenge and opportunity for international swimmers. By preparing for this adjustment and showcasing your skills effectively, you can navigate the recruitment process successfully and make a splash in collegiate swimming.",
    },
  },
  {
    slug: "golf",
    image: "/media/sports/golf.webp",
    title: { es: "Becas de golf en USA", en: "Golf scholarships in the USA" },
    intro: {
      es: "¿Eres un golfista talentoso que busca continuar su educación mientras compites a nivel universitario en los Estados Unidos? Esta guía te ayudará a navegar el proceso de obtener una beca de golf, destacando los requisitos específicos y los pasos necesarios para alcanzar tus objetivos académicos y atléticos.",
      en: "Are you a skilled golfer aiming to further your education while competing at a collegiate level in the United States? This guide will help you navigate the process of securing a golf scholarship, highlighting the specific requirements and steps needed to achieve your academic and athletic goals.",
    },
    sections: [
      {
        title: { es: "Resumen del golf universitario", en: "Overview of college golf" },
        body: {
          es: "El golf universitario en los Estados Unidos es conocido por su espíritu competitivo y alto nivel de juego. Se ofrece en las Divisiones I, II y III de la NCAA, así como en la NAIA y NJCAA. Cada división tiene su propio conjunto de reglas y niveles de competencia, por lo que es crucial que los futuros estudiantes-atletas comprendan dónde podrían encajar mejor en función de sus habilidades de golf y aspiraciones académicas.",
          en: "College golf in the U.S. is known for its competitive spirit and high standard of play. It’s offered across NCAA Divisions I, II, and III, as well as NAIA and NJCAA. Each division has its own set of rules and competition levels, making it crucial for prospective student-athletes to understand where they might best fit based on their golfing skills and academic aspirations.",
        },
      },
      {
        title: { es: "Requisitos atléticos", en: "Athletic requirements" },
        body: {
          es: "Para calificar para una beca de golf, los atletas deben demostrar un historial competitivo sólido, incluyendo puntuaciones de torneos reconocidos por asociaciones de golf nacionales y regionales. Los entrenadores a menudo buscan golfistas que hayan competido en torneos amateur de alto nivel y que tengan clasificaciones o hándicaps que muestren su potencial para contribuir al éxito del equipo.",
          en: "To qualify for a golf scholarship, athletes must demonstrate a strong competitive record, including scores from tournaments recognized by national and regional golf associations. Coaches often look for golfers who have competed in high-level amateur tournaments and have rankings or handicaps that showcase their potential to contribute to the team’s success.",
        },
      },
      {
        title: { es: "Proceso de reclutamiento", en: "Recruitment process" },
        body: {
          es: "El proceso de reclutamiento para el golf puede diferir significativamente de los deportes de equipo, con un mayor énfasis en los resultados de torneos individuales y las estadísticas de golf. Los aspirantes a golfistas universitarios deben construir un currículum sólido que incluya sus puntuaciones en torneos, clasificaciones y logros notables. Crear un video de swing también puede ayudar a demostrar técnica y forma.",
          en: "The recruitment process for golf can differ significantly from team sports, with a greater emphasis on individual tournament results and golf stats. Aspiring collegiate golfers should build a strong resume that includes their tournament scores, rankings, and notable achievements. Creating a swing video can also help demonstrate technique and form.",
        },
      },
      {
        title: { es: "Oportunidades de becas", en: "Scholarship opportunities" },
        body: {
          es: "Las becas de golf pueden ser tanto completas como parciales, dependiendo del programa y el nivel de la división. Mientras que las escuelas de la División I y II de la NCAA podrían ofrecer más becas, la competencia por estas es intensa. Las escuelas de la División III no ofrecen becas deportivas, pero pueden proporcionar paquetes de ayuda financiera que hacen que la educación sea asequible. Es importante que los reclutas apliquen a una variedad de escuelas para maximizar sus posibilidades de obtener ayuda financiera.",
          en: "Golf scholarships can be both full and partial, depending on the program and division level. While NCAA Division I and II schools might offer more scholarships, competition for these is intense. Division III schools do not offer athletic scholarships but may provide financial aid packages that make education affordable. It’s important for recruits to apply to a range of schools to maximize their chances of securing financial aid.",
        },
      },
    ],
    conclusion: {
      es: "Obtener una beca de golf en los Estados Unidos requiere precisión y dedicación, tanto dentro como fuera del campo. Con un enfoque estratégico en el reclutamiento, que incluya mantener un desempeño sólido en torneos nacionales y regionales, y promocionarte efectivamente ante los entrenadores universitarios, puedes encontrar un programa que se ajuste a tus objetivos atléticos y académicos. Recuerda, el camino hacia el golf universitario se trata tanto de estrategia y planificación como de habilidad y rendimiento.",
      en: "Securing a golf scholarship in the U.S. requires precision and dedication, both on and off the course. With a strategic approach to recruitment, including maintaining a strong performance in national and regional tournaments, and effectively marketing yourself to college coaches, you can find a program that fits your athletic and academic goals. Remember, the path to college golf is as much about strategy and planning as it is about skill and performance.",
    },
  },
  {
    slug: "baloncesto",
    image: "/media/sports/basketball.jpg",
    title: { es: "Becas de baloncesto en USA", en: "Basketball scholarships in the USA" },
    intro: {
      es: "El baloncesto universitario en los Estados Unidos no solo es un deporte popular, sino también una vía importante hacia el juego profesional, incluyendo la NBA y ligas en el extranjero.",
      en: "Are you a basketball player dreaming of taking your game to the collegiate level in the United States? This guide is designed to help you navigate the complexities of securing a basketball scholarship, providing you with key insights into the recruitment process and what to expect as a collegiate basketball player.",
    },
    sections: [
      {
        title: { es: "Resumen del baloncesto universitario", en: "Overview of college basketball" },
        body: {
          es: "El baloncesto universitario en los Estados Unidos no solo es un deporte popular, sino también una vía importante hacia el juego profesional, incluyendo la NBA y ligas en el extranjero. Se juega en varios niveles—Divisiones I, II y III de la NCAA, NAIA y NJCAA, cada uno ofreciendo diferentes oportunidades y experiencias. Entender estos niveles y dónde podrías encajar mejor puede influir significativamente en tu viaje de reclutamiento.",
          en: "College basketball in the U.S. is not only a popular sport but also a major pathway to professional play, including the NBA and overseas leagues. It’s played at various levels—NCAA Divisions I, II, and III, NAIA, and NJCAA, each offering different opportunities and experiences. Understanding these levels and where you might fit best can significantly influence your recruitment journey.",
        },
      },
      {
        title: { es: "Requisitos atléticos", en: "Athletic requirements" },
        body: {
          es: "Para ser considerado para una beca de baloncesto, los atletas necesitan demostrar habilidades excepcionales y comprensión del juego. Los entrenadores buscan jugadores que puedan contribuir al equipo en varios roles, como anotadores, creadores de juego o especialistas defensivos. La altura y los atributos físicos también pueden desempeñar un papel, especialmente para posiciones como centro o pívot.",
          en: "To be considered for a basketball scholarship, athletes need to demonstrate exceptional skills, athleticism, and understanding of the game. Coaches look for players who can contribute to the team in various roles, such as scorers, playmakers, or defensive specialists. Height and physical attributes can also play a role, especially for positions like center or forward.",
        },
      },
      {
        title: { es: "Proceso de reclutamiento", en: "Recruitment process" },
        body: {
          es: "El proceso de reclutamiento para el baloncesto típicamente comienza temprano, con cazatalentos y entrenadores observando a los posibles reclutas desde la escuela media. Los jugadores de secundaria deben enfocarse en desarrollar su juego, jugar en torneos y exhibiciones, y mantener un buen expediente académico.",
          en: "The recruitment process for basketball typically begins early, with scouts and coaches watching potential recruits as early as middle school. High school players should focus on developing their game, playing in tournaments and showcases, and maintaining a strong academic record.",
        },
      },
      {
        title: { es: "Oportunidades de becas", en: "Scholarship opportunities" },
        body: {
          es: "Las becas para baloncesto pueden variar ampliamente, desde becas completas que cubren todos los gastos universitarios hasta becas parciales que cubren parte de la matrícula. Las escuelas de la División I de la NCAA tienden a ofrecer más becas completas, mientras que las escuelas de la División II y III pueden ofrecer becas parciales o ninguna beca deportiva. Es crucial entender los diferentes paquetes financieros disponibles y apuntar a las escuelas que se alinean con tu nivel de habilidad e intereses académicos.",
          en: "Scholarships for basketball can vary widely from full rides that cover all college expenses to partial scholarships that cover part of the tuition. NCAA Division I schools tend to offer more full-ride scholarships, while Division II and III schools may offer partial or no athletic scholarships. It’s crucial to understand the different financial packages available and to target schools that align with your skill level and academic interests.",
        },
      },
    ],
    conclusion: {
      es: "Conseguir una beca de baloncesto en los Estados Unidos requiere talento, dedicación y un compromiso proactivo en el proceso de reclutamiento. Al desarrollar tus habilidades, entender el panorama del baloncesto universitario y promocionarte eficazmente ante los entrenadores universitarios, puedes aumentar tus posibilidades de jugar baloncesto a nivel universitario y alcanzar tus objetivos académicos y atléticos. Recuerda, el camino es competitivo, pero con el enfoque adecuado, tu sueño de jugar baloncesto universitario está al alcance.",
      en: "Securing a basketball scholarship in the U.S. requires talent, dedication, and proactive engagement in the recruitment process. By developing your skills, understanding the college basketball landscape, and effectively marketing yourself to college coaches, you can enhance your chances of playing basketball at the collegiate level and achieving your academic and athletic goals. Remember, the journey is competitive, but with the right approach, your dream of playing college basketball is within reach.",
    },
  },
  {
    slug: "beisbol",
    image: "/media/sports/baseball.jpg",
    title: { es: "Becas de béisbol en USA", en: "Baseball scholarships in the USA" },
    intro: {
      es: "¿Eres un jugador de béisbol que busca conseguir una beca universitaria en los Estados Unidos? Esta guía está diseñada para proporcionarte información esencial sobre cómo navegar el proceso de reclutamiento y asegurar un lugar en un equipo universitario de béisbol.",
      en: "Are you an aspiring baseball player looking to hit a home run with a college scholarship in the United States? This guide is designed to provide you with essential information on how to navigate the recruitment process and secure a spot on a collegiate baseball team.",
    },
    sections: [
      {
        title: { es: "Resumen del béisbol universitario", en: "Overview of college baseball" },
        body: {
          es: "El béisbol universitario en los Estados Unidos es altamente competitivo y sirve como un sistema clave de formación para las ligas profesionales, incluyendo las Grandes Ligas de Béisbol (MLB). El deporte se juega en varios niveles, incluyendo las Divisiones I, II y III de la NCAA, la NAIA y la NJCAA, cada una ofreciendo diferentes experiencias y oportunidades. Entender las particularidades de cada división puede ayudarte a identificar la mejor opción para tus habilidades y objetivos académicos.",
          en: "College baseball in the U.S. is highly competitive and serves as a key feeder system for professional leagues, including Major League Baseball (MLB). The sport is played at several levels including NCAA Divisions I, II, and III, NAIA, and NJCAA, each offering different experiences and opportunities. Understanding the nuances of each division can help you identify the best fit for your skills and academic goals.",
        },
      },
      {
        title: { es: "Requisitos atléticos", en: "Athletic requirements" },
        body: {
          es: "Para ser considerado para una beca de béisbol, los atletas necesitan demostrar habilidades fuertes en bateo, lanzamiento o fildeo, dependiendo de su posición. Los entrenadores buscan jugadores con trayectorias comprobadas en equipos de secundaria o clubes, estadísticas impresionantes y potencial de crecimiento. Atributos físicos como velocidad, fuerza del brazo y agilidad también son factores clave en el reclutamiento.",
          en: "To be considered for a baseball scholarship, athletes need to demonstrate strong skills in batting, pitching, or fielding, depending on their position. Coaches look for players with proven track records in high school or club teams, impressive statistics, and the potential for growth. Physical attributes such as speed, arm strength, and agility are also key factors in recruitment.",
        },
      },
      {
        title: { es: "Proceso de reclutamiento", en: "Recruitment process" },
        body: {
          es: "El proceso de reclutamiento para el béisbol típicamente comienza temprano, con entrenadores buscando talento potencial en juegos de secundaria, ligas de verano y exhibiciones. Es crucial que los jugadores participen en estos eventos y ganen exposición. Desarrollar un video destacado profesional y mantener un currículum atlético actualizado con tus estadísticas y logros es esencial.",
          en: "The recruitment process for baseball typically starts early, with coaches scouting potential talent from high school games, summer leagues, and showcases. It is crucial for players to participate in these events and gain exposure. Developing a professional highlight reel and maintaining an updated athletic resume with your statistics and achievements is essential.",
        },
      },
      {
        title: { es: "Oportunidades de becas", en: "Scholarship opportunities" },
        body: {
          es: "Las becas de béisbol varían desde becas completas, que cubren todos los gastos universitarios, hasta becas parciales, dependiendo de la división de la escuela y el presupuesto del programa. Los programas de las Divisiones I y II de la NCAA ofrecen la mayoría de las becas, mientras que la División III se enfoca más en becas académicas y no ofrece becas deportivas. Ser proactivo y entender el nivel de competencia y la disponibilidad de becas en cada escuela te guiará en tu proceso de aplicación.",
          en: "Baseball scholarships vary from full rides, covering all college expenses, to partial scholarships depending on the school’s division and program budget. NCAA Division I and II programs offer the most scholarships, while Division III focuses more on academic scholarships and does not offer athletic scholarships. Being proactive and understanding the level of competition and scholarship availability at each school will guide you in your application process.",
        },
      },
    ],
    conclusion: {
      es: "Obtener una beca de béisbol en una universidad de Estados Unidos requiere no solo talento y habilidad, sino también un enfoque estratégico para el reclutamiento. Al mostrar tus habilidades en torneos y exhibiciones clave, comunicarte efectivamente con los entrenadores y entender el panorama del béisbol universitario, puedes aumentar tus posibilidades de conseguir una beca. Con dedicación y esfuerzo, el sueño de jugar béisbol universitario mientras avanzas en tu educación está al alcance de tu mano.",
      en: "Securing a baseball scholarship to a U.S. college requires not only talent and skill but also a strategic approach to recruitment. By showcasing your abilities in key tournaments and showcases, effectively communicating with coaches, and understanding the collegiate baseball landscape, you can enhance your chances of landing a scholarship. With dedication and hard work, the dream of playing college baseball while advancing your education is well within your reach.",
    },
  },
] as const;

export const sportList = [
  { slug: "futbol", name: { es: "fútbol", en: "soccer" } },
  { slug: "atletismo", name: { es: "atletismo", en: "track and field" } },
  { slug: null, name: { es: "cross country", en: "cross country" } },
  { slug: null, name: { es: "lucha", en: "wrestling" } },
  { slug: "beisbol", name: { es: "béisbol", en: "baseball" } },
  { slug: "golf", name: { es: "golf", en: "golf" } },
  { slug: "natacion", name: { es: "natación", en: "swimming" } },
  { slug: null, name: { es: "tenis", en: "tennis" } },
  { slug: "baloncesto", name: { es: "baloncesto", en: "basketball" } },
  { slug: null, name: { es: "voleibol", en: "volleyball" } },
  { slug: null, name: { es: "boliche", en: "bowling" } },
] as const;

export function getSport(slug: string) {
  return sports.find((sport) => sport.slug === slug);
}
