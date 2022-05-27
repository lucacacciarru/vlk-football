import { Box, Stack, Text } from "@chakra-ui/react";
import { Column } from "../Column";

type Props = {
  id: string;
  items: string[];
};

export const PlayerColumn: React.FC<Props> = ({ id, items }) => {
  return (
    <Stack w="lg" border="2px solid white" borderRadius="xl">
      <Box color="white.0" minH="12" p="4" textAlign="center">
        <Text as="h3" textStyle="h3">
          Giocatori disponibili
        </Text>
        <Text textStyle="body-xs">{items.length} giocatori</Text>
      </Box>
      <Column id={id} items={items} />
    </Stack>
  );
};
