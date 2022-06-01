import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { AddPlayerForm } from '../AddPlayerForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddPlayerModalContent: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior="inside"
      size={{ base: 'full', md: '5xl' }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">
          <Text textStyle="h2" as="h2">
            {t('builderGame.createPlayerModal.title')}
          </Text>
          <Text textStyle="body-xs" fontWeight="normal" color="white.50">
            {t('builderGame.createPlayerModal.body')}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <AddPlayerForm onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};
