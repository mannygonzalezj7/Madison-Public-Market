import Image from "next/image";
import { merchants } from "@/content/home";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function MerchantsSection() {
  return (
    <section className="bg-accent text-text-inverse" id="merchants">
      <div className="mx-auto max-w-[1280px] px-5 py-12 tablet:px-8 desktop:px-12 desktop:py-16">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-style-primary">{merchants.title}</h2>
          <p className="text-style-body mt-4">{merchants.body}</p>
          <ButtonLink
            href={merchants.directory.href}
            className="mt-6 w-full tablet:w-auto"
          >
            {merchants.directory.label}
          </ButtonLink>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 tablet:gap-4 desktop:mt-12 desktop:grid-cols-4 desktop:gap-5">
          {merchants.images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-square overflow-hidden border-[3px] border-secondary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
