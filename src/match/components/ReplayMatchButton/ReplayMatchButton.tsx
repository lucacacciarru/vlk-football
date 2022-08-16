import { Button } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useReplayMatch } from '../../../builderGame/hook';
import { PATHS } from '../../../_shared/types';
import { useGetSingleMatch } from '../../hook';

export const ReplayMatchButton: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const match = useGetSingleMatch(id as string);
  const replayMatch = useReplayMatch();
  const replaySelectMatch = useCallback(() => {
    if (match) {
      replayMatch(match);
      navigate(`/${PATHS.PRE_MATCH}`);
    }
  }, [match, navigate, replayMatch]);

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={replaySelectMatch}
      data-testid="replayButton"
    >
      {t('match.matchInfo.replayButton')}
    </Button>
  );
};
