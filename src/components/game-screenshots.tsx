import { useScreenshots } from "../hooks/useScreenshots.tsx";
import { SimpleGrid, Image } from "../components/chakra-ui";
interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid
      gap={2}
      columns={{
        md: 2,
      }}
      marginTop={2}
    >
      {screenshots?.results.map((s) => (
        <div key={s.id}>
          <Image src={s.image} />
        </div>
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
