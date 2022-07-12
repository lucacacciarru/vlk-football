import { Box, Portal, PortalManager } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Icon } from '../../../_shared/components';
import { PATHS } from '../../../_shared/types';

type Props = {
  size: string;
};

export const NavBar: React.FC<Props> = ({ size }) => {
  return (
    <PortalManager zIndex={10}>
      <Portal>
        <Link to={PATHS.INDEX}>
          <Box px={{ base: '8', xl: '16', '2xl': '56' }} py="10" h={size}>
            <Icon name="logo" size="20" />
          </Box>
        </Link>
      </Portal>
    </PortalManager>
  );
};
