"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs: { q: string; a: string[] }[] = [
  {
    q: "Quiero optimizar mi distribución pero no sé cómo empezar",
    a: [
      "Para eso estamos nosotros. Le ayudamos a identificar sus necesidades y recomendamos los pasos a seguir sin compromiso, contrate o no nuestros servicios.",
    ],
  },
  {
    q: "No me identifico con ninguno de sus planes pero me interesan algunos servicios.",
    a: ["Cuéntenos sus preferencias y elaboraremos un plan personalizado en base a los servicios que desee contratar."],
  },
  {
    q: "Ya tengo página web y motor de reservas y tengo presencia en diferentes canales de reservas online, pero no conseguimos conversión.",
    a: [
      "Estudiamos su posicionamiento y presencia para detectar los motivos, recomendando acciones a llevar a cabo sin compromiso.",
      "Contratando nuestros servicios trabajaremos para conseguir su objetivo.",
    ],
  },
  {
    q: "Contratando sus servicios, debo cambiar de herramientas?",
    a: [
      "No. Nosotros gestionamos su propio motor de reservas y channel manager si ya dispone de él.",
      "Si desea cambiar alguna solución, nosotros les transmitiremos nuestras recomendaciones gestionando si lo desea nuevas contrataciones y gestión.",
    ],
  },
  {
    q: "Si están fuera del hotel, cómo podrán gestionar nuestras ventas y actuar con rapidez ante cualquier incidencia o consulta?",
    a: [
      "Para desarrollar nuestra actividad, les indicaremos los informes que necesitamos por su parte para trabajar de forma óptima.",
      "Marcaremos un procedimiento de trabajo práctico y cómodo para ti.",
      "Además, concertaremos visitas y reuniones periódicas.",
      "Ofrecemos un trato personalizado con amplia disponibilidad y con un sistema de comunicación directo. Presencial, via email y/o telefónica.",
    ],
  },
  {
    q: "Manejarán información privada de mi establecimiento. Cómo garantizo mi privacidad?",
    a: [
      "Con la firma del contrato, garantizaremos la privacidad la información compartida no haciendo partícipes a terceros de la misma.",
    ],
  },
  {
    q: "Exigen permanencia? Si deseo prescindir de sus servicios, cuándo puedo hacerlo?",
    a: [
      "Nuestra única garantía de permanencia se basa en tu satisfacción.",
      "Recomendamos la permanencia de algunos de los servicios con un margen prudencial que permita medir resultados, pero nuestro principio es trabajar conjuntamente por deseo de ambas partes, sin exigir permanencia.",
    ],
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={cn("border", isOpen ? "border-brand" : "border-[#e5e5e5]")}>
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-[17px] font-bold transition-colors",
                  isOpen ? "bg-brand text-white" : "bg-white text-ink hover:text-brand",
                )}
              >
                {f.q}
                {isOpen ? <Minus className="size-5 shrink-0" /> : <Plus className="size-5 shrink-0" />}
              </button>
            </h2>
            <div id={`faq-${i}`} hidden={!isOpen} className="space-y-3 px-6 py-5 text-[16px] leading-[1.75]">
              {f.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
