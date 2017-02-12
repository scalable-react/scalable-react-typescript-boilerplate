import path from 'path';
import env from 'node-env-file';
import ApolloClient, {
  createNetworkInterface,
} from 'apollo-client';

env(path.join(process.cwd(), '.env'));

declare var window: {
  __APOLLO_STATE__: string,
};

const uri = process.env.API_URL || 'http://localhost:1337/api';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri,
  }),
  initialState: typeof window !== 'undefined' ? window.__APOLLO_STATE__ : null, // eslint-disable-line
  ssrForceFetchDelay: 100,
});

export default client;
