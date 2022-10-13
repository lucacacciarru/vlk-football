import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  HStack,
  Input,
  ModalBody,
  Select,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { usePostPlayerMutation } from '../../../player/store';
import { PlayerCard } from '../../../_shared/components';
import { useGetRoleList } from '../../../_shared/hook';
import { MatchType, Player } from '../../../_shared/types';
import { matchTypeMap } from '../../utils/matchTypeMap';
import { InputContainer } from '../InputContainer';
import { useAddPlayerForm } from './useAddPlayerForm';

type Props = {
  onClose: () => void;
};

export const AddPlayerForm: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();
  const [addPlayer] = usePostPlayerMutation();
  const allMatchTypes = Object.keys(matchTypeMap);
  const allRoleList = useGetRoleList();
  const {
    inputsPropsMap,
    handleSubmit,
    playerData,
    errors,
    control,
    checkMatchTypeCheckbox,
    validateRolesCheckMap,
    allRuleChecksPassed,
    roleErrorString,
  } = useAddPlayerForm();

  const renderRolesOptions = useMemo(() => {
    return allRoleList.map(role => (
      <Controller
        name={`roles.${role}`}
        control={control}
        rules={{
          validate: validateRolesCheckMap,
        }}
        key={role}
        render={({ field: { onChange, value, ref } }) => (
          <Checkbox
            color="white.0"
            marginInlineStart="0"
            onChange={onChange}
            isChecked={value}
            ref={ref}
          >
            {t(`playerRoles.abbreviation.${role}`)}
          </Checkbox>
        )}
      />
    ));
  }, [allRoleList, control, t, validateRolesCheckMap]);

  const renderOptionRatings = useMemo(() => {
    const ratingsList: Player['rating'][] = [4, 8, 12, 16];
    return ratingsList.map(rate => (
      <option value={rate} key={rate} style={{ color: '#1b1b1b' }}>
        {t(`builderGame.createPlayerModal.ratings.${rate}`)}
      </option>
    ));
  }, [t]);

  const renderMatchTypeOptions = useMemo(
    () =>
      allMatchTypes.map(matchType => (
        <Controller
          name={`possibleMatchTypes.${matchType as MatchType}`}
          control={control}
          rules={{ required: checkMatchTypeCheckbox }}
          key={matchType}
          render={({ field: { onChange, value, ref } }) => (
            <Checkbox
              color="white.0"
              marginInlineStart="0"
              onChange={onChange}
              isChecked={value}
              ref={ref}
            >
              {t(`matchType.${matchType as MatchType}`)}
            </Checkbox>
          )}
        />
      )),
    [allMatchTypes, checkMatchTypeCheckbox, control, t],
  );

  function addPlayerAndCloseModal(playerWithoutId: Omit<Player, 'id'>) {
    addPlayer({
      id: nanoid(),
      ...playerWithoutId,
      rating: +playerWithoutId.rating as Player['rating'],
    });
    onClose();
  }

  return (
    <>
      <ModalBody px="8" py="6">
        <form
          onSubmit={handleSubmit(data => {
            addPlayerAndCloseModal(data);
          })}
          style={{ width: '100%' }}
        >
          <HStack
            py="10"
            gap="6"
            alignItems="center"
            justifyContent="space-between"
            flexDir={{ base: 'column', lg: 'row' }}
          >
            <PlayerCard {...playerData} id="builtPlayer" />
            <SimpleGrid w="100%" columns={{ base: 1, lg: 2 }} spacing="8">
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.name')}
                error={errors.name}
              >
                <Input
                  placeholder={t(
                    'builderGame.createPlayerModal.placeholders.name',
                  )}
                  data-testid="nameInput"
                  {...inputsPropsMap.name}
                />
              </InputContainer>
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.roles')}
                isInvalid={allRuleChecksPassed}
                error={{
                  type: 'required',
                  message: roleErrorString,
                }}
              >
                <CheckboxGroup>
                  <HStack gap="6">{renderRolesOptions}</HStack>
                </CheckboxGroup>
              </InputContainer>
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.rating')}
              >
                <Select {...inputsPropsMap.rating}>
                  {renderOptionRatings}
                </Select>
              </InputContainer>
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.avatar')}
              >
                <Input
                  placeholder={t(
                    'builderGame.createPlayerModal.placeholders.avatar',
                  )}
                  {...inputsPropsMap.avatar}
                />
              </InputContainer>

              <InputContainer
                label={t(
                  'builderGame.createPlayerModal.formLabels.description',
                )}
              >
                <Textarea
                  placeholder={t(
                    'builderGame.createPlayerModal.placeholders.description',
                  )}
                  {...inputsPropsMap.description}
                />
              </InputContainer>
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.matchType')}
                isInvalid={checkMatchTypeCheckbox}
                error={{
                  type: 'required',
                  message: t('builderGame.createPlayerModal.errors.matchType'),
                }}
              >
                <CheckboxGroup>
                  <SimpleGrid gap="6" columns={2}>
                    {renderMatchTypeOptions}
                  </SimpleGrid>
                </CheckboxGroup>
              </InputContainer>
            </SimpleGrid>
          </HStack>
          <Flex w="full" justifyContent="center">
            <Button type="submit" data-testid="addPlayerButton">
              {t('builderGame.createPlayerModal.addPlayerButton')}
            </Button>
          </Flex>
        </form>
      </ModalBody>
    </>
  );
};
