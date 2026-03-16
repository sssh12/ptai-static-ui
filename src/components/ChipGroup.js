export default function ChipGroup({ items = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <button
          key={`${item}-${index}`}
          type="button"
          className="px-3 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:border-blue-400 hover:text-blue-600"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
