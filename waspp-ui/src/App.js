import React, { Component } from 'react';
import EditUsers from './containers/Edit Users/EditUsers';

class App extends Component {
    render() {
      return (
        <div>
          <h1 style={{textAlign: 'center'}}>Welcome to Syspay</h1>
          <EditUsers/>
        </div>
      );
  }
}

export default App;
