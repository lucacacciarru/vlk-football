import { Stack } from '@chakra-ui/react';
import { ContainerTeams } from '../components/ContainerTeams';
import { SelectPlaceAndDateForm } from '../components/SelectPlaceAndDateForm';
import { useTranslation } from 'react-i18next';
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
