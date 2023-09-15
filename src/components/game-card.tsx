import { getCroppedImageUrl } from "../utils/image-url";
import { Card, CardBody, HStack, Heading, Image } from "./chakra-ui";
import CriticScore from "./critic-score";
import PlatformIconList from "./platform-icon-list";
import { Link } from "react-router-dom";
import { Game } from "../entities/game.ts";

interface GamesCardProps {
  game: Game;
}

function GameCard({ game }: GamesCardProps) {
  return (
    <Link to={`games/${game.slug}`}>
      <Card
        transition={{
          md: "all .15s ease-in-out",
        }}
        _hover={{
          transform: "scale(1.02)",
        }}
      >
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
          <Heading size="md">{game.name}</Heading>
        </CardBody>
      </Card>
    </Link>
  );
}
export default GameCard;
