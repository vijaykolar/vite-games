import { Text, SimpleGrid, Grid } from "../components/chakra-ui";
import GameCard from "./game-card";
import { useGames } from "../hooks/useGames";
import GameCardskeleton from "./game-card-skeleton";

const numberOfSkeleton = Array.from({ length: 10 }, (_, i) => i + 1);

export default function GamesGrid() {
  const { loading, games, error } = useGames();

  if (loading)
    return (
      <Grid
        gridTemplateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={3}
        padding={4}
      >
        {numberOfSkeleton.map((s) => (
          <GameCardskeleton key={s} />
        ))}
      </Grid>
    );

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
