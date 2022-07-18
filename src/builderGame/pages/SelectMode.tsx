import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { PageHeading } from '../../_shared/components';
import { GameModeContainer } from '../components';

export const SelectMode: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack gap="8">
      <PageHeading
        heading={t('builderGame.selectMode.title')}
        body={t('builderGame.selectMode.body')}
      />
      <GameModeContainer />
    </Stack>
  );
};
