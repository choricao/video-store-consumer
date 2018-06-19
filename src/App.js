import React, { Component } from 'react';
import './App.css';
import MovieCollection from './components/MovieCollection.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      isMovieCollectionVisible: false,
    };
  }

  showMovieCollection = () => {
    if (this.state.isMovieCollectionVisible) {
      return (
        <MovieCollection />
      );
    }
  }

  changeMovieCollectionVisibility = () => {
    this.setState({
      isMovieCollectionVisible: true,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Video Store</h1>
        <button onClick={this.changeMovieCollectionVisibility}>Show Movie Library</button>
        {this.showMovieCollection()}
      </div>
    );
  }
  
}

export default App;
