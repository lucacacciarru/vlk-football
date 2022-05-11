import { call, put } from "redux-saga/effects";
import {
  createPlayerFailure,
  createPlayerRequest,
  createPlayerSuccess,
} from "../action/createPlayer";
import { createPlayerApi } from "../api";
import {
  CreatePlayerAction,
  CreatePlayerResponse,
} from "../types/createPlayer";

export function* createPlayerSaga(action: CreatePlayerAction) {
  yield put(createPlayerRequest(action.payload));
  try {
    const response: CreatePlayerResponse = yield call(
      createPlayerApi,
      action.payload
    );
    yield put(createPlayerSuccess(response));
  } catch (error) {
    yield put(createPlayerFailure({}));
  }
}
