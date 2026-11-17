import type { Metadata } from "next";
import Image from "next/image";
import { ShareSection } from "@/components/sites/tuhotelaldia/ShareSection";
import { allTestimonials } from "@/components/sites/tuhotelaldia/content";
import { ASSET } from "@/components/sites/tuhotelaldia/nav";
import { BrandButton, Container, PageTitle } from "@/components/sites/tuhotelaldia/primitives";

export const metadata: Metadata = { title: "Testimonios" };

export default function Page() {
  return (
    <>
      <PageTitle title="Testimonios de Clientes" subtitle="Te mostramos algunos casos de éxito." />
      <section className="py-20 md:py-24">
        <Container className="grid gap-8 md:grid-cols-2">
          {allTestimonials.map((t) => (
            <figure key={t.author} className="flex gap-6 border border-[#e5e5e5] bg-white p-7">
              <Image
                src={ASSET(t.logo)}
                alt=""
                width={300}
                height={300}
                className="size-[90px] shrink-0 object-contain"
              />
              <div>
                {t.quote && (
                  <blockquote className="text-[16px] italic leading-[1.75]">“{t.quote}”</blockquote>
                )}
                <figcaption className="mt-3 font-heading text-[15px] font-bold uppercase tracking-[0.5px] text-ink">
                  {t.author}
                </figcaption>
              </div>
            </figure>
          ))}
        </Container>
      </section>
      <section className="bg-brand py-16 text-center text-white">
        <Container>
          <p className="font-heading text-[30px] font-black uppercase leading-tight md:text-[38px]">Clientes satisfechos.</p>
          <p className="mt-2 font-heading text-[18px] font-bold uppercase tracking-[2px] text-white/85">
            Nuestra meta principal
          </p>
          <BrandButton href="/contacto" variant="light" className="mt-8">
            ENVIAR OPINIÓN
          </BrandButton>
        </Container>
      </section>
      <ShareSection path="/nosotros/testimonios" title="Testimonios" />
    </>
  );
}
