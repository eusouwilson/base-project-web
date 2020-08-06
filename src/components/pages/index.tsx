import React from 'react';

import { Switch } from 'react-router-dom';
import CustomRoute from '../shared/routes';

import SignIn from './public/signin';
import AdminPage from './admin';
import PublicPage from './public';
import RouteError from 'errors/routeError';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <CustomRoute path="/" exact component={SignIn} />
        <CustomRoute path="/admin" component={AdminPage} isPrivate />
        <CustomRoute path="/public" component={PublicPage} isPrivate />

        <CustomRoute path="/" component={RouteError} />
      </Switch>
    );
  }
}
export default Routes;
