import React, { Component } from 'react';
import Search from './components/UI/Search/Search';
import Login from './containers/Auth/Login/Login';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Welcome to Syspay</h1>
        <Search/>
        <Login/>
      </div>
    );
  }
}

export default App;
