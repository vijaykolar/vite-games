import { Genre, useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/image-url";
import { Image, HStack, Button, List, ListItem, Spinner } from "./chakra-ui";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data: genres, loading, error } = useGenres();

  if (loading) return <Spinner />;

  if (error) return;

  return (
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
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
