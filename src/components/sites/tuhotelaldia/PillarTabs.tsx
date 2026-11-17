"use client";

import { useState } from "react";
import { BarChart3, Handshake, Percent, Search } from "lucide-react";
import { cn } from "@/lib/utils";

// Tab order as on the source. Pane texts are matched to their headings (they were swapped on the source).
const tabs = [
  {
    label: "ESTUDIO",
    title: "Estudio",
    Icon: Search,
    text: "Estudiamos su producto y asesorándole en técnicas de mejora en cuanto a presencia online, política de tarifas y estrategias de rentabilidad",
  },
  {
    label: "GESTIÓN",
    title: "Gestión",
    Icon: Handshake,
    text: "Mediamos entre su establecimiento y portales de reservas online gestionando directamente contenidos, precios, disponibilidades, campañas y promociones con garantías de tiempo de reacción.",
  },
  {
    label: "RESULTADOS",
    title: "Resultados",
    Icon: BarChart3,
    text: "Realizamos seguimiento de sus ventas elaborando informes de producción, comparativas de competencia y evolución de rentabilidad actuando con el fin de optimizar sus ventas.",
  },
  {
    label: "SIN COMISIONES",
    title: "Sin Comisiones",
    Icon: Percent,
    text: "No trabajamos con comisiones. Nuestra garantía de permanencia trabajando para su empresa será la conversión positiva de su establecimiento en cuanto a resultados. Su éxito será también el nuestro.",
  },
];

export function PillarTabs() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div>
      <div role="tablist" aria-label="Cómo trabajamos" className="grid grid-cols-2 border border-[#e5e5e5] md:grid-cols-4">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            id={`pillar-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls="pillar-panel"
            onClick={() => setActive(i)}
            className={cn(
              "flex flex-col items-center gap-3 border-[#e5e5e5] px-4 py-7 font-heading text-[15px] font-bold tracking-[0.5px] transition-colors max-md:odd:border-r max-md:[&:nth-child(-n+2)]:border-b md:not-last:border-r",
              i === active ? "bg-brand text-white" : "bg-white text-ink hover:text-brand",
            )}
          >
            <t.Icon className="size-8" strokeWidth={1.5} aria-hidden />
            {t.label}
          </button>
        ))}
      </div>
      <div
        id="pillar-panel"
        role="tabpanel"
        aria-labelledby={`pillar-tab-${active}`}
        className="border border-t-0 border-[#e5e5e5] bg-white px-8 py-10 text-center md:px-16"
      >
        <h3 className="font-heading text-[24px] font-bold text-ink">{current.title}</h3>
        <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-[1.75]">{current.text}</p>
      </div>
    </div>
  );
}
