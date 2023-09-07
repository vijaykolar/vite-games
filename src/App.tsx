import { Grid, GridItem, Show } from "./components/chakra-ui";
import GamesGrid from "./components/games-grid";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <GamesGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
