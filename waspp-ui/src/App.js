import React, { Component } from 'react';
import EditUsers from './containers/Edit Users/EditUsers';
import classes from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';

//"navbar navbar-expand-sm navbar-light bg-primary"

class App extends Component {
    render() {
      return (
        <div>
          <Navbar />
          <h1 style={{textAlign: 'center'}}>Welcome to Syspay</h1>
          <EditUsers/>
        </div>
      );
  }
}

export default App;
