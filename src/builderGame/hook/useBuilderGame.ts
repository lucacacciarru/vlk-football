import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  addSelectedPlayers,
  createMatchTeams,
  updateDateAndPlaceMatch,
} from '../store/actions';
import { MatchTeams } from '../store/types';
import { formatDate } from '../utils';

type SelectedPlayerParams = {
  availablePlayers: string[];
  selectedPlayers: string[];
};

export type DateAndPlaceFields = {
  date: Date;
  place: string;
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
    (placeAndDate: DateAndPlaceFields) => {
      const dateToString = formatDate(placeAndDate.date);
      return dispatch(
        updateDateAndPlaceMatch({ ...placeAndDate, date: dateToString }),
      );
    },
    [dispatch],
  );
}
