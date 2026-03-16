export default function SectionCard({ title, description, children }) {
  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-4 space-y-3 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
      <div>
        <h3 className="text-sm font-bold text-gray-900">{title}</h3>
        {description ? (
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
