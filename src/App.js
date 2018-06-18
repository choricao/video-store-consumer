import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCollection from './components/MovieCollection.js'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Video Store</h1>
        </header>

        <MovieCollection />
        
      </div>
    );
  }
}

export default App;
