export interface IAuthToken {
  token: string | null;
  refreshToken: string | null;
  member?: IAuthAuthenticatedUser;
}

export interface IMember {
  member: IAuthAuthenticatedUser;
}

export interface IAuthAuthenticatedUser {
  id: string;
  name: string;
  username: string;
  phone: string;
  address: string;
}

export interface IAuthLoginForm {
  username: string;
  password: string;
}

export interface IAuthRegisterForm {
  name: string;
  username: string;
  phone: string;
  password: string;
}
