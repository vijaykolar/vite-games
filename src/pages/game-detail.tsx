import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame.tsx";
import {
  Spinner,
  Heading,
  Box,
  SimpleGrid,
  Center,
} from "../components/chakra-ui";
import GameAttributes from "../components/game-attributes.tsx";
import GameTrailer from "../components/game-trailer.tsx";
import GameScreenshots from "../components/game-screenshots.tsx";
import ExpandableText from "../components/expandable-text.tsx";

function GameDetail() {
  const params = useParams();
  const { data: game, isLoading, error } = useGame(params.slug!);

  if (isLoading)
    return (
      <Box height="calc(100vh - 96px)">
        <Center height="100%">
          <Spinner />
        </Center>
      </Box>
    );

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <SimpleGrid columns={{ md: 2 }} gap={4}>
        <Box>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </Box>
        <Box>
          <GameTrailer
            background_image={game.background_image}
            gameId={game.id}
          />

          <GameScreenshots gameId={game.id} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
export default GameDetail;
