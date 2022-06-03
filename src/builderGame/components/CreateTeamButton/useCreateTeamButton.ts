import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useGetPlayerQuery } from '../../../player/store';
import { useCreateTeams } from '../../hook';
import { getSelectedPlayer } from '../../store/selectors';
import { generatesBalancedTeams } from '../../utils';

export function useCreateTeamButton() {
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
  }
  return { createTeams, buttonText };
}
