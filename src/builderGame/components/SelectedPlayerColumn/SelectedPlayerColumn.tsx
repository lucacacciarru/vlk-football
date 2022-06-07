import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useCheckPlayer } from '../../hook/useCheckPlayer';
import { PlayerList } from '../PlayersList';

type Props = {
  id: string;
  items: string[];
};

export const SelectedPlayerColumn: React.FC<Props> = ({ id, items }) => {
  const { t } = useTranslation();
  const {
    gameCondition,
    numberOfSelectedGoalkeepers,
    numberOfSelectedPlayers,
    checkCorrectNumberOfPlayer,
    checkMaxNumberOfGoalkeepers,
  } = useCheckPlayer();

  const colorCorrectPlayersNumber = useMemo(
    () => (checkCorrectNumberOfPlayer ? 'brand.primary.regular' : 'red.400'),
    [checkCorrectNumberOfPlayer],
  );

  const colorCorrectGoalkeepersNumber = useMemo(
    () => (checkMaxNumberOfGoalkeepers ? 'brand.primary.regular' : 'red.400'),
    [checkMaxNumberOfGoalkeepers],
  );

  return (
    <Stack w="lg" border="2px solid white" borderRadius="xl">
      <Box color="white.0" minH="12" p="4" textAlign="center">
        <Text as="h3" textStyle="h3">
          {t('builderGame.playersColumn.selectedPlayersTitle')}
        </Text>
        <HStack w="full" justifyContent="center" gap="2">
          <Text textStyle="body-xs" color={colorCorrectPlayersNumber}>
            {t('builderGame.playersColumn.totalPlayer', {
              players: numberOfSelectedPlayers,
              condition: gameCondition.correctNumberOfPlayers,
            })}
          </Text>
          <Text textStyle="body-xs" color={colorCorrectGoalkeepersNumber}>
            {t('builderGame.playersColumn.totalGoalkeepers', {
              goalkeepers: numberOfSelectedGoalkeepers,
              condition: gameCondition.maxNumberOfGoalKeepers,
            })}
          </Text>
        </HStack>
      </Box>
      <PlayerList id={id} items={items} />
    </Stack>
  );
};
