import { IUser } from 'src/interfaces/user';

export const SIGN_IN = 'SIGN_IN';
export const FETCH_USER = 'FETCH_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export interface IReducerAuthState {
  user?: IUser;
  token?: string;
}

export interface ISignIn {
  type: typeof SIGN_IN;
  payload: {
    token: string;
    user: IUser;
  };
}

export interface IFetchUser {
  type: typeof FETCH_USER;
  payload: IUser;
}

export interface ILogoutUser {
  type: typeof LOGOUT_USER;
}

export type AuthActionTypes = ISignIn | IFetchUser | ILogoutUser;
