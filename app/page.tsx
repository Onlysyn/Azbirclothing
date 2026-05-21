import CollectionCard from "@/components/ui/CollectionCard";
import HeroSection from "@/components/sections/HeroSection";

const COLLECTIONS = [
  {
    title: "Kaftan",
    description:
      "Elegant, made-to-measure kaftans tailored for ceremony, prayer, and everyday distinction.",
    href: "/collections/kaftan",
    imageSrc: "/images/kaftan.jpg",
    imageAlt: "Azbir Clothing Kaftan collection",
  },
  {
    title: "Agbada",
    description:
      "Grand, flowing agbadas crafted with premium fabrics for celebrations and formal occasions.",
    href: "/collections/agbada",
    imageSrc: "/images/agbada.jpg",
    imageAlt: "Azbir Clothing Agbada collection",
  },
  {
    title: "Emirati Jallabiya",
    description:
      "The first authentic Emirati Jallabiya in Northern Nigeria — a signature Azbir offering.",
    href: "/collections/jallabiya",
    imageSrc: "/images/jallabiya.jpg",
    imageAlt: "Azbir Clothing Emirati Jallabiya collection",
  },
] as const;

const WHY_AZBIR = [
  {
    title: "Made-to-Measure",
    description:
      "Every garment is cut and sewn to your exact measurements — never off-the-rack.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    title: "Premium Fabrics",
    description:
      "Sourced materials chosen for drape, durability, and the refined finish Azbir is known for.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "3 Branches Nationwide",
    description:
      "Visit us in Kano (HQ), Kebbi, or Abuja — bespoke service wherever you are in the north.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Heritage Craftsmanship",
    description:
      "Traditional Islamic menswear expertise refined since 2016 by master tailors at Azbir.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-dark sm:text-4xl">
              Featured Collections
            </h2>
            <p className="mt-4 text-dark/70">
              Explore our signature garments — each made to measure for the modern
              gentleman.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((collection) => (
              <CollectionCard key={collection.href} {...collection} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <p className="mx-auto max-w-3xl font-display text-xl font-medium leading-relaxed text-white sm:text-2xl lg:text-3xl">
          <span className="text-gold">Since 2016</span> — Bespoke Tailoring Across
          Northern Nigeria
        </p>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-dark sm:text-4xl">
              The Azbir Difference
            </h2>
            <p className="mt-4 text-dark/70">
              Why discerning clients choose Azbir for traditional menswear.
            </p>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_AZBIR.map(({ title, description, icon }) => (
              <div key={title} className="text-center">
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-green/10 text-green">
                  {icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-dark">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
