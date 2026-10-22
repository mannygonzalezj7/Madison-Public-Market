import { ButtonLink } from "@/components/ui/ButtonLink";
import { artwork } from "@/content/about";

export function ArtworkCta() {
  return (
    <section
      id="artwork"
      className="scroll-mt-24 bg-accent"
    >
      <div className="h-[7px] w-full bg-yellow" aria-hidden="true" />
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 py-8 text-center md:px-16">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.4rem)] uppercase leading-[50px] text-text-inverse">
          {artwork.title}
        </h2>
        <ButtonLink href={artwork.cta.href}>{artwork.cta.label}</ButtonLink>
      </div>
      <div className="h-[7px] w-full bg-yellow" aria-hidden="true" />
    </section>
  );
}
