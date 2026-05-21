import Image from "next/image";
import Link from "next/link";

type CollectionCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export default function CollectionCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
}: CollectionCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border-2 border-transparent bg-white shadow-sm shadow-dark/5 transition-[border-color,box-shadow] duration-300 hover:border-gold hover:shadow-md hover:shadow-gold/10">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-dark">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-dark/70">
          {description}
        </p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green transition-colors group-hover:text-gold"
        >
          View Collection
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
