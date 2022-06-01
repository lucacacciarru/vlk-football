import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type Props = {
  label: string;
  errorMessage?: string;
};

export const InputContainer: React.FC<PropsWithChildren<Props>> = ({
  label,
  errorMessage,
  children,
}) => {
  return (
    <FormControl w="full">
      <FormLabel>{label}</FormLabel>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      {children}
    </FormControl>
  );
};
