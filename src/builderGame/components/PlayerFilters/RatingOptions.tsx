import { Checkbox, Stack } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';
import { useGetRatingList } from '../../../_shared/hook';
import { useFilter } from '../../../_shared/hook/useFilter';

export const RatingOptions: React.FC = () => {
  const { t } = useTranslation();
  const { addFilterValue, checkIfValueIsOnFilters, removeFilterValue } =
    useFilter();
  const ratingList = useGetRatingList();

  const renderRatingOptions = useMemo(() => {
    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
      const selectedFilterValue = event.target.value;
      if (!checkIfValueIsOnFilters('ratings', selectedFilterValue)) {
        addFilterValue('ratings', selectedFilterValue);
        return;
      }
      removeFilterValue('ratings', selectedFilterValue);
    }
    return ratingList.map(rate => (
      <Checkbox
        color="white.0"
        value={rate}
        key={rate}
        isChecked={checkIfValueIsOnFilters('ratings', rate.toString())}
        onChange={onChange}
      >
        {t(`playerRatings.${rate}`)}
      </Checkbox>
    ));
  }, [
    addFilterValue,
    checkIfValueIsOnFilters,
    ratingList,
    removeFilterValue,
    t,
  ]);
  return (
    <Dropdown
      iconName="star"
      closeOnSelect={false}
      labelButton={t('playerFilter.ratings')}
    >
      <Stack px="4" py="2" gap="2">
        {renderRatingOptions}
      </Stack>
    </Dropdown>
  );
};
