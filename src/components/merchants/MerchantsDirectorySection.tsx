import Image from "next/image";
import Link from "next/link";
import {
  getMerchantBySlug,
  getMerchantHref,
  type Merchant,
} from "@/content/merchants";

/** Order and grouping match https://madisonpublicmarket.org/our-merchants/ */
const foodMerchantSlugs = [
  "the-chowpati",
  "cervato-wine-bar",
  "caracas-empanadas-y-mas",
  "cinn-city-smash",
  "melly-mells",
  "chocolate-shoppe-ice-cream",
] as const;

const retailMerchantSlugs = [
  "unique-hair-accessories-more",
  "ancestral-tribe-custom-apparel",
  "love-u-madison",
  "isthmus-yarns",
  "qbs-magnetic-creations",
  "the-greenery",
  "caed-confections",
  "fortune-favors",
  "artworking",
] as const;

function merchantsFromSlugs(slugs: readonly string[]): Merchant[] {
  return slugs
    .map((slug) => getMerchantBySlug(slug))
    .filter((merchant): merchant is Merchant => Boolean(merchant));
}

export function MerchantsDirectorySection() {
  const foodMerchants = merchantsFromSlugs(foodMerchantSlugs);
  const retailMerchants = merchantsFromSlugs(retailMerchantSlugs);

  return (
    <section className="bg-secondary px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto flex max-w-[960px] flex-col gap-14 md:gap-16">
        <MerchantGroup title="Food Merchants" merchants={foodMerchants} />
        <MerchantGroup title="Retail Merchants" merchants={retailMerchants} />
      </div>
    </section>
  );
}

function MerchantGroup({
  title,
  merchants,
}: {
  title: string;
  merchants: Merchant[];
}) {
  return (
    <div>
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] uppercase text-mpm-text">
        {title}
      </h2>
      <ul className="mt-8 flex flex-col gap-10 md:gap-12">
        {merchants.map((merchant) => (
          <li key={merchant.slug}>
            <OrgMerchantRow merchant={merchant} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function OrgMerchantRow({ merchant }: { merchant: Merchant }) {
  const href = getMerchantHref(merchant.slug);
  const hours = merchant.hours ?? [];

  return (
    <article className="grid items-center gap-8 sm:grid-cols-[minmax(140px,220px)_1fr] sm:gap-10 md:gap-14">
      <Link
        href={href}
        className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden sm:mx-0"
      >
        <Image
          src={merchant.image.src}
          alt={merchant.image.alt}
          fill
          className="object-contain"
          sizes="220px"
        />
      </Link>

      <div className="flex min-w-0 flex-col">
        <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.5vw,2.25rem)] leading-none uppercase text-primary">
          <Link href={href} className="hover:brightness-95">
            {merchant.name}
          </Link>
        </h3>

        {hours.length > 0 ? (
          <div className="mt-4 space-y-3">
            {hours.map((line) => (
              <HoursLine key={line} line={line} />
            ))}
          </div>
        ) : null}

        <Link
          href={href}
          className="mt-6 flex w-full items-center justify-center bg-accent px-6 py-3 font-[family-name:var(--font-display)] text-lg uppercase tracking-wide text-text-inverse transition hover:brightness-95 md:text-xl"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

function HoursLine({ line }: { line: string }) {
  const colon = line.indexOf(":");
  if (colon === -1) {
    return (
      <p className="font-[family-name:var(--font-body)] text-base text-mpm-text md:text-lg">
        {line}
      </p>
    );
  }

  const label = line.slice(0, colon + 1);
  const times = line.slice(colon + 1).trim();

  return (
    <p className="font-[family-name:var(--font-body)] text-base leading-snug text-mpm-text md:text-lg">
      <span className="font-bold">{label}</span>
      <br />
      {times}
    </p>
  );
}
