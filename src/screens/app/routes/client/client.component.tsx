import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainScreen from 'screens/main/main.component';
import NotFound from 'screens/main/404/404.component';

import { IProps } from './client.type';

const ClientRoutes = (props: IProps) => {
  const ClientRoute = ({ component: Component, ...rest }: any) => {
    const hasAccess = !!props.user;

    return (
      <Route
        {...rest}
        render={propsComponent => {
          return hasAccess ? (
            <Component {...propsComponent} />
          ) : (
            <Redirect to={{ pathname: '/' }} />
          );
        }}
      />
    );
  };

  return (
    <Switch>
      <ClientRoute path="/painel/" component={MainScreen} />

      <ClientRoute component={NotFound} />
    </Switch>
  );
};

export default ClientRoutes;
