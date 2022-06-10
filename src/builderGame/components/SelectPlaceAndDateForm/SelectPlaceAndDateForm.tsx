import { Button, HStack, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputContainer } from '../../components/InputContainer';
import { useUpdateDateAndPlaceMatch } from '../../hook';
import { DatePicker } from '../DatePicker';

export type PlaceAndDate = {
  place: string;
  date: Date;
};

export const SelectPlaceAndDateForm: React.FC = () => {
  const { t } = useTranslation();
  const updateDateAndPlaceMatch = useUpdateDateAndPlaceMatch();

  const { handleSubmit, register, control } = useForm<PlaceAndDate>({
    defaultValues: { date: new Date(), place: 'San Siro' },
  });

  return (
    <HStack
      as="form"
      w="3xl"
      alignItems="flex-end"
      onSubmit={handleSubmit(data => updateDateAndPlaceMatch(data))}
    >
      <InputContainer label={t('builderGame.preMatch.placeLabel')}>
        <Input {...register('place', { required: true })} />
      </InputContainer>
      <InputContainer label={t('builderGame.preMatch.dateLabel')}>
        <DatePicker control={control} />
      </InputContainer>
      <Button type="submit">
        {t('builderGame.preMatch.createMatchButton')}
      </Button>
    </HStack>
  );
};
