import { Dispatch } from 'react';

import { IUser } from 'src/interfaces/user';
import { history } from 'src/screens/app/app.component';

import { SIGN_IN, FETCH_USER, LOGOUT_USER, AuthActionTypes } from './types';

export const signIn = () => (dispatch: Dispatch<AuthActionTypes>) => {
  const user: IUser = {
    firstName: 'Matt',
  };

  dispatch({
    type: SIGN_IN,
    payload: {
      user,
      token: 'TOKEN_EXAMPLE',
    },
  });

  history.push('/painel/');
};

export const fetchUser = () => (dispatch: Dispatch<AuthActionTypes>) => {
  dispatch({
    type: FETCH_USER,
    payload: {
      firstName: 'Matt',
    },
  });
};

export const logout = () => (dispatch: Dispatch<AuthActionTypes>) => {
  dispatch({
    type: LOGOUT_USER,
  });

  history.push('/');
};
