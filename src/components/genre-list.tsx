import { useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/image-url";
import { Image, HStack, Button, List, ListItem, Spinner } from "./chakra-ui";

function GenreList() {
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
            <Button fontSize={14} variant="link">
              {" "}
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
