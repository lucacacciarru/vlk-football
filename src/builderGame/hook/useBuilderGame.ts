import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Match } from '../../match/store';
import { useGenerateId } from '../../_shared/hook';
import { MatchType } from '../../_shared/types';
import {
  addSelectedPlayers,
  createMatchTeams,
  removeSelectedPlayers,
  replayMatch,
  updateDateAndPlaceMatch,
  updateMatchType,
} from '../store/actions';
import { MatchTeams } from '../store/types';
import { DateAndPlaceMatch } from '../types';

export function useAddSelectedPlayer() {
  const dispatch = useDispatch();
  return useCallback(
    (playerId: string) => dispatch(addSelectedPlayers(playerId)),
    [dispatch],
  );
}

export function useRemoveSelectedPlayer() {
  const dispatch = useDispatch();
  return useCallback(
    (playerId: string) => dispatch(removeSelectedPlayers(playerId)),
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

export function useUpdateMatchType() {
  const dispatch = useDispatch();
  return useCallback(
    (mode: MatchType) => dispatch(updateMatchType(mode)),
    [dispatch],
  );
}

export function useReplayMatch() {
  const dispatch = useDispatch();
  const id = useGenerateId();
  return useCallback(
    (match: Match) =>
      dispatch(
        replayMatch({ matchType: match.matchType, teams: match.teams, id }),
      ),
    [dispatch, id],
  );
}
