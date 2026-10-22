/**
 * Movie Night — https://madisonpublicmarket.org/movienight/
 */

export const movieNightPageMeta = {
  title: "Dinner and a Movie | Madison Public Market",
  description:
    "Free community movie nights at Madison Public Market — arrive early to shop and eat.",
} as const;

export const movieNight = {
  title: "Dinner and a Movie",
  subtitle: "Free Movies at the Market",
  headline: "Free Movies at the Market",
  image: {
    src: "/images/events/dinner-movie.png",
    alt: "Dinner and a Movie at Madison Public Market",
  },
  paragraphs: [
    "We’re turning the Madison Public Market into your new favorite movie destination! Settle in for a fun, free movie night at the Market. Grab your friends and family, come hungry, and make an evening of it!",
    "The movie is FREE to attend, and we’d love for you to arrive early to shop, grab dinner, pick up a treat, and explore everything our merchants have to offer before the show begins.",
  ],
  upcomingTitle: "Upcoming Movies and Dates",
  showtimes: [
    {
      movie: "Toy Story 5",
      date: "Friday 10/16",
      time: "Movie starts at 6:15pm",
      image: "/images/events/dinner-movie.png",
    },
    {
      movie: "Hocus Pocus",
      date: "Saturday 10/31",
      time: "Movie starts at 1:00pm",
      image: "/images/events/hocus-pocus.jpg",
    },
    {
      movie: "Hotel Transylvania",
      date: "Friday 11/13",
      time: "Movie starts at 6:15pm",
      image: "/images/events/hotel-transylvania.avif",
    },
    {
      movie: "Hoppers",
      date: "Friday 11/27",
      time: "Movie starts at 6:15pm",
      image: "/images/events/hoppers.jpg",
    },
    {
      movie: "The Grinch",
      date: "Friday 12/18",
      time: "Movie starts at 6:15pm",
      image: "/images/events/grinch.jpg",
    },
  ],
} as const;
