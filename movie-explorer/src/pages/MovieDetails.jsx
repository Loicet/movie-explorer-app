import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utils/api";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);

  if (!movie) return <p className="text-center p-6">Loading movie...</p>;

  return (
    <div className="p-6 text-[#193A3C]">
      <h1 className="text-2xl font-bold mb-4">{movie.name}</h1>
      <img
        src={movie.image?.medium}
        alt={movie.name}
        className="rounded-lg mb-4"
      />
      <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
      <p className="mt-4 font-semibold">Genres: {movie.genres.join(", ")}</p>
    </div>
  );
}
