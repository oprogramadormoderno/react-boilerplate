import React from 'react';
import { connect } from 'react-redux';

import { IReduxState } from '@store';

import { IProps } from './sw.type';
import { Wrapper, Button } from './sw.style';

const SW: React.FC<IProps> = props => {
  const { serviceWorkerUpdated, serviceWorkerRegistration } = props;

  const updateServiceWorker = () => {
    const registrationWaiting = serviceWorkerRegistration?.waiting;

    if (registrationWaiting) {
      registrationWaiting.postMessage({ type: 'SKIP_WAITING' });

      registrationWaiting.addEventListener('statechange', (e: any) => {
        if (e?.target?.state === 'activated') {
          window.location.reload();
        }
      });
    }
  };

  return serviceWorkerUpdated ? (
    <>
      <Wrapper>
        Temos uma nova versão disponível.
        <Button onClick={updateServiceWorker}>Atualizar</Button>
      </Wrapper>
    </>
  ) : null;
};

const mapStateToProps = (state: IReduxState) => ({
  serviceWorkerUpdated: state.config.serviceWorkerUpdated,
  serviceWorkerRegistration: state.config.serviceWorkerRegistration,
});

export default connect(mapStateToProps)(SW);
