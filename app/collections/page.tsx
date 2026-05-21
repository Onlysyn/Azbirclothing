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
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-semibold text-dark sm:text-5xl">
            Collections
          </h1>
          <p className="mt-4 text-dark/70">
            Made-to-measure traditional menswear — explore each collection below.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
