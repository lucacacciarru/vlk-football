import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTeamName } from "./useTeamName";

export const TeamName: React.FC = () => {
  const { onClick, selectedTeam, motionSpanProps } = useTeamName();
  return (
    <Box
      userSelect="none"
      position="relative"
      as="span"
      cursor="pointer"
      onClick={onClick}
    >
      <motion.span {...motionSpanProps}>{selectedTeam}</motion.span>
    </Box>
  );
};
