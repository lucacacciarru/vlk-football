import { HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FetchedPlayerCard } from '../../../_shared/components/FetchedPlayerCard';
import { MatchType } from '../../../_shared/types';
import {
  useCheckPlayer,
  useGetChosenPlayers,
  useGetMatchRules,
  useGetMatchType,
} from '../../hook';
import { CreateTeamButton } from '../CreateTeamButton';
import { EmptyPlayerCard } from '../EmptyPlayerCard';
import { ChangeMatchTypeModal } from '../ChangeMatchTypeModal';
import { useGetStyleCustomScrollBar } from '../../../_shared/hook';

export const SelectedPlayersArea: React.FC = () => {
  const { t } = useTranslation();
  const styleScrollBar = useGetStyleCustomScrollBar();

  const selectedMatchType = useGetMatchType();
  const { numberOfPlayers, maxNumberOfGoalkeepers } = useGetMatchRules();
  const { selectedPlayers } = useGetChosenPlayers();
  const {
    selectedGoalKeepers,
    isRightNumberOfGoalkeepers,
    isRightNumberOfPlayers,
  } = useCheckPlayer();

  const textGoalKeepersConditionColor = useMemo(
    () => (isRightNumberOfGoalkeepers ? 'green.400' : 'red.400'),
    [isRightNumberOfGoalkeepers],
  );

  const textPlayersConditionColor = useMemo(
    () => (isRightNumberOfPlayers ? 'green.400' : 'red.400'),
    [isRightNumberOfPlayers],
  );

  const renderSelectedPlayers = useMemo(() => {
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
      position="relative"
    >
      <Stack alignItems="center" justifyContent="center" textAlign="center">
        <HStack alignItems="center" justifyContent="center">
          <Text color="white.0" textStyle="h3">
            {t(`matchType.${selectedMatchType as MatchType}`)}
          </Text>
          <ChangeMatchTypeModal />
        </HStack>
        <Text textStyle="h1" color="white.0" data-testid="createTeamTitle">
          {t('builderGame.createTeam.title')}
        </Text>
        <HStack justifyContent="center" fontWeight="bold" gap="4">
          <Text
            color={textPlayersConditionColor}
            data-testid="playerLengthCondition"
          >
            {t('builderGame.listOfPlayers.totalPlayer', {
              players: selectedPlayers.length,
              condition: numberOfPlayers,
            })}
          </Text>
          <Text
            color={textGoalKeepersConditionColor}
            data-testid="goalkeepersLengthCondition"
          >
            {t('builderGame.listOfPlayers.totalGoalkeepers', {
              goalkeepers: selectedGoalKeepers.length,
              condition: maxNumberOfGoalkeepers,
            })}
          </Text>
        </HStack>
      </Stack>
      <SimpleGrid
        minChildWidth="200px"
        w="full"
        h="full"
        spacing="8"
        overflowY="auto"
        px="6"
        alignItems="center"
        css={styleScrollBar}
      >
        {renderSelectedPlayers}
      </SimpleGrid>
      <CreateTeamButton />
    </Stack>
  );
};
