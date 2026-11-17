import type { Metadata } from "next";
import { LegalPage, proteccionDatos } from "@/components/sites/tuhotelaldia/legal";

export const metadata: Metadata = { title: "Política de cookies" };

export default function Page() {
  return <LegalPage title="Política de cookies" blocks={proteccionDatos} />;
}
