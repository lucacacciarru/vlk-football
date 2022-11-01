import { Flex } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useFilter } from '../../../_shared/hook/useFilter';
import { FilterTag } from './FilterTag';

export const FilterTagList: React.FC = () => {
  const { generateValidFilterList } = useFilter();
  const validFilterList = useMemo(
    () => generateValidFilterList({ excludedFilterKey: ['matchType', 'name'] }),
    [generateValidFilterList],
  );

  const renderValidFilters = useMemo(
    () =>
      validFilterList.map(filter => (
        <FilterTag
          filterKey={filter.name}
          key={filter.value}
          value={filter.value}
        />
      )),
    [validFilterList],
  );
  return (
    <Flex gap="2" flexWrap="wrap">
      {renderValidFilters}
    </Flex>
  );
};
