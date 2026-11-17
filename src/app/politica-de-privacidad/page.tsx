import type { Metadata } from "next";
import { LegalPage, proteccionDatos } from "@/components/sites/tuhotelaldia/legal";

export const metadata: Metadata = { title: "Política de privacidad" };

export default function Page() {
  return <LegalPage title="Política de privacidad" blocks={proteccionDatos} />;
}
