import { Box, HStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Match } from '../../store';

type Props = Omit<Match, 'id' | 'teams'>;

export const MatchCardHeader: React.FC<Props> = ({
  date,
  place,
  matchType,
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Text as="h2" textStyle="h2">
        {t(`matchType.${matchType}`)}
      </Text>
      <HStack>
        <Text
          as="p"
          textStyle="body-xs"
          color="black.50"
          data-testid="dateLabel"
        >
          {t('match.matchCard.dateLabel', { date })}
        </Text>
        <Text as="p" textStyle="body-xs" color="black.50">
          {t('match.matchCard.placeLabel', { place })}
        </Text>
      </HStack>
    </Box>
  );
};
