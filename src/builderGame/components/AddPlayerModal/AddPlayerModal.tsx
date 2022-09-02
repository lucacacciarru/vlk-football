import { Button, Text, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { AddPlayerModalContent } from './AddPlayerModalContent';

export const AddPlayerModal: React.FC = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        h="40"
        w="full"
        bg="black.80"
        borderRadius="lg"
        minH="20"
        onClick={onOpen}
        _hover={{
          bg: 'black.80',
          border: '1px solid',
          borderColor: 'white.80',
        }}
      >
        <Icon name="add" size="6" color="white.0" mr="2" />
        <Text> {t('builderGame.createPlayerModal.openButtonLabel')}</Text>
      </Button>
      <AddPlayerModalContent isOpen={isOpen} onClose={onClose} />
    </>
  );
};
