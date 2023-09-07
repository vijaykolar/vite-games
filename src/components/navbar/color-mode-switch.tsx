import { HStack, Switch, Text, useColorMode } from "../chakra-ui";

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch onChange={toggleColorMode} isChecked={colorMode === "dark"} />
      <Text>Dark</Text>
    </HStack>
  );
}
