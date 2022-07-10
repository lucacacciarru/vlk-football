import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar';

export const LandingLayout: React.FC = () => {
  const sizeNavBar = '14vh';
  return (
    <>
      <NavBar size={sizeNavBar} />
      <Box pt={sizeNavBar} pb="8" px={{ base: '8', xl: '16' }}>
        <Outlet />
      </Box>
    </>
  );
};
