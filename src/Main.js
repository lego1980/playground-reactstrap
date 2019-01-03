//base
import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';

//requried for reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="Main">
          <header className="Main-header">
            <img src={logo} className="Main-logo" alt="logo" />
            <p>
              Edit <code>src/Main.js</code> and save to reload.
            </p>
          </header>
        </div>        
      </div>
    );
  }
}

export default Main;
