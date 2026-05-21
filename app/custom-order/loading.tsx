export default function CustomOrderLoading() {
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
          <div className="rounded-sm border border-gold/30 bg-white p-6 shadow-sm shadow-dark/5 sm:p-10 animate-pulse space-y-6">
            <div className="h-4 w-2/3 rounded bg-dark/10" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="h-4 w-1/4 rounded bg-dark/10" />
                <div className="h-10 w-full rounded bg-dark/5" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-1/4 rounded bg-dark/10" />
                <div className="h-10 w-full rounded bg-dark/5" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-1/4 rounded bg-dark/10" />
              <div className="h-10 w-full rounded bg-dark/5" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="h-4 w-1/4 rounded bg-dark/10" />
                <div className="h-10 w-full rounded bg-dark/5" />
              </div>
              <div className="space-y-2">
                <div className="h-4 w-1/4 rounded bg-dark/10" />
                <div className="h-10 w-full rounded bg-dark/5" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-1/4 rounded bg-dark/10" />
              <div className="h-10 w-full rounded bg-dark/5" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-1/4 rounded bg-dark/10" />
              <div className="h-32 w-full rounded bg-dark/5" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-1/3 rounded bg-dark/10" />
              <div className="flex gap-4">
                <div className="h-10 w-24 rounded bg-dark/5" />
                <div className="h-10 w-24 rounded bg-dark/5" />
                <div className="h-10 w-24 rounded bg-dark/5" />
              </div>
            </div>
            <div className="h-12 w-32 rounded bg-gold/30" />
          </div>
        </div>
      </section>
    </>
  );
}
