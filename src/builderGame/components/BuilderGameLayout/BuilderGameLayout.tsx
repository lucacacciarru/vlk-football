import { Box } from '@chakra-ui/react';
import { Navigate, Outlet, To, useLocation } from 'react-router-dom';
import { Icon, LinkButton } from '../../../_shared/components';
import { PATHS } from '../../../_shared/types';
import { useCheckPathnameAndChosenPlayers } from '../../hook';
import { getPreviouslyRoute } from '../../utils';

export const BuilderGameLayout: React.FC = () => {
  const { pathname } = useLocation();
  const previouslyRoute = getPreviouslyRoute(pathname);

  if (!useCheckPathnameAndChosenPlayers(pathname)) {
    return <Navigate to={PATHS.CREATE_TEAM} />;
  }

  return (
    <>
      <LinkButton variant="solidIcon" to={previouslyRoute as To}>
        <Icon
          name="chevronLeft"
          color="white.0"
          size="8"
          data-testid="backButton"
        />
      </LinkButton>
      <Box pb="6">
        <Outlet />
      </Box>
    </>
  );
};
