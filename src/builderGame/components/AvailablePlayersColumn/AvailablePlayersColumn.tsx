import { Box, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AddPlayerModal } from '../AddPlayerModal';
import { PlayerList } from '../PlayersList';

type Props = {
  id: string;
  items: string[];
};

export const AvailablePlayersColumn: React.FC<Props> = ({ id, items }) => {
  const { t } = useTranslation();
  return (
    <Stack
      w="lg"
      border="2px solid white"
      borderRadius="xl"
      position="relative"
    >
      <AddPlayerModal />
      <Box color="white.0" minH="12" p="4" textAlign="center">
        <Text as="h3" textStyle="h3">
          {t('builderGame.playersColumn.availablePlayersTitle')}
        </Text>
        <Text textStyle="body-xs">
          {t('builderGame.playersColumn.totalAvailablePlayers', {
            players: items.length,
          })}
        </Text>
      </Box>
      <PlayerList id={id} items={items} />
    </Stack>
  );
};
