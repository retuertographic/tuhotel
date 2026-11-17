import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { ShareSection } from "./ShareSection";
import { Container, PageTitle } from "./primitives";

export function ContactPage({ path }: { path: string }) {
  return (
    <>
      <PageTitle title="Contacto" />
      <section className="py-20 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm />
          <aside className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="mt-1 size-6 shrink-0 text-brand" aria-hidden />
              <h2 className="font-heading text-[17px] font-bold leading-[1.6] text-ink">
                Calle Montaña Clara, 5, local 4<br />
                38660 Fañabé
                <br />
                Santa Cruz de Tenerife
                <br />
                España
              </h2>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 size-6 shrink-0 text-brand" aria-hidden />
              <h2 className="font-heading text-[17px] font-bold text-ink">
                <a href="tel:+34922714386" className="hover:text-brand">
                  0034 922 714 386
                </a>
              </h2>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 size-6 shrink-0 text-brand" aria-hidden />
              <h2 className="font-heading text-[17px] font-bold text-ink">
                <a href="mailto:info@tuhotelaldia.com" className="hover:text-brand">
                  info@tuhotelaldia.com
                </a>
              </h2>
            </div>
          </aside>
        </Container>
      </section>
      <ShareSection path={path} title="Contacto" />
    </>
  );
}
