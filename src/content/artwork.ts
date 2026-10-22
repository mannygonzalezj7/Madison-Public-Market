/**
 * Artwork — https://madisonpublicmarket.org/artwork-madison-public-market/
 * Gallery works — https://madisonpublicmarket.org/first-street-art-gallery/
 */

export const artworkPageMeta = {
  title: "Artwork | Madison Public Market",
  description:
    "Featured artwork at Madison Public Market — murals, sculpture, and the First Street Gallery celebrating culture and the arts.",
} as const;

export const artworkHero = {
  title: "Featured Artwork",
  subtitle:
    "Art is a crucial part of the Madison Public Market’s placemaking activity.",
} as const;

export const artworkIntro = {
  title: "Celebrating Culture & The Arts",
  paragraphs: [
    "The Madison Public Market Foundation recognizes that arts are a key component of the Market’s offerings and are critical to its success. The Foundation further recognizes that arts, culture, and design strengthen the pillars of our community and stimulate greater social and creative advancement.",
    "Therefore, the Market’s welcoming and inclusive space is filled with dynamic art and other visual offerings that celebrate the people, cultures, and ecology of the region’s past, present, and future while enhancing the community’s social cohesion.",
  ],
} as const;

export const artworks = [
  {
    title: "Elizah Leonard",
    artist: "By Tom Jones",
    body: "A portrait of Elizah Leonard displayed as an exterior mural along First Street. Jones is a UW-Madison Professor of Photography whose work examines American Indian identity and experience. This piece won second prize in the National Portrait Gallery's 2022 Outwin Portrait Competition.",
    image: "/images/artwork/elizah-leonard.jpg",
  },
  {
    title: "And Still, She Blossoms",
    artist: "By Madison La Follette and Middleton High School",
    body: "And Still, She Blossoms is a vibrant and engaging mural created by Madison La Follette High School and Middleton High School students under the guidance of La Follette teacher Monique Karlen. It is based on an original sketch by Shantiana McNeal, then a freshman at La Follette.",
    image: "/images/artwork/still-blossoms.webp",
  },
  {
    title: "A Good Day",
    artist: "By Jim Terry",
    body: "A Visual Land Acknowledgment honoring that the Madison Public Market is in Teejop (pronounced day-JOPE), the ancestral and current homeland of the Ho-Chunk Nation. The artist references the four earthly elements (wind, fire, air, and earth) and their connection to the four cardinal directions.",
    image: "/images/artwork/a-good-day.jpg",
  },
  {
    title: "Axolotl & Alma",
    artist: "By Issis Macias and Rodrigo Carapia",
    body: "Macias, the 2025 Latina Artist of the Year, started the works with bold abstract compositions and contrasting colors. Carapia, a self-taught artist from Mexico City, superimposed vivid imagery celebrating Mexican culture. The murals are located on two exterior walls that face the parking lot behind the building.",
    image: "/images/artwork/axolotl-alma.jpg",
  },
  {
    title: "Greetings",
    artist: "By Actual Size Artworks",
    body: "Greetings is a sculpture located in the north entry alcove. The work acts as a greeter for the Madison Public Market, creating a sense of curiosity and playfulness. The presence of this piece differentiates the Public Market from the outside world. Actual Size Artworks is the collaborative practice of Gail Simpson and Aristotle Georgiades.",
    image: "/images/artwork/greetings.jpg",
  },
  {
    title: "Wahuura Sgaac Naaksana",
    artist: "By Nipinet Landsem and Caitlin Newago",
    body: "The Madison Public Market’s latest mural, Wahuura Šgaac Nąąkšąną, faces East Johnson Street. The Hoke Family Foundation generously sponsored this work through the Friends of the Madison Arts Commission.",
    image: "/images/artwork/wahuura.webp",
  },
  {
    title: "Rainwater Cisterns",
    artist: "By Hello Madison (Mira Kim)",
    body: "Dairyland Dream, Depths of Mendota, Pink on the Hill and Stillness in the Snow: These 4 pieces adorn the rainwater cisterns with some of our region’s favorite animals. The cisterns collect rainwater from the roof, which is used to flush the building’s toilets.",
    image: "/images/artwork/rainwater-cisterns.jpg",
  },
  {
    title: "Lub Neej Zoo Siab Tshiab nyob WI",
    artist: "By See Vang",
    body: "Hmong story cloths are an art form that use traditional embroidery to visually preserve and share stories. Artist See Vang created this embroidery to tell the story of her new life in Wisconsin, featuring animals and plants from her life growing up in Laos and her time in Wisconsin.",
    image: "/images/artwork/lub-neej.webp",
  },
  {
    title: "Origin Story",
    artist: "By Tyanna Buie",
    body: "Origin Story is a reimagination of Tyanna Buie's earlier work about her mother, Bust of an unknown Woman. This mural is an invitation to consider the ways we are shaped by the women who came before us and by the natural worlds that sustains us.",
    image: "/images/artwork/origin-story.webp",
  },
  {
    title: "Unity",
    artist: "By Rodrigo Carapia",
    body: "Rodrigo Carapia painted this mural for the 2020 Downtown Street Art & Mural Project led by the City of Madison. The mural features the split face of a big cat, with a panther on the left and a jaguar on the right, representing unity between Black and Brown people.",
    image: "/images/artwork/unity.jpg",
  },
] as const;

export const firstStreetGallery = {
  title: "First Street Gallery",
  subtitle: "Year-round rotating art",
  currentShow: "Currently on Display: ArtWorking",
  paragraphs: [
    "The First Street Gallery features a rotating display of the region’s finest artists, highlighting Madison area values regarding environmentalism, cultural awareness, history, food, and engagement.",
    "The gallery contains approximately 41 linear feet of wall space designed to showcase regional artists from diverse cultural and economic backgrounds and working in mediums of all kinds.",
    "Area artists are welcome to submit artwork for consideration during open calls that occur on a regular basis. Interested artists must complete an Artists Application Form (currently in development). Watch this space for Calls for Art.",
  ],
  themesTitle:
    "Exhibitions typically occur around a theme that matches the Madison Public Market’s founding principles of:",
  themes: [
    "Equity Through Entrepreneurship",
    "Cultural Diversity",
    "Sustainability",
    "Ecology",
    "History",
    "Place and Inclusivity",
  ],
  works: [
    {
      title: "Coral Sea - 2024",
      artist: "Nikki Ordaz",
      meta: "Acrylic 20×16 · $40",
      image: "/images/artwork/gallery/nikki-ordaz-coral-sea-web.jpg",
    },
    {
      title: "Blue and Violet - 2024",
      artist: "Nikki Ordaz",
      meta: "Acrylic 20×16 · $40",
      image: "/images/artwork/gallery/nikki-ordaz-blue-web.jpg",
    },
    {
      title: "Untitled - 2026",
      artist: "Marri Krause",
      meta: "Acrylic 20×16 · $260",
      image: "/images/artwork/gallery/marri-krause-unttitled-b-web.jpg",
    },
    {
      title: "Untitled (Blue Green Gray) - 2026",
      artist: "Marri Krause",
      meta: "20×16 · $100",
      image: "/images/artwork/gallery/marri-krause-blue-green-web.jpg",
    },
    {
      title: "Rainbow Cat - 2026",
      artist: "Jennifer Sebranek",
      meta: "14×14 · $65",
      image: "/images/artwork/gallery/jennifer-sebranek-rainbow-cat-web.jpg",
    },
    {
      title: "Untitled (Lavender Kitty)",
      artist: "Jennifer Sebranek",
      meta: "14×14 · $65",
      image: "/images/artwork/gallery/jennifer-sebranek-lavendar-web.jpg",
    },
    {
      title: "Oh My - 2020",
      artist: "Joe Wahlers",
      meta: "16×20 · $50",
      image: "/images/artwork/gallery/joe-wahlers-oh-my-web.jpg",
    },
    {
      title: "Organization is Key - 2020",
      artist: "Joe Wahlers",
      meta: "16×20 · $50",
      image: "/images/artwork/gallery/joe-wahlers-organization-web.jpg",
    },
    {
      title: "Garden of Joy - 2025",
      artist: "Briana Richardson",
      meta: "30×40 · $650",
      image: "/images/artwork/gallery/briana-richardson-web.jpg",
    },
    {
      title: "The Moonwalk Michael Jackson Family - 2022",
      artist: "Romano Johnson",
      meta: "60×40 · $2,160",
      image: "/images/artwork/gallery/romano-johnson-moonwalk-family-web.jpg",
    },
    {
      title: "Bearded Michael Jackson - 2022",
      artist: "Romano Johnson",
      meta: "22×28 · $495",
      image: "/images/artwork/gallery/romano-johnson-bearded-michael-jackson-web.jpg",
    },
    {
      title: "Anywhere Is Good But Now Is Great - 2019",
      artist: "Chloe Hougan",
      meta: "48×72 · $1,400",
      image: "/images/artwork/gallery/chloe-hougan-anywhere-web.jpg",
    },
    {
      title: "Service Above Beauty - 2019",
      artist: "Chloe Hougan",
      meta: "24×30 · $375",
      image: "/images/artwork/gallery/chloe-hougan-service-web.jpg",
    },
    {
      title: "Untitled (Purple & Blue) - 2019",
      artist: "Ben Fleischman",
      meta: "14×14 · $65",
      image: "/images/artwork/gallery/ben-fleischman-purple-web.jpg",
    },
    {
      title: "Ben's Saxophone - 2019",
      artist: "Ben Fleischman",
      meta: "14×14 · $65",
      image: "/images/artwork/gallery/ben-fleischman-saxaphone-web.jpg",
    },
    {
      title: "Green Lake with a View of a House - 2025",
      artist: "Gary Lynch",
      meta: "12×12 · $45",
      image: "/images/artwork/gallery/gary-lynch-green-lake-web.jpg",
    },
    {
      title: "Field in New Mexico - 2025",
      artist: "Gary Lynch",
      meta: "12×12 · Price TBD",
      image: "/images/artwork/gallery/gary-lynch-field-web.jpg",
    },
  ],
} as const;
