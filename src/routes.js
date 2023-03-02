import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repositories from './pages/Repositories';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/repositories">
          <Repositories />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
