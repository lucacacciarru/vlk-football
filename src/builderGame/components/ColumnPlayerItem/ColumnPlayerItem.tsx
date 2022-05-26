import { Box } from "@chakra-ui/react";
import { ColumnPlayerContent } from "../ColumnPlayerContent";
import { useColumnPlayerItem } from "./useColumnPlayerItem";

type Props = {
  id: string;
};

export const ColumnPlayerItem: React.FC<Props> = ({ id }) => {
  const { boxProps } = useColumnPlayerItem(id);

  return (
    <Box {...boxProps}>
      <Box px="10" id={id} h="24" w="full" bg="white.0" borderRadius="lg">
        <ColumnPlayerContent id={id} />
      </Box>
    </Box>
  );
};
