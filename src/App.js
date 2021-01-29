/*global chrome*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './views/Toolbar/Toolbar.js'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    
    const {document, window} = this.props
    
    const body = document.body
    body.style.backgroundColor = 'transparent'
    console.log('body', body)

    return (
      <div className="App">
        <Toolbar />
      </div>
    );
  }
}

export default App;
