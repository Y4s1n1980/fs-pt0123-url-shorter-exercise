import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from '../components/Register';
import Login from '../components/Login';
import Panel from '../components/Panel';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/panel" component={Panel} />
      </Switch>
    </Router>
  );
};

export default Routes;



