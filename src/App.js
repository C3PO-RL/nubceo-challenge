import React from 'react';
import Container from './components/Container';
import { ProtectedRoute } from './components/ProtectedRoute';

import Band from './components/Band';
import LandingPage from './components/LandingPage';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path={'/login'} exact component={LandingPage} />
        <ProtectedRoute path={'/home'} exact component={Container} />
        <Route path={'/band/:band'} component={Band} />
        <Redirect to={'/home'} />
      </Switch>
    </div>
  );
}

export default App;
