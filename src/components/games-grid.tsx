import { Text, SimpleGrid } from "../components/chakra-ui";
import GameCard from "./game-card";
import { useGames } from "../hooks/useGames";

export default function GamesGrid() {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          md: 2,
          lg: 3,
          "2xl": 5,
        }}
        spacing={{ base: 4, md: 8 }}
        padding={4}
      >
        {games.map((game) => (
          <GameCard key={game.background_image} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}
