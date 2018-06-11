import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';
import Toolbar from './components/UI/Navigation/Toolbar/Toolbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from "./containers/Auth/Login/Login";
import EditUsers from "./containers/Edit Users/EditUsers";

//"navbar navbar-expand-sm navbar-light bg-primary"

class App extends Component {
    render() {
      return (
        <div>
          <Navbar />  
          <Toolbar/>
          <h1 style={{textAlign: 'center', marginTop: '70px'}}>Welcome to Syspay</h1>
            <Switch>
                <Route path="/editUsers" exact component={EditUsers}/>
                <Route path="/" component={Login}/>
                <Redirect to="/"/>
            </Switch>
            <Table />
        </div>
        
      );
  }
}

export default App;
