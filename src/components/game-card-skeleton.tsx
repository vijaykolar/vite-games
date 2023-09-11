import { Card, CardBody, Skeleton, SkeletonText } from "./chakra-ui";

export default function GameCardskeleton() {
  return (
    <Card>
      <Skeleton height={200} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}
