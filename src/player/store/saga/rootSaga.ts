import { takeLatest } from "redux-saga/effects";
import { createPlayerTrigger } from "../action/createPlayer";
import { fetchPlayerTrigger } from "../action/fetchPlayer";
import { createPlayerSaga } from "./create";
import { fetchPlayerSaga } from "./fetch";

export function* playerRootSaga() {
  yield takeLatest(createPlayerTrigger, createPlayerSaga);
  yield takeLatest(fetchPlayerTrigger, fetchPlayerSaga);
}
