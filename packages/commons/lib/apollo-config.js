import { ApolloProvider, ApolloClient, ApolloLink } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import React from "react";

export function ApolloClientWrapper({ client, children }) {
  return /*#__PURE__*/ React.createElement(
    ApolloProvider,
    {
      client: client,
    },
    children
  );
}
