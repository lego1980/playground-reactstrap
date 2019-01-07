//base
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Main.css';

//requried for reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//core components
import MainNavbar from './components/MainNavbar';

//pages components
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Error from './pages/Error';
import Account from './pages/Account';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNavbar />
          <div className="Main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" exact component={About} /> 
            <Route path="/register/" exact component={Register} />
            <Route path="/account/" exact component={Account} />
            <Route component={Error} />   
          </Switch>
          { 
            /*
            <header className="Main-header">
            <MainLogo alt="ReactStrap Body"/>
            <p>
              Edit <code>src/Main.js</code> and save to reload.
            </p>
            </header>
            */ 
          }
          </div>
        </div>         
      </BrowserRouter>
    );
  }
}

export default Main;
