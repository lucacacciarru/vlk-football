import { PayloadAction } from "@reduxjs/toolkit";
import { Player } from "./general";

export enum CREATE_PLAYER_ACTION {
  TRIGGER = "player/create/trigger",
  REQUEST = "player/create/request",
  SUCCESS = "player/create/success",
  FAILURE = "player/create/failure",
}

export type CreatePlayerResponse = Player;
export type CreatePlayerPayload = Player;
export type CreatePlayerSuccessPayload = Player;
export type CreatePlayerFailurePayload = {};

export type CreatePlayerAction = PayloadAction<
  CreatePlayerPayload,
  CREATE_PLAYER_ACTION.TRIGGER
>;

export type CreatePlayerRequestAction = PayloadAction<
  CreatePlayerPayload,
  CREATE_PLAYER_ACTION.REQUEST
>;

export type CreatePlayerSuccessAction = PayloadAction<
  CreatePlayerSuccessPayload,
  CREATE_PLAYER_ACTION.SUCCESS
>;

export type CreatePlayerFailureAction = PayloadAction<
  CreatePlayerFailurePayload,
  CREATE_PLAYER_ACTION.FAILURE
>;
