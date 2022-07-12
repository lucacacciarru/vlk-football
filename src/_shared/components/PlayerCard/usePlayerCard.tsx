import { BoxProps } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

type Params = {
  team?: 'vlk' | 'klv';
  size?: 'regular' | 'small';
};

export function usePlayerCard({ team, size }: Params) {
  const [showFront, setIsShowFront] = useState(true);

  const frontRotate = useMemo(
    () => (showFront ? 'rotateY(0deg)' : 'rotateY(180deg)'),
    [showFront],
  );
  const backRotate = useMemo(
    () => (showFront ? 'rotateY(-180deg)' : 'rotateY(0deg)'),
    [showFront],
  );

  const selectedTeamColor = useMemo(() => {
    if (!team) {
      return 'white.0';
    }
    return team === 'vlk' ? 'brand.primary.regular' : 'brand.secondary.regular';
  }, [team]);

  const containerProps: BoxProps = useMemo(
    () => ({
      h: { base: '2xs', '2xl': '18rem' },
      w: { base: '3xs', '2xl': '15rem' },
      borderRadius: 'xl',
      bgGradient: `linear(to-t, black.0 -20%, ${selectedTeamColor} 90%)`,
      overflow: 'hidden',
      px: '6',
      py: '4',
      transition: 'all .5s ease',
    }),
    [selectedTeamColor],
  );

  const frontContainerProps = useMemo(
    () => ({ ...containerProps, __css: { transform: frontRotate } }),
    [containerProps, frontRotate],
  ) as BoxProps;

  const backContainerProps = useMemo(
    () => ({
      ...containerProps,
      __css: { transform: backRotate, backfaceVisibility: 'hidden' },
      position: 'absolute',
      top: '0',
      left: '0',
    }),
    [containerProps, backRotate],
  ) as BoxProps;

  function onClick() {
    setIsShowFront(prev => !prev);
  }

  return {
    frontContainerProps,
    backContainerProps,
    onClick,
  };
}
