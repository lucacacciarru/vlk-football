import { Box, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MatchTeams } from '../../../builderGame/store/types';

export const MatchCardRatings: React.FC<MatchTeams> = teams => {
  const { t } = useTranslation();
  const teamNames = Object.keys(teams);
  const renderNameAndRatingTeams = useMemo(
    () =>
      teamNames.map((team, i) => {
        const upperCaseName = team.toUpperCase();
        const rating = teams[team as keyof MatchTeams].ratingsScore;

        return (
          <Text as="p" textStyle="body-xs" key={`${team}${i}`}>
            {t('match.matchCard.rateTeam', {
              team: upperCaseName,
              count: rating,
            })}
          </Text>
        );
      }),
    [t, teamNames, teams],
  );

  return (
    <Box>
      <Text as="h4" textStyle="h4" mb="1">
        {t('match.matchCard.ratingsLabel')}
      </Text>
      {renderNameAndRatingTeams}
    </Box>
  );
};
