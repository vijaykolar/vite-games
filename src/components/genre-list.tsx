import { Genre, useGenres } from "../hooks/useGenres";
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

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, loading, error } = useGenres();

  if (loading) return <Spinner />;

  if (error) return;

  return (
    <>
      <Heading fontSize="xl" marginBottom={4}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
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
                textDecoration={
                  selectedGenre?.id === genre.id ? "underline" : ""
                }
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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
