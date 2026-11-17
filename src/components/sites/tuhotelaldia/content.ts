// Text captured from https://tuhotelaldia.com (see docs/research/tuhotelaldia/page-brief.md).

export type Plan = {
  name: string;
  tagline: string;
  image: string;
  includes?: string;
  features: string[];
  price?: string;
  highlight?: boolean;
};

/** Plans as shown on the home page (taglines differ from /planes on the source site). */
export const homePlans: Plan[] = [
  {
    name: "BASE",
    tagline: "PLAN DE ASESORAMIENTO BÁSICO",
    image: "server1.jpg",
    features: [
      "Estudio Personalizado",
      "Asesoramiento en Revenue Management",
      "Estrategias de Pricing",
      "Informes de Resultados",
      "Pick Up y propuestas de acciones de venta",
    ],
  },
  {
    name: "PREMIUM",
    tagline: "SOLUCIÓN IDEAL PARA LA MAYORÍA",
    image: "server2.jpg",
    includes: "(además del PLAN PLUS)",
    features: [
      "Creación y gestión de acciones de Marketing digital",
      "Gestión de canales de reputación",
      "Acciones de Fidelización de clientes",
    ],
    highlight: true,
  },
  {
    name: "PLUS",
    tagline: "GESTIÓN INTEGRAL DE TU ESTABLECIMIENTO",
    image: "server3.jpg",
    includes: "(además del PLAN BASE)",
    features: [
      "Intermediación en contratación de herramientas y canales de distribución",
      "Gestión de contenidos y precios en canales",
      "Control y seguimiento",
    ],
  },
];

/** Plans as shown on /planes (order, taglines and prices as on the source page). */
export const planesPagePlans: Plan[] = [
  { ...homePlans[0], price: "*desde 250€/mes" },
  {
    ...homePlans[2],
    tagline: "SOLUCIÓN IDEAL PARA LA MAYORÍA",
    price: "*desde 400€/mes",
    highlight: true,
  },
  {
    ...homePlans[1],
    tagline: "GESTIÓN INTEGRAL DE TU ESTABLECIMIENTO",
    price: "*desde 600€/mes",
    highlight: false,
  },
];

export type Testimonial = { quote: string; author: string; logo: string };

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      "Gracias a los Servicios de TU HOTEL AL DÍA, hemos conseguido disminuir la dependencia de la Tour Operación al mínimo al igual que el crédito, por un lado, y hemos incrementado el precio medio por otro. La conjunción perfecta.",
    author: "HOTEL ANDORRA",
    logo: "untitled-12.jpg",
  },
  {
    quote:
      "Contratando los servicios de Tu Hotel al día, hemos obtenido gran rentabilidad en nuestras ventas en muy poco tiempo. Sin duda, una acertada decisión contar con ellos. Ya son parte del equipo.",
    author: "HOTEL MÉDANO",
    logo: "untitled-16.jpg",
  },
  {
    quote:
      "TU HOTEL AL DIA es una empresa altamente recomendable, muy profesional, que hace que el hotel ahorre tiempo y dinero con su gestión, además de sus gestiones de Revenue Management, Pepa Ruiz está constantemente pendiente de todos los detalles e imprevistos, aportando siempre soluciones.",
    author: "HOTEL ZENTRAL CENTER",
    logo: "untitled-15.jpg",
  },
];

export const allTestimonials: Testimonial[] = [
  homeTestimonials[0],
  {
    quote: "Destacaría la flexibilidad y comodidad que nos aporta Tu Hotel al Día",
    author: "TENERIFE JOB TRAINING",
    logo: "tenerife-job-training.jpg",
  },
  {
    quote:
      "Gracias a la profesionalidad y eficacia de TU HOTEL AL DÍA , hemos optimizado nuestro Booking, y rentabilizado la explotación de nuestros Apartamentos.",
    author: "ALJADIS, S.L.",
    logo: "untitled-13.jpg",
  },
  homeTestimonials[2],
  {
    quote:
      "Tras trabajar con Pepa Ruiz años atrás y teniendo en cuenta su dedicación e incorporación a las nuevas tecnologías en cuanto a comercialización online, no tuvimos dudas en pensar en ella para optimizar nuestra actividad a través de internet. Tenemos que decir que su ayuda ha sido imprescindible para nosotros y continuamos contando con su apoyo.",
    author: "Melisofi Consulting",
    logo: "untitled-17.jpg",
  },
  {
    quote:
      "Gran capacidad de previsión, reacción y rapidez ante los cambios en los mercados, políticas de Precios y acciones de Marketing. TU HOTEL AL DIA es una empresa joven, dinámica y muy recomendable.",
    author: "RÚSTICOS CANARIAS S.L.",
    logo: "untitled-11.jpg",
  },
  {
    quote: "Seriedad, rapidez y profesionalidad forman parte de las cualidades principales de Pepa Ruiz.",
    author: "KEY PROPERTIES",
    logo: "key-properties.jpg",
  },
  {
    quote:
      "Pepa Ruiz es una gran profesional. Siempre dispuesta a ayudarte y asesorarte. Contar con sus servicios es lo mejor que hemos podido hacer. Una gran persona y como profesional inmejorable. Recomendable 100 ×100",
    author: "HOTEL SENDEROS DE ABONA",
    logo: "untitled-14.jpg",
  },
  homeTestimonials[1],
  { quote: "", author: "ARROCERÍA LA PEPA", logo: "untitled-18.jpg" },
];
