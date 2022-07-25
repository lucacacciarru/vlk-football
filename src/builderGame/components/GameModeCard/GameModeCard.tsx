import {
  Box,
  Flex,
  ListItem,
  Stack,
  StackProps,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { Sports } from '../../../_shared/types';
import { useGetMatchMode, useUpdateSelectedMode } from '../../hook';
import { gameModeMap } from '../../utils/gameModeMap';

type Props = {
  gameMode: Sports;
};

const containerProps: StackProps = {
  bg: 'black.80',
  w: { sm: 'full', lg: 'sm' },
  h: 'sm',
  p: '2',
  color: 'white.0',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'lg',
  borderWidth: '1px',
  cursor: 'pointer',
};

export const GameModeCard: React.FC<Props> = ({ gameMode }) => {
  const selectedGameMode = useGetMatchMode();
  const { t } = useTranslation();
  const { maxNumberOfGoalkeepers, numberOfPlayers, iconName } =
    gameModeMap[gameMode];

  const updateGameMod = useUpdateSelectedMode();

  const isModeSelected = useMemo(
    () => selectedGameMode === gameMode,
    [gameMode, selectedGameMode],
  );

  const selectedModeColor = useMemo(
    () => (isModeSelected ? 'brand.primary.dark' : 'white.50'),
    [isModeSelected],
  );

  const borderColor = useMemo(
    () => (isModeSelected ? 'brand.primary.dark' : 'black.0'),
    [isModeSelected],
  );

  return (
    <Stack
      {...containerProps}
      onClick={() => updateGameMod(gameMode)}
      borderColor={borderColor}
      data-testid={`gameModeCard-${gameMode}`}
    >
      <Icon size="32" name={iconName} color={selectedModeColor} />
      <Box>
        <Text
          as="h2"
          textStyle="h2"
          textAlign="center"
          color={selectedModeColor}
          transition="all .5s ease"
        >
          {t(`gameMode.${gameMode}`)}
        </Text>
        <Flex mt="2">
          <UnorderedList
            display="flex"
            w="full"
            justifyContent="space-around"
            alignItems="center"
            gap="8"
          >
            <ListItem>
              {t('builderGame.gameModCard.numberOfPlayer', {
                count: numberOfPlayers,
              })}
            </ListItem>
            <ListItem>
              {t('builderGame.gameModCard.maxNumberGoalkeepers', {
                count: maxNumberOfGoalkeepers,
              })}
            </ListItem>
          </UnorderedList>
        </Flex>
      </Box>
    </Stack>
  );
};
