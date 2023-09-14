import { usePlatforms } from "../hooks/usePlatforms";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "./chakra-ui";
import { FaChevronDown } from "react-icons/fa";
import { Platform } from "../types.ts";
import { usePlatform } from "../hooks/usePlatform.tsx";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props) {
  const { data: platforms, isError } = usePlatforms();
  const { platform } = usePlatform(selectedPlatformId);

  if (isError) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {platform?.name || "Platforms"}
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
