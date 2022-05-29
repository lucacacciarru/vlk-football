import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useGetPlayerQuery } from '../../../player/store';
import { RoleIcon } from '../../../_shared/components/RoleIcon';

type Props = {
  id: string;
};
export const DraggablePlayerContent: React.FC<Props> = ({ id }) => {
  const { player } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data }) => ({
      player: data?.find(post => post.id === id),
    }),
  });

  return (
    <HStack
      h="full"
      w="full"
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack>
        <Box h="20" w="20" borderRadius="full" overflow="hidden">
          <Image src={player?.avatar} w="full" h="full" objectFit="cover" />
        </Box>
        <Stack>
          <Text>{player?.name}</Text>
          <Text>{player?.rating}</Text>
        </Stack>
      </HStack>
      <RoleIcon goalkeeper={player?.goalkeeper} size="10" color="black.0" />
    </HStack>
  );
};
