import { useGenres } from "./useGenres.tsx";

export function useGenre(genreId?: number) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === genreId);
  return { genre };
}
