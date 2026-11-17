# tuhotelaldia.com — page brief

## How the source was captured
- The live server (Joomla + Helix3 / SP Page Builder) answers **403 "Malware detected"** to this
  cloud environment's IP for every URL, including static images and CSS.
- web.archive.org was unreachable from the sandbox (connection reset); its latest snapshot is 2024-11-13.
- Text was captured from the live site through WebFetch (rendered text only; no HTML/CSS/images).
- Colours were sampled from the owner's mobile screenshot
  (`docs/design-references/tuhotelaldia/mobile-home-bottom-user-screenshot.jpg`):
  magenta `#ad064e`, footer `#141414`, headings `#4a4a4a`, muted labels `#b9b9b9`.
- Fonts inferred from the screenshot: Lato (headings), Poppins light (body/footer).

## Route map (source → local)
| Source | Local file |
|---|---|
| `/` | `src/app/page.tsx` |
| `/servicios/principales` | `src/app/servicios/principales/page.tsx` |
| `/servicios/otros` | `src/app/servicios/otros/page.tsx` |
| `/planes` | `src/app/planes/page.tsx` |
| `/nosotros/10-razones` | `src/app/nosotros/10-razones/page.tsx` |
| `/nosotros/nuestro-equipo` | `src/app/nosotros/nuestro-equipo/page.tsx` |
| `/nosotros/testimonios` | `src/app/nosotros/testimonios/page.tsx` |
| `/saber-mas/faq` | `src/app/saber-mas/faq/page.tsx` |
| `/saber-mas/contactanos`, `/contacto` | `src/components/sites/tuhotelaldia/ContactPage.tsx` |
| `/servicios`, `/nosotros`, `/saber-mas` | redirects in `next.config.ts` |
| `/aviso-legal` | `src/app/aviso-legal/page.tsx` (text in `legal.tsx`) |
| `/cookies`, `/politica-de-privacidad` | `src/app/cookies`, `src/app/politica-de-privacidad` — same body on the source (verified), shared in `legal.tsx` |
| `/sitemap` | `src/app/sitemap/page.tsx` |

## Assets (source URL → local path)
All in `public/sites/tuhotelaldia/`. Except the logo, they are **labelled grey placeholders**
until `scripts/download-tuhotelaldia-assets.sh` is run from a machine the server doesn't block.
- `/images/logo_negative-1.png` → `logo_negative-1.png` (interim: cropped from the owner's screenshot, low-res)
- `/media/com_sppagebuilder/placeholder/{server1,server2,server3}.jpg` → plan images
- `nosotros.jpg` → Nuestro Equipo header (owner-supplied).
- `imgs-servicios{,2,3,4,5}.jpg` → **real images supplied by the owner** (900×400), assigned by subject:
  Revenue Management = magnifier, Distribución digital = booking phone, Diseño Web = woman at laptop,
  Gestión de Reservas = hotel bell, Reputación = handshake. Not re-downloaded by the script.
- `/media/com_sppagebuilder/placeholder/{untitled-11..18,tenerife-job-training,key-properties}.jpg` → testimonial logos

## Content corrected on request (differs from the source)
- Plans: home now matches /planes — order BASE, PLUS, PREMIUM; PLUS = "Solución ideal para la mayoría"
  (highlighted), PREMIUM = "Gestión integral de tu establecimiento".
- Home tabs: "Sin Comisiones" shows "No trabajamos con comisiones…", "Resultados" shows the sales-tracking text.
- Legal texts are reproduced as published; they cite the repealed LOPD 15/1999 (current law: RGPD + LOPDGDD 3/2018).

## Not verifiable (no desktop view of the source)
Desktop layout, section backgrounds, icons, tab/carousel styling and spacing are reconstructions
in the Helix3 style, not measured. Only the mobile header/share block/footer was compared with a real screenshot.
