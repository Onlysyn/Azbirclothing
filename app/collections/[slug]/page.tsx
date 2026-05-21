import GalleryGrid from "@/components/sections/GalleryGrid";
import {
  COLLECTION_LIST,
  getCollection,
  isCollectionSlug,
} from "@/lib/collections";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COLLECTION_LIST.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection Not Found" };
  return {
    title: `${collection.title} Collection`,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isCollectionSlug(slug)) notFound();

  const collection = getCollection(slug)!;
  const heroImage = collection.images[0];

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end sm:min-h-[55vh]">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-green via-green/60 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8">
          <Link
            href="/collections"
            className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
          >
            ← All Collections
          </Link>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            {collection.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            {collection.description}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-dark/75 leading-relaxed">
            {collection.longDescription}
          </p>
          <div className="mt-12">
            <GalleryGrid images={collection.images} />
          </div>
          <div className="mt-14 flex justify-center">
            <Link
              href="/custom-order"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold/90"
            >
              Order This Style
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
