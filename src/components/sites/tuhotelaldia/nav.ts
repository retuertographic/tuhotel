export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const SOURCE_ORIGIN = "https://tuhotelaldia.com";

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios/principales",
    children: [
      { label: "Principales", href: "/servicios/principales" },
      { label: "Otros", href: "/servicios/otros" },
    ],
  },
  { label: "Planes", href: "/planes" },
  {
    label: "Nosotros",
    href: "/nosotros/10-razones",
    children: [
      { label: "10 Razones", href: "/nosotros/10-razones" },
      { label: "Nuestro Equipo", href: "/nosotros/nuestro-equipo" },
      { label: "Testimonios", href: "/nosotros/testimonios" },
    ],
  },
  {
    label: "SABER MÁS",
    href: "/saber-mas/faq",
    children: [
      { label: "FAQ", href: "/saber-mas/faq" },
      { label: "Contáctanos", href: "/saber-mas/contactanos" },
    ],
  },
];

/** Legal pages were not cloned; they point to the live site. */
export const footerLinks = [
  { label: "Sitemap", href: `${SOURCE_ORIGIN}/sitemap` },
  { label: "Cookies", href: `${SOURCE_ORIGIN}/cookies` },
  { label: "Aviso legal", href: `${SOURCE_ORIGIN}/aviso-legal` },
  { label: "Política de privacidad", href: `${SOURCE_ORIGIN}/politica-de-privacidad` },
];

export const ASSET = (name: string) => `/sites/tuhotelaldia/${name}`;
