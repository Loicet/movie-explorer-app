import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, addFavorite }) {
  return (
    <div className="bg-[#193A3C] text-[#D5E6AB] p-4 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition">
      <img
        src={movie.image?.medium || "https://via.placeholder.com/210x295"}
        alt={movie.name}
        className="rounded-md mb-3"
      />
      <h2 className="font-semibold mb-2 text-center">{movie.name}</h2>
      <div className="flex space-x-2">
        <Link
          to={`/movie/${movie.id}`}
          className="px-3 py-1 bg-[#D5E6AB] text-[#193A3C] rounded hover:bg-[#cddfa3]"
        >
          Details
        </Link>
        <button
          onClick={() => addFavorite(movie)}
          className="px-3 py-1 bg-[#D5E6AB] text-[#193A3C] rounded hover:bg-[#cddfa3]"
        >
          ❤️
        </button>
      </div>
    </div>
  );
}
