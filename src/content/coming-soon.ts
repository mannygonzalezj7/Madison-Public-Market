/**
 * Coming Soon — https://madisonpublicmarket.org/coming-soon/
 */

export const comingSoonPageMeta = {
  title: "Coming Soon | Madison Public Market",
  description:
    "More merchants are coming soon to the Madison Public Market Main Hall.",
} as const;

export const comingSoon = {
  title: "More Merchants Coming Soon to Main Hall",
  merchants: [
    { name: "Melly Mell's Soul Food", season: "Fall 2026" },
    { name: "Little Tibet Kitchenette", season: "Fall 2026" },
    { name: "Cervato Pizza", season: "Fall 2026" },
    { name: "Crepuw", season: "Winter 2026/27" },
    { name: "Eloura Cafe", season: "Winter 2026/27" },
    { name: "Market Bar", season: "Winter 2026/27" },
    { name: "Can D", season: "Winter 2026/27" },
  ],
  image: {
    src: "/images/merchants/cards/eloura.jpg",
    alt: "Eloura Cafe beverage and lifestyle photo",
  },
  directoryCta: {
    label: "Merchant Directory",
    href: "/merchants",
  },
} as const;
