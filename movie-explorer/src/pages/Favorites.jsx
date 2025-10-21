import React from "react";
import useFavorites from "../hooks/useFavorites";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-[#193A3C] mb-4">
        My Favorite Movies ❤️
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-[#193A3C]">You have 0 favorite movies</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} addFavorite={() => removeFavorite(movie.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
