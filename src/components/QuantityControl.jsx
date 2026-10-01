export default function QuantityControl({ value, onChange }) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded border border-gray-200">
      <button onClick={() => onChange(value - 1)} className="grid h-9 w-9 place-items-center bg-green-500 text-white">−</button>
      <span className="grid h-9 min-w-9 place-items-center text-sm">{value}</span>
      <button onClick={() => onChange(value + 1)} className="grid h-9 w-9 place-items-center bg-green-500 text-white">+</button>
    </div>
  );
}