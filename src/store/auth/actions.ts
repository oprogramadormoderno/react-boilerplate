import { Dispatch } from 'react';

import { SIGN_IN, FETCH_USER, LOGOUT_USER, AuthActionTypes } from './types';

export const signIn = () => (dispatch: Dispatch<AuthActionTypes>) => {
  dispatch({
    type: SIGN_IN,
    payload: {
      token: 'TOKEN_EXAMPLE',
      user: {
        firstName: 'Matt',
      },
    },
  });
};

export const fetchUser = () => (dispatch: Dispatch<AuthActionTypes>) => {
  dispatch({
    type: FETCH_USER,
    payload: {
      token: 'TOKEN_EXAMPLE',
      user: {
        firstName: 'Matt',
      },
    },
  });
};
