import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addSelectedPlayers } from "../store/actions";

type SelectedPlayerParams = {
  availablePlayers: string[];
  selectedPlayers: string[];
};

export function useUpdateChosenPlayers() {
  const dispatch = useDispatch();
  return useCallback(
    (playersList: SelectedPlayerParams) =>
      dispatch(addSelectedPlayers(playersList)),
    [dispatch]
  );
}
