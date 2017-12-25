import React, { Component } from 'react';
import Button from './button.js';
import './main.css';

import logoGit from './img/logo-git.png';
import logoJs from './img/logo-js.png';
import logoReact from './img/logo-react.png';
import logoWp from './img/logo-webpack.png';
import logoLess from './img/logo-less.png';
import logoSass from './img/logo-sass.png';
import logoAjax from './img/logo-ajax.png';
import logoGulp from './img/logo-gulp.png';
import logoStylus from './img/logo-stylus.png';
import logoBs from './img/logo-bootstrap.png';
import logoJq from './img/logo-jquery.gif';
import logoJira from './img/logo-jira.png';

class Main extends Component {
  render() {
    return (
      <main className="App-main">
        <section className="section-first-bg">
          <div className="section-first">
            <h1 className="app-title">Hello! Welcome to<br />my personal page</h1>
            <p className="app-under_title">Here you have a chance<br />to get to know me</p>
            <Button />
          </div>
        </section>
        <section>
          <h2 className="section-title">I, Valentina Denysiuk, is pleased to welcome You here.</h2>
          <p className="my-objective">My goal is to make the most of my potential
          by heloing people embody their dream of web projects. So maybe you also have a grand idea
          that needs virtualization? Or, you are looking for a person who would take on the
          development of the front-end in your team? Then, maybe you are looking for me ;)</p>
          <Button />
          <Button />
        </section>
        <section>
          <h2 className="section-title">Stack of my skills</h2>
          <p>Here you can find the list of my skills. And click the button below to see the result of their application</p>
          <div className="skills-logo">
            <div><a href="https://git-scm.com/documentation" target="_blank" rel="noopener noreferrer"><img src={logoGit} alt="to git documentation"/></a></div>
            <div><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src={logoJs} alt="to JavaScript documentation"/></a></div>
            <div><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={logoReact} alt="to React documentation"/></a></div>
            <div><a href="https://webpack.github.io/docs/" target="_blank" rel="noopener noreferrer"><img src={logoWp} alt="to webpack documentation"/></a></div>
            <div><a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer"><img src={logoLess} alt="to LESS documentation"/></a></div>
            <div><a href="http://sass-lang.com/documentation/" target="_blank" rel="noopener noreferrer"><img src={logoSass} alt="to SASS documentation"/></a></div>
            <div><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX" target="_blank" rel="noopener noreferrer"><img src={logoAjax} alt="to AJAX documentation"/></a></div>
            <div><a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer"><img src={logoGulp} alt="to Gulp documentation"/></a></div>
            <div><a href="http://stylus-lang.com/" target="_blank" rel="noopener noreferrer"><img src={logoStylus} alt="to Stylus documentation"/></a></div>
            <div><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img src={logoBs} alt="to Bootstrap documentation"/></a></div>
            <div><a href="https://api.jquery.com/" target="_blank" rel="noopener noreferrer"><img src={logoJq} alt="to jQuery documentation"/></a></div>
            <div><a href="https://www.atlassian.com/" target="_blank" rel="noopener noreferrer"><img src={logoJira} alt="to Atlassian page"/></a></div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
