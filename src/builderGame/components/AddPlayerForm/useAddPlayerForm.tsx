import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Player } from '../../../_shared/types';

type DataPlayer = Omit<Player, 'id'>;
const defaultValues: DataPlayer = {
  name: 'Franco',
  rating: 8,
  goalkeeper: false,
  description: "Let's go",
  possibleMatchTypes: {
    football: false,
    futsal: true,
    seven: false,
    three: false,
  },
};

export function useAddPlayerForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<DataPlayer>({ defaultValues });

  const nameInputProps = register('name', {
    required: t('builderGame.createPlayerModal.errors.name'),
  });

  const ratingInputProps = register('rating', {
    required: t('builderGame.createPlayerModal.errors.rating'),
  });

  const avatarInputProps = register('avatar');

  const descriptionInputProps = register('description');

  const playerData = watch();

  const checkMatchTypeCheckbox = useMemo(() => {
    const checkboxValues = Object.values(playerData.possibleMatchTypes);
    return checkboxValues.every(value => !value);
  }, [playerData]);

  return {
    playerData,
    inputsPropsMap: {
      name: nameInputProps,
      rating: ratingInputProps,
      avatar: avatarInputProps,
      description: descriptionInputProps,
    },
    handleSubmit,
    errors,
    control,
    checkMatchTypeCheckbox,
  };
}
