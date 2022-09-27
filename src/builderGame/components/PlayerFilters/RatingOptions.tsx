import { MenuItemOption, MenuOptionGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '../../../_shared/components';
import { Player } from '../../../_shared/types';

export const RatingOptions: React.FC = () => {
  const { t } = useTranslation();
  const renderOptionRatings = useMemo(() => {
    const ratingsList: Player['rating'][] = [4, 8, 12, 16];
    return ratingsList.map(rate => (
      <MenuItemOption value={rate.toString()} key={rate}>
        {t(`builderGame.createPlayerModal.ratings.${rate}`)}
      </MenuItemOption>
    ));
  }, [t]);
  return (
    <Dropdown iconName="star" labelButton="Valutazione" closeOnSelect={false}>
      <MenuOptionGroup type="checkbox">{renderOptionRatings}</MenuOptionGroup>
    </Dropdown>
  );
};
