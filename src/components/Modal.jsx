import { X } from "lucide-react";

export default function Modal({ open, onClose, children, width = "max-w-md" }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-black/40 p-4"
      onMouseDown={onClose}
    >
      <div
        className={`relative max-h-[90vh] w-full ${width} overflow-y-auto bg-white p-7 shadow-2xl`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
