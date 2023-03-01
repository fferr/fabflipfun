import { ApolloProvider, ApolloClient, ApolloLink } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import React from "react";

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization:
        "Bearer 8147d6184c4912d454862fbd0f95e581253f9bfeb0d78cc8340dade469a4c55070c8d557781f8bf4743f0d8849b3c377693aa83808a473132db7451456d6cacaa874cb6b8e160595f0537ff4da92b6278923784cf179c29ab883bf9f70e5068eff89262962dad3f3dc11edaa79d2f8d10f7a8782695515df0130df638c579118",
    },
  }));

  return forward(operation);
});

export function createApolloClient(clientUrl) {
  const link = new HttpLink({
    uri: clientUrl,
  });

  const client = new ApolloClient({
    cache,
    // link: link.concat(authLink),
    link: ApolloLink.from([authMiddleware, link]),
  });

  return client;
}

export function ApolloClientWrapper({ client, children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
