import {
  Text,
  SimpleGrid,
  Grid,
  Heading,
  Center,
  VStack,
} from "../components/chakra-ui";

import GameCard from "./game-card";
import GameCardskeleton from "./game-card-skeleton";
import GameCardContainer from "./game-card-container";

import { Platform, useGames } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { HiOutlineFaceFrown } from "react-icons/hi2";
import { GameQuery } from "../App";

const numberOfSkeleton = Array.from({ length: 10 }, (_, i) => i + 1);

interface Props {
  gameQuery: GameQuery;
}

export default function GamesGrid({ gameQuery }: Props) {
  const { loading, data: games, error } = useGames(gameQuery);

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
          <GameCardContainer key={s}>
            <GameCardskeleton />
          </GameCardContainer>
        ))}
      </Grid>
    );

  if (games.length === 0)
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
          <GameCardContainer key={game.background_image}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
