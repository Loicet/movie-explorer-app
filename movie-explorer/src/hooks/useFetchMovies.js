import { useEffect, useState } from "react";
import { getAllMovies } from "../utils/api";

export default function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  return { movies, loading };
}
