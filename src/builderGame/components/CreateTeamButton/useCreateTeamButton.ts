import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetPlayerQuery } from '../../../player/store';
import { useCreateTeams } from '../../hook';
import { getSelectedPlayer } from '../../store/selectors';
import { generatesBalancedTeams } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../_shared/types';

export function useCreateTeamButton() {
  const history = useNavigate();
  const createMatchTeams = useCreateTeams();
  const { t } = useTranslation();

  const selectedPlayers = useSelector(getSelectedPlayer);
  const { playersIdAndRating } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data }) => ({
      playersIdAndRating: data
        ?.filter(item => selectedPlayers.includes(item.id))
        .map(player => ({ id: player.id, rating: player.rating })),
    }),
  });

  const buttonText = t('builderGame.playersPage.createTeamsButton');

  function createTeams() {
    const teams = generatesBalancedTeams(playersIdAndRating);
    createMatchTeams(teams);
    history(`/${PATHS.PRE_MATCH}`);
  }
  return { createTeams, buttonText };
}
