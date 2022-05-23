import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTeamName } from "./useTeamName";

export const TeamName: React.FC = () => {
  const { onClick, selectedName, motionSpanProps } = useTeamName();
  return (
    <Box
      userSelect="none"
      position="relative"
      as="span"
      cursor="pointer"
      onClick={onClick}
    >
      <motion.span {...motionSpanProps}>{selectedName}</motion.span>
    </Box>
  );
};
