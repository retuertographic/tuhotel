"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-24 right-[22%] z-40 flex size-[62px] items-center justify-center bg-brand text-white transition-all hover:bg-brand-dark md:bottom-10 md:right-10 md:size-[50px]",
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ChevronUp className="size-9 md:size-7" strokeWidth={3.5} />
    </button>
  );
}
