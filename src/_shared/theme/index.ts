import { colors } from "./style";
import { extendTheme } from "@chakra-ui/react";

const config = {
  colors,
  styles: {
    global: {
      body: {
        bg: "black.0",
      },
    },
  },
};

export const customTheme = extendTheme(config);
