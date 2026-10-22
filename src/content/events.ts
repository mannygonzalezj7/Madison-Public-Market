/**
 * Events — https://madisonpublicmarket.org/events/
 * Related: /movienight/, /madison-public-farmers-market/
 */

export const eventsPageMeta = {
  title: "Events | Madison Public Market",
  description:
    "Find new things to do at the Madison Public Market — Wednesday Farmers’ Market, movie nights, community programming, and event space rental.",
} as const;

export const eventsHero = {
  title: "Events",
  subtitle: "Find New Things To Do At The Market",
  image: {
    src: "/images/events/hero.webp",
    alt: "Community gathering inside Madison Public Market",
  },
} as const;

export type UpcomingEvent = {
  id: string;
  name: string;
  description: string;
  /** Display date MM/DD/YYYY */
  dateLabel: string;
  /** Optional time shown with the date (e.g. "4:00pm–7:00pm") */
  timeLabel?: string;
  /** Sort key YYYY-MM-DD */
  dateISO: string;
  href: string;
  image: string;
  imageAlt: string;
};

/** Date pill copy: "10/31/2026" or "10/31/2026 · 1:00pm" when time is set */
export function formatEventDateTime(event: UpcomingEvent) {
  return event.timeLabel
    ? `${event.dateLabel} · ${event.timeLabel}`
    : event.dateLabel;
}

/** Ascending by date (closest first). Same-day items keep list order. */
export function sortEventsByDate(items: readonly UpcomingEvent[]) {
  return [...items].sort((a, b) => {
    const byDate = a.dateISO.localeCompare(b.dateISO);
    if (byDate !== 0) return byDate;
    return a.name.localeCompare(b.name);
  });
}

export const upcomingEvents = {
  items: [
    {
      id: "wednesday-2026-10-21",
      name: "Every Wednesday at the Market",
      description:
        "Every Wednesday at the Market, the TruStage MarketReady Hall will house farmers, treats, art and retail vendors from 4pm-7pm.",
      dateLabel: "10/21/2026",
      timeLabel: "4:00pm–7:00pm",
      dateISO: "2026-10-21",
      href: "/farmers-market",
      image: "/images/events/farmers-market.jpg",
      imageAlt: "Vendors and shoppers in TruStage MarketReady Hall",
    },
    {
      id: "sci-fest-2026-10-21",
      name: "Drop Some Knowledge!",
      description:
        "Join the Madison Metropolitan Sewerage District and Smarter Than You Trivia for an evening of trivia and prizes around water! Part of the Wisconsin Science Festival.",
      dateLabel: "10/21/2026",
      dateISO: "2026-10-21",
      href: "/events",
      image: "/images/events/sci-fest.jpg",
      imageAlt: "Wisconsin Science Festival trivia event graphic",
    },
    {
      id: "wednesday-2026-10-28",
      name: "Every Wednesday at the Market",
      description:
        "Every Wednesday at the Market, the TruStage MarketReady Hall will house farmers, treats, art and retail vendors from 4pm-7pm.",
      dateLabel: "10/28/2026",
      timeLabel: "4:00pm–7:00pm",
      dateISO: "2026-10-28",
      href: "/farmers-market",
      image: "/images/events/farmers-market.jpg",
      imageAlt: "Vendors and shoppers in TruStage MarketReady Hall",
    },
    {
      id: "hocus-pocus-2026-10-31",
      name: "Lunch and a Movie: Hocus Pocus",
      description:
        "We’re turning the Madison Public Market into your new favorite movie destination! Join us for Lunch and a Movie at the Market this Halloween, Saturday, October 31 at 1:00pm. Grab your friends and family, come hungry, and make an evening of it!",
      dateLabel: "10/31/2026",
      timeLabel: "1:00pm",
      dateISO: "2026-10-31",
      href: "/movienight",
      image: "/images/events/hocus-pocus.jpg",
      imageAlt: "Hocus Pocus movie night graphic",
    },
    {
      id: "hotel-transylvania-2026-11-13",
      name: "Dinner and a Movie: Hotel Transylvania",
      description:
        "We’re turning the Madison Public Market into your new favorite movie destination! Join us for Dinner and a Movie at the Market on Friday, November 13. Movie begins at 6:15pm!",
      dateLabel: "11/13/2026",
      timeLabel: "6:15pm",
      dateISO: "2026-11-13",
      href: "/movienight",
      image: "/images/events/hotel-transylvania.avif",
      imageAlt: "Hotel Transylvania movie night graphic",
    },
    {
      id: "winter-art-2026-11-14",
      name: "Winter Art Market",
      description:
        "Inaugural indoor showcase celebrating local makers, artists, and craftspeople — Saturday, November 14 from 11:00am–4:00pm.",
      dateLabel: "11/14/2026",
      timeLabel: "11:00am–4:00pm",
      dateISO: "2026-11-14",
      href: "/artwork/winter-art-market",
      image: "/images/artwork/winter-art-market.png",
      imageAlt: "Winter Art Market promotional graphic",
    },
    {
      id: "hoppers-2026-11-27",
      name: "Dinner and a Movie: Hoppers",
      description:
        "We’re turning the Madison Public Market into your new favorite movie destination! Join us for Dinner and a Movie at the Market on Friday, November 27. Movie begins at 6:15pm!",
      dateLabel: "11/27/2026",
      timeLabel: "6:15pm",
      dateISO: "2026-11-27",
      href: "/movienight",
      image: "/images/events/hoppers.jpg",
      imageAlt: "Hoppers movie night graphic",
    },
    {
      id: "grinch-2026-12-18",
      name: "Dinner and a Movie: The Grinch",
      description:
        "We’re turning the Madison Public Market into your new favorite movie destination! Join us for Dinner and a Movie at the Market on Friday, December 18. Movie begins at 6:15pm!",
      dateLabel: "12/18/2026",
      timeLabel: "6:15pm",
      dateISO: "2026-12-18",
      href: "/movienight",
      image: "/images/events/grinch.jpg",
      imageAlt: "The Grinch movie night graphic",
    },
  ] satisfies UpcomingEvent[],
};

export const rentEventSpace = {
  title: "Rent Our Event Space",
  body: "Interested in renting event space at the TruStage MarketReady Hall or the Boardman Clark Mezzanine? Email",
  email: "events@madisonpublicmarket.org",
  image: {
    src: "/images/events/auditorium.webp",
    alt: "Gathering space inside TruStage MarketReady Hall",
  },
  comingSoonTitle: "Coming soon to this webpage:",
  comingSoon: [
    "Event Calendar",
    "Event space pricing structure and policies",
    "Recurring event information",
    "Application for Midweek Markets",
  ],
} as const;
