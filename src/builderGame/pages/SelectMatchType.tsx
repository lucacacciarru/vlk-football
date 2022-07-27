import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { PageHeading } from '../../_shared/components';
import { MatchTypeContainer } from '../components';
import { SelectModeButton } from '../components';

export const SelectMatchType: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack gap="16" justifyContent="center" alignItems="center" w="full">
      <PageHeading
        heading={t('builderGame.selectMode.title')}
        body={t('builderGame.selectMode.body')}
      />
      <MatchTypeContainer />
      <SelectModeButton />
    </Stack>
  );
};