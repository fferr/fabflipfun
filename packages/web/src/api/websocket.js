import { createSocketConnection } from 'commons';
const WS_ENDPOINT = process.env.REACT_APP_WS_URL;

export function createWebsocketConnection() {
  createSocketConnection(WS_ENDPOINT);
}
