import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ImageFallback } from '../../../_shared/components/ImageFallback';
import { RoleIcon } from '../../../_shared/components/RoleIcon';
import { useGetSinglePlayer } from '../../hook';

type Props = {
  id: string;
};
export const DraggablePlayerContent: React.FC<Props> = ({ id }) => {
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
          <Text>{selectedPlayer?.rating}</Text>
        </Stack>
      </HStack>
      <RoleIcon
        goalkeeper={selectedPlayer?.goalkeeper}
        size="10"
        color="black.0"
      />
    </HStack>
  );
};
