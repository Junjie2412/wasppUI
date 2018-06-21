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
import OPCODefaults from './containers/Tools/OPCODefaults/OPCODefaults';
import classes from './App.css';
import Notification from "./components/UI/Notification/Notification";
import connect from "react-redux/es/connect/connect";
import * as actions from './store/actions/index';


class App extends Component {


    render() {

        const notifications = this.props.notifications.map(data => (
            <Notification strong={data.strong} text={data.text} close={this.props.onCloseNotifications} closeAll={this.props.onCloseAllNotifications}/>
        ));

      return (
        <div className={classes.App}>
            {notifications}
          <Navbar />  
          <Toolbar/>
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

const mapStateToProps = state => {
    return {
        notifications: state.notifications.notifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseNotifications: () => dispatch(actions.removeNotification()),
        onCloseAllNotifications: () => dispatch(actions.removeAllNotifications())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
