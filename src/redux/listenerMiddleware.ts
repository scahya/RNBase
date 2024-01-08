import {
  createListenerMiddleware,
  isAnyOf,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { auth_SET_TOKEN, auth_LOGOUT } from "./features/auth/authSlice";
import { save, remove } from "../utils/local_storage";

import type { RootState, AppDispatch } from "../app/store";

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

startAppListening({
  matcher: isAnyOf(auth_SET_TOKEN),
  effect: (action, listenerApi) => {
    save("TOKEN", listenerApi.getState().auth.auth_token.token);
  },
});

startAppListening({
  matcher: isAnyOf(auth_LOGOUT),
  effect: (action, listenerApi) => {
    remove("TOKEN");
  },
});
