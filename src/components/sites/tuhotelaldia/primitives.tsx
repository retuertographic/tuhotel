import Link from "next/link";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1170px] px-6 lg:px-[15px]", className)}>{children}</div>;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  as: Tag = "h2",
}: {
  title: string;
  subtitle?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-[820px] text-center", className)}>
      <Tag className="font-heading text-[30px] font-bold uppercase leading-[1.25] text-ink md:text-[36px]">{title}</Tag>
      <span aria-hidden className="mx-auto mt-4 block h-[3px] w-[60px] bg-brand" />
      {subtitle && <p className="mt-5 text-[17px] leading-[1.7] text-body">{subtitle}</p>}
    </div>
  );
}

/** Banner used at the top of inner pages. */
export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20">
      <Container>
        <SectionHeading as="h1" title={title} subtitle={subtitle} className="mb-0" />
      </Container>
    </section>
  );
}

export function BrandButton({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block border-2 px-8 py-3 font-heading text-[14px] font-bold uppercase tracking-[1px] transition-colors",
        variant === "solid" && "border-brand bg-brand text-white hover:border-brand-dark hover:bg-brand-dark",
        variant === "outline" && "border-brand text-brand hover:bg-brand hover:text-white",
        variant === "light" && "border-white text-white hover:bg-white hover:text-brand",
        className,
      )}
    >
      {children}
    </Link>
  );
}
