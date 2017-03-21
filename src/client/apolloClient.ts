import { ApolloClient, createNetworkInterface } from 'apollo-client';

declare var window: {
  __INITIAL_STATE__: string,
};

const uri = process.env.API_URL || 'http://0.0.0.0:1338/api';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri,
  }),
  initialState: typeof window !== 'undefined' ? window.__INITIAL_STATE__ : null, // eslint-disable-line
  ssrForceFetchDelay: 100,
});

export default client;
