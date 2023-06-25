import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; 
import RegisterPage from './pages/RegisterPage'; 
import PanelLayout from './layouts/PanelLayout';
import DashboardPage from './pages/Panel/DashboardPage';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Rutas para autenticación */}
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />

        {/* Rutas protegidas del panel */}
        <Route path="/panel">
          <PanelLayout>
            <Route exact path="/panel" component={DashboardPage} />
            {/* Otras rutas del panel */}
          </PanelLayout>
        </Route>

        {/* Ruta por defecto (redirigir a /login) */}
        <Route component={() => <Redirect to="/login" />} />
      </Switch>
    </Router>
  );
};

export default App;


