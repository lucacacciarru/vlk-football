import { Player, usePostPlayerMutation } from '../../../player/store';
import { ControllerProps, useForm } from 'react-hook-form';
import { Checkbox, StackProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';

type DataPlayer = Omit<Player, 'id' | 'sports'>;
type LabelAndError = { label: string; errorMessage?: string };
const defaultValues: DataPlayer = {
  name: 'Giacomino',
  rating: 8,
  goalkeeper: false,
  description: "Let's go",
};

export function useAddPlayerForm(onClose: () => void) {
  const { t } = useTranslation();
  const [addPlayer] = usePostPlayerMutation();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<DataPlayer>({ defaultValues });

  const nameInputProps = register('name', {
    required: true,
  });

  const ratingInputProps = register('rating', {
    required: true,
  });

  const avatarInputProps = register('avatar');

  const descriptionInputProps = register('description');

  const goalkeeperInputProps: ControllerProps<DataPlayer> = {
    name: 'goalkeeper',
    control,
    render: ({ field: { onChange, value, ref } }) => (
      <Checkbox
        onChange={onChange}
        textTransform="capitalize"
        ref={ref}
        isChecked={!!value}
      />
    ),
  };

  const playerData = watch();

  const labelAndErrorMessageMap: Record<keyof DataPlayer, LabelAndError> = {
    name: {
      label: t('builderGame.createPlayerModal.formLabels.name'),
      errorMessage: errors.name?.message,
    },
    avatar: {
      label: t('builderGame.createPlayerModal.formLabels.avatar'),
      errorMessage: errors.avatar?.message,
    },
    goalkeeper: {
      label: t('builderGame.createPlayerModal.formLabels.role'),
      errorMessage: errors.goalkeeper?.message,
    },
    rating: {
      label: t('builderGame.createPlayerModal.formLabels.rating'),
      errorMessage: errors.rating?.message,
    },
    description: {
      label: t('builderGame.createPlayerModal.formLabels.description'),
      errorMessage: errors.description?.message,
    },
  };

  const renderOptionRatings = useMemo(() => {
    const ratingsList: DataPlayer['rating'][] = [4, 8, 12, 16];
    return ratingsList.map(rate => (
      <option value={rate} key={rate} style={{ color: '#1b1b1b' }}>
        {t(`builderGame.createPlayerModal.ratings.${rate}`)}
      </option>
    ));
  }, [t]);

  const containerProps: StackProps = {
    py: '10',
    gap: '6',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDir: { base: 'column', lg: 'row' },
  };

  function addPlayerAndCloseModal(player: DataPlayer) {
    addPlayer({
      id: nanoid(),
      ...player,
    });
    onClose();
  }

  const translations = {
    confirmButtonLabel: t('builderGame.createPlayerModal.addPlayerButton'),
    namePlaceholder: t('builderGame.createPlayerModal.placeholders.name'),
    avatarPlaceholder: t('builderGame.createPlayerModal.placeholders.avatar'),
    descriptionPlaceholder: t(
      'builderGame.createPlayerModal.placeholders.description',
    ),
  };

  return {
    playerData,
    labelAndErrorMessageMap,
    containerProps,
    inputsPropsMap: {
      name: nameInputProps,
      rating: ratingInputProps,
      avatar: avatarInputProps,
      goalkeeper: goalkeeperInputProps,
      description: descriptionInputProps,
    },
    renderOptionRatings,
    translations,
    handleSubmit,
    addPlayerAndCloseModal,
    errors,
  };
}
