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

export const footerLinks = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Cookies", href: "/cookies" },
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
];

export const ASSET = (name: string) => `/sites/tuhotelaldia/${name}`;
