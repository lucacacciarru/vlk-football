import { Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAllPlayersId } from '../../../player/hook/';
import { Collapsible, CollapsibleItem } from '../../../_shared/components';
import { useGetStyleCustomScrollBar } from '../../../_shared/hook';
import { AddPlayerModal } from '../AddPlayerModal';
import { ListCardPlayer } from '../ListCardPlayer';
import { PlayerFilters } from '../PlayerFilters';

export const PlayerList: React.FC = () => {
  const { t } = useTranslation();
  const allPlayersId = useGetAllPlayersId();
  const styleScrollBar = useGetStyleCustomScrollBar();

  const renderPlayerItem = useMemo(() => {
    if (allPlayersId) {
      return allPlayersId.map(id => <ListCardPlayer key={id} id={id} />);
    }
  }, [allPlayersId]);
  return (
    <Stack
      alignItems="center"
      w={{ base: '30vw', '2xl': '22vw' }}
      h="88vh"
      borderRight="1px solid white"
      pr="8"
    >
      <Text textStyle="h3" color="white.0">
        {t('builderGame.listOfPlayers.availablePlayersTitle')}
      </Text>
      <Collapsible w="full" color="white.0">
        <CollapsibleItem name="Filtri">
          <PlayerFilters />
        </CollapsibleItem>
      </Collapsible>
      <Stack
        w="full"
        p="4"
        gap="4"
        overflowY="scroll"
        overflowX="hidden"
        css={styleScrollBar}
      >
        <AddPlayerModal />
        {renderPlayerItem}
      </Stack>
    </Stack>
  );
};
