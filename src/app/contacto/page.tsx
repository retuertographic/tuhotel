import type { Metadata } from "next";
import { ContactPage } from "@/components/sites/tuhotelaldia/ContactPage";

export const metadata: Metadata = { title: "Contacto" };

export default function Page() {
  return <ContactPage path="/contacto" />;
}
