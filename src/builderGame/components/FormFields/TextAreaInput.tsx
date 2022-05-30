import {
  FormControl,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';

type Props = {
  label: string;
} & TextareaProps;

export const TextAreaInput: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Textarea {...rest} />
    </FormControl>
  );
};
