import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Merchant } from "@/content/merchants";
import { getMerchantHeroImage } from "@/content/merchants";

const contactLinks = [
  { key: "instagram" as const, label: "Instagram" },
  { key: "facebook" as const, label: "Facebook" },
  { key: "google" as const, label: "Google" },
];

export function MerchantDetailView({ merchant }: { merchant: Merchant }) {
  const heroImage = getMerchantHeroImage(merchant);
  const gallery = merchant.gallery?.length
    ? merchant.gallery
    : [{ src: merchant.image.src, alt: merchant.image.alt }];

  const gallerySlots = [...gallery];
  while (gallerySlots.length < 4) {
    gallerySlots.push(gallery[gallerySlots.length % gallery.length]);
  }

  return (
    <section className="relative isolate px-6 py-16 md:px-16 md:py-32">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        className="-z-10 object-cover"
        sizes="100vw"
        priority
      />

      <div className="mx-auto max-w-[1280px]">
        <Link
          href="/merchants"
          className="text-style-link mb-8 inline-block text-mpm-text"
        >
          ← Back to Merchants
        </Link>

        <div className="flex flex-col gap-10 rounded-2xl bg-secondary p-6 shadow-lg md:p-8 lg:flex-row lg:items-start lg:gap-24">
          <div className="flex min-w-0 flex-1 flex-col gap-10 lg:gap-12">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-2.5">
                <div className="relative size-[100px] shrink-0 overflow-hidden bg-[#d9d9d9]">
                  <Image
                    src={merchant.image.src}
                    alt={merchant.image.alt}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4rem)] leading-none text-mpm-text uppercase">
                  {merchant.name}
                </h1>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-[family-name:var(--font-body)] text-xl text-mpm-text">
                  About The Business
                </h2>
                {merchant.about ? (
                  <p className="text-style-body text-mpm-text">{merchant.about}</p>
                ) : (
                  <p className="text-style-body text-mpm-text/70">
                    [CONFIRM WITH STEVE: merchant description]
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {gallerySlots.slice(0, 4).map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="relative aspect-[300/209] overflow-hidden border-[5px] border-accent"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="w-full shrink-0 rounded-lg bg-surface px-7 py-8 lg:w-[300px]">
            <div className="flex flex-col gap-8">
              <SidebarBlock title="Location">
                {merchant.location ? (
                  <p className="text-style-body text-mpm-text">{merchant.location}</p>
                ) : (
                  <p className="text-style-body text-mpm-text/70">
                    [CONFIRM WITH STEVE: stall number]
                  </p>
                )}
              </SidebarBlock>

              <SidebarBlock title="Hours Of Operation">
                {merchant.hours?.length ? (
                  <div className="flex flex-col gap-2">
                    {merchant.hours.map((line) => (
                      <p key={line} className="text-style-body text-mpm-text">
                        {line}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-style-body text-mpm-text/70">
                    [CONFIRM WITH STEVE: hours of operation]
                  </p>
                )}
              </SidebarBlock>

              <SidebarBlock title="Contact & Links">
                <ul className="flex flex-col gap-4">
                  {contactLinks.map(({ key, label }) => {
                    const href = merchant.social?.[key];
                    if (!href) return null;
                    return (
                      <li key={key}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-style-body inline-flex items-center gap-2 text-mpm-text underline underline-offset-4 hover:text-primary"
                        >
                          {label}
                        </a>
                      </li>
                    );
                  })}
                  {!merchant.social?.instagram &&
                  !merchant.social?.facebook &&
                  !merchant.social?.google ? (
                    <li className="text-style-body text-mpm-text/70">
                      [CONFIRM WITH STEVE: social links]
                    </li>
                  ) : null}
                </ul>
              </SidebarBlock>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SidebarBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-[family-name:var(--font-display)] text-[1.875rem] leading-none text-mpm-text uppercase">
        {title}
      </h2>
      {children}
    </div>
  );
}
