import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { COOMMON_SLICE_INITIAL_STATE } from "./constant/common-slice.constant";
import { ICommonInitialState } from "./interfaces/common-slice.interface";

const common = createSlice({
  name: "common",
  initialState: COOMMON_SLICE_INITIAL_STATE,
  reducers: {
    SET_COMMON: (
      state,
      { payload: { todo } }: PayloadAction<ICommonInitialState>
    ): void => {
      state.todo = todo;
    },
  },
});

export const { SET_COMMON } = common.actions;

const commonReducer = common.reducer;

export default commonReducer;
