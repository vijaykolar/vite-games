import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame.tsx";
import { Spinner, Heading, Box } from "../components/chakra-ui";
import GameAttributes from "../components/game-attributes.tsx";
import GameTrailer from "../components/game-trailer.tsx";

function GameDetail() {
  const params = useParams();
  const { data: game, isLoading, error } = useGame(params.slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;
  console.log("game", game);
  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <GameTrailer background_image={game.background_image} gameId={game.id} />
      <GameAttributes game={game} />
    </Box>
  );
}
export default GameDetail;
