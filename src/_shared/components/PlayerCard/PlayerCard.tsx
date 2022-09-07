import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Player, TeamsName } from '../../types';
import { Icon } from '../Icon';
import { IconLibrary } from '../Icon/IconLibrary';
import { ImageFallback } from '../ImageFallback';
import { PlayerRoleIcon } from '../PlayerRoleIcon';

type Props = Player & {
  team?: TeamsName;
};

export const PlayerCard: React.FC<Props> = ({
  goalkeeper,
  name,
  rating,
  avatar,
  team,
  id,
}) => {
  const { t } = useTranslation();

  const selectedTeamIcon = useMemo((): keyof IconLibrary => {
    if (!team) {
      return 'questionMark';
    }
    if (team === 'vlk') {
      return 'vlk';
    }
    return 'klv';
  }, [team]);

  const selectedTeamColor = useMemo(() => {
    if (!team) {
      return 'white.0';
    }
    return team === 'vlk' ? 'brand.primary.regular' : 'brand.secondary.regular';
  }, [team]);

  const iconColor = useMemo(() => (team ? 'white.0' : 'black.0'), [team]);

  return (
    <Stack
      w="52"
      h="64"
      bg="brand.primary.regular"
      borderRadius="lg"
      p="4"
      alignItems="center"
      gap="4"
      bgGradient={`linear(to-t, black.0 -20%, ${selectedTeamColor} 90%)`}
      data-testid={id}
    >
      <HStack w="full" justifyContent="space-between">
        <Icon name={selectedTeamIcon} size="8" color={iconColor} />
        <PlayerRoleIcon goalkeeper={goalkeeper} size="6" color={iconColor} />
      </HStack>
      <Stack w="24" h="24" borderRadius="full" overflow="hidden">
        <Image
          src={avatar}
          fallback={<ImageFallback />}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Stack>
      <Box w="full">
        <Text fontWeight="bold" textStyle="h5" color="white.0">
          {name}
        </Text>
        <Text textStyle="h5" color="white.0">
          {t('playerCard.points', { count: rating })}
        </Text>
      </Box>
    </Stack>
  );
};
