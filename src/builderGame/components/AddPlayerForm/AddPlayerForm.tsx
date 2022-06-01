import {
  Button,
  ButtonGroup,
  HStack,
  Input,
  ModalBody,
  ModalFooter,
  Select,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { PlayerCard } from '../../../_shared/components';
import { InputContainer } from '../InputContainer';
import { useAddPlayerForm } from './useAddPlayerForm';

type Props = {
  onClose: () => void;
};

export const AddPlayerForm: React.FC<Props> = ({ onClose }) => {
  const {
    inputsPropsMap,
    handleSubmit,
    playerData,
    labelAndErrorMessageMap,
    containerProps,
    renderOptionRatings,
    translations,
    addPlayerAndCloseModal,
  } = useAddPlayerForm(onClose);

  return (
    <>
      <ModalBody px="8" py="6">
        <form
          onSubmit={handleSubmit(data => {
            addPlayerAndCloseModal(data);
          })}
          style={{ width: '100%' }}
        >
          <HStack {...containerProps}>
            <PlayerCard id="test" {...playerData} />
            <SimpleGrid w="100%" columns={{ base: 1, lg: 2 }} spacing="8">
              <InputContainer {...labelAndErrorMessageMap.name}>
                <Input
                  placeholder={translations.namePlaceholder}
                  {...inputsPropsMap.name}
                />
              </InputContainer>
              <InputContainer {...labelAndErrorMessageMap.goalkeeper}>
                <Controller {...inputsPropsMap.goalkeeper} />
              </InputContainer>
              <InputContainer {...labelAndErrorMessageMap.rating}>
                <Select {...inputsPropsMap.rating}>
                  {renderOptionRatings}
                </Select>
              </InputContainer>
              <InputContainer {...labelAndErrorMessageMap.avatar}>
                <Input
                  placeholder={translations.avatarPlaceholder}
                  {...inputsPropsMap.avatar}
                />
              </InputContainer>

              <InputContainer {...labelAndErrorMessageMap.description}>
                <Textarea
                  placeholder={translations.descriptionPlaceholder}
                  {...inputsPropsMap.description}
                />
              </InputContainer>
            </SimpleGrid>
          </HStack>

          <ButtonGroup w="100%" justifyContent="center">
            <Button type="submit" data-testid="addPlayerButton">
              {translations.confirmButtonLabel}
            </Button>
          </ButtonGroup>
        </form>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
};
