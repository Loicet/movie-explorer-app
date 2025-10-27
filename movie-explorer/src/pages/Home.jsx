import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import MovieCard from "../components/MovieCard";
import useFetchMovies from "../hooks/useFetchMovies";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");
  const { movies, loading } = useFetchMovies();

  const categories = ["All", "Drama", "Comedy", "Action", "Romance"];

  const filtered = movies.filter(
    (m) =>
      (selected === "All" || m.genres.includes(selected)) &&
      m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter
        selected={selected}
        setSelected={setSelected}
        categories={categories}
      />

      {loading ? (
        <p className="text-center text-[#193A3C]">Loading movies...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-[#193A3C]">No movies found 😢</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
