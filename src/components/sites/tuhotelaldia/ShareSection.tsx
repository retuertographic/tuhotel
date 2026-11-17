import { SOURCE_ORIGIN } from "./nav";
import { FacebookIcon, LinkedinIcon, PinterestIcon, TwitterIcon, WhatsappIcon } from "./SocialIcons";

type Props = { path: string; title: string };

export function ShareSection({ path, title }: Props) {
  const url = `${SOURCE_ORIGIN}${path === "/" ? "/" : path}`;
  const t = encodeURIComponent(title);
  const links = [
    { label: "Facebook", href: `http://www.facebook.com/sharer.php?u=${url}`, Icon: FacebookIcon },
    { label: "Twitter", href: `http://twitter.com/share?url=${url}&text=${t}`, Icon: TwitterIcon },
    { label: "LinkedIn", href: `http://www.linkedin.com/shareArticle?mini=true&url=${url}`, Icon: LinkedinIcon },
    { label: "Pinterest", href: `http://pinterest.com/pin/create/button/?url=${url}&description=${t}`, Icon: PinterestIcon },
    { label: "WhatsApp", href: `https://api.whatsapp.com/send?text=${url}`, Icon: WhatsappIcon },
  ];

  return (
    <section className="px-6 pb-24 pt-20 text-center md:pb-28 md:pt-24">
      <h2 className="mx-auto max-w-[700px] font-heading text-[40px] font-bold uppercase leading-[1.2] text-ink md:text-[48px]">
        Comparte esta página
      </h2>
      <ul className="mt-14 flex items-center justify-center gap-[52px]">
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Compartir en ${label}`}
              className="text-ink transition-colors hover:text-brand"
            >
              <Icon className="size-[26px]" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
