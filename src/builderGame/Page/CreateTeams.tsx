import { Button, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColumnsContainer } from '../components';
import { useCheckPlayer } from '../hook/useCheckPlayer';

export const CreateTeams: React.FC = () => {
  const { isDisableCheckButton } = useCheckPlayer();
  return (
    <Stack minH="100vh" w="full" justifyContent="center" alignItems="center">
      <Stack justifyContent="center" textAlign="center">
        <Text color="white.0" textStyle="h1">
          Seleziona i giocatori
        </Text>
        <Text color="white.50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, minus!
        </Text>
      </Stack>
      <ColumnsContainer />
      <Link to="/">
        <Button size="lg" isDisabled={isDisableCheckButton}>
          Prepara le squadre
        </Button>
      </Link>
    </Stack>
  );
};
