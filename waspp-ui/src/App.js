import React, { Component } from 'react';
import Banner from './components/Banner/Banner';
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from "./containers/Auth/Login/Login";
import EditUsers from "./containers/Edit Users/EditUsers";
import PayrollProcessing from "./containers/Payroll Processing/PayrollProcessing";
import Reports from "./containers/Reports/Reports";
import Tools from "./containers/Tools/Tools";
import Help from "./containers/Help/Help";
import OPCODefaults from './containers/Tools/OPCODefaults/OPCODefaults';
import classes from './App.css';
import Toolbar from "./components/UI/Navigation/Toolbar/Toolbar";


class App extends Component {

    render() {

      return (
        <div className={classes.App}>
            <div className={classes.Background}/>
            <Banner />
                <Switch>
                    <Route path="/payrollProcessing" exact component={Toolbar}/>
                    <Route path="/reports" exact component={Toolbar}/>
                    <Route path="/tools" component={Toolbar}/>
                    <Route path="/help" exact component={Toolbar}/>
                    <Route path="/editUsers" exact component={Toolbar}/>
                    <Route path="/tools/OPCODefaults" exact component={Toolbar}/>
                </Switch>
                <Switch>
                    <Route path="/payrollProcessing" exact component={PayrollProcessing}/>
                    <Route path="/reports" exact component={Reports}/>
                    <Route path="/tools" component={Tools}/>
                    <Route path="/help" exact component={Help}/>
                    <Route path="/editUsers" exact component={EditUsers}/>
                    <Route path="/" component={Login}/>
                    <Route path="/tools/OPCODefaults" exact component={OPCODefaults}/>
                    <Redirect to="/"/>
                </Switch>
        </div>
        
      );
  }
}

export default App;
