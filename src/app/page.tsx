import { Faq } from "@/components/Faq";
import {
  About,
  Contact,
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

export default async function Home() {
  const content = await getSiteContent();

  return (
    <>
      <SiteHeader profile={content.profile} nav={content.nav} />

      <main>
        <Hero hero={content.hero} whatsappHref={content.profile.whatsapp.href} />
        <Reasons reasons={content.reasons} />
        <Services services={content.services} />
        <Quote quote={content.quote} />
        <Method method={content.method} />
        <About about={content.about} />
        <Online online={content.online} />
        <Faq faq={content.faq} />
        <Contact contact={content.contact} profile={content.profile} />
      </main>

      <SiteFooter profile={content.profile} />
      <WhatsAppButton href={content.profile.whatsapp.href} />
    </>
  );
}
