import { useSelector } from 'react-redux';
import { useGetPlayerQuery } from '../../../player/store';
import { useCreateTeams } from '../../hook';
import { getSelectedPlayer } from '../../store/selectors';
import { generatesBalancedTeams } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../_shared/types';

function useSelectedPlayers() {
  const selectedPlayers = useSelector(getSelectedPlayer);
  const { fullSelectedPlayers } = useGetPlayerQuery(undefined, {
    selectFromResult: ({ data = [] }) => {
      return {
        fullSelectedPlayers: data.filter(item =>
          selectedPlayers.includes(item.id),
        ),
      };
    },
  });

  return fullSelectedPlayers;
}

export function useCreateTeamButton() {
  const selectedPlayers = useSelectedPlayers();
  const navigate = useNavigate();
  const createMatchTeams = useCreateTeams();

  function createTeams() {
    const teams = generatesBalancedTeams(selectedPlayers);
    createMatchTeams(teams);
    navigate(`/${PATHS.PRE_MATCH}`);
  }
  return { createTeams };
}
