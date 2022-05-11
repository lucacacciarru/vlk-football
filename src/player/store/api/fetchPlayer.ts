import { FetchPlayerResponse } from "../types/fetchPlayer";
import wretch from "wretch";

export async function fetchPlayerApi(): Promise<FetchPlayerResponse> {
  const response: FetchPlayerResponse = await wretch(
    `${process.env.REACT_APP_API_URL}/players`
  )
    .get()
    .json();
  return response;
}
