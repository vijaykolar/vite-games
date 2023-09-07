import { Grid, GridItem, Show } from "./components/chakra-ui";
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
          <GridItem area="aside" bg="coral">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="darkcyan">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
