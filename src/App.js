import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'aritz'
  }

  usernameChangedHandler = (event) => {
    //cuando escribimos en input:
      //changed --> usernameChangedHandler --> event --> setState(username)
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="No se modifica"/>
      </div>
    );
  }
}

export default App;

