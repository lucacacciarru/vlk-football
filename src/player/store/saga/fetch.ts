import { call, put } from "redux-saga/effects";
import { createPlayerFailure } from "../action/createPlayer";
import { fetchPlayerRequest, fetchPlayerSuccess } from "../action/fetchPlayer";
import { fetchPlayerApi } from "../api";
import { FetchPlayerResponse } from "../types/fetchPlayer";

export function* fetchPlayerSaga() {
  yield put(fetchPlayerRequest());
  try {
    const response: FetchPlayerResponse = yield call(fetchPlayerApi);
    yield put(fetchPlayerSuccess(response));
  } catch (error) {
    yield put(createPlayerFailure({}));
  }
}
