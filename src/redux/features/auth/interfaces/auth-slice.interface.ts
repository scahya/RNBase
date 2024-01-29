// Interfaces
import {
  IAuthToken,
  IAuthAuthenticatedUser,
  IAuthRegisterForm,
} from "./auth.interface";

export interface IAuthSliceInitialState {
  auth_token: IAuthToken;
  auth_authenticatedUser: IAuthAuthenticatedUser;
  isAuthenticated: boolean; //For pin or second authentication
  auth_registerForm?: IAuthRegisterForm;
  isLoginAsGuest: boolean;
}
