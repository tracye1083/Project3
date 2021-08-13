import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchDrinks from './components/SearchDrinks';
import SavedDrinks from './pages/SavedDrinks';
import HomePage from './pages/HomePage';

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
          
          <Switch>
            <Route exact path = '/' component={HomePage} />
            <Route exact path='/saved' component={SavedDrinks} />
            <Route exact path='/search' component={SearchDrinks} />
          </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
