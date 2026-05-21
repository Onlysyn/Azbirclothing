type BranchCardProps = {
  name: string;
  label?: string;
  address: string;
  hours?: string;
};

export default function BranchCard({
  name,
  label,
  address,
  hours = "Mon – Sat: 9:00 AM – 6:00 PM",
}: BranchCardProps) {
  return (
    <article className="flex h-full flex-col rounded-sm border-2 border-gold/25 bg-white p-6 shadow-sm shadow-dark/5 transition-colors hover:border-gold/50">
      {label && (
        <span className="mb-3 inline-block w-fit rounded-sm bg-green px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          {label}
        </span>
      )}
      <h3 className="font-display text-xl font-semibold text-dark">{name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-dark/70">
        {address}
      </p>
      <p className="mt-4 border-t border-cream pt-4 text-sm text-green">
        {hours}
      </p>
    </article>
  );
}
