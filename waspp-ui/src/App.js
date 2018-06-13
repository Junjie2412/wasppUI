import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Toolbar from './components/UI/Navigation/Toolbar/Toolbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from "./containers/Auth/Login/Login";
import EditUsers from "./containers/Edit Users/EditUsers";
import PayrollProcessing from "./containers/Payroll Processing/PayrollProcessing";
import Reports from "./containers/Reports/Reports";
import Tools from "./containers/Tools/Tools";
import Help from "./containers/Help/Help";
import classes from '../node_modules/bootstrap/dist/css/bootstrap.min.css';


//"navbar navbar-expand-sm navbar-light bg-primary"

class App extends Component {
    render() {
      return (
        <div>
          <Navbar />  
          <Toolbar/>
          <h1 style={{textAlign: 'center', marginTop: '90px'}}>Welcome to Syspay</h1>
            <Switch>
                <Route path="/payrollProcessing" exact component={PayrollProcessing}/>
                <Route path="/reports" exact component={Reports}/>
                <Route path="/tools" exact component={Tools}/>
                <Route path="/help" exact component={Help}/>
                <Route path="/editUsers" exact component={EditUsers}/>
                <Route path="/" component={Login}/>
                <Redirect to="/"/>
            </Switch>
        </div>
        
      );
  }
}

export default App;
