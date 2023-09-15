import DefinitionItem from "./definition-item.tsx";
import { SimpleGrid, Text } from "./chakra-ui";
import CriticScore from "./critic-score.tsx";
import { Game } from "../entities/game.ts";

interface Props {
  game: Game;
}
function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} gap={5} marginTop={5}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres?.map((g) => (
          <Text as="p" key={g.id}>
            {g.name}
          </Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers?.map((p) => (
          <Text as="p" key={p.id}>
            {p.name}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
