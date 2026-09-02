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
  services: Section & { items: string[] };
  quote: string;
  method: Section & { lead: string; paragraphs: string[] };
  about: Section & { paragraphs: string[]; image: Img };
  online: Section & { paragraphs: string[]; image: Img };
  faq: Section & { items: FaqItem[] };
  instagram: Instagram;
  contact: Contact;
};

export type Profile = {
  name: string;
  role: string;
  license: string;
  whatsapp: {
    display: string;
    /** Solo dígitos, como lo pide wa.me: país + 9 + característica + abonado. */
    number: string;
    /** Texto que aparece ya escrito en el chat. Se escapa al armar el enlace. */
    message: string;
  };
  instagram: { handle: string; href: string };
};

export type NavItem = { label: string; href: string };
export type Section = { eyebrow?: string; title: string };
export type FaqItem = { q: string; a: string };
export type Contact = Section & { body: string; cta: string };
export type Instagram = Section & {
  body: string;
  cta: string;
  posts: InstagramPost[];
};
/** `href` apunta a la publicación cuando se conozca; mientras tanto, al perfil. */
export type InstagramPost = { image: Img; href: string };

export const siteContent: SiteContent = {
  profile: {
    name: "Inés Taboga",
    role: "Psicóloga integral",
    license: "M.P. 1805",
    whatsapp: {
      display: "+54 9 342 535 6376",
      number: "5493425356376",
      message: "Hola! quisiera más información para empezar terapia.",
    },
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
    titleLead: "Te acompaño a",
    titleAccent: "volver a vos",
    body: "Un espacio para encontrarte con vos mismo, con más amorosidad, mirar de otra manera eso que hoy te hace sufrir y empezar a elegir desde quien realmente sos.",
    cta: "Quiero comenzar terapia",
    image: {
      src: "/img/retrato.jpg",
      alt: "Mesa y sillones del consultorio, vistos desde arriba",
      width: 900,
      height: 1200,
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
    title: "Puedo acompañarte si estás atravesando:",
    items: [
      "Ansiedad y sobrepensamiento",
      "Autoestima e inseguridad",
      "Dificultades en vínculos",
      "Dependencia emocional",
      "Separaciones y duelos",
      "Dificultad para poner límites",
      "Crisis personales o momentos de cambio",
      "Sensación de vacío, bloqueo o desconexión",
    ],
  },

  quote:
    "No se trata de convertirte en otra persona, sino de dejar de pelearte con la que sos.",

  method: {
    title: "Mi manera de trabajar",
    lead: "Un espacio para entenderte, no para juzgarte.",
    paragraphs: [
      "En terapia partimos de lo que hoy te está pasando. Miramos juntos qué pensás, qué sentís y cómo interpretás eso que vivís, porque muchas veces no es solo lo que sucede lo que genera malestar, sino también la manera en que lo estamos mirando.",
      "El trabajo terapéutico busca poder cuestionar esas formas de pensar que a veces repetimos de manera automática, comprender de dónde vienen y abrir la posibilidad de mirar lo que nos pasa desde otro lugar.",
      "También trabajamos en volver al presente, conectar con lo que necesitás hoy y asumir un rol más activo frente a tu propia vida. No se trata de controlar todo lo que sucede, sino de poder elegir cómo posicionarte frente a eso.",
      "Mi forma de trabajar es integral, cercana y adaptada a cada persona, buscando que puedas vivir con mayor conciencia, libertad y calma.",
    ],
  },

  about: {
    eyebrow: "Sobre mí",
    title: "Hola, soy Inés",
    paragraphs: [
      "Soy psicóloga clínica, graduada en la Universidad Católica de Santa Fe y hace 11 años acompaño a personas que están atravesando momentos de ansiedad, crisis, conflictos vinculares o etapas en las que sienten que necesitan volver a encontrarse con ellas mismas.",
      "Para mí, la terapia no se trata solamente de hablar de lo que duele. También es un espacio para comprenderte, adquirir herramientas y empezar a relacionarte de otra manera con vos y con los demás.",
    ],
    image: {
      src: "/img/sobre-mi.jpg",
      alt: "Retrato de Inés Taboga",
      width: 900,
      height: 900,
    },
  },

  online: {
    eyebrow: "Terapia online",
    title: "Estés donde estés, en tu idioma",
    paragraphs: [
      "Brindo atención psicológica online para personas de habla hispana que viven en Argentina o en otros países.",
      "Las sesiones se realizan por videollamada, en un espacio confidencial y cercano, para que puedas sostener tu proceso terapéutico desde el lugar en el que estés.",
    ],
    image: {
      src: "/img/online.jpg",
      alt: "Notebook con una videollamada abierta sobre el escritorio del consultorio",
      width: 900,
      height: 1200,
    },
  },

  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cuánto dura una sesión?",
        a: "Cada sesión tiene una duración aproximada de 60 minutos.",
      },
      {
        q: "¿Las sesiones pueden ser online?",
        a: "Sí. Brindo atención online para personas de habla hispana, que se encuentran en cualquier parte del mundo.",
      },
      {
        q: "¿Cómo son las sesiones online?",
        a: "Se realizan por videollamada, en un espacio privado y confidencial. Solo necesitás contar con una buena conexión a internet y un lugar donde puedas hablar con tranquilidad.",
      },
      {
        q: "¿Qué pasa en la primera sesión?",
        a: "La primera sesión es un espacio para conocernos, conversar sobre qué te está pasando y qué te gustaría trabajar. No necesitás llegar con todo claro ni saber exactamente por dónde empezar.",
      },
      {
        q: "¿Cómo sé si necesito empezar terapia?",
        a: "No hace falta estar atravesando una crisis para comenzar. Podés consultar si hay algo que te genera malestar, si sentís que repetís situaciones que no querés, si necesitás comprenderte mejor o simplemente si querés empezar a relacionarte de otra manera con vos y con lo que te pasa.",
      },
      {
        q: "¿Cómo solicito un turno?",
        a: "Podés contactarme directamente a través de WhatsApp. Coordinamos disponibilidad y modalidad de atención.",
      },
      {
        q: "¿Qué pasa si necesito cancelar una sesión?",
        a: "Avisando con 24 horas de anticipación, la reprogramamos sin costo. Las cancelaciones con menos aviso se abonan, porque ese horario queda reservado para vos.",
      },
    ],
  },

  instagram: {
    eyebrow: "Instagram",
    title: "Lo que comparto",
    body: "En Instagram publico material sobre lo que aparece en terapia: vínculos, ansiedad y las cosas que solemos repetir sin darnos cuenta.",
    cta: "Seguime en Instagram",
    posts: [
      {
        image: {
          src: "/img/ig-1.jpg",
          alt: "Ver publicación en Instagram",
          width: 600,
          height: 600,
        },
        href: "https://www.instagram.com/p/Dba19GukRFY/",
      },
      {
        image: {
          src: "/img/ig-2.jpg",
          alt: "Ver publicación en Instagram",
          width: 600,
          height: 600,
        },
        href: "https://www.instagram.com/p/DbMNBtYClpq/",
      },
      {
        image: {
          src: "/img/ig-3.jpg",
          alt: "Ver publicación en Instagram",
          width: 600,
          height: 600,
        },
        href: "https://www.instagram.com/p/DaVQnKMFsm8/",
      },
      {
        image: {
          src: "/img/ig-4.jpg",
          alt: "Ver publicación en Instagram",
          width: 600,
          height: 600,
        },
        href: "https://www.instagram.com/p/DZvovuZFoPh/",
      },
      {
        image: {
          src: "/img/ig-5.jpg",
          alt: "Ver publicación en Instagram",
          width: 600,
          height: 600,
        },
        href: "https://www.instagram.com/p/DZLqMtAlnhj/",
      },
      {
        image: {
          src: "/img/ig-6.jpg",
          alt: "Ver publicación en Instagram",
          width: 600,
          height: 600,
        },
        href: "https://www.instagram.com/p/DZ-RJHOib3z/",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Mi objetivo es que puedas volver a vos y vivas una vida que vale la pena",
    body: "Escribime contándome brevemente qué te pasa y coordinamos una primera sesión. Respondo personalmente, en un plazo de [24/48] horas.",
    cta: "Agendá una sesión conmigo",
  },
};

type Hero = {
  titleLead: string;
  titleAccent: string;
  body: string;
  /** Un solo llamado a la acción, y va directo a WhatsApp. */
  cta: string;
  image: Img;
};

type Reasons = { title: string; items: string[]; closing: string };

/** Las medidas son las del archivo original: Next las necesita para reservar
 *  el espacio y evitar que el texto salte mientras carga la imagen. */
type Img = { src: string; alt: string; width: number; height: number };
