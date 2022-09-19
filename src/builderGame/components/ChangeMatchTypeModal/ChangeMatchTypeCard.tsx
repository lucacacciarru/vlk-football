import { Button, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MatchType } from '../../../_shared/types';

type Props = {
  matchType: MatchType;
  setActiveMatchCard: Dispatch<SetStateAction<MatchType>>;
  activeMatchType: MatchType;
};

export const ChangeMatchTypeCard: React.FC<Props> = ({
  matchType,
  setActiveMatchCard,
  activeMatchType,
}) => {
  const { t } = useTranslation();
  const onClick = useCallback(
    () => setActiveMatchCard(matchType),
    [matchType, setActiveMatchCard],
  );

  const borderColorCard = useMemo(
    () => (activeMatchType === matchType ? 'brand.primary.regular' : 'black.0'),
    [activeMatchType, matchType],
  );

  return (
    <Button
      h="18"
      w="xs"
      bg="black.80"
      borderRadius="lg"
      minH="20"
      border="1px solid"
      borderColor={borderColorCard}
      _hover={{
        borderColor: 'white.80',
      }}
      onClick={onClick}
    >
      <Text>{t(`matchType.${matchType}`)}</Text>
    </Button>
  );
};
