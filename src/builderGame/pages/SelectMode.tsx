import { Stack } from '@chakra-ui/react';
import { PageHeading } from '../../_shared/components';
import { GameModeContainer } from '../components';

export const SelectMode: React.FC = () => {
  return (
    <Stack gap="8">
      <PageHeading heading="test" body="test" />
      <GameModeContainer />
    </Stack>
  );
};
