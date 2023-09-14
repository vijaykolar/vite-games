import { inject } from "@vercel/analytics";

import { Grid, GridItem, HStack, Show, Box } from "./components/chakra-ui";
import GamesGrid from "./components/games-grid";
import GenreList from "./components/genre-list";
import Navbar from "./components/navbar";
import PlatformSelector from "./components/platform-selector";

import SortSelector from "./components/sort-selector";
import GameHeading from "./components/game-heading.tsx";

function App() {
  inject();

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        paddingX={4}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
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
    </>
  );
}

export default App;
