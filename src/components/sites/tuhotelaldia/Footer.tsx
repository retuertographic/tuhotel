import { footerLinks } from "./nav";
import { BackToTop } from "./BackToTop";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-brand bg-footer px-6 py-8 text-center text-[16px] font-light leading-[1.75] text-footer-text md:text-[15px]">
      <p>
        <a href="mailto:info@tuhotelaldia.com" className="hover:text-white">
          info@tuhotelaldia.com
        </a>{" "}
        | Todos los derechos reservados. Desarrollado por{" "}
        <a
          href="https://retuertographicdesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Retuerto Graphic Design
        </a>
      </p>
      <ul className="mt-1 flex flex-wrap justify-center gap-x-8">
        {footerLinks.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <BackToTop />
    </footer>
  );
}
