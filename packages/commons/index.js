import { createSocketConnection } from "./src/websocket.js";
import { createApolloClient, ApolloClientWrapper } from "./src/apollo-config.js";
import { GET_VIDEOS, useVideosQuery } from "./src/queries.js";

export {
  createSocketConnection,
  createApolloClient,
  ApolloClientWrapper,
  GET_VIDEOS,
  useVideosQuery,
};
