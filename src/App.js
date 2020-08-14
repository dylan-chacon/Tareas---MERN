import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import ProjectState from './context/proyectos/projectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alert/alertState';

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
              <Route exact path='/proyectos' component={Proyectos} />
            </Switch>
          </Router>
        </AlertState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
