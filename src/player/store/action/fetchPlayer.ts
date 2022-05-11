import { createAction } from "@reduxjs/toolkit";
import {
  FetchPlayerFailurePayload,
  FetchPlayerSuccessPayload,
  FETCH_PLAYER_ACTION,
} from "../types/fetchPlayer";

export const fetchPlayerTrigger = createAction(FETCH_PLAYER_ACTION.TRIGGER);

export const fetchPlayerRequest = createAction(FETCH_PLAYER_ACTION.REQUEST);

export const fetchPlayerSuccess = createAction<
  FetchPlayerSuccessPayload,
  FETCH_PLAYER_ACTION.SUCCESS
>(FETCH_PLAYER_ACTION.SUCCESS);

export const fetchPlayerFailure = createAction<
  FetchPlayerFailurePayload,
  FETCH_PLAYER_ACTION.FAILURE
>(FETCH_PLAYER_ACTION.FAILURE);
