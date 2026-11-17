"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ASSET, mainNav } from "./nav";

function isActive(pathname: string, href: string, children?: { href: string }[]) {
  if (href === "/") return pathname === "/";
  return pathname === href || !!children?.some((c) => pathname === c.href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow",
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.12)]" : "shadow-[0_1px_6px_rgba(0,0,0,0.06)]",
      )}
    >
      <div className="mx-auto flex h-[90px] max-w-[1170px] items-center justify-between px-6 lg:px-[15px]">
        <Link href="/" aria-label="Tu Hotel al Día - Gestión Hotelera Online" onClick={() => setOpen(false)}>
          <Image
            src={ASSET("logo_negative-1.png")}
            alt="Tu Hotel al Día - Gestión Hotelera Online"
            width={582}
            height={139}
            priority
            className="h-auto w-[220px] sm:w-[250px]"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center">
            {mainNav.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-[90px] items-center gap-1 px-4 font-heading text-[14px] font-bold uppercase tracking-[0.5px] text-ink transition-colors hover:text-brand",
                    isActive(pathname, item.href, item.children) && "text-brand",
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3.5" aria-hidden />}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full min-w-[220px] translate-y-2 border-t-2 border-brand bg-white py-2 opacity-0 shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "block px-5 py-2.5 text-[14px] text-body transition-colors hover:bg-neutral-50 hover:text-brand",
                            pathname === child.href && "text-brand",
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="p-2 text-[#333] lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-9" strokeWidth={2.5} /> : <Menu className="size-9" strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile off-canvas menu */}
      <div
        className={cn(
          "fixed inset-0 top-[90px] z-40 bg-black/40 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />
      <nav
        aria-label="Móvil"
        className={cn(
          "fixed bottom-0 right-0 top-[90px] z-50 w-[280px] overflow-y-auto bg-footer px-6 py-6 transition-transform lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <ul>
          {mainNav.map((item) => (
            <li key={item.label} className="border-b border-white/10">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-3 font-heading text-[15px] font-bold uppercase text-white hover:text-brand",
                  isActive(pathname, item.href, item.children) && "text-brand",
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="pb-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block py-1.5 text-[14px] text-white/70 hover:text-brand",
                          pathname === child.href && "text-brand",
                        )}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
