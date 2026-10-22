/**
 * Merchant hours — https://madisonpublicmarket.org/hours/
 */

export const hoursPageMeta = {
  title: "Hours | Madison Public Market",
  description:
    "Individual merchant hours at Madison Public Market — food and retail shops.",
} as const;

export const hoursPage = {
  title: "Hours",
  sections: [
    {
      title: "Food Merchants",
      merchants: [
        {
          name: "The Chowpati",
          logo: "/images/merchants/cards/chowpati.png",
          href: "/merchants/the-chowpati",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 10:00am – 3:00pm and 5:00pm – 8:00pm",
            "Sunday: 11:00am – 7:00pm",
          ],
        },
        {
          name: "Cervato Wine and Tapas",
          logo: "/images/merchants/cards/cervato.webp",
          href: "/merchants/cervato-wine-bar",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 11:00am – 8:00pm",
            "Sunday: 12:00pm – 6:00pm",
          ],
        },
        {
          name: "Caracas Empanadas Y Más",
          logo: "/images/merchants/cards/caracas.webp",
          href: "/merchants/caracas-empanadas-y-mas",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 10:00am – 8:00pm",
            "Sunday: 10:00am – 7:00pm",
          ],
        },
        {
          name: "Cinn City Smash",
          logo: "/images/merchants/cards/cinn-city.webp",
          href: "/merchants/cinn-city-smash",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 12:00pm – 8:00pm",
            "Sunday: 11:00am – 7:00pm",
          ],
        },
        {
          name: "Melly Mell's",
          logo: "/images/merchants/cards/melly-mells.jpg",
          href: "/merchants/melly-mells",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 12:30pm – 8:00pm",
            "Sunday: 11:30am – 6:00pm",
          ],
        },
      ],
    },
    {
      title: "Retail Merchants",
      merchants: [
        {
          name: "Unique Hair Accessories and More",
          logo: "/images/merchants/cards/unique-hair.webp",
          href: "/merchants/unique-hair-accessories-more",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 10:00am – 8:00pm",
            "Sunday: 10:00am – 6:00pm",
          ],
        },
        {
          name: "Ancestral Tribe",
          logo: "/images/merchants/cards/ancestral-tribe.png",
          href: "/merchants/ancestral-tribe-custom-apparel",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 10:00am – 8:00pm",
            "Sunday: 10:00am – 6:00pm",
          ],
        },
        {
          name: "Isthmus Yarns",
          logo: "/images/merchants/cards/isthmus-yarns.webp",
          href: "/merchants/isthmus-yarns",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 10:00am – 8:00pm",
            "Sunday: 10:00am – 6:00pm",
          ],
        },
        {
          name: "QB's Magnetic Creations",
          logo: "/images/merchants/cards/qbs.webp",
          href: "/merchants/qbs-magnetic-creations",
          hours: [
            "Wednesday – Friday: 5:00pm – 8:00pm",
            "Saturday: 10:00am – 8:00pm",
            "Sunday: 10:00am – 5:00pm",
          ],
        },
        {
          name: "The Greenery",
          logo: "/images/merchants/cards/greenery.webp",
          href: "/merchants/the-greenery",
          hours: [
            "Wednesday – Friday: 5:00pm – 8:00pm",
            "Saturday: 10:00am – 8:00pm",
            "Sunday: 10:00am – 5:00pm",
          ],
        },
        {
          name: "Caed Confections",
          logo: "/images/merchants/cards/caed.webp",
          href: "/merchants/caed-confections",
          hours: [
            "Wednesday – Friday: 5:00pm – 8:00pm",
            "Saturday: 9:00am – 8:00pm",
            "Sunday: 11:00am – 5:00pm",
          ],
        },
        {
          name: "Fortune Favors",
          logo: "/images/merchants/cards/fortune-favors.png",
          href: "/merchants/fortune-favors",
          hours: [
            "Wednesday – Friday: 11:00am – 8:00pm",
            "Saturday: 10:00am – 6:00pm",
            "Sunday: 10:00am – 4:00pm",
          ],
        },
        {
          name: "ArtWorking",
          logo: "/images/merchants/cards/artworking.webp",
          href: "/merchants/artworking",
          hours: [
            "Wednesday – Friday: 5:00pm – 9:00pm",
            "Saturday: 10:00am – 8:00pm",
            "Sunday: 10:00am – 7:00pm",
          ],
        },
      ],
    },
  ],
  growth: {
    title: "The market continues to grow!",
    body: "The Madison Public Market is actively working with new businesses on lease signing and construction! Check out our coming soon page to learn about new permanent merchants.",
    cta: { label: "Upcoming merchants", href: "/coming-soon" },
  },
} as const;
