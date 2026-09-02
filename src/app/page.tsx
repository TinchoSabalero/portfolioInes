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
import { buildWhatsAppHref } from "@/lib/whatsapp";

export default async function Home() {
  const content = await getSiteContent();
  const whatsappHref = buildWhatsAppHref(content.profile.whatsapp);

  return (
    <>
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
