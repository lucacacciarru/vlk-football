import {
  Button,
  ButtonGroup,
  HStack,
  ModalBody,
  ModalFooter,
  SimpleGrid,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { PlayerCard } from '../../../_shared/components';
import { SelectInput, TextAreaInput, TextInput } from '../FormFields';

export const AddPlayerForm: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <ModalBody px="8">
        <HStack
          py="10"
          gap="6"
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <PlayerCard
            goalkeeper
            id="test"
            name="Luca"
            avatar="https://avatars.githubusercontent.com/u/86778250?v=4"
            rating={12}
          />
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="8">
            <TextInput
              label={t('builderGame.createPlayerModal.formLabels.name')}
            />
            <SelectInput
              label={t('builderGame.createPlayerModal.formLabels.rating')}
              options={[1, 2]}
            />
            <TextInput
              label={t('builderGame.createPlayerModal.formLabels.avatar')}
            />
            <SelectInput
              label={t('builderGame.createPlayerModal.formLabels.role')}
              options={[1, 2]}
            />
            <TextAreaInput
              label={t('builderGame.createPlayerModal.formLabels.description')}
            />
          </SimpleGrid>
        </HStack>
      </ModalBody>
      <ModalFooter>
        <ButtonGroup w="100%" justifyContent="center">
          <Button>{t('builderGame.createPlayerModal.addPlayerButton')}</Button>
        </ButtonGroup>
      </ModalFooter>
    </>
  );
};
