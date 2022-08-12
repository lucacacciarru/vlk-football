import {
  Box,
  BoxProps,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Player, TeamsName } from '../../types/general';
import { ImageFallback } from '../ImageFallback';
import { RoleIcon } from '../RoleIcon';
import { useFrontCard } from './useFrontCard';

type Props = {
  player: Omit<Player, 'id' | 'sports'>;
  team?: TeamsName;
  size?: 'regular' | 'small';
} & BoxProps;

export const PlayerFrontCard: React.FC<Props> = ({
  player,
  team,
  size,
  ...boxProps
}) => {
  const { goalkeeper, name, rating, avatar } = player;
  const { ratingText, renderIcon, iconColor } = useFrontCard({
    rating,
    team,
    size,
  });

  return (
    <Box {...boxProps}>
      <Stack
        w="full"
        h="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack w="full" justifyContent="space-between">
          {renderIcon}
          <RoleIcon goalkeeper={goalkeeper} size="8" color={iconColor} />
        </HStack>
        <Flex
          borderRadius="full"
          overflow="hidden"
          h={{ base: '20', '2xl': '32' }}
          w={{ base: '20', '2xl': '32' }}
        >
          <Image
            src={avatar}
            fit="cover"
            w="full"
            h="full"
            fallback={<ImageFallback />}
          />
        </Flex>
        <Box
          w="full"
          __css={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          <Text
            fontWeight="bold"
            textStyle="h5"
            color="white.0"
            pt="4"
            __css={{
              textOverflow: 'ellipsis',
            }}
          >
            {name}
          </Text>
          <Text color="white.0">{ratingText}</Text>
        </Box>
      </Stack>
    </Box>
  );
};
