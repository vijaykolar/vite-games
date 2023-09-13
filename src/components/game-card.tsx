import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../utils/image-url";
import { Card, CardBody, HStack, Heading, Image } from "./chakra-ui";
import CriticScore from "./critic-score";
import PlatformIconList from "./platform-icon-list";

interface GamesCardProps {
  game: Game;
}

export default function GameCard({ game }: GamesCardProps) {
  return (
    <Card>
      <Image
        borderTopRadius={8}
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        objectFit="cover"
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={4}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading size="lg">{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
