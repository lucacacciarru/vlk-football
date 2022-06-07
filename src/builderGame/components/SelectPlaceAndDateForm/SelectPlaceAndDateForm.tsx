import { Button, HStack, Input } from '@chakra-ui/react';
import { InputContainer } from '../../components/InputContainer';
import { DatePicker } from '../DatePicker';
import { useSelectPlaceAndDateForm } from './useSelectPlaceAndDateForm';

export const SelectPlaceAndDateForm: React.FC = () => {
  const { control, formProps, placeInputProps } = useSelectPlaceAndDateForm();
  return (
    <HStack as="form" {...formProps}>
      <InputContainer label="test">
        <Input {...placeInputProps} />
      </InputContainer>
      <DatePicker control={control} />
      <Button type="submit">Create Match</Button>
    </HStack>
  );
};
