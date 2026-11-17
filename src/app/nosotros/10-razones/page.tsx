import type { Metadata } from "next";
import { Container, PageTitle } from "@/components/sites/tuhotelaldia/primitives";

export const metadata: Metadata = { title: "10 Razones" };

const reasons: { title: string; text: string[] }[] = [
  {
    title: "RENTABILIDAD.",
    text: ["La contratación de nuestros servicios se traduce en una inversión para tu empresa.", "En poco tiempo, notarás los resultados."],
  },
  {
    title: "CERCANÍA.",
    text: [
      "No sólo somos una empresa “virtual”.",
      "Ofrecemos un trato personalizado, realizando visitas y reuniones presenciales.",
      "Nos interesamos por conocer bien el producto “in situ”.",
      "Nos convertimos de un miembro más del equipo, con cara, nombre y apellidos.",
    ],
  },
  {
    title: "TIEMPO.",
    text: [
      "Realizar una buena gestión en materia de Revenue Management y distribución comercial, requiere, no solo conocimientos, sino tiempo.",
      "Y el tiempo es oro.",
      "Nosotros nos encargamos y vosotros podréis continuar atendiendo la operativa del establecimiento y cuidando a tus clientes con tranquilidad y mayor dedicación.",
    ],
  },
  {
    title: "AHORRO.",
    text: [
      "Con la externalización de servicios ahorrarás en contrataciones exclusivas con elevadas nóminas.",
      "Ofrecemos cuotas asequibles al no ofrecer un servicio en exclusiva y manteniendo la calidad y resultados de la actividad.",
    ],
  },
  {
    title: "DISPONIBILIDAD.",
    text: [
      "Olvídate de horarios.",
      "Estamos a tu disposición con una amplia disponibilidad adaptada a cada necesidad.",
      "Lo de Lunes a Viernes de 9 a 5, no va con nosotros.",
    ],
  },
  {
    title: "EXPERIENCIA.",
    text: [
      "Además de formación y experiencia, tenemos amplios conocimientos de las principales herramientas, canales, channel manager y motores de reservas.",
      "Conocemos sus sistemas, sus equipos humanos y procedimientos de trabajo por lo que estamos preparados para seleccionar y sacar el mayor partido a cada uno de ellos.",
    ],
  },
  {
    title: "EMPATIA.",
    text: [
      "Nuestra larga experiencia dentro de hoteles, aporta un valor añadido a nuestros servicios.",
      "Conocemos de primera mano las necesidades, procedimientos y protocolos internos lo que facilita la comunicación y empatía.",
    ],
  },
  {
    title: "FLEXIBILIDAD.",
    text: [
      "Nuestros planes de trabajo no son herméticos.",
      "Estamos siempre abiertos a nuevas necesidades adaptando los servicios y condiciones a cada situación.",
    ],
  },
  {
    title: "PRIVACIDAD.",
    text: ["Garantizamos privacidad en el tratamiento de sus datos manteniendo la ética y discreción en todo momento."],
  },
  {
    title: "SIN PERMANENCIA.",
    text: [
      "Para medir la conversión de resultados, recomendamos una permanencia mínima de contratación.",
      "No obstante, no exigimos permanencias.",
      "Trabajamos en equipo y tú decides su continuidad o rescisión.",
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageTitle title="10 Razones para contratarnos" subtitle="Te damos 10 razones para contratar nuestros servicios." />
      <section className="py-20 md:py-24">
        <Container className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {reasons.map((r, i) => (
            <article key={r.title} className="flex gap-6">
              <span className="font-heading text-[56px] font-black leading-[0.9] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-heading text-[22px] font-bold tracking-[0.5px] text-ink">{r.title}</h2>
                <div className="mt-3 space-y-2 text-[16px] leading-[1.75]">
                  {r.text.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
