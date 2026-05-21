import CustomOrderFormSkeleton from "@/components/ui/skeletons/CustomOrderFormSkeleton";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const InquiryForm = dynamic(
  () => import("@/components/sections/InquiryForm"),
  { loading: () => <CustomOrderFormSkeleton /> },
);

export const metadata: Metadata = {
  title: "Custom Order",
  description:
    "Request a made-to-measure Kaftan, Agbada, or Emirati Jallabiya from Azbir Clothing.",
};

export default function CustomOrderPage() {
  return (
    <>
      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
          Custom Order
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/85">
          Tell us about your garment and we will reach out to schedule your
          fitting at your preferred branch.
        </p>
      </section>

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm border border-gold/30 bg-white p-6 shadow-sm shadow-dark/5 sm:p-10">
            <p className="mb-8 text-sm text-dark/70">
              All fields marked with <span className="text-gold">*</span> are
              required. Your inquiry is sent securely to our team.
            </p>
            <Suspense fallback={<CustomOrderFormSkeleton />}>
              <InquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
