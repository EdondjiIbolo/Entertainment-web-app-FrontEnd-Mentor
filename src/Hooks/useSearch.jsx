import { useEffect, useState } from "react";
import initialMovies from "../mock/data.json";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(initialMovies);

  useEffect(() => {
    if (search === "") {
      setMovies(initialMovies);
      return;
    }
    const newMovies = initialMovies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    setMovies(newMovies);
  }, [search]);

  return { movies, setSearch, search };
}
