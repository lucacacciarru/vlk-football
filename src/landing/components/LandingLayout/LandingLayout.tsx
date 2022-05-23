import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";

export const LandingLayout: React.FC = () => {
  const sizeNavBar = "15vh";
  return (
    <>
      <NavBar size={sizeNavBar} />
      <Box py={sizeNavBar} px={{ base: "8", xl: "16" }}>
        <Outlet />
      </Box>
    </>
  );
};
