import { Avatar, AvatarGroup, Box, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFilteredPlayers } from '../../../builderGame/hook';

type Props = {
  playerIds: string[];
};

export const MatchCardPlayers: React.FC<Props> = ({ playerIds }) => {
  const { t } = useTranslation();
  const selectedPlayers = useFilteredPlayers(playerIds);
  const renderPlayersAvatar = useMemo(
    () =>
      selectedPlayers?.map(player => (
        <Avatar
          name={player.name}
          src={player.avatar}
          key={player.id}
          color="brand.primary.regular"
        />
      )),
    [selectedPlayers],
  );
  return (
    <Box>
      <Text> {t('match.matchCard.playersLabel')}</Text>
      <AvatarGroup max={3} size="md">
        {renderPlayersAvatar}
      </AvatarGroup>
    </Box>
  );
};
