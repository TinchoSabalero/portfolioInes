import Image from "next/image";
import type { SiteContent } from "@/content/site";
import {
  ArrowRight,
  WhatsAppIcon,
  onlineIcons,
  serviceIcons,
} from "./Icons";
import styles from "./Sections.module.css";

/* ---------------------------------------------------------------- Hero -- */

export function Hero({ hero }: { hero: SiteContent["hero"] }) {
  return (
    <section id="inicio" className={`wrap split ${styles.hero}`}>
      <div className={styles.heroText}>
        <p className={styles.heroEyebrow}>
          <span>{hero.eyebrow}</span>
        </p>
        <h1 className={styles.heroTitle}>
          {hero.titleLead}
          <br />
          <em>{hero.titleAccent}</em>.
        </h1>
        <p className={styles.heroBody}>{hero.body}</p>
        <div className={styles.heroActions}>
          <a href="#contacto" className="btn">
            {hero.cta}
            <ArrowRight />
          </a>
          <a href={hero.secondary.href} className={styles.heroLink}>
            {hero.secondary.label}
          </a>
        </div>
      </div>

      <div className="matted">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          className={styles.heroImg}
          priority
        />
      </div>
    </section>
  );
}

/* ----------------------------------------- Quizás llegaste hasta acá -- */

export function Reasons({ reasons }: { reasons: SiteContent["reasons"] }) {
  const half = Math.ceil(reasons.items.length / 2);
  const columns = [reasons.items.slice(0, half), reasons.items.slice(half)];

  return (
    <section className="band">
      <div className="wrap section">
        <h2 className={`title ${styles.reasonsTitle}`}>{reasons.title}</h2>

        <div className={styles.reasonsGrid}>
          {columns.map((column, i) => (
            <div key={i} className={styles.reasonsCol}>
              {column.map((item) => (
                <div key={item} className={styles.reason}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className={styles.reasonsClosing}>{reasons.closing}</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Servicios -- */

export function Services({ services }: { services: SiteContent["services"] }) {
  return (
    <section id="terapia" className="wrap section">
      <div className={styles.head}>
        <p className="eyebrow">{services.eyebrow}</p>
        <h2 className="title">{services.title}</h2>
      </div>

      <div className={styles.cards}>
        {services.items.map((service) => {
          const Icon = serviceIcons[service.icon];
          return (
            <article key={service.title} className={styles.card}>
              <Icon size={26} />
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Cita -- */

export function Quote({ quote }: { quote: string }) {
  return (
    <section className={styles.quote}>
      <blockquote className={styles.quoteCard}>
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
    </section>
  );
}

/* --------------------------------------------------------------- Método -- */

export function Method({ method }: { method: SiteContent["method"] }) {
  return (
    <section className="wrap section">
      <div className="split split-top">
        <div className={styles.head} style={{ marginBottom: 0 }}>
          <p className="eyebrow">{method.eyebrow}</p>
          <h2 className="title">{method.title}</h2>
          <p className={styles.methodIntro}>{method.intro}</p>
        </div>

        <div className={styles.principles}>
          {method.principles.map((principle) => (
            <div key={principle.title} className={styles.principle}>
              <h3 className={styles.principleTitle}>{principle.title}</h3>
              <p>{principle.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Sobre mí -- */

export function About({ about }: { about: SiteContent["about"] }) {
  return (
    <section id="sobre-mi" className="band">
      <div className="wrap section split">
        <div className="matted matted-right">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            className={styles.aboutImg}
          />
        </div>

        <div className={styles.aboutText}>
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="title">{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className={styles.credentials}>
            {about.credentials.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Terapia online -- */

export function Online({ online }: { online: SiteContent["online"] }) {
  return (
    <section id="online" className="wrap section split">
      <div className={styles.onlineText}>
        <p className={`eyebrow ${styles.onlineEyebrow}`}>{online.eyebrow}</p>
        <h2 className="title">{online.title}</h2>
        <p className="lede" style={{ maxWidth: "44ch" }}>
          {online.intro}
        </p>

        <div className={styles.onlinePoints}>
          {online.points.map((point) => {
            const Icon = onlineIcons[point.icon];
            return (
              <div key={point.body} className={styles.onlinePoint}>
                <Icon size={20} />
                <p>{point.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Image
        src={online.image.src}
        alt={online.image.alt}
        width={online.image.width}
        height={online.image.height}
        className={styles.onlineImg}
      />
    </section>
  );
}

/* ------------------------------------------------------------- Contacto -- */

export function Contact({
  contact,
  profile,
}: {
  contact: SiteContent["contact"];
  profile: SiteContent["profile"];
}) {
  return (
    <section id="contacto" className={styles.contact}>
      <div className={`wrap section ${styles.contactInner}`}>
        <p className={`eyebrow ${styles.contactEyebrow}`}>{contact.eyebrow}</p>
        <h2 className={`title ${styles.contactTitle}`}>{contact.title}</h2>
        <p className={styles.contactBody}>{contact.body}</p>

        <a
          href={profile.whatsapp.href}
          className={`btn btn-invert ${styles.contactCta}`}
        >
          {contact.cta}
          <ArrowRight />
        </a>

        <div className={styles.contactLinks}>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.whatsapp.href}>{profile.whatsapp.display}</a>
          <a
            href={profile.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.instagram.handle}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Pie -- */

export function SiteFooter({ profile }: { profile: SiteContent["profile"] }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.footerInner}`}>
        <p>
          © {year} {profile.name} · Psicóloga · {profile.license}
        </p>
        <p>[Política de privacidad]</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------ Botón flotante WhatsApp -- */

export function WhatsAppButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className={styles.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <WhatsAppIcon size={24} />
      <span className={styles.whatsappLabel}>Conversemos</span>
    </a>
  );
}
