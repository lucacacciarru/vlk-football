import { HStack } from '@chakra-ui/react';
import { RatingOptions } from './RatingOptions';
import { RoleOptions } from './RoleOptions';

export const PlayerFilters: React.FC = () => {
  return (
    <HStack gap="2">
      <RatingOptions />
      <RoleOptions />
    </HStack>
  );
};
