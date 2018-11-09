import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clock: this.props.clock
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.clock}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
