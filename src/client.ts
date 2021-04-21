import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://graphql.country/graphql',
  cache: new InMemoryCache()
});

export default apolloClient;