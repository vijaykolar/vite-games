import { Heading, Box } from "./chakra-ui";
import { GameQuery } from "../types.ts";
import { usePlatform } from "../hooks/usePlatform.tsx";
import { useGenre } from "../hooks/useGenre.tsx";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  const { genre } = useGenre(gameQuery.genreId);
  const { platform } = usePlatform(gameQuery?.platformId);

  return (
    <Box marginBottom={4}>
      <Heading as="h1">
        {platform?.name} {genre?.name} Games
      </Heading>
    </Box>
  );
}

export default GameHeading;
