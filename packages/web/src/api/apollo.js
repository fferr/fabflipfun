import { createApolloClient } from 'commons';

export function getApolloClient() {
  return createApolloClient(`${process.env.REACT_APP_WS_URL}/graphql`);
}
