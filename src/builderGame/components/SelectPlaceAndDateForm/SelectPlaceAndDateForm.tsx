import { Button, HStack, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { InputContainer } from '../../components/InputContainer';
import { DatePicker } from '../DatePicker';

export type PlaceAndDate = {
  place: string;
  date: Date;
};

export const SelectPlaceAndDateForm: React.FC = () => {
  const { handleSubmit, register, control } = useForm<PlaceAndDate>({
    defaultValues: { date: new Date(), place: 'San Siro' },
  });

  return (
    <HStack
      as="form"
      w="3xl"
      alignItems="flex-end"
      onSubmit={handleSubmit(data => data)}
    >
      <InputContainer label="test">
        <Input {...register('place', { required: true })} />
      </InputContainer>
      <DatePicker control={control} />
      <Button type="submit">Create Match</Button>
    </HStack>
  );
};
