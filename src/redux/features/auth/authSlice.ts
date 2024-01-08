import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AUTH_SLICE_INITIAL_STATE } from "./constant/auth-slice.constant";
import {
  IAuthAuthenticatedUser,
  IAuthToken,
  IAuthRegisterForm,
} from "./interfaces/auth.interface";

const auth = createSlice({
  name: "auth",
  initialState: AUTH_SLICE_INITIAL_STATE,
  reducers: {
    auth_SET_TOKEN: (
      state,
      { payload: { token, refreshToken, member } }: PayloadAction<IAuthToken>
    ): void => {
      state.auth_token.token = token;
    },
    auth_SET_PROFILE: (state, { payload: { member } }): void => {
      state.auth_authenticatedUser = member;
    },
    auth_SET_TRUE_AUTHENTICATED: (state) => {
      state.isAuthenticated = true;
    },
    auth_SET_TRUE_GUEST: (state) => {
      state.isLoginAsGuest = true;
    },
    auth_SET_AUTHENTICATED_USER: (
      state,
      { payload }: PayloadAction<IAuthAuthenticatedUser>
    ): void => {
      state.auth_authenticatedUser = payload;
    },
    auth_SET_REGISTER_USER: (
      state,
      { payload }: PayloadAction<IAuthRegisterForm>
    ): void => {
      state.auth_registerForm = payload;
    },
    auth_LOGOUT: (state) => {
      state.auth_token = AUTH_SLICE_INITIAL_STATE.auth_token;
      state.auth_authenticatedUser =
        AUTH_SLICE_INITIAL_STATE.auth_authenticatedUser;
      state.isAuthenticated = false;
      state.isLoginAsGuest = false;
    },
  },
});

export const {
  auth_SET_TOKEN,
  auth_SET_AUTHENTICATED_USER,
  auth_LOGOUT,
  auth_SET_REGISTER_USER,
  auth_SET_TRUE_AUTHENTICATED,
  auth_SET_PROFILE,
  auth_SET_TRUE_GUEST,
} = auth.actions;

const authReducer = auth.reducer;

export default authReducer;
