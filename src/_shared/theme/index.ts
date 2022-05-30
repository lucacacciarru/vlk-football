import { colors, borders, fonts, textStyles } from './style';
import { extendTheme } from '@chakra-ui/react';
import { Button } from './components';
import { Modal } from './components/Modal';

const config = {
  colors,
  borders,
  fonts,
  textStyles,
  styles: {
    global: {
      body: {
        bg: 'black.0',
      },
    },
  },
  components: {
    Button,
    Modal,
  },
};

export const customTheme = extendTheme(config);
