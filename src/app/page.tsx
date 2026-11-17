import Link from "next/link";
import { LineChart, Megaphone, Network, ShieldCheck } from "lucide-react";
import { PillarTabs } from "@/components/sites/tuhotelaldia/PillarTabs";
import { PlanCard } from "@/components/sites/tuhotelaldia/PlanCard";
import { ShareSection } from "@/components/sites/tuhotelaldia/ShareSection";
import { TestimonialCarousel } from "@/components/sites/tuhotelaldia/TestimonialCarousel";
import { homePlans, homeTestimonials } from "@/components/sites/tuhotelaldia/content";
import { BrandButton, Container, SectionHeading } from "@/components/sites/tuhotelaldia/primitives";

const services = [
  {
    title: "REVENUE MANAGEMENT",
    Icon: LineChart,
    items: ["Estudio personalizado", "Estrategias tarifarias", "Previsiones e informes Pick Up"],
  },
  {
    title: "DISTRIBUCIÓN DIGITAL",
    Icon: Network,
    items: [
      "Contratación de canales de distribución",
      "Integración y Gestión de herramientas:",
      "Canales de venta, channel manager y motor de reservas",
    ],
  },
  {
    title: "MARKETING DIGITAL",
    Icon: Megaphone,
    items: ["Creación y seguimiento de Campañas de Marketing", "Acciones de Fidelización"],
  },
];

export default function Home() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white py-20 md:py-24">
        <Container className="max-w-[980px] text-center">
          <h1 className="sr-only">Tu Hotel al Día - Gestión Hotelera Online</h1>
          <p className="text-[19px] leading-[1.8] md:text-[21px]">
            La distribución digital hotelera ha venido para quedarse, transformando los sistemas de venta estáticos,
            por una comercialización dinámica y evolutiva.
          </p>
          <p className="mt-5 text-[17px] leading-[1.8]">
            El Revenue Management es clave para hoteles y alojamientos turísticos a la hora de realizar una gestión
            óptima. Ganando presencia online, impulsando la venta directa, eligiendo los canales de distribución
            apropiados y marcando estrategias tarifarias.
          </p>
          <p className="mt-5 text-[17px] leading-[1.8]">
            Tu Hotel al día, nace impulsado por esta necesidad, colaborando con establecimientos hoteleros y
            alojamientos turísticos en optimizar sus resultados.
          </p>
          <p className="mt-5 text-[17px] font-normal leading-[1.8] text-ink">
            Ofrecemos un trato personalizado. Adaptamos nuestros servicios a cada necesidad con el objetivo de mantener{" "}
            <strong className="font-semibold text-brand">TU HOTEL AL DÍA</strong>.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-[#f7f7f7] py-20 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map(({ title, Icon, items }) => (
              <article
                key={title}
                className="group flex flex-col items-center bg-white px-8 pb-9 pt-11 text-center shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                <span className="flex size-[86px] items-center justify-center rounded-full border-2 border-brand text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-9" strokeWidth={1.5} aria-hidden />
                </span>
                <h2 className="mt-6 font-heading text-[20px] font-bold tracking-[0.5px] text-ink">{title}</h2>
                <ul className="mt-4 flex-1 space-y-1.5 text-[15px] leading-[1.6]">
                  {items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <Link
                  href="/servicios/principales"
                  className="mt-6 font-heading text-[14px] font-bold uppercase tracking-[1px] text-brand hover:text-brand-dark"
                >
                  Más
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Pillars (tabs) */}
      <section className="bg-white py-20 md:py-24">
        <Container className="max-w-[1000px]">
          <PillarTabs />
        </Container>
      </section>

      {/* Plans */}
      <section className="bg-[#f7f7f7] py-20 md:py-24">
        <Container>
          <SectionHeading
            title="TENEMOS UN PLAN A TU MEDIDA"
            subtitle="Elige el Plan que más se adapte a tus necesidades o si lo prefieres, creamos uno a tu medida."
          />
          <div className="grid items-stretch gap-8 lg:grid-cols-3">
            {homePlans.map((p) => (
              <PlanCard key={p.name} plan={p} ctaLabel="Detalles" ctaHref="/planes" />
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-[760px] text-center text-[15px] leading-[1.7]">
            <p>*Tarifario sujeto a condiciones de contratación.</p>
            <p>
              Pida su presupuesto personalizado a través de nuestro formulario de contacto. Le enviaremos información de
              condiciones, promociones, suplementos y descuentos.
            </p>
            <BrandButton href="/contacto" className="mt-7">
              PRESUPUESTO
            </BrandButton>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 text-white md:py-20">
        <Container className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <div className="flex-1">
            <h2 className="font-heading text-[24px] font-bold uppercase leading-[1.35] text-white md:text-[28px]">
              ¿Tienes alguna duda? Contacta con nosotros para ofrecerte una solución personalizada
            </h2>
            <p className="mt-3 text-[16px] text-white/85">
              Disponemos de un amplio horario de trabajo que nos permitirá una gran dedicación a su establecimiento.
            </p>
          </div>
          <BrandButton href="/contacto" variant="light">
            PRESUPUESTO
          </BrandButton>
        </Container>
      </section>

      {/* Ventajas + Garantías */}
      <section className="bg-white py-20 md:py-24">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center border border-[#e5e5e5] px-8 py-12 text-center">
            <span className="font-heading text-[64px] font-black leading-none text-brand">10</span>
            <h2 className="mt-4 font-heading text-[24px] font-bold uppercase text-ink">Ventajas de Tu Hotel al Día</h2>
            <p className="mt-3 text-[16px]">Te damos 10 razones para contratarnos.</p>
            <BrandButton href="/nosotros/10-razones" variant="outline" className="mt-7">
              LEER MÁS
            </BrandButton>
          </div>
          <div className="flex flex-col items-center border border-[#e5e5e5] px-8 py-12 text-center">
            <ShieldCheck className="size-16 text-brand" strokeWidth={1.25} aria-hidden />
            <h2 className="mt-4 font-heading text-[24px] font-bold uppercase text-ink">Garantías del servicio</h2>
            <p className="mt-3 max-w-[420px] text-[16px] leading-[1.7]">
              Garantizamos resultados y tiempos de actuación en cuanto a actualización de movimientos, cambios de precio
              y disponibilidades
            </p>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f7f7f7] py-20 md:py-24">
        <Container>
          <SectionHeading title="Testimonios de Clientes" />
          <TestimonialCarousel items={homeTestimonials} />
        </Container>
      </section>

      <ShareSection path="/" title="Inicio" />
    </>
  );
}
