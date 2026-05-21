export default function ContactLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8 animate-pulse">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto h-10 w-44 rounded bg-white/20 sm:h-12" />
          <div className="mx-auto mt-4 h-4 w-72 rounded bg-white/15" />
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 animate-pulse">
            {/* Left column — contact info */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="h-7 w-40 rounded bg-dark/10" />
                <div className="h-4 w-64 rounded bg-dark/5" />
              </div>

              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-l-4 border-gold pl-5 space-y-2">
                    <div className="h-3 w-12 rounded bg-green/20" />
                    <div className="h-5 w-48 rounded bg-dark/10" />
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="h-3 w-16 rounded bg-green/20" />
                <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-dark/10" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — map placeholder */}
            <div className="overflow-hidden rounded-sm border-2 border-green/15 shadow-sm shadow-dark/5">
              <div className="h-[min(400px,60vh)] w-full min-h-[320px] sm:h-[450px] bg-dark/5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
