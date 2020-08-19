import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProjectState from './context/proyectos/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
import tokenAuth from './config/token';
import PrivateRoute  from './components/routes/pivateRoute';

//revisar token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
                <PrivateRoute exact path='/proyectos' component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
