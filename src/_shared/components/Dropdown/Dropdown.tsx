import {
  Menu,
  MenuButton,
  MenuList,
  HStack,
  Text,
  MenuProps,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Icon } from '../Icon';
import { IconLibrary } from '../Icon/IconLibrary';

type Props = {
  labelButton: string;
  iconName: keyof IconLibrary;
} & MenuProps;

export const Dropdown: React.FC<PropsWithChildren<Props>> = ({
  children,
  iconName,
  labelButton,
  ...menuProps
}) => {
  return (
    <Menu {...menuProps}>
      <MenuButton
        px="4"
        py="2"
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
      >
        <HStack alignItems="center" justifyContent="center">
          <Text>{labelButton}</Text>
          <Icon name={iconName} size="4" />
        </HStack>
      </MenuButton>
      <MenuList>{children}</MenuList>
    </Menu>
  );
};
