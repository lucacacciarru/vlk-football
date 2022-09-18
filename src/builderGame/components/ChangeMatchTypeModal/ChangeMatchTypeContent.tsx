import { Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { useGetMatchType, useGetMatchTypesList } from '../../hook';
import { matchTypeMap } from '../../utils/matchTypeMap';
import { ChangeMatchTypeButton } from '../ChangeMatchTypeButton';
import { ChangeMatchTypeCard } from './ChangeMatchTypeCard';

type Props = {
  onClose: () => void;
};

export const ChangeMatchTypeContent: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();
  const allMatchTypes = useGetMatchTypesList();
  const selectedMatchType = useGetMatchType();
  const [activeMatchType, setActiveMatchType] = useState(selectedMatchType);

  const { maxNumberOfGoalkeepers, numberOfPlayers } =
    matchTypeMap[activeMatchType];

  const renderMatchTypes = useMemo(
    () =>
      allMatchTypes.map(matchType => (
        <ChangeMatchTypeCard
          setActiveMatchCard={setActiveMatchType}
          matchType={matchType}
          activeMatchType={activeMatchType}
          key={matchType}
        />
      )),
    [allMatchTypes, activeMatchType],
  );

  return (
    <HStack>
      <Stack gap="4">{renderMatchTypes}</Stack>
      <Stack w="full" alignItems="center" flexDir="column" gap="8">
        <Stack w="full" alignItems="center" justifyContent="center">
          <Icon name={`shirt_${activeMatchType}`} size="36" color="white.0" />
          <Text textStyle="h2">{t(`matchType.${activeMatchType}`)}</Text>
          <HStack
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="8"
            pt="2"
          >
            <Flex alignItems="center" justifyContent="center" gap="2">
              <Icon name="players" color="white.0" size="6" />
              <Text>
                {t('builderGame.matchTypeRules.numberOfPlayer', {
                  count: numberOfPlayers,
                })}
              </Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center" gap="2">
              <Icon name="hand" color="white.0" size="6" />
              <Text>
                {t('builderGame.matchTypeRules.maxNumberGoalkeepers', {
                  count: maxNumberOfGoalkeepers,
                })}
              </Text>
            </Flex>
          </HStack>
        </Stack>
        <ChangeMatchTypeButton
          onClose={onClose}
          activeMatchType={activeMatchType}
        />
      </Stack>
    </HStack>
  );
};
