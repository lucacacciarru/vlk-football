import { ComponentStyleConfig } from '@chakra-ui/react';

export const Menu: ComponentStyleConfig = {
  baseStyle: {
    list: {
      bg: 'black.0',
    },
    item: {
      _hover: {
        bg: 'black.80',
      },
      _focus: {
        bg: 'black.0',
      },
    },
  },
};
