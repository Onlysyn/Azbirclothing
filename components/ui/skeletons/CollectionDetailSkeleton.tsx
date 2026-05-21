export default function CollectionDetailSkeleton() {
  return (
    <>
      <section className="relative flex min-h-[50vh] animate-pulse items-end bg-green/90 sm:min-h-[55vh]">
        <div className="relative z-10 mx-auto w-full max-w-7xl space-y-4 px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8">
          <div className="h-4 w-28 rounded bg-white/20" />
          <div className="h-10 w-48 rounded bg-white/25 sm:h-12" />
          <div className="space-y-2">
            <div className="h-4 w-2/3 rounded bg-white/20" />
            <div className="h-4 w-1/2 rounded bg-white/20" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl animate-pulse space-y-3">
            <div className="h-4 w-full rounded bg-dark/5" />
            <div className="h-4 w-full rounded bg-dark/5" />
            <div className="h-4 w-5/6 rounded bg-dark/5" />
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl animate-pulse gap-6 sm:grid-cols-2">
            <div className="space-y-4 rounded-sm border border-gold/20 bg-cream/35 p-6">
              <div className="h-5 w-1/3 rounded bg-dark/10" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-dark/5" />
                <div className="h-4 w-3/4 rounded bg-dark/5" />
              </div>
            </div>
            <div className="space-y-4 rounded-sm border border-gold/20 bg-cream/35 p-6">
              <div className="h-5 w-1/3 rounded bg-dark/10" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-dark/5" />
                <div className="h-4 w-3/4 rounded bg-dark/5" />
              </div>
            </div>
          </div>

          <div className="mt-14 animate-pulse">
            <div className="mx-auto mb-8 h-8 w-24 rounded bg-dark/10" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-sm bg-dark/5" />
              ))}
            </div>
          </div>

          <div className="mt-14 flex justify-center animate-pulse">
            <div className="h-12 w-44 rounded bg-gold/30" />
          </div>
        </div>
      </section>
    </>
  );
}
