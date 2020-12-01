import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from '../src/components/Signup'
import Main from '../src/components/Main'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'


function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login}/>
            <Route path='/register' component={Signup} />
            <PrivateRoute path='/main' component={Main} exact />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
