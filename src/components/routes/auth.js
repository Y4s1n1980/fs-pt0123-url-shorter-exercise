import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default AuthRoutes;

