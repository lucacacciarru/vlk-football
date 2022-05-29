import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { PlayerList } from '../PlayersList';
import { useSelectedPlayerColumn } from './useSelectedPlayerColumn';

type Props = {
  id: string;
  items: string[];
};

export const SelectedPlayerColumn: React.FC<Props> = ({ id, items }) => {
  const {
    colorCorrectGoalkeepersNumber,
    colorCorrectPlayersNumber,
    conditionPlayerText,
    conditionGoalkeepersText,
    columnTitle,
  } = useSelectedPlayerColumn();

  return (
    <Stack w="lg" border="2px solid white" borderRadius="xl">
      <Box color="white.0" minH="12" p="4" textAlign="center">
        <Text as="h3" textStyle="h3">
          {columnTitle}
        </Text>
        <HStack w="full" justifyContent="center" gap="2">
          <Text textStyle="body-xs" color={colorCorrectPlayersNumber}>
            {conditionPlayerText}
          </Text>
          <Text textStyle="body-xs" color={colorCorrectGoalkeepersNumber}>
            {conditionGoalkeepersText}
          </Text>
        </HStack>
      </Box>
      <PlayerList id={id} items={items} />
    </Stack>
  );
};
