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

  const containerSize = useMemo(() => {
    const containerRegularSize: BoxProps = {
      h: 'xs',
      w: '2xs',
    };
    const containerSmallSize: BoxProps = {
      w: '15rem',
      h: '18rem',
    };

    if (!size) return containerRegularSize;

    return size === 'regular' ? containerRegularSize : containerSmallSize;
  }, [size]);

  const containerProps: BoxProps = useMemo(
    () => ({
      ...containerSize,
      borderRadius: 'xl',
      bgGradient: `linear(to-t, black.0 -20%, ${selectedTeamColor} 90%)`,
      overflow: 'hidden',
      px: '6',
      py: '4',
      transition: 'all .5s ease',
    }),
    [containerSize, selectedTeamColor],
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
