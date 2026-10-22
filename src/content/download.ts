/**
 * Download App — https://madisonpublicmarket.org/download/
 */

export const downloadPageMeta = {
  title: "MPM Passport App | Madison Public Market",
  description:
    "Download the Madison Public Market Passport app — explore the market and stay connected.",
} as const;

export const downloadApp = {
  title: "Download App",
  steps: [
    "Visit mpmpassport.com",
    "Create Your Free Account (1 minute)",
    "Add the Passport to Your Home Screen",
  ],
  tagline: "Explore the Market. Stay Connected.",
  image: {
    src: "/images/download/app.png",
    alt: "MPM Passport app on a phone",
  },
  cta: {
    label: "View app here",
    href: "https://mpmpassport.com",
  },
} as const;
