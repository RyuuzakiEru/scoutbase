import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Navigation/Header';

import Home from './components/Home'
import Continent from './components/Continent';
import Countries from './components/Countries';



const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/countries/:code" component={Continent} />
          <Route path="/countries" component={Countries} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
