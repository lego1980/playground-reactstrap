import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ExampleAlert1, ExampleAlert2, ExampleAlert3 }  from './components/ExampleAlert';
import ExampleBadge1 from './components/ExampleModuleBadge';
import { ExampleBreadcrumb1, ExampleBreadcrumb2 }  from './components/ExampleBreadcrumb';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reactstrap
          </a>
          <ExampleAlert1 />
          <ExampleAlert2 />
          <ExampleAlert3 />
          <ExampleBadge1 />
          <ExampleBreadcrumb1 />
          <ExampleBreadcrumb2 />
        </header>
      </div>
    );
  }
}

export default App;
