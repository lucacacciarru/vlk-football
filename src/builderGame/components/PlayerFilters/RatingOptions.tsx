import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';
import { useFilter } from '../../../_shared/hook/useFilter';
import { Player } from '../../../_shared/types';

export const RatingOptions: React.FC = () => {
  const { t } = useTranslation();
  const { updateFilters } = useFilter();

  function onChange(rating: string | string[]) {
    const valueListToNumber = (rating as string[]).map(singleValue =>
      parseInt(singleValue),
    );
    updateFilters('ratings', valueListToNumber);
  }

  const renderOptionRatings = useMemo(() => {
    const ratingsList: Player['rating'][] = [4, 8, 12, 16];
    return ratingsList.map(rate => (
      <MenuItemOption value={rate.toString()} key={rate}>
        {t(`builderGame.createPlayerModal.ratings.${rate}`)}
      </MenuItemOption>
    ));
  }, [t]);
  return (
    <Dropdown
      iconName="star"
      closeOnSelect={false}
      labelButton={t('builderGame.playerFilter.rating')}
    >
      <MenuOptionGroup onChange={onChange} type="checkbox">
        {renderOptionRatings}
      </MenuOptionGroup>
    </Dropdown>
  );
};
