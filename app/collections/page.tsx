import CollectionCard from "@/components/ui/CollectionCard";
import { COLLECTION_LIST } from "@/lib/collections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse Azbir Clothing collections — Kaftans, Agbadas, and Emirati Jallabiya.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
          Collections
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/85">
          Made-to-measure traditional menswear — explore each collection below.
        </p>
      </section>

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTION_LIST.map((collection) => (
              <CollectionCard
                key={collection.slug}
                title={collection.title}
                description={collection.description}
                href={`/collections/${collection.slug}`}
                imageSrc={collection.cardImage}
                imageAlt={`Azbir Clothing ${collection.title} collection`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
