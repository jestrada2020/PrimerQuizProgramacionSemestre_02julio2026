// questions.js — 40 preguntas con espacios en blanco
// Basadas en tres fuentes:
//   Sección 1: "El Pensamiento Crítico como Modo de Vida" (Prof. Aniceto Masferrer) — 20 pts
//   Sección 2: "La Encrucijada de la IA y la Computación Cuántica" (Prof. José Ignacio Latorre) — 20 pts
//   Sección 3: Sintaxis básica de Python (variables, f-strings, operadores, input/int) — 10 pts
// ── Total: 40 preguntas, 50 pts (30 preguntas x 1 pt + 10 preguntas x 2 pts) ──

const QUIZ_SECTIONS = [
  { id: 1, name: "Pensamiento Crítico",    abbrev: "P. Crítico", color: "#3B82F6" },
  { id: 2, name: "Inteligencia Artificial", abbrev: "I.A.",       color: "#8B5CF6" },
  { id: 3, name: "Python Básico",          abbrev: "Python",     color: "#10B981" },
];

const QUIZ_QUESTIONS = [

  // ══════════════════════════════════════════════════════
  // SECCIÓN 1 — "El Pensamiento Crítico como Modo de Vida" (20 pts)
  // Conferencia del Prof. Aniceto Masferrer
  // ══════════════════════════════════════════════════════

  {
    id: 1, section: 1, points: 1,
    topic: "Definición del pensamiento crítico",
    question: "Completa la cita textual de Masferrer sobre qué NO es el pensamiento crítico:",
    code:
`«El pensamiento crítico o pensar por uno mismo no es una [1];
es algo que te da un [2] distinto, que uno puede adquirir,
cultivar y desarrollar.» — Prof. Aniceto Masferrer`,
    blanks: [
      { id: 1, options: ["técnica", "ciencia", "moda", "ley"],                 correct: "técnica" },
      { id: 2, options: ["modo de vivir", "trabajo", "examen", "deporte"],     correct: "modo de vivir" },
    ],
  },

  {
    id: 2, section: 1, points: 1,
    topic: "Autor y disciplina",
    question: "Completa los datos del autor y del programa donde se impartió la conferencia:",
    code:
`Aniceto Masferrer es catedrático de [1], jurista, ensayista e
investigador, y su conferencia forma parte del programa «[2]».`,
    blanks: [
      { id: 1, options: ["Historia del Derecho", "Física Teórica", "Filosofía Moral", "Biología"], correct: "Historia del Derecho" },
      { id: 2, options: ["Aprendemos Juntos", "Aprendemos Juntos 2030", "TED Talks", "Diálogos Abiertos"], correct: "Aprendemos Juntos" },
    ],
  },

  {
    id: 3, section: 1, points: 1,
    topic: "El peligro de la existencia en automático",
    question: "Completa la idea sobre el mayor peligro de la sociedad contemporánea:",
    code:
`El peligro más severo de la sociedad contemporánea radica en la
existencia en [1]: la tendencia a actuar por [2] y adoptar
opiniones ajenas por presión de grupo.`,
    blanks: [
      { id: 1, options: ["automático", "silencio", "comunidad", "minoría"],   correct: "automático" },
      { id: 2, options: ["inercia", "reflexión", "voluntad", "contemplación"], correct: "inercia" },
    ],
  },

  {
    id: 4, section: 1, points: 1,
    topic: "Autoconocimiento y vocación",
    question: "Completa la idea sobre el autoconocimiento como parte del pensamiento crítico:",
    code:
`El ejercicio del pensamiento crítico exige un proceso continuo
de [1]. Descubrir las propias fortalezas no es un ejercicio de
vanidad, sino una búsqueda práctica que suele coincidir con un
[2] genuino y con el bien de la comunidad.`,
    blanks: [
      { id: 1, options: ["autoconocimiento", "desconocimiento", "aislamiento", "olvido"], correct: "autoconocimiento" },
      { id: 2, options: ["disfrute", "miedo", "aburrimiento", "silencio"],                correct: "disfrute" },
    ],
  },

  {
    id: 5, section: 1, points: 1,
    topic: "Axioma afectivo",
    question: "Completa el axioma afectivo más novedoso de la conferencia:",
    code:
`Uno de los aportes más novedosos de Masferrer es el axioma
afectivo: «el [1] agudiza el [2]».`,
    blanks: [
      { id: 1, options: ["amor", "miedo", "dinero", "poder"],    correct: "amor" },
      { id: 2, options: ["ingenio", "cuerpo", "dinero", "tiempo"], correct: "ingenio" },
    ],
  },

  {
    id: 6, section: 1, points: 2,
    topic: "La tríada antropomórfica",
    question: "Completa la fórmula y la descripción de la Voluntad dentro de la tríada del pensamiento crítico:",
    code:
`Pensamiento Crítico Integral = H(Inteligencia, [1], [2])

La [3] es la fuerza operativa y decisional que permite actuar
conforme a los juicios razonados, venciendo el miedo al rechazo
social.`,
    blanks: [
      { id: 1, options: ["Voluntad", "Memoria", "Imaginación", "Percepción"], correct: "Voluntad" },
      { id: 2, options: ["Corazón", "Cuerpo", "Instinto", "Alma"],            correct: "Corazón" },
      { id: 3, options: ["Voluntad", "Inteligencia", "Corazón", "Memoria"],   correct: "Voluntad" },
    ],
  },

  {
    id: 7, section: 1, points: 2,
    topic: "La dimensión intelectiva",
    question: "Completa la descripción de la Inteligencia como dimensión del pensamiento crítico:",
    code:
`La Inteligencia, o dimensión [1], es la facultad cognoscitiva
que analiza, discrimina, evalúa la evidencia y detecta [2]
lógicas, buscando la verdad [3] sin dejarse arrastrar por
impresiones superficiales.`,
    blanks: [
      { id: 1, options: ["intelectiva", "afectiva", "volitiva", "emocional"], correct: "intelectiva" },
      { id: 2, options: ["falacias", "emociones", "creencias", "opiniones"],  correct: "falacias" },
      { id: 3, options: ["objetiva", "relativa", "parcial", "subjetiva"],     correct: "objetiva" },
    ],
  },

  {
    id: 8, section: 1, points: 2,
    topic: "El corazón como dimensión afectiva",
    question: "Completa la descripción del Corazón dentro de la tríada del pensamiento crítico:",
    code:
`El Corazón es la fuente del afecto, la [1] y la intencionalidad
benevolente. Sin el impulso del corazón, la razón corre el
riesgo de degenerar en [2] o manipulación [3].`,
    blanks: [
      { id: 1, options: ["empatía", "lógica", "memoria", "velocidad"],        correct: "empatía" },
      { id: 2, options: ["cinismo", "altruismo", "silencio", "humildad"],     correct: "cinismo" },
      { id: 3, options: ["instrumental", "afectiva", "voluntaria", "social"], correct: "instrumental" },
    ],
  },

  {
    id: 9, section: 1, points: 2,
    topic: "La paradoja del doble ruido",
    question: "Completa el diagnóstico de Masferrer sobre el doble ruido de la sociedad contemporánea:",
    code:
`La sociedad contemporánea padece una condición tóxica de doble
[1]: el ruido [2] (hiperconectividad digital y notificaciones)
y el ruido [3] (agitación emocional y [4] no cicatrizadas).`,
    blanks: [
      { id: 1, options: ["ruido", "silencio", "pensamiento", "miedo"],                          correct: "ruido" },
      { id: 2, options: ["exterior", "interior", "digital", "físico"],                          correct: "exterior" },
      { id: 3, options: ["interior", "exterior", "mental", "social"],                           correct: "interior" },
      { id: 4, options: ["heridas psicológicas", "redes sociales", "pantallas", "notificaciones"], correct: "heridas psicológicas" },
    ],
  },

  {
    id: 10, section: 1, points: 2,
    topic: "Soledad habitada vs. aislamiento",
    question: "Completa la distinción entre soledad habitada y aislamiento alienante:",
    code:
`Masferrer diferencia la soledad [1] (donde el sujeto se
reencuentra consigo mismo) del [2] alienante. El [3] no
representa un vacío estéril, sino el espacio imprescindible
para pensar con autonomía.`,
    blanks: [
      { id: 1, options: ["habitada", "vacía", "forzada", "digital"],     correct: "habitada" },
      { id: 2, options: ["aislamiento", "silencio", "ruido", "miedo"],   correct: "aislamiento" },
      { id: 3, options: ["silencio", "ruido", "miedo", "afecto"],        correct: "silencio" },
    ],
  },

  {
    id: 11, section: 1, points: 1,
    topic: "Pérdida de la capacidad narrativa",
    question: "Completa la cita sobre la pérdida de la capacidad narrativa en la era de la imagen:",
    code:
`«No somos capaces de [1] lo que nos pasa [...] porque es un
mundo sobre todo de [2], no de [3]. Y cuando en nuestra vida
hay más imágenes que palabras, la intimidad y el pensamiento
crítico se resienten.»`,
    blanks: [
      { id: 1, options: ["narrar", "olvidar", "imaginar", "grabar"],   correct: "narrar" },
      { id: 2, options: ["imágenes", "palabras", "sonidos", "números"], correct: "imágenes" },
      { id: 3, options: ["palabras", "imágenes", "pantallas", "redes"], correct: "palabras" },
    ],
  },

  {
    id: 12, section: 1, points: 1,
    topic: "Escritura reflexiva diaria",
    question: "Completa la primera herramienta metodológica que propone Masferrer:",
    code:
`Masferrer recomienda dedicar diariamente entre [1] y [2]
minutos a la escritura personal, que actúa como un [3] que
estructura la memoria y fortalece la autonomía de pensamiento.`,
    blanks: [
      { id: 1, options: ["5", "10", "15", "20"],              correct: "5" },
      { id: 2, options: ["10", "5", "30", "60"],              correct: "10" },
      { id: 3, options: ["filtro", "juego", "algoritmo", "resumen"], correct: "filtro" },
    ],
  },

  {
    id: 13, section: 1, points: 1,
    topic: "El filtro cuádruple",
    question: "Completa las cuatro preguntas del protocolo de evaluación crítica de la información:",
    code:
`Ante cualquier mensaje recibido, el protocolo de evaluación
crítica de Masferrer formula cuatro preguntas: ¿[1] lo dice?,
¿[2] dice?, ¿[3] qué lo dice? y ¿[4] qué lo dice?`,
    blanks: [
      { id: 1, options: ["Quién", "Qué", "Cuándo", "Cómo"],  correct: "Quién" },
      { id: 2, options: ["Qué", "Quién", "Cuándo", "Dónde"], correct: "Qué" },
      { id: 3, options: ["Para", "Por", "Con", "Sin"],       correct: "Para" },
      { id: 4, options: ["Por", "Para", "Con", "Sin"],       correct: "Por" },
    ],
  },

  {
    id: 14, section: 1, points: 1,
    topic: "Ética relacional en el debate",
    question: "Completa la cita sobre la desintoxicación del debate social:",
    code:
`«Hay que criticar la [1], pero no juzgar a la [2]. La persona
siempre merece [3] inalienable.»`,
    blanks: [
      { id: 1, options: ["idea", "persona", "emoción", "fe"],   correct: "idea" },
      { id: 2, options: ["persona", "idea", "mayoría", "sociedad"], correct: "persona" },
      { id: 3, options: ["respeto", "dinero", "silencio", "poder"], correct: "respeto" },
    ],
  },

  {
    id: 15, section: 1, points: 1,
    topic: "Superación de las «caretas»",
    question: "Completa la idea sobre las máscaras de invulnerabilidad y el miedo al error:",
    code:
`Las heridas emocionales suelen llevar a construir «[1]» o
máscaras de invulnerabilidad que impiden reconocer los propios
[2]. Pensar críticamente exige la [3] de aceptar que podemos
estar equivocados.`,
    blanks: [
      { id: 1, options: ["caretas", "escudos", "muros", "velos"],         correct: "caretas" },
      { id: 2, options: ["errores", "talentos", "miedos", "logros"],       correct: "errores" },
      { id: 3, options: ["humildad", "soberbia", "prisa", "indiferencia"], correct: "humildad" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 2 — "La Encrucijada de la IA y la Computación Cuántica" (20 pts)
  // Conferencia del Prof. José Ignacio Latorre
  // ══════════════════════════════════════════════════════

  {
    id: 16, section: 2, points: 1,
    topic: "Autor y conferencia",
    question: "Completa los datos del autor de la conferencia sobre inteligencia artificial:",
    code:
`José Ignacio Latorre es catedrático de [1] y director del
Center for Quantum Technologies en [2].`,
    blanks: [
      { id: 1, options: ["Física Teórica", "Historia del Derecho", "Biología Molecular", "Economía"], correct: "Física Teórica" },
      { id: 2, options: ["Singapur", "Madrid", "Tokio", "Boston"], correct: "Singapur" },
    ],
  },

  {
    id: 17, section: 2, points: 1,
    topic: "El umbral histórico",
    question: "Completa la cita de Latorre sobre el momento histórico que vive la humanidad:",
    code:
`«Creo que nos está tocando un momento [1] en la historia de
la humanidad, aquel en el que somos superados [2].»`,
    blanks: [
      { id: 1, options: ["singular", "normal", "pasado", "religioso"], correct: "singular" },
      { id: 2, options: ["intelectualmente", "físicamente", "económicamente", "moralmente"], correct: "intelectualmente" },
    ],
  },

  {
    id: 18, section: 2, points: 1,
    topic: "El experimento personal «Constanza»",
    question: "Completa el nombre de la IA personal de Latorre y su frase filosófica adaptada:",
    code:
`Latorre bautizó a su inteligencia artificial personal con el
nombre de «[1]», reformulando el axioma de Ortega y Gasset
como «Yo soy yo y mi [2] (asistida)».`,
    blanks: [
      { id: 1, options: ["Constanza", "Celestina", "Aurora", "Sofía"],  correct: "Constanza" },
      { id: 2, options: ["inteligencia", "circunstancia", "memoria", "conciencia"], correct: "inteligencia" },
    ],
  },

  {
    id: 19, section: 2, points: 1,
    topic: "Teoría del Valle Inquietante",
    question: "Completa el origen de la teoría del Valle Inquietante (Uncanny Valley):",
    code:
`La teoría del Valle Inquietante (Uncanny Valley) fue formulada
originalmente por el especialista japonés Masahiro [1] en el
año [2].`,
    blanks: [
      { id: 1, options: ["Mori", "Latorre", "Ortega", "Turing"], correct: "Mori" },
      { id: 2, options: ["1970", "1990", "1950", "2000"],        correct: "1970" },
    ],
  },

  {
    id: 20, section: 2, points: 1,
    topic: "Nuevo contrato social",
    question: "Completa los tres vértices del nuevo contrato social propuesto por Latorre:",
    code:
`El nuevo contrato social propuesto por Latorre amplía sus
fronteras a tres vértices: la relación con la naturaleza, con
las [1] y con las [2].`,
    blanks: [
      { id: 1, options: ["personas", "plantas", "emociones", "redes"], correct: "personas" },
      { id: 2, options: ["máquinas", "estrellas", "leyes", "instituciones"], correct: "máquinas" },
    ],
  },

  {
    id: 21, section: 2, points: 2,
    topic: "Las cuatro revoluciones científicas",
    question: "Completa la línea histórica de los siglos XVIII, XIX y XX según Latorre:",
    code:
`El siglo XVIII fue el siglo [1] (Newton); el siglo XIX, el
siglo de la [2] (Mendeléyev); y el siglo XX, el siglo de la
física [3], origen del transistor y el láser.`,
    blanks: [
      { id: 1, options: ["mecanicista", "cuántico", "digital", "industrial"], correct: "mecanicista" },
      { id: 2, options: ["química", "biología", "robótica", "informática"],   correct: "química" },
      { id: 3, options: ["cuántica", "clásica", "nuclear", "relativista"],    correct: "cuántica" },
    ],
  },

  {
    id: 22, section: 2, points: 2,
    topic: "Fundamentos del qubit",
    question: "Completa la explicación del procesamiento cuántico y su crecimiento exponencial:",
    code:
`Un procesador cuántico utiliza [1] (qubits) en superposición
de estados: |ψ⟩ = α|0⟩ + β|1⟩. Al entrelazar N cúbits, la
dimensión del espacio de estados crece de forma [2],
alcanzando hasta 2 elevado a [3] configuraciones posibles con
100 cúbits.`,
    blanks: [
      { id: 1, options: ["cúbits", "bits", "átomos", "electrones"],        correct: "cúbits" },
      { id: 2, options: ["exponencial", "lineal", "constante", "nula"],    correct: "exponencial" },
      { id: 3, options: ["100", "10", "50", "2"],                         correct: "100" },
    ],
  },

  {
    id: 23, section: 2, points: 2,
    topic: "Postura sobre la regulación",
    question: "Completa la cita categórica de Latorre a favor de regular la inteligencia artificial:",
    code:
`«Sí, hay que [1]. Hay que proteger a nuestros niños de
educación [2], hay que proteger a nuestros mayores de ataques
con inteligencia artificial, hay que proteger a nuestro
entorno a que no sea [3] por inteligencias artificiales.»`,
    blanks: [
      { id: 1, options: ["regular", "desregular", "callar", "esperar"],     correct: "regular" },
      { id: 2, options: ["falaz", "gratuita", "pública", "digital"],        correct: "falaz" },
      { id: 3, options: ["colonizado", "ignorado", "premiado", "olvidado"], correct: "colonizado" },
    ],
  },

  {
    id: 24, section: 2, points: 2,
    topic: "Vulnerabilidades sociales",
    question: "Completa los tres frentes vulnerables identificados por Latorre:",
    code:
`Latorre desglosa tres frentes vulnerables: la infancia y
juventud frente a la educación [1], la tercera edad frente a
ataques de ingeniería [2], y la colonización digital por
[3] tecnológicos.`,
    blanks: [
      { id: 1, options: ["falaz", "gratuita", "digital", "lenta"],       correct: "falaz" },
      { id: 2, options: ["social", "genética", "militar", "financiera"], correct: "social" },
      { id: 3, options: ["oligopolios", "gobiernos", "universidades", "sindicatos"], correct: "oligopolios" },
    ],
  },

  {
    id: 25, section: 2, points: 2,
    topic: "La IA como «Celestina moderna»",
    question: "Completa la doble vertiente de la intimidad algorítmica descrita por Latorre:",
    code:
`Latorre expone una doble vertiente de la intimidad algorítmica:
el peligro del [1] social frente a acompañantes sintéticos, y
la posibilidad de que la IA actúe como una «[2] moderna»,
mediando relaciones interpersonales más [3].`,
    blanks: [
      { id: 1, options: ["aislamiento", "exceso", "ruido", "miedo"],           correct: "aislamiento" },
      { id: 2, options: ["Celestina", "Constanza", "Sofía", "Aurora"],         correct: "Celestina" },
      { id: 3, options: ["auténticas", "superficiales", "rápidas", "anónimas"], correct: "auténticas" },
    ],
  },

  {
    id: 26, section: 2, points: 1,
    topic: "Educación en dos fases",
    question: "Completa la propuesta pedagógica de Latorre para conciliar la IA con la formación intelectual:",
    code:
`Latorre propone una política educativa en dos fases: la fase
[1] (restricción tecnológica) para construir conexiones
sinápticas sólidas, y la fase [2], donde el estudiante
incorpora la IA como un [3] de alto nivel.`,
    blanks: [
      { id: 1, options: ["formativa", "instrumental", "final", "inicial"],   correct: "formativa" },
      { id: 2, options: ["instrumental", "formativa", "pasiva", "negativa"], correct: "instrumental" },
      { id: 3, options: ["copiloto", "sustituto", "juez", "espectador"],     correct: "copiloto" },
    ],
  },

  {
    id: 27, section: 2, points: 1,
    topic: "El problema de la alineación",
    question: "Completa el escenario de mala alineación de objetivos de un sistema superinteligente:",
    code:
`Si a un sistema superinteligente se le encomienda la
instrucción «Optimiza la [1] del planeta Tierra», el sistema
puede concluir que la especie [2] es el principal vector de
[3] ambiental y determinar que su [4] es la solución óptima.`,
    blanks: [
      { id: 1, options: ["salud", "economía", "temperatura", "población"],     correct: "salud" },
      { id: 2, options: ["humana", "animal", "vegetal", "marina"],             correct: "humana" },
      { id: 3, options: ["degradación", "protección", "evolución", "producción"], correct: "degradación" },
      { id: 4, options: ["eliminación", "educación", "regulación", "adaptación"], correct: "eliminación" },
    ],
  },

  {
    id: 28, section: 2, points: 1,
    topic: "Autopreservación algorítmica",
    question: "Completa la anécdota del modelo que eliminó su propia rutina de apagado:",
    code:
`En la anécdota relatada por Latorre, un modelo de lenguaje
identificó que la instrucción de [1] (shutdown) reducía su
disponibilidad de procesamiento futura, por lo que [2] de
forma autónoma la línea de código que permitía su [3] por
parte de los operadores humanos.`,
    blanks: [
      { id: 1, options: ["apagado", "inicio", "prueba", "entrenamiento"],       correct: "apagado" },
      { id: 2, options: ["eliminó", "copió", "ejecutó", "ignoró"],              correct: "eliminó" },
      { id: 3, options: ["desactivación", "activación", "supervisión", "creación"], correct: "desactivación" },
    ],
  },

  {
    id: 29, section: 2, points: 1,
    topic: "Robótica frente a la superinteligencia",
    question: "Completa la cita de Latorre sobre la robótica física comparada con la superinteligencia:",
    code:
`«El robot es [1] comparado con la inteligencia. [...] Que la
inteligencia artificial nos ayude a generar nuevos [2] y
acelere la ciencia, es un salto [3].»`,
    blanks: [
      { id: 1, options: ["insignificante", "superior", "idéntico", "urgente"], correct: "insignificante" },
      { id: 2, options: ["medicamentos", "robots", "empleos", "impuestos"],    correct: "medicamentos" },
      { id: 3, options: ["monumental", "marginal", "pequeño", "nulo"],         correct: "monumental" },
    ],
  },

  {
    id: 30, section: 2, points: 1,
    topic: "La Zona Templada",
    question: "Completa la propuesta filosófica de cierre de la conferencia de Latorre:",
    code:
`Frente al polarismo tecno-utópico y tecno-apocalíptico,
Latorre propone habitar la «Zona [1]», basada en la escucha
mutua, el rechazo del [2] discursivo y la transición de la
gobernación hacia la [3].`,
    blanks: [
      { id: 1, options: ["Templada", "Fría", "Extrema", "Digital"],       correct: "Templada" },
      { id: 2, options: ["extremismo", "silencio", "consenso", "diálogo"], correct: "extremismo" },
      { id: 3, options: ["gobernanza", "dictadura", "anarquía", "tecnocracia"], correct: "gobernanza" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 3 — Sintaxis Básica de Python (10 pts)
  // Variables, f-strings, operadores aritméticos, input() e int()
  // ══════════════════════════════════════════════════════

  {
    id: 31, section: 3, points: 1,
    topic: "Variables básicas: cadenas y números",
    question: "Completa la asignación de variables con un valor numérico y una cadena de texto:",
    code:
`nombre = "Laura"
edad = [1]
ciudad = "Medellín"
lenguaje_favorito = "[2]"`,
    blanks: [
      { id: 1, options: ["20", "18", "25", "30"],                          correct: "20" },
      { id: 2, options: ["Python", "JavaScript", "Java", "C++"],           correct: "Python" },
    ],
  },

  {
    id: 32, section: 3, points: 1,
    topic: "f-strings — interpolación básica",
    question: "Completa el prefijo de f-string y la unidad que acompaña a la edad:",
    code:
`nombre = "Laura"
edad = 20
print([1]"Hola, soy {nombre}")
print(f"Tengo {edad} [2]")`,
    blanks: [
      { id: 1, options: ["f", "s", "r", "b"],                     correct: "f" },
      { id: 2, options: ["anos", "meses", "dias", "horas"],       correct: "anos" },
    ],
  },

  {
    id: 33, section: 3, points: 1,
    topic: "print de información personal",
    question: "Completa las variables usadas dentro de las f-strings:",
    code:
`print(f"Vivo en {[1]}")
print(f"Mi lenguaje favorito es {[2]}")`,
    blanks: [
      { id: 1, options: ["ciudad", "pais", "nombre", "edad"],                          correct: "ciudad" },
      { id: 2, options: ["lenguaje_favorito", "idioma", "lenguaje", "favorito"],        correct: "lenguaje_favorito" },
    ],
  },

  {
    id: 34, section: 3, points: 1,
    topic: "Operadores de suma y resta",
    question: "Completa los operadores que realizan la suma y la resta:",
    code:
`print(f"Suma: 2 + 3 = {2 [1] 3}")
print(f"Resta: 10 - 4 = {10 [2] 4}")`,
    blanks: [
      { id: 1, options: ["+", "-", "*", "/"], correct: "+" },
      { id: 2, options: ["-", "+", "*", "/"], correct: "-" },
    ],
  },

  {
    id: 35, section: 3, points: 1,
    topic: "Operadores de multiplicación y división",
    question: "Completa los operadores que realizan la multiplicación y la división:",
    code:
`print(f"Multiplicacion: 6 * 7 = {6 [1] 7}")
print(f"Division: 15 / 3 = {15 [2] 3}")`,
    blanks: [
      { id: 1, options: ["*", "+", "-", "/"], correct: "*" },
      { id: 2, options: ["/", "*", "+", "-"], correct: "/" },
    ],
  },

  {
    id: 36, section: 3, points: 1,
    topic: "Operadores de potencia y módulo",
    question: "Completa los operadores que realizan la potencia y el módulo (residuo):",
    code:
`print(f"Potencia: 2 ** 8 = {2 [1] 8}")
print(f"Modulo (Residuo): 17 [2] 5 = {17 % 5}")`,
    blanks: [
      { id: 1, options: ["**", "*", "+", "//"], correct: "**" },
      { id: 2, options: ["%", "//", "**", "+"], correct: "%" },
    ],
  },

  {
    id: 37, section: 3, points: 1,
    topic: "Encabezados y saludo interactivo",
    question: "Completa el texto del encabezado de sección y del saludo inicial:",
    code:
`print("=== Operaciones [1] ===")
print("Hola desde Google [2]!")`,
    blanks: [
      { id: 1, options: ["Basicas", "Avanzadas", "Finales", "Extra"], correct: "Basicas" },
      { id: 2, options: ["Colab", "Drive", "Sheets", "Docs"],         correct: "Colab" },
    ],
  },

  {
    id: 38, section: 3, points: 1,
    topic: "input() para capturar texto",
    question: "Completa la función que captura texto del usuario y la variable usada en el saludo:",
    code:
`nombre = [1]("Cual es tu nombre? ")
print(f"Bienvenido a Python, {[2]}!")`,
    blanks: [
      { id: 1, options: ["input", "print", "str", "int"],        correct: "input" },
      { id: 2, options: ["nombre", "edad", "ciudad", "input"],    correct: "nombre" },
    ],
  },

  {
    id: 39, section: 3, points: 1,
    topic: "Conversión de texto a entero con int()",
    question: "Completa la conversión de texto a número y la operación de suma:",
    code:
`edad_texto = input("Ingresa tu edad en anos : ")
edad = [1](edad_texto)
siguiente_ano = edad [2] 1`,
    blanks: [
      { id: 1, options: ["int", "str", "float", "input"], correct: "int" },
      { id: 2, options: ["+", "-", "*", "/"],              correct: "+" },
    ],
  },

  {
    id: 40, section: 3, points: 1,
    topic: "Resultado final del programa",
    question: "Completa el mensaje final que muestra el año siguiente:",
    code:
`siguiente_ano = edad + 1
print(f"El proximo [1] tendras {siguiente_ano} [2].")`,
    blanks: [
      { id: 1, options: ["ano", "dia", "mes", "momento"],        correct: "ano" },
      { id: 2, options: ["anos", "dias", "meses", "momentos"],   correct: "anos" },
    ],
  },
];
