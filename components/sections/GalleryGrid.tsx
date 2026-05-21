import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGridProps = {
  images: GalleryImage[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6">
      {images.map((image, index) => (
        <li
          key={image.src}
          className={`relative overflow-hidden rounded-sm bg-cream ${
            index === 0 ? "col-span-2 row-span-2 aspect-[4/5] md:aspect-auto md:min-h-[420px]" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-105"
            sizes={
              index === 0
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 50vw, 33vw"
            }
          />
        </li>
      ))}
    </ul>
  );
}
