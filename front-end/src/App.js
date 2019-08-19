import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
});

const  App = () =>  {
  return (
    <ApolloProvider client={client}>
    <div>
      <h2>Apollo Client</h2>
    </div>
  </ApolloProvider>
  );
}

export default App;
