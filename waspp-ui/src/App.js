import React, { Component } from 'react';
import Toolbar from './components/UI/Navigation/Toolbar/Toolbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from "./containers/Auth/Login/Login";
import EditUsers from "./containers/Edit Users/EditUsers";

//"navbar navbar-expand-sm navbar-light bg-primary"

class App extends Component {
    render() {
      return (
        <div>
          <Toolbar/>
          <h1 style={{textAlign: 'center', marginTop: '70px'}}>Welcome to Syspay</h1>
            <Switch>
                <Route path="/editUsers" exact component={EditUsers}/>
                <Route path="/" component={Login}/>
                <Redirect to="/"/>
            </Switch>
        </div>
      );
  }
}

export default App;
