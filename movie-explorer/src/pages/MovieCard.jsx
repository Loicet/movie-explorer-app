import React from "react";
import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";

export default function MovieCard({ movie, isFavorite }) {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  
  // Check if this movie is in favorites
  const isInFavorites = isFavorite || favorites.some(fav => fav.id === movie.id);
  
  const handleFavoriteClick = () => {
    if (isInFavorites) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

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
          onClick={handleFavoriteClick}
          className={`px-3 py-1 rounded ${isInFavorites 
            ? "bg-[#ff9999] text-[#193A3C] hover:bg-[#ff7777]" 
            : "bg-[#D5E6AB] text-[#193A3C] hover:bg-[#cddfa3]"}`}
        >
          {isInFavorites ? "❤️ Remove" : "🤍 Favorite"}
        </button>
      </div>
    </div>
  );
}


