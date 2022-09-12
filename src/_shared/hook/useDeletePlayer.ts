import { useDeletePlayerMutation } from '../../player/store';

export function useDeletePlayer() {
  const [deletePlayer] = useDeletePlayerMutation();
  return deletePlayer;
}
