import React from "react";

export default function CategoryFilter({ selected, setSelected, categories }) {
  return (
    <div className="flex justify-center flex-wrap gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded-md border ${
            selected === cat
              ? "bg-[#193A3C] text-[#D5E6AB]"
              : "bg-[#D5E6AB] text-[#193A3C]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
