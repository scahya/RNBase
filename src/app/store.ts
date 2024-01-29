import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiSlice } from "../redux/features/api/apiSlice";

import { authApi } from "../redux/features/auth/authRtk";
import auth from "../redux/features/auth/authSlice";

import { commonApi } from "../redux/features/common/commonRtk";
import common from "../redux/features/common/commonSlice";

import { listenerMiddleware } from "../redux/listenerMiddleware";

export const store = configureStore({
  reducer: {
    auth,
    [authApi.reducerPath]: authApi.reducer,
    common,
    [commonApi.reducerPath]: commonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      listenerMiddleware.middleware
    ),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
