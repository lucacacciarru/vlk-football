import { colors, borders, fonts, textStyles } from './style';
import { extendTheme } from '@chakra-ui/react';
import { Button } from './components';
import { Modal } from './components/Modal';
import { Avatar } from './components/Avatar';
import { Accordion } from './components/Accordion';
import { Menu } from './components/Menu';
import { Tag } from './components/Tag';

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
    Avatar,
    Accordion,
    Menu,
    Tag,
  },
};

export const customTheme = extendTheme(config);
