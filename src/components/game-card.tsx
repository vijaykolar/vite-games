import { Game } from "../hooks/useGames";

import { Card, CardBody, Heading, Image } from "./chakra-ui";
import PlatformIconList from "./platform-icon-list";

interface GamesCardProps {
  game: Game;
}

export default function GameCard({ game }: GamesCardProps) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading size="lg">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}
