import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError;
} & FormControlProps;

export const InputContainer: React.FC<PropsWithChildren<Props>> = ({
  label,
  error,
  children,
  ...formControlProps
}) => {
  return (
    <FormControl isInvalid={!!error} w="full" {...formControlProps}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
