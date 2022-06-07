import { BoxProps, Spacer } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TeamsName } from '../../types/general';
import { Icon } from '../Icon';

type Params = {
  rating: number;
  team?: TeamsName;
  size?: 'regular' | 'small';
};

export function useFrontCard({ rating, team, size }: Params) {
  const { t } = useTranslation();

  const boxImageSize: BoxProps['boxSize'] = useMemo(() => {
    if (!size) return '40';
    return size === 'regular' ? '40' : '32';
  }, [size]);

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
    boxImageSize,
  };
}
