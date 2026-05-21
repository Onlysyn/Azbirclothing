import CollectionsGridSkeleton from "./CollectionsGridSkeleton";

export default function CollectionsPageSkeleton() {
  return (
    <>
      <section className="bg-green px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl animate-pulse">
          <div className="mx-auto h-10 w-48 rounded bg-white/20 sm:h-12" />
          <div className="mx-auto mt-4 h-4 w-80 rounded bg-white/15" />
        </div>
      </section>

      <CollectionsGridSkeleton />
    </>
  );
}
