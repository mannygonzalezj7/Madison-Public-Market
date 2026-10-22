import { merchantDetails } from "@/content/merchant-details";

/**
 * Merchants page content from https://madisonpublicmarket.org/our-merchants/
 * Stall assignments from Airtable ZebraDog share
 * (Suite Number from Lease Signing Info):
 * https://airtable.com/app8rkw4mK2Q0mv0G/shry64VObJuMqc98O/tbl8L0qkFP4w6cXC3
 */

export const merchantsPageMeta = {
  title: "Our Merchants | Madison Public Market",
  description:
    "Explore permanent merchants and weekly kiosks at the Madison Public Market — find food, drinks, shopping, and family-friendly vendors on the interactive hall map.",
} as const;

export const merchantsHero = {
  title: "Merchants",
  subtitle: "Discover Your New Favorite Businesses",
  image: {
    src: "/images/merchants/hero.webp",
    alt: "Crowded Madison Public Market hall with string lights and shoppers",
  },
} as const;

export type MerchantCategory = "food" | "bar" | "shopping" | "family";

export type Merchant = {
  slug: string;
  name: string;
  image: { src: string; alt: string };
  categories: MerchantCategory[];
  /** Primary stall id matching market-map.ts hotspot ids */
  stallId: string | null;
  /** Extra stall ids when a merchant spans multiple suites */
  stallIds?: string[];
  about?: string | null;
  location?: string | null;
  hours?: string[];
  gallery?: { src: string; alt: string }[];
  social?: {
    instagram?: string;
    facebook?: string;
    google?: string;
  };
};

export function getMerchantHref(slug: string) {
  return `/merchants/${slug}`;
}

export function getMerchantStallIds(merchant: Merchant): string[] {
  const ids = [...(merchant.stallIds ?? [])];
  if (merchant.stallId && !ids.includes(merchant.stallId)) {
    ids.unshift(merchant.stallId);
  }
  return ids;
}

export function getMerchantBySlug(slug: string): Merchant | undefined {
  const base = merchants.find((merchant) => merchant.slug === slug);
  if (!base) return undefined;

  const details = merchantDetails[slug];
  return {
    ...base,
    ...details,
    location:
      details?.location ??
      base.location ??
      base.stallId ??
      null,
  };
}

export function getMerchantsWithDetails(): Merchant[] {
  return merchants
    .map((merchant) => getMerchantBySlug(merchant.slug))
    .filter((merchant): merchant is Merchant => Boolean(merchant));
}

/** Card/grid image — prefer a business photo from gallery over logo */
export function getMerchantCardImage(merchant: Merchant) {
  return merchant.gallery?.[0] ?? merchant.image;
}

/** Detail page hero — first gallery photo from the business */
export function getMerchantHeroImage(merchant: Merchant) {
  return merchant.gallery?.[0] ?? merchant.image;
}

export const merchantCategories: { id: MerchantCategory; label: string }[] = [
  { id: "food", label: "Food" },
  { id: "bar", label: "Bar" },
  { id: "shopping", label: "Shopping" },
  { id: "family", label: "Family" },
];

export const merchants: Merchant[] = [
  {
    slug: "the-chowpati",
    name: "The Chowpati",
    image: {
      src: "/images/merchants/cards/chowpati.png",
      alt: "The Chowpati logo",
    },
    categories: ["food"],
    stallId: "540",
    location: "540",
  },
  {
    slug: "cervato-wine-bar",
    name: "Cervato Wine and Tapas",
    image: {
      src: "/images/merchants/cards/cervato.webp",
      alt: "Cervato Wine and Tapas",
    },
    categories: ["bar", "food"],
    stallId: "470",
    location: "470",
  },
  {
    slug: "caracas-empanadas-y-mas",
    name: "Caracas Empanadas Y Más",
    image: {
      src: "/images/merchants/cards/caracas.webp",
      alt: "Caracas Empanadas Y Más",
    },
    categories: ["food"],
    stallId: "560",
    location: "560",
  },
  {
    slug: "cinn-city-smash",
    name: "Cinn City Smash",
    image: {
      src: "/images/merchants/cards/cinn-city.webp",
      alt: "Cinn City Smash logo",
    },
    categories: ["food"],
    stallId: "550",
    location: "550",
  },
  {
    slug: "melly-mells",
    name: "Melly Mell's",
    image: {
      src: "/images/merchants/cards/melly-mells.jpg",
      alt: "Melly Mell's",
    },
    categories: ["food"],
    stallId: "510",
    location: "510",
  },
  {
    slug: "chocolate-shoppe-ice-cream",
    name: "Chocolate Shoppe Ice Cream",
    image: {
      src: "/images/merchants/cards/chocolate-shoppe.webp",
      alt: "Chocolate Shoppe Ice Cream logo",
    },
    categories: ["food", "family"],
    stallId: "240",
    location: "240",
  },
  {
    slug: "unique-hair-accessories-more",
    name: "Unique Hair Accessories & More",
    image: {
      src: "/images/merchants/cards/unique-hair.webp",
      alt: "Unique Hair Accessories & More logo",
    },
    categories: ["shopping"],
    stallId: "310",
    location: "310",
  },
  {
    slug: "ancestral-tribe-custom-apparel",
    name: "Ancestral Tribe",
    image: {
      src: "/images/merchants/cards/ancestral-tribe.png",
      alt: "Ancestral Tribe logo",
    },
    categories: ["shopping"],
    stallId: "310",
    location: "310",
  },
  {
    slug: "love-u-madison",
    name: "Love U Madison",
    image: {
      src: "/images/merchants/cards/love-u.webp",
      alt: "Love U Madison logo",
    },
    categories: ["shopping", "family"],
    stallId: "720",
    location: "720 & 730",
  },
  {
    slug: "isthmus-yarns",
    name: "Isthmus Yarns",
    image: {
      src: "/images/merchants/cards/isthmus-yarns.webp",
      alt: "Isthmus Yarns logo",
    },
    categories: ["shopping"],
    stallId: "210",
    location: "210",
  },
  {
    slug: "qbs-magnetic-creations",
    name: "QB's Magnetic Creations",
    image: {
      src: "/images/merchants/cards/qbs.webp",
      alt: "QB's Magnetic Creations logo",
    },
    categories: ["shopping", "family"],
    stallId: "320",
    location: "320",
  },
  {
    slug: "the-greenery",
    name: "The Greenery",
    image: {
      src: "/images/merchants/cards/greenery.webp",
      alt: "The Greenery logo",
    },
    categories: ["shopping"],
    stallId: "230",
    location: "230",
  },
  {
    slug: "caed-confections",
    name: "Caed Confections",
    image: {
      src: "/images/merchants/cards/caed.webp",
      alt: "Caed Confections logo",
    },
    categories: ["shopping", "food"],
    stallId: "220",
    location: "220",
  },
  {
    slug: "fortune-favors",
    name: "Fortune Favors",
    image: {
      src: "/images/merchants/cards/fortune-favors.png",
      alt: "Fortune Favors logo",
    },
    categories: ["shopping", "food"],
    stallId: "580",
    location: "580",
  },
  {
    slug: "artworking",
    name: "ArtWorking",
    image: {
      src: "/images/merchants/cards/artworking.webp",
      alt: "ArtWorking logo",
    },
    categories: ["shopping", "family"],
    stallId: "Artworking",
    location: "810-A",
  },
];

/** Default merchant shown in map info panel (Figma prototype uses Cinn City Smash) */
export const defaultMapMerchantSlug = "cinn-city-smash";

export const kiosksSection = {
  title: "Kiosks This Week at the Market!",
  /** [CONFIRM WITH STEVE: weekly kiosk vendor list] */
  items: [] as { name: string; image: string; href?: string }[],
} as const;
