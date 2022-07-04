import { Box, Portal, PortalManager } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';

type Props = {
  size: string;
};

export const NavBar: React.FC<Props> = ({ size }) => {
  return (
    <PortalManager zIndex={10}>
      <Portal>
        <Box px="16" py="10" h={size}>
          <Icon name="logo" size="20" />
        </Box>
      </Portal>
    </PortalManager>
  );
};
