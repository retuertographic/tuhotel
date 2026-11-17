import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import { Header } from "@/components/sites/tuhotelaldia/Header";
import { Footer } from "@/components/sites/tuhotelaldia/Footer";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Tu Hotel al Día - Gestión Hotelera Online",
    template: "%s - Tu Hotel al Día",
  },
  description:
    "Revenue Management, distribución digital y marketing digital para hoteles y alojamientos turísticos. Trato personalizado y sin comisiones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${lato.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
