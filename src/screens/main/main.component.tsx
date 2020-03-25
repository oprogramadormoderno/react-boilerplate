import React from 'react';
import { connect } from 'react-redux';

import { logout } from 'src/store/auth/actions';

import { IProps } from './main.type';

const MainScreen: React.FC<IProps> = props => {
  const handleLogout = () => {
    return props.logout();
  };

  return (
    <>
      <p>
        Main screen <button onClick={handleLogout}>sair</button>
      </p>
    </>
  );
};

export default connect(undefined, { logout })(MainScreen);
