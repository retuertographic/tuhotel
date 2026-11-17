import type { Metadata } from "next";
import { ContactPage } from "@/components/sites/tuhotelaldia/ContactPage";

export const metadata: Metadata = { title: "Contáctanos" };

export default function Page() {
  return <ContactPage path="/saber-mas/contactanos" />;
}
