import {
  Box,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { Sports } from '../../../_shared/types';
import { gameModeMap } from '../../utils/gameModeMap';

type Props = {
  gameMode: Sports;
};

export const GameModeCard: React.FC<Props> = ({ gameMode }) => {
  const { t } = useTranslation();
  const { maxNumberOfGoalkeepers, numberOfPlayers, iconName } =
    gameModeMap[gameMode];
  const selectedTranslation = t(`gameMode.${gameMode}`);
  return (
    <Stack
      bg="black.80"
      w={{ sm: 'full', lg: 'sm' }}
      h="sm"
      p="2"
      color="white.0"
      alignItems="center"
      justifyContent="center"
      borderRadius="lg"
    >
      <Icon size="36" name={iconName} />
      <Box>
        <Text as="h3" textStyle="h3" textAlign="center">
          {selectedTranslation}
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
