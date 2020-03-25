import React from 'react';
import { connect } from 'react-redux';

import { store, IReduxState } from 'src/store';
import { UPDATE_CONNECTION } from 'src/store/config/types';

import { IProps } from './network.type';
import { Wrapper, Text } from './network.style';

class NetworkDetector extends React.PureComponent<IProps> {
  public componentDidMount() {
    this.handleConnectionChange();
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this.handleConnectionChange);
  }

  public componentWillUnmount() {
    window.removeEventListener('online', this.handleConnectionChange);
    window.removeEventListener('offline', this.handleConnectionChange);
  }

  private syncData = async () => {
    const { connected } = this.props;

    if (connected) {
      console.log('Syncing data...');
    }
  };

  private handleConnectionChange = () => {
    const { connected } = this.props;

    if (navigator.onLine) {
      const webPing = setInterval(() => {
        fetch('//google.com', {
          mode: 'no-cors',
        })
          .then(() => {
            if (!connected) this.syncData();
            store.dispatch({
              type: UPDATE_CONNECTION,
              payload: true,
            });
            return clearInterval(webPing);
          })
          .catch(() => {
            store.dispatch({
              type: UPDATE_CONNECTION,
              payload: false,
            });
          });
      }, 2000);
      return;
    }

    store.dispatch({
      type: UPDATE_CONNECTION,
      payload: false,
    });
  };

  public render() {
    const { connected } = this.props;

    return !connected ? (
      <Wrapper>
        <Text>
          Você não está conectado na internet. Algumas informações podem estar
          desatualizadas.
        </Text>
      </Wrapper>
    ) : null;
  }
}

const mapStateToProps = (state: IReduxState) => ({
  connected: state.config.connected,
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(NetworkDetector);
