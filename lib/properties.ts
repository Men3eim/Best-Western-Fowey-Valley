export type GalleryImage = {
  src: string;
  alt: string;
};

export type Property = {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  region: string;
  tagline: string;
  intro: string;
  description: string[];
  highlights: string[];
  services: { title: string; description: string }[];
  heroImage: string;
  cardImage: string;
  gallery: GalleryImage[];
  bookingUrl: string | null;
  available: boolean;
};

const torParkBookingUrl =
  "https://www.booking.com/hotel/gb/the-tor-park.en-gb.html?aid=356980&label=gog235jc-10CAsoUEIMdGhlLXRvci1wYXJrSAlYA2hDiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuAKrlPrRBsACAdICJGI1ZGIyMGY1LTdiOGMtNDYwMS04NDk4LWRmZGQ2OTU3MDQwZNgCAeACAQ&sid=56ab1cac3d3c531ecb091ac42e63cf2b&dest_id=-2610007&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1782483504&srpvid=a1616496604a0f7c&type=total&ucfs=1&";

const foweyValleyBookingUrl =
  "https://www.booking.com/hotel/gb/restormellodge.en-gb.html?aid=356980&label=gog235jc-10CAsoUEIOcmVzdG9ybWVsbG9kZ2VICVgDaEOIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4Arah-tEGwAIB0gIkNjhkNTE4MjUtNWM2Yi00OTFlLTk3YzctMzE4NzlhY2VhZTlk2AIB4AIB&sid=56ab1cac3d3c531ecb091ac42e63cf2b&dest_id=-2602051&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1782485180&srpvid=9abb67db5fb10735&type=total&ucfs=1&";

export const properties: Property[] = [
  {
    slug: "tor-park",
    name: "Tor Park Hotel",
    shortName: "Tor Park",
    location: "Torquay, Devon",
    region: "English Riviera",
    tagline: "A warm seaside welcome on the English Riviera",
    intro:
      "Set moments from the seafront in Torquay, Tor Park Hotel pairs relaxed coastal comfort with genuine, attentive service.",
    description: [
      "Tor Park Hotel is a friendly, comfortable retreat in the heart of Torquay, perfectly placed for exploring the beaches, harbour and gardens of the English Riviera. Bright, welcoming spaces and a calm palette make it an easy place to unwind after a day by the coast.",
      "From the moment you arrive at reception, the focus is on warm, personal hospitality. Spacious lounges, a relaxed dining room and comfortable bedrooms give guests room to slow down, settle in and feel at home.",
    ],
    highlights: [
      "Close to Torquay seafront and harbour",
      "Comfortable, light-filled lounges",
      "Relaxed in-house dining room",
      "Friendly, attentive front-desk team",
      "Ideal base for English Riviera days out",
    ],
    services: [
      {
        title: "Comfortable Stays",
        description:
          "Restful bedrooms designed for an easy, comfortable night close to the sea.",
      },
      {
        title: "Dining Room",
        description:
          "A welcoming space to start the day or relax over an evening meal.",
      },
      {
        title: "Guest Lounges",
        description:
          "Spacious lounges to unwind, read and plan your time on the Riviera.",
      },
      {
        title: "Local Knowledge",
        description:
          "A helpful team happy to share the best of Torquay and the Devon coast.",
      },
    ],
    heroImage: "/properties/tor-park/exterior.png",
    cardImage: "/properties/tor-park/exterior.png",
    gallery: [
      { src: "/properties/tor-park/exterior.png", alt: "Tor Park Hotel exterior in Torquay" },
      { src: "/properties/tor-park/reception.png", alt: "Tor Park Hotel reception area" },
      { src: "/properties/tor-park/lounge.png", alt: "Tor Park Hotel guest lounge" },
      { src: "/properties/tor-park/dining.png", alt: "Tor Park Hotel dining and seating area" },
    ],
    bookingUrl: torParkBookingUrl,
    available: true,
  },
  {
    slug: "fowey-valley",
    name: "Best Western Fowey Valley",
    shortName: "Fowey Valley",
    location: "Lostwithiel, Cornwall",
    region: "Cornwall",
    tagline: "A peaceful Cornish retreat with pool, gardens and valley views",
    intro:
      "Set in the heart of Cornwall, Best Western Fowey Valley offers comfortable rooms, an outdoor pool and welcoming gardens in a scenic valley setting.",
    description: [
      "Best Western Fowey Valley is a charming hotel in Lostwithiel, perfectly placed for exploring the Fowey estuary, Cornwall's coastline and the rolling countryside beyond. Traditional stone architecture, well-kept gardens and a relaxed atmosphere make it an inviting base for a Cornish escape.",
      "Guests can unwind in comfortable bedrooms, enjoy the outdoor swimming pool and take in views across the valley from the garden terrace. Whether you are here for coastal walks, historic towns or simply a slower pace of life, the team offers a warm, attentive welcome throughout your stay.",
    ],
    highlights: [
      "Outdoor swimming pool and sun terrace",
      "Peaceful garden with valley views",
      "Comfortable, well-appointed bedrooms",
      "Close to Fowey, Lostwithiel and the Cornish coast",
      "On-site parking and easy access to local walks",
      "Warm hospitality in a traditional Cornish setting",
    ],
    services: [
      {
        title: "Outdoor Pool",
        description:
          "A heated outdoor pool with loungers and terrace space to relax on sunny days.",
      },
      {
        title: "Comfortable Rooms",
        description:
          "Well-appointed bedrooms with modern comforts for a restful night's sleep.",
      },
      {
        title: "Garden Terrace",
        description:
          "A peaceful outdoor space with seating and views across the Cornish valley.",
      },
      {
        title: "Guest Parking",
        description:
          "Convenient on-site parking for a stress-free arrival and departure.",
      },
    ],
    heroImage: "/properties/fowey-valley/exterior.png",
    cardImage: "/properties/fowey-valley/exterior-stone.png",
    gallery: [
      {
        src: "/properties/fowey-valley/exterior.png",
        alt: "Best Western Fowey Valley hotel exterior",
      },
      {
        src: "/properties/fowey-valley/exterior-stone.png",
        alt: "Best Western Fowey Valley stone building entrance",
      },
      {
        src: "/properties/fowey-valley/aerial.png",
        alt: "Aerial view of Best Western Fowey Valley and grounds",
      },
      {
        src: "/properties/fowey-valley/pool.png",
        alt: "Outdoor swimming pool at Best Western Fowey Valley",
      },
      {
        src: "/properties/fowey-valley/pool-deck.png",
        alt: "Pool deck with loungers at Best Western Fowey Valley",
      },
      {
        src: "/properties/fowey-valley/bedroom.png",
        alt: "Guest bedroom at Best Western Fowey Valley",
      },
      {
        src: "/properties/fowey-valley/workspace.png",
        alt: "In-room workspace at Best Western Fowey Valley",
      },
      {
        src: "/properties/fowey-valley/garden.png",
        alt: "Garden terrace with valley views at Best Western Fowey Valley",
      },
    ],
    bookingUrl: foweyValleyBookingUrl,
    available: true,
  },
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}
