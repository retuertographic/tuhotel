import type { Metadata } from "next";
import { MediaRow } from "@/components/sites/tuhotelaldia/MediaRow";
import { ShareSection } from "@/components/sites/tuhotelaldia/ShareSection";
import { Container, PageTitle } from "@/components/sites/tuhotelaldia/primitives";

export const metadata: Metadata = { title: "Otros" };

export default function Page() {
  return (
    <>
      <PageTitle title="Otros" />
      <section className="py-20 md:py-24">
        <Container className="space-y-20">
          <MediaRow image="imgs-servicios3.jpg" title="Diseño Web">
            <p>Una web dinámica, sencilla y atractiva para el usuario.</p>
            <p>
              Dominio y Hosting, Posicionamiento SEO, gestión de contenidos, traducciones, mantenimiento, soporte y
              servicio técnico.
            </p>
          </MediaRow>
          <MediaRow image="imgs-servicios4.jpg" title="Gestión de Reservas" reverse>
            <p>
              Atendemos y gestionamos las reservas de Alojamientos turísticos, manteniendo la comunicación con el cliente
              hasta su llegada, elaborando Rooming List e informando al propietario en todo momento quien sólo deberá
              preocuparse por recibir al cliente.
            </p>
          </MediaRow>
          <MediaRow image="imgs-servicios5.jpg" title="Reputación">
            <p>Seguimiento y gestión de canales de reputación online.</p>
            <p>Revisamos reviews, contestamos consultas y comentarios.</p>
          </MediaRow>
        </Container>
      </section>
      <ShareSection path="/servicios/otros" title="Otros" />
    </>
  );
}
