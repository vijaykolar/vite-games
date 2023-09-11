import { Badge } from "../components/chakra-ui";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge paddingX={2.5} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
}

export default CriticScore;
