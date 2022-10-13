import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Player } from '../../../_shared/types';

type DataPlayer = Omit<Player, 'id'>;
const defaultValues: DataPlayer = {
  name: '',
  rating: 8,
  roles: {
    CM: false,
    DE: false,
    GK: false,
    ST: true,
  },
  description: '',
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
  const [roleErrorString, setRoleErrorString] = useState<string>();

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

  const selectedRolesLength = useMemo(() => {
    const playerRolesValues = Object.values(playerData.roles);
    return playerRolesValues.filter(role => role).length;
  }, [playerData]);

  const checkIfRulesAreChecked = useCallback(() => {
    if (selectedRolesLength === 0) {
      setRoleErrorString(
        t('builderGame.createPlayerModal.errors.roles.unchecked'),
      );

      return false;
    }
    return true;
  }, [selectedRolesLength, t]);

  const checkIfTooManyRolesAreChecked = useCallback(() => {
    if (selectedRolesLength > 2) {
      setRoleErrorString(
        t('builderGame.createPlayerModal.errors.roles.tooManyChecked'),
      );
      return false;
    }
    return true;
  }, [selectedRolesLength, t]);

  const validateRolesCheckMap: Record<string, () => boolean> = useMemo(
    () => ({
      checkIfRulesAreChecked,
      checkIfTooManyRolesAreChecked,
    }),
    [checkIfRulesAreChecked, checkIfTooManyRolesAreChecked],
  );

  const allRuleChecksPassed = useMemo(() => {
    const validateRulesMap = Object.values(validateRolesCheckMap);
    return validateRulesMap.map(checkFn => checkFn()).some(check => !check);
  }, [validateRolesCheckMap]);

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
    validateRolesCheckMap,
    allRuleChecksPassed,
    roleErrorString,
  };
}
