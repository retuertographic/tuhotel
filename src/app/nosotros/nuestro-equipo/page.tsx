import type { Metadata } from "next";
import Image from "next/image";
import { ShareSection } from "@/components/sites/tuhotelaldia/ShareSection";
import { ASSET } from "@/components/sites/tuhotelaldia/nav";
import { Container, SectionHeading } from "@/components/sites/tuhotelaldia/primitives";

export const metadata: Metadata = { title: "Nuestro Equipo" };

export default function Page() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <Image
            src={ASSET("nosotros.jpg")}
            alt="Equipo de Tu Hotel al Día atendiendo a un cliente"
            width={900}
            height={400}
            className="mb-16 aspect-[9/4] w-full object-cover"
          />
          <SectionHeading as="h1" title="NUESTRO EQUIPO" />
          <div className="mx-auto max-w-[860px] space-y-5 text-center text-[17px] leading-[1.8]">
            <p>
              TU HOTEL AL DÍA nace impulsado por la demanda de servicios de Revenue Management que en los últimos años se
              ha ido incrementando en el sector hotelero convirtiéndose en un área imprescindible para una óptima
              comercialización.
            </p>
            <p>
              Somos un equipo de profesionales del sector. Nuestra gran ventaja, es haber desarrollado funciones de
              comercialización dentro de hoteles y cadenas hoteleras del país conociendo desde dentro las necesidades,
              protocolos, procedimientos y operativa hotelera facilitando así la comunicación con el establecimiento y
              desarrollando un alto nivel de empatía.
            </p>
            <p>
              Estamos en constante formación e investigación con el fin de estar siempre al día rodeándonos de los mejores
              profesionales.
            </p>
          </div>
          <article className="mx-auto mt-16 max-w-[640px] border-t-[3px] border-brand bg-[#f7f7f7] px-8 py-10 text-center">
            <h2 className="font-heading text-[26px] font-bold tracking-[1px] text-ink">PEPA RUIZ</h2>
            <p className="mt-1 font-medium text-brand">Socia fundadora.</p>
            <p className="mt-4 text-[16px] leading-[1.75]">
              Con amplia experiencia y formación en el sector hotelero, decidí crear mi propia actividad con el objetivo de
              ofrecer mis servicios externos a hoteles y establecimientos turísticos de forma personalizada y cercana.
            </p>
          </article>
        </Container>
      </section>
      <ShareSection path="/nosotros/nuestro-equipo" title="Nuestro Equipo" />
    </>
  );
}
