import { useState } from "react";
import { Grid, GridItem, HStack, Show, Box } from "./components/chakra-ui";
import GamesGrid from "./components/games-grid";
import GenreList from "./components/genre-list";
import Navbar from "./components/navbar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/platform-selector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/sort-selector";
import GameHeading from "./components/game-heading.tsx";

import { Analytics } from "@vercel/analytics/react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingX={4}>
            <GameHeading gameQuery={gameQuery} />
            <HStack gap={4} marginBottom={2}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>

          <GamesGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
      <Analytics />
    </>
  );
}

export default App;
