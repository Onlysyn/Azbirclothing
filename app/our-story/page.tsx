import BranchCard from "@/components/sections/BranchCard";
import { HERO_IMAGE } from "@/lib/images";
import { CONTACT } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The Azbir Clothing story — bespoke traditional menswear founded in 2016 across Kano, Kebbi, and Abuja.",
};

const BRANCHES = [
  {
    name: "Kano",
    label: "Headquarters",
    address: CONTACT.address,
  },
  {
    name: "Kebbi",
    address:
      "Azbir Clothing, Kebbi Branch — serving clients across Kebbi State and surrounding communities.",
  },
  {
    name: "Abuja",
    address:
      "Azbir Clothing, Abuja Branch — made-to-measure service in the capital for discerning clients.",
  },
] as const;

export default function OurStoryPage() {
  return (
    <>
      <section className="relative flex min-h-[45vh] items-end bg-green sm:min-h-[50vh]">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
          aria-hidden={true}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-green via-green/80 to-green/40"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:px-8">
          <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Heritage tailoring for the modern gentleman — rooted in Northern
            Nigeria, refined at Azbir.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Founded 2016
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-dark sm:text-4xl">
                A Legacy of Bespoke Tailoring
              </h2>
              <div className="mt-6 space-y-4 text-dark/75 leading-relaxed">
                <p>
                  Azbir Clothing was founded in 2016 with a clear mission: to
                  deliver authentic, made-to-measure traditional Islamic menswear
                  to gentlemen across Northern Nigeria — garments that honour
                  heritage without compromising on fit, fabric, or finish.
                </p>
                <p>
                  What began in Kano has grown into a trusted name across three
                  branches, serving clients who expect the precision of a master
                  tailor and the presence of true formal dress.
                </p>
                <p>
                  Every piece that leaves our workshop is cut to the individual,
                  never mass-produced. That commitment has defined Azbir from the
                  first fitting to today.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border-2 border-gold/30 shadow-lg shadow-dark/10">
              <Image
                src="/images/kaftan1.jpg"
                alt="Azbir Clothing craftsmanship"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emirati Jallabiya */}
      <section className="bg-green py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border-2 border-gold/40 lg:order-1">
              <Image
                src="/images/jallabiya1.jpg"
                alt="Emirati Jallabiya by Azbir Clothing"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Our Differentiator
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                The Emirati Jallabiya
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-white/85">
                <p>
                  Azbir Clothing introduced the{" "}
                  <strong className="font-medium text-gold">
                    first authentic Emirati Jallabiya
                  </strong>{" "}
                  to Northern Nigeria — a garment rooted in Gulf tradition,
                  tailored locally with the same precision we bring to every
                  kaftan and agbada.
                </p>
                <p>
                  For clients who have worn conventional dress and seek something
                  distinguished, the Jallabiya represents a new standard: Gulf
                  authenticity, Northern Nigerian craftsmanship, and a silhouette
                  that commands quiet authority.
                </p>
                <p>
                  It is not merely another style in our catalogue — it is proof
                  that Azbir leads where others follow.
                </p>
              </div>
              <Link
                href="/collections/jallabiya"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-white"
              >
                Explore the Jallabiya Collection →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              The Process
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-dark sm:text-4xl">
              Craftsmanship & Attention to Detail
            </h2>
            <p className="mt-4 text-dark/75 leading-relaxed">
              At Azbir, tailoring is a discipline — not a transaction. From the
              first consultation to the final fitting, every step is handled with
              care.
            </p>
          </div>
          <ul className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Consultation & Measurement",
                text: "We take precise measurements and discuss fabric, occasion, and personal preference — ensuring the garment is designed around you.",
              },
              {
                step: "02",
                title: "Cutting & Construction",
                text: "Our tailors cut each piece individually, with hand-finished details and quality checks at every stage of construction.",
              },
              {
                step: "03",
                title: "Fitting & Delivery",
                text: "A final fitting ensures perfect drape and comfort. Your garment is pressed, finished, and ready for the occasion it was made for.",
              },
            ].map(({ step, title, text }) => (
              <li
                key={step}
                className="rounded-sm border border-gold/20 bg-white p-6 shadow-sm"
              >
                <span className="font-display text-3xl font-semibold text-gold">
                  {step}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-dark">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/70">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              Visit Us
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-dark sm:text-4xl">
              Our Branches
            </h2>
            <p className="mt-4 text-dark/70">
              Three locations across Northern Nigeria — each offering the full
              Azbir bespoke experience.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {BRANCHES.map((branch) => (
              <BranchCard key={branch.name} {...branch} />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-dark/60">
            <Link
              href="/contact"
              className="font-semibold text-green transition-colors hover:text-gold"
            >
              Contact us
            </Link>{" "}
            to book a fitting at any branch.
          </p>
        </div>
      </section>
    </>
  );
}
