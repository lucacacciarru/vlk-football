import { Spacer } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Teams } from '../../types/general';
import { Icon } from '../Icon';

type Params = {
  rating: number;
  team?: Teams;
};

export function useFrontCard({ rating, team }: Params) {
  const { t } = useTranslation();

  const ratingText = t('playerCard.points', { count: rating });

  const renderIcon = useMemo(
    () => (team ? <Icon name={team} size="12" /> : <Spacer />),
    [team],
  );

  const iconColor = useMemo(() => (team ? 'white.0' : 'black.0'), [team]);

  return {
    ratingText,
    renderIcon,
    iconColor,
  };
}
