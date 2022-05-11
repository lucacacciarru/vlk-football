import { PayloadAction, Action } from "@reduxjs/toolkit";
import { Player } from "./general";

export enum FETCH_PLAYER_ACTION {
  TRIGGER = "player/fetch/trigger",
  REQUEST = "player/fetch/request",
  SUCCESS = "player/fetch/success",
  FAILURE = "player/fetch/failure",
}

export type FetchPlayerResponse = Player[];
export type FetchPlayerPayload = undefined;
export type FetchPlayerSuccessPayload = Player[];
export type FetchPlayerFailurePayload = {};

export type FetchPlayerAction = Action<FETCH_PLAYER_ACTION.TRIGGER>;
export type FetchPlayerRequestAction = Action<FETCH_PLAYER_ACTION.REQUEST>;

export type FetchPlayerSuccessAction = PayloadAction<
  FetchPlayerSuccessPayload,
  FETCH_PLAYER_ACTION.SUCCESS
>;

export type FetchPlayerFailureAction = PayloadAction<
  FetchPlayerFailurePayload,
  FETCH_PLAYER_ACTION.FAILURE
>;
