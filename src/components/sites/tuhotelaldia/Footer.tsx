import Link from "next/link";
import { footerLinks } from "./nav";
import { BackToTop } from "./BackToTop";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-brand bg-footer px-6 py-8 text-center text-[16px] font-light leading-[1.75] text-footer-text md:text-[15px]">
      <p>
        <a href="mailto:info@tuhotelaldia.com" className="hover:text-white">
          info@tuhotelaldia.com
        </a>{" "}
        | Todos los derechos reservados.
      </p>
      <p className="mt-1">
        Desarrollado por{" "}
        <a
          href="https://retuertographicdesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-normal text-[#9a9a9a] underline-offset-4 hover:text-white hover:underline"
        >
          Retuerto Graphic Design
        </a>
        . Ricardo Retuerto Barrera | Spain-Germany |{" "}
        <a href="tel:+34922971723" className="whitespace-nowrap hover:text-white">
          0034 922 971 723
        </a>{" "}
        ·{" "}
        <a href="tel:+493031878629" className="whitespace-nowrap hover:text-white">
          0049 30 31878629
        </a>
      </p>
      <ul className="mt-1 flex flex-wrap justify-center gap-x-8">
        {footerLinks.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <BackToTop />
    </footer>
  );
}
