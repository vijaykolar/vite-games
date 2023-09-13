import { Heading, Box } from "./chakra-ui";
import { GameQuery } from "../App.tsx";

interface Props {
  gameQuery: GameQuery;
}
function GameHeading({ gameQuery }: Props) {
  return (
    <Box marginBottom={4}>
      <Heading as="h1">
        {gameQuery.platform?.name} {gameQuery.genre?.name} Games
      </Heading>
    </Box>
  );
}

export default GameHeading;
