import { Box, Grid, GridItem, HStack, Show } from "../components/chakra-ui";
import GenreList from "../components/genre-list.tsx";
import GameHeading from "../components/game-heading.tsx";
import PlatformSelector from "../components/platform-selector.tsx";
import SortSelector from "../components/sort-selector.tsx";
import GamesGrid from "../components/games-grid.tsx";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      paddingX={4}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={4}>
          <GameHeading />
          <HStack gap={4} marginBottom={2}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>

        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
