import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FetchedPlayerCard } from '../../../_shared/components/FetchedPlayerCard';
import { MatchType } from '../../../_shared/types';
import {
  useGetChosenPlayers,
  useGetMatchRules,
  useGetMatchType,
} from '../../hook';
import { EmptyPlayerCard } from '../EmptyPlayerCard';

export const SelectedPlayersArea: React.FC = () => {
  const selectedMatchType = useGetMatchType();
  const { t } = useTranslation();
  const { numberOfPlayers } = useGetMatchRules();
  const { selectedPlayers } = useGetChosenPlayers();

  const renderEmptyPlayerCard = useMemo(() => {
    const numberPlayersList = Array.from(Array(numberOfPlayers).keys());
    const selectedPlayersLength = selectedPlayers.length;
    return numberPlayersList.map((player, i) =>
      selectedPlayers[i] ? (
        <FetchedPlayerCard id={selectedPlayers[i]} key={selectedPlayers[i]} />
      ) : (
        <EmptyPlayerCard
          isSelected={selectedPlayersLength === i ? true : false}
          key={player}
        />
      ),
    );
  }, [numberOfPlayers, selectedPlayers]);

  return (
    <Stack
      w={{ base: '70vw', '2xl': '78vw' }}
      h="88vh"
      justifyContent="center"
      alignItems="center"
      gap="8"
    >
      <Box textAlign="center">
        <Text color="white.0" textStyle="h2">
          {t(`matchType.${selectedMatchType as MatchType}`)}
        </Text>
        <Text color="white.0">
          {t('builderGame.listOfPlayers.changeMatchType')}
        </Text>
      </Box>
      <SimpleGrid
        minChildWidth="200px"
        w="full"
        h="full"
        spacing="8"
        overflowY="auto"
        px="6"
        alignItems="center"
      >
        {renderEmptyPlayerCard}
      </SimpleGrid>
    </Stack>
  );
};
