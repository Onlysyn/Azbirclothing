export type CollectionSlug = "kaftan" | "agbada" | "jallabiya";

export type Collection = {
  slug: CollectionSlug;
  title: string;
  description: string;
  longDescription: string;
  fabrics: string[];
  occasions: string[];
  cardImage: string;
  images: { src: string; alt: string }[];
};

function collectionImages(
  slug: CollectionSlug,
  filenames: string[],
  title: string,
) {
  return filenames.map((file, i) => ({
    src: `/images/${file}`,
    alt: `Azbir Clothing ${title} — look ${i + 1}`,
  }));
}

export const COLLECTIONS: Record<CollectionSlug, Collection> = {
  kaftan: {
    slug: "kaftan",
    title: "Kaftan",
    description:
      "Elegant, made-to-measure kaftans tailored for ceremony, prayer, and everyday distinction.",
    longDescription:
      "Our kaftans are cut to your measurements using premium fabrics, with finishing details chosen for comfort, drape, and occasion. From understated daily wear to ceremonial pieces, each kaftan is tailored entirely at Azbir.",
    fabrics: [
      "Premium cotton & linen blends",
      "Brocade and embroidered cotton",
      "Seasonal lightweight & ceremonial weaves",
    ],
    occasions: [
      "Daily wear & Jumu'ah",
      "Weddings & naming ceremonies",
      "Eid and formal gatherings",
    ],
    cardImage: "/images/kaftan1.jpg",
    images: collectionImages(
      "kaftan",
      [
        "kaftan1.jpg",
        "kaftan2.jpg",
        "kaftan3.jpg",
        "kaftan4.jpg",
        "kaftan5.jpg",
        "kaftan6.jpg",
        "kaftan7.jpg",
        "kaftan8.jpg",
      ],
      "Kaftan",
    ),
  },
  agbada: {
    slug: "agbada",
    title: "Agbada",
    description:
      "Grand, flowing agbadas crafted with premium fabrics for celebrations and formal occasions.",
    longDescription:
      "The agbada remains the definitive statement of Northern Nigerian formal dress. Azbir agbadas feature generous cuts, refined embroidery options, and fabrics selected for presence and movement.",
    fabrics: [
      "Damask, silk, and premium cotton",
      "Hand-finished embroidery options",
      "Rich solids and traditional patterns",
    ],
    occasions: [
      "Weddings (especially grooms)",
      "Weddings & royal celebrations",
      "Naming ceremonies & investitures",
      "High-profile formal events",
    ],
    cardImage: "/images/agbada1.jpg",
    images: collectionImages(
      "agbada",
      [
        "agbada1.jpg",
        "agbada2.jpg",
        "agbada4.jpg",
        "agbada5.jpg",
        "agbada6.jpg",
        "agbada7.jpg",
      ],
      "Agbada",
    ),
  },
  jallabiya: {
    slug: "jallabiya",
    title: "Emirati Jallabiya",
    description:
      "The first authentic Emirati Jallabiya in Northern Nigeria — a signature Azbir offering.",
    longDescription:
      "Azbir introduced the authentic Emirati Jallabiya to Northern Nigeria — a refined silhouette rooted in Gulf tradition, tailored locally with Azbir precision. Ideal for clients seeking distinction beyond the conventional.",
    fabrics: [
      "Lightweight premium cotton",
      "Gulf-inspired weave blends",
      "Refined neutrals & traditional whites",
    ],
    occasions: [
      "Jumu'ah",
      "Ramadan & Eid gatherings",
      "Formal dinners & diplomatic events",
      "Clients seeking Gulf-authentic dress",
    ],
    cardImage: "/images/jallabiya1.jpg",
    images: collectionImages(
      "jallabiya",
      [
        "jallabiya1.jpg",
        "jallabiya2.jpg",
        "jallabiya3.jpg",
        "jallabiya4.jpg",
        "jallabiya5.jpg",
        "jallabiya7.jpg",
      ],
      "Emirati Jallabiya",
    ),
  },
};

export const COLLECTION_LIST = Object.values(COLLECTIONS);

export function getCollection(slug: string): Collection | undefined {
  return COLLECTIONS[slug as CollectionSlug];
}

export function isCollectionSlug(slug: string): slug is CollectionSlug {
  return slug in COLLECTIONS;
}
