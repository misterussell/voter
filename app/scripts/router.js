import React from 'react';

import { Route, Router, hashHistory } from 'react-router';

import Nav from './components/Nav';

const router = (
  <Router history={hashHistory}>
    <Route path='/' components={Nav}/>
  </Router>
);

export default router;
