export default function OurStoryLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="relative flex min-h-[45vh] items-end bg-green/90 sm:min-h-[50vh] animate-pulse">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:px-8 space-y-4">
          <div className="h-10 w-48 rounded bg-white/25 sm:h-14" />
          <div className="space-y-2 max-w-2xl">
            <div className="h-5 w-full rounded bg-white/15" />
            <div className="h-5 w-3/4 rounded bg-white/15" />
          </div>
        </div>
      </section>

      {/* Origin section skeleton */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 animate-pulse">
            <div className="space-y-6">
              <div className="h-3 w-24 rounded bg-gold/30" />
              <div className="h-8 w-3/4 rounded bg-dark/10" />
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-dark/5" />
                <div className="h-4 w-full rounded bg-dark/5" />
                <div className="h-4 w-5/6 rounded bg-dark/5" />
                <div className="h-4 w-full rounded bg-dark/5" />
                <div className="h-4 w-4/5 rounded bg-dark/5" />
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border-2 border-gold/30 bg-dark/5" />
          </div>
        </div>
      </section>

      {/* Jallabiya section skeleton */}
      <section className="bg-green py-16 sm:py-20 lg:py-24 animate-pulse">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border-2 border-gold/40 bg-white/10 lg:order-1" />
            <div className="lg:order-2 space-y-6">
              <div className="h-3 w-28 rounded bg-gold/30" />
              <div className="h-8 w-2/3 rounded bg-white/25" />
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-white/15" />
                <div className="h-4 w-full rounded bg-white/15" />
                <div className="h-4 w-5/6 rounded bg-white/15" />
              </div>
              <div className="h-4 w-48 rounded bg-gold/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship section skeleton */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24 animate-pulse">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <div className="mx-auto h-3 w-20 rounded bg-gold/30" />
            <div className="mx-auto h-8 w-72 rounded bg-dark/10" />
            <div className="mx-auto h-4 w-80 rounded bg-dark/5" />
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-sm border border-gold/20 bg-white p-6 space-y-4"
              >
                <div className="h-8 w-10 rounded bg-gold/20" />
                <div className="h-5 w-2/3 rounded bg-dark/10" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-dark/5" />
                  <div className="h-4 w-5/6 rounded bg-dark/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches section skeleton */}
      <section className="py-16 sm:py-20 lg:py-24 animate-pulse">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <div className="mx-auto h-3 w-16 rounded bg-gold/30" />
            <div className="mx-auto h-8 w-40 rounded bg-dark/10" />
            <div className="mx-auto h-4 w-72 rounded bg-dark/5" />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-sm border border-gold/20 bg-cream p-6 space-y-3"
              >
                <div className="h-5 w-1/3 rounded bg-dark/10" />
                <div className="h-3 w-1/4 rounded bg-gold/20" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-dark/5" />
                  <div className="h-4 w-3/4 rounded bg-dark/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
