export default function CollectionsGridSkeleton() {
  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex animate-pulse flex-col overflow-hidden rounded-sm border-2 border-transparent bg-white shadow-sm shadow-dark/5"
            >
              <div className="relative aspect-[4/5] bg-dark/5" />
              <div className="flex flex-1 flex-col space-y-4 p-6">
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
  );
}
