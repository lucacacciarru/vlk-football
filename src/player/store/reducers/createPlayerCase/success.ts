import { CaseReducer } from "@reduxjs/toolkit";
import { CreatePlayerSuccessAction } from "../../types/createPlayer";
import { PlayerState } from "../../types/general";

export const successCase: CaseReducer<
  PlayerState,
  CreatePlayerSuccessAction
> = (state) => ({
  ...state,
  rollbackData: undefined,
});
