import { usePlatforms } from "./usePlatforms.tsx";

export function usePlatform(id?: number) {
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((platform) => platform.id === id);
  return { platform };
}
