import React, { Component } from 'react';
import EditUsers from './containers/Edit Users/EditUsers';
import classes from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//"navbar navbar-expand-sm navbar-light bg-primary"

class App extends Component {
    render() {
      return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary" >
                <a className="navbar-brand" style={{color: 'white'}}>Sysco</a>
                <ul className="navbar-nav ml-auto">
                    <li><i className="nav-item nav-link fas fa-user" style={{color: 'white', display: 'flex', flexFlow: 'row'}}> User</i></li>
                    <li><i className="nav-item nav-link fas fa-power-off"  style={{color: 'white', display: 'flex', flexFlow: 'row'}}></i></li>
                </ul>
            </nav>
          <h1 style={{textAlign: 'center'}}>Welcome to Syspay</h1>
          <EditUsers/>
        </div>
      );
  }
}

export default App;
