import Image from "next/image";
import { about } from "@/content/home";
import { AccentBar } from "@/components/ui/AccentBar";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function AboutSection() {
  return (
    <section className="bg-secondary" id="about">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-12 tablet:px-8 desktop:grid-cols-2 desktop:items-center desktop:gap-12 desktop:px-12 desktop:py-16">
        <div className="flex items-stretch gap-4 desktop:gap-5">
          <AccentBar orientation="vertical" className="min-h-[12rem]" />
          <div className="min-w-0 flex-1">
            <h2 className="text-style-primary">{about.title}</h2>
            <p className="text-style-body mt-4 max-w-[54ch]">{about.body}</p>
            <ButtonLink href={about.cta.href} className="mt-6 w-full tablet:w-auto">
              {about.cta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={about.image.src}
            alt={about.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
