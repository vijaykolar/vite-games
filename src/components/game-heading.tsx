import { Heading, Box } from "./chakra-ui";
import { GameQuery } from "../types.ts";
import { useGenres } from "../hooks/useGenres.tsx";
import { usePlatforms } from "../hooks/usePlatforms.tsx";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId,
  );
  return (
    <Box marginBottom={4}>
      <Heading as="h1">
        {platform?.name} {genre?.name} Games
      </Heading>
    </Box>
  );
}

export default GameHeading;
