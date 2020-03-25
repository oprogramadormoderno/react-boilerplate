export const UPDATE_CONNECTION = 'UPDATE_CONNECTION';
export const SW_INIT = 'SW_INIT';
export const SW_UPDATE = 'SW_UPDATE';

export interface IReducerConfigState {
  connected: boolean;
  serviceWorkerInitialized: boolean;
  serviceWorkerRegistration?: ServiceWorkerRegistration;
  serviceWorkerUpdated: boolean;
}

export interface IUpdateConnection {
  type: typeof UPDATE_CONNECTION;
  payload: boolean;
}

export interface ISwInit {
  type: typeof SW_INIT;
}

export interface ISwUpdate {
  type: typeof SW_UPDATE;
  payload: ServiceWorkerRegistration;
}

export type ConfigActionTypes = IUpdateConnection | ISwInit | ISwUpdate;
