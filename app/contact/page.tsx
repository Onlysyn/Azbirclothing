import SocialLinks from "@/components/ui/SocialLinks";
import { CONTACT } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Azbir Clothing — Kano HQ, Kebbi, and Abuja branches.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/85">
          Visit our Kano headquarters or reach out — we are here to help with
          fittings, orders, and inquiries.
        </p>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-dark">
                  Get in Touch
                </h2>
                <p className="mt-2 text-dark/70">
                  Our team responds during business hours at all three branches.
                </p>
              </div>

              <ul className="space-y-6">
                <li className="border-l-4 border-gold pl-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-green">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block text-lg text-dark transition-colors hover:text-green"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="border-l-4 border-gold pl-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-green">
                    Phone
                  </p>
                  <a
                    href={CONTACT.phoneHref}
                    className="mt-1 block text-lg text-dark transition-colors hover:text-green"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="border-l-4 border-gold pl-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-green">
                    Address
                  </p>
                  <p className="mt-1 text-lg leading-relaxed text-dark">
                    {CONTACT.address}
                  </p>
                </li>
              </ul>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-green">
                  Follow Us
                </p>
                <div className="mt-4">
                  <SocialLinks variant="contact" />
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-sm border-2 border-green/15 shadow-sm shadow-dark/5">
              <iframe
                title="Azbir Clothing Kano HQ location"
                src={CONTACT.mapEmbedUrl}
                className="h-[min(400px,60vh)] w-full min-h-[320px] sm:h-[450px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
