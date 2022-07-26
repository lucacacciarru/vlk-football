import { useTranslation } from 'react-i18next';
import { LinkButton } from '../../../_shared/components';
import { PATHS } from '../../../_shared/types';
import { useGetMatchType } from '../../hook';

export const SelectModeButton: React.FC = () => {
  const { t } = useTranslation();
  const selectedMode = useGetMatchType();
  const isDisabled = selectedMode ? false : true;
  return (
    <LinkButton isDisabled={isDisabled} to={PATHS.CREATE_TEAM}>
      {t('builderGame.selectMode.buttonLabel')}
    </LinkButton>
  );
};
