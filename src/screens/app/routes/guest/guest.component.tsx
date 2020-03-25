import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthClientScreen from 'screens/auth/auth.component';
// import NotFound from 'screens/main/404/404.component';

import { IProps } from './guest.type';

const GuestRoutes = (props: IProps) => {
  const GuestRoute = ({ component: Component, ...rest }: any) => {
    return (
      <Route
        {...rest}
        render={propsComponent =>
          !props.user ? (
            <Component {...propsComponent} />
          ) : (
            <Redirect to={{ pathname: '/painel/' }} />
          )
        }
      />
    );
  };

  return (
    <Switch>
      <GuestRoute path="/" exact component={AuthClientScreen} />
      {/* <GuestRoute component={NotFound} /> */}
    </Switch>
  );
};

export default GuestRoutes;
