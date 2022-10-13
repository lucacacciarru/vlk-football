import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ImageFallback } from '../../../_shared/components/ImageFallback';
import { PlayerRoleIcon } from '../../../_shared/components';
import { useGetSinglePlayer } from '../../hook';
import { useTranslation } from 'react-i18next';

type Props = {
  id: string;
};
export const ListCardPlayerContent: React.FC<Props> = ({ id }) => {
  const { t } = useTranslation();
  const selectedPlayer = useGetSinglePlayer(id);

  return (
    <HStack
      h="full"
      w="full"
      alignItems="center"
      justifyContent="space-between"
      userSelect="none"
    >
      <HStack>
        <Box h="20" w="20" borderRadius="full" overflow="hidden">
          <Image
            src={selectedPlayer?.avatar}
            w="full"
            h="full"
            objectFit="cover"
            fallback={<ImageFallback />}
          />
        </Box>
        <Stack>
          <Text data-testid={selectedPlayer?.name}>{selectedPlayer?.name}</Text>
          <Text>
            {t('playerCard.points', { count: selectedPlayer?.rating })}
          </Text>
        </Stack>
      </HStack>
      <PlayerRoleIcon
        goalkeeper={selectedPlayer?.roles?.GK}
        size="8"
        color="black.0"
      />
    </HStack>
  );
};
