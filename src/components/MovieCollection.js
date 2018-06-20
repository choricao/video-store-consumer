import React, { Component } from 'react';
import axios from 'axios'
import Movie from './Movie.js'
import './MovieCollection.css';

const URL = "http://localhost:3001/movies"

class MovieCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
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
        message: error.message
      })
    });
  }

  renderMovieList = () => {
    const movieList = this.state.movies.map((movie) => {
      return (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          imageURL={movie.image_url}
          overview={movie.overview}
          selectedMovieCallback={this.props.selectedMovieCallback}
          buttonName="Select This Movie"
        />
      );
    });
    return movieList;
  }

  render() {
    return (
      <div className="collection">
        {this.renderMovieList()}
      </div>
    );
  }
}

export default MovieCollection;
