import React, { Component } from 'react';
import Header from './views/header.js';
import Main from './views/main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
