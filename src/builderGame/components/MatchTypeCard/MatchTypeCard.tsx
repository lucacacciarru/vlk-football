import {
  Box,
  Flex,
  ListItem,
  Stack,
  StackProps,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { MatchType } from '../../../_shared/types';
import { useGetMatchType, useUpdateMatchType } from '../../hook';
import { matchTypeMap } from '../../utils/matchTypeMap';

type Props = {
  matchType: MatchType;
};

const containerProps: StackProps = {
  bg: 'black.80',
  w: { sm: 'full', lg: 'sm' },
  h: 'sm',
  p: '2',
  color: 'white.0',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'lg',
  borderWidth: '1px',
  cursor: 'pointer',
};

export const MatchTypeCard: React.FC<Props> = ({ matchType }) => {
  const selectedMatchType = useGetMatchType();
  const { t } = useTranslation();
  const { maxNumberOfGoalkeepers, numberOfPlayers, iconName } =
    matchTypeMap[matchType as MatchType];

  const updateGameMod = useUpdateMatchType();

  const isTypeSelected = useMemo(
    () => selectedMatchType === matchType,
    [matchType, selectedMatchType],
  );

  const selectedModeColor = useMemo(
    () => (isTypeSelected ? 'brand.primary.dark' : 'white.50'),
    [isTypeSelected],
  );

  const borderColor = useMemo(
    () => (isTypeSelected ? 'brand.primary.dark' : 'black.0'),
    [isTypeSelected],
  );

  return (
    <Stack
      {...containerProps}
      onClick={() => updateGameMod(matchType)}
      borderColor={borderColor}
      data-testid={`matchTypeCard-${matchType}`}
    >
      <Icon size="32" name={iconName} color={selectedModeColor} />
      <Box>
        <Text
          as="h2"
          textStyle="h2"
          textAlign="center"
          color={selectedModeColor}
          transition="all .5s ease"
        >
          {t(`matchType.${matchType}`)}
        </Text>
        <Flex mt="2">
          <UnorderedList
            display="flex"
            w="full"
            justifyContent="space-around"
            alignItems="center"
            gap="8"
          >
            <ListItem>
              {t('builderGame.matchTypeRules.numberOfPlayer', {
                count: numberOfPlayers,
              })}
            </ListItem>
            <ListItem>
              {t('builderGame.matchTypeRules.maxNumberGoalkeepers', {
                count: maxNumberOfGoalkeepers,
              })}
            </ListItem>
          </UnorderedList>
        </Flex>
      </Box>
    </Stack>
  );
};
