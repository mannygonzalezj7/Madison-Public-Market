import Image from "next/image";
import { footer } from "@/content/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-stroke bg-secondary">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-5 py-10 tablet:px-8 desktop:flex-row desktop:justify-between desktop:gap-12 desktop:px-12 desktop:py-8">
        <div className="relative h-16 w-[150px] shrink-0 desktop:h-[72px] desktop:w-[170px]">
          <Image
            src={footer.logo.src}
            alt={footer.logo.alt}
            fill
            className="object-contain object-center desktop:object-left"
            sizes="170px"
          />
        </div>

        <div className="flex flex-col items-center gap-6 desktop:flex-row desktop:gap-12">
          <ul className="flex flex-col items-center gap-3 desktop:flex-row desktop:gap-10">
            {footer.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-style-accent uppercase tracking-wide text-neutral-brown hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-5" aria-label="Social media">
            {footer.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-style-accent text-sm text-neutral-brown hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
