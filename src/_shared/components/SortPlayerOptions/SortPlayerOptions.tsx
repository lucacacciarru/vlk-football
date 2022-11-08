import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSort } from '../../hook/useSort';
import { Dropdown } from '../Dropdown';

export const SortPlayerOptions: React.FC = () => {
  const { t } = useTranslation();
  const { listOfSortOptions, sort, updateSort } = useSort();

  const renderSortOptions = useMemo(
    () =>
      listOfSortOptions.map(option => (
        <MenuItemOption
          key={option}
          value={option}
          onClick={() => updateSort(option)}
          data-testid={`sortOption-${option}`}
        >
          {t(`playerSort.${option}`)}
        </MenuItemOption>
      )),
    [listOfSortOptions, t, updateSort],
  );

  return (
    <Dropdown
      labelButton={t('playerSort.label')}
      iconName="chevronDown"
      closeOnSelect={false}
      data-testid="sort-menu"
    >
      <MenuOptionGroup defaultValue={sort} type="radio">
        {renderSortOptions}
      </MenuOptionGroup>
    </Dropdown>
  );
};
