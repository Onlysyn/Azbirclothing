export default function CollectionsLoading() {
  return (
    <>
      {/* Hero section skeleton */}
      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl animate-pulse">
          <div className="mx-auto h-10 w-48 rounded bg-white/20 sm:h-12" />
          <div className="mx-auto mt-4 h-4 w-80 rounded bg-white/15" />
        </div>
      </section>

      {/* Grid section skeleton */}
      <section className="bg-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-sm border-2 border-transparent bg-white shadow-sm shadow-dark/5 animate-pulse"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/5] bg-dark/5" />
                
                {/* Content placeholder */}
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
    </>
  );
}
