/**
 * Extended merchant detail content from live merchant pages + Airtable ZebraDog
 * share (bios, suite numbers, socials).
 * https://airtable.com/app8rkw4mK2Q0mv0G/shry64VObJuMqc98O/tbl8L0qkFP4w6cXC3
 */

export type MerchantDetailContent = {
  about?: string | null;
  location?: string | null;
  hours?: string[];
  gallery?: { src: string; alt: string }[];
  social?: {
    instagram?: string;
    facebook?: string;
    google?: string;
  };
};

function gallery(urls: string[], name: string) {
  return urls.map((src, index) => ({
    src,
    alt: `${name} photo ${index + 1}`,
  }));
}

export const merchantDetails: Record<string, MerchantDetailContent> = {
  "the-chowpati": {
    location: "540",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 10:00am - 3:00pm and 5:00pm - 8:00pm",
      "Sunday: 11:00am - 7:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/thechowpatimadison/",
      facebook: "https://www.facebook.com/profile.php?id=61573339347451",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/chowpati.png",
        "/images/merchants/cards/chowpati-white.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/Chowpati.webp",
      ],
      "The Chowpati",
    ),
  },
  "cervato-wine-bar": {
    about:
      "Cervato Wine & Tapas Bar is a fresh, flavorful extension of Timber Hill Winery—bringing Wisconsin-crafted wines, creative small plates, and a warm communal atmosphere to the heart of the upcoming Madison Public Market. Named after the Spanish word for fawn, Cervato celebrates curiosity, discovery, and the joy of savoring life one sip and bite at a time. Our wine list blends the best of Timber Hill's fan-favorite bottles with exclusive Cervato-only selections inspired by global flavors and the region's woodland roots. Paired with chef-crafted tapas, charcuterie, and seasonal features, every visit feels like a tasting adventure—whether you're grabbing a glass after work, meeting friends for a cozy date night, or exploring the market's vibrant food scene.",
    location: "470",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 11:00am - 8:00pm",
      "Sunday: 12:00pm - 6:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/CervatoWine",
      facebook: "https://www.facebook.com/profile.php?id=61585899626368",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/cervato.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_5715-1-1024x683.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/Cervato.jpg",
      ],
      "Cervato Wine and Tapas",
    ),
  },
  "caracas-empanadas-y-mas": {
    about:
      "Luis de Dompablo (founder) was born in the city of Punto Fijo, on the northwestern coast of Venezuela. Like all Venezolanos, he grew up eating Venezuela's two main staples–empanadas and arepas–for breakfast, lunch, and dinner. Dompablo eventually moved to the nation's capital, Caracas. When he moved to the United States in 1982, his knowledge and experience working with tropical plants served him well. In Wisconsin, he built up his own indoor plant care service. But that all changed in 2008 when his plant business was hit hard by the recession. In 2010 Dompablo opened his first food cart Caracas Empanadas, featuring some of the very same recipes his mother prepared for him as a young boy.",
    location: "560",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 7:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/caracasempanadas/",
      facebook: "https://www.facebook.com/caracasempanadas/",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/caracas.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/empanada-876x1024.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/pre-taste-of-madison-1024x768.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/concerts-and-cuisine-768x1024.webp",
      ],
      "Caracas Empanadas Y Más",
    ),
  },
  "cinn-city-smash": {
    about:
      "Cinn City Smash is a Madison-based company that serves smash burgers, churros, and fries that hit the sweet spot between indulgent and intentional. The team focuses on bold flavor, fast execution, and food that's made with care— because simple doesn't mean careless. With only a few items on the menu, Cinn City Smash makes each ingredient count. From crispy-edged smash burgers to golden churros and truffle fries, every item is crafted with quality ingredients and attention to detail. As a community-driven company, inclusivity is built into the menu, offering vegan and gluten-free options so more people can enjoy what Cinn City Smash does without compromise.",
    location: "550",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 12:00pm - 8:00pm",
      "Sunday: 11:00am - 7:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/cinncitysmash",
      facebook: "https://www.facebook.com/cinncitysmash",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/cinn-city.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_0010-768x1024.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_2778-819x1024.jpg",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/churro-bundle-683x1024.webp",
      ],
      "Cinn City Smash",
    ),
  },
  "melly-mells": {
    about:
      "Melly Mell's has been a Madison staple since 2010, first as a beloved restaurant and later as a go-to catering business for celebrations and special events across the city. Now coming full circle, Melly Mell's will open a new restaurant at the forthcoming Madison Public Market, serving the soul food and comfort meals that have made it a cherished Madison institution. The business will also continue catering for events of all sizes and occasions. Owner: Carmell Jackson",
    location: "510",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 12:30pm - 8:00pm",
      "Sunday: 11:30am - 6:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/melly_mells_wheres_yo_mama_at/",
      facebook:
        "https://www.facebook.com/p/Melly-Mells-Soul-Food-100061055874328/",
    },
    gallery: gallery(
      ["/images/merchants/cards/melly-mells.jpg"],
      "Melly Mell's",
    ),
  },
  "chocolate-shoppe-ice-cream": {
    about:
      "Family-owned and Madison-made since our first scoop in 1962, Chocolate Shoppe Ice Cream creates award-winning ice cream using local ingredients like Sassy Cow milk from nearby family farms. Rooted in the neighborhoods we serve, we're proud to be a true part of the Madison community — built on joy, connection, and big flavors that bring people together.",
    location: "240",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 11:00am - 9:00pm",
      "Sunday: 11:00am - 9:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/chocolateshoppeicecream/",
      facebook: "https://www.facebook.com/chocolateshoppeicecream",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/chocolate-shoppe.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/Thechocolateshoppe.Courtneyterryphotography-147-737x1024.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/Thechocolateshoppe.Courtneyterryphotography-153-736x1024.jpg",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/Thechocolateshoppe.Courtneyterryphotography-202-683x1024.webp",
      ],
      "Chocolate Shoppe Ice Cream",
    ),
  },
  "unique-hair-accessories-more": {
    about:
      "My name is Lakisha Johnson. I am the owner of Unique Hair Accessories and More, based in Madison WI, I have 26 years of business owner experience, and over 5 years of customer service and hair care products sales experience, and product formulation experience. I specialize in Homemade Natural Hair and Body Care Products for all hair types. We aim to make natural hair and body products, that actually work available at affordable prices.",
    location: "310",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 6:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/lakishajohnson170",
      facebook: "https://www.facebook.com/UHAProducts/",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/unique-hair.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_3085-1024x745.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_6617-1024x768.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_3922-1024x668.webp",
      ],
      "Unique Hair Accessories & More",
    ),
  },
  "ancestral-tribe-custom-apparel": {
    about:
      "Founded in 2022 by Lonnell Richardson. Ancestral Tribe is a Madison Wi. based apparel brand. Built on the beliefs of bridging gaps and building bridges between different communities and cultures through our fashion and all natural hair and body care products . No matter who you are or where you're from you belong.",
    location: "310",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 6:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/richlon06",
      facebook: "https://www.facebook.com/share/1BYNxZoWP7/",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/ancestral-tribe.png",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_5979-874x1024.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_7866-768x1024.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_5039-1024x774.webp",
      ],
      "Ancestral Tribe",
    ),
  },
  "love-u-madison": {
    about:
      "Handmade home goods + candles + DIY experiences - all crafted in Madison to make your space feel warm and inspired.",
    location: "720 & 730",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 7:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/loveumadison.official/",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/love-u.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/lum-1-768x1024.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/lum-2-820x1024.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/Lum-3-565x1024.webp",
      ],
      "Love U Madison",
    ),
  },
  "isthmus-yarns": {
    about:
      "Isthmus Yarns is a modern yarn shop rooted in Scandinavian design and Midwestern warmth. We offer a carefully curated selection of natural fiber yarns, with an emphasis on thoughtful sourcing, sustainability, and quality—from Scandinavian staples to Madison-area hand-dyed skeins. Our assortment is designed to support knitters and crocheters of all sizes, with inspiration for everyday pieces you'll love to wear. Alongside yarn, you'll find a nice selection of knitting needles and crochet hooks, notions, and project bags to support every stage of making. Whether you're casting on your first sweater or your fiftieth, Isthmus Yarns is a space to slow down, find inspiration, and create. Owner: Sarah Dawson",
    location: "210",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 6:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/isthmusyarns",
      facebook: "https://www.facebook.com/share/1HKtG88AFe/",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/isthmus-yarns.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/I-yarns.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/PXL_20260802_170955642-1024x769.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/PXL_20260802_171004192-1024x769.webp",
      ],
      "Isthmus Yarns",
    ),
  },
  "qbs-magnetic-creations": {
    about:
      "Judy McNeal is the proud owner of QB's Magnetic Creations, a minority woman-owned small business specializing in distinguished magnetic jewelry accessories. A Madison-area resident for over 30 years, Judy founded QB's in loving memory of her mother, Qubie, who passed away in July 2003 — the inspiration behind both the company's name and its every creation. Guided by the motto \"Stay grounded and focused by having your core values in place,\" QB's is built on Quality, Trust, and Creativity, delivering bold, classy, and unique pieces that create first impressions that last. Owner: Judy McNeal",
    location: "320",
    hours: [
      "Wednesday - Friday: 5:00pm - 8:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 5:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/qbsmagneticjewelry/",
      facebook: "https://www.facebook.com/QBSMagnetic/",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/qbs.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/QB-zoom-out.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/QBs-Magnetic-Jewelry-Pic5.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/QBs-Magnetic-Jewelry-Pic7.webp",
      ],
      "QB's Magnetic Creations",
    ),
  },
  "the-greenery": {
    about:
      "The Greenery is a woman-owned plant and floral business born from a shared mother-daughter love of collecting, propagating, and sharing plants. We offer thoughtfully curated houseplants and locally sourced flowers, inviting you to build your own bouquets and discover plants from everyday favorites to rare finds. Whether you're a seasoned collector or just getting started, we've created a welcoming space to browse, learn and grow.",
    location: "230",
    hours: [
      "Wednesday - Friday: 5:00pm - 8:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 5:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/TheGreeneryWI",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/greenery.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/TheGreeneryWI.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_1050-768x1024.jpeg",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/IMG_0588-768x1024.jpeg",
      ],
      "The Greenery",
    ),
  },
  "caed-confections": {
    about:
      "Caed Confections is a Wisconsin based artisan chocolatier crafting small-batch bonbons and specialty chocolates with premium ingredients, creative design, and a strong focus on community and local partnerships.",
    location: "220",
    hours: [
      "Wednesday - Friday: 5:00pm - 8:00pm",
      "Saturday: 11:00am - 8:00pm",
      "Sunday: 11:00am - 5:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/caedconfections",
      facebook: "https://www.facebook.com/caedconfections",
    },
    gallery: gallery(
      ["/images/merchants/cards/caed.webp"],
      "Caed Confections",
    ),
  },
  "fortune-favors": {
    about:
      "Fortune Favors began with a happy accident: veteran Madison chef Eric Rupert, after decades at spots like L'Etoile and the Madison Club, mistakenly dropped pecans into the wrong pot and discovered a perfectly toasted, glazed nut that became a proprietary process. He later met Jess Benish while running the culinary program at Epic Systems, and after years of joking about starting a \"pecan business,\" they launched Fortune Favors in 2018 with Eric's son Kellen. CEO Sam McDaniel joined in 2019 to scale the brand, which now sells in 3,000+ retail locations nationwide. Their Public Market location is a homecoming to the community that started it all, and they're excited to collaborate with fellow merchants and help drive traffic and discovery across the Market.",
    location: "580",
    hours: [
      "Wednesday - Friday: 11:00am - 8:00pm",
      "Saturday: 10:00am - 6:00pm",
      "Sunday: 10:00am - 4:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/FortuneFavorsNuts",
      facebook: "https://www.facebook.com/FortuneFavorsNuts",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/fortune-favors.png",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/PXL_20260822_173851186-769x1024.jpg",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/PXL_20260822_173811841-769x1024.jpg",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/PXL_20260822_173822825-769x1024.jpg",
      ],
      "Fortune Favors",
    ),
  },
  artworking: {
    about:
      "ArtWorking is a non-profit arts and entrepreneurship program for artists with intellectual and developmental disabilities. ArtWorking started in 2006 and currently works with around 45 artists, just under half of whom are also small business owners. ArtWorking provides fine art mentorship along with providing support for business management and product development. ArtWorking is based out of a 6,000 ft studio complex on Madison's Southeast side., and is staffed by ten paid local artists along with a rotating cast of volunteers and interns. Our vending machine can be found at the First Street Art Gallery.",
    location: "810-A",
    hours: [
      "Wednesday - Friday: 5:00pm - 9:00pm",
      "Saturday: 10:00am - 8:00pm",
      "Sunday: 10:00am - 7:00pm",
    ],
    social: {
      instagram: "https://www.instagram.com/artworkingmadison",
      facebook: "https://www.facebook.com/artworkingmadison/",
    },
    gallery: gallery(
      [
        "/images/merchants/cards/artworking.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/artworking-zoom-out.webp",
        "https://madisonpublicmarket.org/wp-content/uploads/2026/07/PXL_20260802_164145403-769x1024.webp",
      ],
      "ArtWorking",
    ),
  },
};
