import React, { Component } from 'react';
import './App.css';
import MiniDrawer from './components/mini-drawer/mini-drawer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <MiniDrawer title="Hello Admin" />
      </Router>
    );
  }
}

export default App;
