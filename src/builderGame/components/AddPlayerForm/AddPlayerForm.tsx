import {
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
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

  const { inputsPropsMap, handleSubmit, playerData, errors, control } =
    useAddPlayerForm();

  const renderOptionRatings = useMemo(() => {
    const ratingsList: Player['rating'][] = [4, 8, 12, 16];
    return ratingsList.map(rate => (
      <option value={rate} key={rate} style={{ color: '#1b1b1b' }}>
        {t(`builderGame.createPlayerModal.ratings.${rate}`)}
      </option>
    ));
  }, [t]);

  const checkMatchTypeCheckbox = useMemo(() => {
    const checkboxValues = Object.values(playerData.possibleMatchTypes);
    return checkboxValues.every(value => !value);
  }, [playerData]);

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
            <PlayerCard id="test" {...playerData} />
            <SimpleGrid w="100%" columns={{ base: 1, lg: 2 }} spacing="8">
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.name')}
                errorMessage={errors.name?.message}
              >
                <Input
                  placeholder={t(
                    'builderGame.createPlayerModal.placeholders.name',
                  )}
                  {...inputsPropsMap.name}
                />
              </InputContainer>
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.role')}
                errorMessage={errors.goalkeeper?.message}
              >
                <Controller
                  name="goalkeeper"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Checkbox
                      onChange={onChange}
                      textTransform="capitalize"
                      ref={ref}
                      isChecked={!!value}
                    />
                  )}
                />
              </InputContainer>
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.rating')}
                errorMessage={errors.rating?.message}
              >
                <Select {...inputsPropsMap.rating}>
                  {renderOptionRatings}
                </Select>
              </InputContainer>
              <InputContainer
                label={t('builderGame.createPlayerModal.formLabels.avatar')}
                errorMessage={errors.avatar?.message}
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
                errorMessage={errors.description?.message}
              >
                <Textarea
                  placeholder={t(
                    'builderGame.createPlayerModal.placeholders.description',
                  )}
                  {...inputsPropsMap.description}
                />
              </InputContainer>
              <InputContainer
                label={t(
                  'builderGame.createPlayerModal.formLabels.description',
                )}
                errorMessage={errors.possibleMatchTypes?.message}
              >
                <CheckboxGroup>
                  <SimpleGrid gap="6" columns={2}>
                    {renderMatchTypeOptions}
                  </SimpleGrid>
                </CheckboxGroup>
              </InputContainer>
            </SimpleGrid>
          </HStack>

          <ButtonGroup w="100%" justifyContent="center">
            <Button type="submit" data-testid="addPlayerButton">
              {t('builderGame.createPlayerModal.addPlayerButton')}
            </Button>
          </ButtonGroup>
        </form>
      </ModalBody>
    </>
  );
};
