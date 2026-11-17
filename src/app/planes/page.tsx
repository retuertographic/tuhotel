import type { Metadata } from "next";
import { BarChart3, Eye, FileText, Heart, Layers, Megaphone, MessageSquare, Network, Tag } from "lucide-react";
import { PlanCard } from "@/components/sites/tuhotelaldia/PlanCard";
import { planesPagePlans } from "@/components/sites/tuhotelaldia/content";
import { BrandButton, Container, SectionHeading } from "@/components/sites/tuhotelaldia/primitives";

export const metadata: Metadata = { title: "Planes" };

const included = [
  {
    title: "Revenue Management",
    Icon: BarChart3,
    text: "Estudiamos las características y objetivos de tu establecimiento, el mercado al que quiere dirigirse y su posición dentro de la oferta alojativa de la zona, asesorando en materia de Revenue Management y marcando estrategias de venta y distribución de forma personalizada.",
  },
  {
    title: "Elaboración de Pricing",
    Icon: Tag,
    text: "Colaboramos en la creación y actualización de Tarifas, precios, condiciones y restricciones",
  },
  {
    title: "Informes",
    Icon: FileText,
    text: "Elaboramos informes de venta así como análisis Pick Up de forma semanal, herramienta fundamental de previsión a la hora de marcar estrategias.",
  },
  {
    title: "Intermediación",
    Icon: Network,
    text: "Nos encargamos de la intermediación en la contratación de channel Manager, motor de reservas y canales de reservas.",
  },
  {
    title: "Gestión de Canales",
    Icon: Layers,
    text: "Realizamos el Set Up, integración , gestión de contenidos en diferentes idiomas, tarifarios, realizando un mantenimiento continuo de cada herramienta y canal de distribución.",
  },
  {
    title: "Control de distribución",
    Icon: Eye,
    text: "Realizamos controles habituales de presencia, características, servicios y precios de su establecimiento en los canales de venta así como estudios de paridades y competitividad frente a otros establecimientos.",
  },
  {
    title: "Marketing",
    Icon: Megaphone,
    text: "Colaboramos en la creación y gestión de planes de Marketing digital, mejorando en posicionamiento y visibilidad online con el objetivo de optimizar la venta directa.",
  },
  {
    title: "Reputación online",
    Icon: MessageSquare,
    text: "Nos encargamos de la revisión, monitorización y respuesta a comentarios y consultas en las diferentes redes de reputación online.",
  },
  {
    title: "Fidelización",
    Icon: Heart,
    text: "Creamos y gestionamos sistemas de fidelización de clientes mediante Mailings, club de fidelización y acciones especiales para clientes fieles.",
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-[#f7f7f7] py-20 md:py-24">
        <Container>
          <SectionHeading
            as="h1"
            title="TENEMOS UN PLAN A TU MEDIDA"
            subtitle="Elige el Plan que más se adapte a tus necesidades o si lo prefieres, creamos uno a tu medida."
          />
          <div className="grid items-stretch gap-8 lg:grid-cols-3">
            {planesPagePlans.map((p) => (
              <PlanCard key={p.name} plan={p} ctaLabel="Contacto" ctaHref="/contacto" />
            ))}
          </div>
          <p className="mt-12 text-center text-[15px]">
            *Cuota mensual sujeta a condiciones y características del establecimiento.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            title="¿QUÉ INCLUYEN NUESTROS SERVICIOS?"
            subtitle="Contamos con una amplia gama de servicios orientados a mejorar la gestión y presencia online de su establecimiento."
          />
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {included.map(({ title, Icon, text }) => (
              <article key={title} className="flex gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <h3 className="font-heading text-[19px] font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.7]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand py-16 text-center text-white">
        <Container>
          <h2 className="font-heading text-[30px] font-bold text-white md:text-[36px]">Contáctanos</h2>
          <p className="mt-3 text-[18px] text-white/85">Estás a un paso de mantener TU HOTEL AL DÍA</p>
          <BrandButton href="/contacto" variant="light" className="mt-8">
            MI CONSULTA
          </BrandButton>
        </Container>
      </section>
    </>
  );
}
