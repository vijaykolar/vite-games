import { usePlatforms } from "../hooks/usePlatforms";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "./chakra-ui";
import { FaChevronDown } from "react-icons/fa";
import { usePlatform } from "../hooks/usePlatform.tsx";
import { useGameQueryStore } from "../store.ts";

function PlatformSelector() {
  const { data: platforms, isError } = usePlatforms();
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId,
  );
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
            onClick={() => setPlatformId(platform.id)}
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
