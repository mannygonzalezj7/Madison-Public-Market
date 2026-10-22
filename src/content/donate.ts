/**
 * Donate page — layout from Figma / screenshot; copy from live.
 * https://madisonpublicmarket.org/donate/
 * Giving: https://givebutter.com/madisonpublicmarket
 */

export const donatePageMeta = {
  title: "Donate | Madison Public Market",
  description:
    "Support the Madison Public Market Foundation — a 501(c)3 raising funds for equipment, furnishings, artwork, reserves, and entrepreneur programming.",
} as const;

export const donateHero = {
  title: "Donate",
  overlay: "Help Your Community, One Step At A Time",
  image: {
    src: "/images/donate/hero.webp",
    alt: "Mural of a fruit basket on a tiled wall at Madison Public Market",
  },
} as const;

export const donateCause = {
  title: "Donate for a Good Cause",
  paragraphs: [
    "The Madison Public Market Foundation continues to raise funds for a variety of items such as equipment, furnishings, artwork, operating reserves, and programming to support entrepreneurs. These funds are important to launch and sustain a successful, vibrant public market.",
    "Giving is easy! The Madison Public Market Foundation is a 501(c)3 organization, so your gift will be tax deductible. The Foundation’s EIN/TIN # is 82-2666213.",
  ],
  image: {
    src: "/images/donate/mural.webp",
    alt: "Community members painting a colorful mural",
  },
} as const;

export const givebutter = {
  campaignUrl: "https://givebutter.com/madisonpublicmarket",
  label: "Donate",
  brandName: "Madison Public Market",
  tagline: "Equity Through Entrepreneurship",
  logo: {
    src: "/images/donate/foundation-logo.webp",
    alt: "Madison Public Market Foundation logo",
  },
} as const;
