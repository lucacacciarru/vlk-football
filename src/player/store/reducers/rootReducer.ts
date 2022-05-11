import { createReducer } from "@reduxjs/toolkit";
import {
  createPlayerFailure,
  createPlayerRequest,
  createPlayerSuccess,
} from "../action/createPlayer";
import {
  fetchPlayerFailure,
  fetchPlayerSuccess,
  fetchPlayerRequest,
} from "../action/fetchPlayer";
import { PlayerState } from "../types/general";
import * as createPersonaCase from "./createPlayerCase";
import * as fetchPersonaCase from "./fetchPlayerCase";

const INITIAL_STATE: PlayerState = {
  data: {
    allIds: [],
    byId: {},
  },
};

export const playerRootReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(createPlayerRequest, createPersonaCase.requestCase)
    .addCase(createPlayerSuccess, createPersonaCase.successCase)
    .addCase(createPlayerFailure, createPersonaCase.failureCase)
    .addCase(fetchPlayerSuccess, fetchPersonaCase.successCase)
    .addCase(fetchPlayerRequest, fetchPersonaCase.requestCase)
    .addCase(fetchPlayerFailure, fetchPersonaCase.failureCase)
    .addDefaultCase((state) => state);
});
