export default function HomeLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="relative flex min-h-screen flex-col justify-end bg-green/90 animate-pulse">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32 space-y-6">
          <div className="space-y-3">
            <div className="h-10 w-3/4 rounded bg-white/20 sm:h-14" />
            <div className="h-10 w-1/2 rounded bg-white/20 sm:h-14" />
          </div>
          <div className="space-y-2 max-w-xl">
            <div className="h-5 w-full rounded bg-white/15" />
            <div className="h-5 w-4/5 rounded bg-white/15" />
          </div>
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 rounded bg-gold/30" />
            <div className="h-12 w-36 rounded bg-white/20" />
          </div>
        </div>
      </section>

      {/* Featured Collections skeleton */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <div className="mx-auto h-8 w-64 rounded bg-dark/10" />
            <div className="mx-auto h-4 w-80 rounded bg-dark/5" />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-sm border-2 border-transparent bg-white shadow-sm shadow-dark/5"
              >
                <div className="relative aspect-[4/5] bg-dark/5" />
                <div className="flex flex-1 flex-col p-6 space-y-4">
                  <div className="h-6 w-1/3 rounded bg-dark/10" />
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-dark/5" />
                    <div className="h-4 w-5/6 rounded bg-dark/5" />
                  </div>
                  <div className="pt-2">
                    <div className="h-4 w-1/4 rounded bg-dark/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner skeleton */}
      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8 animate-pulse">
        <div className="mx-auto h-6 w-72 rounded bg-white/20" />
      </section>

      {/* Why Azbir skeleton */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <div className="mx-auto h-8 w-56 rounded bg-dark/10" />
            <div className="mx-auto h-4 w-72 rounded bg-dark/5" />
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-green/10" />
                <div className="mx-auto h-5 w-2/3 rounded bg-dark/10" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-dark/5" />
                  <div className="h-4 w-5/6 rounded bg-dark/5 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
