import { Box, BoxProps, HStack, Image, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { MatchTeams } from '../../../builderGame/store/types';
import { MatchType } from '../../../_shared/types';
import { matchCardImageMap } from './matchCardImageMap';

const containerTextsProps: BoxProps = {
  w: 'full',
  h: 'full',
  position: 'absolute',
  right: '0',
  top: '0',
  color: 'white.0',
  justifyContent: 'center',
  _after: {
    content: `""`,
    w: 'full',
    h: 'full',
    bg: 'black.0',
    position: 'absolute',
    top: '0',
    opacity: '0.5',
    left: '0',
  },
};

type Props = {
  teams: MatchTeams;
  matchType: MatchType;
};

export const MatchCardTeamsImage: React.FC<Props> = ({ teams, matchType }) => {
  const { t } = useTranslation();
  const teamsName = Object.keys(teams);
  const { coverUrl } = matchCardImageMap[matchType];

  return (
    <Box
      h="40"
      w="full"
      position="relative"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image objectFit="cover" h="full" w="full" src={coverUrl} />
      <Box {...containerTextsProps}>
        <HStack
          gap="4"
          w="full"
          h="full"
          justifyContent="center"
          textTransform="uppercase"
        >
          <Text zIndex="banner" as="h1" textStyle="h1">
            {teamsName[0]}
          </Text>
          <Text zIndex="banner" as="h5" textStyle="h5">
            {t('match.matchCard.versus')}
          </Text>
          <Text zIndex="banner" as="h1" textStyle="h1">
            {teamsName[1]}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};
