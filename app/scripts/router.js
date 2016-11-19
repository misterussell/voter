import React from 'react';

import { Route, Router, hashHistory } from 'react-router';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Search from './components/Search';
import Votes from './components/Votes';

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <Route path='register' component={Register} />
      <Route path='login' component={Login} />
      <Route path='search' component={Search} />
      <Route path='votes' component={Votes} />
    </Route>
  </Router>
);

export default router;
