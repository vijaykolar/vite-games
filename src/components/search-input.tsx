import { Box, Input, InputGroup, InputLeftElement } from "./chakra-ui";
import { BsSearch } from "react-icons/bs";
import { FormEvent, useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}
function SearchInput({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (inputRef.current) onSearch(inputRef?.current?.value);
  }
  return (
    <Box maxWidth="lg" minWidth={{ base: "auto", md: "lg" }}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BsSearch color="gray.300" />
          </InputLeftElement>
          <Input ref={inputRef} type="text" placeholder="Search games..." />
        </InputGroup>
      </form>
    </Box>
  );
}

export default SearchInput;
