import type { Metadata } from "next";
import { MediaRow } from "@/components/sites/tuhotelaldia/MediaRow";
import { ShareSection } from "@/components/sites/tuhotelaldia/ShareSection";
import { Container, PageTitle } from "@/components/sites/tuhotelaldia/primitives";

export const metadata: Metadata = { title: "Principales" };

export default function Page() {
  return (
    <>
      <PageTitle title="Principales" />
      <section className="py-20 md:py-24">
        <Container className="space-y-20">
          <MediaRow image="imgs-servicios.jpg" title="Revenue Management">
            <p>
              Ofrecemos asesoramiento personalizado de forma continua, creando estrategias de venta y de pricing, con el
              objetivo de maximizar y rentabilizar tu establecimiento en base a análisis de mercado, informes pick up y
              objetivos empresariales.
            </p>
          </MediaRow>
          <MediaRow title="Distribución digital" image="imgs-servicios2.jpg" reverse>
            <p>
              Intermediamos en las contrataciones con cada herramienta, channel manager, motor de reservas y canales de
              reservas.
            </p>
            <p>
              Nos encargamos de la implementación, integraciones y puesta en marcha de cada uno de ellos además del
              mantenimiento, gestión de contenidos y carga y actualización de precios y condiciones.
            </p>
          </MediaRow>
          <MediaRow title="Marketing Digital">
            <p>Seleccionamos y ejecutamos estrategias de Marketing apropiadas a su establecimiento.</p>
          </MediaRow>
        </Container>
      </section>
      <ShareSection path="/servicios/principales" title="Principales" />
    </>
  );
}
