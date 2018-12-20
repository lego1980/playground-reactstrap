import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ExampleAlert1, ExampleAlert2, ExampleAlert3 }  from './components/ExampleAlert';
import ExampleBadge1 from './components/ExampleModuleBadge';
import ExampleButton1 from './components/ExampleModuleButton';
import ExampleButtonGroup1 from './components/ExampleModuleButtonGroup';
import { ExampleBreadcrumb1, ExampleBreadcrumb2 }  from './components/ExampleBreadcrumb';
import { ExampleCard1 }  from './components/ExampleCard';
import ExampleDropdown1  from './components/ExampleModuleDropdown';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
        </div>
        <ExampleAlert1 />
        <ExampleAlert2 />
        <ExampleAlert3 />
        <ExampleBadge1 />
        <ExampleBreadcrumb1 />
        <ExampleBreadcrumb2 />
        <ExampleButton1 />
        <ExampleButtonGroup1 />
        <ExampleCard1 /> 
        <ExampleDropdown1 />      
      </div>
    );
  }
}

export default App;
