import { Game } from "./games-grid";
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
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading size="lg">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}
