import {
  Box,
  BoxProps,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Player } from '../../../player/store';
import { Teams } from '../../types/general';
import { ImageFallback } from '../ImageFallback';
import { RoleIcon } from '../RoleIcon';
import { useFrontCard } from './useFrontCard';

type Props = {
  player: Omit<Player, 'id' | 'sports'>;
  team?: Teams;
} & BoxProps;

export const PlayerFrontCard: React.FC<Props> = ({
  player,
  team,
  ...boxProps
}) => {
  const { goalkeeper, name, rating, avatar } = player;
  const { ratingText, renderIcon, iconColor } = useFrontCard({ rating, team });

  return (
    <Box {...boxProps}>
      <Stack w="full" h="full" alignItems="center">
        <HStack w="full" justifyContent="space-between">
          {renderIcon}
          <RoleIcon goalkeeper={goalkeeper} size="10" color={iconColor} />
        </HStack>
        <Flex boxSize="40" borderRadius="full" overflow="hidden">
          <Image
            src={avatar}
            fit="cover"
            w="full"
            h="full"
            fallback={<ImageFallback />}
          />
        </Flex>
        <Box w="full">
          <Text fontWeight="bold" textStyle="h4" color="white.0" pt="4">
            {name}
          </Text>
          <Text color="white.0">{ratingText}</Text>
        </Box>
      </Stack>
    </Box>
  );
};
