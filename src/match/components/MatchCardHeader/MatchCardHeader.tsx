import { Box, HStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type Props = {
  date: string;
  place: string;
};

export const MatchCardHeader: React.FC<Props> = ({ date, place }) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Text as="h2" textStyle="h2">
        {t('match.matchCard.title')}
      </Text>
      <HStack>
        <Text as="p" textStyle="body-xs" color="black.50">
          {t('match.matchCard.dateLabel', { date })}
        </Text>
        <Text as="p" textStyle="body-xs" color="black.50">
          {t('match.matchCard.placeLabel', { place })}
        </Text>
      </HStack>
    </Box>
  );
};
