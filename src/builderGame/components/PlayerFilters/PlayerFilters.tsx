import { Flex, Input, Stack } from '@chakra-ui/react';
import { SortPlayerOptions } from '../../../_shared/components/SortPlayerOptions';
import { useFilter } from '../../../_shared/hook/useFilter';
import { FilterTagList } from '../ActiveFilterTags';
import { InputContainer } from '../InputContainer';
import { RatingOptions } from './RatingOptions';
import { RoleOptions } from './RoleOptions';

export const PlayerFilters: React.FC = () => {
  const { updateFilterList } = useFilter();
  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFilterList('name', [e.target.value]);
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
        <SortPlayerOptions />
      </Flex>
      <FilterTagList />
    </Stack>
  );
};
