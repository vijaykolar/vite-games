import { useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/image-url";
import {
  Image,
  HStack,
  Button,
  List,
  ListItem,
  Spinner,
  Heading,
} from "./chakra-ui";

import { Genre } from "../types.ts";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

function GenreList({ onSelectGenre, selectedGenreId }: Props) {
  const { data: genres, isLoading, isError } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
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
