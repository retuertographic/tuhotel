import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Plan } from "./content";
import { ASSET } from "./nav";

export function PlanCard({ plan, ctaLabel, ctaHref }: { plan: Plan; ctaLabel: string; ctaHref: string }) {
  return (
    <article
      className={cn(
        "flex flex-col border bg-white text-center transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
        plan.highlight ? "border-brand shadow-[0_10px_30px_rgba(0,0,0,0.10)] lg:-my-4" : "border-[#e5e5e5]",
      )}
    >
      <header className={cn("px-6 py-7", plan.highlight ? "bg-brand text-white" : "bg-[#f7f7f7]")}>
        <h3
          className={cn(
            "font-heading text-[30px] font-black tracking-[1px]",
            plan.highlight ? "text-white" : "text-ink",
          )}
        >
          {plan.name}
        </h3>
        <p className={cn("mt-1 text-[13px] font-medium tracking-[0.5px]", plan.highlight ? "text-white/85" : "text-body")}>
          {plan.tagline}
        </p>
      </header>
      <Image
        src={ASSET(plan.image)}
        alt="Image"
        width={900}
        height={560}
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="flex flex-1 flex-col px-7 pb-8 pt-6">
        {plan.includes && <p className="mb-3 text-[14px] font-medium text-brand">{plan.includes}</p>}
        <ul className="flex-1 space-y-3 text-left text-[15px] leading-[1.5]">
          {plan.features.map((f) => (
            <li key={f} className="flex gap-3 border-b border-dashed border-[#e5e5e5] pb-3 last:border-0">
              <Check className="mt-0.5 size-4 shrink-0 text-brand-green" strokeWidth={3} aria-hidden />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Link
          href={ctaHref}
          className={cn(
            "mt-7 inline-block self-center border-2 px-8 py-3 font-heading text-[14px] font-bold uppercase tracking-[1px] transition-colors",
            plan.highlight
              ? "border-brand bg-brand text-white hover:bg-brand-dark"
              : "border-brand text-brand hover:bg-brand hover:text-white",
          )}
        >
          {plan.price ?? ctaLabel}
        </Link>
      </div>
    </article>
  );
}
