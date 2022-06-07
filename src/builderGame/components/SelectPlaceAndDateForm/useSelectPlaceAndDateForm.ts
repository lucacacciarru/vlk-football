import { StackProps } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export type PlaceAndDate = {
  place: string;
  date: Date;
};

export function useSelectPlaceAndDateForm() {
  const { handleSubmit, register, control } = useForm<PlaceAndDate>({
    defaultValues: { date: new Date(), place: 'test' },
  });

  const formProps: StackProps = {
    w: '3xl',
    alignItems: 'flex-end',
    onSubmit: handleSubmit(data => console.log(data)),
  };

  const placeInputProps = {
    ...register('place', { required: true }),
  };

  return {
    control,
    formProps,
    placeInputProps,
  };
}
