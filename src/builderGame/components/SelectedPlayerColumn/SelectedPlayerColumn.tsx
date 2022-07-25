import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetChosenPlayers, useGetMatchRules } from '../../hook';
import { useCheckPlayer } from '../../hook/useCheckPlayer';
import { PlayerList } from '../PlayersList';

type Props = {
  id: string;
  items: string[];
};

export const SelectedPlayerColumn: React.FC<Props> = ({ id, items }) => {
  const { t } = useTranslation();
  const selectedPlayers = useGetChosenPlayers().selectedPlayers;
  const { maxNumberOfGoalkeepers, numberOfPlayers } = useGetMatchRules();
  const {
    isRightNumberOfGoalkeepers,
    isRightNumberOfPlayers,
    selectedGoalKeepers,
  } = useCheckPlayer();

  const correctColorPlayersNumber = useMemo(
    () => (isRightNumberOfPlayers ? 'brand.primary.regular' : 'red.500'),
    [isRightNumberOfPlayers],
  );
  const correctColorGoalkeepersNumber = useMemo(
    () => (isRightNumberOfGoalkeepers ? 'brand.primary.regular' : 'red.500'),
    [isRightNumberOfGoalkeepers],
  );

  return (
    <Stack w="lg" border="2px solid white" borderRadius="xl">
      <Box color="white.0" minH="12" p="4" textAlign="center">
        <Text as="h3" textStyle="h3">
          {t('builderGame.playersColumn.selectedPlayersTitle')}
        </Text>
        <HStack w="full" justifyContent="center" gap="2">
          <Text
            textStyle="body-xs"
            data-testid="playersLength"
            color={correctColorPlayersNumber}
          >
            {t('builderGame.playersColumn.totalPlayer', {
              players: selectedPlayers.length,
              condition: numberOfPlayers,
            })}
          </Text>
          <Text
            textStyle="body-xs"
            data-testid="goalkeepersLength"
            color={correctColorGoalkeepersNumber}
          >
            {t('builderGame.playersColumn.totalGoalkeepers', {
              goalkeepers: selectedGoalKeepers.length,
              condition: maxNumberOfGoalkeepers,
            })}
          </Text>
        </HStack>
      </Box>
      <PlayerList id={id} items={items} />
    </Stack>
  );
};
