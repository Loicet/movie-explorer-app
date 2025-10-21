import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-80 p-3 rounded-md border border-[#193A3C] focus:outline-none focus:ring-2 focus:ring-[#193A3C]"
      />
    </div>
  );
}
