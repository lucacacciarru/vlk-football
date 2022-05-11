import { CaseReducer } from "@reduxjs/toolkit";
import { FetchPlayerFailureAction } from "../../types/fetchPlayer";
import { PlayerState } from "../../types/general";

export const failureCase: CaseReducer<PlayerState, FetchPlayerFailureAction> = (
  state
) => ({
  ...state,
  data: {
    ...state.data,
    ...state.rollbackData,
  },
  rollbackData: undefined,
});
