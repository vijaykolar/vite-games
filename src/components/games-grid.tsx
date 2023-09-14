import { Text, SimpleGrid, Grid, Box, Spinner } from "../components/chakra-ui";
import GameCard from "./game-card";
import GameCardContainer from "./game-card-container";
import GameCardSkeleton from "./game-card-skeleton";

import { useGames } from "../hooks/useGames";
import { GameQuery } from "../types.ts";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// Generate number of skeletons
const numberOfSkeleton = Array.from({ length: 10 }, (_, i) => i + 1);

interface Props {
  gameQuery: GameQuery;
}

export default function GamesGrid({ gameQuery }: Props) {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

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

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <Box padding={4}>
        <InfiniteScroll
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={
            <Box textAlign="center">
              <Spinner />
            </Box>
          }
          dataLength={fetchedGamesCount}
        >
          <SimpleGrid
            columns={{
              md: 2,
              lg: 3,
              "2xl": 5,
            }}
            marginBottom={8}
            spacing={{ base: 4, md: 8 }}
          >
            {data?.pages.map((page, idx) => (
              <Fragment key={idx}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.background_image}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </Fragment>
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      </Box>
    </>
  );
}
