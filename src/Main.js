//base
import React, { Component } from 'react';
import './Main.css';

//requried for reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//core components
import MainLogo from './components/MainLogo';
import MainNavbar from './components/MainNavbar';

class Main extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <div className="Main">
          <header className="Main-header">
            <MainLogo alt="ReactStrap Body"/>
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
