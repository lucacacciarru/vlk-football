import { createAction } from "@reduxjs/toolkit";
import {
  CreatePlayerFailurePayload,
  CreatePlayerPayload,
  CreatePlayerSuccessPayload,
  CREATE_PLAYER_ACTION,
} from "../types/createPlayer";

export const createPlayerTrigger = createAction<
  CreatePlayerPayload,
  CREATE_PLAYER_ACTION.TRIGGER
>(CREATE_PLAYER_ACTION.TRIGGER);

export const createPlayerRequest = createAction<
  CreatePlayerPayload,
  CREATE_PLAYER_ACTION.REQUEST
>(CREATE_PLAYER_ACTION.REQUEST);

export const createPlayerSuccess = createAction<
  CreatePlayerSuccessPayload,
  CREATE_PLAYER_ACTION.SUCCESS
>(CREATE_PLAYER_ACTION.SUCCESS);

export const createPlayerFailure = createAction<
  CreatePlayerFailurePayload,
  CREATE_PLAYER_ACTION.FAILURE
>(CREATE_PLAYER_ACTION.FAILURE);
