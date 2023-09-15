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
      <Box as="dd" marginTop={2}>
        {children}
      </Box>
    </Box>
  );
}

export default DefinitionItem;
