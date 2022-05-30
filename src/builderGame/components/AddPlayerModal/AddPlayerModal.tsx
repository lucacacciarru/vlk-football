import { IconButton, useDisclosure } from '@chakra-ui/react';
import { Icon } from '../../../_shared/components';
import { AddPlayerModalContent } from './AddPlayerModalContent';

export const AddPlayerModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        position="absolute"
        top="-5%"
        right="-5%"
        aria-label="test"
        minW="14"
        minH="14"
        borderRadius="full"
        icon={<Icon name="add" boxSize="6" />}
        onClick={onOpen}
      />
      <AddPlayerModalContent isOpen={isOpen} onClose={onClose} />
    </>
  );
};
