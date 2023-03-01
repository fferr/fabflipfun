import { createSocketConnection } from "./websocket.js";
import { createApolloClient, ApolloClientWrapper } from "./apollo-config.js";
import { GET_VIDEOS, useVideosQuery } from "./queries.js";

export {
  createSocketConnection,
  createApolloClient,
  ApolloClientWrapper,
  GET_VIDEOS,
  useVideosQuery,
};
