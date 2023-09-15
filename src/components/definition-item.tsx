import { ReactNode } from "react";
import { Box, Heading } from "../components/chakra-ui";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: Props) {
  return (
    <Box>
      <Heading as="dt" fontSize="lg" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionItem;
