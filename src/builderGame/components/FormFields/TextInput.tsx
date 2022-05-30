import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';

type Props = {
  label: string;
} & InputProps;

export const TextInput: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...rest} />
    </FormControl>
  );
};
