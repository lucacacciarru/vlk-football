import { HStack, Stack, Text } from '@chakra-ui/react';
import { EmptyPlayerCard } from '../EmptyPlayerCard';

export const SelectedPlayersArea: React.FC = () => {
  return (
    <Stack
      w={{ base: '70vw', '2xl': '78vw' }}
      h="88vh"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white.0" textStyle="h2">
        Calcetto
      </Text>
      <Text color="white.0">Change match type</Text>
      <HStack w="full" flexWrap="wrap" gap="6" h="full" overflowY="scroll">
        <EmptyPlayerCard />
        <EmptyPlayerCard />
        <EmptyPlayerCard />
        <EmptyPlayerCard />
        <EmptyPlayerCard />
        <EmptyPlayerCard />
        <EmptyPlayerCard />
        <EmptyPlayerCard />
        <EmptyPlayerCard />
        <EmptyPlayerCard />
      </HStack>
    </Stack>
  );
};
