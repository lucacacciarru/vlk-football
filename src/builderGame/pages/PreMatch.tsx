import { useTranslation } from 'react-i18next';
import { Stack } from '@chakra-ui/react';
import { ContainerTeams, SelectPlaceAndDateForm } from '../components';
import { PageHeading } from '../../_shared/components';

export const PreMatch: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack gap="8" p="8">
      <Stack
        w="100%"
        gap="4"
        alignItems="center"
        justifyContent="center"
        color="white.0"
      >
        <PageHeading
          heading={t('builderGame.preMatch.title')}
          body={t('builderGame.preMatch.body')}
        />
        <SelectPlaceAndDateForm />
      </Stack>
      <ContainerTeams />
    </Stack>
  );
};
