import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { IReduxState } from 'src/store';

import GuestRoutes from './guest/guest.component';
import ClientRoutes from './client/client.component';
import { IProps } from './routes.type';

class Routes extends React.PureComponent<IProps> {
  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { user } = this.props;
    return (
      <>
        <GuestRoutes user={user} />
        <ClientRoutes user={user} />
      </>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(withRouter(Routes));
