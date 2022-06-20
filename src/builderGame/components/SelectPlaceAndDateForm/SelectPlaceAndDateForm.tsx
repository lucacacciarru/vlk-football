import { Button, HStack, Input } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { InputContainer } from '../../components/InputContainer';
import { useGetTeams, useUpdateDateAndPlaceMatch } from '../../hook';
import { DateAndPlaceMatch } from '../../types';
import { usePostMatchMutation } from '../../../match/store';
import { useGenerateId } from '../../../_shared/hook';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../_shared/types';

export const SelectPlaceAndDateForm: React.FC = () => {
  const { t } = useTranslation();
  const teams = useGetTeams();
  const [addMatch] = usePostMatchMutation();
  const idMatch = useGenerateId();
  const navigate = useNavigate();
  const updateDateAndPlaceMatch = useUpdateDateAndPlaceMatch();

  const { handleSubmit, register } = useForm<DateAndPlaceMatch>({
    defaultValues: { date: '', place: 'San Siro' },
  });

  const onSubmit = useCallback(
    (data: DateAndPlaceMatch) => {
      updateDateAndPlaceMatch(data);
      addMatch({ id: idMatch, teams, ...data });
      navigate(`/${PATHS.MATCH}/${idMatch}`);
    },
    [addMatch, idMatch, navigate, teams, updateDateAndPlaceMatch],
  );

  return (
    <HStack
      as="form"
      w={{ base: '100%', lg: '3xl' }}
      alignItems="flex-end"
      onSubmit={handleSubmit(onSubmit)}
      flexDir={{ base: 'column', md: 'row' }}
      gap={{ base: '8', md: '4' }}
    >
      <InputContainer label={t('builderGame.preMatch.placeLabel')}>
        <Input
          {...register('place', { required: true })}
          data-testid="inputPlace"
        />
      </InputContainer>
      <InputContainer label={t('builderGame.preMatch.dateLabel')}>
        <Input
          type="date"
          {...register('date', { required: true })}
          data-testid="inputDate"
        />
      </InputContainer>
      <Button type="submit" w={{ base: '100%', lg: 'initial' }}>
        {t('builderGame.preMatch.createMatchButton')}
      </Button>
    </HStack>
  );
};
