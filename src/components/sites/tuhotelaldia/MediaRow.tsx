import Image from "next/image";
import { cn } from "@/lib/utils";
import { ASSET } from "./nav";

/** Image + text row used by the service pages; alternates sides. */
export function MediaRow({
  image,
  title,
  children,
  reverse,
}: {
  image?: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={cn("grid items-center gap-10 md:grid-cols-2 md:gap-14", !image && "md:grid-cols-1")}>
      {image && (
        <Image
          src={ASSET(image)}
          alt="Image"
          width={900}
          height={560}
          className={cn("aspect-[16/10] w-full object-cover", reverse && "md:order-2")}
        />
      )}
      <div className={cn(!image && "mx-auto max-w-[760px] text-center")}>
        <h2 className="font-heading text-[28px] font-bold text-ink md:text-[32px]">{title}</h2>
        <span aria-hidden className={cn("mt-4 block h-[3px] w-[50px] bg-brand", !image && "mx-auto")} />
        <div className="mt-6 space-y-4 text-[17px] leading-[1.8]">{children}</div>
      </div>
    </div>
  );
}
