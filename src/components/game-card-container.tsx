import { ReactNode } from "react";
import { Box } from "./chakra-ui";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default GameCardContainer;
