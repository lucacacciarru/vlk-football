import { Box } from '@chakra-ui/react';

export const EmptyPlayerCard: React.FC = () => {
  return (
    <Box
      h={{ base: '2xs', '2xl': '18rem' }}
      w={{ base: '3xs', '2xl': '15rem' }}
      bg="black.80"
      borderRadius="xl"
    ></Box>
  );
};
