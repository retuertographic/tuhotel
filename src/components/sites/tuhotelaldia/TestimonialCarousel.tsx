"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "./content";

export function TestimonialCarousel({ items, interval = 7000 }: { items: Testimonial[]; interval?: number }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => window.clearInterval(id);
  }, [paused, items.length, interval]);

  return (
    <div
      className="mx-auto max-w-[860px] text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="mx-auto mb-6 size-10 text-brand" aria-hidden />
      <div className="grid">
        {items.map((t, i) => (
          <figure
            key={t.author}
            aria-hidden={i !== index}
            className={cn(
              "col-start-1 row-start-1 transition-opacity duration-700",
              i === index ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <blockquote className="text-[20px] font-light italic leading-[1.7] text-[#999] md:text-[24px]">
              {t.quote}
            </blockquote>
            <figcaption className="mt-7 font-heading text-[16px] font-bold uppercase tracking-[0.5px] text-soft">
              {t.author}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-3" role="tablist" aria-label="Testimonios">
        {items.map((t, i) => (
          <button
            key={t.author}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={t.author}
            onClick={() => setIndex(i)}
            className={cn("size-3 rounded-full transition-colors", i === index ? "bg-brand" : "bg-[#d5d5d5] hover:bg-[#b5b5b5]")}
          />
        ))}
      </div>
    </div>
  );
}
