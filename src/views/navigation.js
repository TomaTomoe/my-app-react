import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <ul className="app-nav">
        <li className="nav-active">About Me</li>
        <li>Portfolio</li>
        <li>Contacts</li>
      </ul>
    );
  }
}

export default Navigation;
