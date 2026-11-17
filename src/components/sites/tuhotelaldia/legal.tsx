// Legal texts captured from tuhotelaldia.com (/aviso-legal, /cookies, /politica-de-privacidad).
// /cookies and /politica-de-privacidad share the same body on the source site.

import { Container, PageTitle } from "./primitives";

export type LegalBlock =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export function LegalPage({ title, blocks }: { title: string; blocks: LegalBlock[] }) {
  return (
    <>
      <PageTitle title={title} />
      <section className="py-16 md:py-20">
        <Container className="max-w-[900px] space-y-5 text-[16px] leading-[1.8]">
          {blocks.map((b, i) => {
            if (b.type === "h")
              return (
                <h2 key={i} className="pt-6 font-heading text-[20px] font-bold uppercase text-ink">
                  {b.text}
                </h2>
              );
            if (b.type === "ul")
              return (
                <ul key={i} className="list-disc space-y-2 pl-6 marker:text-brand">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </Container>
      </section>
    </>
  );
}

export const avisoLegal: LegalBlock[] = [
  {
    type: "p",
    text: "María José Ruiz Pérez (EN ADELANTE EL PROPIETARIO) con domicilio a efectos de notificaciones en C/Extremadura, Res. Altos del Roque. Bloque 12-puerta4 con NIF 32.044.647 pone a disposición en su sitio web www.tuhotelaldia.com determinados contenidos de carácter informativo sobre sus actividades.",
  },
  { type: "h", text: "PRIMERA.- CONDICIONES DE ACCESO Y USO" },
  {
    type: "p",
    text: "1.1.- La utilización del sitio web de EL PROPIETARIO, no conlleva la obligatoriedad de inscripción del USUARIO. Las condiciones de acceso y uso del presente sitio web se rigen estrictamente por la legalidad vigente y por el principio de buena fe comprometiéndose el USUARIO a realizar un buen uso de la web. Quedan prohibidos todos los actos que vulneren la legalidad, derechos o intereses de terceros: derecho a la intimidad, protección de datos, propiedad intelectual etc. Expresamente EL PROPIETARIO prohíbe los siguientes:",
  },
  {
    type: "p",
    text: "1.1.1.- Realizar acciones que puedan producir en el sitio web o a través del mismo por cualquier medio cualquier tipo de daño a los sistemas de EL PROPIETARIO o a terceros.",
  },
  {
    type: "p",
    text: "1.1.2.- Realizar sin la debida autorización cualquier tipo de publicidad o información comercial directamente o de forma encubierta, el envío de correos masivos (\"spaming\") o envío de grandes mensajes con el fin de bloquear servidores de la red (\"mail bombing\").",
  },
  {
    type: "p",
    text: "1.2.- EL PROPIETARIO, podrá interrumpir en cualquier momento el acceso a su sitio web si detecta un uso contrario a la legalidad, la buena fe o a las presentes condiciones generales- ver cláusula quinta.",
  },
  { type: "h", text: "SEGUNDA.- CONTENIDOS" },
  { type: "p", text: "Los contenidos incorporados en este sitio web han sido elaborados e incluidos por:" },
  {
    type: "p",
    text: "2.1.- EL PROPIETARIO utilizando fuentes internas y externas de tal modo que EL PROPIETARIO únicamente se hace responsable por los contenidos elaborados de forma interna.",
  },
  {
    type: "p",
    text: "2.2.- EL PROPIETARIO se reserva el derecho a modificar en cualquier momento los contenidos existentes en su sitio web. EL PROPIETARIO no asegura ni se responsabiliza del correcto funcionamiento de los enlaces a sitios web de terceros que figuren en www.tuhotelaldia.com. Además a través del sitio web del PROPIETARIO se ponen a disposición del usuario servicios gratuítos y de pago ofrecidos por terceros ajenos y que se regirán por las condiciones particulares de cada uno de éllos. EL PROPIETARIO no garantiza la veracidad, exactitud o actualidad de los contenidos y servicios ofrecidos por terceros y queda expresamente exento de todo tipo de responsabilidad por los daños y perjuicios que puedan derivarse de la falta de exactitud de estos contenidos y servicios.",
  },
  { type: "h", text: "TERCERA.- RESPONSABILIDAD" },
  { type: "p", text: "3.1.- EL PROPIETARIO en ningún caso será responsable de:" },
  {
    type: "p",
    text: "3.1.1.- Los fallos e incidencias que pudieran producirse en las comunicaciones, borrado o transmisiones incompletas de manera que no se garantiza que los servicios del sitio web estén constantemente operativos.",
  },
  {
    type: "p",
    text: "3.1.2.- De la producción de cualquier tipo de daño que los USUARIOS o terceros pudiesen ocasionar en el sitio web.",
  },
  {
    type: "p",
    text: "3.1.3.- De la fiabilidad y veracidad de las informaciones introducidas por terceros en el sitio web, bien directamente, bien a través de enlaces o links. Asimismo, María José Ruiz Pérez colaborará y notificará a la autoridad competente estas incidencias en el momento en que tenga conocimiento fehaciente de que los daños ocasionados constituyan cualquier tipo de actividad ilícita.",
  },
  {
    type: "p",
    text: "3.2.- EL PROPIETARIO se reserva el derecho a suspender el acceso sin previo aviso de forma discrecional y con carácter definitivo o temporal hasta el aseguramiento de la efectiva responsabilidad de los daños que pudieran producirse. Asimismo, EL PROPIETARIO colaborará y notificará a la autoridad competente estas incidencias en el momento en que tenga conocimiento fehaciente de que los daños ocasionados constituyan cualquier tipo de actividad ilícita.",
  },
  { type: "h", text: "CUARTA.- DERECHOS DE AUTOR Y MARCA" },
  {
    type: "p",
    text: "El sitio web de EL PROPIETARIO - los contenidos propios, la programación y el diseño del sitio web- se encuentra plenamente protegido por los derechos de autor, quedando expresamente prohibida toda reproducción, comunicación, distribución y transformación de los referidos elementos protegidos salvo consentimiento expreso de EL PROPIETARIO. Los materiales tanto gráficos como escritos enviados por los usuarios a través de los medios que se ponen a su disposición en el sitio web son propiedad del usuario que afirma al enviarlos su legítima autoría y cede los derechos de reproducción y distribución al PROPIETARIO.",
  },
  { type: "h", text: "QUINTA.- JURISDICCIÓN Y LEY APLICABLE" },
  {
    type: "p",
    text: "Las presentes condiciones generales se rigen por la legislación española. Son competentes para resolver toda controversia o conflicto que se derive de las presentes condiciones generales los Juzgados de Santa Cruz de Tenerife renunciando expresamente el USUARIO a cualquier otro fuero que pudiera corresponderle.",
  },
  { type: "h", text: "SEXTA.-" },
  {
    type: "p",
    text: "En caso de que cualquier cláusula del presente documento sea declarada nula, las demás cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad misma de las presentes condiciones. EL PROPIETARIO podrá no ejercitar alguno de los derechos y facultades conferidos en este documento lo que no implicará en ningún caso la renuncia a los mismos salvo reconocimiento expreso por parte de EL PROPIETARIO.",
  },
];

export const proteccionDatos: LegalBlock[] = [
  {
    type: "p",
    text: "De conformidad con lo dispuesto en la Ley Orgánica 15/1999, de Protección de Datos de Carácter Personal (LOPD) y su normativa de desarrollo, el responsable del sitio web, en cumplimiento de lo dispuesto en el art. 5 y 6 de la LOPD, informa a todos los usuarios del sitio web que faciliten o vayan a facilitar sus datos personales, que estos serán incorporados en un fichero automatizado que se encuentra debidamente inscrito en la Agencia Española de Protección de Datos.",
  },
  {
    type: "p",
    text: "Los usuarios, mediante la marcación de la casilla, aceptan expresamente y de forma libre e inequívoca que sus datos personales sean tratados por parte del prestador para realizar las siguientes finalidades:",
  },
  {
    type: "ul",
    items: [
      "Remisión de comunicaciones comerciales publicitarias por e-mail, fax, SMS, MMS, comunidades sociales o cualesquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicación comerciales. Dichas comunicaciones comerciales serán relacionadas sobre productos o servicios ofrecidos por el prestador, así como por parte de los colaboradores o parthners con los que éste hubiera alcanzado algún acuerdo de promoción comercial entre sus clientes. En este caso, los terceros nunca tendrán acceso a los datos personales. En todo caso las comunicaciones comerciales serán realizadas por parte del prestador y serán de productos y servicios relacionados con el sector del prestador.",
      "Realizar estudios estadísticos.",
      "Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a disposición del usuario en el sitio web de la compañía.",
      "Remitir el boletín de noticias de la página web.",
    ],
  },
  {
    type: "p",
    text: "El prestador informa y garantiza expresamente a los usuarios que sus datos personales no serán cedidos en ningún caso a terceras compañías, y que siempre que fuera a realizarse algún tipo de cesión de datos personales, de forma previa, se solicitaría el consentimiento expreso, informado, e inequívoco por parte de los titulares.",
  },
  {
    type: "p",
    text: "Todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al usuario. En caso de que no sean facilitados todos los datos, el prestador no garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.",
  },
  {
    type: "p",
    text: "El prestador garantiza en todo caso al usuario el ejercicio de los derechos de acceso, rectificación, cancelación, información y oposición, en los términos dispuestos en la legislación vigente. Por ello, de conformidad con lo dispuesto en la Ley Orgánica 15/1999, de Protección de Datos de Carácter Personal (LOPD) podrá ejercer sus derechos remitiendo una solicitud expresa, junto a una copia de su DNI, a través de los siguientes medios:",
  },
  {
    type: "ul",
    items: [
      "E-Mail: info@tuhotelaldia.com",
      "Correo Postal: C/Extremadura, Res. Altos del Roque. Bloque 12-Puerta4, 38660 Adeje, Tenerife",
    ],
  },
  {
    type: "p",
    text: "Del mismo modo, el usuario podrá darse de baja de cualquiera de los servicios de suscripción facilitados haciendo clic en el apartado darse de baja de todos los correos electrónicos remitidos por parte del prestador.",
  },
  {
    type: "p",
    text: "Del mismo modo, el prestador ha adoptado todas las medidas técnicas y de organización necesarias para garantizar la seguridad e integridad de los datos de carácter personal que trate, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados.",
  },
  { type: "h", text: "USO DE COOKIES Y DEL FICHERO DE ACTIVIDAD" },
  {
    type: "p",
    text: "El prestador por su propia cuenta o la de un tercero contratado para la prestación de servicios de medición, pueden utilizar cookies cuando un usuario navega por el sitio web. Las cookies son ficheros enviados al navegador por medio de un servidor web con la finalidad de registrar las actividades del usuario durante su tiempo de navegación.",
  },
  {
    type: "p",
    text: "Las cookies utilizadas por el sitio web se asocian únicamente con un usuario anónimo y su ordenador, y no proporcionan por sí mismas los datos personales del usuario.",
  },
  {
    type: "p",
    text: "Mediante el uso de las cookies resulta posible que el servidor donde se encuentra la web, reconozca el navegador web utilizado por el usuario con la finalidad de que la navegación sea más sencilla, permitiendo, por ejemplo, el acceso a los usuarios que se hayan registrado previamente, acceder a las áreas, servicios, promociones o concursos reservados exclusivamente a ellos sin tener que registrarse en cada visita. Se utilizan también para medir la audiencia y parámetros del tráfico, controlar el progreso y número de entradas.",
  },
  {
    type: "p",
    text: "El usuario tiene la posibilidad de configurar su navegador para ser avisado de la recepción de cookies y para impedir su instalación en su equipo. Por favor, consulte las instrucciones y manuales de su navegador para ampliar esta información.",
  },
  {
    type: "p",
    text: "Para utilizar el sitio web, no resulta necesario que el usuario permita la instalación de las cookies enviadas por el sitio web, o el tercero que actúe en su nombre, sin perjuicio de que sea necesario que el usuario inicie una sesión como tal en cada uno de los servicios cuya prestación requiera el previo registro o \"login\".",
  },
  {
    type: "p",
    text: "Las cookies utilizadas en este sitio web tienen, en todo caso, carácter temporal con la única finalidad de hacer más eficaz su transmisión ulterior. En ningún caso se utilizarán las cookies para recoger información de carácter personal.",
  },
  { type: "h", text: "DIRECCIONES IP" },
  {
    type: "p",
    text: "Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un ordenador cuando ésta se conecta a Internet. Toda esta información es registrada en un fichero de actividad del servidor debidamente inscrito que permite el posterior procesamiento de los datos con el fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas realizadas a los servicios web, el orden de visitas, el punto de acceso, etc.",
  },
  { type: "h", text: "SEGURIDAD" },
  {
    type: "p",
    text: "El sitio web utiliza técnicas de seguridad de la información generalmente aceptadas en la industria, tales como firewalls, procedimientos de control de acceso y mecanismos criptográficos, todo ello con el objeto de evitar el acceso no autorizado a los datos. Para lograr estos fines, el usuario/cliente acepta que el prestador obtenga datos para efectos de la correspondiente autenticación de los controles de acceso.",
  },
  {
    type: "p",
    text: "Todo proceso de contratación o que conlleve la introducción de datos personales de carácter alto (salud, ideología,...) serán siempre transmitidos mediante protocolo de comunicación segura (Https://,...), de tal forma que ningún tercero tenga acceso a la información transmitida vía electrónica.",
  },
];
