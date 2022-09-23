import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MatchType } from '../../../_shared/types';
import { useChangeSelectPlayersLength, useUpdateMatchType } from '../../hook';
import { matchTypeMap } from '../../utils/matchTypeMap';

type Props = {
  isAlertOpen: boolean;
  onCloseDialog: () => void;
  activeMatchType: MatchType;
  onCloseModal: () => void;
};

export const ChangeMatchTypeAlert: React.FC<Props> = ({
  isAlertOpen,
  onCloseDialog,
  activeMatchType,
  onCloseModal,
}) => {
  const { t } = useTranslation();
  const updateMatchType = useUpdateMatchType();
  const changeSelectPlayersLength = useChangeSelectPlayersLength();

  const { numberOfPlayers } = matchTypeMap[activeMatchType];

  function onClickConfirm() {
    changeSelectPlayersLength(numberOfPlayers);
    updateMatchType(activeMatchType);
    onCloseDialog();
    onCloseModal();
  }

  const cancelRef = useRef(null);
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      motionPreset="slideInBottom"
      onClose={onCloseDialog}
      isOpen={isAlertOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent data-testid="changeMatchTypeAlert">
        <AlertDialogHeader>
          {t('builderGame.changeMatchTypeAlert.title')}
        </AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          {t('builderGame.changeMatchTypeAlert.body')}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button variant="outline" onClick={onCloseDialog}>
            {t('builderGame.changeMatchTypeAlert.cancelButton')}
          </Button>

          <Button
            ml={3}
            onClick={onClickConfirm}
            data-testid="confirmButton"
            ref={cancelRef}
          >
            {t('builderGame.changeMatchTypeAlert.confirmButton')}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
