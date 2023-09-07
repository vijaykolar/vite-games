import { HStack } from "../chakra-ui";
import ColorModeSwitch from "./color-mode-switch";

export default function Navbar() {
  return (
    <HStack justifyContent="space-between">
      <img src="" alt="logo" />
      <ColorModeSwitch />
    </HStack>
  );
}
