import React from 'react';
import { connect } from 'react-redux';

import { signIn } from 'src/store/auth/actions';

import { IProps } from './auth.type';

const AuthScreen: React.FC<IProps> = props => {
  const handleSignIn = () => {
    return props.signIn();
  };

  return (
    <>
      <p>
        Tela de login <button onClick={handleSignIn}>Entrar</button>
      </p>
    </>
  );
};

export default connect(undefined, { signIn })(AuthScreen);
