import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthClientScreen from 'src/screens/auth/auth.component';
import NotFound from 'src/screens/error/404/404.component';

import { IProps } from './guest.type';

export default class GuestRoutes extends React.PureComponent<IProps> {
  private GuestRoute = ({ component: Component, ...rest }: any) => (
    <Route
      {...rest}
      render={propsComponent =>
        !this.props.user ? (
          <Component {...propsComponent} />
        ) : (
          <Redirect to={{ pathname: '/painel/' }} />
        )
      }
    />
  );

  public render() {
    const { user } = this.props;
    const GuestRoute = this.GuestRoute;

    return (
      <Switch>
        <GuestRoute path="/" exact component={AuthClientScreen} />

        {!user && <GuestRoute component={NotFound} />}
      </Switch>
    );
  }
}
