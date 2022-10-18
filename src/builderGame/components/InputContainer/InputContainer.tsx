import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { PropsWithChildren, useMemo } from 'react';
import { FieldError } from 'react-hook-form';

type Props = {
  label: string;
  error?: FieldError | FieldError[];
} & FormControlProps;

export const InputContainer: React.FC<PropsWithChildren<Props>> = ({
  label,
  error,
  children,
  ...formControlProps
}) => {
  const renderErrors = useMemo(() => {
    if (Array.isArray(error)) {
      return error.map(singleError => (
        <FormErrorMessage>{singleError?.message}</FormErrorMessage>
      ));
    }

    return <FormErrorMessage>{error?.message}</FormErrorMessage>;
  }, [error]);

  return (
    <FormControl isInvalid={!!error} w="full" {...formControlProps}>
      <FormLabel>{label}</FormLabel>
      {children}

      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};
