import { Link } from "react-router-dom";
import { Box, HStack, Image } from "../chakra-ui";
import SearchInput from "../search-input";
import ColorModeSwitch from "./color-mode-switch";

function Navbar() {
  return (
    <Box padding={4} marginBottom={4}>
      <HStack justifyContent="space-between">
        <Link to="/">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"
            alt="logo"
            boxSize={12}
          />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
}

// 11c85b844f0e412eb7cf38d8f678ef93
export default Navbar;
