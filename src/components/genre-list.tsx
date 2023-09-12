import { useGenres } from "../hooks/useGenres";
import getCroppedImageUrl from "../utils/image-url";
import { Image, HStack, Text, List, ListItem, Spinner } from "./chakra-ui";

function GenreList() {
  const { data: genres, loading, error } = useGenres();

  if (loading) return <Spinner />;

  if (error) return;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack gap={3}>
            <Image
              boxSize={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Text fontSize={14}> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
