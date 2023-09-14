import { useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../utils/image-url";
import {
  Image,
  HStack,
  Button,
  List,
  ListItem,
  Spinner,
  Heading,
} from "./chakra-ui";

import { useGameQueryStore } from "../store.ts";

function GenreList() {
  const { data: genres, isLoading, isError } = useGenres();
  const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  if (isLoading) return <Spinner />;

  if (isError) return;

  return (
    <>
      <Heading fontSize="xl" marginBottom={4}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack gap={3}>
              <Image
                boxSize={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                borderRadius={4}
              />
              <Button
                fontSize={16}
                onClick={() => setGenreId(genre.id)}
                variant="link"
                textDecoration={selectedGenreId === genre.id ? "underline" : ""}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                // color={selectedGenre?.id === genre.id ? "gray.900" : "gray.500"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
