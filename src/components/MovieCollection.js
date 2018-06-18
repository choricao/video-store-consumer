import React, { Component } from 'react';
import axios from 'axios'
import Movie from './Movie.js'

const URL = "http://localhost:3001/movies"

class MovieCollection extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    axios.get(URL)
    .then((response) => {
      this.setState({
        movies: response.data
      })
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }


  renderMovieList = () => {
    console.log('in render function');
    const movieList = this.state.movies.map((movie) => {
      return (
        <Movie
          key={movie.id}
          title={movie.title}
          // releaseDate={movie.releaseDate}
          // image={movie.image}
          overview={movie.overview}
        />
      );
    });
    console.log('movie list');
    console.log(movieList);
    return movieList;
  }

  render() {
    return (
      <div className="MovieCollection">
        <button onClick={this.renderMovieList}>Show Movie Library</button>
      </div>
    );
  }
}

export default MovieCollection;
