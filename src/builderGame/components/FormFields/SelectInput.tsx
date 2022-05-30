import { FormControl, FormLabel, Select, SelectProps } from '@chakra-ui/react';
import { useMemo } from 'react';

type Props = {
  label: string;
  options: number[];
} & SelectProps;

export const SelectInput: React.FC<Props> = ({ label, options, ...rest }) => {
  const renderOptions = useMemo(
    () =>
      options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      )),
    [options],
  );
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select {...rest}>{renderOptions}</Select>
    </FormControl>
  );
};
