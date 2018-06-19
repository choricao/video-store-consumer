import React, { Component } from 'react';
import './App.css';
import MovieCollection from './components/MovieCollection';
import Movie from './components/Movie';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();

    this.state = {
      selectedMovie: "",
    }
  }

  setSelectedMovie = (title) => {
    this.setState({
      selectedMovie: title,
    });
  }

  render() {
    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    )

    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/library">Library</Link></li>
            <li>Selected Movie: {this.state.selectedMovie}</li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home} />
          <Route
            path="/library"
            render={(props) => <MovieCollection {...props} selectedMovieCallback={this.setSelectedMovie} />}
            />
        </div>
      </Router>
    );
  }

}

export default App;
