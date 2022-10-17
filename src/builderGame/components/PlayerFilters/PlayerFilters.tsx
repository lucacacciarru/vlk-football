import { Flex, Input, Stack } from '@chakra-ui/react';
import { useFilter } from '../../../_shared/hook/useFilter';
import { InputContainer } from '../InputContainer';
import { RatingOptions } from './RatingOptions';
import { RoleOptions } from './RoleOptions';

export const PlayerFilters: React.FC = () => {
  const { updateFilters } = useFilter();
  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilters('name', [e.target.value]);
  };
  return (
    <Stack gap="6" alignItems="flex-start">
      <InputContainer label="Nome">
        <Input
          size="md"
          placeholder="Cerca un giocatore per il nome"
          onChange={onClick}
        />
      </InputContainer>
      <Flex gap="2">
        <RatingOptions />
        <RoleOptions />
      </Flex>
    </Stack>
  );
};
