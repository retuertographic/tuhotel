import type { Metadata } from "next";
import { LegalPage, avisoLegal } from "@/components/sites/tuhotelaldia/legal";

export const metadata: Metadata = { title: "Aviso legal" };

export default function Page() {
  return <LegalPage title="Aviso legal" blocks={avisoLegal} />;
}
