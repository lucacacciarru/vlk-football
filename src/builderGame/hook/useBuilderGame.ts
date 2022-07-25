import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Sports } from '../../_shared/types';
import {
  addSelectedPlayers,
  createMatchTeams,
  updateDateAndPlaceMatch,
  updateGameMode,
} from '../store/actions';
import { MatchTeams } from '../store/types';
import { DateAndPlaceMatch } from '../types';

type SelectedPlayerParams = {
  availablePlayers: string[];
  selectedPlayers: string[];
};

export function useUpdateChosenPlayers() {
  const dispatch = useDispatch();
  return useCallback(
    (playersList: SelectedPlayerParams) =>
      dispatch(addSelectedPlayers(playersList)),
    [dispatch],
  );
}

export function useCreateTeams() {
  const dispatch = useDispatch();
  return useCallback(
    (teams: MatchTeams) => dispatch(createMatchTeams(teams)),
    [dispatch],
  );
}

export function useUpdateDateAndPlaceMatch() {
  const dispatch = useDispatch();
  return useCallback(
    (placeAndDate: DateAndPlaceMatch) =>
      dispatch(updateDateAndPlaceMatch(placeAndDate)),
    [dispatch],
  );
}

export function useUpdateSelectedMode() {
  const dispatch = useDispatch();
  return useCallback(
    (mode: Sports) => dispatch(updateGameMode(mode)),
    [dispatch],
  );
}
