import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import UserSettings from '../components/UserSettings';

const UsersRoutes = () => {
  return (
    <Switch>
      <Route exact path="/users/profile" component={UserProfile} />
      <Route exact path="/users/settings" component={UserSettings} />
    </Switch>
  );
};

export default UsersRoutes;

