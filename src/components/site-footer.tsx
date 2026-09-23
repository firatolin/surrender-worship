import Link from "next/link";
import { navLinks } from "./nav-links";
import { YoutubeIcon, InstagramIcon, TiktokIcon } from "./social-icons";

const socials = [
  {
    label: "YouTube",
    handle: "@ChelinaSong",
    href: "https://www.youtube.com/@ChelinaSong",
    Icon: YoutubeIcon,
  },
  {
    label: "Instagram",
    handle: "@chelina.music",
    href: "https://www.instagram.com/chelina.music",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    handle: "@surrender.worship3",
    href: "https://www.tiktok.com/@surrender.worship3",
    Icon: TiktokIcon,
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="container-editorial py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1 — Identity */}
          <div>
            <p className="font-serif text-xl text-brand-ivory">
              Surrender Worship Ministry
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70 max-w-xs">
              Raising spiritually mature, Christ-centered worshipers who serve
              with excellence and integrity.
            </p>
            <p className="mt-4 text-sm text-foreground/60">
              Addis Ababa, Ethiopia
            </p>
          </div>

          {/* Column 2 — Quick nav */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-brand-light-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-antique-gold">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-foreground/80 transition-colors"
                    aria-label={`${s.label} — ${s.handle}`}
                  >
                    <s.Icon className="h-4 w-4 text-brand-antique-gold group-hover:text-brand-light-gold transition-colors" />
                    <span className="group-hover:text-brand-light-gold transition-colors">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mt-12 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground/50">
            © {year} Surrender Worship Ministry. All rights reserved.
          </p>
          <p className="text-xs text-foreground/50">
            Developed by{" "}
            <a
              href="https://www.firatolin.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-antique-gold hover:text-brand-light-gold transition-colors"
            >
              Firatol Esayas Tefera
            </a>
          </p>
        </div>
      
        </div>
    </footer>
  );
}