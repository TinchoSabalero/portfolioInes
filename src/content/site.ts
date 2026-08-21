/**
 * Todo el texto del sitio vive acá, separado del diseño.
 *
 * Para cambiar un precio, una pregunta frecuente o un dato de contacto se edita
 * este archivo y nada más. Los componentes nunca traen texto propio.
 *
 * Lo que está entre corchetes son datos reales que faltan completar.
 *
 * Cuando sumemos backend, este archivo deja de ser la fuente de datos y pasa a
 * ser el fallback: `getSiteContent()` (en src/lib/content.ts) leerá de la base
 * y devolverá esta misma forma, así que los componentes no cambian.
 */

export type SiteContent = {
  profile: Profile;
  nav: NavItem[];
  hero: Hero;
  reasons: Reasons;
  services: Section & { items: Service[] };
  quote: string;
  method: Section & { intro: string; principles: Principle[] };
  about: Section & { paragraphs: string[]; credentials: string[]; image: Img };
  online: Section & { intro: string; points: OnlinePoint[]; image: Img };
  faq: Section & { items: FaqItem[] };
  contact: Contact;
};

export type Profile = {
  name: string;
  role: string;
  license: string;
  email: string;
  whatsapp: { display: string; href: string };
  instagram: { handle: string; href: string };
};

export type NavItem = { label: string; href: string };
export type Section = { eyebrow?: string; title: string };
export type Service = { icon: ServiceIcon; title: string; body: string };
export type ServiceIcon = "heart" | "bond" | "journey";
export type Principle = { title: string; body: string };
export type OnlinePoint = { icon: OnlineIcon; body: string };
export type OnlineIcon = "clock" | "screen" | "card";
export type FaqItem = { q: string; a: string };
export type Contact = Section & { body: string; cta: string };

export const siteContent: SiteContent = {
  profile: {
    name: "Inés Taboga",
    role: "Psicóloga · Terapia online",
    license: "[M.N. 00000]",
    email: "[tu-email]",
    whatsapp: { display: "WhatsApp [+54 9 ...]", href: "https://wa.me/[NUMERO]" },
    instagram: {
      handle: "@psicologa_inestaboga",
      href: "https://instagram.com/psicologa_inestaboga",
    },
  },

  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Terapia", href: "#terapia" },
    { label: "Terapia online", href: "#online" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ],

  hero: {
    eyebrow: "Terapia online en español",
    titleLead: "Un lugar para pensarte,",
    titleAccent: "en tu idioma",
    body: "Acompaño a personas en Argentina y a quienes viven lejos de casa. Sesiones por videollamada, con la misma continuidad y el mismo cuidado que en el consultorio.",
    cta: "Agendar una primera entrevista",
    secondary: { label: "Cómo trabajo", href: "#terapia" },
    image: {
      src: "/img/retrato.jpg",
      alt: "Retrato de Inés Taboga",
      width: 720,
      height: 960,
    },
  },

  reasons: {
    title: "Quizás llegaste hasta acá porque…",
    items: [
      "Te fuiste del país y sentís que estás empezando de cero, otra vez.",
      "La ansiedad te ocupa más lugar del que quisieras.",
      "Repetís los mismos vínculos y no terminás de entender por qué.",
      "Estás atravesando un duelo que nadie a tu alrededor termina de dimensionar.",
      "Querés hablar en tu idioma, con alguien que entienda de dónde venís.",
      "Hace rato que pensás en empezar terapia y siempre lo postergás.",
    ],
    closing: "Ninguna de esas razones es demasiado chica para pedir ayuda.",
  },

  services: {
    eyebrow: "Terapia",
    title: "Cómo puedo acompañarte",
    items: [
      {
        icon: "heart",
        title: "Terapia individual",
        body: "Ansiedad, tristeza, autoestima, decisiones que se vienen postergando. Un espacio para entender qué te pasa y qué querés hacer con eso.",
      },
      {
        icon: "bond",
        title: "Vínculos y pareja",
        body: "Discusiones que se repiten, distancia, celos, el peso de sostener a otros. Revisamos qué lugar ocupás vos en tus relaciones.",
      },
      {
        icon: "journey",
        title: "Migración y desarraigo",
        body: "Armar una vida en otro país tiene costos que casi nadie nombra. Trabajamos la culpa, la distancia y la identidad que se reacomoda.",
      },
    ],
  },

  quote:
    "No se trata de convertirte en otra persona, sino de dejar de pelearte con la que sos.",

  method: {
    eyebrow: "Método",
    title: "Mi manera de trabajar",
    intro:
      "No creo en las recetas ni en los consejos rápidos. Creo en escuchar con atención hasta que aparece algo que no se había podido decir antes.",
    principles: [
      {
        title: "Escucha sin apuro",
        body: "Cada persona llega con su tiempo. No hay una cantidad de sesiones fijada de antemano ni un guion que haya que cumplir.",
      },
      {
        title: "Trabajo con lo que traés",
        body: "Lo urgente y lo cotidiano también son material de análisis. De ahí solemos llegar a lo que verdaderamente importa.",
      },
      {
        title: "Confidencialidad, siempre",
        body: "Lo que pasa en sesión queda en sesión. Es la condición mínima para poder hablar con libertad.",
      },
      {
        title: "Formación continua",
        body: "Superviso mi práctica y sigo estudiando. Tu proceso merece a alguien que también se siga preguntando cosas.",
      },
    ],
  },

  about: {
    eyebrow: "Sobre mí",
    title: "Hola, soy Inés",
    paragraphs: [
      "Soy psicóloga clínica, graduada en la [UNIVERSIDAD] y matriculada bajo el [M.N. 00000]. Hace [X] años que acompaño procesos terapéuticos, y desde hace [X] trabajo casi exclusivamente de forma online.",
      "Buena parte de las personas que consulto están fuera de Argentina. Conozco de cerca lo que significa sostener una vida acá y los afectos allá, y lo raro que se vuelve todo cuando no podés explicarlo en tu propio idioma.",
    ],
    credentials: [
      "[Formación de posgrado — completar]",
      "[Especialización / cursos destacados — completar]",
    ],
    image: {
      src: "/img/sobre-mi.jpg",
      alt: "Inés Taboga en su espacio de trabajo",
      width: 820,
      height: 820,
    },
  },

  online: {
    eyebrow: "Terapia online",
    title: "Estés donde estés, en tu idioma",
    intro:
      "Atiendo por videollamada a personas en Argentina y en cualquier otro país. La distancia no cambia lo esencial: un horario fijo, un espacio propio y alguien del otro lado escuchando.",
    points: [
      {
        icon: "clock",
        body: "Coordinamos el horario según tu huso. Trabajo con agenda flexible para Europa y Norteamérica.",
      },
      {
        icon: "screen",
        body: "Solo necesitás una hora tranquila, un lugar donde nadie te interrumpa y buena conexión.",
      },
      {
        icon: "card",
        body: "Pago desde el exterior por [medio de pago] y desde Argentina por [transferencia / Mercado Pago].",
      },
    ],
    image: {
      src: "/img/online.jpg",
      alt: "Sesión de terapia por videollamada",
      width: 1000,
      height: 700,
    },
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que suelen preguntarme antes de empezar",
    items: [
      {
        q: "¿Cómo es la primera entrevista?",
        a: "Es una conversación de unos 50 minutos para conocernos. Me contás qué te trae, yo te cuento cómo trabajo y entre los dos vemos si tiene sentido seguir. No hay ningún compromiso de continuar.",
      },
      {
        q: "Vivo en otro país, ¿cómo hacemos con el horario?",
        a: "Lo acordamos según tu huso horario. Tengo franjas reservadas para Europa por la mañana argentina y para Norteamérica por la tarde. Fijamos un día y hora estables, para que la terapia tenga continuidad.",
      },
      {
        q: "¿La terapia online funciona igual que la presencial?",
        a: "Sí. La evidencia disponible muestra resultados equivalentes a los del formato presencial para la mayoría de las consultas. Lo que sostiene un tratamiento es el vínculo y la regularidad, y eso se construye igual a través de la pantalla.",
      },
      {
        q: "¿Cada cuánto son las sesiones y cuánto duran?",
        a: "Duran 50 minutos y en general son semanales. Esa frecuencia es la que permite que el trabajo tenga hilo. Si en algún momento conviene espaciarlas, lo conversamos.",
      },
      {
        q: "¿Cuánto sale y cómo se paga desde el exterior?",
        a: "La sesión tiene un valor de [PRECIO ARS] para Argentina y [PRECIO USD/EUR] desde el exterior. Se abona por [medios de pago]. Si el valor es un obstáculo, escribime y lo hablamos.",
      },
      {
        q: "¿Qué pasa si necesito cancelar una sesión?",
        a: "Avisando con [24/48] horas de anticipación, la reprogramamos sin costo. Las cancelaciones con menos aviso se abonan, porque ese horario queda reservado para vos.",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Empezar suele ser lo más difícil",
    body: "Escribime contándome brevemente qué te pasa y coordinamos una primera entrevista. Respondo personalmente, en un plazo de [24/48] horas.",
    cta: "Agendar una primera entrevista",
  },
};

type Hero = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  body: string;
  cta: string;
  secondary: NavItem;
  image: Img;
};

type Reasons = { title: string; items: string[]; closing: string };

/** Las medidas son las del archivo original: Next las necesita para reservar
 *  el espacio y evitar que el texto salte mientras carga la imagen. */
type Img = { src: string; alt: string; width: number; height: number };
