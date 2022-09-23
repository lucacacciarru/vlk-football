import { Button, useDisclosure } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { MatchType } from '../../../_shared/types';
import { useGetChosenPlayers, useUpdateMatchType } from '../../hook';
import { matchTypeMap } from '../../utils/matchTypeMap';
import { ChangeMatchTypeAlert } from '../ChangeMatchTypeAlert';

type Props = {
  onClose: () => void;
  activeMatchType: MatchType;
};

export const ChangeMatchTypeButton: React.FC<Props> = ({
  activeMatchType,
  onClose,
}) => {
  const { t } = useTranslation();
  const updateMatchType = useUpdateMatchType();
  const { selectedPlayers } = useGetChosenPlayers();
  const { numberOfPlayers: activeNumberOfPlayer } =
    matchTypeMap[activeMatchType];

  const {
    isOpen: isDialogOpen,
    onOpen: onOpenDialog,
    onClose: onCloseDialog,
  } = useDisclosure();

  const selectPlayerAreMoreThanConsented = useMemo(
    () => selectedPlayers.length > activeNumberOfPlayer,
    [activeNumberOfPlayer, selectedPlayers.length],
  );

  const onClick = useCallback(() => {
    if (selectPlayerAreMoreThanConsented) {
      onOpenDialog();
      return;
    }
    updateMatchType(activeMatchType);
    onClose();
  }, [
    activeMatchType,
    onClose,
    onOpenDialog,
    selectPlayerAreMoreThanConsented,
    updateMatchType,
  ]);

  return (
    <>
      <Button
        gap="2"
        mt="12"
        onClick={onClick}
        data-testid="changeMatchTypeButton"
      >
        {t('builderGame.changeMatchTypeModal.buttonLabel')}
        <Icon name="edit" size="6" />
      </Button>
      <ChangeMatchTypeAlert
        onCloseDialog={onCloseDialog}
        activeMatchType={activeMatchType}
        isAlertOpen={isDialogOpen}
        onCloseModal={onClose}
      />
    </>
  );
};
