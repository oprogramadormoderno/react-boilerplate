import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainScreen from 'src/screens/main/main.component';
import NotFound from 'src/screens/error/404/404.component';

import { IProps } from './client.type';

export default class ClientRoutes extends React.PureComponent<IProps> {
  private ClientRoute = ({ component: Component, ...rest }: any) => {
    const hasAccess = !!this.props.user;

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

  public render() {
    const { user } = this.props;
    const ClientRoute = this.ClientRoute;

    return (
      <Switch>
        <ClientRoute path="/painel/" component={MainScreen} />

        {user && <ClientRoute component={NotFound} />}
      </Switch>
    );
  }
}
