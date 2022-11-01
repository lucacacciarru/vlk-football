import { Tag, TagCloseButton } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFilter } from '../../../_shared/hook/useFilter';
import { Filters } from '../../../_shared/types';

type Props = {
  value: string | number;
  filterKey: keyof Filters;
};

export const FilterTag: React.FC<Props> = ({ filterKey, value }) => {
  const { t } = useTranslation();
  const { removeFilterValue } = useFilter();

  const removeFilter = useCallback(() => {
    removeFilterValue(filterKey, value);
  }, [filterKey, removeFilterValue, value]);

  const filterTranslationMap = useMemo(
    (): Record<string, string> => ({
      '4': t('playerRatings.4'),
      '8': t('playerRatings.8'),
      '12': t('playerRatings.12'),
      '16': t('playerRatings.16'),
      GK: t('playerRoles.abbreviation.GK'),
      DE: t('playerRoles.abbreviation.DE'),
      CM: t('playerRoles.abbreviation.CM'),
      ST: t('playerRoles.abbreviation.ST'),
    }),
    [t],
  );

  const selectedFilterValueTrans = useMemo(() => {
    if (filterTranslationMap[value]) {
      return filterTranslationMap[value];
    }
  }, [filterTranslationMap, value]);

  return (
    <Tag>
      {selectedFilterValueTrans}
      <TagCloseButton onClick={removeFilter} data-testid="closeButton" />
    </Tag>
  );
};
