import { useTrailers } from "../hooks/useTrailers";
import { Box, Image } from "../components/chakra-ui";
import { getCroppedImageUrl } from "../utils/image-url.ts";

interface Props {
  gameId: number;
  background_image?: string;
}

function GameTrailer({ gameId, background_image }: Props) {
  const { data, isLoading, error } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return data?.results[0]?.data["max"] ? (
    <Box marginTop={4}>
      <video
        src={data?.results[0]?.data["max"]}
        poster={data?.results[0]?.preview}
        controls
        width="100%"
      />
    </Box>
  ) : (
    <Box marginTop={4} height="lg" overflow="hidden">
      <Image
        height="100%"
        width="100%"
        objectFit="cover"
        src={getCroppedImageUrl(background_image!)}
      />
    </Box>
  );
}

export default GameTrailer;
