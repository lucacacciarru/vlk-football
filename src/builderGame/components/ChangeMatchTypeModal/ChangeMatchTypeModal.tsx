import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { ChangeMatchTypeContent } from './ChangeMatchTypeContent';

export const ChangeMatchTypeModal: React.FC = () => {
  const { t } = useTranslation();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        variant="unstyledIcon"
        data-testid="openMatchTypeModal"
      >
        <Icon
          name="edit"
          color="white.80"
          size="6"
          _hover={{ color: 'white.0' }}
        />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <Text textStyle="h2" color="white.0">
              {t('builderGame.changeMatchTypeModal.title')}
            </Text>
            <Text textStyle="body-xs" fontWeight="normal">
              {t('builderGame.changeMatchTypeModal.subtitle')}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p="8">
            <ChangeMatchTypeContent onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
