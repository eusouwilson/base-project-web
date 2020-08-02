import React from 'react';

import { Switch, BrowserRouter } from 'react-router-dom';
import Route from '../shared/routes';

import SignIn from './public/signin';
import AdminPage from './admin';
import PublicPage from './public';
import RouteError from 'errors/routeError';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/admin" component={AdminPage} isPrivate />
        <Route path="/public" component={PublicPage} isPrivate />

        <Route path="/" component={RouteError} />
      </Switch>
    </BrowserRouter>
  );
}
