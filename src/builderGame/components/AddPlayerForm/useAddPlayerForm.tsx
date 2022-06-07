import { Player } from '../../../player/store';
import { useForm } from 'react-hook-form';

type DataPlayer = Omit<Player, 'id' | 'sports'>;
const defaultValues: DataPlayer = {
  name: 'Franco',
  rating: 8,
  goalkeeper: false,
  description: "Let's go",
};

export function useAddPlayerForm() {
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

  const playerData = watch();

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
  };
}
