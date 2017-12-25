import React, { Component } from 'react';
import Navigation from './navigation.js';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-title">Valentina Denysiuk</h1>
        <Navigation />
      </header>
    );
  }
}

export default Header;
