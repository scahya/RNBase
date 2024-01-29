import { ICommonInitialState } from "../interfaces/common-slice.interface";

export const COOMMON_SLICE_INITIAL_STATE: ICommonInitialState = {
  todo: {
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  },
};
