import { HStack, Input, Stack } from '@chakra-ui/react';
import { useContext } from 'react';
import { BuilderContext } from '../../../_shared/components/FiltersContext';
import { InputContainer } from '../InputContainer';
import { RatingOptions } from './RatingOptions';
import { RoleOptions } from './RoleOptions';

export const PlayerFilters: React.FC = () => {
  const { setFilters } = useContext(BuilderContext);
  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setFilters) {
      setFilters(prev => ({ ...prev, name: e.target.value }));
    }
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
      <HStack gap="2">
        <RatingOptions />
        <RoleOptions />
      </HStack>
    </Stack>
  );
};
