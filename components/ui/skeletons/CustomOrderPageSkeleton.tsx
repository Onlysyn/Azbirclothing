import CustomOrderFormSkeleton from "./CustomOrderFormSkeleton";

export default function CustomOrderPageSkeleton() {
  return (
    <>
      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl animate-pulse">
          <div className="mx-auto h-10 w-48 rounded bg-white/20 sm:h-12" />
          <div className="mx-auto mt-4 h-4 w-72 rounded bg-white/15" />
        </div>
      </section>

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm border border-gold/30 bg-white p-6 shadow-sm shadow-dark/5 sm:p-10">
            <CustomOrderFormSkeleton />
          </div>
        </div>
      </section>
    </>
  );
}
