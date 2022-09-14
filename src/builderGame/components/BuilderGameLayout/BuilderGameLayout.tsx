import { Box } from '@chakra-ui/react';
import { Navigate, Outlet, To, useLocation } from 'react-router-dom';
import { Icon, LinkButton } from '../../../_shared/components';
import { useCheckPathnameAndChosenPlayers } from '../../hook';
import { getPreviouslyRoute } from '../../utils';

export const BuilderGameLayout: React.FC = () => {
  const { pathname } = useLocation();
  const previouslyRoute = getPreviouslyRoute(pathname);

  if (!useCheckPathnameAndChosenPlayers(pathname)) {
    return <Navigate to={previouslyRoute as To} />;
  }

  return (
    <>
      <Box px={{ base: '8', xl: '12', '2xl': '8' }} pt="4">
        <LinkButton variant="unStyled" to={previouslyRoute as To}>
          <Icon
            name="chevronLeft"
            color="white.0"
            size="8"
            data-testid="backButton"
          />
        </LinkButton>
      </Box>
      <Box px={{ base: '8', xl: '16', '2xl': '16' }}>
        <Outlet />
      </Box>
    </>
  );
};
