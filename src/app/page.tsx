import { Faq } from "@/components/Faq";
import {
  About,
  Contact,
  Instagram,
  Hero,
  Method,
  Online,
  Quote,
  Reasons,
  Services,
  SiteFooter,
  WhatsAppButton,
} from "@/components/Sections";
import { SiteHeader } from "@/components/SiteHeader";
import { getSiteContent } from "@/lib/content";
import { buildSchema } from "@/lib/schema";
import { SITIO } from "@/lib/site";
import { buildWhatsAppHref } from "@/lib/whatsapp";

export default async function Home() {
  const content = await getSiteContent();
  const whatsappHref = buildWhatsAppHref(content.profile.whatsapp);
  const schema = buildSchema(content, SITIO);

  return (
    <>
      {/* Datos estructurados: lo que leen buscadores y asistentes de IA. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SiteHeader profile={content.profile} nav={content.nav} />

      <main>
        <Hero hero={content.hero} whatsappHref={whatsappHref} />
        <Reasons reasons={content.reasons} />
        <Services services={content.services} />
        <Quote quote={content.quote} />
        <Method method={content.method} />
        <About about={content.about} instagram={content.profile.instagram} />
        <Online online={content.online} />
        <Faq faq={content.faq} />
        <Instagram
          instagram={content.instagram}
          profile={content.profile.instagram}
        />
        <Contact
          contact={content.contact}
          profile={content.profile}
          whatsappHref={whatsappHref}
        />
      </main>

      <SiteFooter profile={content.profile} />
      <WhatsAppButton href={whatsappHref} />
    </>
  );
}
