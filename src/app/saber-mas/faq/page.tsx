import type { Metadata } from "next";
import { Faq } from "@/components/sites/tuhotelaldia/Faq";
import { ShareSection } from "@/components/sites/tuhotelaldia/ShareSection";
import { Container, PageTitle } from "@/components/sites/tuhotelaldia/primitives";

export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <>
      <PageTitle
        title="Preguntas frecuentes"
        subtitle="Ésta es una muestra de las dudas y preguntas más frecuentes que nos suelen hacer nuestros clientes"
      />
      <section className="py-20 md:py-24">
        <Container className="max-w-[900px]">
          <Faq />
        </Container>
      </section>
      <ShareSection path="/saber-mas/faq" title="FAQ" />
    </>
  );
}
