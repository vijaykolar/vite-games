import { Box, Input, InputGroup, InputLeftElement } from "./chakra-ui";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <Box maxWidth="lg" minWidth={{base: "auto", md: "lg"}}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input type="text" placeholder="Search games..." />
      </InputGroup>
    </Box>
  );
}

export default SearchInput;
