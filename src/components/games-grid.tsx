import { HiOutlineFaceFrown } from "react-icons/hi2";
import {
  Text,
  SimpleGrid,
  Grid,
  Heading,
  Center,
  VStack,
} from "../components/chakra-ui";
import GameCard from "./game-card";
import GameCardContainer from "./game-card-container";
import GameCardSkeleton from "./game-card-skeleton";

import { useGames } from "../hooks/useGames";
import { GameQuery } from "../types.ts";

// Generate number of skeletons
const numberOfSkeleton = Array.from({ length: 10 }, (_, i) => i + 1);

interface Props {
  gameQuery: GameQuery;
}

export default function GamesGrid({ gameQuery }: Props) {
  const { data: games, isLoading, error } = useGames(gameQuery);

  if (isLoading)
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
          <GameCardContainer key={s}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      </Grid>
    );

  if (games?.results.length === 0)
    return (
      <Center>
        <VStack>
          <HiOutlineFaceFrown size={40} />
          <Heading>No games found</Heading>
        </VStack>
      </Center>
    );

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid
        columns={{
          md: 2,
          lg: 3,
          "2xl": 5,
        }}
        spacing={{ base: 4, md: 8 }}
        padding={4}
      >
        {games?.results.map((game) => (
          <GameCardContainer key={game.background_image}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
