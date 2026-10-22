/**
 * Merchant FAQs — live FAQ URL currently 404.
 * Seeded only with recoverable published answers; gaps flagged for Steve.
 */

export const merchantFaqPageMeta = {
  title: "Merchant FAQs | Madison Public Market",
  description:
    "Frequently asked questions for prospective merchants at Madison Public Market.",
} as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const merchantFaq = {
  title: "Merchant FAQs",
  intro:
    "Below are frequently asked questions from potential merchants. Please check back periodically as new FAQs are added. Additional questions: leasing@madisonpublicmarket.org.",
  items: [
    {
      question: "How and who decides merchant location within the market space?",
      answer:
        "Assigned spaces are the sole decision and discretion of Market administration. Spaces are offered according to the type of business and features required to run the business. When possible, there may be a choice offered, however this is not guaranteed.",
    },
    {
      question:
        "Are there any merchant support programs or mentorship opportunities available?",
      answer:
        "Yes. A feature of the market is to pair more experienced business owners with newer entrepreneurs. Market administration will also monitor the landscape for opportunities.",
    },
    {
      question:
        "What kind of marketing or advertising does the Market provide for merchants?",
      answer:
        "The Market’s goal in marketing and advertising is to get people interested in coming to the market itself. The exact type and spend of advertising by the Market is yet to be determined, though we anticipate using multiple channels including social media and traditional media outlets. However, it is the Merchant’s responsibility to market and advertise their business.",
    },
    {
      question: "What are anticipated Market hours of operation?",
      answer:
        "[CONFIRM WITH STEVE: full hours FAQ answer — live FAQ page currently unavailable]",
    },
    {
      question: "What are lease rates and rental costs?",
      answer:
        "[CONFIRM WITH STEVE: lease rate FAQ — final rates provided during selection; keep below comparable commercial spaces per Foundation updates]",
    },
    {
      question: "How do I apply for a weekly kiosk?",
      answer:
        "Kiosk applications will launch later this fall. For now, submit the Merchant Interest Form and watch for Midweek Market and kiosk announcements.",
    },
  ] satisfies FaqItem[],
  contactEmail: "leasing@madisonpublicmarket.org",
} as const;
