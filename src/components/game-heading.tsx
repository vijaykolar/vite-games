import { Heading, Box } from "./chakra-ui";
import { usePlatform } from "../hooks/usePlatform.tsx";
import { useGenre } from "../hooks/useGenre.tsx";
import { useGameQueryStore } from "../store.ts";

function GameHeading() {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const { genre } = useGenre(genreId);
  const { platform } = usePlatform(platformId);

  return (
    <Box marginBottom={4}>
      <Heading as="h1">
        {platform?.name} {genre?.name} Games
      </Heading>
    </Box>
  );
}

export default GameHeading;
