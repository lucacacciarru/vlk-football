import { CreatePlayerResponse } from "../types/createPlayer";
import { Player } from "../types/general";
import wretch from "wretch";

export async function createPlayerApi(
  player: Player
): Promise<CreatePlayerResponse> {
  wretch(`${process.env.REACT_APP_API_URL}/players`).post(player);
  return player;
}
