import { usePlatforms } from "../hooks/usePlatforms";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "./chakra-ui";
import { FaChevronDown } from "react-icons/fa";

export default function PlatformSelector() {
  const { data: platforms } = usePlatforms();
  console.log(platforms);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        PlatformSelector
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
