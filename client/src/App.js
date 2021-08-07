import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Navbar from './components/Navbar';
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
       <>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={SearchDrinks} />
            <Route exact path='/saved' component={SavedDrinks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
