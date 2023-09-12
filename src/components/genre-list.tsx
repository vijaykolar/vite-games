import { useGenres } from "../hooks/useGenre";
import getCroppedImageUrl from "../utils/image-url";
import { Image, HStack, Text, List, ListItem } from "./chakra-ui";

function GenreList() {
  const { genres } = useGenres();
  // console.log(genres);

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack gap={3}>
            <Image
              boxSize={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={14}> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
