import { useDispatch } from "react-redux";
import { addSelectedPlayers } from "../store/actions";

export function useBuilderGame() {
  const dispatch = useDispatch();

  function selectPlayers(selectedPlayersId: string[]) {
    dispatch(addSelectedPlayers(selectedPlayersId));
  }

  return {
    selectPlayers,
  };
}
