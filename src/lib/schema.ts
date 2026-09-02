import type { SiteContent } from "@/content/site";

/**
 * Datos estructurados (JSON-LD, schema.org).
 *
 * Es la forma en que buscadores y asistentes de IA entienden *qué es* esta
 * página, en lugar de adivinarlo del texto. Declara quién atiende, en qué
 * idioma, desde dónde y para qué países, y repite las preguntas frecuentes en
 * un formato que las máquinas citan directamente.
 *
 * Se construye a partir de `SiteContent`, nunca a mano: si mañana cambia una
 * pregunta frecuente en el archivo de contenido, cambia también acá. Dos
 * fuentes separadas se desincronizan y terminan contradiciéndose, que es
 * justo lo que penaliza un buscador.
 */

/** Países donde vive el público al que apunta la práctica. */
const PAISES = [
  "Argentina",
  "España",
  "México",
  "Colombia",
  "Chile",
  "Uruguay",
  "Perú",
  "Ecuador",
  "Paraguay",
  "Bolivia",
  "Venezuela",
  "Costa Rica",
  "Panamá",
  "República Dominicana",
  "Estados Unidos",
  "Italia",
  "Israel",
];

export function buildSchema(content: SiteContent, sitio: string) {
  const { profile, about, services, faq, online } = content;
  const telefono = `+${profile.whatsapp.number}`;

  const persona = {
    "@type": "Person",
    "@id": `${sitio}/#ines`,
    name: profile.name,
    givenName: "Inés",
    familyName: "Taboga",
    jobTitle: "Psicóloga clínica",
    description: about.paragraphs[0],
    url: sitio,
    image: `${sitio}/img/sobre-mi.jpg`,
    telephone: telefono,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Católica de Santa Fe",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Matrícula profesional",
      value: profile.license,
    },
    knowsLanguage: [{ "@type": "Language", name: "Español", alternateName: "es" }],
    sameAs: [profile.instagram.href],
  };

  const practica = {
    "@type": ["ProfessionalService", "MedicalBusiness"],
    "@id": `${sitio}/#practica`,
    name: `${profile.name} · Psicología`,
    description: online.paragraphs.join(" "),
    url: sitio,
    image: `${sitio}/og.png`,
    telephone: telefono,
    priceRange: "$$",
    founder: { "@id": `${sitio}/#ines` },
    provider: { "@id": `${sitio}/#ines` },
    employee: { "@id": `${sitio}/#ines` },
    availableLanguage: [{ "@type": "Language", name: "Español", alternateName: "es" }],
    areaServed: PAISES.map((name) => ({ "@type": "Country", name })),
    /** Atiende sólo por videollamada: no hay dirección física que declarar. */
    serviceType: "Psicoterapia online",
    knowsAbout: services.items,
    sameAs: [profile.instagram.href],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: services.title,
      itemListElement: services.items.map((motivo) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: motivo,
          serviceType: "Psicoterapia online",
          provider: { "@id": `${sitio}/#ines` },
        },
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Agendar una sesión",
      target: `https://wa.me/${profile.whatsapp.number}`,
    },
  };

  const preguntas = {
    "@type": "FAQPage",
    "@id": `${sitio}/#preguntas`,
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const sitioWeb = {
    "@type": "WebSite",
    "@id": `${sitio}/#sitio`,
    url: sitio,
    name: profile.name,
    inLanguage: "es",
    publisher: { "@id": `${sitio}/#ines` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [persona, practica, preguntas, sitioWeb],
  };
}
