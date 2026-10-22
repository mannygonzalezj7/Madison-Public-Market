/**
 * Farmers’ Market — https://madisonpublicmarket.org/madison-public-farmers-market/
 */

export const farmersMarketPageMeta = {
  title: "Madison Public Farmers' Market | Madison Public Market",
  description:
    "Every Wednesday 4:00–7:00 PM in TruStage MarketReady Hall — fresh produce, specialty foods, art, and crafts. Free admission.",
} as const;

export const farmersMarket = {
  title: "Farmers' Market",
  schedule: "Every Wednesday | 4:00 PM – 7:00 PM",
  location: "TruStage MarketReady Hall at Madison Public Market",
  image: {
    src: "/images/events/farmers-market.jpg",
    alt: "Vendors and shoppers at the Madison Public Farmers’ Market",
  },
  contentImage: {
    src: "/images/updates/art-girls.png",
    alt: "Visitors at a colorful vendor table at Madison Public Market",
  },
  intro:
    "Every Wednesday from 4:00 PM to 7:00 PM, the Madison Public Market transforms the TruStage MarketReady Hall into a bustling farmers’ market. Featuring a wide assortment of vendors—from fresh produce and specialty foods to art and handicrafts—there is always something new to discover.",
  highlights: [
    "Fresh Local Produce: greens, vegetables, and farm-fresh staples.",
    "Specialty Foods: Artisan bakes, gourmet treats, and prepared eats.",
    "Art & Crafts: Unique handmade goods and artwork from local creators.",
  ],
  admission: "Admission: Free & open to the public",
  vendorSeasonLabel: "Aug 12 – Oct 28 Vendors",
  vendors: [
    "Happy Hooksters",
    "Air Joe Farms",
    "Botanifresh",
    "Creative Juice",
    "Maple Bee Acres",
    "Prolific Juicery",
    "Lily’s Magical Treats",
    "808Cheesecake",
    "Sun and Moon Farm",
    "Blanca Laine",
    "Capri Cheese",
    "Inspired Alchemy",
    "Yallaps",
    "Unique Hair Accessories and More",
    "Melly Mell’s",
  ],
  boothCta: {
    title: "Interested in a booth at the Madison Public Farmers Market?",
    label: "Learn more here",
    href: "/vending-at-farmers-market",
  },
} as const;
