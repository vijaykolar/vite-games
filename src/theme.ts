import { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from "./components/chakra-ui";


const config: ThemeConfig = {
    initialColorMode: "light"
}

const theme = extendTheme({config})

export { theme }