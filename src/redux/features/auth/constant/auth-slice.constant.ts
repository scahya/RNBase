import { IAuthSliceInitialState } from "../interfaces/auth-slice.interface";

export const AUTH_SLICE_INITIAL_STATE: IAuthSliceInitialState = {
  auth_authenticatedUser: {
    id: "",
    name: "",
    username: "",
    phone: "",
    address: "",
  },
  auth_token: {
    token: null,
    refreshToken: null,
  },
  isAuthenticated: false,
  isLoginAsGuest: false,
};
