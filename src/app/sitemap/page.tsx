import type { Metadata } from "next";
import Link from "next/link";
import { footerLinks, mainNav } from "@/components/sites/tuhotelaldia/nav";
import { Container, PageTitle } from "@/components/sites/tuhotelaldia/primitives";

export const metadata: Metadata = { title: "Sitemap" };

const linkCls = "text-body transition-colors hover:text-brand";

export default function Page() {
  return (
    <>
      <PageTitle title="Sitemap" />
      <section className="py-16 md:py-20">
        <Container className="grid max-w-[900px] gap-12 text-[16px] leading-[1.9] md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-heading text-[20px] font-bold text-ink">Menu Principal</h2>
            <ul className="list-disc pl-6 marker:text-brand">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="list-[circle] pl-6">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className={linkCls}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link href="/contacto" className={linkCls}>
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 font-heading text-[20px] font-bold text-ink">Footer</h2>
            <ul className="list-disc pl-6 marker:text-brand">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
