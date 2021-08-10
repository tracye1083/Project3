import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchDrinks from './pages/SearchDrinks';
import SavedDrinks from './pages/SavedDrinks';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar/>
          <Hero/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
