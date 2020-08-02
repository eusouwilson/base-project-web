import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouterWrapper({
  isPrivate = false,
  component: Component,
  ...rest
}: any) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" exact={true} />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/public" />;
  }

  return <Route {...rest} component={Component} />;
}
