import { Button } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '../../../_shared/components';
import { MatchType } from '../../../_shared/types';
import { useUpdateMatchType } from '../../hook';

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

  const onClick = useCallback(() => {
    updateMatchType(activeMatchType);
    onClose();
    return;
  }, [activeMatchType, onClose, updateMatchType]);

  return (
    <Button
      gap="2"
      mt="12"
      onClick={onClick}
      data-testid="changeMatchTypeButton"
    >
      {t('builderGame.changeMatchTypeModal.buttonLabel')}
      <Icon name="edit" size="6" />
    </Button>
  );
};
