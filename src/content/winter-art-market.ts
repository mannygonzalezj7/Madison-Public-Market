/**
 * Winter Art Market — https://madisonpublicmarket.org/winter-art-market/
 * Future: Supabase `events` / `artwork_programs` rows.
 */

export const winterArtMarketPageMeta = {
  title: "Winter Art Market | Madison Public Market",
  description:
    "Join the inaugural Winter Art Market at Madison Public Market on Saturday, November 14 — a vibrant indoor showcase for local makers and artists.",
} as const;

export const winterArtMarket = {
  title: "2026 Winter Art Market",
  headline: "Bring Your Craft to the First-Ever Winter Art Market!",
  body: "Join us at the Madison Public Market on Saturday, November 14 for our inaugural Winter Art Market — a vibrant indoor showcase celebrating local makers, artists, and craftspeople right before the holidays.",
  image: {
    src: "/images/artwork/winter-art-market.png",
    alt: "Winter Art Market promotional graphic",
  },
  details: [
    { label: "When", value: "Saturday, November 14, 11:00 AM – 4:00 PM" },
    { label: "Where", value: "Madison Public Market (202 N. First Street)" },
    { label: "Booth Rates", value: "$25 (8'x8') | $35 (10'x10')" },
    { label: "Application Deadline", value: "October 27" },
  ],
  cta: {
    label: "Info and application",
    href: "https://airtable.com/appmhsRHXEF5SCjF5/pagzRGInxjc3vyA7w/form",
  },
  ctaBand: {
    title: "Learn More and Apply Today",
  },
} as const;
