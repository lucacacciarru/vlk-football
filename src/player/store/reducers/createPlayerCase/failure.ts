import { CaseReducer } from "@reduxjs/toolkit";
import { CreatePlayerFailureAction } from "../../types/createPlayer";
import { PlayerState } from "../../types/general";

export const failureCase: CaseReducer<
  PlayerState,
  CreatePlayerFailureAction
> = (state) => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
