/**
 * Merchant Interest Form page.
 * Live: https://madisonpublicmarket.org/our-merchants/interest/
 * External form: Airtable (native form TBD)
 */

export const merchantInterestPageMeta = {
  title: "Merchant Interest Form | Madison Public Market",
  description:
    "Submit your interest to sell at Madison Public Market — permanent suites, Midweek Market, kiosks, and more.",
} as const;

export const merchantInterest = {
  title: "Submit Your Interest Today",
  subtitle: "Merchant / vendor interest form",
  body: "If you are interested in having your business at the Madison Public Market, please take a few minutes to complete our Merchant Interest Form. We’d love to learn more about how the Market would fit into your plans, what you propose to sell, and a bit more about who you are.",
  note: "We encourage you to review our Merchant FAQs and the merchants already announced, as we will not be duplicating existing menus, products, and services.",
  ctaLabel: "Submit Interest Form",
  /** Live Foundation interest form */
  formUrl: "https://airtable.com/app8rkw4mK2Q0mv0G/pag54MRsiTmKdSCsH/form",
  related: [
    { label: "Become a Vendor", href: "/merchants/interest" },
    { label: "Merchant FAQs", href: "/merchants/faq" },
    { label: "Merchant Directory", href: "/merchants" },
  ],
} as const;
