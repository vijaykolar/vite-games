import { usePlatforms } from "../hooks/usePlatforms";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "./chakra-ui";
import { FaChevronDown } from "react-icons/fa";
import { Platform } from "../types.ts";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data: platforms, isError } = usePlatforms();
  if (isError) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
